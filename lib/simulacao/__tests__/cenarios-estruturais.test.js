import { test } from 'node:test'
import assert from 'node:assert/strict'
import { estadoInicial, aplicarRodada } from '../motor.js'
import { resolverFontes } from '../../juri/extrair.js'
import saoPaulo1917 from '../../../cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '../../../cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '../../../cenarios/o-plano-que-nao-existia.js'
import coroaECofre from '../../../cenarios/coroa-e-cofre.js'

// Validação estrutural genérica — roda contra QUALQUER cenário que sigam o
// contrato de cenarios/schema.md, não só o de 1917. Cresce automaticamente
// quando um cenário novo é adicionado à lista abaixo.
const cenarios = [saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia, coroaECofre]

for (const cenario of cenarios) {
  test(`[${cenario.slug}] tem entre 6 e 7 papéis (como as duas referências da seção 7 e 8 do GDD), cada um com peso, bloco e cota`, () => {
    // 6 ou 7 porque é a faixa que o próprio GDD usa: 6 em "A Coroa e o Cofre"
    // (seção 7.1), 7 em "São Paulo, 1917" (seção 8.1) — não é um número fixo.
    assert.ok(cenario.papeis.length >= 6 && cenario.papeis.length <= 7, `${cenario.slug} tem ${cenario.papeis.length} papéis (esperado 6-7)`)
    for (const papel of cenario.papeis) {
      assert.ok(['elite', 'mediador', 'popular'].includes(papel.bloco), `${papel.slug} tem bloco inválido: ${papel.bloco}`)
      assert.ok(papel.peso > 0, `${papel.slug} tem peso inválido`)
      assert.ok(papel.cota > 0, `${papel.slug} tem cota inválida`)
    }
  })

  test(`[${cenario.slug}] toda rodada tem 2-3 opções para os 7 papéis, com deltas em indicadores reais`, () => {
    const papeisSlugs = cenario.papeis.map((papel) => papel.slug)
    const indicadoresSlugs = new Set(cenario.indicadores.map((indicador) => indicador.slug))

    for (const rodada of cenario.rodadas) {
      assert.deepEqual(
        Object.keys(rodada.opcoesPorPapel).sort(),
        [...papeisSlugs].sort(),
        `[${cenario.slug}] '${rodada.slug}' não tem opções para exatamente os 7 papéis`
      )
      for (const [papelSlug, opcoes] of Object.entries(rodada.opcoesPorPapel)) {
        assert.ok(opcoes.length >= 2 && opcoes.length <= 3, `[${cenario.slug}] '${rodada.slug}' → '${papelSlug}' tem ${opcoes.length} opções (esperado 2-3)`)
        const slugsUnicos = new Set(opcoes.map((opcao) => opcao.slug))
        assert.equal(slugsUnicos.size, opcoes.length, `[${cenario.slug}] '${rodada.slug}' → '${papelSlug}' tem opcaoSlug duplicado`)
        for (const opcao of opcoes) {
          assert.ok(opcao.consequencia && opcao.consequencia.length > 0, `[${cenario.slug}] '${rodada.slug}' → '${papelSlug}' → '${opcao.slug}' sem texto de consequência`)
          for (const indicadorSlug of Object.keys(opcao.deltas)) {
            assert.ok(indicadoresSlugs.has(indicadorSlug), `[${cenario.slug}] '${rodada.slug}' → '${papelSlug}' → '${opcao.slug}' mexe em indicador inexistente: '${indicadorSlug}'`)
          }
        }
      }
    }
  })

  test(`[${cenario.slug}] toda opção com evento tem texto e pelo menos 2 reações válidas, com slugs únicos`, () => {
    for (const rodada of cenario.rodadas) {
      for (const [papelSlug, opcoes] of Object.entries(rodada.opcoesPorPapel)) {
        for (const opcao of opcoes) {
          if (!opcao.evento) continue
          const contexto = `[${cenario.slug}] '${rodada.slug}' → '${papelSlug}' → '${opcao.slug}' → evento`
          assert.ok(opcao.evento.texto && opcao.evento.texto.length > 0, `${contexto} sem texto`)
          assert.ok(opcao.evento.reacoes?.length >= 2, `${contexto} tem menos de 2 reações`)
          const slugsUnicos = new Set(opcao.evento.reacoes.map((reacao) => reacao.slug))
          assert.equal(slugsUnicos.size, opcao.evento.reacoes.length, `${contexto} tem slug de reação duplicado`)
          for (const reacao of opcao.evento.reacoes) {
            assert.ok(reacao.texto && reacao.texto.length > 0, `${contexto} → '${reacao.slug}' sem texto`)
            assert.ok(reacao.resultado && reacao.resultado.length > 0, `${contexto} → '${reacao.slug}' sem resultado`)
          }
        }
      }
    }
  })

  test(`[${cenario.slug}] toda fonte declara natureza; documental tem autor; não confiável tem revelação no fecho`, () => {
    for (const rodada of cenario.rodadas) {
      for (const fonte of rodada.investigacao?.fontes ?? []) {
        assert.ok(fonte.natureza === 'documental' || fonte.natureza === 'recriada', `[${cenario.slug}] '${rodada.slug}' → '${fonte.slug}' sem natureza declarada`)
        if (fonte.natureza === 'documental') {
          assert.ok(fonte.autor, `[${cenario.slug}] '${rodada.slug}' → '${fonte.slug}' é documental mas não tem autor/crédito`)
        }
        if (fonte.confiavel === false) {
          assert.ok(fonte.revelacaoNoFecho, `[${cenario.slug}] '${rodada.slug}' → '${fonte.slug}' é boato mas não tem revelacaoNoFecho`)
        }
      }
    }
  })

  test(`[${cenario.slug}] todo destrancaOpcao aponta para uma opção que existe de verdade na rodada`, () => {
    for (const rodada of cenario.rodadas) {
      for (const fonte of rodada.investigacao?.fontes ?? []) {
        if (!fonte.destrancaOpcao) continue
        const existeEmAlgumPapel = fonte.papeis.some((papelSlug) =>
          (rodada.opcoesPorPapel[papelSlug] ?? []).some((opcao) => opcao.slug === fonte.destrancaOpcao)
        )
        assert.ok(existeEmAlgumPapel, `[${cenario.slug}] '${rodada.slug}' → '${fonte.slug}' destranca '${fonte.destrancaOpcao}', que não existe`)
      }
    }
  })

  test(`[${cenario.slug}] efeitosFixos e opções de investigação também só referem papéis e indicadores reais`, () => {
    const papeisSlugs = new Set(cenario.papeis.map((papel) => papel.slug))
    const indicadoresSlugs = new Set(cenario.indicadores.map((indicador) => indicador.slug))
    for (const rodada of cenario.rodadas) {
      for (const indicadorSlug of Object.keys(rodada.efeitosFixos ?? {})) {
        assert.ok(indicadoresSlugs.has(indicadorSlug), `[${cenario.slug}] '${rodada.slug}' efeitosFixos mexe em indicador inexistente: '${indicadorSlug}'`)
      }
      for (const fonte of rodada.investigacao?.fontes ?? []) {
        for (const papelSlug of fonte.papeis) {
          assert.ok(papeisSlugs.has(papelSlug), `[${cenario.slug}] '${rodada.slug}' → '${fonte.slug}' referencia papel inexistente: '${papelSlug}'`)
        }
      }
    }
  })

  test(`[${cenario.slug}] estadoInicial e uma rodada isolada rodam sem erro e sem sair de 0-100`, () => {
    const inicial = estadoInicial(cenario)
    for (const indicador of cenario.indicadores) {
      assert.equal(inicial.indicadores[indicador.slug], indicador.inicial)
    }

    const primeiraRodada = cenario.rodadas[0]
    const primeiroPapel = cenario.papeis[0]
    const primeiraOpcao = primeiraRodada.opcoesPorPapel[primeiroPapel.slug][0]
    const resultado = aplicarRodada(
      inicial,
      [{ papelSlug: primeiroPapel.slug, opcaoSlug: primeiraOpcao.slug }],
      cenario,
      primeiraRodada.slug
    )
    for (const indicador of cenario.indicadores) {
      const valor = resultado.indicadores[indicador.slug]
      assert.ok(valor >= 0 && valor <= 100, `[${cenario.slug}] ${indicador.slug} saiu da faixa 0-100: ${valor}`)
    }
  })

  test(`[${cenario.slug}] toda rodada roda em sequência com um decisor por papel, sem erro e sem sair de 0-100`, () => {
    let estado = estadoInicial(cenario)
    for (const rodada of cenario.rodadas) {
      const decisoes = cenario.papeis.map((papel) => ({
        papelSlug: papel.slug,
        opcaoSlug: rodada.opcoesPorPapel[papel.slug][0].slug,
      }))
      estado = aplicarRodada(estado, decisoes, cenario, rodada.slug)
      for (const indicador of cenario.indicadores) {
        const valor = estado.indicadores[indicador.slug]
        assert.ok(valor >= 0 && valor <= 100, `[${cenario.slug}] após '${rodada.slug}', ${indicador.slug} saiu da faixa 0-100: ${valor}`)
      }
    }
    assert.equal(estado.historico.length, cenario.rodadas.length + 1)
  })

  test(`[${cenario.slug}] tem pergunta, desfecho fixo e ao menos uma pergunta de debate`, () => {
    assert.ok(cenario.pergunta && cenario.pergunta.length > 0, `${cenario.slug} sem pergunta-provocação`)
    assert.ok(cenario.desfecho?.fixo, `${cenario.slug} sem desfecho.fixo`)
    assert.ok(cenario.desfecho?.textoFecho, `${cenario.slug} sem desfecho.textoFecho`)
    assert.ok(cenario.desfecho?.perguntasDebate?.length > 0, `${cenario.slug} sem perguntas de debate`)
  })

  test(`[${cenario.slug}] se tiver perguntasReflexao, são exatamente os 3 níveis do currículo em espiral, na ordem`, () => {
    const reflexao = cenario.desfecho?.perguntasReflexao
    if (!reflexao) return // opcional — nem todo cenário precisa ter
    assert.deepEqual(
      reflexao.map((item) => item.nivel),
      ['Sua experiência', 'O conceito', 'Além desta aula'],
      `${cenario.slug} perguntasReflexao fora da ordem/nomes esperados`
    )
    for (const item of reflexao) {
      assert.ok(item.pergunta && item.pergunta.length > 0, `${cenario.slug} nível '${item.nivel}' sem texto de pergunta`)
    }
  })

  test(`[${cenario.slug}] se tiver juri, as referências resolvem e nenhum lado usa fonte marcada como boato`, () => {
    if (!cenario.juri) return // opcional — nem todo cenário precisa ter
    assert.ok(cenario.juri.pergunta?.length > 0, `${cenario.slug} juri sem pergunta`)
    assert.ok(cenario.juri.lados?.length >= 2, `${cenario.slug} juri com menos de 2 lados`)
    for (const lado of cenario.juri.lados) {
      assert.ok(lado.fontesSlugs?.length > 0, `${cenario.slug} juri → lado '${lado.nome}' sem fontesSlugs`)
      const fontes = resolverFontes(cenario, lado.fontesSlugs) // lança se alguma referência não existir
      for (const fonte of fontes) {
        assert.notEqual(fonte.confiavel, false, `${cenario.slug} juri → lado '${lado.nome}' usa uma fonte marcada como boato (confiavel: false)`)
      }
    }
  })
}
