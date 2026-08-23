import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span className={styles.status}>Infraestrutura — sem conteúdo de cenário ainda</span>
        <h1>Módulo Simulações</h1>
        <p className={styles.pergunta}>
          &ldquo;Quem foi que decidiu que o pão ia custar o dobro?&rdquo;
        </p>
        <p>
          Simulação social de turma para aulas de História: o aluno é sorteado para uma
          posição social, decide dentro de uma crise histórica real ao longo de 5 rodadas
          assíncronas, e no fim descobre que o resultado foi da turma inteira — não dele.
        </p>
        <ul className={styles.lista}>
          <li>Motor puro (sorteio, coesão, agregação ponderada, saldo) — implementado e testado</li>
          <li>Banco de dados (Supabase) — schema pronto, aguardando um projeto real</li>
          <li>Conteúdo de &ldquo;São Paulo, 1917&rdquo; — ainda não escrito (Fase 1 do roadmap)</li>
          <li>Telas de aluno e painel do professor — ainda não implementadas</li>
        </ul>
        <nav className={styles.links}>
          <a href="/simulacao/DEMO01">/simulacao/[codigo]</a>
          <a href="/professor">/professor</a>
        </nav>
      </main>
    </div>
  )
}
