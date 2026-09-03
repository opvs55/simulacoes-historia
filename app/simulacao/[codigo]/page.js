'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import coroaECofre from '@/cenarios/coroa-e-cofre.js'
import { estadoInicial, aplicarRodada } from '@/lib/simulacao/motor.js'
import { sortearPapeis } from '@/lib/simulacao/sorteio.js'
import { estimarColegasQueDecidiramIgual } from '@/lib/simulacao/turma-ficticia.js'
import BarraPapel from './_ui/BarraPapel.js'
import Dock from './_ui/Dock.js'
import styles from './page.module.css'

const CENARIOS = [saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia, coroaECofre]

const ROTULO_TIPO_FONTE = { ler: 'Ler', olhar: 'Olhar', ouvir: 'Ouvir' }

function faixaEmPalavras(indicador, valor) {
  const [baixa, media, alta] = indicador.faixas
  if (valor < 34) return baixa
  if (valor < 67) return media
  return alta
}

// Player em modo app — casca fixa (BarraPapel + Dock) com seis fases:
// sorteio, cena, investigar (bottom sheet), decidir, consequência, fecho.
// Ver design_handoff_simulacoes/README.md para o raciocínio completo.
// Motor (lib/simulacao/motor.js) e contrato de cenário (cenarios/schema.md)
// não mudam — isto é só a camada de apresentação por cima deles.
export default function EntrarNaPartida({ params }) {
  const searchParams = useSearchParams()
  const [etapa, setEtapa] = useState('escolher-cenario')
  const [cenario, setCenario] = useState(null)
  const [apelido, setApelido] = useState('')
  const [papelSlug, setPapelSlug] = useState(null)
  const [semente, setSemente] = useState(0)
  const [rodadaIndice, setRodadaIndice] = useState(0)
  const [estado, setEstado] = useState(null)
  const [estadoAnterior, setEstadoAnterior] = useState(null)
  const [ultimoEfeito, setUltimoEfeito] = useState(null)
  const [opcaoEscolhida, setOpcaoEscolhida] = useState(null)
  const [justificativa, setJustificativa] = useState('')
  const [respostasReflexao, setRespostasReflexao] = useState({})
  const [reacaoEscolhida, setReacaoEscolhida] = useState(null)
  const [fontesLidas, setFontesLidas] = useState([])
  const [investigarAberto, setInvestigarAberto] = useState(false)
  const [enquantoIssoAberto, setEnquantoIssoAberto] = useState(false)
  const [reflexaoPasso, setReflexaoPasso] = useState(0)

  // Vindo de /simulacoes/[slug] com "Jogar esta simulação": pula a tela de
  // escolha e já entra direto no cenário pedido, se o slug for válido.
  useEffect(() => {
    const slugPedido = searchParams.get('cenario')
    const encontrado = CENARIOS.find((c) => c.slug === slugPedido)
    if (encontrado) {
      setCenario(encontrado)
      setEtapa('entrar')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const papel = cenario?.papeis.find((p) => p.slug === papelSlug)
  const rodadaAtual = cenario?.rodadas[rodadaIndice]
  const ehUltimaRodada = cenario ? rodadaIndice === cenario.rodadas.length - 1 : false
  const todasOpcoes = rodadaAtual?.opcoesPorPapel[papelSlug] ?? []
  // uma opção só aparece se não depende de nenhuma fonte, ou se PELO MENOS
  // UMA das fontes que a destranca já foi lida nesta rodada — mais de uma
  // fonte pode destravar a mesma opção (ex.: sao-paulo-1917, duas fontes
  // diferentes justificando "propor-salario-igual"), então não basta achar
  // a primeira que bate, tem que checar todas.
  function fontesQueDestrancam(opcaoSlug) {
    return rodadaAtual?.investigacao?.fontes?.filter((f) => f.destrancaOpcao === opcaoSlug) ?? []
  }
  const opcoesVisiveis = todasOpcoes.filter((opcao) => {
    const fontes = fontesQueDestrancam(opcao.slug)
    return fontes.length === 0 || fontes.some((f) => fontesLidas.includes(f.slug))
  })
  const opcaoSelecionada = todasOpcoes.find((opcao) => opcao.slug === opcaoEscolhida)
  const imagemContexto = rodadaAtual?.imagemContexto?.porPapel?.[papelSlug] ?? rodadaAtual?.imagemContexto
  const reacaoSelecionada = opcaoSelecionada?.evento?.reacoes.find((reacao) => reacao.slug === reacaoEscolhida)
  const fontesDoPapel = rodadaAtual?.investigacao?.fontes?.filter((f) => f.papeis.includes(papelSlug)) ?? []
  const totalFontesParaContagem = fontesDoPapel.length + (rodadaAtual?.investigacao?.olhar ? 1 : 0)

  function handleEscolherCenario(cenarioEscolhido) {
    setCenario(cenarioEscolhido)
    setEtapa('entrar')
  }

  function handleEntrar(evento) {
    evento.preventDefault()
    const nome = apelido.trim()
    if (!nome) return

    const turmaDemo = [nome, ...Array.from({ length: 11 }, (_, i) => `colega-${i + 1}`)]
    const sementeCalculada = Array.from(nome).reduce((soma, c) => soma + c.charCodeAt(0), turmaDemo.length)
    const sorteio = sortearPapeis(turmaDemo, cenario.papeis, sementeCalculada)

    setSemente(sementeCalculada)
    setPapelSlug(sorteio[nome])
    setEstado(estadoInicial(cenario))
    setEtapa('sorteio')
  }

  function handleAbrirInvestigar() {
    setInvestigarAberto(true)
  }

  function handleFecharInvestigar() {
    setInvestigarAberto(false)
  }

  function handleLerFonte(fonteSlug) {
    setFontesLidas((anteriores) => (anteriores.includes(fonteSlug) ? anteriores : [...anteriores, fonteSlug]))
  }

  function handleDecidir() {
    if (!opcaoEscolhida) return
    const opcao = todasOpcoes.find((o) => o.slug === opcaoEscolhida)
    setEstadoAnterior(estado)
    const resultado = aplicarRodada(estado, [{ papelSlug, opcaoSlug: opcaoEscolhida }], cenario, rodadaAtual.slug)
    setUltimoEfeito(resultado)
    setEstado(resultado)
    setEtapa(opcao.evento ? 'evento' : 'resultado')
  }

  function handleResolverEvento() {
    if (!reacaoEscolhida) return
    setEtapa('resultado')
  }

  function handleContinuar() {
    if (ehUltimaRodada) {
      setReflexaoPasso(0)
      setEtapa('fim')
      return
    }
    setRodadaIndice((indice) => indice + 1)
    setOpcaoEscolhida(null)
    setJustificativa('')
    setReacaoEscolhida(null)
    setFontesLidas([])
    setEnquantoIssoAberto(false)
    setEtapa('cena')
  }

  function handleTrocarCenario() {
    setEtapa('escolher-cenario')
    setCenario(null)
    setApelido('')
    setPapelSlug(null)
    setRodadaIndice(0)
    setEstado(null)
    setEstadoAnterior(null)
    setUltimoEfeito(null)
    setOpcaoEscolhida(null)
    setJustificativa('')
    setRespostasReflexao({})
    setReacaoEscolhida(null)
    setFontesLidas([])
    setInvestigarAberto(false)
    setEnquantoIssoAberto(false)
    setReflexaoPasso(0)
  }

  const totalReflexoes = cenario?.desfecho?.perguntasReflexao?.length ?? 0

  function handleReflexaoAvancar() {
    if (reflexaoPasso + 1 >= totalReflexoes) {
      setEtapa('resumo-final')
      return
    }
    setReflexaoPasso((p) => p + 1)
  }

  // ---- telas sem casca fixa (antes do jogo começar) ----

  if (etapa === 'escolher-cenario' || etapa === 'entrar') {
    return (
      <div className={styles.page}>
        <a href="/simulacoes" className={styles.voltar}>← Voltar às simulações</a>
        <p className={styles.aviso}>
          Modo demonstração — partida &ldquo;{params.codigo}&rdquo;. O sorteio usa uma turma fictícia de 12
          pessoas; a agregação real, com a turma inteira decidindo de verdade, ainda depende do
          Supabase, que é o próximo passo.
        </p>

        {etapa === 'escolher-cenario' && (
          <div className={styles.blocoEscolha}>
            <h1>Escolha a simulação</h1>
            <div className={styles.listaCenarios}>
              {CENARIOS.map((c) => (
                <button key={c.slug} className={styles.cenarioItem} onClick={() => handleEscolherCenario(c)}>
                  <strong>{c.titulo}</strong>
                  <span className={styles.pergunta}>{c.pergunta}</span>
                  <span className={styles.selo}>
                    {c.serie === '1a' ? '1ª série' : '2ª série'} · {c.rodadas.length} rodadas · {c.papeis.length} papéis
                  </span>
                </button>
              ))}
            </div>
            <a href="/materiais" className={styles.linkMateriais}>Ver materiais alternativos →</a>
          </div>
        )}

        {etapa === 'entrar' && cenario && (
          <>
            {cenario.videoAbertura && (
              <figure className={styles.videoAbertura}>
                <video src={cenario.videoAbertura.arquivo} controls playsInline />
                <figcaption className={styles.videoAviso}>⚠ {cenario.videoAbertura.legenda}</figcaption>
              </figure>
            )}

            <form onSubmit={handleEntrar} className={styles.card}>
              <h1>Entrar na partida</h1>
              <p className={styles.pergunta}>{cenario.titulo}</p>
              {cenario.introducao && <p>{cenario.introducao}</p>}
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

            {cenario.papeis.some((p) => p.icone) && (
              <div className={styles.elenco}>
                <p className={styles.elencoTitulo}>Você pode virar qualquer um destes</p>
                <div className={styles.elencoGrade}>
                  {cenario.papeis.map((p) => (
                    <div key={p.slug} className={styles.elencoItem}>
                      {p.icone ? <img src={p.icone} alt="" /> : <div className={styles.elencoSemIcone} />}
                      <span>{p.nome}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    )
  }

  // ---- 01 · Sorteio — tela cheia, sem casca ----

  if (etapa === 'sorteio' && papel) {
    const primeiroPontoIndex = 0
    return (
      <div className={styles.telaCheia}>
        <div className={styles.sorteioTela}>
          {papel.icone && <img src={papel.icone} alt="" className={styles.sorteioFundo} />}
          <div className={styles.sorteioGradiente} />
          <div className={styles.sorteioConteudo}>
            <div className={styles.sorteioKicker}>Você foi sorteado(a) como</div>
            <h1 className={styles.sorteioNome}>{papel.nome}</h1>
            <p className={styles.sorteioPerguntaGuia}>&ldquo;{papel.perguntaGuia}&rdquo;</p>
            <div className={styles.sorteioRegua} />
            <div>
              <div className={styles.sorteioPesoLabel}>Sua voz na turma</div>
              <div className={styles.sorteioPontos}>
                {Array.from({ length: Math.min(papel.cota, 14) }, (_, i) => (
                  <span
                    key={i}
                    className={i === primeiroPontoIndex ? `${styles.sorteioPonto} ${styles.sorteioPontoAceso}` : styles.sorteioPonto}
                  />
                ))}
                <span className={styles.sorteioPontosLegenda}>1 de {papel.cota} {papel.nome.toLowerCase()}</span>
              </div>
            </div>
            <p className={styles.sorteioContexto}>{papel.contexto}</p>
          </div>
        </div>
        <div className={styles.sorteioDock}>
          <button type="button" className={styles.sorteioBotao} onClick={() => setEtapa('cena')}>
            Entrar na rodada 1
          </button>
          <div className={styles.sorteioNota}>
            {cenario.rodadas.length} rodadas · ninguém vê o tabuleiro inteiro
          </div>
        </div>
      </div>
    )
  }

  // ---- 02 · Cena ----

  if (etapa === 'cena' && papel && rodadaAtual) {
    return (
      <div className={styles.telaCheia}>
        <BarraPapel papel={papel} subtitulo={cenario.titulo} indiceRodada={rodadaIndice} totalRodadas={cenario.rodadas.length} />
        <div className={styles.corpo}>
          {rodadaAtual.imagemSugerida?.arquivo ? (
            <img src={rodadaAtual.imagemSugerida.arquivo} alt={rodadaAtual.imagemSugerida.descricao} className={styles.cenaImagem} />
          ) : rodadaAtual.imagemSugerida ? (
            <div className={styles.imagemPlaceholder}>
              <p className={styles.imagemDescricao}>{rodadaAtual.imagemSugerida.descricao}</p>
              <p className={styles.imagemOnde}>{rodadaAtual.imagemSugerida.onde}</p>
            </div>
          ) : null}

          <div className={styles.cenaCorpo}>
            <div className={styles.cenaKicker}>Rodada {rodadaIndice + 1} · {rodadaAtual.titulo}</div>
            <p className={styles.cenaTexto}>{rodadaAtual.cena}</p>

            {totalFontesParaContagem > 0 && (
              <div className={styles.investigarCaixa}>
                <div className={styles.investigarCaixaRotulo}>O que só você pode ver</div>
                <div className={styles.investigarCaixaTexto}>
                  {totalFontesParaContagem === 1
                    ? 'Uma fonte chegou até você. Quem tem outro papel não vê a mesma coisa.'
                    : `${totalFontesParaContagem} fontes chegaram até você. Quem tem outro papel não vê as mesmas.`}
                </div>
                <button type="button" className={styles.botaoSecundario} onClick={handleAbrirInvestigar}>
                  Investigar · {totalFontesParaContagem} {totalFontesParaContagem === 1 ? 'fonte' : 'fontes'}
                </button>
              </div>
            )}

            {rodadaAtual.imagemSugerida?.onde && (
              <div className={styles.creditoImagem}>{rodadaAtual.imagemSugerida.onde}</div>
            )}
          </div>
        </div>
        <Dock
          acao="Decidir o que fazer"
          nota={totalFontesParaContagem > 0 ? 'Você pode investigar antes — ou decidir sem saber' : undefined}
          onAcao={() => setEtapa('decidir')}
        />

        {investigarAberto && (
          <div className={styles.investigarOverlay} onClick={handleFecharInvestigar}>
            <button type="button" className={styles.investigarFechar} onClick={handleFecharInvestigar}>
              <span>Rodada {rodadaIndice + 1} · {rodadaAtual.titulo}</span>
              <span>Fechar ✕</span>
            </button>
            <div className={styles.investigarFolha} onClick={(e) => e.stopPropagation()}>
              <div className={styles.investigarAlca} />
              <h2 className={styles.investigarTitulo}>O que chegou às suas mãos</h2>
              <div className={styles.investigarCartas}>
                {rodadaAtual.investigacao?.olhar && (
                  <div className={`${styles.investigarCarta} ${styles.investigarCartaLida}`}>
                    <div className={styles.investigarCartaTopo}>
                      <span className={styles.investigarCartaTipo}>Olhar · ao redor</span>
                      <span className={styles.investigarCartaEstado}>lida</span>
                    </div>
                    <p className={styles.investigarCartaTrecho}>{rodadaAtual.investigacao.olhar}</p>
                  </div>
                )}
                {fontesDoPapel.map((fonte) => {
                  const lida = fontesLidas.includes(fonte.slug)
                  return (
                    <div key={fonte.slug} className={lida ? `${styles.investigarCarta} ${styles.investigarCartaLida}` : styles.investigarCarta}>
                      <div className={styles.investigarCartaTopo}>
                        <span className={styles.investigarCartaTipo}>
                          {ROTULO_TIPO_FONTE[fonte.tipo] ?? fonte.tipo} · {fonte.natureza === 'documental' ? 'documento' : 'recriada'}
                        </span>
                        <span className={styles.investigarCartaEstado}>{lida ? 'lida' : 'não lida'}</span>
                      </div>
                      <div className={styles.investigarCartaTitulo}>{fonte.titulo}</div>
                      {lida ? (
                        <>
                          <p className={styles.investigarCartaTrecho}>{fonte.trecho}</p>
                          <div className={styles.investigarCartaCredito}>
                            {fonte.autor}
                            {fonte.acervo ? ` — ${fonte.acervo}` : ''}
                          </div>
                          {fonte.destrancaOpcao && (
                            <div className={styles.investigarCartaDestrava}>Destravou uma opção na decisão</div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className={styles.investigarCartaGancho}>Toque para abrir e ler o que essa fonte diz.</div>
                          <button type="button" className={styles.investigarCartaAbrir} onClick={() => handleLerFonte(fonte.slug)}>
                            Abrir
                          </button>
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
              <button type="button" className={styles.investigarVoltarBotao} onClick={handleFecharInvestigar}>
                Voltar à cena
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ---- 04 · Decisão ----

  if (etapa === 'decidir' && papel && rodadaAtual) {
    return (
      <div className={styles.telaCheia}>
        <BarraPapel
          papel={papel}
          subtitulo={fontesLidas.length > 0 ? `${fontesLidas.length} ${fontesLidas.length === 1 ? 'fonte lida' : 'fontes lidas'}` : cenario.titulo}
          indiceRodada={rodadaIndice}
          totalRodadas={cenario.rodadas.length}
        />
        <div className={styles.corpo}>
          <div className={styles.decidirCorpo}>
            <h1 className={styles.decidirPergunta}>{rodadaAtual.tituloDecisao ?? 'O que você faz?'}</h1>
            <div className={styles.decidirOpcoes}>
              {opcoesVisiveis.map((opcao) => {
                // se a opção está visível E dependia de fonte, uma delas
                // foi lida com certeza — é essa que aparece no rótulo.
                const fonteQueDestrancou = fontesQueDestrancam(opcao.slug).find((f) => fontesLidas.includes(f.slug))
                return (
                  <button
                    key={opcao.slug}
                    type="button"
                    className={opcaoEscolhida === opcao.slug ? `${styles.decidirOpcao} ${styles.decidirOpcaoSelecionada}` : styles.decidirOpcao}
                    onClick={() => setOpcaoEscolhida(opcao.slug)}
                  >
                    <span className={styles.decidirOpcaoIndicador} />
                    <div>
                      <div className={styles.decidirOpcaoTexto}>{opcao.texto}</div>
                      {fonteQueDestrancou && (
                        <div className={styles.decidirOpcaoDestravada}>Destravada por &ldquo;{fonteQueDestrancou.titulo}&rdquo;</div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
            <div className={styles.decidirJustificativaBloco}>
              <label className={styles.decidirJustificativaRotulo} htmlFor="justificativa">Por que? (opcional)</label>
              <textarea
                id="justificativa"
                className={styles.decidirJustificativaCampo}
                placeholder="Uma linha basta. Isso volta na roda de conversa."
                value={justificativa}
                onChange={(e) => setJustificativa(e.target.value)}
                rows={2}
              />
            </div>
          </div>
        </div>
        <Dock
          acao={opcaoSelecionada ? opcaoSelecionada.texto : 'Decidir'}
          nota="Depois de confirmar não dá para voltar"
          onAcao={handleDecidir}
          desabilitado={!opcaoEscolhida}
        />
      </div>
    )
  }

  // ---- Evento (mesmos cartões de 56px da decisão) ----

  if (etapa === 'evento' && opcaoSelecionada?.evento && papel && rodadaAtual) {
    return (
      <div className={styles.telaCheia}>
        <BarraPapel papel={papel} subtitulo="Aconteceu depois" indiceRodada={rodadaIndice} totalRodadas={cenario.rodadas.length} />
        <div className={styles.corpo}>
          {opcaoSelecionada.evento.imagem && (
            <img src={opcaoSelecionada.evento.imagem} alt="" className={styles.eventoImagem} />
          )}
          <div className={styles.decidirCorpo}>
            <p className={styles.cenaTexto}>{opcaoSelecionada.evento.texto}</p>
            <div className={styles.decidirOpcoes}>
              {opcaoSelecionada.evento.reacoes.map((reacao) => (
                <button
                  key={reacao.slug}
                  type="button"
                  className={reacaoEscolhida === reacao.slug ? `${styles.decidirOpcao} ${styles.decidirOpcaoSelecionada}` : styles.decidirOpcao}
                  onClick={() => setReacaoEscolhida(reacao.slug)}
                >
                  <span className={styles.decidirOpcaoIndicador} />
                  <div className={styles.decidirOpcaoTexto}>{reacao.texto}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <Dock acao="Confirmar" onAcao={handleResolverEvento} desabilitado={!reacaoEscolhida} />
      </div>
    )
  }

  // ---- 05 · Consequência ----

  if (etapa === 'resultado' && ultimoEfeito && estadoAnterior && papel && rodadaAtual) {
    const colegasIguais = estimarColegasQueDecidiramIgual(semente, rodadaAtual.slug, opcaoEscolhida, papel.cota)
    return (
      <div className={styles.telaCheia}>
        <div className={styles.resultadoTopo}>
          <div className={styles.resultadoTopoAcao}>Você decidiu</div>
          <div className={styles.resultadoTopoRodada}>Rodada {rodadaIndice + 1} de {cenario.rodadas.length} · {rodadaAtual.titulo}</div>
        </div>
        <div className={styles.corpo}>
          <div className={styles.resultadoCorpo}>
            <p className={styles.resultadoConsequencia}>{opcaoSelecionada?.consequencia}</p>
            {reacaoSelecionada && (
              <p className={styles.resultadoConsequencia}>{reacaoSelecionada.resultado}</p>
            )}

            <div className={styles.resultadoIndicadoresBloco}>
              <div className={styles.resultadoIndicadoresRotulo}>O que se moveu</div>
              <div className={styles.resultadoIndicadorLista}>
                {cenario.indicadores.map((indicador) => {
                  const antes = estadoAnterior.indicadores[indicador.slug]
                  const depois = ultimoEfeito.indicadores[indicador.slug]
                  const delta = Math.round(depois - antes)
                  const base = Math.min(antes, depois)
                  const largura = Math.abs(depois - antes)
                  return (
                    <div key={indicador.slug} className={styles.resultadoIndicadorLinha}>
                      <span className={styles.resultadoIndicadorNome}>{indicador.nome}</span>
                      <div className={styles.resultadoIndicadorBarra}>
                        <div className={styles.resultadoIndicadorBase} style={{ width: `${base}%` }} />
                        {largura > 0 && (
                          <div className={styles.resultadoIndicadorIncremento} style={{ left: `${base}%`, width: `${largura}%` }} />
                        )}
                      </div>
                      <span className={delta === 0 ? `${styles.resultadoIndicadorDelta} ${styles.resultadoIndicadorDeltaZero}` : styles.resultadoIndicadorDelta}>
                        {delta > 0 ? `+${delta}` : delta === 0 ? '—' : delta}
                      </span>
                    </div>
                  )
                })}
              </div>
              {(() => {
                const indicadorDestaque = cenario.indicadores.find(
                  (ind) => Math.round(ultimoEfeito.indicadores[ind.slug] - estadoAnterior.indicadores[ind.slug]) === 0
                )
                if (!indicadorDestaque) return null
                return (
                  <p className={styles.resultadoLeitura}>
                    {indicadorDestaque.nome} é {faixaEmPalavras(indicadorDestaque, ultimoEfeito.indicadores[indicadorDestaque.slug])} nesta
                    rodada, e nenhuma decisão da turma mexeu nela.
                  </p>
                )
              })()}
            </div>

            <div className={styles.resultadoTurma}>
              <div className={styles.resultadoTurmaPontos}>
                {Array.from({ length: 12 }, (_, i) => (
                  <span key={i} className={i === 0 ? `${styles.resultadoTurmaPonto} ${styles.resultadoTurmaPontoEu}` : styles.resultadoTurmaPonto} />
                ))}
              </div>
              <div className={styles.resultadoTurmaTexto}>
                Sozinho, sua voz vale só o seu peso ({papel.peso}). Numa turma real de doze,{' '}
                <b>{colegasIguais} {colegasIguais === 1 ? 'colega' : 'colegas'}</b> {colegasIguais === 1 ? 'teria decidido igual' : 'teriam decidido igual'} — é isso que move a coesão, não uma pessoa sozinha.
              </div>
            </div>

            {rodadaAtual.contexto && (
              <div className={styles.resultadoEnquantoIsso}>
                <button
                  type="button"
                  className={styles.resultadoEnquantoIssoBotao}
                  onClick={() => setEnquantoIssoAberto((v) => !v)}
                >
                  Enquanto isso {enquantoIssoAberto ? '⌃' : '⌄'}
                </button>
                {enquantoIssoAberto ? (
                  <>
                    {imagemContexto?.arquivo && (
                      <img src={imagemContexto.arquivo} alt="" className={styles.resultadoEnquantoIssoImagem} />
                    )}
                    <p className={styles.resultadoEnquantoIssoTexto}>{rodadaAtual.contexto}</p>
                  </>
                ) : (
                  <p className={styles.resultadoEnquantoIssoDica}>Toque para ver o que acontecia fora da sua cena.</p>
                )}
              </div>
            )}
          </div>
        </div>
        <Dock
          acao={ehUltimaRodada ? 'Ver o fecho' : `Continuar · ${cenario.rodadas[rodadaIndice + 1].titulo}`}
          onAcao={handleContinuar}
        />
      </div>
    )
  }

  // ---- 06 · Fecho ----

  if ((etapa === 'fim' || etapa === 'resumo-final') && estado && papel && cenario) {
    const perguntasReflexao = cenario.desfecho.perguntasReflexao ?? []
    const emReflexao = etapa === 'fim' && perguntasReflexao.length > 0 && reflexaoPasso < perguntasReflexao.length
    const perguntaAtual = perguntasReflexao[reflexaoPasso]

    return (
      <div className={styles.telaCheia}>
        <div className={styles.fechoTopo}>
          {cenario.rodadas[cenario.rodadas.length - 1]?.imagemSugerida?.arquivo && (
            <img
              src={cenario.rodadas[cenario.rodadas.length - 1].imagemSugerida.arquivo}
              alt=""
              className={styles.fechoTopoImagem}
            />
          )}
          <div className={styles.fechoTopoGradiente} />
          <div className={styles.fechoTopoConteudo}>
            <div className={styles.fechoTopoKicker}>O que aconteceu de verdade</div>
            <div className={styles.fechoTopoTitulo}>{cenario.desfecho.fixo}</div>
          </div>
        </div>
        <div className={styles.corpo}>
          <div className={styles.fechoCorpo}>
            <p className={styles.fechoIntro}>{cenario.desfecho.textoFecho}</p>

            {cenario.desfecho.variavel?.length > 0 && (
              <div className={styles.fechoTabela}>
                {cenario.indicadores.map((indicador) => (
                  <div key={indicador.slug} className={styles.fechoTabelaLinha}>
                    <span>{indicador.nome}</span>
                    <span className={styles.fechoTabelaValor}>{Math.round(estado.indicadores[indicador.slug])}</span>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.fechoDebate}>
              <div className={styles.fechoDebateRotulo}>Perguntas para a roda de conversa</div>
              <ul className={styles.fechoDebateLista}>
                {cenario.desfecho.perguntasDebate.map((pergunta) => (
                  <li key={pergunta}>{pergunta}</li>
                ))}
              </ul>
            </div>

            {emReflexao && perguntaAtual && (
              <div className={styles.reflexaoBloco}>
                <div className={styles.reflexaoRotulo}>
                  Sua reflexão · {reflexaoPasso + 1} de {perguntasReflexao.length} · {perguntaAtual.nivel}
                </div>
                <p className={styles.reflexaoPergunta}>{perguntaAtual.pergunta}</p>
                <textarea
                  className={styles.reflexaoCampo}
                  placeholder="Escreva aqui — ainda não é salvo em lugar nenhum, mas vale escrever mesmo assim."
                  value={respostasReflexao[reflexaoPasso] ?? ''}
                  onChange={(e) => setRespostasReflexao((anteriores) => ({ ...anteriores, [reflexaoPasso]: e.target.value }))}
                  rows={2}
                />
              </div>
            )}

            {!emReflexao && (
              <p className={styles.aviso2}>Fim desta simulação. Obrigado por jogar como {papel.nome}.</p>
            )}
          </div>
        </div>
        {emReflexao ? (
          <Dock
            acao="Próxima pergunta"
            fantasma="Pular"
            onAcao={handleReflexaoAvancar}
            onFantasma={handleReflexaoAvancar}
          />
        ) : (
          <div className={styles.investigarFolha} style={{ borderRadius: 0, flex: 'none' }}>
            <button type="button" className={styles.fechoFinalBotao} onClick={handleTrocarCenario}>
              Jogar outra simulação
            </button>
          </div>
        )}
      </div>
    )
  }

  return null
}
