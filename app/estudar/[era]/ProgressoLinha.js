'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { lerProgresso } from '@/lib/progresso-timeline.js'
import comum from '../../_ui/comum.module.css'
import styles from './page.module.css'

// Linha do tempo dentro de /estudar/[era], com a barra de progresso se
// já houver algo salvo (ver lib/progresso-timeline.js). Client component
// só por causa do localStorage — começa sem barra (igual no servidor) e
// atualiza depois de montar, pra não dar erro de hidratação.
export default function ProgressoLinha({ linha }) {
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    setIndice(lerProgresso(linha.slug))
  }, [linha.slug])

  const emAndamento = indice > 0 && indice < linha.telas - 1
  const percentual = emAndamento ? Math.round((indice / (linha.telas - 1)) * 100) : 0

  return (
    <Link href={`/linha-do-tempo/${linha.slug}`} className={styles.item}>
      <div className={`${comum.plate} ${styles.itemCapa}`}>
        <img src={linha.capa} alt="" />
      </div>
      <div className={styles.itemCorpo}>
        <div className={styles.itemTitulo}>{linha.titulo}</div>
        <div className={styles.itemMeta}>
          <span className={styles.itemMetaDestaque}>Linha do tempo</span>
          <span>·</span>
          <span>{linha.telas} telas</span>
          <span>·</span>
          <span>{linha.duracaoMin} min</span>
        </div>
        {emAndamento && (
          <div className={comum.progresso}>
            <div className={comum.progressoTraco} style={{ width: `${percentual}%` }} />
          </div>
        )}
      </div>
      <span className={styles.itemSeta}>{emAndamento ? `${indice + 1}/${linha.telas}` : '→'}</span>
    </Link>
  )
}
