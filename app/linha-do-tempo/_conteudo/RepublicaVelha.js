'use client'

import { useState } from 'react'
import TimelineShell, { Tela, TelaClara, Kicker, Titulo, Texto, Termo, Citacao, useTimeline } from '../_experiencia/TimelineShell.js'
import s from './RepublicaVelha.module.css'

const BASE = '/imagens/linha-do-tempo/republica-velha'

const GLOSSARIO = {
  bestializado: [
    'Bestializado',
    'Expressão do jornalista Aristides Lobo para descrever a multidão que viu o desfile de 15 de novembro sem entender que assistia à queda da monarquia. Virou símbolo da distância entre o povo e a política da Primeira República.',
  ],
  coronelismo: [
    'Coronelismo',
    'Sistema em que o grande proprietário rural ("coronel", título herdado da Guarda Nacional) troca proteção, emprego e favores pelo voto dos moradores da sua região.',
  ],
  governadores: [
    'Política dos governadores',
    'Acordo criado por Campos Sales em 1898: o presidente apoia o grupo dominante de cada estado e, em troca, recebe no Congresso os deputados eleitos por esses grupos.',
  ],
  cabresto: [
    'Voto de cabresto',
    'Voto obtido sob pressão do coronel. Como não havia urna secreta nem justiça eleitoral independente, era possível conferir e punir quem votasse errado.',
  ],
  cafecomleite: [
    'Política do café com leite',
    'Revezamento informal na presidência entre São Paulo (café) e Minas Gerais (leite), os dois estados mais ricos e populosos. Rompe-se em 1929.',
  ],
  anarco: [
    'Anarcossindicalismo',
    'Corrente operária, forte entre imigrantes italianos e espanhóis, que via o sindicato e a greve geral — não o partido nem a eleição — como caminho para transformar a sociedade.',
  ],
  proletariado: [
    'Proletariado',
    'Conjunto dos trabalhadores assalariados que vivem da venda da própria força de trabalho. No Brasil, cresce com a industrialização a partir dos anos 1910.',
  ],
  tenentismo: [
    'Tenentismo',
    'Movimento de jovens oficiais do Exército, nos anos 1920, contra a fraude eleitoral e o domínio das oligarquias. Defendia reformas pelo alto, não revolução popular. Vários tenentes ocupam cargos depois de 1930.',
  ],
  alianca: [
    'Aliança Liberal',
    'Coligação de Minas Gerais, Rio Grande do Sul e Paraíba que lançou Getúlio Vargas à presidência em 1930, com bandeiras como voto secreto e leis trabalhistas.',
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
            <button
              key={texto}
              type="button"
              className={classe}
              disabled={escolha !== null}
              onClick={() => setEscolha(indice)}
            >
              {texto}
            </button>
          )
        })}
      </div>
      {escolha !== null && (
        <p className={s.quizFeedback}>{escolha === certa ? feedbackCerto : feedbackErrado}</p>
      )}
    </>
  )
}

function Fecho() {
  const { reiniciar } = useTimeline()
  const marcos = [
    ['1889', 'República proclamada sem participação popular'],
    ['1898', 'Coronelismo e política dos governadores fecham o sistema'],
    ['1917', 'Indústria da guerra cria o operariado; greve geral'],
    ['1922', 'Semana de 22, PCB e a revolta dos tenentes'],
    ['1925', 'Coluna Prestes cruza o país e fracassa em mobilizar'],
    ['1929', 'Crise mundial derruba o café e a elite que o sustentava'],
    ['1930', 'Vargas assume; o Estado passa a tutelar o trabalhador'],
  ]
  return (
    <Tela id="fecho" label="Fecho" imagem={`${BASE}/clt.jpg`} imagemPosicao="center 30%" brilho={0.4} duracao={30}>
      <Kicker>O fio da meada</Kicker>
      <Titulo>Quarenta anos<br />em uma linha</Titulo>
      <div data-anim className={s.recapo}>
        {marcos.map(([ano, texto]) => (
          <div key={ano} className={s.recapoLinha}>
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

// A experiência inteira: 1889 até 1930 em modo "história" — pensada para
// ser lida antes ou depois das simulações de São Paulo 1917, A terra do
// favor e O plano que não existia, que se passam dentro dela.
export default function RepublicaVelha({ onSair }) {
  return (
    <TimelineShell slug="republica-velha" titulo="A República que o povo assistiu" glossario={GLOSSARIO} onSair={onSair}>
      <Tela id="capa" label="Capa" imagem={`${BASE}/capa.jpg`} imagemPosicao="center 24%" brilho={0.62} duracao={24}>
        <div data-anim className={s.capaKicker}>1889 — 1930</div>
        <h1 data-anim className={s.capaTitulo}>
          A República<br />que o povo<br /><i className={s.capaDestaque}>assistiu</i>
        </h1>
        <div data-anim className={s.capaRegua} />
        <Texto>Da proclamação sem povo até Getúlio Vargas. Quarenta anos em dezessete telas.</Texto>
        <div data-anim className={s.capaRodape}>
          <span className={s.capaSeta}>↑</span> deslize para começar
        </div>
      </Tela>

      <Tela id="1889" label="1889" imagem={`${BASE}/1889.jpg`} imagemPosicao="center 28%" brilho={0.58}>
        <Kicker>15 de novembro de 1889</Kicker>
        <Titulo>Um desfile militar<br />vira um regime</Titulo>
        <Texto>
          Marechal Deodoro depõe o gabinete imperial. Não houve plebiscito, comício nem barricada. A
          República nasceu de um acordo entre militares, cafeicultores paulistas e republicanos.
        </Texto>
        <Citacao autor="Aristides Lobo, 1889">
          O povo assistiu àquilo <Termo chave="bestializado">bestializado</Termo>, sem compreender o que significava.
        </Citacao>
        <div data-anim className={s.pontos}>
          {Array.from({ length: 14 }, (_, i) => (
            <span key={i} className={i === 0 ? `${s.ponto} ${s.pontoAceso}` : s.ponto} />
          ))}
          <span className={s.pontosLegenda}>
            Cerca de 1 em cada 14 brasileiros podia votar. Analfabetos, mulheres e soldados rasos: fora.
          </span>
        </div>
      </Tela>

      <Tela id="coronelismo" label="Coronelismo" imagem={`${BASE}/coronelismo.jpg`} imagemPosicao="center 22%" brilho={0.5}>
        <Kicker>1898 — 1930</Kicker>
        <Titulo>A máquina<br />das oligarquias</Titulo>
        <Texto>
          O <Termo chave="coronelismo">coronelismo</Termo> troca favor por voto no campo. A{' '}
          <Termo chave="governadores">política dos governadores</Termo> transforma esse controle local em maioria no Congresso.
        </Texto>
        <div data-anim className={s.painel}>
          <div className={s.painelLinha}><span className={s.painelIndice}>01</span><span>O coronel garante o <Termo chave="cabresto">voto de cabresto</Termo> na sua região</span></div>
          <div className={s.painelLinha}><span className={s.painelIndice}>02</span><span>O governador entrega os votos do estado ao presidente</span></div>
          <div className={s.painelLinha}><span className={s.painelIndice}>03</span><span>O presidente reconhece só os deputados aliados</span></div>
          <div className={`${s.painelLinha} ${s.painelLinhaDestaque}`}><span className={s.painelIndice}>04</span><span><Termo chave="cafecomleite">São Paulo e Minas</Termo> revezam a presidência</span></div>
        </div>
        <p data-anim className={s.rodape}>Eleição a descoberto, sem urna secreta: o coronel via em quem você votava.</p>
      </Tela>

      <TelaClara id="quiz-1" label="Quiz 1">
        <Quiz
          pergunta="Por que se diz que a República foi proclamada “sem povo”?"
          opcoes={[
            'Houve uma votação popular, mas com pouca gente',
            'Foi um golpe militar articulado com as elites, sem consulta popular',
            'O povo era contra e foi reprimido nas ruas',
          ]}
          certa={1}
          feedbackCerto="Certo. Foi um movimento militar apoiado por cafeicultores e republicanos; a população não foi consultada."
          feedbackErrado="Não. Não houve consulta popular nenhuma: a mudança de regime foi articulada entre militares e elites."
        />
      </TelaClara>

      <Tela id="guerra" label="Guerra e indústria" imagem={`${BASE}/guerra.jpg`} imagemPosicao="center 30%" brilho={0.5}>
        <Kicker>1914 — 1918</Kicker>
        <Titulo>A guerra fecha<br />os portos</Titulo>
        <Texto>
          Sem produtos europeus, o Brasil passa a fabricar o que importava. Nascem tecelagens e
          alimentícias, e com elas uma nova classe operária urbana — boa parte imigrante.
        </Texto>
        <div data-anim className={s.barras}>
          <div className={s.barraColuna}>
            <span className={s.barraValor}>3.250</span>
            <div data-anim className={s.barra} style={{ height: '38%', animationDuration: '.9s', animationDelay: '.35s' }} />
            <span className={s.barraAno}>1907</span>
          </div>
          <div className={s.barraColuna}>
            <span className={`${s.barraValor} ${s.barraValorDestaque}`}>13.500</span>
            <div data-anim className={`${s.barra} ${s.barraDestaque}`} style={{ height: '100%', animationDuration: '1.1s', animationDelay: '.5s' }} />
            <span className={s.barraAno}>1920</span>
          </div>
          <div className={s.barraLegenda}>Estabelecimentos industriais no país. O salto se concentra em São Paulo e no Distrito Federal.</div>
        </div>
      </Tela>

      <Tela id="greve-1917" label="Greve de 1917" imagem={`${BASE}/greve1917.jpg`} imagemPosicao="center 34%" brilho={0.52}>
        <Kicker>Julho de 1917</Kicker>
        <Titulo>São Paulo<br />para de girar</Titulo>
        <div data-anim className={s.estatistica}>
          <div className={s.estatisticaValorBloco}>
            <span className={s.estatisticaValor}>70 mil</span>
            <span className={s.estatisticaLegenda}>trabalhadores<br />em greve geral</span>
          </div>
          <img src={`${BASE}/grevecapa.jpg`} alt="Capa de jornal sobre a greve de 1917" className={s.selo} />
        </div>
        <Texto>
          Estopim: a morte do sapateiro José Martinez pela polícia. Pauta: jornada de oito horas, fim
          do trabalho infantil noturno, aumento de 25%. A liderança é <Termo chave="anarco">anarcossindicalista</Termo>.
        </Texto>
        <Texto muted>Os patrões cedem em parte. Depois recuam — e o governo responde deportando líderes estrangeiros.</Texto>
      </Tela>

      <Tela id="caso-policia" label="Caso de polícia" imagem={`${BASE}/washingtonluis.jpg`} imagemPosicao="center 18%" brilho={0.46}>
        <Kicker>A questão social</Kicker>
        <Titulo>&ldquo;Um caso<br />de polícia&rdquo;</Titulo>
        <Texto>
          A frase atribuída a Washington Luís resume o tratamento dado ao <Termo chave="proletariado">proletariado</Termo>:
          greve não era negociação, era caso de delegacia.
        </Texto>
        <div data-anim className={s.listaEventos}>
          <div className={s.listaEventosLinha}><span className={s.listaEventosData}>1907</span><span className={s.listaEventosTexto}>Lei Adolfo Gordo permite deportar estrangeiro &ldquo;agitador&rdquo;</span></div>
          <div className={s.listaEventosDivisor} />
          <div className={s.listaEventosLinha}><span className={s.listaEventosData}>1922</span><span className={s.listaEventosTexto}>Fundação do PCB, logo posto na ilegalidade</span></div>
          <div className={s.listaEventosDivisor} />
          <div className={s.listaEventosLinha}><span className={s.listaEventosData}>1926</span><span className={s.listaEventosTexto}>Lei de imprensa amplia a censura; sindicatos vigiados</span></div>
        </div>
        <Texto muted>Guarde esta ideia: em 1930 o mesmo operariado passará a ser tratado como assunto de Estado, dentro do Ministério do Trabalho.</Texto>
      </Tela>

      <TelaClara id="quiz-2" label="Quiz 2">
        <Quiz
          pergunta="O que a Primeira Guerra tem a ver com a greve de 1917?"
          opcoes={[
            'Nada: são fatos independentes',
            'A guerra impulsionou a indústria e a inflação, criando e apertando o operariado',
            'Soldados brasileiros voltaram da Europa e organizaram a greve',
          ]}
          certa={1}
          feedbackCerto="Isso. A guerra fechou as importações, a indústria cresceu e a inflação corroeu os salários — os dois lados da greve de 1917."
          feedbackErrado="Não é isso. A ligação é econômica: indústria em alta, salários corroídos pela inflação da guerra."
        />
      </TelaClara>

      <Tela id="semana-22" label="Semana de 22" imagem={`${BASE}/semana22.jpg`} imagemPosicao="center 26%" brilho={0.5}>
        <Kicker>Fevereiro de 1922</Kicker>
        <Titulo>Semana de<br />Arte Moderna</Titulo>
        <Texto>
          No Theatro Municipal de São Paulo, artistas vaiados propõem romper com o modelo europeu e
          inventar uma linguagem brasileira. É o centenário da Independência lido como pergunta: que
          país é este?
        </Texto>
        <div data-anim className={s.comparativo}>
          <div className={s.comparativoItem}>
            <div className={s.comparativoRotulo}>Na arte</div>
            <div className={s.comparativoTexto}>Ruptura estética, tema nacional, escândalo público</div>
          </div>
          <div className={s.comparativoItem}>
            <div className={s.comparativoRotulo}>Na política</div>
            <div className={s.comparativoTexto}>No mesmo ano: PCB fundado em março, revolta militar em julho</div>
          </div>
        </div>
        <Texto muted>1922 é o ano em que a insatisfação aparece em três frentes ao mesmo tempo: cultural, operária e militar.</Texto>
      </Tela>

      <Tela id="forte" label="Forte de Copacabana" imagem={`${BASE}/forte.jpg`} imagemPosicao="center 30%" brilho={0.5}>
        <Kicker>5 de julho de 1922</Kicker>
        <Titulo>Os 18 do Forte</Titulo>
        <Texto>
          Jovens oficiais se revoltam contra a posse de Artur Bernardes. A rebelião é esmagada; um
          punhado sai a pé pela praia de Copacabana ao encontro das tropas legalistas.
        </Texto>
        <div data-anim className={s.pelotao}>
          <div className={s.pelotaoLinha}>
            <span data-anim className={`${s.soldado} ${s.soldadoVivo}`} />
            <span data-anim className={`${s.soldado} ${s.soldadoVivo}`} />
            {Array.from({ length: 16 }, (_, i) => <span key={i} className={s.soldado} />)}
          </div>
          <div className={s.pelotaoTexto}>
            Dos que marcharam, dois sobreviveram. A derrota militar vira mito político: começa o <Termo chave="tenentismo">tenentismo</Termo>.
          </div>
        </div>
      </Tela>

      <Tela id="1924" label="1924" imagem={`${BASE}/sp1924.jpg`} imagemPosicao="center 28%" brilho={0.5}>
        <Kicker>Julho de 1924</Kicker>
        <Titulo>São Paulo<br />ocupada</Titulo>
        <Texto>
          Tenentes tomam a capital paulista e a mantêm por 23 dias. O governo federal bombardeia
          bairros operários da cidade para retomá-la. Os rebeldes recuam para o interior.
        </Texto>
        <div data-anim className={s.estatisticaTopo}>
          <span className={s.estatisticaTopoValor}>23</span>
          <span className={s.estatisticaTopoLegenda}>dias de controle rebelde<br />sobre a maior cidade do país</span>
        </div>
        <Texto muted>A coluna paulista segue para o oeste e, em abril de 1925, encontra os gaúchos de Luís Carlos Prestes.</Texto>
      </Tela>

      <Tela id="coluna" label="Coluna Prestes" imagem={`${BASE}/coluna.jpg`} imagemPosicao="center 30%" brilho={0.5} duracao={28}>
        <Kicker>1925 — 1927</Kicker>
        <Titulo>A Coluna Prestes</Titulo>
        <div data-anim className={s.duasColunas}>
          <div className={s.duasColunasItem}>
            <div className={s.duasColunasValor}>25 mil km</div>
            <div className={s.duasColunasLegenda}>percorridos a pé e a cavalo</div>
          </div>
          <div className={s.duasColunasDivisor} />
          <div className={s.duasColunasItem}>
            <div className={s.duasColunasValor}>13 estados</div>
            <div className={s.duasColunasLegenda}>sem nunca ser derrotada em batalha</div>
          </div>
        </div>
        <Texto>
          A marcha atravessa o sertão pregando voto secreto, justiça eleitoral e ensino público. Não
          consegue levantar a população pobre do interior e se dissolve na Bolívia, em 1927.
        </Texto>
      </Tela>

      <TelaClara id="quiz-3" label="Quiz 3">
        <Quiz
          pergunta="O que os tenentes queriam?"
          opcoes={[
            'Uma revolução socialista liderada pelos operários',
            'Moralizar a República: voto secreto, justiça eleitoral, fim das fraudes',
            'A volta da monarquia',
          ]}
          certa={1}
          feedbackCerto="Exato. Era um programa de moralização e reforma, feito por militares, sem participação operária."
          feedbackErrado="Não. Os tenentes eram reformistas: queriam limpar o sistema eleitoral, não fazer revolução social."
        />
      </TelaClara>

      <Tela id="crise-1929" label="Crise de 1929" imagem={`${BASE}/cafe.jpg`} imagemPosicao="center 32%" brilho={0.5}>
        <Kicker>Outubro de 1929</Kicker>
        <Titulo>O café despenca</Titulo>
        <Texto>
          A quebra da Bolsa de Nova York seca o mercado do principal produto brasileiro. Os Estados
          Unidos compravam a maior parte da safra. Em poucos meses o preço da saca cai cerca de dois terços.
        </Texto>
        <div data-anim className={s.grafico}>
          <svg viewBox="0 0 200 100" preserveAspectRatio="none" className={s.graficoSvg}>
            <path
              data-anim
              className={s.graficoLinha}
              d="M0,22 L40,18 L80,26 L110,20 L140,64 L170,80 L200,86"
              fill="none"
              stroke="var(--destaque-300)"
              strokeWidth="2"
              strokeDasharray="1200"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span className={s.graficoRotulo} style={{ left: 6, top: 4 }}>1928</span>
          <span className={s.graficoRotulo} style={{ right: 6, bottom: 6 }}>1930</span>
        </div>
        <Texto muted>A elite cafeeira perde dinheiro e, junto com ele, a força política que sustentava o arranjo desde 1889.</Texto>
      </Tela>

      <Tela id="1930" label="1930" imagem={`${BASE}/getulio.jpg`} imagemPosicao="center 24%" brilho={0.48}>
        <Kicker>Outubro de 1930</Kicker>
        <Titulo>Getúlio chega<br />a cavalo</Titulo>
        <div data-anim className={s.painel}>
          <div className={s.painelLinha}><span className={s.painelIndice}>Mar</span><span>Washington Luís indica outro paulista e rompe o revezamento com Minas</span></div>
          <div className={s.painelLinha}><span className={s.painelIndice}>Mar</span><span>Minas, Rio Grande do Sul e Paraíba formam a <Termo chave="alianca">Aliança Liberal</Termo> e perdem a eleição</span></div>
          <div className={s.painelLinha}><span className={s.painelIndice}>Jul</span><span>Assassinato de João Pessoa dá o estopim</span></div>
          <div className={`${s.painelLinha} ${s.painelLinhaDestaque}`}><span className={s.painelIndice}>Out</span><span>Tropas gaúchas marcham ao Rio; militares depõem o presidente e entregam o poder a Vargas</span></div>
        </div>
        <Texto>
          Vargas governa por decreto, nomeia interventores nos estados e cria o Ministério do
          Trabalho em novembro. A questão social sai da delegacia e entra no gabinete — sob controle do Estado.
        </Texto>
      </Tela>

      <TelaClara id="quiz-4" label="Quiz 4">
        <Quiz
          kicker="Última checagem"
          pergunta="O que muda para o trabalhador depois de 1930?"
          opcoes={[
            'Ele passa a ser reprimido pela primeira vez',
            'Deixa de ser só caso de polícia e vira assunto de Estado, com direitos e tutela',
            'Os sindicatos passam a ser totalmente independentes',
          ]}
          certa={1}
          feedbackCerto="Isso. Vargas cria o Ministério do Trabalho e leis sociais, mas atrela os sindicatos ao Estado."
          feedbackErrado="Não. A repressão vinha de antes; o que muda é o Estado assumir a questão social — concedendo direitos e controlando os sindicatos."
        />
      </TelaClara>

      <Fecho />
    </TimelineShell>
  )
}
