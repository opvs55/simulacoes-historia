'use client'

import { useState } from 'react'
import TimelineShell, { Tela, TelaClara, Kicker, Titulo, Texto, Termo, ParaInvestigar, useTimeline } from '../_experiencia/TimelineShell.js'
import s from './ImaginarioDoColonizador.module.css'

const BASE = '/imagens/linha-do-tempo/imaginario-do-colonizador'

const GLOSSARIO = {
  eurocentrismo: [
    'Visão eurocêntrica',
    'Enquadrar a história colocando a Europa como centro e protagonista — julgar outros povos pela régua de quão perto ou longe eles estão dos costumes europeus.',
  ],
  colonialidadedopoder: [
    'Colonialidade do poder',
    'Conceito do sociólogo peruano Aníbal Quijano: a ideia de "raça" foi inventada durante a colonização da América para justificar, como se fosse natural, a dominação de povos europeus sobre não europeus — não descreve uma diferença biológica real, cria uma hierarquia.',
  ],
  protagonismoindigena: [
    'Protagonismo indígena',
    'A afirmação de povos indígenas como sujeitos ativos da própria história e do debate público hoje — não figuras de um passado encerrado, mas lideranças, pesquisadores e artistas atuando no presente.',
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
    ['1500', 'Caminha já descreve os povos originários pelo que a Coroa pode ganhar com eles — inclusive suas almas'],
    ['1554+', 'Anchieta cria uma escala de "quão perto da razão" cada povo estaria, pra decidir quem catequizar e quem combater'],
    ['1594', 'Uma gravura de Theodore de Bry vira, por séculos, o retrato "oficial" do Brasil na Europa — sem o contexto que a explica'],
    ['2005', 'Aníbal Quijano nomeia: raça foi inventada para legitimar dominação, não descreve diferença real'],
    ['Hoje', 'Gersem Baniwa e outras lideranças indígenas respondem em primeira pessoa ao mesmo estereótipo que começou em 1500'],
  ]
  return (
    <Tela id="fecho" label="Fecho" imagem={`${BASE}/territoriovivo.jpg`} imagemPosicao="center 45%" brilho={0.42} duracao={30}>
      <Kicker>Um estereótipo com 500 anos de idade</Kicker>
      <Titulo>Quem descreve,<br />decide o que conta</Titulo>
      <div data-anim className={s.recapo}>
        {marcos.map(([ano, texto]) => (
          <div key={texto} className={s.recapoLinha}>
            <span className={s.recapoAno}>{ano}</span>
            <span className={s.recapoTexto}>{texto}</span>
          </div>
        ))}
      </div>
      <Texto muted>Nenhuma fonte europeia deste período é neutra — e isso não é motivo para descartá-las, é motivo para lê-las perguntando sempre: quem fala, pra quem, e o que essa pessoa queria daquela descrição?</Texto>
      <button type="button" className={s.botaoReiniciar} onClick={reiniciar}>
        Ver de novo
      </button>
    </Tela>
  )
}

// Aula 8 do 1º ano — "Aula desafio: Permanências de um imaginário". Por
// decisão do professor (2026-09-06): tema tratado SÓ como crítica de
// fontes, timeline própria e mais extensa — nunca como simulação
// decisória, mesma regra permanente aplicada às Aulas 11 e 12 (ver
// docs/plano-curriculo-1a-2a-serie.md, seção 3.3).
//
// Cuidado ético específico desta timeline: o tema é "como a imagem do
// indígena foi construída por quem não era indígena" — logo, NENHUMA
// imagem gerada aqui ilustra a cena estereotipada em si (nem a cena de
// antropofagia da gravura de Theodore de Bry, nem qualquer figura humana
// genérica "estilizada como selvagem"). As imagens são sempre do OBJETO
// ou do MEIO — carta, prensa, gravura empilhada, mapa — nunca da cena
// descrita. Fazer diferente reproduziria, com verniz educativo, o mesmo
// estereótipo que a timeline existe para desmontar.
export default function ImaginarioDoColonizador({ onSair }) {
  return (
    <TimelineShell slug="imaginario-do-colonizador" titulo="O Selvagem Que Inventaram" glossario={GLOSSARIO} onSair={onSair}>
      <Tela id="capa" label="Capa" imagem={`${BASE}/capa.jpg`} imagemPosicao="center 40%" brilho={0.5} duracao={26}>
        <div data-anim className={s.capaKicker}>Desde 1500</div>
        <h1 data-anim className={s.capaTitulo}>
          O selvagem<br /><i className={s.capaDestaque}>que inventaram</i>
        </h1>
        <div data-anim className={s.capaRegua} />
        <Texto>Nenhuma das fontes desta timeline foi escrita por um povo originário sobre si mesmo — até a penúltima tela. Onze telas para aprender a ler quem segura a pena, não só o que ela escreve.</Texto>
        <div data-anim className={s.capaRodape}>
          <span className={s.capaSeta}>↑</span> deslize para começar
        </div>
      </Tela>

      <Tela id="estereotipo-e-dominacao" label="Simplificar para dominar" imagem={`${BASE}/capa.jpg`} imagemPosicao="center 55%" brilho={0.46}>
        <Kicker>Por que um estereótipo pega</Kicker>
        <Titulo>Simplificar<br />para dominar</Titulo>
        <Texto>
          Desde o período colonial, a representação dos povos indígenas foi marcada pela
          simplificação de sua enorme diversidade e pela criação de rótulos como
          &ldquo;selvagem&rdquo;, &ldquo;bárbaro&rdquo; ou &ldquo;atrasado&rdquo;.
        </Texto>
        <Texto muted>
          Relatos de cronistas, missionários e viajantes europeus ajudaram a legitimar a
          dominação colonial ao desumanizar esses grupos e ignorar a complexidade de suas
          culturas, cosmologias e formas de organização — um rótulo simples justifica uma
          dominação simples.
        </Texto>
      </Tela>

      <Tela id="a-carta-que-comeca-tudo" label="A carta que começa tudo" imagem={`${BASE}/carta.jpg`} imagemPosicao="center 45%" brilho={0.42}>
        <Kicker>1º de maio de 1500</Kicker>
        <Titulo>O primeiro<br />retrato</Titulo>
        <div data-anim className={s.citacaoCritica}>
          &ldquo;[...] o melhor fruto que se pode obter, me parece, será salvar estas pessoas. E
          esta deve ser a principal missão que Vossa Alteza deve lançar.&rdquo;
          <span className={s.citacaoCriticaAutor}>Pero Vaz de Caminha, carta a D. Manuel I, 1500</span>
        </div>
        <div data-anim className={s.avisoCritico}>
          <span className={s.avisoCriticoIcone}>⚠</span>
          <span>
            O primeiro documento português sobre o Brasil já não descreve os povos
            originários pelo que eles diziam de si mesmos — descreve o que a Coroa podia
            ganhar com eles, inclusive suas almas. É um molde que praticamente toda fonte
            seguinte, nesta timeline, vai repetir de algum jeito.
          </span>
        </div>
      </Tela>

      <Tela id="a-gravura-que-viajou" label="A gravura que viajou a Europa" imagem={`${BASE}/gravura.jpg`} imagemPosicao="center 45%" brilho={0.4}>
        <Kicker>1594 — mas ainda hoje</Kicker>
        <Titulo>Uma imagem vale<br />mais que um fato</Titulo>
        <Texto>
          Hans Staden, um soldado alemão capturado por tupinambás na década de 1550, escreveu
          um relato sobre sua experiência. Décadas depois, o gravurista Theodore de Bry
          transformou passagens desse relato em imagens que foram reimpressas pela Europa
          inteira, por séculos.
        </Texto>
        <div data-anim className={s.avisoCritico}>
          <span className={s.avisoCriticoIcone}>⚠</span>
          <span>
            O ritual que Staden descreveu era real, ligado a guerra e vingança entre grupos
            específicos em um contexto específico — não era o cotidiano de &ldquo;os
            índios&rdquo; em geral. Reproduzida sem esse contexto, a imagem virou sinônimo
            visual do Brasil inteiro na cabeça de gerações de europeus que nunca puseram os
            pés aqui.
          </span>
        </div>
      </Tela>

      <Tela id="hierarquia-da-catequese" label="Hierarquia da catequese" imagem={`${BASE}/catequese.jpg`} imagemPosicao="center 45%" brilho={0.42}>
        <Kicker>Cartas de um jesuíta, 1554–1594</Kicker>
        <Titulo>Alguns mais<br />&ldquo;próximos da razão&rdquo;</Titulo>
        <div data-anim className={s.citacaoCritica}>
          &ldquo;[...] esta nação Carixos [...] mui mais mansa e capaz das cousas de Deus [...]
          por não se comer carne humana e por serem mais chegados à razão, esperamos que se
          fará maior proveito [...]&rdquo;
          <span className={s.citacaoCriticaAutor}>Pe. José de Anchieta, Cartas (1554–1594)</span>
        </div>
        <Texto muted>
          Anchieta não está descrevendo povos diferentes com neutralidade — está construindo
          uma escala de &ldquo;quão perto da razão&rdquo; cada povo estaria, para decidir quem
          merecia esforço de catequese e quem merecia guerra.
        </Texto>
      </Tela>

      <TelaClara id="quiz-1" label="Quiz 1">
        <Quiz
          pergunta="As cartas de Caminha e Anchieta são fontes falsas, inventadas para desacreditar os portugueses?"
          opcoes={[
            'Sim — são falsificações modernas',
            'Não — são fontes documentais reais, mas escritas por quem tinha um objetivo (converter, colonizar) e julgava os povos por esse objetivo',
            'São reais, mas devem ser lidas como retrato neutro e completo dos povos originários',
          ]}
          certa={1}
          feedbackCerto="Isso. Documental não é sinônimo de neutro: as cartas existiram de verdade, mas descrevem os povos pela régua de quem queria catequizá-los ou lucrar com eles."
          feedbackErrado="Não é isso. As cartas são genuínas — o cuidado é outro: reconhecer o ponto de vista e o objetivo de quem escreveu, sem descartar a fonte nem aceitá-la como retrato neutro."
        />
      </TelaClara>

      <Tela id="a-raca-que-inventaram" label="A raça que inventaram" imagem={`${BASE}/raca.jpg`} imagemPosicao="center 45%" brilho={0.4}>
        <Kicker>Um conceito, 500 anos depois</Kicker>
        <Titulo>Raça não é fato,<br />é invenção</Titulo>
        <Texto>
          O sociólogo peruano Aníbal Quijano chama de <Termo chave="colonialidadedopoder">colonialidade do poder</Termo> o
          processo pelo qual a ideia de raça foi criada durante a colonização da América — não
          para descrever uma diferença biológica real, mas para legitimar, como se fosse
          natural, a dominação de povos europeus sobre não europeus.
        </Texto>
        <Texto muted>Quijano argumenta que essa lógica se tornou o instrumento de dominação social mais eficaz e duradouro já criado — o critério usado, ainda hoje, para distribuir poder e lugar entre populações inteiras.</Texto>
      </Tela>

      <Tela id="a-resposta-de-hoje" label="A resposta de hoje" imagem={`${BASE}/resposta.jpg`} imagemPosicao="center 45%" brilho={0.42}>
        <Kicker>Gersem Baniwa, antropólogo indígena</Kicker>
        <Titulo>Quem foi chamado<br />de atrasado, responde</Titulo>
        <div data-anim className={s.citacaoCritica}>
          &ldquo;Dessa visão limitada e discriminatória [...] resultou uma série de ambiguidades
          e contradições ainda hoje presentes no imaginário da sociedade brasileira [...] que
          continua considerando os povos indígenas como culturas em estágios inferiores.&rdquo;
          <span className={s.citacaoCriticaAutor}>Gersem Baniwa, &ldquo;O índio brasileiro&rdquo; (Ministério da Educação, 2006)</span>
        </div>
        <Texto muted>
          Pela primeira vez nesta timeline, quem fala é um autor indígena — não um cronista
          europeu descrevendo de fora. E o que ele diz é que o mesmo estereótipo de 1500 nunca
          foi embora de verdade.
        </Texto>
      </Tela>

      <TelaClara id="e-hoje" label="E hoje?">
        <div data-anim className={s.reflexaoKicker}>Para pensar — e discutir em sala</div>
        <p data-anim className={s.reflexaoPergunta}>
          Se o estereótipo do &ldquo;índio genérico e atrasado&rdquo; foi inventado por quem
          nunca foi indígena, o que muda quando quem fala é uma <Termo chave="protagonismoindigena">liderança indígena</Termo> falando por si?
        </p>
        <p data-anim className={s.reflexaoContexto}>
          Mais de 300 povos indígenas seguem vivos no Brasil hoje, cada um com língua, cultura
          e história próprias — e cada vez mais presentes como autores, pesquisadores,
          professores, parlamentares e artistas, confrontando diretamente narrativas que
          insistem em tratá-los como um capítulo fechado do passado.
        </p>
        <p data-anim className={s.reflexaoNota}>
          Não existe resposta certa aqui — é uma pergunta para levar para a roda de conversa, não para o quiz.
        </p>
      </TelaClara>

      <TelaClara id="quiz-2" label="Quiz 2">
        <Quiz
          kicker="Última checagem"
          pergunta="Qual é o problema central que esta timeline tentou mostrar?"
          opcoes={[
            'Que os povos indígenas realmente eram como as fontes europeias os descreviam',
            'Que, por 500 anos, a imagem predominante dos povos indígenas foi construída por quem não era indígena — e servia a um objetivo de dominação',
            'Que nenhuma fonte histórica sobre esse período pode ser usada, por serem todas europeias',
          ]}
          certa={1}
          feedbackCerto="Isso. O problema não é usar fontes europeias — é usá-las sem perceber que elas constroem uma imagem a serviço de um objetivo, e sem colocar ao lado vozes indígenas respondendo a essa imagem."
          feedbackErrado="Não é isso. As fontes europeias continuam valiosas — o ponto é ler percebendo o objetivo de quem escreveu, e completar o quadro com vozes indígenas, como a de Gersem Baniwa."
        />
      </TelaClara>

      <TelaClara id="para-investigar" label="Para investigar">
        <ParaInvestigar
          perguntas={[
            'Pesquise um livro didático ou material escolar mais antigo (de um adulto da família, de uma biblioteca) e veja como ele descreve os povos indígenas — mudou desde "O índio brasileiro" (2006) até hoje?',
            'Theodore de Bry nunca esteve no Brasil — desenhou a partir do relato de outra pessoa. Pesquise se isso era comum entre os ilustradores europeus da época, ou se de Bry é um caso isolado.',
          ]}
        />
      </TelaClara>

      <Fecho />
    </TimelineShell>
  )
}
