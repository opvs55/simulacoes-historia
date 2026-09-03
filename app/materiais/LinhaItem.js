'use client'

import { useEffect, useState } from 'react'
import { extrairIdYoutube } from '@/materiais/youtube.js'
import { estaVisto, marcarVisto } from '@/materiais/visto.js'
import styles from './page.module.css'

const ROTULO_TIPO = {
  video: 'Vídeo',
  texto: 'Leitura',
  documentario: 'Documentário',
  'linha-do-tempo': 'Linha do tempo',
}

// Uma linha por item, qualquer tipo — reaproveita o mesmo visual pra
// vídeo, linha do tempo, texto ou documentário (ver design_handoff em
// docs/, Parte 2). Só o vídeo expande inline (mostra o player ali
// mesmo); os outros tipos são link direto, iguais em forma. "Visto" é
// lido do localStorage só depois de montar (ver materiais/visto.js),
// pra não gerar erro de hidratação — a primeira renderização é sempre
// "não visto", igual no servidor e no cliente.
export default function LinhaItem({ item, cenario, proximoItem }) {
  const [aberto, setAberto] = useState(false)
  const [visto, setVisto] = useState(false)

  useEffect(() => {
    setVisto(estaVisto(item.slug))
  }, [item.slug])

  const ehVideo = item.tipo === 'video'
  const idYoutube = ehVideo ? extrairIdYoutube(item.url) : null
  const ehLinhaDoTempo = item.tipo === 'linha-do-tempo'
  const linhaClasse = visto ? `${styles.videoLinha} ${styles.videoLinhaVisto}` : styles.videoLinha

  function Meta() {
    return (
      <span className={styles.videoLinhaMeta}>
        <span className={styles.videoLinhaTipo}>{ROTULO_TIPO[item.tipo] ?? item.tipo}</span>
        {item.duracaoMin != null && (
          <>
            <span>·</span>
            <span>{item.duracaoMin} min</span>
          </>
        )}
        {ehLinhaDoTempo ? (
          <>
            <span>·</span>
            <span>no seu ritmo</span>
          </>
        ) : visto ? (
          <>
            <span>·</span>
            <span className={styles.videoLinhaVistoRotulo}>visto</span>
          </>
        ) : null}
      </span>
    )
  }

  function Thumb() {
    if (idYoutube) {
      return (
        <img
          src={`https://img.youtube.com/vi/${idYoutube}/mqdefault.jpg`}
          alt=""
          className={styles.videoLinhaThumb}
          loading="lazy"
        />
      )
    }
    return (
      <span className={styles.videoLinhaThumbNeutro}>{ROTULO_TIPO[item.tipo] ?? item.tipo}</span>
    )
  }

  // não-vídeo: link direto, sem expansão — marca visto no clique e deixa
  // a navegação seguir normalmente (interna, pra linha do tempo; nova
  // aba, pro resto).
  if (!ehVideo) {
    const externo = item.url.startsWith('http')
    return (
      <div className={linhaClasse} id={`item-${item.slug}`}>
        <a
          className={styles.videoLinhaCabecalho}
          href={item.url}
          target={externo ? '_blank' : undefined}
          rel={externo ? 'noopener noreferrer' : undefined}
          onClick={() => marcarVisto(item.slug)}
        >
          <Thumb />
          <span className={styles.videoLinhaCorpoTexto}>
            <span className={styles.videoLinhaTitulo}>{item.titulo}</span>
            <Meta />
          </span>
          <span className={styles.videoLinhaSeta}>↗</span>
        </a>
      </div>
    )
  }

  // vídeo: expande inline — mesmo comportamento de antes (clique pra
  // tocar, sem autoplay ao carregar), mais o fecho de ação do design.
  return (
    <div className={linhaClasse}>
      <button
        type="button"
        className={styles.videoLinhaCabecalho}
        onClick={() => {
          setAberto((v) => !v)
          if (!aberto) {
            marcarVisto(item.slug)
            setVisto(true)
          }
        }}
        aria-expanded={aberto}
      >
        <Thumb />
        <span className={styles.videoLinhaCorpoTexto}>
          <span className={styles.videoLinhaTitulo}>{item.titulo}</span>
          <Meta />
        </span>
        <span className={styles.videoLinhaSeta}>{aberto ? '▴' : '▾'}</span>
      </button>

      {aberto && (
        <div className={styles.videoLinhaCorpo}>
          {idYoutube && (
            <div className={styles.videoPlateCompacto}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${idYoutube}`}
                title={item.titulo}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          <p className={styles.videoLinhaDescricao}>{item.descricao}</p>

          {cenario && (
            <div className={styles.depoisBloco}>
              <div className={styles.depoisRotulo}>Depois de assistir</div>
              <p className={styles.depoisTexto}>
                Este vídeo é pano de fundo. As fontes que valem na partida são as que você
                investiga dentro dela.
              </p>
              <a className={styles.depoisBotao} href={`/simulacao/DEMO01?cenario=${cenario.slug}`}>
                Jogar {cenario.titulo}
              </a>
            </div>
          )}

          <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.linkDiscreto}>
            Abrir no YouTube ↗
          </a>

          {proximoItem && (
            <a href={`#item-${proximoItem.slug}`} className={styles.proximoLinha}>
              <span>Próximo · {proximoItem.titulo}</span>
              <span>→</span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}
