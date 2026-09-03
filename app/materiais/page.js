'use client'

import { useState } from 'react'
import materiaisData from '@/materiais/dados.js'
import coroaECofre from '@/cenarios/coroa-e-cofre.js'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import LinhaItem from './LinhaItem.js'
import styles from './page.module.css'

// mesma ordem de /simulacoes: 1ª série primeiro.
const CENARIOS = [coroaECofre, saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia]

const SERIES = [
  { slug: '1a', rotulo: '1ª série' },
  { slug: '2a', rotulo: '2ª série' },
]

// agrupa pelo PRIMEIRO cenário relacionado — um item nunca aparece em
// duas seções. Sem cenário relacionado cai à parte, pro grupo recolhido
// do fim (ver design_handoff_simulacoes/README.md, Parte 2).
function agruparPorCenario(itens) {
  const porCenario = new Map()
  const semCenario = []
  for (const item of itens) {
    const slug = item.cenariosRelacionados?.[0]
    if (!slug) {
      semCenario.push(item)
      continue
    }
    if (!porCenario.has(slug)) porCenario.set(slug, [])
    porCenario.get(slug).push(item)
  }
  return { porCenario, semCenario }
}

// dentro do grupo, a linha do tempo (o material principal, mais largo)
// vem antes do resto — mantém a ordem original entre os demais.
function ordenarGrupo(itens) {
  return [...itens].sort((a, b) => {
    if (a.tipo === 'linha-do-tempo' && b.tipo !== 'linha-do-tempo') return -1
    if (b.tipo === 'linha-do-tempo' && a.tipo !== 'linha-do-tempo') return 1
    return 0
  })
}

function ListaDeItens({ itens, cenario }) {
  return (
    <div className={styles.videoLista}>
      {itens.map((item, indice) => (
        <LinhaItem key={item.slug} item={item} cenario={cenario} proximoItem={itens[indice + 1] ?? null} />
      ))}
    </div>
  )
}

export default function Materiais() {
  const [serie, setSerie] = useState('1a')

  const itensDaSerie = materiaisData.filter((item) => item.serie === serie)
  const cenariosDaSerie = CENARIOS.filter((c) => c.serie === serie)
  const { porCenario, semCenario } = agruparPorCenario(itensDaSerie)

  return (
    <main className={styles.page}>
      <p className={styles.kicker}>Módulo Simulações</p>
      <h1>Materiais</h1>
      <div className={styles.regua} />
      <p className={styles.intro}>
        Pano de fundo para entender o momento histórico antes ou depois de jogar.{' '}
        <strong>Nada aqui é obrigatório.</strong>
      </p>

      <div className={styles.seg} role="tablist" aria-label="Série">
        {SERIES.map((s) => (
          <button
            key={s.slug}
            type="button"
            role="tab"
            aria-selected={serie === s.slug}
            className={serie === s.slug ? `${styles.segOpt} ${styles.segOptAtivo}` : styles.segOpt}
            onClick={() => setSerie(s.slug)}
          >
            {s.rotulo}
          </button>
        ))}
      </div>

      {cenariosDaSerie.map((cenario) => {
        const itens = ordenarGrupo(porCenario.get(cenario.slug) ?? [])
        if (itens.length === 0) return null
        return (
          <section key={cenario.slug} className={styles.grupoCenario}>
            <a className={styles.grupoCabecalho} href={`/simulacao/DEMO01?cenario=${cenario.slug}`}>
              <img src={`/imagens/${cenario.slug}/capa.jpg`} alt="" className={styles.grupoCapa} />
              <span className={styles.grupoIdentidade}>
                <span className={styles.grupoRotulo}>Prepara para</span>
                <span className={styles.grupoTitulo}>{cenario.titulo}</span>
              </span>
              <span className={styles.grupoJogar}>Jogar →</span>
            </a>
            <ListaDeItens itens={itens} cenario={cenario} />
          </section>
        )
      })}

      {semCenario.length > 0 && (
        <details className={styles.semCenario}>
          <summary>
            Sem simulação ligada · {semCenario.length} {semCenario.length === 1 ? 'item' : 'itens'}
          </summary>
          <ListaDeItens itens={ordenarGrupo(semCenario)} cenario={null} />
        </details>
      )}

      <a className={styles.voltar} href="/">← Voltar</a>
    </main>
  )
}
