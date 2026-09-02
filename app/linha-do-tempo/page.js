import Link from 'next/link'
import styles from './page.module.css'

// Catálogo de linhas do tempo. Por enquanto só uma — a estrutura já está
// pronta para crescer quando novos períodos entrarem (mesmo padrão do
// catálogo de /simulacoes).
const LINHAS_DO_TEMPO = [
  {
    slug: 'republica-velha',
    titulo: 'A República que o povo assistiu',
    periodo: '1889 — 1930',
    resumo: 'Da proclamação sem povo até Getúlio Vargas, em dezessete telas: coronelismo, a greve de 1917, a Semana de 22, a Coluna Prestes e a crise que derruba a Primeira República.',
    capa: '/imagens/linha-do-tempo/republica-velha/capa.jpg',
    telas: 17,
  },
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

      <div className={styles.lista}>
        {LINHAS_DO_TEMPO.map((linha) => (
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
    </div>
  )
}
