import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sortearPapeis } from '../sorteio.js'

const papeis = [
  { slug: 'rei', cota: 1 },
  { slug: 'nobre', cota: 3 },
  { slug: 'camponês', cota: 12 },
]

test('sorteia exatamente um papel por apelido', () => {
  const apelidos = Array.from({ length: 30 }, (_, i) => `aluno-${i}`)
  const sorteio = sortearPapeis(apelidos, papeis, 42)
  assert.equal(Object.keys(sorteio).length, 30)
  for (const apelido of apelidos) {
    assert.ok(papeis.some((papel) => papel.slug === sorteio[apelido]), `papel inválido para ${apelido}`)
  }
})

test('respeita as cotas proporcionalmente numa turma de 32', () => {
  const apelidos = Array.from({ length: 32 }, (_, i) => `aluno-${i}`)
  const sorteio = sortearPapeis(apelidos, papeis, 7)
  const contagem = { rei: 0, nobre: 0, camponês: 0 }
  for (const papel of Object.values(sorteio)) contagem[papel] += 1

  // cota total = 16; 32 alunos = fator 2 -> rei 2, nobre 6, camponês 24
  assert.equal(contagem.rei, 2)
  assert.equal(contagem.nobre, 6)
  assert.equal(contagem['camponês'], 24)
})

test('mesma semente produz o mesmo sorteio (turma simulada reprodutível)', () => {
  const apelidos = Array.from({ length: 30 }, (_, i) => `aluno-${i}`)
  const primeiro = sortearPapeis(apelidos, papeis, 123)
  const segundo = sortearPapeis(apelidos, papeis, 123)
  assert.deepEqual(primeiro, segundo)
})

test('turma vazia não quebra', () => {
  assert.deepEqual(sortearPapeis([], papeis, 1), {})
})
