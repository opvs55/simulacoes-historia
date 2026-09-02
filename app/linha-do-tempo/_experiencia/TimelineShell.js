'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import styles from './TimelineShell.module.css'

const TimelineContext = createContext({ abrirGlossario: () => {}, reiniciar: () => {}, animar: false })

export function useTimeline() {
  return useContext(TimelineContext)
}

// Shell genérico de uma "linha do tempo" em modo história (scroll vertical,
// tela cheia, uma seção por vez). Cuida do que é comum a qualquer linha do
// tempo — progresso, retomar de onde parou, glossário — e deixa o conteúdo
// de cada uma (as telas em si) inteiramente para quem a usa, via children.
export default function TimelineShell({ slug, titulo, glossario = {}, onSair, children }) {
  const scrollerRef = useRef(null)
  const [indice, setIndice] = useState(0)
  const [total, setTotal] = useState(0)
  const [termoAberto, setTermoAberto] = useState(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return undefined

    const secoes = Array.from(el.querySelectorAll('[data-tela]'))
    setTotal(secoes.length)

    function tocarAnimacoes(secao) {
      secao.querySelectorAll('[data-anim]').forEach((a) => a.classList.add(styles.animar))
    }
    if (secoes[0]) tocarAnimacoes(secoes[0])

    const chave = `linha-do-tempo.${slug}`
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return
          tocarAnimacoes(entrada.target)
          const i = secoes.indexOf(entrada.target)
          if (i >= 0) {
            setIndice(i)
            try {
              localStorage.setItem(chave, String(i))
            } catch (_) {
              /* localStorage indisponível — só não retoma de onde parou */
            }
          }
        })
      },
      { root: el, threshold: 0.55 }
    )
    secoes.forEach((s) => io.observe(s))

    let salvo = 0
    try {
      salvo = parseInt(localStorage.getItem(chave) || '0', 10) || 0
    } catch (_) {
      /* segue do início */
    }
    if (salvo > 0 && salvo < secoes.length) {
      requestAnimationFrame(() => {
        el.scrollTo({ top: secoes[salvo].offsetTop, behavior: 'auto' })
      })
    }

    return () => io.disconnect()
  }, [slug])

  function abrirGlossario(chaveTermo) {
    const item = glossario[chaveTermo]
    if (item) setTermoAberto(item)
  }

  function reiniciar() {
    try {
      localStorage.setItem(`linha-do-tempo.${slug}`, '0')
    } catch (_) {
      /* nada a fazer */
    }
    scrollerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleClickScroller(evento) {
    const alvo = evento.target.closest('[data-termo]')
    if (alvo) abrirGlossario(alvo.getAttribute('data-termo'))
  }

  const pct = total > 0 ? ((indice + 1) / total) * 100 : 0

  return (
    <TimelineContext.Provider value={{ abrirGlossario, reiniciar }}>
      <div className={styles.shell} role="region" aria-label={titulo}>
        {onSair && (
          <button type="button" className={styles.sair} onClick={onSair} aria-label="Fechar linha do tempo">
            ✕
          </button>
        )}

        <div className={styles.progressoTopo}>
          <div className={styles.progressoTrilho}>
            <div className={styles.progressoPreenchido} style={{ width: `${pct}%` }} />
          </div>
          <div className={styles.progressoTexto}>
            {total > 0 ? `${indice + 1} / ${total}` : ''}
          </div>
        </div>

        <div ref={scrollerRef} className={styles.scroller} onClick={handleClickScroller}>
          {children}
        </div>

        {termoAberto && (
          <div className={styles.glossOverlay} onClick={() => setTermoAberto(null)}>
            <div className={styles.glossFolha} onClick={(e) => e.stopPropagation()}>
              <div className={styles.glossAlca} />
              <div className={styles.glossKicker}>Glossário</div>
              <div className={styles.glossTitulo}>{termoAberto[0]}</div>
              <p className={styles.glossTexto}>{termoAberto[1]}</p>
            </div>
          </div>
        )}
      </div>
    </TimelineContext.Provider>
  )
}

// Uma "página" cheia de conteúdo, com foto de fundo (efeito Ken Burns lento)
// e um degradê para o texto ficar legível — o bloco visual que se repete
// em quase toda tela da experiência.
export function Tela({ id, label, imagem, imagemPosicao = 'center', brilho = 0.5, duracao = 26, children }) {
  return (
    <section data-tela data-label={label} id={id} className={styles.tela}>
      {imagem && (
        <div
          data-anim
          className={styles.fundo}
          style={{
            backgroundImage: `url(${imagem})`,
            backgroundPosition: imagemPosicao,
            filter: `sepia(.22) saturate(.82) contrast(1.05) brightness(${brilho})`,
            animationDuration: `${duracao}s`,
          }}
        />
      )}
      {imagem && <div className={styles.gradiente} />}
      <div className={styles.conteudo}>{children}</div>
    </section>
  )
}

// Variante clara (mesmo tema do restante do site) — usada pelos quizzes,
// que interrompem o modo cinema para uma pergunta objetiva.
export function TelaClara({ id, label, children }) {
  return (
    <section data-tela data-label={label} id={id} className={`${styles.tela} ${styles.telaClara}`}>
      <div className={styles.conteudo} style={{ maxWidth: 'none' }}>
        {children}
      </div>
    </section>
  )
}

export function Kicker({ children }) {
  return (
    <div data-anim className={styles.kicker}>
      {children}
    </div>
  )
}

export function Titulo({ grande, children }) {
  return (
    <h2 className={`${styles.titulo} ${grande ? styles.tituloGrande : ''}`} data-anim>
      {children}
    </h2>
  )
}

export function Texto({ muted, children }) {
  return (
    <p data-anim className={muted ? styles.textoMuted : styles.texto}>
      {children}
    </p>
  )
}

// Termo com glossário — clicável, abre a folha inferior com a definição.
export function Termo({ chave, children }) {
  return (
    <b data-termo={chave} className={styles.termo}>
      {children}
    </b>
  )
}

export function Citacao({ autor, children }) {
  return (
    <div data-anim className={styles.citacao}>
      &ldquo;{children}&rdquo;
      {autor && <span className={styles.citacaoAutor}>{autor}</span>}
    </div>
  )
}
