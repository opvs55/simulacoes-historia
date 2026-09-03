'use client'

import { useState } from 'react'
import { extrairIdYoutube } from '@/materiais/youtube.js'
import styles from './page.module.css'

// Formato compacto para quando há muitos vídeos na mesma seção — uma
// linha com miniatura pequena, que expande no clique para mostrar a
// descrição e o player (sem autoplay: aqui a pessoa está escolhendo entre
// vários, tocar sozinho seria intrusivo). Ver VideoEmbutido para o card
// grande, usado quando há só 1 vídeo em destaque.
export default function VideoLinha({ item }) {
  const [aberto, setAberto] = useState(false)
  const id = extrairIdYoutube(item.url)

  return (
    <div className={styles.videoLinha}>
      <button
        type="button"
        className={styles.videoLinhaCabecalho}
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
      >
        {id ? (
          <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="" className={styles.videoLinhaThumb} loading="lazy" />
        ) : (
          <span className={styles.videoLinhaThumb} />
        )}
        <span className={styles.videoLinhaTitulo}>{item.titulo}</span>
        <span className={styles.videoLinhaSeta}>{aberto ? '▴' : '▾'}</span>
      </button>

      {aberto && (
        <div className={styles.videoLinhaCorpo}>
          <p className={styles.videoLinhaDescricao}>{item.descricao}</p>
          {id && (
            <div className={styles.videoPlateCompacto}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title={item.titulo}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.linkDiscreto}>
            Abrir no YouTube →
          </a>
        </div>
      )}
    </div>
  )
}
