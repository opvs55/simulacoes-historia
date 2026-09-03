import Link from 'next/link'
import CodigoTurma from './CodigoTurma.js'
import BarraInferior from '../_ui/BarraInferior.js'
import comum from '../_ui/comum.module.css'
import styles from './page.module.css'

// Página nova — tudo que é coletivo num lugar só (ver
// docs/plano-navegacao-por-periodo.md). Absorve o que antes vivia
// espalhado: o formulário de código que estava na home, e o link para
// /professor que estava junto dele.
export const metadata = {
  title: 'Turma — Histórificando',
}

export default function Turma() {
  return (
    <div className={styles.page}>
      <header className={styles.cabecalho}>
        <p className={comum.kicker}>Módulo Simulações</p>
        <h1>Turma</h1>
      </header>

      <div className={styles.corpo}>
        <section className={styles.bloco}>
          <div className={comum.kicker}>Aluno</div>
          <h2 className={styles.pergunta}>Digite o código que está na lousa</h2>
          <CodigoTurma />
          <p className={styles.nota}>Sem cadastro e sem senha. Você entra com o código e sai quando a rodada fecha.</p>
        </section>

        <div className={styles.linha} />

        <Link href="/professor" className={styles.professorLinha}>
          <div>
            <div className={styles.professorTitulo}>Painel do professor</div>
            <div className={styles.professorMeta}>Abrir partida, acompanhar rodadas, exportar</div>
          </div>
          <span className={styles.emObras}>em obras</span>
        </Link>
      </div>

      <BarraInferior />
    </div>
  )
}
