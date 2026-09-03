// Qual série o aluno está estudando — guardado no localStorage do
// aparelho, não há login pra saber isso de outro jeito ainda. Usado pela
// home, /estudar e (futuramente) /materiais, pra não perguntar de novo
// em cada página. Sempre '1a' como primeira visita.
const CHAVE = 'serie-preferida'

export function lerSeriePreferida() {
  if (typeof window === 'undefined') return '1a'
  try {
    const valor = window.localStorage.getItem(CHAVE)
    return valor === '1a' || valor === '2a' ? valor : '1a'
  } catch {
    return '1a'
  }
}

export function salvarSeriePreferida(serie) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(CHAVE, serie)
  } catch {
    // sem localStorage, sem memória entre páginas — tudo bem
  }
}
