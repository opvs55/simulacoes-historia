'use client'

import { useState } from 'react'
import TimelineShell, { Tela, TelaClara, Kicker, Titulo, Texto, Termo, Citacao, useTimeline } from '../_experiencia/TimelineShell.js'
import s from './AbsolutismoEMercantilismo.module.css'

const BASE = '/imagens/linha-do-tempo/absolutismo-e-mercantilismo'

const GLOSSARIO = {
  humanismo: [
    'Humanismo',
    'Movimento intelectual que colocou o ser humano, a razão e a observação da natureza no centro da reflexão, recuperando o interesse pela cultura da Grécia e Roma antigas.',
  ],
  trento: [
    'Concílio de Trento',
    'Assembleia de bispos reunida entre 1545 e 1563 que reafirmou dogmas centrais do catolicismo (autoridade do papa, celibato clerical, interpretação da Bíblia pela tradição da Igreja) em resposta à Reforma Protestante.',
  ],
  indulgencias: [
    'Indulgências',
    'Perdão de penas religiosas concedido pela Igreja, na prática muitas vezes vendido — um dos principais alvos da crítica de Lutero em 1517.',
  ],
  solafide: [
    'Sola fide, sola scriptura',
    '"Só a fé, só a Escritura" — princípios centrais de Lutero: a salvação vem da fé, não de obras compradas, e a Bíblia (não a tradição da Igreja) é a autoridade final.',
  ],
  jesuitas: [
    'Companhia de Jesus',
    'Ordem religiosa fundada por Inácio de Loyola, instrumento central da Contrarreforma através da educação, da catequização e das missões evangelizadoras — inclusive nas colônias.',
  ],
  inquisicao: [
    'Tribunal do Santo Ofício (Inquisição)',
    'Mecanismo de vigilância e repressão da Igreja Católica, responsável por investigar e punir heresias — atuava também nas colônias ibéricas.',
  ],
  feudalismo: [
    'Feudalismo',
    'Sistema social e econômico medieval baseado em terras (feudos) e relações de vassalagem, com poder político fragmentado entre senhores locais — seu declínio é uma das bases da formação das monarquias nacionais.',
  ],
  absolutismo: [
    'Absolutismo',
    'Sistema político em que o monarca concentra a soberania e as principais funções do Estado, governando com forte centralização — limitado, na teoria da época, apenas pelos costumes e pela vontade divina.',
  ],
  direitodivino: [
    'Direito divino dos reis',
    'Ideia de que a autoridade do rei vem diretamente de Deus, não do consentimento dos súditos — usada para justificar a obediência ao poder absoluto.',
  ],
  mercantilismo: [
    'Mercantilismo',
    'Conjunto de práticas econômicas dos Estados europeus modernos: monopólios, tarifas alfandegárias, restrição a produtos estrangeiros e acúmulo de metais preciosos, tudo a serviço de fortalecer o poder do Estado.',
  ],
}

function Quiz({ pergunta, opcoes, certa, feedbackCerto, feedbackErrado, kicker = 'Checagem rápida' }) {
  const [escolha, setEscolha] = useState(null)
  return (
    <>
      <div data-anim className={s.quizKicker}>{kicker}</div>
      <p data-anim className={s.quizPergunta}>{pergunta}</p>
      <div className={s.quizOpcoes}>
        {opcoes.map((texto, indice) => {
          let classe = s.quizOpcao
          if (escolha !== null) {
            if (indice === certa) classe = `${s.quizOpcao} ${s.quizOpcaoCerta}`
            else if (indice === escolha) classe = `${s.quizOpcao} ${s.quizOpcaoErrada}`
          }
          return (
            <button key={texto} type="button" className={classe} disabled={escolha !== null} onClick={() => setEscolha(indice)}>
              {texto}
            </button>
          )
        })}
      </div>
      {escolha !== null && <p className={s.quizFeedback}>{escolha === certa ? feedbackCerto : feedbackErrado}</p>}
    </>
  )
}

function Fecho() {
  const { reiniciar } = useTimeline()
  const marcos = [
    ['XV-XVI', 'Humanismo e Renascimento recuperam a cultura antiga sem romper com a Idade Média'],
    ['1517', 'Lutero afixa as 95 teses e a cristandade ocidental começa a se fragmentar'],
    ['1545', 'Concílio de Trento reorganiza a Igreja Católica contra a Reforma Protestante'],
    ['XIV-XVI', 'Declínio do feudalismo e centralização política formam as monarquias nacionais'],
    ['—', 'Bodin, Bossuet e Hobbes justificam teoricamente o poder absoluto do rei'],
    ['XV-XVI', 'Astrolábio, bússola e caravela viabilizam as Grandes Navegações'],
    ['XVI-XVIII', 'Mercantilismo financia o Estado centralizado com monopólios e tarifas'],
  ]
  return (
    <Tela id="fecho" label="Fecho" imagem={`${BASE}/absolutismo.jpg`} imagemPosicao="center 30%" brilho={0.4} duracao={30}>
      <Kicker>O fio da meada</Kicker>
      <Titulo>Um continente<br />se reorganiza</Titulo>
      <div data-anim className={s.recapo}>
        {marcos.map(([ano, texto]) => (
          <div key={texto} className={s.recapoLinha}>
            <span className={s.recapoAno}>{ano}</span>
            <span className={s.recapoTexto}>{texto}</span>
          </div>
        ))}
      </div>
      <button type="button" className={s.botaoReiniciar} onClick={reiniciar}>
        Ver de novo
      </button>
    </Tela>
  )
}

// Aulas 1, 2, 3, 4 e 6 do 1º ano — o mesmo arco temático de "A Coroa e o
// Cofre" (ver docs/plano-curriculo-1a-2a-serie.md, seção 3.1): a Europa
// deixa de ser um mosaico de feudos e vira um continente de reis absolutos,
// Igrejas reorganizadas e mercadores financiando tudo isso.
export default function AbsolutismoEMercantilismo({ onSair }) {
  return (
    <TimelineShell slug="absolutismo-e-mercantilismo" titulo="O rei, a fé e o mercado" glossario={GLOSSARIO} onSair={onSair}>
      <Tela id="capa" label="Capa" imagem={`${BASE}/capa.jpg`} imagemPosicao="center 30%" brilho={0.55} duracao={24}>
        <div data-anim className={s.capaKicker}>Séculos XV — XVII</div>
        <h1 data-anim className={s.capaTitulo}>
          O rei, a fé<br />e o <i className={s.capaDestaque}>mercado</i>
        </h1>
        <div data-anim className={s.capaRegua} />
        <Texto>Como a Europa deixou de ser um mosaico de feudos e virou um continente de reis absolutos, Igrejas reorganizadas e mercadores financiando tudo. Treze telas.</Texto>
        <div data-anim className={s.capaRodape}>
          <span className={s.capaSeta}>↑</span> deslize para começar
        </div>
      </Tela>

      <Tela id="modernidade" label="Modernidade" imagem={`${BASE}/modernidade.jpg`} imagemPosicao="center 35%" brilho={0.5}>
        <Kicker>Séculos XV — XVI</Kicker>
        <Titulo>Nem tudo<br />era novo</Titulo>
        <Texto>
          O <Termo chave="humanismo">Humanismo</Termo> e o Renascimento recuperam o interesse pela
          Antiguidade — Grécia e Roma — e passam a valorizar o ser humano, a razão e a observação
          da natureza.
        </Texto>
        <div data-anim className={s.comparativo}>
          <div className={s.comparativoItem}>
            <div className={s.comparativoRotulo}>O que muda</div>
            <div className={s.comparativoTexto}>Razão, observação da natureza, interesse pela cultura antiga</div>
          </div>
          <div className={s.comparativoItem}>
            <div className={s.comparativoRotulo}>O que permanece</div>
            <div className={s.comparativoTexto}>Boa parte das tradições e crenças medievais continua em vigor</div>
          </div>
        </div>
        <Texto muted>&ldquo;Modernus&rdquo;, em latim, é só &ldquo;recente&rdquo; — a modernidade não é ruptura total, é transformação com continuidade.</Texto>
      </Tela>

      <Tela id="reforma" label="Reforma" imagem={`${BASE}/reforma.jpg`} imagemPosicao="center 40%" brilho={0.48}>
        <Kicker>31 de outubro de 1517</Kicker>
        <Titulo>Um monge prega<br />noventa e cinco teses</Titulo>
        <Texto>
          Martinho Lutero, monge e professor alemão, afixa na porta da igreja de Wittenberg uma
          lista de críticas às <Termo chave="indulgencias">indulgências</Termo> — o perdão de
          pecados vendido pela Igreja para financiar obras em Roma.
        </Texto>
        <div data-anim className={s.painel}>
          <div className={s.painelLinha}>
            <span className={s.painelNome}><Termo chave="solafide">Sola fide, sola scriptura</Termo></span>
            <span className={s.painelTexto}>A salvação vem só da fé, não de obras compradas; a Bíblia, não a tradição da Igreja, é a autoridade final</span>
          </div>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>A prensa de Gutenberg</span>
            <span className={s.painelTexto}>Impressa e distribuída, a crítica de Lutero se espalha pela Europa em semanas, não em anos</span>
          </div>
        </div>
        <Texto muted>A cristandade ocidental, até então uma só Igreja sob o papa, começa a se fragmentar — luteranos, depois calvinistas, depois anglicanos. Cada rei da Europa vai ter que escolher um lado.</Texto>
      </Tela>

      <TelaClara id="quiz-reforma" label="Quiz Reforma">
        <Quiz
          pergunta="O que Lutero criticava nas 95 teses?"
          opcoes={[
            'A existência da Bíblia traduzida para línguas locais',
            'A venda de indulgências e a ideia de que obras compradas garantem a salvação',
            'O uso da prensa de Gutenberg para divulgar textos religiosos',
          ]}
          certa={1}
          feedbackCerto="Isso. Para Lutero, a salvação vinha só da fé — vender perdão de pecados contradizia esse princípio central."
          feedbackErrado="Não. O alvo principal foi a venda de indulgências — Lutero defendia que a fé, não a compra de perdão, é que salva."
        />
      </TelaClara>

      <Tela id="contrarreforma" label="Contrarreforma" imagem={`${BASE}/contrarreforma.jpg`} imagemPosicao="center 30%" brilho={0.45}>
        <Kicker>A partir de 1545</Kicker>
        <Titulo>A Igreja<br />se reorganiza</Titulo>
        <Texto>
          Reação da Igreja Católica ao avanço da Reforma Protestante que você acabou de ver —
          reafirmar poder espiritual e institucional, com três pilares.
        </Texto>
        <div data-anim className={s.painel}>
          <div className={s.painelLinha}>
            <span className={s.painelNome}><Termo chave="trento">Concílio de Trento</Termo></span>
            <span className={s.painelTexto}>Reafirma a autoridade do papa, o celibato clerical e a tradição da Igreja na leitura da Bíblia</span>
          </div>
          <div className={s.painelLinha}>
            <span className={s.painelNome}><Termo chave="jesuitas">Companhia de Jesus</Termo></span>
            <span className={s.painelTexto}>Fundada por Inácio de Loyola — educação, catequização e missões, inclusive nas colônias</span>
          </div>
          <div className={s.painelLinha}>
            <span className={s.painelNome}><Termo chave="inquisicao">Tribunal do Santo Ofício</Termo></span>
            <span className={s.painelTexto}>Investiga e pune heresias — atua também nas colônias ibéricas</span>
          </div>
        </div>
      </Tela>

      <TelaClara id="quiz-1" label="Quiz 1">
        <Quiz
          pergunta="Qual era o principal objetivo da Contrarreforma?"
          opcoes={[
            'Se aliar à Reforma Protestante contra os reis',
            'Reagir ao avanço protestante e reafirmar o poder da Igreja Católica',
            'Abolir o Tribunal do Santo Ofício',
          ]}
          certa={1}
          feedbackCerto="Isso. O Concílio de Trento, a Companhia de Jesus e a Inquisição foram as três frentes dessa reação."
          feedbackErrado="Não. A Contrarreforma foi uma reação da Igreja Católica ao avanço protestante — reforçar dogmas e mecanismos de controle, não se aliar aos protestantes."
        />
      </TelaClara>

      <Tela id="monarquias" label="Monarquias" imagem={`${BASE}/monarquias.jpg`} imagemPosicao="center 25%" brilho={0.45}>
        <Kicker>Baixa Idade Média — Idade Moderna</Kicker>
        <Titulo>De feudo<br />a reino</Titulo>
        <Texto>
          O declínio do <Termo chave="feudalismo">feudalismo</Termo>, o crescimento da burguesia,
          os conflitos religiosos e a necessidade de centralização política formam os Estados
          modernos.
        </Texto>
        <Texto muted>A fragmentação que a Reforma abriu tem um efeito colateral: sem uma única Igreja acima de todos os reis, cada monarca ganha mais espaço para concentrar autoridade — inclusive a de decidir a religião do próprio território.</Texto>
        <div data-anim className={s.lista}>
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Unificação de moeda, impostos, exército e leis sob o rei</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Cada região da Europa chega lá por um caminho diferente</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Crenças, rituais e símbolos reforçam a legitimidade do rei</span></div>
        </div>
      </Tela>

      <Tela id="absolutismo" label="Absolutismo" imagem={`${BASE}/absolutismo.jpg`} imagemPosicao="center 40%" brilho={0.5}>
        <Kicker>Teóricos do absolutismo</Kicker>
        <Titulo>Três homens<br />explicam o rei</Titulo>
        <Texto>
          O <Termo chave="absolutismo">absolutismo</Termo> concentra a soberania no monarca — e
          precisa de teoria pra se sustentar.
        </Texto>
        <div data-anim className={s.painel}>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>Jean Bodin</span>
            <span className={s.painelTexto}>Defendeu a soberania absoluta e indivisível do rei</span>
          </div>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>Jacques-Bénigne Bossuet</span>
            <span className={s.painelTexto}>Fundamentou a autoridade régia no <Termo chave="direitodivino">direito divino</Termo> dos reis</span>
          </div>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>Thomas Hobbes</span>
            <span className={s.painelTexto}>Só um soberano forte evitaria o retorno ao caos e à violência</span>
          </div>
        </div>
      </Tela>

      <TelaClara id="quiz-2" label="Quiz 2">
        <Quiz
          pergunta="O que os três teóricos do absolutismo têm em comum?"
          opcoes={[
            'Todos defendiam eleições para escolher o rei',
            'Todos justificavam, por caminhos diferentes, a concentração de poder no monarca',
            'Todos eram contra qualquer forma de governo centralizado',
          ]}
          certa={1}
          feedbackCerto="Exato. Bodin pela soberania indivisível, Bossuet pelo direito divino, Hobbes pelo medo do caos — três argumentos, um mesmo alvo: justificar o poder absoluto."
          feedbackErrado="Não. Os três, cada um a seu modo, davam argumentos para justificar a concentração de poder no rei — não o oposto."
        />
      </TelaClara>

      <Tela id="navegacoes" label="Navegações" imagem={`${BASE}/navegacoes.jpg`} imagemPosicao="center 40%" brilho={0.48}>
        <Kicker>Séculos XV — XVI</Kicker>
        <Titulo>Instrumentos<br />que abriram o mar</Titulo>
        <Texto>
          Buscar especiarias, metais preciosos e novos mercados, driblando intermediários do
          comércio com a Ásia e a África — e difundir o cristianismo pelo caminho.
        </Texto>
        <div data-anim className={s.lista}>
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Astrolábio, bússola, quadrante e balestilha dão precisão às viagens</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Caravelas leves e naus robustas viabilizam travessias mais longas</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Novos mapas revelam crenças e interesses de quem os desenhou</span></div>
        </div>
      </Tela>

      <Tela id="mercantilismo" label="Mercantilismo" imagem={`${BASE}/mercantilismo.jpg`} imagemPosicao="center 35%" brilho={0.5}>
        <Kicker>Séculos XVI — XVIII</Kicker>
        <Titulo>O ouro que<br />não pode sair</Titulo>
        <Texto>
          O <Termo chave="mercantilismo">mercantilismo</Termo> une forte intervenção estatal,
          controle do comércio e acumulação de metais preciosos — tudo a serviço do poder
          político do Estado centralizado.
        </Texto>
        <div data-anim className={s.painel}>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>Monopólios e tarifas</span>
            <span className={s.painelTexto}>Restringem a entrada de produtos estrangeiros, estimulam a produção interna</span>
          </div>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>Expansão ultramarina</span>
            <span className={s.painelTexto}>Busca por matérias-primas e mercados intensifica disputas territoriais</span>
          </div>
        </div>
        <Texto muted>É o mesmo dinheiro que financia a corte e as guerras dos reis absolutos — a economia e a política andam juntas.</Texto>
      </Tela>

      <TelaClara id="quiz-3" label="Quiz 3">
        <Quiz
          kicker="Última checagem"
          pergunta="Por que as Grandes Navegações e o mercantilismo andam juntos?"
          opcoes={[
            'São processos sem nenhuma relação entre si',
            'A busca mercantilista por metais e mercados é um dos motores das navegações, que por sua vez alimentam o Estado mercantilista',
            'O mercantilismo só existiu depois que as navegações acabaram',
          ]}
          certa={1}
          feedbackCerto="Isso. O mercantilismo busca metais preciosos e mercados — as navegações são o meio de chegar até eles, e o que trazem de volta financia o Estado centralizado."
          feedbackErrado="Não. Um alimenta o outro: a lógica mercantilista impulsiona a expansão marítima, e a expansão traz de volta o que sustenta o mercantilismo."
        />
      </TelaClara>

      <Fecho />
    </TimelineShell>
  )
}
