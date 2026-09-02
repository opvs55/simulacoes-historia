'use client'

import { useState } from 'react'
import styles from './page.module.css'

// Aceita as formas mais comuns de URL do YouTube (watch?v=, youtu.be/,
// já embutida) e extrai só o ID de 11 caracteres.
function extrairIdYoutube(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/)
  return match ? match[1] : null
}

// Clique-para-tocar: mostra a miniatura (uma imagem estática, sem custo)
// e só carrega o player do YouTube depois que a pessoa decide assistir —
// nada de terceiro é carregado antes disso. youtube-nocookie.com reduz o
// rastreamento do player mesmo depois do clique.
export default function VideoEmbutido({ url, titulo }) {
  const [tocando, setTocando] = useState(false)
  const id = extrairIdYoutube(url)

  if (!id) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
        Assistir →
      </a>
    )
  }

  if (tocando) {
    return (
      <div className={styles.videoPlate}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <>
      <button
        type="button"
        className={styles.videoPlate}
        onClick={() => setTocando(true)}
        aria-label={`Assistir: ${titulo}`}
      >
        <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
        <span className={styles.videoPlay}>▶</span>
      </button>
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.linkDiscreto}>
        Abrir no YouTube →
      </a>
    </>
  )
}
