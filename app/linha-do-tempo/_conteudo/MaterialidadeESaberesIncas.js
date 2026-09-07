'use client'

import { useState } from 'react'
import TimelineShell, { Tela, TelaClara, Kicker, Titulo, Texto, Termo, useTimeline } from '../_experiencia/TimelineShell.js'
import s from './MaterialidadeESaberesIncas.module.css'

const BASE = '/imagens/linha-do-tempo/materialidade-e-saberes-incas'

const GLOSSARIO = {
  andenes: [
    'Andenes',
    'Terraços agrícolas escalonados construídos nas encostas dos Andes, com sistemas próprios de irrigação e drenagem — permitiam cultivar milho, batata e quinoa em altitudes onde o relevo natural não deixaria.',
  ],
  quipu: [
    'Quipu',
    'Sistema de cordas com nós usado pelos incas para registrar informações administrativas — censo, tributo, estoques — sem nenhuma escrita alfabética. Parte dos quipus conhecidos ainda não foi totalmente decifrada.',
  ],
  cumbi: [
    'Cumbi',
    'Tecido de altíssima qualidade, feito de lã fina de vicunha ou alpaca, reservado à elite inca e usado como forma de tributo e prestígio — em certos contextos, valia mais que ouro ou prata.',
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
    ['Pedra', 'Blocos talhados e encaixados sem argamassa resistem a terremotos há séculos'],
    ['Água', 'Terraços (andenes) e irrigação cultivam milho, batata e quinoa onde a montanha não deixaria'],
    ['Nós', 'O quipu registra censo e tributo sem uma única letra de alfabeto'],
    ['Tecido', 'O cumbi de lã de vicunha vale, em certos contextos, mais que ouro'],
    ['Estrelas', 'Machu Picchu alinha arquitetura, religião e astronomia num só projeto'],
    ['1911', '"Descoberta" para o mundo de fora — não para quem morava perto e sempre soube que a cidade existia'],
  ]
  return (
    <Tela id="fecho" label="Fecho" imagem={`${BASE}/machupicchu.jpg`} imagemPosicao="center 45%" brilho={0.42} duracao={30}>
      <Kicker>O que a pedra, o fio e o nó contam</Kicker>
      <Titulo>Saberes sem<br />uma letra de alfabeto</Titulo>
      <div data-anim className={s.recapo}>
        {marcos.map(([rotulo, texto]) => (
          <div key={texto} className={s.recapoLinha}>
            <span className={s.recapoAno}>{rotulo}</span>
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

// Aula 10 do 1º ano — a aula que "O Tawantinsuyu" (cenarios/tawantinsuyu.js)
// só toca de raspão, focada em território e integração política, não na
// materialidade específica que esta aula do livro pede (arquitetura,
// engenharia, têxtil). O texto de Hiram Bingham na tela final é citado
// deliberadamente com sua linguagem de época ("selvagens") — o próprio
// livro pede, na Atividade 1 da Aula 10, que o aluno identifique onde a
// visão ocidental diverge dos objetivos incas; a tela de reflexão segue
// esse mesmo pedido, não amacia a fonte para "modernizá-la".
export default function MaterialidadeESaberesIncas({ onSair }) {
  return (
    <TimelineShell slug="materialidade-e-saberes-incas" titulo="Pedra, Fio e Nó" glossario={GLOSSARIO} onSair={onSair}>
      <Tela id="capa" label="Capa" imagem={`${BASE}/capa.jpg`} imagemPosicao="center 40%" brilho={0.5} duracao={26}>
        <div data-anim className={s.capaKicker}>Andes, período inca</div>
        <h1 data-anim className={s.capaTitulo}>
          Pedra,<br /><i className={s.capaDestaque}>fio e nó</i>
        </h1>
        <div data-anim className={s.capaRegua} />
        <Texto>Os incas não deixaram uma escrita alfabética — deixaram pedra encaixada sem argamassa, terraços que ainda produzem, fios mais valiosos que ouro, e cordas com nós que registravam um império inteiro.</Texto>
        <div data-anim className={s.capaRodape}>
          <span className={s.capaSeta}>↑</span> deslize para começar
        </div>
      </Tela>

      <Tela id="pedra-sobre-pedra" label="Pedra sobre pedra" imagem={`${BASE}/pedrasobrepedra.jpg`} imagemPosicao="center 45%" brilho={0.45}>
        <Kicker>Engenharia sísmica</Kicker>
        <Titulo>Encaixe perfeito,<br />sem uma gota de argamassa</Titulo>
        <Texto>
          A arquitetura inca se destaca pela construção de grandes blocos de pedra
          cuidadosamente talhados e encaixados uns aos outros — sem nenhum tipo de
          argamassa — o que proporciona alta resistência a terremotos.
        </Texto>
        <Texto muted>Muitas dessas paredes seguem de pé até hoje, tendo sobrevivido a séculos de tremores que derrubaram construções bem mais recentes ao redor delas.</Texto>
      </Tela>

      <Tela id="terracos-e-agua" label="Terraços e água" imagem={`${BASE}/terracosagua.jpg`} imagemPosicao="center 45%" brilho={0.42}>
        <Kicker>Andenes</Kicker>
        <Titulo>Cultivar onde<br />a montanha não deixaria</Titulo>
        <Texto>
          Os incas criaram <Termo chave="andenes">terraços agrícolas</Termo> adaptados ao relevo
          montanhoso dos Andes, possibilitando o cultivo de milho, batata e quinoa em
          altitudes elevadas — com sistemas próprios de irrigação e armazenamento de água.
        </Texto>
        <div data-anim className={s.lista}>
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Controle da erosão em encostas íngremes</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Microclimas diferentes a cada nível de altitude</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaTexto}>Armazenamento de água para períodos de seca</span></div>
        </div>
        <Texto muted>Planejamento meticuloso para maximizar a produção agrícola mesmo em condições que, à primeira vista, pareceriam impossíveis de cultivar.</Texto>
      </Tela>

      <TelaClara id="quiz-1" label="Quiz 1">
        <Quiz
          pergunta="Por que os blocos de pedra encaixados sem argamassa resistiam melhor a terremotos?"
          opcoes={[
            'Porque a pedra usada era mais leve que o normal',
            'Porque o encaixe preciso permitia um pequeno ajuste entre os blocos durante o tremor, em vez de rachar tudo de uma vez',
            'Não resistiam melhor — é um mito moderno sem base',
          ]}
          certa={1}
          feedbackCerto="Isso. O encaixe preciso, sem argamassa rígida grudando os blocos, deixa uma margem de movimento que absorve parte do impacto do tremor."
          feedbackErrado="Não é isso. O segredo está no encaixe preciso: sem argamassa rígida, os blocos podem se ajustar levemente durante o tremor em vez de rachar de uma vez."
        />
      </TelaClara>

      <Tela id="o-quipu" label="O quipu" imagem={`${BASE}/quipu.jpg`} imagemPosicao="center 45%" brilho={0.44}>
        <Kicker>Registro sem alfabeto</Kicker>
        <Titulo>Nós que<br />contam números</Titulo>
        <Texto>
          Os incas desenvolveram o <Termo chave="quipu">quipu</Termo>, um sistema de cordas com nós
          que servia para registrar informações administrativas — censos, tributos, estoques
          — permitindo uma gestão eficaz de um império sem escrita alfabética.
        </Texto>
        <div data-anim className={s.painel}>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>Quem registrou isso pra gente</span>
            <span className={s.painelTexto}>Felipe Guamán Poma de Ayala, cronista de ascendência inca, descreveu e desenhou quipus em sua &ldquo;Nueva Corónica y Buen Gobierno&rdquo; (1615)</span>
          </div>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>O que ainda não sabemos</span>
            <span className={s.painelTexto}>Parte dos quipus que sobreviveram até hoje ainda não foi totalmente decifrada por pesquisadores</span>
          </div>
        </div>
        <Texto muted>Um sistema de gestão de império inteiro, guardado em cordas e nós — e ainda, em parte, um quebra-cabeça em aberto.</Texto>
      </Tela>

      <Tela id="fios-que-valiam-mais-que-ouro" label="Cultura têxtil" imagem={`${BASE}/textil.jpg`} imagemPosicao="center 45%" brilho={0.42}>
        <Kicker>Cultura têxtil andina</Kicker>
        <Titulo>Um tecido que<br />valia mais que ouro</Titulo>
        <Texto>
          Tecer no mundo andino não era artesanato decorativo — era tecnologia, riqueza e
          identidade. O <Termo chave="cumbi">cumbi</Termo>, tecido fino de lã de vicunha ou alpaca,
          circulava como tributo, presente diplomático e sinal de status dentro do império.
        </Texto>
        <Texto muted>Os padrões geométricos tecidos em cada peça também comunicavam origem regional e posição social — uma peça de roupa que &ldquo;falava&rdquo; antes de qualquer palavra ser dita.</Texto>
      </Tela>

      <Tela id="machu-picchu" label="Machu Picchu: pedra e estrela" imagem={`${BASE}/machupicchu.jpg`} imagemPosicao="center 45%" brilho={0.4}>
        <Kicker>Religião, ciência e arquitetura</Kicker>
        <Titulo>Uma cidade<br />alinhada às estrelas</Titulo>
        <Texto>
          Machu Picchu foi planejada com um alinhamento preciso em relação aos astros, o que
          permitia prever eventos astronômicos cruciais para a agricultura e os rituais
          religiosos — engenharia, astronomia e religião como um só projeto, não três coisas separadas.
        </Texto>
        <Texto muted>
          A mesma lógica aparece na fundação de templos como a Casa do Sol em Cusco: crônicas
          da época descrevem o governante inca sendo tratado como &ldquo;Filho do Sol&rdquo; — a
          arquitetura monumental, nesse mundo, era também um argumento religioso sobre quem
          tinha o direito de governar.
        </Texto>
      </Tela>

      <TelaClara id="quem-descobriu" label="Descoberta, para quem?">
        <div data-anim className={s.reflexaoKicker}>Descoberta, para quem?</div>
        <p data-anim className={s.reflexaoPergunta}>
          Em 1911, o explorador estadunidense Hiram Bingham tornou Machu Picchu conhecida do
          mundo de fora. Isso significa que a cidade estava mesmo &ldquo;perdida&rdquo;?
        </p>
        <p data-anim className={s.reflexaoContexto}>
          No próprio livro de Bingham, ele especula que Machu Picchu teria sido erguida para
          conter ataques de povos vizinhos, que ele chama de &ldquo;selvagens&rdquo; armados
          apenas com &ldquo;zarabatanas, arcos e flechas&rdquo; — e depois, ele mesmo desconfia
          dessa teoria, achando &ldquo;muito improvável&rdquo; que templos tão refinados
          fossem uma fortaleza. A linguagem de Bingham é a de um explorador do seu tempo, não
          a de quem vivia na região: comunidades andinas locais sabiam da existência da
          cidade havia gerações. &ldquo;Descoberta&rdquo; é uma palavra que só faz sentido a
          partir de um certo ponto de vista.
        </p>
        <p data-anim className={s.reflexaoNota}>
          Não existe resposta certa aqui — é uma pergunta para levar para a roda de conversa, não para o quiz.
        </p>
      </TelaClara>

      <TelaClara id="quiz-2" label="Quiz 2">
        <Quiz
          pergunta="No próprio relato de Bingham, o que acontece com a teoria de que Machu Picchu era uma fortaleza militar?"
          opcoes={[
            'Bingham a confirma com evidências arqueológicas sólidas',
            'O próprio Bingham desconfia dela, achando improvável que templos refinados fossem construídos só para conter povos com armas rudimentares',
            'A ideia de fortaleza nunca chegou a ser cogitada por ninguém',
          ]}
          certa={1}
          feedbackCerto="Isso. O próprio texto de Bingham questiona a hipótese da fortaleza — um bom lembrete de que até uma fonte de época pode conter sua própria dúvida, se você ler o texto inteiro."
          feedbackErrado="Não é bem isso — releia o trecho: o próprio Bingham acha 'muito improvável' que templos tão refinados fossem uma fortaleza contra povos armados apenas com zarabatanas e arcos."
        />
      </TelaClara>

      <Fecho />
    </TimelineShell>
  )
}
