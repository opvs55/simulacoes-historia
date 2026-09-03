'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import eras from '@/cenarios/eras.js'
import { lerSeriePreferida, salvarSeriePreferida } from '@/lib/serie-preferida.js'
import BarraInferior from '../_ui/BarraInferior.js'
import comum from '../_ui/comum.module.css'
import styles from './page.module.css'

const SERIES = [
  { slug: '1a', rotulo: '1ª série' },
  { slug: '2a', rotulo: '2ª série' },
]

export default function Estudar() {
  const [serie, setSerie] = useState('1a')

  useEffect(() => {
    setSerie(lerSeriePreferida())
  }, [])

  function escolherSerie(s) {
    setSerie(s)
    salvarSeriePreferida(s)
  }

  const erasDaSerie = eras.filter((e) => e.serie === serie)

  return (
    <div className={styles.page}>
      <header className={styles.cabecalho}>
        <p className={comum.kicker}>Módulo Simulações</p>
        <h1>Estudar</h1>
        <div className={styles.seg} role="tablist" aria-label="Série">
          {SERIES.map((s) => (
            <button
              key={s.slug}
              type="button"
              role="tab"
              aria-selected={serie === s.slug}
              className={serie === s.slug ? `${styles.segOpt} ${styles.segOptAtivo}` : styles.segOpt}
              onClick={() => escolherSerie(s.slug)}
            >
              {s.rotulo}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.lista}>
        {erasDaSerie.map((era) => (
          <Link key={era.slug} href={`/estudar/${era.slug}`} className={styles.eraItem}>
            <div className={comum.plate + ' ' + styles.eraCapa}>
              <img src={era.capa} alt="" />
            </div>
            <div className={styles.eraCorpo}>
              <div className={comum.selo}>{era.periodo}</div>
              <h2>{era.nome}</h2>
              <p>{era.resumo}</p>
              <span className={styles.linkArrow}>Ver o período →</span>
            </div>
          </Link>
        ))}
      </div>

      <BarraInferior />
    </div>
  )
}
