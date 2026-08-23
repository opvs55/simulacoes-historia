'use client'

import { useState } from 'react'
import cenario from '@/cenarios/sao-paulo-1917.js'
import { estadoInicial, aplicarRodada } from '@/lib/simulacao/motor.js'
import { sortearPapeis } from '@/lib/simulacao/sorteio.js'
import styles from './page.module.css'

// Fatia jogável mínima da Fase 3 (seção 14 do GDD): entrar → sorteio →
// decidir as 5 rodadas em sequência → ver o fecho. Um jogador só, sem
// Supabase — o sorteio usa uma turma fictícia de 12 (semeada pelo apelido,
// então é reprodutível por sessão) só para as cotas terem sentido. A
// agregação de verdade (a turma inteira decidindo, cada voz pesando o que
// pesa) só existe quando isso estiver ligado ao banco — ainda não está.
export default function EntrarNaPartida({ params }) {
  const [etapa, setEtapa] = useState('entrar')
  const [apelido, setApelido] = useState('')
  const [papelSlug, setPapelSlug] = useState(null)
  const [rodadaIndice, setRodadaIndice] = useState(0)
  const [estado, setEstado] = useState(null)
  const [ultimoEfeito, setUltimoEfeito] = useState(null)
  const [opcaoEscolhida, setOpcaoEscolhida] = useState(null)
  const [justificativa, setJustificativa] = useState('')

  const papel = cenario.papeis.find((p) => p.slug === papelSlug)
  const rodadaAtual = cenario.rodadas[rodadaIndice]
  const ehUltimaRodada = rodadaIndice === cenario.rodadas.length - 1

  function handleEntrar(evento) {
    evento.preventDefault()
    const nome = apelido.trim()
    if (!nome) return

    const turmaDemo = [nome, ...Array.from({ length: 11 }, (_, i) => `colega-${i + 1}`)]
    const semente = Array.from(nome).reduce((soma, c) => soma + c.charCodeAt(0), turmaDemo.length)
    const sorteio = sortearPapeis(turmaDemo, cenario.papeis, semente)

    setPapelSlug(sorteio[nome])
    setEstado(estadoInicial(cenario))
    setEtapa('sorteio')
  }

  function handleDecidir() {
    if (!opcaoEscolhida) return
    const resultado = aplicarRodada(estado, [{ papelSlug, opcaoSlug: opcaoEscolhida }], cenario, rodadaAtual.slug)
    setUltimoEfeito(resultado)
    setEstado(resultado)
    setEtapa('resultado')
  }

  function handleContinuar() {
    if (ehUltimaRodada) {
      setEtapa('fim')
      return
    }
    setRodadaIndice((indice) => indice + 1)
    setOpcaoEscolhida(null)
    setJustificativa('')
    setEtapa('rodada')
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
          <p className={styles.pergunta}>{cenario.titulo}</p>
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
          <span className={styles.selo}>
            Rodada {rodadaIndice + 1} de {cenario.rodadas.length} · {papel.nome}
          </span>
          <h1>{rodadaAtual.titulo}</h1>
          <p>{rodadaAtual.cena}</p>
          <div className={styles.opcoes}>
            {rodadaAtual.opcoesPorPapel[papelSlug].map((opcao) => (
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

      {etapa === 'resultado' && ultimoEfeito && papel && (
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
                  style={{ width: `${ultimoEfeito.indicadores[indicador.slug]}%` }}
                />
              </div>
              <span>{Math.round(ultimoEfeito.indicadores[indicador.slug])}</span>
            </div>
          ))}
          <button onClick={handleContinuar}>
            {ehUltimaRodada ? 'Ver o fecho' : `Continuar para "${cenario.rodadas[rodadaIndice + 1].titulo}"`}
          </button>
        </div>
      )}

      {etapa === 'fim' && estado && papel && (
        <div className={styles.card}>
          <h1>Fecho</h1>
          <p>{cenario.desfecho.textoFecho}</p>
          {cenario.indicadores.map((indicador) => (
            <div key={indicador.slug} className={styles.barraLinha}>
              <span>{indicador.nome}</span>
              <div className={styles.barraFundo}>
                <div
                  className={styles.barraPreenchida}
                  style={{ width: `${estado.indicadores[indicador.slug]}%` }}
                />
              </div>
              <span>{Math.round(estado.indicadores[indicador.slug])}</span>
            </div>
          ))}
          <p className={styles.pergunta}>Perguntas para a roda de conversa:</p>
          <ul>
            {cenario.desfecho.perguntasDebate.map((pergunta) => (
              <li key={pergunta}>{pergunta}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
