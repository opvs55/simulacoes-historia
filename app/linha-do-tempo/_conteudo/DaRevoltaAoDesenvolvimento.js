'use client'

import { useState } from 'react'
import TimelineShell, { Tela, TelaClara, Kicker, Titulo, Texto, Termo, useTimeline } from '../_experiencia/TimelineShell.js'
import s from './DaRevoltaAoDesenvolvimento.module.css'

const BASE = '/imagens/linha-do-tempo/da-revolta-ao-desenvolvimento'

const GLOSSARIO = {
  mmdc: [
    'MMDC',
    'Iniciais de Martins, Miragaia, Dráusio e Camargo — os primeiros mortos da Revolução Constitucionalista de 1932, viraram símbolo do movimento paulista.',
  ],
  corporativismo: [
    'Corporativismo',
    'Modelo que organiza a sociedade de forma vertical, sob tutela do Estado, agrupando trabalhadores em sindicatos oficiais — o objetivo declarado era eliminar o conflito entre as classes, controlando-o pelo alto.',
  ],
  dip: [
    'DIP (Departamento de Imprensa e Propaganda)',
    'Órgão do Estado Novo responsável por controlar a imagem pública do governo — construiu a narrativa de Vargas como "pai dos pobres", um benfeitor que concedia direitos por iniciativa própria.',
  ],
  nacionalismoeconomico: [
    'Nacionalismo econômico',
    'Projeto de criar empresas estatais em setores estratégicos (petróleo, energia) em vez de deixá-los para grupos estrangeiros — a campanha "O petróleo é nosso" e a criação da Petrobras são sua expressão mais direta.',
  ],
  udn: [
    'UDN (União Democrática Nacional)',
    'Partido de oposição a Vargas, com forte presença na imprensa e apoio de setores empresariais — protagonista dos ataques políticos que culminaram na crise de agosto de 1954.',
  ],
  planodemetas: [
    'Plano de Metas',
    'Programa de governo de Juscelino Kubitschek organizado em torno do lema "50 anos em 5" — prioridades em energia, transporte, indústria de base e a construção de Brasília.',
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
    ['1917+', 'Mulheres operárias organizam sindicatos e entram na Greve Geral, mesmo sem reconhecimento'],
    ['1932', 'Revolta Constitucionalista: as elites paulistas pegam em armas contra Vargas — e perdem'],
    ['1943', 'CLT consolida direitos trabalhistas dentro de um pacto corporativista e autoritário'],
    ['1946', 'Constituição redemocratiza o país sob Dutra, já dentro da Guerra Fria'],
    ['1951-54', 'Vargas volta eleito, nacionaliza o petróleo, e a crise política termina em tragédia'],
    ['1956-61', 'JK promete "50 anos em 5" e constrói Brasília — a que custo social, cada um julga'],
  ]
  return (
    <Tela id="fecho" label="Fecho" imagem={`${BASE}/jkbrasilia.jpg`} imagemPosicao="center 40%" brilho={0.42} duracao={30}>
      <Kicker>Trinta anos depois de 1930</Kicker>
      <Titulo>Do quartel<br />ao canteiro de obras</Titulo>
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

// Aulas 4, 6, 9, 10, 11 e 12 do 2º ano — o que sobra depois de "São
// Paulo, 1917", "A terra do favor", "O plano que não existia" e da Linha
// do tempo da República Velha (ver docs/plano-curriculo-1a-2a-serie.md).
// A tela "trabalhismo" segue de perto a leitura crítica que o próprio
// livro já faz da CLT — não é uma interpretação nossa por cima da fonte.
export default function DaRevoltaAoDesenvolvimento({ onSair }) {
  return (
    <TimelineShell slug="da-revolta-ao-desenvolvimento" titulo="Do quartel ao canteiro de obras" glossario={GLOSSARIO} onSair={onSair}>
      <Tela id="capa" label="Capa" imagem={`${BASE}/capa.jpg`} imagemPosicao="center 35%" brilho={0.5} duracao={26}>
        <div data-anim className={s.capaKicker}>1917 — 1961</div>
        <h1 data-anim className={s.capaTitulo}>
          Do quartel ao<br /><i className={s.capaDestaque}>canteiro de obras</i>
        </h1>
        <div data-anim className={s.capaRegua} />
        <Texto>Entre a greve de 1917 e Brasília: mulheres operárias, uma revolta perdida, direitos trabalhistas com preço político, e trinta anos até o Brasil prometer se reinventar em cinco.</Texto>
        <div data-anim className={s.capaRodape}>
          <span className={s.capaSeta}>↑</span> deslize para começar
        </div>
      </Tela>

      <Tela id="mulheres-operarias" label="Mulheres operárias" imagem={`${BASE}/mulheresoperarias.jpg`} imagemPosicao="center 45%" brilho={0.45}>
        <Kicker>Primeira República</Kicker>
        <Titulo>Presentes,<br />mas invisibilizadas</Titulo>
        <Texto>
          Mulheres enfrentavam resistência cultural que desqualificava o trabalho feminino fora
          do lar — mesmo assim, participaram ativamente da Greve Geral de 1917, reivindicando
          salário, condições dignas e justiça social.
        </Texto>
        <div data-anim className={s.lista}>
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Organizaram-se em sindicatos próprios</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Usaram a imprensa operária para denunciar desigualdades</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Ampliaram a luta para educação e saúde, não só salário</span></div>
        </div>
        <Texto muted>Desigualdade salarial, dupla jornada, sub-representação — desafios daquela luta que ainda não terminaram.</Texto>
      </Tela>

      <Tela id="revolta-1932" label="Revolta de 1932" imagem={`${BASE}/revolta1932.jpg`} imagemPosicao="center 45%" brilho={0.48}>
        <Kicker>Julho — outubro de 1932</Kicker>
        <Titulo>São Paulo<br />pega em armas</Titulo>
        <Texto>
          A centralização política pós-1930 desmantela a autonomia estadual. As oligarquias
          paulistas recuperam o mito do bandeirante — símbolo de coragem e vocação de liderança —
          para dar ares de causa cívica a uma mobilização também movida por interesse político.
        </Texto>
        <div data-anim className={s.painel}>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>O conflito</span>
            <span className={s.painelTexto}>Três meses de combate, derrota militar paulista</span>
          </div>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>A memória</span>
            <span className={s.painelTexto}>9 de julho vira feriado estadual — o <Termo chave="mmdc">MMDC</Termo> nomeia os primeiros mortos como símbolo</span>
          </div>
        </div>
        <Texto muted>Derrota militar, mas vitória de memória — a data segue viva bem depois de a revolta ter perdido.</Texto>
      </Tela>

      <TelaClara id="quiz-1" label="Quiz 1">
        <Quiz
          pergunta="A Revolta Constitucionalista de 1932 foi puramente um movimento cívico pela Constituição?"
          opcoes={[
            'Sim, sem nenhum interesse político ou econômico envolvido',
            'Foi também isso — mas as oligarquias paulistas, que haviam perdido poder em 1930, usaram o discurso cívico para recuperar espaço',
            'Não teve relação nenhuma com a Revolução de 1930',
          ]}
          certa={1}
          feedbackCerto="Isso. O discurso da Constituição e do bandeirante-herói convivia com o interesse concreto das oligarquias de recuperar o poder perdido em 1930."
          feedbackErrado="Não é bem isso. O movimento tinha uma bandeira cívica real, mas ela convivia com o interesse político das oligarquias paulistas — as duas coisas ao mesmo tempo."
        />
      </TelaClara>

      <Tela id="trabalhismo" label="Trabalhismo" imagem={`${BASE}/trabalhismo.jpg`} imagemPosicao="center 40%" brilho={0.4}>
        <Kicker>Estado Novo, 1943</Kicker>
        <Titulo>Direitos como<br />estratégia</Titulo>
        <Texto>
          A CLT integra transformação nacional e controle autoritário. Os direitos
          &ldquo;concedidos&rdquo; atraem trabalhadores do campo para as cidades — mão de obra
          para as novas fábricas — dentro de uma lógica <Termo chave="corporativismo">corporativista</Termo>.
        </Texto>
        <div data-anim className={s.painel}>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>O que os sindicatos ganham</span>
            <span className={s.painelTexto}>Reconhecimento legal, estrutura, direitos regulamentados</span>
          </div>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>O que os sindicatos perdem</span>
            <span className={s.painelTexto}>Autonomia — viram braços do Ministério do Trabalho, mais eficazes para conter greves do que para defender reivindicações independentes</span>
          </div>
        </div>
        <Texto muted>O <Termo chave="dip">DIP</Termo> orquestra a imagem de Vargas como &ldquo;pai dos pobres&rdquo; — um benfeitor espontâneo, não um Estado calculando como esfriar o conflito de classe.</Texto>
      </Tela>

      <TelaClara id="reflexao" label="E se fosse você?">
        <div data-anim className={s.reflexaoKicker}>Para pensar — e discutir em sala</div>
        <p data-anim className={s.reflexaoPergunta}>
          Se você fosse Vargas em 1943, com um movimento operário crescendo desde 1917 e nenhuma
          vontade de dividir poder com ele — o que você faria?
        </p>
        <p data-anim className={s.reflexaoContexto}>
          Vargas escolheu dar direitos reais — salário mínimo, carteira assinada, jornada
          regulamentada — mas amarrados a um Estado que decidia quem podia fazer greve e quem
          liderava cada sindicato. Não foi repressão pura, e não foi liberdade plena: foi as duas
          coisas ao mesmo tempo, e essa combinação é o que manteve o movimento operário sob
          controle por décadas.
        </p>
        <p data-anim className={s.reflexaoNota}>
          Não existe resposta certa aqui — é uma pergunta para levar para a roda de conversa, não
          para o quiz.
        </p>
      </TelaClara>

      <Tela id="dutra" label="Dutra e a Guerra Fria" imagem={`${BASE}/guerrafria.jpg`} imagemPosicao="center 40%" brilho={0.48}>
        <Kicker>1946 — 1951</Kicker>
        <Titulo>Democracia,<br />sob vigilância</Titulo>
        <Texto>
          A Constituição de 1946 restabelece soberania popular, separação dos poderes e direitos
          civis — um marco institucional depois do Estado Novo. Mas o país já nasce dividido pela
          Guerra Fria.
        </Texto>
        <Texto muted>Redemocratizar não significa neutralidade: o alinhamento internacional já pesa sobre a política interna desde o primeiro governo eleito do período.</Texto>
      </Tela>

      <Tela id="segundo-vargas" label="Segundo Vargas" imagem={`${BASE}/segundovargas.jpg`} imagemPosicao="center 40%" brilho={0.38}>
        <Kicker>1951 — 1954</Kicker>
        <Titulo>De volta,<br />pelo voto</Titulo>
        <Texto>
          Eleito diretamente com ampla base popular, Vargas defende o <Termo chave="nacionalismoeconomico">nacionalismo econômico</Termo> —
          &ldquo;o petróleo é nosso&rdquo; — e amplia direitos trabalhistas, gerando apoio popular e
          forte oposição de empresários, imprensa e parte das Forças Armadas.
        </Texto>
        <Texto muted>
          Denúncias de corrupção, conflito com a <Termo chave="udn">UDN</Termo> e pressão dos
          Estados Unidos alimentam uma crise crescente. A instabilidade culmina no suicídio de
          Vargas em 1954 — um episódio que provocou comoção popular e marcou profundamente a
          política brasileira.
        </Texto>
      </Tela>

      <TelaClara id="quiz-2" label="Quiz 2">
        <Quiz
          pergunta="O que estava em disputa por trás da crise de 1954?"
          opcoes={[
            'Só uma briga pessoal entre Vargas e seus adversários, sem conteúdo político',
            'Dois projetos de país: nacionalismo econômico estatal versus associação com capital internacional',
            'A crise não teve relação com o petróleo nem com política externa',
          ]}
          certa={1}
          feedbackCerto="Isso. O embate entre estatizar setores estratégicos e associá-los a capital estrangeiro dividiu a sociedade brasileira por décadas depois disso."
          feedbackErrado="Não. Por trás da crise pessoal e política estava um embate real de projeto de país — Estado forte em setores estratégicos versus abertura ao capital internacional."
        />
      </TelaClara>

      <Tela id="jk" label="JK" imagem={`${BASE}/jkbrasilia.jpg`} imagemPosicao="center 45%" brilho={0.42}>
        <Kicker>1956 — 1961</Kicker>
        <Titulo>&ldquo;50 anos<br />em 5&rdquo;</Titulo>
        <Texto>
          O <Termo chave="planodemetas">Plano de Metas</Termo> acelera o crescimento econômico —
          energia, transportes, indústria de base, e a construção de Brasília como
          meta-síntese do projeto desenvolvimentista.
        </Texto>
        <div data-anim className={s.comparativo}>
          <div className={s.comparativoItem}>
            <div className={s.comparativoRotulo}>O que cresce</div>
            <div className={s.comparativoTexto}>Industrialização, infraestrutura, capital estrangeiro</div>
          </div>
          <div className={s.comparativoItem}>
            <div className={s.comparativoRotulo}>O que também cresce</div>
            <div className={s.comparativoTexto}>Inflação, dívida, êxodo rural, precarização urbana</div>
          </div>
        </div>
        <Texto muted>O rápido crescimento não virou melhoria generalizada de vida — a intensificação do êxodo rural alimentou conflitos sociais que o desenvolvimentismo prometia resolver.</Texto>
      </Tela>

      <Fecho />
    </TimelineShell>
  )
}
