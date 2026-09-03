import materiais from '@/materiais/dados.js'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import VideoEmbutido from './VideoEmbutido.js'
import VideoLinha from './VideoLinha.js'
import styles from './page.module.css'

const CENARIOS = [saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia]

// Agrupados por série e, dentro dela, por tipo — ver
// docs/plano-curriculo-1a-2a-serie.md, seção 2. Cada seção só aparece
// quando tem pelo menos 1 material. Linha do tempo usa o card grande
// (é a peça principal de estudo); vídeos usam a lista compacta assim que
// há mais de 1 — com muitos itens, cards grandes empilhados viram uma
// parede de rolagem.
const SERIES = [
  { slug: '1a', rotulo: '1ª série' },
  { slug: '2a', rotulo: '2ª série' },
]

function Tags({ cenariosRelacionados }) {
  if (!cenariosRelacionados?.length) return null
  return (
    <div className={styles.tags}>
      {cenariosRelacionados.map((slug) => {
        const cenario = CENARIOS.find((c) => c.slug === slug)
        return cenario ? (
          <span key={slug} className={styles.tag}>
            {cenario.titulo}
          </span>
        ) : null
      })}
    </div>
  )
}

function ItemLinhaDoTempo({ item }) {
  return (
    <article className={styles.item}>
      <span className={styles.tipo}>Linha do tempo</span>
      <h2>{item.titulo}</h2>
      <p>{item.descricao}</p>
      <Tags cenariosRelacionados={item.cenariosRelacionados} />
      <a href={item.url} className={styles.link}>Começar →</a>
    </article>
  )
}

export default function Materiais() {
  return (
    <main className={styles.page}>
      <p className={styles.kicker}>Módulo Simulações</p>
      <h1>Materiais alternativos</h1>
      <div className={styles.regua} />
      <p className={styles.intro}>
        Indicados pelo professor para complementar o livro — não substituem as fontes
        documentais de cada simulação, são pano de fundo pra entender melhor o momento
        histórico antes ou depois de jogar. <strong>Nada aqui é obrigatório.</strong>
      </p>

      <p className={styles.nota}>
        Um lembrete, já que estamos falando de estudar o passado: história se escreve com
        pesquisa, não com suposição. Quem tenta prever sem antes entender os movimentos de quem
        veio antes está adivinhando, não analisando — cartomante lê o futuro no palpite;
        quem estuda história entende o presente investigando o passado de verdade.
      </p>

      {SERIES.map((serie) => {
        const itensDaSerie = materiais.filter((item) => item.serie === serie.slug)
        if (itensDaSerie.length === 0) return null

        const linhasDoTempo = itensDaSerie.filter((item) => item.tipo === 'linha-do-tempo')
        const videos = itensDaSerie.filter((item) => item.tipo === 'video')
        const outros = itensDaSerie.filter((item) => item.tipo !== 'linha-do-tempo' && item.tipo !== 'video')

        return (
          <section key={serie.slug} className={styles.grupo}>
            <h2 className={styles.grupoTitulo}>{serie.rotulo}</h2>

            {linhasDoTempo.length > 0 && (
              <div className={styles.lista}>
                {linhasDoTempo.map((item) => (
                  <ItemLinhaDoTempo key={item.slug} item={item} />
                ))}
              </div>
            )}

            {videos.length > 0 && (
              <div className={styles.subgrupo}>
                {linhasDoTempo.length > 0 && <h3 className={styles.subgrupoTitulo}>Vídeos</h3>}
                {videos.length === 1 ? (
                  <div className={styles.lista}>
                    <article className={styles.item}>
                      <span className={styles.tipo}>Vídeo</span>
                      <h2>{videos[0].titulo}</h2>
                      <p>{videos[0].descricao}</p>
                      <Tags cenariosRelacionados={videos[0].cenariosRelacionados} />
                      <VideoEmbutido url={videos[0].url} titulo={videos[0].titulo} />
                    </article>
                  </div>
                ) : (
                  <div className={styles.videoLista}>
                    {videos.map((item) => (
                      <VideoLinha key={item.slug} item={item} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {outros.length > 0 && (
              <div className={styles.lista}>
                {outros.map((item) => (
                  <article key={item.slug} className={styles.item}>
                    <span className={styles.tipo}>{item.tipo}</span>
                    <h2>{item.titulo}</h2>
                    <p>{item.descricao}</p>
                    <Tags cenariosRelacionados={item.cenariosRelacionados} />
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      Ler →
                    </a>
                  </article>
                ))}
              </div>
            )}
          </section>
        )
      })}

      <a className={styles.voltar} href="/">← Voltar</a>
    </main>
  )
}
