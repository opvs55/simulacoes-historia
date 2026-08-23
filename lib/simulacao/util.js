export function clamp(valor, min, max) {
  return Math.min(max, Math.max(min, valor))
}

// PRNG determinístico (mulberry32) — permite semear uma "turma simulada"
// reprodutível para testes e para o painel do professor (seção 16.1 do GDD).
export function criarGeradorAleatorio(seed) {
  let estado = seed >>> 0
  return function aleatorio() {
    estado |= 0
    estado = (estado + 0x6d2b79f5) | 0
    let t = Math.imul(estado ^ (estado >>> 15), 1 | estado)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
