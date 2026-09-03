'use client'

import { useState } from 'react'
import TimelineShell, { Tela, TelaClara, Kicker, Titulo, Texto, Termo, useTimeline } from '../_experiencia/TimelineShell.js'
import s from './PovosOriginariosEColonizacao.module.css'

const BASE = '/imagens/linha-do-tempo/povos-originarios-e-colonizacao'

const GLOSSARIO = {
  patrimonio: [
    'Patrimônio material e imaterial',
    'Material é o que se vê e toca — objetos, construções. Imaterial são saberes, tradições e práticas transmitidas entre pessoas — como preparar tintas, contar histórias, construir uma casa.',
  ],
  tlatoani: [
    'Tlatoani',
    'Título do governante asteca — sustentado por um forte aparato militar e por tributos cobrados dos povos dominados pelo império.',
  ],
  chinampas: [
    'Chinampas',
    'Ilhas artificiais de cultivo construídas sobre lagos pelos astecas — parte da base agrícola que sustentava Tenochtitlán.',
  ],
  eurocentrismo: [
    'Visão eurocêntrica',
    'Enquadrar a história colocando a Europa como centro e protagonista — por exemplo, chamar a chegada dos europeus à América de "descobrimento", como se o continente não fosse já habitado por milhões de pessoas.',
  ],
  catequizacao: [
    'Catequização',
    'Processo de conversão ao cristianismo — no Brasil colonial, conduzido sobretudo pelos jesuítas, combinando conversão religiosa com dominação cultural.',
  ],
  capitanias: [
    'Capitanias hereditárias',
    'Sistema de administração colonial que dividiu o território em faixas de terra doadas a donatários, com poder político e militar concentrado neles.',
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
    ['Hoje', 'Mais de 300 povos indígenas seguem vivos no Brasil, cada um com língua e tradições próprias'],
    ['1325', 'Astecas fundam Tenochtitlán; maias já floresciam havia séculos na Mesoamérica'],
    ['1492+', 'Chegada europeia — "descobrimento" é um termo hoje questionado, o continente já era habitado'],
    ['1500s', 'Doenças, armas, alianças exploradas e rivalidades internas derrubam impérios indígenas'],
    ['1534+', 'Capitanias hereditárias e Governo-Geral organizam a colonização portuguesa — com resistência real, não só derrota'],
  ]
  return (
    <Tela id="fecho" label="Fecho" imagem={`${BASE}/diversidade.jpg`} imagemPosicao="center 40%" brilho={0.42} duracao={30}>
      <Kicker>Uma história que não parou</Kicker>
      <Titulo>Antes, durante<br />e depois</Titulo>
      <div data-anim className={s.recapo}>
        {marcos.map(([ano, texto]) => (
          <div key={texto} className={s.recapoLinha}>
            <span className={s.recapoAno}>{ano}</span>
            <span className={s.recapoTexto}>{texto}</span>
          </div>
        ))}
      </div>
      <Texto muted>Valorizar esse patrimônio é reconhecer que esses povos estão vivos, ativos, e seguem contribuindo para a cultura e a história do Brasil.</Texto>
      <button type="button" className={s.botaoReiniciar} onClick={reiniciar}>
        Ver de novo
      </button>
    </Tela>
  )
}

// Aulas 5, 7, 8, 9, 10, 11 e 12 do 1º ano — o bloco mais delicado do
// currículo (ver docs/plano-curriculo-1a-2a-serie.md, seção 3.3). Por
// isso: sem decisão jogável, sem papel sorteado, imagens sem retrato de
// pessoa nem cena de combate, e abre e fecha com a mesma nota — povos
// originários não são só passado, são presença viva hoje.
export default function PovosOriginariosEColonizacao({ onSair }) {
  return (
    <TimelineShell slug="povos-originarios-e-colonizacao" titulo="Um continente que já tinha nome" glossario={GLOSSARIO} onSair={onSair}>
      <Tela id="capa" label="Capa" imagem={`${BASE}/capa.jpg`} imagemPosicao="center 45%" brilho={0.5} duracao={26}>
        <div data-anim className={s.capaKicker}>Antes de 1500 — depois de hoje</div>
        <h1 data-anim className={s.capaTitulo}>
          Um continente<br />que já tinha <i className={s.capaDestaque}>nome</i>
        </h1>
        <div data-anim className={s.capaRegua} />
        <Texto>Antes de qualquer navio chegar, a América já era território de centenas de povos, línguas e civilizações. Doze telas — sem decidir nada, só para conhecer.</Texto>
        <div data-anim className={s.capaRodape}>
          <span className={s.capaSeta}>↑</span> deslize para começar
        </div>
      </Tela>

      <Tela id="diversidade" label="Diversidade" imagem={`${BASE}/diversidade.jpg`} imagemPosicao="center 45%" brilho={0.42}>
        <Kicker>Mais de 300 povos, hoje</Kicker>
        <Titulo>Não é um só<br />povo</Titulo>
        <Texto>
          O <Termo chave="patrimonio">patrimônio</Termo> indígena aparece em pinturas corporais,
          roupas, músicas, histórias contadas pelos mais velhos, no jeito de preparar tintas ou
          construir casas.
        </Texto>
        <div data-anim className={s.comparativo}>
          <div className={s.comparativoItem}>
            <div className={s.comparativoRotulo}>Material</div>
            <div className={s.comparativoTexto}>Objetos e construções que se veem e tocam</div>
          </div>
          <div className={s.comparativoItem}>
            <div className={s.comparativoRotulo}>Imaterial</div>
            <div className={s.comparativoTexto}>Saberes, tradições e práticas ensinadas entre pessoas</div>
          </div>
        </div>
        <Texto muted>&ldquo;Indígena&rdquo;, não &ldquo;índio&rdquo;: o termo afirma continuidade histórica e rompe com classificações coloniais.</Texto>
      </Tela>

      <Tela id="civilizacoes" label="Civilizações" imagem={`${BASE}/civilizacoes.jpg`} imagemPosicao="center 40%" brilho={0.45}>
        <Kicker>Séculos III — XVI</Kicker>
        <Titulo>Cidades, impérios,<br />hierarquias</Titulo>
        <div data-anim className={s.painel}>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>Maias</span>
            <span className={s.painelTexto}>Cidades-estado na península de Yucatán, séculos III–X — centros cerimoniais monumentais, arquitetura, religião e ciências avançadas</span>
          </div>
          <div className={s.painelLinha}>
            <span className={s.painelNome}>Astecas</span>
            <span className={s.painelTexto}>Fundam Tenochtitlán em 1325 — poder centralizado no <Termo chave="tlatoani">Tlatoani</Termo>, economia com destaque para as <Termo chave="chinampas">chinampas</Termo></span>
          </div>
        </div>
        <Texto muted>Sociedades estratificadas, com nobres, sacerdotes, artesãos, camponeses — nem sempre iguais entre si, mas sempre complexas.</Texto>
      </Tela>

      <Tela id="saberes" label="Saberes incas" imagem={`${BASE}/saberes.jpg`} imagemPosicao="center 45%" brilho={0.48}>
        <Kicker>Cordilheira dos Andes</Kicker>
        <Titulo>Engenharia<br />de montanha</Titulo>
        <Texto>
          Terraços agrícolas esculpidos nas encostas mais íngremes, sistemas de irrigação e uma
          arquitetura em pedra que dispensava argamassa — os incas dominavam o território mais
          vertical da América.
        </Texto>
        <div data-anim className={s.lista}>
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Terraceamento transforma montanha íngreme em terra cultivável</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Cultura têxtil sofisticada, com técnicas e padrões próprios</span></div>
        </div>
      </Tela>

      <TelaClara id="quiz-1" label="Quiz 1">
        <Quiz
          pergunta="O que essas civilizações mostram sobre a América antes de 1500?"
          opcoes={[
            'Eram sociedades simples, sem organização política',
            'Eram sociedades complexas, com cidades, hierarquias, engenharia e ciência próprias',
            'Só existiam pequenos grupos isolados, sem contato entre si',
          ]}
          certa={1}
          feedbackCerto="Isso. Cidades monumentais, impérios centralizados, engenharia avançada — o oposto da ideia de um continente &ldquo;vazio&rdquo; esperando ser descoberto."
          feedbackErrado="Não. Maias, astecas e incas construíram cidades, impérios e engenharia sofisticados — sociedades complexas, não simples nem isoladas."
        />
      </TelaClara>

      <Tela id="encontro" label="Encontro" imagem={`${BASE}/encontro.jpg`} imagemPosicao="center 50%" brilho={0.5}>
        <Kicker>A partir de 1492</Kicker>
        <Titulo>Dois mundos,<br />um choque</Titulo>
        <Texto>
          A expansão marítima europeia buscava especiarias, novas rotas comerciais, poder para as
          coroas e a difusão do cristianismo.
        </Texto>
        <div data-anim className={s.avisoCritico}>
          <span className={s.avisoCriticoIcone}>⚠</span>
          <span>
            &ldquo;Descobrimento&rdquo; é um termo hoje questionado — ignora que o continente já
            era habitado por milhões de pessoas e reforça uma <Termo chave="eurocentrismo">visão eurocêntrica</Termo> da
            história.
          </span>
        </div>
        <Texto muted>O encontro gerou epidemias devastadoras, perda de território, escravização e violência — junto de profundas transformações nos dois lados.</Texto>
      </Tela>

      <Tela id="fonte" label="Uma fonte, um olhar" imagem={`${BASE}/fonte.jpg`} imagemPosicao="center 40%" brilho={0.4}>
        <Kicker>Carta de um jesuíta, 1550s</Kicker>
        <Titulo>Quem escreve<br />decide o que conta</Titulo>
        <div data-anim className={s.citacaoCritica}>
          &ldquo;[...] esta nação Carixos [...] mui mais mansa e capaz das cousas de Deus [...] por
          não se comer carne humana e por serem mais chegados à razão, esperamos que se fará maior
          proveito [...]&rdquo;
          <span className={s.citacaoCriticaAutor}>Pe. José de Anchieta, Cartas (1554–1594)</span>
        </div>
        <div data-anim className={s.avisoCritico}>
          <span className={s.avisoCriticoIcone}>⚠</span>
          <span>
            É uma fonte real e <Termo chave="catequizacao">documental</Termo> — mas escrita por
            quem julgava um povo pela facilidade de catequizá-lo. Ler criticamente não é duvidar
            que existiu, é perguntar: quem fala, e o que essa pessoa queria daquela informação?
          </span>
        </div>
      </Tela>

      <TelaClara id="quiz-2" label="Quiz 2">
        <Quiz
          pergunta="A carta de Anchieta é uma fonte confiável sobre os povos indígenas?"
          opcoes={[
            'Não, porque é falsa e foi inventada depois',
            'É uma fonte documental real, mas carrega o julgamento de valor de quem a escreveu — não é um retrato neutro',
            'Sim, e deve ser lida sem nenhum questionamento',
          ]}
          certa={1}
          feedbackCerto="Exato. Documental não é sinônimo de neutro — a carta existiu de verdade, mas descreve os povos pela régua de quem queria catequizá-los."
          feedbackErrado="Não é bem isso. A carta é genuína (não é boato) — o cuidado precisa ser outro: reconhecer o ponto de vista de quem escreveu, não descartar a fonte nem aceitá-la sem crítica."
        />
      </TelaClara>

      <Tela id="conquista" label="Conquista" imagem={`${BASE}/conquista.jpg`} imagemPosicao="center 40%" brilho={0.48}>
        <Kicker>Século XVI</Kicker>
        <Titulo>Como impérios<br />caem</Titulo>
        <Texto>
          A vitória espanhola sobre grandes impérios, apesar da inferioridade numérica, veio de
          uma combinação de fatores — nunca de um só.
        </Texto>
        <div data-anim className={s.lista}>
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Armas de fogo, cavalos e armaduras causam forte impacto psicológico</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Rivalidades internas: povos dominados veem os espanhóis como aliados circunstanciais</span></div>
          <div className={s.listaDivisor} />
          <div className={s.listaLinha}><span className={s.listaMarca}>—</span><span className={s.listaTexto}>Doenças europeias, sem imunidade indígena, causam colapso demográfico</span></div>
        </div>
        <Texto muted>A resistência foi real — a exploração dessas rachaduras é que decidiu a guerra, não uma rendição passiva.</Texto>
      </Tela>

      <Tela id="colonizacao-portuguesa" label="Colonização portuguesa" imagem={`${BASE}/colonizacaoportuguesa.jpg`} imagemPosicao="center 50%" brilho={0.45}>
        <Kicker>A partir de 1534</Kicker>
        <Titulo>Terra dividida,<br />poder centralizado</Titulo>
        <Texto>
          As <Termo chave="capitanias">capitanias hereditárias</Termo> e, depois, o Governo-Geral
          organizam a ocupação — economia açucareira, mão de obra indígena, e a{' '}
          <Termo chave="catequizacao">catequização jesuítica</Termo> articulando conversão religiosa e dominação cultural.
        </Texto>
        <div data-anim className={s.citacaoCritica}>
          &ldquo;[...] alguma gente [indígenas] lhe fez guerra e o lançou da terra e destruiu as
          fazendas [...]&rdquo;
          <span className={s.citacaoCriticaAutor}>Sobre a Bahia, 1545</span>
        </div>
        <Texto muted>Resistência documentada desde o início — um capitão expulso de suas próprias terras por indígenas, cinco anos depois do início da colonização.</Texto>
      </Tela>

      <TelaClara id="quiz-3" label="Quiz 3">
        <Quiz
          kicker="Última checagem"
          pergunta="A colonização portuguesa encontrou só submissão indígena?"
          opcoes={[
            'Sim, não houve nenhuma forma de resistência',
            'Não — há registros documentados de resistência armada e expulsão de colonos desde os primeiros anos',
            'A resistência só começou no século XX',
          ]}
          certa={1}
          feedbackCerto="Isso. Já em 1545, indígenas expulsaram um capitão português da Bahia — resistência não é um capítulo tardio, está desde o início."
          feedbackErrado="Não. Há registros de resistência armada desde os primeiros anos da colonização — inclusive expulsando colonos de suas terras."
        />
      </TelaClara>

      <Fecho />
    </TimelineShell>
  )
}
