// Extrai todas as fontes (fonte principal de cada rodada + fontes de
// investigação) dos cenários e normaliza em cards pro jogo "Fonte ou
// Boato?". Não reescreve nenhum conteúdo — só reaproveita o que os
// cenários já declaram em `natureza`/`confiavel`/`revelacaoNoFecho`.
//
// Categoria de cada card (3, não 2 — os dois eixos do schema combinados):
//   'documental' — natureza documental (sempre confiável, por definição)
//   'recriada'   — natureza recriada, mas confiavel: true (reconstituição plausível)
//   'boato'      — natureza recriada, confiavel: false

function categoriaDe(fonte) {
  if (fonte.natureza === 'documental') return 'documental'
  return fonte.confiavel === false ? 'boato' : 'recriada'
}

export function extrairCards(cenarios) {
  const cards = []

  for (const cenario of cenarios) {
    for (const rodada of cenario.rodadas) {
      if (rodada.fonte) {
        cards.push({
          id: `${cenario.slug}__${rodada.slug}__principal`,
          trecho: rodada.fonte.texto,
          autor: rodada.fonte.autor,
          acervo: rodada.fonte.acervo,
          categoria: categoriaDe(rodada.fonte),
          revelacaoNoFecho: rodada.fonte.revelacaoNoFecho,
          cenarioTitulo: cenario.titulo,
          rodadaTitulo: rodada.titulo,
        })
      }
      for (const fonte of rodada.investigacao?.fontes ?? []) {
        cards.push({
          id: `${cenario.slug}__${rodada.slug}__${fonte.slug}`,
          trecho: fonte.trecho,
          autor: fonte.autor,
          acervo: fonte.acervo,
          categoria: categoriaDe(fonte),
          revelacaoNoFecho: fonte.revelacaoNoFecho,
          cenarioTitulo: cenario.titulo,
          rodadaTitulo: rodada.titulo,
        })
      }
    }
  }

  return cards
}

// Fisher-Yates seedado (mesmo estilo de lib/simulacao/util.js) — pra dar
// pra reproduzir um baralho específico se precisar depurar, embora o jogo
// em si use Math.random porque aqui não há "turma" pra manter consistente.
export function embaralhar(lista, semente) {
  const copia = [...lista]
  let estado = semente >>> 0
  function proximo() {
    estado = (estado * 1664525 + 1013904223) >>> 0
    return estado / 4294967296
  }
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(proximo() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}
