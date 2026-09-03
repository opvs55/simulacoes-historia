// Lê o progresso que TimelineShell já grava sozinho (ver
// app/linha-do-tempo/_experiencia/TimelineShell.js) — mesma chave,
// TimelineShell não muda. Não há timestamp gravado, então "onde você
// parou" pega a primeira linha do tempo (na ordem informada) com
// progresso real e ainda não terminada — não necessariamente a mais
// recente, mas é o melhor que dá pra saber sem tocar no shell.
export function lerProgresso(slug) {
  if (typeof window === 'undefined') return 0
  try {
    return parseInt(window.localStorage.getItem(`linha-do-tempo.${slug}`) || '0', 10) || 0
  } catch {
    return 0
  }
}

// `linhas` precisa ter pelo menos {slug, telas}. Retorna a linha do
// tempo (com `indice`/`percentual` anexados) ou null se nenhuma tem
// progresso salvo.
export function encontrarEmAndamento(linhas) {
  for (const linha of linhas) {
    const indice = lerProgresso(linha.slug)
    if (indice > 0 && indice < linha.telas - 1) {
      return { ...linha, indice, percentual: Math.round((indice / (linha.telas - 1)) * 100) }
    }
  }
  return null
}
