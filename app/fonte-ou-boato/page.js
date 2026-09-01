'use client'

import { useState } from 'react'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import { extrairCards } from '@/lib/fonte-ou-boato/extrair.js'
import styles from './page.module.css'

const CENARIOS = [saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia]
const TODOS_OS_CARDS = extrairCards(CENARIOS)
const TAMANHO_BARALHO = 10

const OPCOES = [
  { categoria: 'documental', rotulo: 'Documental', descricao: 'registro histórico real' },
  { categoria: 'recriada', rotulo: 'Recriada', descricao: 'reconstituição plausível, não é citação real' },
  { categoria: 'boato', rotulo: 'Boato', descricao: 'espalhado na história, mas nunca aconteceu' },
]

function sortearBaralho() {
  const copia = [...TODOS_OS_CARDS]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia.slice(0, TAMANHO_BARALHO)
}

export default function FonteOuBoato() {
  const [etapa, setEtapa] = useState('inicio')
  const [baralho, setBaralho] = useState([])
  const [indice, setIndice] = useState(0)
  const [respostaEscolhida, setRespostaEscolhida] = useState(null)
  const [mostrarFeedback, setMostrarFeedback] = useState(false)
  const [acertos, setAcertos] = useState(0)

  const cardAtual = baralho[indice]
  const acertou = respostaEscolhida === cardAtual?.categoria

  function handleComecar() {
    setBaralho(sortearBaralho())
    setIndice(0)
    setRespostaEscolhida(null)
    setMostrarFeedback(false)
    setAcertos(0)
    setEtapa('jogando')
  }

  function handleConfirmar() {
    if (!respostaEscolhida) return
    if (respostaEscolhida === cardAtual.categoria) {
      setAcertos((a) => a + 1)
    }
    setMostrarFeedback(true)
  }

  function handleProximo() {
    if (indice + 1 >= baralho.length) {
      setEtapa('fim')
      return
    }
    setIndice((i) => i + 1)
    setRespostaEscolhida(null)
    setMostrarFeedback(false)
  }

  return (
    <div className={styles.page}>
      {etapa === 'inicio' && (
        <div className={styles.card}>
          <span className={styles.kicker}>Fonte ou Boato?</span>
          <h1>Fonte ou boato?</h1>
          <p className={styles.pergunta}>
            &ldquo;Como você sabe que isso é verdade?&rdquo;
          </p>
          <p>
            {TAMANHO_BARALHO} trechos, tirados direto das simulações que você já jogou (ou vai
            jogar). Pra cada um, você decide: é um registro histórico real, uma reconstituição
            plausível criada pro jogo, ou um boato — coisa que circulou, mas nunca aconteceu?
          </p>
          <p className={styles.aviso2}>
            Não é pegadinha — é treino pra reconhecer, fora do jogo também, quando uma fonte
            merece confiança.
          </p>
          <button onClick={handleComecar}>Começar</button>
        </div>
      )}

      {etapa === 'jogando' && cardAtual && (
        <div className={styles.card}>
          <span className={styles.kicker}>
            Card {indice + 1} de {baralho.length} · {cardAtual.cenarioTitulo} · {cardAtual.rodadaTitulo}
          </span>
          <blockquote className={styles.trecho}>&ldquo;{cardAtual.trecho}&rdquo;</blockquote>

          {!mostrarFeedback && (
            <>
              <div className={styles.opcoes}>
                {OPCOES.map((opcao) => (
                  <label key={opcao.categoria} className={styles.opcao}>
                    <input
                      type="radio"
                      name="categoria"
                      checked={respostaEscolhida === opcao.categoria}
                      onChange={() => setRespostaEscolhida(opcao.categoria)}
                    />
                    <span>
                      <strong>{opcao.rotulo}</strong> — {opcao.descricao}
                    </span>
                  </label>
                ))}
              </div>
              <button onClick={handleConfirmar} disabled={!respostaEscolhida}>
                Confirmar
              </button>
            </>
          )}

          {mostrarFeedback && (
            <>
              <div className={acertou ? styles.feedbackCerto : styles.feedbackErrado}>
                <strong>{acertou ? 'Você acertou' : 'Não foi dessa vez'}</strong>
                <span>
                  Isto é <strong>{OPCOES.find((o) => o.categoria === cardAtual.categoria)?.rotulo}</strong>.
                </span>
              </div>
              {cardAtual.categoria === 'documental' && (
                <p className={styles.explicacao}>
                  {cardAtual.autor}
                  {cardAtual.acervo ? ` — ${cardAtual.acervo}` : ''}
                </p>
              )}
              {cardAtual.categoria === 'boato' && cardAtual.revelacaoNoFecho && (
                <p className={styles.explicacao}>{cardAtual.revelacaoNoFecho}</p>
              )}
              {cardAtual.categoria === 'recriada' && (
                <p className={styles.explicacao}>
                  Não é uma citação real, mas representa fielmente algo documentado sobre o período — não é boato.
                </p>
              )}
              <button onClick={handleProximo}>
                {indice + 1 >= baralho.length ? 'Ver resultado' : 'Próximo card'}
              </button>
            </>
          )}
        </div>
      )}

      {etapa === 'fim' && (
        <div className={styles.card}>
          <h1>Resultado</h1>
          <p className={styles.pergunta}>
            {acertos} de {baralho.length} — {acertos === baralho.length ? 'baralho inteiro' : 'nada mau'}.
          </p>
          <p>
            Volte a esta página quando quiser: o baralho é sorteado de novo a cada partida, e há
            mais trechos do que cabem numa rodada só.
          </p>
          <button onClick={handleComecar}>Jogar de novo</button>
        </div>
      )}

      <a className={styles.voltar} href="/">← Voltar</a>
    </div>
  )
}
