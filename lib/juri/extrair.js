// Resolve os `fontesSlugs` de cenario.juri em objetos de fonte completos.
// 'principal:<rodadaSlug>' aponta pra rodada.fonte; qualquer outro valor é
// um slug de investigacao.fontes (procurado em todas as rodadas).
export function resolverFontes(cenario, fontesSlugs) {
  return fontesSlugs.map((referencia) => {
    if (referencia.startsWith('principal:')) {
      const rodadaSlug = referencia.slice('principal:'.length)
      const rodada = cenario.rodadas.find((r) => r.slug === rodadaSlug)
      if (!rodada?.fonte) throw new Error(`[${cenario.slug}] juri referencia '${referencia}', sem rodada.fonte`)
      return { ...rodada.fonte, rodadaTitulo: rodada.titulo }
    }
    for (const rodada of cenario.rodadas) {
      const fonte = rodada.investigacao?.fontes?.find((f) => f.slug === referencia)
      if (fonte) return { ...fonte, rodadaTitulo: rodada.titulo }
    }
    throw new Error(`[${cenario.slug}] juri referencia fonte inexistente: '${referencia}'`)
  })
}

export function resolverJuri(cenario) {
  if (!cenario.juri) return null
  return {
    pergunta: cenario.juri.pergunta,
    lados: cenario.juri.lados.map((lado) => ({
      nome: lado.nome,
      fontes: resolverFontes(cenario, lado.fontesSlugs),
    })),
  }
}
