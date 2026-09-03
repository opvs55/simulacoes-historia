// "Visto" é só uma conveniência de navegador — não há Supabase ligado aos
// materiais (só ao jogo, e ainda assim não à turma real). Guardado no
// localStorage do próprio aparelho: não sincroniza entre dispositivos,
// não é visível pro professor, e pode sumir se o aluno limpar os dados
// do navegador. Tudo bem — o objetivo é só ajudar quem está escolhendo
// o que já assistiu, não registrar nada.
const CHAVE = 'materiais.vistos'

function lerTodos() {
  try {
    const bruto = window.localStorage.getItem(CHAVE)
    return bruto ? JSON.parse(bruto) : {}
  } catch {
    return {}
  }
}

export function estaVisto(slug) {
  if (typeof window === 'undefined') return false
  return !!lerTodos()[slug]
}

export function marcarVisto(slug) {
  if (typeof window === 'undefined') return
  try {
    const todos = lerTodos()
    if (todos[slug]) return
    todos[slug] = true
    window.localStorage.setItem(CHAVE, JSON.stringify(todos))
  } catch {
    // localStorage indisponível (modo privado, cota cheia) — sem visto, sem drama.
  }
}
