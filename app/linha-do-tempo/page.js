import Link from 'next/link'
import styles from './page.module.css'

// Catálogo de linhas do tempo. Por enquanto só uma — a estrutura já está
// pronta para crescer quando novos períodos entrarem (mesmo padrão do
// catálogo de /simulacoes).
const LINHAS_DO_TEMPO = [
  {
    slug: 'absolutismo-e-mercantilismo',
    titulo: 'O rei, a fé e o mercado',
    periodo: 'Séculos XV — XVII',
    serie: '1a',
    resumo: 'Como a Europa deixou de ser um mosaico de feudos e virou um continente de reis absolutos: Contrarreforma, formação das monarquias, os teóricos do absolutismo, navegações e mercantilismo.',
    capa: '/imagens/linha-do-tempo/absolutismo-e-mercantilismo/capa.jpg',
    telas: 11,
  },
  {
    slug: 'povos-originarios-e-colonizacao',
    titulo: 'Um continente que já tinha nome',
    periodo: 'Antes de 1500 — depois de hoje',
    serie: '1a',
    resumo: 'Maias, astecas e incas antes de qualquer navio chegar; o encontro, a conquista e a colonização depois — com atenção a quem escreveu cada fonte e à resistência que os livros às vezes esquecem.',
    capa: '/imagens/linha-do-tempo/povos-originarios-e-colonizacao/capa.jpg',
    telas: 12,
  },
  {
    slug: 'republica-velha',
    titulo: 'A República que o povo assistiu',
    periodo: '1889 — 1930',
    serie: '2a',
    resumo: 'Da proclamação sem povo até Getúlio Vargas, em dezessete telas: coronelismo, a greve de 1917, a Semana de 22, a Coluna Prestes e a crise que derruba a Primeira República.',
    capa: '/imagens/linha-do-tempo/republica-velha/capa.jpg',
    telas: 17,
  },
  {
    slug: 'da-revolta-ao-desenvolvimento',
    titulo: 'Do quartel ao canteiro de obras',
    periodo: '1917 — 1961',
    serie: '2a',
    resumo: 'Mulheres operárias, a Revolta de 1932, a CLT como estratégia de controle, Dutra na Guerra Fria, o retorno e a queda de Vargas, e Juscelino prometendo 50 anos em 5.',
    capa: '/imagens/linha-do-tempo/da-revolta-ao-desenvolvimento/capa.jpg',
    telas: 11,
  },
]

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
