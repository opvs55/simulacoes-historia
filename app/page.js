'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import eras from '@/cenarios/eras.js'
import linhasDoTempo from '@/materiais/linhas-do-tempo.js'
import coroaECofre from '@/cenarios/coroa-e-cofre.js'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import tawantinsuyu from '@/cenarios/tawantinsuyu.js'
import tenochtitlan from '@/cenarios/tenochtitlan.js'
import { lerSeriePreferida, salvarSeriePreferida } from '@/lib/serie-preferida.js'
import { encontrarEmAndamento } from '@/lib/progresso-timeline.js'
import BarraInferior from './_ui/BarraInferior.js'
import comum from './_ui/comum.module.css'
import styles from './page.module.css'

const CENARIOS = [coroaECofre, tawantinsuyu, tenochtitlan, saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia]
const ROTULO_SERIE = { '1a': '1ª série', '2a': '2ª série' }

// Home nova, seguindo docs/plano-navegacao-por-periodo.md — "papel para
// escolher": faixa compacta no lugar do masthead de 96px, "onde você
// parou" (lê o progresso que TimelineShell já grava sozinho) e "o tema
// de agora" no lugar da grade de 3 simulações + roadmap técnico. Client
// component porque depende de localStorage (série escolhida, progresso);
// tudo começa "vazio" (igual no servidor) e só aparece depois de montar,
// pra não dar erro de hidratação.
export default function Home() {
  const [serie, setSerie] = useState('1a')
  const [montado, setMontado] = useState(false)

  useEffect(() => {
    setSerie(lerSeriePreferida())
    setMontado(true)
  }, [])

  function trocarSerie() {
    const proxima = serie === '1a' ? '2a' : '1a'
    setSerie(proxima)
    salvarSeriePreferida(proxima)
  }

  const erasDaSerie = eras.filter((e) => e.serie === serie)
  const linhasDaSerie = linhasDoTempo.filter((l) => l.serie === serie)
  const emAndamento = montado ? encontrarEmAndamento(linhasDaSerie) : null

  const temaDeAgora = emAndamento
    ? eras.find((e) => e.slug === emAndamento.era)
    : erasDaSerie[0]
  const linhaDoTema = temaDeAgora ? linhasDaSerie.find((l) => l.era === temaDeAgora.slug) : null
  const cenarioDoTema = temaDeAgora ? CENARIOS.find((c) => c.era === temaDeAgora.slug) : null

  return (
    <div className={styles.page}>
      <header className={styles.cabecalho}>
        <div className={styles.cabecalhoConteudo}>
          <div className={styles.marca}>Histórificando</div>
          <button type="button" className={styles.serieBotao} onClick={trocarSerie}>
            {ROTULO_SERIE[serie]} ⌄
          </button>
        </div>
      </header>

      <div className={styles.corpo}>
        {emAndamento && (
          <section className={styles.bloco}>
            <div className={comum.kicker}>Onde você parou</div>
            <Link href={`/linha-do-tempo/${emAndamento.slug}`} className={styles.retomarLinha}>
              <div className={`${comum.plate} ${styles.retomarCapa}`}>
                <img src={emAndamento.capa} alt="" />
              </div>
              <div className={styles.retomarCorpo}>
                <div className={styles.retomarTitulo}>{emAndamento.titulo}</div>
                <div className={comum.progresso}>
                  <div className={comum.progressoTraco} style={{ width: `${emAndamento.percentual}%` }} />
                </div>
                <div className={styles.retomarMeta}>
                  tela {emAndamento.indice + 1} de {emAndamento.telas}
                </div>
              </div>
            </Link>
            <Link href={`/linha-do-tempo/${emAndamento.slug}`} className={`${comum.btn} ${styles.retomarBotao}`}>
              Continuar de onde parei
            </Link>
          </section>
        )}

        {temaDeAgora && (
          <section className={styles.bloco}>
            <div className={comum.kicker}>O tema de agora</div>
            <Link href={`/estudar/${temaDeAgora.slug}`} className={styles.temaFaixa}>
              <img src={temaDeAgora.capa} alt="" />
              <div className={styles.temaGradiente} />
              <div className={styles.temaTexto}>
                <div className={styles.temaPeriodo}>{temaDeAgora.periodo}</div>
                <div className={styles.temaNome}>{temaDeAgora.nome}</div>
              </div>
            </Link>
            <div className={styles.temaAcoes}>
              {linhaDoTema && (
                <Link href={`/linha-do-tempo/${linhaDoTema.slug}`} className={styles.temaAcaoLinha}>
                  <span className={styles.temaAcaoVerbo}>Ler</span>
                  <span className={styles.temaAcaoTexto}>Linha do tempo, {linhaDoTema.telas} telas</span>
                  <span className={styles.temaAcaoMeta}>{linhaDoTema.duracaoMin} min</span>
                </Link>
              )}
              {cenarioDoTema && (
                <Link href={`/simulacoes/${cenarioDoTema.slug}`} className={styles.temaAcaoLinha}>
                  <span className={styles.temaAcaoVerbo}>Jogar</span>
                  <span className={styles.temaAcaoTexto}>{cenarioDoTema.titulo}</span>
                  <span className={styles.temaAcaoMeta}>turma</span>
                </Link>
              )}
            </div>
            <Link href={`/estudar/${temaDeAgora.slug}`} className={styles.verPeriodo}>
              Ver o período inteiro →
            </Link>
          </section>
        )}

        {!temaDeAgora && (
          <section className={styles.bloco}>
            <p className={styles.semConteudo}>
              Ainda não há período cadastrado para a {ROTULO_SERIE[serie]}.
            </p>
          </section>
        )}
      </div>

      <BarraInferior />
    </div>
  )
}
