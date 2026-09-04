import Link from 'next/link'
import { notFound } from 'next/navigation'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import coroaECofre from '@/cenarios/coroa-e-cofre.js'
import tawantinsuyu from '@/cenarios/tawantinsuyu.js'
import styles from './page.module.css'

const CENARIOS = [saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia, coroaECofre, tawantinsuyu]

const NOME_ERA = {
  republica: 'República Velha',
  'era-vargas': 'Era Vargas',
  absolutismo: 'Absolutismo',
  colonizacao: 'Impérios pré-colombianos',
}

export function generateStaticParams() {
  return CENARIOS.map((cenario) => ({ slug: cenario.slug }))
}

export function generateMetadata({ params }) {
  const cenario = CENARIOS.find((c) => c.slug === params.slug)
  return { title: cenario ? `${cenario.titulo} — Histórificando` : 'Simulação — Histórificando' }
}

export default function DetalheSimulacao({ params }) {
  const cenario = CENARIOS.find((c) => c.slug === params.slug)
  if (!cenario) notFound()

  return (
    <div className={styles.page}>
      <Link href="/simulacoes" className={styles.voltar}>← Voltar às simulações</Link>

      <div className={styles.kicker}>
        {cenario.serie === '1a' ? '1ª série' : '2ª série'} · {NOME_ERA[cenario.era] ?? cenario.era}
      </div>

      <h1>{cenario.titulo}</h1>

      <p className={styles.pergunta}>&ldquo;{cenario.pergunta}&rdquo;</p>

      <div className={styles.plate}>
        <img src={`/imagens/${cenario.slug}/capa.jpg`} alt="" />
      </div>

      {cenario.introducao && <p className={styles.introducao}>{cenario.introducao}</p>}

      <span className={styles.selo}>
        {cenario.rodadas.length} rodadas · {cenario.papeis.length} papéis · 15–20 min de turma inteira
      </span>

      <section className={styles.secao}>
        <h2 className={styles.small}>Quem você pode ser</h2>
        <p className={styles.justify}>
          Você é sorteado para um destes papéis — cada um vê a crise de um lugar diferente, com
          informação e poder de decisão diferentes.
        </p>
        <div className={styles.elencoGrade}>
          {cenario.papeis.map((papel) => (
            <div key={papel.slug} className={styles.elencoItem}>
              {papel.icone ? (
                <img src={papel.icone} alt="" />
              ) : (
                <div className={styles.elencoSemIcone} />
              )}
              <span>{papel.nome}</span>
            </div>
          ))}
        </div>
      </section>

      {cenario.indicadores && cenario.indicadores.length > 0 && (
        <section className={styles.secao}>
          <h2 className={styles.small}>O que está em jogo</h2>
          <p className={styles.justify}>
            As decisões da turma inteira movem estes indicadores rodada após rodada, e definem o
            desfecho no final.
          </p>
          <div className={styles.tags}>
            {cenario.indicadores.map((indicador) => (
              <span key={indicador.slug} className={styles.tag}>{indicador.nome}</span>
            ))}
          </div>
        </section>
      )}

      <div className={styles.acoes}>
        <Link href={`/simulacao/DEMO01?cenario=${cenario.slug}`} className={styles.btn}>
          Jogar esta simulação <span className={styles.arrow}>→</span>
        </Link>
        <Link href="/materiais" className={styles.linkArrow}>Ver materiais alternativos →</Link>
      </div>

      <p className={styles.aviso}>
        Modo demonstração: o sorteio usa uma turma fictícia de 12 pessoas. Numa aula de verdade, o
        professor abre uma sala pelo <Link href="/professor" className={styles.link}>painel do professor</Link> e
        a turma inteira entra pelo mesmo código — é a soma das decisões de todo mundo que decide o desfecho.
      </p>
    </div>
  )
}
