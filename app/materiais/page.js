import materiais from '@/materiais/dados.js'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import VideoEmbutido from './VideoEmbutido.js'
import styles from './page.module.css'

const CENARIOS = [saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia]

const ROTULO_TIPO = {
  video: 'Vídeo',
  documentario: 'Documentário',
  texto: 'Texto',
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

      <div className={styles.lista}>
        {materiais.map((item) => (
          <article key={item.slug} className={styles.item}>
            <span className={styles.tipo}>{ROTULO_TIPO[item.tipo] ?? item.tipo}</span>
            <h2>{item.titulo}</h2>
            <p>{item.descricao}</p>
            {item.cenariosRelacionados?.length > 0 && (
              <div className={styles.tags}>
                {item.cenariosRelacionados.map((slug) => {
                  const cenario = CENARIOS.find((c) => c.slug === slug)
                  return cenario ? (
                    <span key={slug} className={styles.tag}>
                      {cenario.titulo}
                    </span>
                  ) : null
                })}
              </div>
            )}
            {item.tipo === 'video' ? (
              <VideoEmbutido url={item.url} titulo={item.titulo} />
            ) : (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Assistir →
              </a>
            )}
          </article>
        ))}
      </div>

      <a className={styles.voltar} href="/">← Voltar</a>
    </main>
  )
}
