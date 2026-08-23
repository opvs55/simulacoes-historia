import { test } from 'node:test'
import assert from 'node:assert/strict'
import { estadoInicial, aplicarRodada } from '../motor.js'

// Cenário fictício mínimo — só para exercitar o motor. Não representa
// nenhum conteúdo histórico real (esse trabalho é a Fase 1 do roadmap).
const cenario = {
  indicadores: [{ slug: 'tesouro', inicial: 40 }],
  papeis: [
    { slug: 'rei', bloco: 'elite', peso: 8 },
    { slug: 'camponês', bloco: 'popular', peso: 1 },
  ],
  rodadas: [
    {
      slug: 'r1',
      amplitude: 25,
      opcoesPorPapel: {
        rei: [
          { slug: 'taxar', deltas: { tesouro: 20 } },
          { slug: 'poupar', deltas: { tesouro: -5 } },
        ],
        camponês: [
          { slug: 'pagar', deltas: { tesouro: 5 } },
          { slug: 'esconder', deltas: { tesouro: -2 } },
        ],
      },
      efeitosFixos: { tesouro: 1 },
    },
  ],
}

test('estadoInicial parte dos valores declarados no cenário', () => {
  const estado = estadoInicial(cenario)
  assert.equal(estado.indicadores.tesouro, 40)
  assert.equal(estado.historico.length, 1)
})

test('o peso do papel domina o efeito ponderado', () => {
  const inicial = estadoInicial(cenario)
  const decisoes = [
    { papelSlug: 'rei', opcaoSlug: 'taxar' },
    { papelSlug: 'camponês', opcaoSlug: 'esconder' },
  ]
  const resultado = aplicarRodada(inicial, decisoes, cenario, 'r1')
  // numerador = 20*8*1.0 (rei) + (-2)*1*2.0 (camponês sozinho -> adesão 100% -> mult 2.0) = 156
  // peso total = 9 -> efeito bruto ≈17.33 + efeitoFixo 1 ≈ tesouro final ≈58.33
  assert.ok(resultado.indicadores.tesouro > 55 && resultado.indicadores.tesouro < 60)
})

test('coesão do bloco popular aumenta o peso efetivo dos muitos', () => {
  const inicial = estadoInicial(cenario)
  const decisoesDivididas = [
    { papelSlug: 'camponês', opcaoSlug: 'pagar' },
    { papelSlug: 'camponês', opcaoSlug: 'esconder' },
  ]
  const decisoesUnidas = [
    { papelSlug: 'camponês', opcaoSlug: 'pagar' },
    { papelSlug: 'camponês', opcaoSlug: 'pagar' },
  ]
  const divididas = aplicarRodada(inicial, decisoesDivididas, cenario, 'r1')
  const unidas = aplicarRodada(inicial, decisoesUnidas, cenario, 'r1')
  assert.ok(unidas.indicadores.tesouro > divididas.indicadores.tesouro)
})

test('amplitude limita o quanto uma rodada move o indicador', () => {
  const cenarioAmplitudeBaixa = {
    ...cenario,
    rodadas: [{ ...cenario.rodadas[0], amplitude: 3, efeitosFixos: undefined }],
  }
  const inicial = estadoInicial(cenarioAmplitudeBaixa)
  const decisoes = [{ papelSlug: 'rei', opcaoSlug: 'taxar' }]
  const resultado = aplicarRodada(inicial, decisoes, cenarioAmplitudeBaixa, 'r1')
  assert.equal(resultado.indicadores.tesouro, 43) // 40 + amplitude(3), não 40 + delta(20)
})

test('indicador nunca passa de 100 nem de 0', () => {
  const cenarioExtremo = {
    indicadores: [{ slug: 'tesouro', inicial: 99 }],
    papeis: [{ slug: 'rei', bloco: 'elite', peso: 1 }],
    rodadas: [
      {
        slug: 'r1',
        amplitude: 1000,
        opcoesPorPapel: { rei: [{ slug: 'taxar', deltas: { tesouro: 500 } }] },
      },
    ],
  }
  const inicial = estadoInicial(cenarioExtremo)
  const resultado = aplicarRodada(inicial, [{ papelSlug: 'rei', opcaoSlug: 'taxar' }], cenarioExtremo, 'r1')
  assert.equal(resultado.indicadores.tesouro, 100)
})

test('quem não jogou não conta no denominador (resultado independe do tamanho da turma)', () => {
  const inicial = estadoInicial(cenario)
  const poucos = aplicarRodada(inicial, [{ papelSlug: 'rei', opcaoSlug: 'taxar' }], cenario, 'r1')
  const cenarioSemFixo = { ...cenario, rodadas: [{ ...cenario.rodadas[0], efeitosFixos: undefined }] }
  const inicialSemFixo = estadoInicial(cenarioSemFixo)
  const tambemPoucos = aplicarRodada(inicialSemFixo, [{ papelSlug: 'rei', opcaoSlug: 'taxar' }], cenarioSemFixo, 'r1')
  // com um só decisor de peso 8, efeito bruto = 20*8/8 = 20 (abaixo da amplitude 25)
  assert.equal(tambemPoucos.indicadores.tesouro, 60)
  assert.equal(poucos.indicadores.tesouro, 61) // + efeitoFixo 1
})
