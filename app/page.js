import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.kicker}>Currículo em ação · simulação social de turma</p>
        <h1 className={styles.nameplate}>Módulo Simulações</h1>
        <div className={styles.regraDupla} />

        <p className={styles.pergunta}>
          &ldquo;Quem foi que decidiu que o pão ia custar o dobro?&rdquo;
        </p>
        <p className={styles.corpo}>
          Simulação social de turma para aulas de História: o aluno é sorteado para uma
          posição social, decide dentro de uma crise histórica real ao longo de várias
          rodadas, e no fim descobre que o resultado foi da turma inteira — não dele.
        </p>

        <div className={styles.indice}>
          <p className={styles.indiceTitulo}>Nesta edição</p>
          <ul className={styles.lista}>
            <li>Motor puro (sorteio, coesão, agregação ponderada, saldo) — implementado e testado</li>
            <li>Banco de dados (Supabase) — ligado, schema aplicado</li>
            <li>3 simulações jogáveis: São Paulo 1917, coronelismo/voto de cabresto, Plano Cohen</li>
            <li>Painel do professor e fluxo de código de turma — ainda não implementados</li>
          </ul>
        </div>

        <nav className={styles.links}>
          <a href="/simulacao/DEMO01">Jogar uma simulação →</a>
          <a href="/professor">Painel do professor →</a>
        </nav>
      </main>
    </div>
  )
}
