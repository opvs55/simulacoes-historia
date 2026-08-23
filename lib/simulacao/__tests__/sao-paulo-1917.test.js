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

test('toda fonte não confiável declara natureza e (se recriada) não finge ser documento de época', () => {
  for (const rodada of cenario.rodadas) {
    for (const fonte of rodada.investigacao?.fontes ?? []) {
      assert.ok(fonte.natureza === 'documental' || fonte.natureza === 'recriada', `${fonte.slug} sem natureza declarada`)
      if (fonte.natureza === 'documental') {
        assert.ok(fonte.autor, `${fonte.slug} é documental mas não tem autor/crédito`)
      }
    }
  }
})
