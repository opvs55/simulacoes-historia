import styles from './page.module.css'

export default function PainelDoProfessor() {
  return (
    <main className={styles.page}>
      <p className={styles.kicker}>Módulo Simulações</p>
      <h1>Painel do professor</h1>
      <div className={styles.regra} />
      <p>
        Abrir partida, acompanhar entregas, ler justificativas e fechar/exportar ainda não
        implementados — Fase 4 do roadmap (ver <code>docs/GDD-v2-modulo-simulacoes.md</code>).
      </p>
      <a className={styles.voltar} href="/">← Voltar</a>
    </main>
  )
}
