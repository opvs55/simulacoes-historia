'use client'

import { useState } from 'react'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import { resolverJuri } from '@/lib/juri/extrair.js'
import styles from './page.module.css'

const CENARIOS = [saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia].filter((c) => c.juri)

// Atividade em GRUPO, presencial — não é um jogo individual como os outros
// dois. A turma se divide em times, cada time recebe só as evidências do
// seu lado (não todas), e monta um argumento sobre uma pergunta que não
// tem resposta fechada. A página só prepara os cards; o debate acontece
// na sala, mediado pelo professor — por isso o botão de imprimir.
export default function Juri() {
  const [cenario, setCenario] = useState(CENARIOS[0])
  const juri = resolverJuri(cenario)

  return (
    <div className={styles.page}>
      <div className={styles.cabecalho}>
        <p className={styles.kicker}>Júri histórico</p>
        <h1>Argumentem com o que vocês têm</h1>
        <p className={styles.intro}>
          Divida a turma em times. Cada time só vê as evidências do próprio lado — como um
          historiador de verdade, que nunca tem acesso a todas as fontes de uma vez. Cada time
          monta um argumento e apresenta pro resto da turma. Não existe resposta certa pra
          copiar: a pergunta é genuinamente aberta.
        </p>
      </div>

      <div className={styles.seletor}>
        {CENARIOS.map((c) => (
          <button
            key={c.slug}
            className={c.slug === cenario.slug ? styles.cenarioBotaoAtivo : styles.cenarioBotao}
            onClick={() => setCenario(c)}
          >
            {c.titulo}
          </button>
        ))}
      </div>

      <p className={styles.pergunta}>&ldquo;{juri.pergunta}&rdquo;</p>

      <div className={styles.lados}>
        {juri.lados.map((lado) => (
          <div key={lado.nome} className={styles.lado}>
            <h2>{lado.nome}</h2>
            <div className={styles.cards}>
              {lado.fontes.map((fonte, indice) => (
                <div key={indice} className={styles.card}>
                  <span className={styles.cardRodada}>{fonte.rodadaTitulo}</span>
                  <blockquote>&ldquo;{fonte.texto ?? fonte.trecho}&rdquo;</blockquote>
                  <p className={styles.cardCredito}>
                    {fonte.autor}
                    {fonte.acervo ? ` — ${fonte.acervo}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.acoes}>
        <button onClick={() => window.print()}>Imprimir os cards</button>
        <a className={styles.voltar} href="/">← Voltar</a>
      </div>
    </div>
  )
}
