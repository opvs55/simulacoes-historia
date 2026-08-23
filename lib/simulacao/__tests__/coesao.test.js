import { test } from 'node:test'
import assert from 'node:assert/strict'
import { calcularCoesaoPorPapel, multiplicadorCoesao } from '../coesao.js'

test('sem decisões, adesão é 0 e multiplicador é o piso', () => {
  const resultado = calcularCoesaoPorPapel([])
  assert.equal(resultado.opcaoMajoritaria, null)
  assert.equal(resultado.multiplicador, 1.0)
})

test('turma dividida (abaixo de 60%) fica no multiplicador 1.0', () => {
  const decisoes = [{ opcaoSlug: 'a' }, { opcaoSlug: 'a' }, { opcaoSlug: 'b' }, { opcaoSlug: 'b' }, { opcaoSlug: 'c' }]
  const resultado = calcularCoesaoPorPapel(decisoes)
  assert.equal(resultado.adesao, 0.4)
  assert.equal(resultado.multiplicador, 1.0)
})

test('60% a 79% de adesão rende multiplicador 1.5', () => {
  const decisoes = [{ opcaoSlug: 'a' }, { opcaoSlug: 'a' }, { opcaoSlug: 'a' }, { opcaoSlug: 'b' }, { opcaoSlug: 'b' }]
  const resultado = calcularCoesaoPorPapel(decisoes)
  assert.equal(resultado.adesao, 0.6)
  assert.equal(resultado.multiplicador, 1.5)
})

test('80% ou mais de adesão rende multiplicador 2.0', () => {
  const decisoes = [{ opcaoSlug: 'a' }, { opcaoSlug: 'a' }, { opcaoSlug: 'a' }, { opcaoSlug: 'a' }, { opcaoSlug: 'b' }]
  const resultado = calcularCoesaoPorPapel(decisoes)
  assert.equal(resultado.adesao, 0.8)
  assert.equal(resultado.multiplicador, 2.0)
})

test('multiplicadorCoesao ignora adesão para blocos que não são populares', () => {
  const decisoesUnanimes = [{ opcaoSlug: 'a' }, { opcaoSlug: 'a' }]
  assert.equal(multiplicadorCoesao('elite', decisoesUnanimes), 1.0)
  assert.equal(multiplicadorCoesao('mediador', decisoesUnanimes), 1.0)
  assert.equal(multiplicadorCoesao('popular', decisoesUnanimes), 2.0)
})
