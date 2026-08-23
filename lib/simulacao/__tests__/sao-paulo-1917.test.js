import { test } from 'node:test'
import assert from 'node:assert/strict'
import { estadoInicial, aplicarRodada } from '../motor.js'
import cenario from '../../../cenarios/sao-paulo-1917.js'

// Exercita o motor com conteúdo real (não fixture fictícia) pela primeira
// vez — prova que o cenário escrito à mão bate com o contrato que o motor
// espera (seção 12 do GDD / cenarios/schema.md).

test('estado inicial do cenário real bate com os valores da seção 8.2 do GDD', () => {
  const estado = estadoInicial(cenario)
  assert.equal(estado.indicadores.carestia, 70)
  assert.equal(estado.indicadores.producao, 80)
  assert.equal(estado.indicadores.coesao, 25)
  assert.equal(estado.indicadores.repressao, 40)
  assert.equal(estado.indicadores.opiniao, 45)
})

test('a rodada 1 (preco-do-pao) roda sem erro com uma turma pequena e move os indicadores', () => {
  const inicial = estadoInicial(cenario)
  const decisoes = [
    { papelSlug: 'coronel-cafe', opcaoSlug: 'pressionar-cambio' },
    { papelSlug: 'industrial-textil', opcaoSlug: 'demitir-agitadores' },
    { papelSlug: 'autoridade-estadual', opcaoSlug: 'mobilizar-forca-publica' },
    { papelSlug: 'grande-imprensa', opcaoSlug: 'nota-local' },
    { papelSlug: 'imprensa-operaria', opcaoSlug: 'convocar-solidariedade' },
    { papelSlug: 'operaria-textil', opcaoSlug: 'lista-assinaturas' },
    { papelSlug: 'operaria-textil', opcaoSlug: 'lista-assinaturas' },
    { papelSlug: 'operario-imigrante', opcaoSlug: 'juntar-lista' },
  ]

  const resultado = aplicarRodada(inicial, decisoes, cenario, 'preco-do-pao')

  for (const indicador of cenario.indicadores) {
    const valor = resultado.indicadores[indicador.slug]
    assert.ok(valor >= 0 && valor <= 100, `${indicador.slug} saiu da faixa 0-100: ${valor}`)
  }
  // demitir agitadores + mobilizar força pública puxam repressão para cima
  assert.ok(resultado.indicadores.repressao > inicial.indicadores.repressao)
})

test('bloco popular unido pesa mais que dividido, com conteúdo real da rodada 1', () => {
  const inicial = estadoInicial(cenario)
  const divididos = [
    { papelSlug: 'operaria-textil', opcaoSlug: 'lista-assinaturas' },
    { papelSlug: 'operaria-textil', opcaoSlug: 'aceitar-hora-extra' },
  ]
  const unidos = [
    { papelSlug: 'operaria-textil', opcaoSlug: 'lista-assinaturas' },
    { papelSlug: 'operaria-textil', opcaoSlug: 'lista-assinaturas' },
  ]

  const resultadoDividido = aplicarRodada(inicial, divididos, cenario, 'preco-do-pao')
  const resultadoUnido = aplicarRodada(inicial, unidos, cenario, 'preco-do-pao')

  assert.ok(resultadoUnido.indicadores.coesao > resultadoDividido.indicadores.coesao)
})

test('toda fonte declara natureza; documental tem autor; não confiável tem revelação no fecho', () => {
  for (const rodada of cenario.rodadas) {
    for (const fonte of rodada.investigacao?.fontes ?? []) {
      assert.ok(fonte.natureza === 'documental' || fonte.natureza === 'recriada', `${fonte.slug} sem natureza declarada`)
      if (fonte.natureza === 'documental') {
        assert.ok(fonte.autor, `${fonte.slug} é documental mas não tem autor/crédito`)
      }
      if (fonte.confiavel === false) {
        assert.ok(fonte.revelacaoNoFecho, `${fonte.slug} é boato (confiavel: false) mas não tem revelacaoNoFecho`)
      }
    }
  }
})

test('toda rodada tem 2-3 opções para cada um dos 7 papéis, com deltas em indicadores reais', () => {
  const papeisSlugs = cenario.papeis.map((papel) => papel.slug)
  const indicadoresSlugs = new Set(cenario.indicadores.map((indicador) => indicador.slug))

  for (const rodada of cenario.rodadas) {
    assert.deepEqual(
      Object.keys(rodada.opcoesPorPapel).sort(),
      [...papeisSlugs].sort(),
      `'${rodada.slug}' não tem opções para exatamente os 7 papéis do cenário`
    )
    for (const [papelSlug, opcoes] of Object.entries(rodada.opcoesPorPapel)) {
      assert.ok(opcoes.length >= 2 && opcoes.length <= 3, `'${rodada.slug}' → '${papelSlug}' tem ${opcoes.length} opções (esperado 2-3)`)
      const slugsUnicos = new Set(opcoes.map((opcao) => opcao.slug))
      assert.equal(slugsUnicos.size, opcoes.length, `'${rodada.slug}' → '${papelSlug}' tem opcaoSlug duplicado`)
      for (const opcao of opcoes) {
        for (const indicadorSlug of Object.keys(opcao.deltas)) {
          assert.ok(indicadoresSlugs.has(indicadorSlug), `'${rodada.slug}' → '${papelSlug}' → '${opcao.slug}' mexe em indicador inexistente: '${indicadorSlug}'`)
        }
      }
    }
  }
})

test('todo destrancaOpcao aponta para uma opção que existe de verdade na rodada', () => {
  for (const rodada of cenario.rodadas) {
    for (const fonte of rodada.investigacao?.fontes ?? []) {
      if (!fonte.destrancaOpcao) continue
      const existeEmAlgumPapel = fonte.papeis.some((papelSlug) =>
        (rodada.opcoesPorPapel[papelSlug] ?? []).some((opcao) => opcao.slug === fonte.destrancaOpcao)
      )
      assert.ok(existeEmAlgumPapel, `${fonte.slug} destranca '${fonte.destrancaOpcao}', que não existe em nenhum papel com acesso a essa fonte`)
    }
  }
})

test('as 5 rodadas rodam em sequência, com uma turma pequena, sem erro e sem sair de 0-100', () => {
  const decisoesPorRodada = {
    'preco-do-pao': [
      { papelSlug: 'coronel-cafe', opcaoSlug: 'pressionar-cambio' },
      { papelSlug: 'industrial-textil', opcaoSlug: 'aumentar-5-proibir' },
      { papelSlug: 'autoridade-estadual', opcaoSlug: 'monitorar' },
      { papelSlug: 'grande-imprensa', opcaoSlug: 'reportar-parada' },
      { papelSlug: 'imprensa-operaria', opcaoSlug: 'noticiar-a-plebe' },
      { papelSlug: 'operaria-textil', opcaoSlug: 'lista-assinaturas' },
      { papelSlug: 'operario-imigrante', opcaoSlug: 'juntar-lista' },
    ],
    'nove-de-julho': [
      { papelSlug: 'coronel-cafe', opcaoSlug: 'manter-distancia-cafe' },
      { papelSlug: 'industrial-textil', opcaoSlug: 'fechar-temporariamente' },
      { papelSlug: 'autoridade-estadual', opcaoSlug: 'reforcar-tropa' },
      { papelSlug: 'grande-imprensa', opcaoSlug: 'manchete-assassinato' },
      { papelSlug: 'imprensa-operaria', opcaoSlug: 'convocar-cortejo' },
      { papelSlug: 'operaria-textil', opcaoSlug: 'parar-em-luto' },
      { papelSlug: 'operario-imigrante', opcaoSlug: 'aderir-risco' },
    ],
    'o-cortejo': [
      { papelSlug: 'coronel-cafe', opcaoSlug: 'pressionar-acordo-rapido' },
      { papelSlug: 'industrial-textil', opcaoSlug: 'fechar-por-respeito' },
      { papelSlug: 'autoridade-estadual', opcaoSlug: 'recuar-de-vez' },
      { papelSlug: 'grande-imprensa', opcaoSlug: 'mudar-tom' },
      { papelSlug: 'imprensa-operaria', opcaoSlug: 'convocar-geral' },
      { papelSlug: 'operaria-textil', opcaoSlug: 'participar-cortejo' },
      { papelSlug: 'operario-imigrante', opcaoSlug: 'participar-cortejo-risco' },
    ],
    'comite-defesa-proletaria': [
      { papelSlug: 'coronel-cafe', opcaoSlug: 'pressionar-acordo-pauta' },
      { papelSlug: 'industrial-textil', opcaoSlug: 'aceitar-negociar-pauta' },
      { papelSlug: 'autoridade-estadual', opcaoSlug: 'reconhecer-comite' },
      { papelSlug: 'grande-imprensa', opcaoSlug: 'publicar-pauta-integral' },
      { papelSlug: 'imprensa-operaria', opcaoSlug: 'pauta-ampla' },
      { papelSlug: 'operaria-textil', opcaoSlug: 'propor-salario-igual' },
      { papelSlug: 'operario-imigrante', opcaoSlug: 'propor-fim-trabalho-infantil' },
    ],
    'o-acordo': [
      { papelSlug: 'coronel-cafe', opcaoSlug: 'apoiar-normalizacao' },
      { papelSlug: 'industrial-textil', opcaoSlug: 'cumprir-integralmente' },
      { papelSlug: 'autoridade-estadual', opcaoSlug: 'fiscalizar-cumprimento' },
      { papelSlug: 'grande-imprensa', opcaoSlug: 'cobrar-cumprimento' },
      { papelSlug: 'imprensa-operaria', opcaoSlug: 'organizar-apoio' },
      { papelSlug: 'operaria-textil', opcaoSlug: 'cobrar-prometido' },
      { papelSlug: 'operario-imigrante', opcaoSlug: 'continuar-organizando' },
    ],
  }

  // valida a própria fixture antes de rodar: um opcaoSlug com typo não daria
  // erro no motor (delta viraria 0 em silêncio), então checamos aqui.
  for (const rodada of cenario.rodadas) {
    for (const { papelSlug, opcaoSlug } of decisoesPorRodada[rodada.slug]) {
      const opcaoExiste = (rodada.opcoesPorPapel[papelSlug] ?? []).some((opcao) => opcao.slug === opcaoSlug)
      assert.ok(opcaoExiste, `fixture do teste referencia '${rodada.slug}' → '${papelSlug}' → '${opcaoSlug}', que não existe`)
    }
  }

  let estado = estadoInicial(cenario)
  for (const rodada of cenario.rodadas) {
    estado = aplicarRodada(estado, decisoesPorRodada[rodada.slug], cenario, rodada.slug)
    for (const indicador of cenario.indicadores) {
      const valor = estado.indicadores[indicador.slug]
      assert.ok(valor >= 0 && valor <= 100, `após '${rodada.slug}', ${indicador.slug} saiu da faixa 0-100: ${valor}`)
    }
  }

  assert.equal(estado.historico.length, cenario.rodadas.length + 1) // +1 do estado inicial
  // direitos_cumprido só existe/se move na R5; essa turma escolheu opções de
  // cumprimento (fiscalizar, cumprir integralmente, organizar apoio), então
  // deveria sair de 0 e ficar positivo — não testamos um valor exato porque
  // o motor faz média ponderada, não soma, então o efeito de uma rodada só
  // fica perto da ordem de grandeza de uma opção (dezena de pontos), não da
  // soma de todas as opções favoráveis.
  assert.ok(estado.indicadores.direitos_cumprido > 0)
})
