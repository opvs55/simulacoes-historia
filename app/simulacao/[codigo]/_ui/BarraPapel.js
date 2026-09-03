import styles from './Casca.module.css'

// Barra fixa no topo: quem sou, em que rodada estou. Presente em toda
// fase exceto o sorteio (que é tela cheia, sem casca).
export default function BarraPapel({ papel, subtitulo, indiceRodada, totalRodadas }) {
  return (
    <div className={styles.barra}>
      {papel?.icone ? (
        <img src={papel.icone} alt="" className={styles.retrato} />
      ) : (
        <div className={styles.retratoVazio} />
      )}
      <div className={styles.identidade}>
        <div className={styles.nome}>{papel?.nome}</div>
        <div className={styles.subtitulo}>{subtitulo}</div>
      </div>
      <div className={styles.progresso}>
        {Array.from({ length: totalRodadas }, (_, i) => (
          <span
            key={i}
            className={i <= indiceRodada ? `${styles.progressoTraco} ${styles.progressoTracoFeito}` : styles.progressoTraco}
          />
        ))}
      </div>
    </div>
  )
}
