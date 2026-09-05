import Link from 'next/link'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import coroaECofre from '@/cenarios/coroa-e-cofre.js'
import tawantinsuyu from '@/cenarios/tawantinsuyu.js'
import tenochtitlan from '@/cenarios/tenochtitlan.js'
import casaDaIndia from '@/cenarios/casa-da-india.js'
import styles from './page.module.css'

// Catálogo de simulações. Puxa direto dos módulos de cenário (fonte única
// de verdade) em vez de duplicar título/pergunta como texto solto — quando
// um novo cenário for criado, basta somar aqui.
const CENARIOS = [saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia, coroaECofre, tawantinsuyu, tenochtitlan, casaDaIndia]

const NOME_ERA = {
  republica: 'República Velha',
  'era-vargas': 'Era Vargas',
  absolutismo: 'Absolutismo',
  colonizacao: 'Impérios pré-colombianos',
}

// Agrupadas por série em vez de uma lista única — ver
// docs/plano-curriculo-1a-2a-serie.md, seção 2. Cada seção só aparece
// quando tem pelo menos 1 cenário; hoje só a 2ª série está povoada, mas o
// agrupamento já fica pronto para quando "A Coroa e o Cofre" (1ª série)
// entrar, sem precisar tocar nesta página de novo.
const SERIES = [
  { slug: '1a', rotulo: '1ª série' },
  { slug: '2a', rotulo: '2ª série' },
]

export const metadata = {
  title: 'Simulações — Histórificando',
}

export default function Simulacoes() {
  return (
    <div className={styles.page}>
      <Link href="/" className={styles.voltar}>← Voltar ao início</Link>

      <header className={styles.cabecalho}>
        <div className={styles.kicker}>Simulações jogáveis</div>
        <h1>Escolha uma simulação</h1>
        <p className={styles.intro}>
          Cada simulação sorteia uma posição social diferente para cada aluno dentro de uma crise
          histórica real. Ninguém vê o tabuleiro inteiro — o desfecho é da turma, não de um aluno
          só. Esta lista cresce: mais simulações, de outros conteúdos e séries, entram aqui aos poucos.
        </p>
      </header>

      {SERIES.map((serie) => {
        const cenariosDaSerie = CENARIOS.filter((c) => c.serie === serie.slug)
        if (cenariosDaSerie.length === 0) return null

        return (
          <section key={serie.slug} className={styles.grupo}>
            <h2 className={styles.grupoTitulo}>{serie.rotulo}</h2>
            <div className={styles.lista}>
              {cenariosDaSerie.map((cenario, indice) => (
                <Link key={cenario.slug} href={`/simulacoes/${cenario.slug}`} className={styles.item}>
                  <div className={styles.itemPlate}>
                    <img src={`/imagens/${cenario.slug}/capa.jpg`} alt="" />
                  </div>
                  <div className={styles.itemCorpo}>
                    <div className={`${styles.kicker} ${styles.tnum}`}>
                      {String(indice + 1).padStart(2, '0')} · {NOME_ERA[cenario.era] ?? cenario.era}
                    </div>
                    <h2>{cenario.titulo}</h2>
                    <p className={styles.pergunta}>&ldquo;{cenario.pergunta}&rdquo;</p>
                    <span className={styles.selo}>
                      {cenario.rodadas.length} rodadas · {cenario.papeis.length} papéis
                    </span>
                    <span className={styles.linkArrow}>Ver detalhes →</span>
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
