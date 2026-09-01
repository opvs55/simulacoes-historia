import Link from 'next/link'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import styles from './page.module.css'

// Catálogo de simulações. Puxa direto dos módulos de cenário (fonte única
// de verdade) em vez de duplicar título/pergunta como texto solto — quando
// um 4º cenário for criado (ex.: Reforma Protestante, 1ª série), basta
// somar aqui.
const CENARIOS = [saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia]

const NOME_ERA = {
  republica: 'República Velha',
  'era-vargas': 'Era Vargas',
}

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

      <div className={styles.lista}>
        {CENARIOS.map((cenario, indice) => (
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
                {cenario.serie === '1a' ? '1ª série' : '2ª série'} · {cenario.rodadas.length} rodadas · {cenario.papeis.length} papéis
              </span>
              <span className={styles.linkArrow}>Ver detalhes →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
