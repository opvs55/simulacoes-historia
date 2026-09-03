import Link from 'next/link'
import LINHAS_DO_TEMPO from '@/materiais/linhas-do-tempo.js'
import styles from './page.module.css'

// Agrupadas por série em vez de uma lista única — ver
// docs/plano-curriculo-1a-2a-serie.md, seção 2. Cada seção só aparece
// quando tem pelo menos 1 linha do tempo; hoje só a 2ª série está povoada.
const SERIES = [
  { slug: '1a', rotulo: '1ª série' },
  { slug: '2a', rotulo: '2ª série' },
]

export const metadata = {
  title: 'Linha do tempo — Histórificando',
}

export default function LinhaDoTempoHub() {
  return (
    <div className={styles.page}>
      <Link href="/materiais" className={styles.voltar}>← Voltar</Link>

      <header className={styles.cabecalho}>
        <div className={styles.kicker}>Leitura em modo história</div>
        <h1>Linha do tempo</h1>
        <p className={styles.intro}>
          Um jeito mais rápido de ver o quadro inteiro antes (ou depois) de jogar: role como num
          feed, uma tela por vez, com checagens rápidas no caminho.
        </p>
      </header>

      {SERIES.map((serie) => {
        const linhasDaSerie = LINHAS_DO_TEMPO.filter((l) => l.serie === serie.slug)
        if (linhasDaSerie.length === 0) return null

        return (
          <section key={serie.slug} className={styles.grupo}>
            <h2 className={styles.grupoTitulo}>{serie.rotulo}</h2>
            <div className={styles.lista}>
              {linhasDaSerie.map((linha) => (
                <Link key={linha.slug} href={`/linha-do-tempo/${linha.slug}`} className={styles.item}>
                  <div className={styles.itemPlate}>
                    <img src={linha.capa} alt="" />
                  </div>
                  <div className={styles.itemCorpo}>
                    <div className={styles.kicker}>{linha.periodo}</div>
                    <h2>{linha.titulo}</h2>
                    <p className={styles.resumo}>{linha.resumo}</p>
                    <span className={styles.selo}>{linha.telas} telas · 4 checagens rápidas</span>
                    <span className={styles.linkArrow}>Começar →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
