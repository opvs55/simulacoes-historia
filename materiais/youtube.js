// Aceita as formas mais comuns de URL do YouTube (watch?v=, youtu.be/,
// já embutida) e extrai só o ID de 11 caracteres. Compartilhado entre
// VideoEmbutido (card grande) e VideoLinha (lista compacta).
export function extrairIdYoutube(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/)
  return match ? match[1] : null
}
