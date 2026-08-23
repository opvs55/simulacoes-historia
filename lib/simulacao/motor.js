import { clamp } from './util.js'
import { multiplicadorCoesao } from './coesao.js'

export function estadoInicial(cenario) {
  const indicadores = {}
  for (const indicador of cenario.indicadores) {
    indicadores[indicador.slug] = indicador.inicial
  }
  return { rodada: 0, indicadores, historico: [{ rodada: 0, indicadores: { ...indicadores } }] }
}

// Implementa a fórmula da seção 5.2 do GDD, com uma leitura: o texto da
// seção descreve `amplitude` como um teto ("limita quanto uma única rodada
// pode mexer") — então aqui ela funciona como *clamp* do efeito ponderado,
// não como multiplicador direto. Multiplicar deltas de poucos pontos por uma
// amplitude de ~25 estourava a escala 0-100 em uma única rodada, o oposto do
// que a seção 5.2 descreve. Pesos, deltas e amplitude continuam estimativas
// (seção 16.3) — ajustar aqui é o trabalho da Fase 2 do roadmap.
export function aplicarRodada(estadoAnterior, decisoes, cenario, rodadaSlug) {
  const rodada = cenario.rodadas.find((candidata) => candidata.slug === rodadaSlug)
  if (!rodada) throw new Error(`Rodada desconhecida: ${rodadaSlug}`)

  const papeisPorSlug = Object.fromEntries(cenario.papeis.map((papel) => [papel.slug, papel]))
  const decisoesPorPapel = agruparPorPapel(decisoes)
  const pesoTotal = decisoes.reduce(
    (soma, decisao) => soma + (papeisPorSlug[decisao.papelSlug]?.peso ?? 0),
    0
  )

  const indicadores = { ...estadoAnterior.indicadores }

  if (pesoTotal > 0) {
    const amplitude = rodada.amplitude ?? Infinity
    for (const indicador of cenario.indicadores) {
      let numerador = 0
      for (const decisao of decisoes) {
        const papel = papeisPorSlug[decisao.papelSlug]
        if (!papel) continue
        const delta = encontrarOpcao(rodada, decisao)?.deltas?.[indicador.slug] ?? 0
        if (delta === 0) continue
        const multiplicador = multiplicadorCoesao(papel.bloco, decisoesPorPapel[decisao.papelSlug])
        numerador += delta * papel.peso * multiplicador
      }
      const efeito = clamp(numerador / pesoTotal, -amplitude, amplitude)
      indicadores[indicador.slug] = clamp(indicadores[indicador.slug] + efeito, 0, 100)
    }
  }

  aplicarEfeitosFixos(indicadores, rodada.efeitosFixos)

  return {
    rodada: estadoAnterior.rodada + 1,
    indicadores,
    historico: [...estadoAnterior.historico, { rodada: rodadaSlug, indicadores: { ...indicadores } }],
  }
}

// Efeitos que acontecem decida a turma o que decidir (seção 16.2) — marcos
// históricos fixos, para que a turma não consiga, por exemplo, impedir a
// greve geral de existir só porque caiu maioria de papéis de elite.
function aplicarEfeitosFixos(indicadores, efeitosFixos) {
  if (!efeitosFixos) return
  for (const [slug, delta] of Object.entries(efeitosFixos)) {
    if (slug in indicadores) {
      indicadores[slug] = clamp(indicadores[slug] + delta, 0, 100)
    }
  }
}

function encontrarOpcao(rodada, decisao) {
  const opcoes = rodada.opcoesPorPapel?.[decisao.papelSlug] ?? []
  return opcoes.find((opcao) => opcao.slug === decisao.opcaoSlug)
}

function agruparPorPapel(decisoes) {
  const grupos = {}
  for (const decisao of decisoes) {
    const grupo = grupos[decisao.papelSlug] ?? (grupos[decisao.papelSlug] = [])
    grupo.push(decisao)
  }
  return grupos
}
