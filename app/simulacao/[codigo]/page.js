'use client'

import { useState } from 'react'
import cenario from '@/cenarios/sao-paulo-1917.js'
import { estadoInicial, aplicarRodada } from '@/lib/simulacao/motor.js'
import { sortearPapeis } from '@/lib/simulacao/sorteio.js'
import styles from './page.module.css'

const rodada1 = cenario.rodadas[0]

// Fatia jogável mínima da Fase 3 (seção 14 do GDD): entrar → sorteio →
// decidir a R1 → ver o efeito. Um jogador só, sem Supabase — o sorteio usa
// uma turma fictícia de 12 (semeada pelo apelido, então é reprodutível por
// sessão) só para as cotas terem sentido. A agregação de verdade (a turma
// inteira decidindo, cada voz pesando o que pesa) só existe quando isso
// estiver ligado ao banco — ainda não está.
export default function EntrarNaPartida({ params }) {
  const [etapa, setEtapa] = useState('entrar')
  const [apelido, setApelido] = useState('')
  const [papelSlug, setPapelSlug] = useState(null)
  const [opcaoEscolhida, setOpcaoEscolhida] = useState(null)
  const [justificativa, setJustificativa] = useState('')
  const [estadoFinal, setEstadoFinal] = useState(null)

  const papel = cenario.papeis.find((p) => p.slug === papelSlug)

  function handleEntrar(evento) {
    evento.preventDefault()
    const nome = apelido.trim()
    if (!nome) return

    const turmaDemo = [nome, ...Array.from({ length: 11 }, (_, i) => `colega-${i + 1}`)]
    const semente = Array.from(nome).reduce((soma, c) => soma + c.charCodeAt(0), turmaDemo.length)
    const sorteio = sortearPapeis(turmaDemo, cenario.papeis, semente)

    setPapelSlug(sorteio[nome])
    setEtapa('sorteio')
  }

  function handleDecidir() {
    if (!opcaoEscolhida) return
    const inicial = estadoInicial(cenario)
    const resultado = aplicarRodada(inicial, [{ papelSlug, opcaoSlug: opcaoEscolhida }], cenario, rodada1.slug)
    setEstadoFinal(resultado)
    setEtapa('resultado')
  }

  return (
    <div className={styles.page}>
      <p className={styles.aviso}>
        Modo demonstração — partida &ldquo;{params.codigo}&rdquo;. O sorteio usa uma turma fictícia de 12
        pessoas; a agregação real, com a turma inteira decidindo de verdade, ainda depende do
        Supabase, que é o próximo passo.
      </p>

      {etapa === 'entrar' && (
        <form onSubmit={handleEntrar} className={styles.card}>
          <h1>Entrar na partida</h1>
          <p className={styles.pergunta}>
            {cenario.titulo} — {rodada1.titulo}
          </p>
          <label htmlFor="apelido">Seu apelido</label>
          <input
            id="apelido"
            value={apelido}
            onChange={(evento) => setApelido(evento.target.value)}
            placeholder="ex.: girassol23"
            autoComplete="off"
          />
          <button type="submit">Entrar</button>
        </form>
      )}

      {etapa === 'sorteio' && papel && (
        <div className={styles.card}>
          <span className={styles.selo}>
            {papel.bloco} · peso {papel.peso}
          </span>
          <h1>{papel.nome}</h1>
          <p className={styles.pergunta}>{papel.perguntaGuia}</p>
          <p>{papel.contexto}</p>
          <button onClick={() => setEtapa('rodada')}>Começar a Rodada 1</button>
        </div>
      )}

      {etapa === 'rodada' && papel && (
        <div className={styles.card}>
          <span className={styles.selo}>{papel.nome}</span>
          <h1>{rodada1.titulo}</h1>
          <p>{rodada1.cena}</p>
          <div className={styles.opcoes}>
            {rodada1.opcoesPorPapel[papelSlug].map((opcao) => (
              <label key={opcao.slug} className={styles.opcao}>
                <input
                  type="radio"
                  name="opcao"
                  value={opcao.slug}
                  checked={opcaoEscolhida === opcao.slug}
                  onChange={() => setOpcaoEscolhida(opcao.slug)}
                />
                {opcao.texto}
              </label>
            ))}
          </div>
          <textarea
            placeholder="Por que você decidiu isso? (opcional — ainda não é salvo em lugar nenhum)"
            value={justificativa}
            onChange={(evento) => setJustificativa(evento.target.value)}
            rows={3}
          />
          <button onClick={handleDecidir} disabled={!opcaoEscolhida}>
            Decidir
          </button>
        </div>
      )}

      {etapa === 'resultado' && estadoFinal && papel && (
        <div className={styles.card}>
          <h1>O que sua decisão moveu</h1>
          <p className={styles.aviso2}>
            Sozinho, sua voz vale só o seu peso ({papel.peso}) — numa turma real, o resultado é a
            soma ponderada de todo mundo que jogou.
          </p>
          {cenario.indicadores.map((indicador) => (
            <div key={indicador.slug} className={styles.barraLinha}>
              <span>{indicador.nome}</span>
              <div className={styles.barraFundo}>
                <div
                  className={styles.barraPreenchida}
                  style={{ width: `${estadoFinal.indicadores[indicador.slug]}%` }}
                />
              </div>
              <span>{Math.round(estadoFinal.indicadores[indicador.slug])}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
