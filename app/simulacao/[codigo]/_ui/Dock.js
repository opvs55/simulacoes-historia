import styles from './Casca.module.css'

// Rodapé fixo: um botão de ação em largura total, e uma nota de 12px
// explicando a consequência da ação. `fantasma` é um segundo botão
// opcional ao lado (usado só no fecho, "Pular" / "Próxima pergunta").
export default function Dock({ acao, nota, onAcao, desabilitado, fantasma, onFantasma }) {
  return (
    <div className={styles.dock}>
      <div className={styles.dockLinha}>
        {fantasma && (
          <button type="button" className={styles.dockBotaoFantasma} onClick={onFantasma}>
            {fantasma}
          </button>
        )}
        <button type="button" className={styles.dockBotao} onClick={onAcao} disabled={desabilitado}>
          {acao}
        </button>
      </div>
      {nota && <div className={styles.dockNota}>{nota}</div>}
    </div>
  )
}
