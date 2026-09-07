// "Tikal" — cidades-Estado maias, período Clássico (c. séculos IV-VIII), 1ª série.
// Terceiro cenário da Aula 9 do livro ("civilizações inca, asteca e maia"), depois
// de tawantinsuyu.js e tenochtitlan.js — ângulo próprio: ao contrário do império
// inca (território/integração) e do tributo asteca (economia/comércio), os maias
// NUNCA formaram um império unificado. Eram dezenas de cidades-Estado rivais — o
// livro descreve isso como "diversas cidades-estado governadas por elites locais"
// (Aula 9). Este cenário usa a rivalidade mais documentada da política maia
// clássica (Tikal x Calakmul) para explorar exatamente essa diferença estrutural.
//
// Nenhuma pessoa real e nomeada é papel jogável nem retrato — nem o rei que sofre
// a derrota de 562, nem Jasaw Chan K'awiil I (o rei que restaura Tikal em 695,
// citado só como fato no desfecho). "conselho-real-tikal" é um cargo genérico,
// mesmo padrão de "conselho-imperial"/"conselho-tlatoani". Sacrifício ritual e o
// jogo de bola mesoamericano (às vezes associados, de forma simplificada demais,
// a sacrifício) ficam deliberadamente fora deste cenário — mesmo cuidado já
// aplicado ao sacrifício em tenochtitlan.js.
//
// Fontes: a fragmentação política maia em cidades-Estado vem do próprio livro
// (Aula 9). A rivalidade Tikal-Calakmul, a derrota de 562 e o "hiato" de Tikal
// (cerca de 130 anos sem novos monumentos), e a vitória de Tikal em 695 sob
// Jasaw Chan K'awiil I são fatos históricos bem estabelecidos na historiografia
// maia (MARTIN, S.; GRUBE, N. Chronicle of the Maya Kings and Queens. Thames &
// Hudson, 2000 — referência acadêmica padrão sobre a política maia clássica; a
// comparação da rivalidade com Atenas x Esparta é dos próprios autores) —
// marcados como `documental`. "Vozes de época" — o que um sacerdote, mercador
// ou camponês teriam dito — não são citações reais verificadas, então são
// sempre `recriada`.
export default {
  slug: 'tikal',
  versao: 1,
  serie: '1a',
  era: 'colonizacao',
  titulo: 'Tikal',
  pergunta: 'Como uma cidade-Estado se mantém no topo quando o rival mais forte nunca para de tentar te isolar?',

  introducao:
    'Mesoamérica, período Clássico. Ao contrário do Tawantinsuyu inca ou do império asteca ' +
    'centrado em Tenochtitlán, os maias nunca formaram um único império — eram dezenas de ' +
    'cidades-Estado independentes, cada uma com sua própria dinastia, espalhadas pela península ' +
    'de Yucatán e áreas próximas: Tikal, Calakmul, Copán, Palenque, Uxmal, Chichén Itzá, entre ' +
    'outras. Tikal é uma das maiores e mais antigas. Ao norte, Calakmul — o "Reino da Serpente" ' +
    '— constrói, geração após geração, uma rede de alianças que cerca Tikal por todos os lados. ' +
    'Nenhum exército sozinho decide essa disputa: decide uma combinação de templos erguidos, ' +
    'casamentos arranjados, tributo cobrado e rotas de comércio protegidas — até o dia em que a ' +
    'guerra chega mesmo assim.',

  indicadores: [
    { slug: 'poder-de-tikal', nome: 'Poder de Tikal', inicial: 50, faixas: ['fragilizado', 'estável', 'dominante'] },
    { slug: 'rede-de-aliados', nome: 'Rede de aliados', inicial: 35, faixas: ['isolada', 'em expansão', 'extensa'] },
    { slug: 'rivalidade-calakmul', nome: 'Rivalidade com Calakmul', inicial: 40, faixas: ['contida', 'tensa', 'à beira da guerra'] },
    { slug: 'prestigio-astronomico', nome: 'Prestígio astronômico e religioso', inicial: 45, faixas: ['modesto', 'reconhecido', 'venerado'] },
    { slug: 'tensao-do-povo', nome: 'Tensão entre o povo', inicial: 20, faixas: ['contida', 'crescente', 'insustentável'] },
  ],

  papeis: [
    {
      slug: 'conselho-real-tikal',
      nome: 'Conselho real de Tikal',
      bloco: 'elite',
      peso: 8,
      cota: 1,
      perguntaGuia: 'Até onde vale expandir o poder de Tikal antes que os vizinhos se unam contra a gente?',
      contexto:
        'Você fala pelo governo de Tikal — uma das maiores cidades-Estado maias, mas não a única, ' +
        'e não a mais poderosa o tempo todo. Cada decisão sua precisa equilibrar o prestígio dos ' +
        'monumentos que os deuses e os vizinhos esperam ver crescer com o risco real de provocar ' +
        'quem já te vê como ameaça.',
      icone: '/imagens/tikal/papeis/conselho-real-tikal.jpg',
    },
    {
      slug: 'senhor-vassalo',
      nome: 'Senhor de uma cidade vassala',
      bloco: 'elite',
      peso: 4,
      cota: 3,
      perguntaGuia: 'Minha cidade sobrevive mais segura como aliada de Tikal, ou mais livre por conta própria?',
      contexto:
        'Sua cidade é menor que Tikal, mas não é dela — é aliada, por enquanto. Casamentos ' +
        'dinásticos e tributo compram proteção; também compram uma dependência que nem sempre é ' +
        'fácil de perceber até que seja tarde para recusar.',
      icone: '/imagens/tikal/papeis/senhor-vassalo.jpg',
    },
    {
      slug: 'sacerdote-astronomo',
      nome: 'Sacerdote-astrônomo',
      bloco: 'mediador',
      peso: 3,
      cota: 2,
      perguntaGuia: 'O calendário que eu leio prevê o futuro, ou só justifica o que o conselho já decidiu fazer?',
      contexto:
        'Você lê os astros, mantém o calendário e registra em pedra os feitos de Tikal para que ' +
        'durem mais que qualquer um vivo hoje. Uma data mal escolhida para uma guerra ou uma ' +
        'cerimônia pode custar tanto quanto um exército mal posicionado.',
      icone: '/imagens/tikal/papeis/sacerdote-astronomo.jpg',
    },
    {
      slug: 'mercador-jade-obsidiana',
      nome: 'Mercador de jade e obsidiana',
      bloco: 'mediador',
      peso: 2,
      cota: 3,
      perguntaGuia: 'Meu comércio depende da paz entre as cidades, ou eu lucro até com a guerra entre elas?',
      contexto:
        'Jade, obsidiana, penas de quetzal, cacau — o que passa pelas suas mãos vem de rotas que ' +
        'atravessam território de aliados e de rivais. Uma guerra fecha estradas; às vezes também ' +
        'abre oportunidades que a paz nunca ofereceria.',
      icone: '/imagens/tikal/papeis/mercador-jade-obsidiana.jpg',
    },
    {
      slug: 'mestre-construtor',
      nome: 'Mestre construtor',
      bloco: 'popular',
      peso: 1,
      cota: 5,
      perguntaGuia: 'Cada pedra que eu ergo é orgulho de Tikal, ou só mais um ano da minha vida gasto pra glória de outro?',
      contexto:
        'Você organiza o trabalho que ergue os templos que vão durar mil anos — trabalho que ' +
        'consome estações inteiras de gente tirada da própria lavoura para carregar pedra. O ' +
        'templo fica; a colheita perdida enquanto isso, não.',
      icone: '/imagens/tikal/papeis/mestre-construtor.jpg',
    },
    {
      slug: 'campones-maia',
      nome: 'Camponês maia',
      bloco: 'popular',
      peso: 1,
      cota: 8,
      perguntaGuia: 'A grandeza de Tikal chega até a minha roça, ou só a conta dela?',
      contexto:
        'Sua milpa alimenta sua família e, em boa parte, também alimenta quem constrói templo, ' +
        'guerreia e negocia em nome de Tikal. Ninguém pergunta sua opinião sobre quando a cidade ' +
        'decide entrar em guerra — mas é você quem sente primeiro quando falta braço na colheita.',
      icone: '/imagens/tikal/papeis/campones-maia.jpg',
    },
  ],

  rodadas: [
    {
      slug: 'os-templos-de-tikal',
      titulo: 'Os templos de Tikal',
      amplitude: 22,
      cena:
        'Tikal investe pesado na construção de templos-pirâmide cada vez mais altos — prestígio ' +
        'que se mede em pedra, visível a dias de distância pela selva. Cada cidade-Estado maia faz ' +
        'o mesmo, cada uma por conta própria: não existe um único centro que decida por todas.',
      efeitosFixos: { 'tensao-do-povo': 5 },
      contexto:
        'Enquanto Tikal ergue seus templos, o mesmo acontece, ao mesmo tempo e sem coordenação ' +
        'nenhuma, em Copán, Palenque, Uxmal e Chichén Itzá — cada cidade-Estado maia construindo ' +
        'sua própria grandeza, numa espécie de rivalidade silenciosa de pedra que antecede qualquer ' +
        'guerra declarada.',
      imagemSugerida: {
        descricao: 'Um templo-pirâmide de pedra visto de longe entre as copas da selva, ao entardecer, sem figuras humanas em destaque.',
        arquivo: '/imagens/tikal/os-templos-de-tikal.jpg',
        onde: 'Ilustração gerada — cena genérica, não reprodução de um sítio arqueológico específico.',
      },
      investigacao: {
        olhar: 'Um andaime de madeira e corda subindo ao lado de um templo pela metade, pedra sobre pedra, o topo ainda longe de pronto.',
        fontes: [
          {
            slug: 'cidades-estado-maias',
            tipo: 'ler',
            titulo: 'Um mundo de muitas cidades',
            papeis: ['conselho-real-tikal', 'senhor-vassalo'],
            trecho:
              'Os maias formaram diversas cidades-Estado, governadas por elites locais, ao invés de ' +
              'um império único — cada uma com sua própria dinastia, seus próprios templos e sua ' +
              'própria política em relação às vizinhas.',
            autor: 'Livro do 1º ano, Aula 9.',
            acervo: 'Livro do 1º ano, Aula 9.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'sitios-arqueologicos-mesoamerica',
            tipo: 'olhar',
            titulo: 'Um mapa de muitos centros',
            papeis: ['sacerdote-astronomo', 'mercador-jade-obsidiana'],
            trecho:
              'Um mapa da Mesoamérica pré-colombiana marca dezenas de sítios simultâneos — Tikal, ' +
              'Uxmal, Chichén Itzá, Copán, Palenque — nenhum deles subordinado a um centro único, cada ' +
              'um sua própria capital.',
            autor: 'Livro do 1º ano, Aula 9 (infográfico "Os principais sítios arqueológicos do México pré-colombiano").',
            acervo: 'Livro do 1º ano, Aula 9.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-templo-pequeno-desgraca',
            tipo: 'ouvir',
            titulo: '"Um templo pequeno demais atrai desgraça"',
            papeis: ['mestre-construtor', 'campones-maia'],
            trecho: 'Diz-se que a cidade cujo templo mais novo for menor que o do vizinho vai atrair a fúria dos deuses sobre toda a colheita do ano seguinte.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Crença de época, não fato — mas o medo dela é real o suficiente para justificar gastar mais pedra e mais braço do que qualquer planejamento agrícola recomendaria.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-real-tikal': [
          {
            slug: 'ampliar-templo-principal',
            texto: 'Ordenar a ampliação do templo principal de Tikal',
            deltas: { 'prestigio-astronomico': 8, 'poder-de-tikal': 6, 'tensao-do-povo': 4 },
            consequencia: 'O templo cresce mais alguns metros — visível de mais longe, custando mais braços tirados da lavoura do que o ano anterior.',
          },
          {
            slug: 'priorizar-infraestrutura',
            texto: 'Priorizar reservatórios de água e estradas em vez de monumentos',
            deltas: { 'tensao-do-povo': -4, 'prestigio-astronomico': -4 },
            consequencia: 'Tikal fica mais preparada para secas e mais bem conectada às cidades vizinhas — um investimento que rende menos glória imediata do que um templo novo.',
          },
        ],
        'senhor-vassalo': [
          {
            slug: 'construir-templo-proprio',
            texto: 'Construir um templo próprio, menor, para afirmar status diante de Tikal',
            deltas: { 'poder-de-tikal': -2, 'tensao-do-povo': 3 },
            consequencia: 'Sua cidade ganha um monumento próprio — um gesto de identidade que Tikal nota, sem gostar totalmente dele.',
          },
          {
            slug: 'contribuir-templo-tikal',
            texto: 'Enviar tributo e mão de obra para o templo de Tikal',
            deltas: { 'poder-de-tikal': 4, 'rede-de-aliados': 2 },
            consequencia: 'Sua cidade some um pouco na sombra de Tikal — e ganha, em troca, um lugar mais seguro na rede de proteção dela.',
          },
        ],
        'sacerdote-astronomo': [
          {
            slug: 'registrar-data-favoravel',
            texto: 'Determinar uma data astronomicamente "favorável" para a inauguração do templo',
            deltas: { 'prestigio-astronomico': 8 },
            consequencia: 'A cerimônia acontece no dia que você escolheu no calendário — ninguém questiona o cálculo, porque ninguém mais sabe fazê-lo.',
          },
          {
            slug: 'registrar-historia-verdadeira',
            texto: 'Dedicar-se a registrar com exatidão os acontecimentos recentes, sem embelezar',
            deltas: { 'prestigio-astronomico': 4 },
            consequencia: 'Sua inscrição é mais sóbria que a maioria — o tipo de registro que um sacerdote de outra cidade, séculos depois, agradeceria ter encontrado.',
          },
        ],
        'mercador-jade-obsidiana': [
          {
            slug: 'financiar-decoracao-templo',
            texto: 'Financiar parte da decoração do templo com jade importado',
            deltas: { 'prestigio-astronomico': 6, 'rede-de-aliados': 2 },
            consequencia: 'Seu jade vira parte da fachada de um templo que vai durar mais que seu próprio nome — uma forma de prestígio que dinheiro sozinho não compra em nenhuma outra cidade.',
          },
          {
            slug: 'expandir-rotas-comercio',
            texto: 'Investir em expandir as rotas de comércio para cidades mais distantes',
            deltas: { 'rede-de-aliados': 6 },
            consequencia: 'Novas rotas trazem bens — e informação — de cidades que Tikal mal conhecia até agora.',
          },
        ],
        'mestre-construtor': [
          {
            slug: 'acelerar-obra',
            texto: 'Acelerar o ritmo da obra, convocando mais braços da lavoura',
            deltas: { 'prestigio-astronomico': 6, 'tensao-do-povo': 8 },
            consequencia: 'O templo avança mais rápido do que o planejado — e mais gente do que o planejado passa a temporada de plantio carregando pedra em vez de semente.',
          },
          {
            slug: 'manter-ritmo-sustentavel',
            texto: 'Manter um ritmo de obra que não esvazie demais a lavoura',
            deltas: { 'tensao-do-povo': -3, 'prestigio-astronomico': -2 },
            consequencia: 'O templo demora mais para ficar pronto — e as roças ao redor de Tikal não ficam vazias na hora da colheita.',
          },
        ],
        'campones-maia': [
          {
            slug: 'servir-na-obra',
            texto: 'Servir o tempo pedido na obra do templo',
            deltas: { 'tensao-do-povo': 4 },
            consequencia: 'Você carrega pedra por semanas que deveriam ser de plantio — o templo é de Tikal; a fome do inverno, se vier, é sua.',
          },
          {
            slug: 'negociar-tempo-servico',
            texto: 'Tentar negociar um tempo de serviço menor com o mestre construtor',
            deltas: { 'tensao-do-povo': -2 },
            consequencia: 'Você consegue um alívio pequeno — o suficiente para salvar parte da própria colheita, não o bastante para mudar o sistema.',
          },
        ],
      },
    },

    {
      slug: 'aliancas-e-casamentos',
      titulo: 'Alianças e casamentos',
      amplitude: 20,
      cena:
        'Tikal expande sua influência não só por conquista, mas por casamento dinástico e tributo ' +
        '— um senhor de cidade menor que aceita uma noiva ou um noivo da linhagem de Tikal aceita, ' +
        'junto, uma aliança que pode durar gerações.',
      contexto:
        'É exatamente essa mesma estratégia — alianças por casamento, tributo e pacto militar — ' +
        'que Calakmul, ao norte, usa para tecer sua própria rede ao redor de Tikal. As duas cidades ' +
        'disputam os mesmos aliados menores, com as mesmas ferramentas.',
      imagemSugerida: {
        descricao: 'Uma comitiva de figuras em vestes cerimoniais cruzando uma trilha de selva entre duas cidades-Estado, vista de longe, sem rostos em destaque.',
        arquivo: '/imagens/tikal/aliancas-e-casamentos.jpg',
        onde: 'Ilustração gerada — cena genérica, não reprodução de um relevo ou registro específico.',
      },
      investigacao: {
        olhar: 'Um cortejo chegando de outra cidade, trazendo tecidos e objetos de troca, recebido no limite do território de Tikal.',
        fontes: [
          {
            slug: 'aliancas-dinasticas-maias',
            tipo: 'ler',
            titulo: 'Casamento como tratado',
            papeis: ['conselho-real-tikal', 'senhor-vassalo'],
            trecho:
              'Entre as cidades-Estado maias, alianças eram firmadas por casamento dinástico, acordo ' +
              'de tributo ou pacto militar — laços que podiam mudar de lado ao longo do tempo, ' +
              'conforme mudavam os interesses políticos e econômicos de cada cidade.',
            autor: 'Historiografia consolidada sobre a política maia clássica — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-noiva-espia',
            tipo: 'ouvir',
            titulo: '"A noiva da última aliança é espiã de Calakmul"',
            papeis: ['senhor-vassalo', 'mercador-jade-obsidiana'],
            trecho: 'Corre a suspeita de que a última união arranjada com uma cidade vizinha serve, na verdade, para levar informações de Tikal direto para Calakmul.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Não há registro de uma espiã específica — mas a desconfiança entre cidades "aliadas" era real: nenhuma aliança maia era garantia permanente de lealdade.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-real-tikal': [
          {
            slug: 'arranjar-casamento-alianca',
            texto: 'Arranjar um casamento dinástico com uma cidade vizinha estratégica',
            deltas: { 'rede-de-aliados': 10, 'poder-de-tikal': 2 },
            consequencia: 'A união é firmada — mais uma cidade agora liga seu destino, em parte, ao de Tikal.',
          },
          {
            slug: 'exigir-tributo-sem-casamento',
            texto: 'Exigir tributo de cidades menores sem oferecer aliança por casamento em troca',
            deltas: { 'poder-de-tikal': 6, 'rede-de-aliados': -4 },
            consequencia: 'O tributo entra mais rápido — e sem o laço do casamento, a lealdade das cidades cobradas fica mais fina do que Tikal gostaria.',
          },
        ],
        'senhor-vassalo': [
          {
            slug: 'aceitar-casamento-tikal',
            texto: 'Aceitar a aliança por casamento oferecida por Tikal',
            deltas: { 'rede-de-aliados': 8 },
            consequencia: 'Sua cidade ganha proteção — e um parentesco que, a partir de agora, pesa em toda decisão que envolva Tikal.',
          },
          {
            slug: 'buscar-alianca-alternativa',
            texto: 'Buscar discretamente uma aliança alternativa com outra cidade poderosa',
            deltas: { 'rede-de-aliados': -4, 'rivalidade-calakmul': 2 },
            consequencia: 'Você mantém as opções abertas — um cálculo que só compensa se Tikal nunca descobrir com quem mais você andou negociando.',
          },
        ],
        'sacerdote-astronomo': [
          {
            slug: 'abencoar-uniao',
            texto: 'Presidir a cerimônia religiosa da nova aliança',
            deltas: { 'prestigio-astronomico': 4, 'rede-de-aliados': 4 },
            consequencia: 'A bênção religiosa dá à aliança um peso que nenhum acordo comercial sozinho teria.',
          },
          {
            slug: 'registrar-genealogia',
            texto: 'Dedicar-se a registrar com precisão a genealogia das linhagens aliadas',
            deltas: { 'prestigio-astronomico': 4 },
            consequencia: 'Seu registro vai decidir, daqui a duas gerações, quem tem direito a reivindicar o quê — um trabalho discreto com consequências enormes.',
          },
        ],
        'mercador-jade-obsidiana': [
          {
            slug: 'oferecer-bens-cerimonia',
            texto: 'Oferecer bens de prestígio para a cerimônia da aliança',
            deltas: { 'rede-de-aliados': 6, 'prestigio-astronomico': 2 },
            consequencia: 'Jade e penas de quetzal circulam na cerimônia — parte do seu estoque agora carrega o peso simbólico de um tratado.',
          },
          {
            slug: 'abrir-rota-cidade-neutra',
            texto: 'Abrir uma rota de comércio com uma cidade neutra, fora da disputa Tikal-Calakmul',
            deltas: { 'rede-de-aliados': 4 },
            consequencia: 'Você garante uma fonte de bens que não depende de nenhum dos dois lados — um seguro comercial discreto.',
          },
        ],
        'mestre-construtor': [
          {
            slug: 'erguer-estrutura-cerimonia',
            texto: 'Erguer uma estrutura cerimonial temporária para a celebração da aliança',
            deltas: { 'rede-de-aliados': 4, 'tensao-do-povo': 3 },
            consequencia: 'A celebração impressiona os visitantes — e consome dias de trabalho que não deixam nada permanente para trás.',
          },
          {
            slug: 'manter-obras-templo',
            texto: 'Manter o foco nas obras do templo, sem desviar mão de obra para a celebração',
            deltas: { 'prestigio-astronomico': 2 },
            consequencia: 'O templo não perde ritmo — a celebração da aliança fica um pouco mais modesta do que o conselho esperava.',
          },
        ],
        'campones-maia': [
          {
            slug: 'contribuir-festa-alianca',
            texto: 'Contribuir com parte da colheita para a festa da aliança',
            deltas: { 'rede-de-aliados': 2, 'tensao-do-povo': 2 },
            consequencia: 'Sua contribuição ajuda a alimentar visitantes de outra cidade — gente que você nunca vai conhecer pessoalmente.',
          },
          {
            slug: 'manter-colheita-propria',
            texto: 'Priorizar guardar a própria colheita em vez de contribuir com a festa',
            deltas: { 'tensao-do-povo': -2 },
            consequencia: 'Sua família come melhor este ano — a festa da aliança segue sem essa contribuição específica.',
          },
        ],
      },
    },

    {
      slug: 'a-sombra-de-calakmul',
      titulo: 'A sombra de Calakmul',
      amplitude: 24,
      cena:
        'Ao norte, Calakmul — o "Reino da Serpente" — tece, geração após geração, uma rede de ' +
        'alianças, tributos e guerras por procuração que cerca Tikal por praticamente todos os ' +
        'lados. Historiadores comparam essa rivalidade à de Atenas e Esparta na Grécia antiga: duas ' +
        'superpotências que definem a política de uma região inteira só de existirem uma perto da outra.',
      efeitosFixos: { 'rivalidade-calakmul': 12 },
      contexto:
        'Nenhuma decisão desta rodada nasce de um confronto direto ainda — a disputa por enquanto é ' +
        'de influência: cada cidade menor que aceita presentes ou tropas de Calakmul é uma peça a ' +
        'menos no tabuleiro de Tikal.',
      imagemSugerida: {
        descricao: 'Um mapa esquemático de território de selva com marcações de duas redes de influência se sobrepondo, sem texto legível, tom sóbrio.',
        arquivo: '/imagens/tikal/a-sombra-de-calakmul.jpg',
        onde: 'Ilustração gerada — cena genérica representando redes de influência rivais, não reprodução de um mapa real.',
      },
      investigacao: {
        olhar: 'Um mensageiro chegando exausto de uma cidade distante, com notícias de que ela acabou de aceitar presentes de Calakmul.',
        fontes: [
          {
            slug: 'rede-de-alianca-calakmul',
            tipo: 'ler',
            titulo: 'Os Reis da Serpente',
            papeis: ['conselho-real-tikal', 'sacerdote-astronomo'],
            trecho:
              'A dinastia de Calakmul constrói uma extensa rede de alianças, guerras por procuração e ' +
              'Estados vassalos que cerca Tikal — historiadores comparam a rivalidade entre as duas ' +
              'cidades à de Atenas e Esparta, ou Roma e Cartago, na definição da política de uma ' +
              'região inteira.',
            autor: 'MARTIN, S.; GRUBE, N. Chronicle of the Maya Kings and Queens. Londres: Thames & Hudson, 2000 (referência acadêmica padrão sobre a política maia clássica).',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-calakmul-invencivel',
            tipo: 'ouvir',
            titulo: '"Calakmul nunca perdeu uma guerra"',
            papeis: ['senhor-vassalo', 'mestre-construtor', 'campones-maia'],
            trecho: 'Diz-se que nenhuma cidade que já enfrentou Calakmul em guerra aberta conseguiu, até hoje, sair vitoriosa.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Exagero. Décadas depois, em 695, Tikal vai derrotar Calakmul numa batalha decisiva — a rivalidade nunca teve um vencedor permanente dos dois lados.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-real-tikal': [
          {
            slug: 'confrontar-influencia-calakmul',
            texto: 'Confrontar abertamente a influência crescente de Calakmul na região',
            deltas: { 'poder-de-tikal': 6, 'rivalidade-calakmul': 8 },
            consequencia: 'Tikal marca posição — e a tensão que já existia entre as duas cidades sobe um degrau visível para todo mundo ao redor.',
          },
          {
            slug: 'fortalecer-defesas-discretamente',
            texto: 'Fortalecer defesas discretamente, sem provocação aberta',
            deltas: { 'poder-de-tikal': 2, 'rivalidade-calakmul': 2 },
            consequencia: 'Tikal se prepara sem anunciar — uma cautela que pode ganhar tempo, ou só adiar o inevitável.',
          },
        ],
        'senhor-vassalo': [
          {
            slug: 'reafirmar-lealdade-tikal',
            texto: 'Reafirmar publicamente lealdade a Tikal diante do avanço de Calakmul',
            deltas: { 'rede-de-aliados': 6, 'rivalidade-calakmul': 4 },
            consequencia: 'Sua cidade escolhe um lado claramente — o que agrada Tikal e transforma você num alvo mais visível para Calakmul.',
          },
          {
            slug: 'manter-ambiguidade',
            texto: 'Manter relações discretas com os dois lados, sem se comprometer publicamente',
            deltas: { 'rede-de-aliados': -2 },
            consequencia: 'Você não fecha nenhuma porta — e nenhum dos dois lados confia totalmente em você por causa disso.',
          },
        ],
        'sacerdote-astronomo': [
          {
            slug: 'interpretar-sinais-guerra',
            texto: 'Interpretar os astros como sinal de que a guerra com Calakmul se aproxima',
            deltas: { 'prestigio-astronomico': 6, 'rivalidade-calakmul': 4 },
            consequencia: 'Sua leitura do céu prepara psicologicamente a cidade para o confronto — e ajuda a tornar esse confronto mais provável.',
          },
          {
            slug: 'aconselhar-cautela-religiosa',
            texto: 'Aconselhar cautela religiosa antes de qualquer escalada',
            deltas: { 'rivalidade-calakmul': -2 },
            consequencia: 'Seu conselho pesa, mas não decide sozinho — o conselho real ouve, sem necessariamente seguir.',
          },
        ],
        'mercador-jade-obsidiana': [
          {
            slug: 'redirecionar-rotas-seguras',
            texto: 'Redirecionar rotas de comércio para longe do território sob influência de Calakmul',
            deltas: { 'rede-de-aliados': -2, 'tensao-do-povo': -2 },
            consequencia: 'Seus bens chegam com mais segurança — por um caminho mais longo e mais caro do que o de antes.',
          },
          {
            slug: 'negociar-com-ambos-lados',
            texto: 'Continuar negociando bens com mercadores ligados a Calakmul também',
            deltas: { 'rivalidade-calakmul': -4, 'rede-de-aliados': 2 },
            consequencia: 'Seu comércio não escolhe lado — um lucro real, e um risco real, se algum dia isso for visto como deslealdade por Tikal.',
          },
        ],
        'mestre-construtor': [
          {
            slug: 'reforcar-muralhas',
            texto: 'Direcionar parte da mão de obra para reforçar estruturas defensivas',
            deltas: { 'poder-de-tikal': 4, 'tensao-do-povo': 4 },
            consequencia: 'Tikal fica um pouco mais preparada para um cerco — ao custo de mais uma temporada de braços tirados da lavoura.',
          },
          {
            slug: 'continuar-obras-religiosas',
            texto: 'Continuar priorizando as obras religiosas em andamento',
            deltas: { 'prestigio-astronomico': 2 },
            consequencia: 'O templo avança — as defesas da cidade seguem exatamente como estavam antes desta rodada.',
          },
        ],
        'campones-maia': [
          {
            slug: 'aceitar-convocacao-defesa',
            texto: 'Aceitar ser convocado para reforçar defesas, se for chamado',
            deltas: { 'tensao-do-povo': 4, 'poder-de-tikal': 2 },
            consequencia: 'Você troca, de novo, tempo de lavoura por trabalho da cidade — desta vez, defesa em vez de templo.',
          },
          {
            slug: 'resistir-nova-convocacao',
            texto: 'Resistir discretamente a mais uma convocação de trabalho',
            deltas: { 'tensao-do-povo': -4, 'poder-de-tikal': -2 },
            consequencia: 'Você protege sua própria colheita — e a cidade tem um pouco menos de braços disponíveis se a crise chegar rápido.',
          },
        ],
      },
    },

    {
      slug: 'a-derrota-de-562',
      titulo: 'A derrota de 562',
      amplitude: 28,
      cena:
        'Em 562, uma aliança entre Calakmul e a cidade de Caracol inflige a Tikal uma derrota ' +
        'humilhante. No choque que segue, Tikal para de erguer novos monumentos e de gravar novas ' +
        'inscrições — um silêncio no registro de pedra que vai durar gerações.',
      efeitosFixos: { 'poder-de-tikal': -20, 'tensao-do-povo': 10 },
      contexto:
        'Nenhuma decisão desta rodada muda o resultado da batalha — ele já aconteceu antes de ' +
        'qualquer papel poder agir. O que ainda está em aberto é como cada parte de Tikal reage ao ' +
        'choque da derrota.',
      imagemSugerida: {
        descricao: 'Um templo parcialmente construído, andaimes abandonados ao redor, silêncio na cena, luz fraca de fim de tarde, sem figuras humanas em destaque.',
        arquivo: '/imagens/tikal/a-derrota-de-562.jpg',
        onde: 'Ilustração gerada — cena genérica representando o início do hiato, não reprodução de um sítio específico.',
      },
      investigacao: {
        olhar: 'Uma pedra preparada para receber uma nova inscrição, deixada em branco — ninguém veio terminar o trabalho.',
        fontes: [
          {
            slug: 'derrota-562-hiato',
            tipo: 'ler',
            titulo: 'O hiato de Tikal',
            papeis: ['conselho-real-tikal', 'senhor-vassalo', 'sacerdote-astronomo'],
            trecho:
              'Em 562, uma aliança entre Calakmul e Caracol derrota Tikal de forma humilhante. Nas ' +
              'décadas seguintes — cerca de 130 anos — Tikal praticamente para de erguer novos ' +
              'monumentos e de gravar novas inscrições, um período que os historiadores chamam de ' +
              '"hiato".',
            autor: 'MARTIN, S.; GRUBE, N. Chronicle of the Maya Kings and Queens. Londres: Thames & Hudson, 2000.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-tikal-nunca-mais',
            tipo: 'ouvir',
            titulo: '"Tikal nunca mais vai se erguer"',
            papeis: ['mestre-construtor', 'campones-maia'],
            trecho: 'Corre entre as cidades vizinhas que Tikal está definitivamente acabada, e que os deuses da cidade abandonaram seus antigos favoritos.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Exagero de derrota. Décadas depois, em 695, Tikal se recupera e derrota Calakmul numa batalha decisiva — o hiato foi uma pausa longa, não um fim.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-real-tikal': [
          {
            slug: 'silencio-estrategico',
            texto: 'Adotar um silêncio estratégico — parar de provocar Calakmul até recuperar forças',
            deltas: { 'rivalidade-calakmul': -8, 'poder-de-tikal': -4 },
            consequencia: 'Tikal recua da disputa aberta por um tempo — uma escolha humilhante, mas menos custosa do que insistir numa guerra que acabou de perder.',
          },
          {
            slug: 'buscar-vinganca-imediata',
            texto: 'Buscar uma resposta militar imediata, mesmo enfraquecidos',
            deltas: { 'poder-de-tikal': -8, 'rivalidade-calakmul': 10 },
            consequencia: 'A resposta sai antes de Tikal estar pronta para ela — um risco que a derrota recente deveria ter ensinado a evitar.',
          },
        ],
        'senhor-vassalo': [
          {
            slug: 'manter-lealdade-apesar-derrota',
            texto: 'Manter lealdade a Tikal, mesmo com ela enfraquecida',
            deltas: { 'rede-de-aliados': 4 },
            consequencia: 'Sua cidade aposta que a derrota é passageira — uma fidelidade que Tikal, se sobreviver ao hiato, não vai esquecer.',
          },
          {
            slug: 'considerar-mudar-lado',
            texto: 'Considerar abertamente uma aproximação com Calakmul',
            deltas: { 'rede-de-aliados': -8, 'rivalidade-calakmul': -2 },
            consequencia: 'Você começa a testar o terreno do outro lado — um cálculo frio que só compensa se Tikal realmente não se recuperar.',
          },
        ],
        'sacerdote-astronomo': [
          {
            slug: 'suspender-novas-inscricoes',
            texto: 'Suspender a gravação de novas inscrições até que haja algo digno de registrar',
            deltas: { 'prestigio-astronomico': -6 },
            consequencia: 'O silêncio de pedra começa por decisão sua — um gesto que os historiadores, séculos depois, vão chamar de "hiato".',
          },
          {
            slug: 'preservar-conhecimento-existente',
            texto: 'Dedicar-se a preservar e copiar os registros e calendários já existentes',
            deltas: { 'prestigio-astronomico': 2 },
            consequencia: 'Nenhuma glória nova é registrada — mas o que já existia não se perde, esperando o dia em que alguém volte a ler.',
          },
        ],
        'mercador-jade-obsidiana': [
          {
            slug: 'manter-comercio-discreto',
            texto: 'Manter o comércio funcionando o mais discretamente possível durante a crise',
            deltas: { 'rede-de-aliados': 2, 'tensao-do-povo': -2 },
            consequencia: 'Bens continuam circulando, mesmo com a cidade abalada — um fio de normalidade que ajuda mais do que qualquer discurso.',
          },
          {
            slug: 'reduzir-atividade-espera',
            texto: 'Reduzir a atividade comercial até que o rumo da cidade fique mais claro',
            deltas: { 'rede-de-aliados': -4 },
            consequencia: 'Você protege seu próprio patrimônio — e a cidade sente a falta do comércio bem na hora em que mais precisaria dele.',
          },
        ],
        'mestre-construtor': [
          {
            slug: 'reparar-danos-essenciais',
            texto: 'Concentrar a mão de obra em reparos essenciais, não em novos monumentos',
            deltas: { 'tensao-do-povo': -4 },
            consequencia: 'Nada novo se ergue — o que já existia se mantém em pé, e a lavoura recupera braços que a construção vinha consumindo.',
          },
          {
            slug: 'insistir-novo-monumento',
            texto: 'Insistir em começar um novo monumento para "mostrar força" apesar da derrota',
            deltas: { 'prestigio-astronomico': 4, 'tensao-do-povo': 8 },
            consequencia: 'A obra começa como um gesto de desafio — pago, mais uma vez, pelo tempo de quem carrega a pedra.',
          },
        ],
        'campones-maia': [
          {
            slug: 'aproveitar-pausa-lavoura',
            texto: 'Aproveitar a pausa nas grandes obras para recuperar a própria lavoura',
            deltas: { 'tensao-do-povo': -6 },
            consequencia: 'Pela primeira vez em anos, uma estação inteira é sua, não da cidade — a colheita agradece.',
          },
          {
            slug: 'temer-instabilidade',
            texto: 'Temer que a derrota traga fome e instabilidade maiores do que qualquer obra trazia',
            deltas: { 'tensao-do-povo': 4 },
            consequencia: 'A incerteza sobre o futuro de Tikal pesa tanto quanto o trabalho pesava — só que agora ninguém sabe nem para quem reclamar.',
          },
        ],
      },
    },

    {
      slug: 'o-silencio-que-nao-e-fim',
      titulo: 'O silêncio que não é fim',
      amplitude: 22,
      cena:
        'Gerações se passam sem que Tikal erga um monumento novo contando sua própria glória. Mas ' +
        'a cidade não desaparece: em silêncio, seu conselho, seus sacerdotes e seus mercadores ' +
        'mantêm a engrenagem funcionando, esperando o momento de voltar a se afirmar.',
      contexto:
        'É exatamente esse tipo de período — sem vitórias para gravar em pedra, mas também sem ' +
        'colapso — que a arqueologia tem mais dificuldade de reconstruir: o silêncio no registro não ' +
        'significa, necessariamente, silêncio na vida real da cidade.',
      imagemSugerida: {
        descricao: 'O interior de uma câmara de arquivo com rolos e tábuas empilhados em prateleiras de pedra, luz de tocha, sem figuras humanas em destaque.',
        arquivo: '/imagens/tikal/o-silencio-que-nao-e-fim.jpg',
        onde: 'Ilustração gerada — cena genérica representando a preservação de conhecimento durante o hiato, não reprodução de um sítio específico.',
      },
      investigacao: {
        olhar: 'Um sacerdote mais jovem folheando registros antigos, tentando entender o que os antecessores sabiam antes da derrota.',
        fontes: [
          {
            slug: 'recuperacao-tikal-695',
            tipo: 'ler',
            titulo: 'O que vem depois do silêncio',
            papeis: ['conselho-real-tikal', 'sacerdote-astronomo', 'senhor-vassalo'],
            trecho:
              'Em 695, décadas depois da derrota de 562, um novo governante de Tikal derrota Calakmul ' +
              'numa batalha decisiva, encerrando a supremacia da cidade rival e restaurando Tikal como ' +
              'a potência dominante da região — o hiato termina não com o fim de Tikal, mas com sua ' +
              'recuperação.',
            autor: 'MARTIN, S.; GRUBE, N. Chronicle of the Maya Kings and Queens. Londres: Thames & Hudson, 2000.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-calakmul-absorveu-tikal',
            tipo: 'ouvir',
            titulo: '"Tikal já é, na prática, parte de Calakmul"',
            papeis: ['mercador-jade-obsidiana', 'campones-maia'],
            trecho: 'Comenta-se que, depois de tantos anos de silêncio, Tikal já não decide mais nada por conta própria — só finge ainda ser independente.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Exagero. Tikal mantém governo e identidade próprios durante todo o hiato — a recuperação de 695 só é possível porque a cidade nunca deixou de existir como entidade política independente.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-real-tikal': [
          {
            slug: 'reconstruir-alianca-discretamente',
            texto: 'Reconstruir discretamente a rede de alianças, sem anunciar publicamente as intenções',
            deltas: { 'rede-de-aliados': 8, 'rivalidade-calakmul': 2 },
            consequencia: 'Tikal volta a tecer laços, sem chamar atenção de Calakmul antes da hora — paciência como estratégia.',
          },
          {
            slug: 'reduzir-tributo-vassalos',
            texto: 'Reduzir temporariamente o tributo cobrado das cidades vassalas, para reconquistar lealdade',
            deltas: { 'rede-de-aliados': 6, 'poder-de-tikal': -2 },
            consequencia: 'Tikal recebe menos por um tempo — e ganha de volta uma confiança que a derrota tinha abalado.',
          },
        ],
        'senhor-vassalo': [
          {
            slug: 'apoiar-reconstrucao-tikal',
            texto: 'Apoiar ativamente os esforços de reconstrução de Tikal',
            deltas: { 'rede-de-aliados': 6, 'poder-de-tikal': 4 },
            consequencia: 'Sua cidade aposta na recuperação de Tikal — uma aposta que só vale a pena se a história confirmar o que ainda não é certeza nenhuma.',
          },
          {
            slug: 'manter-distancia-prudente',
            texto: 'Manter distância prudente até ter mais certeza sobre o futuro de Tikal',
            deltas: { 'rede-de-aliados': -4 },
            consequencia: 'Você espera para ver — uma prudência que também é, ela mesma, uma forma de enfraquecer ainda mais quem está tentando se reerguer.',
          },
        ],
        'sacerdote-astronomo': [
          {
            slug: 'retomar-registros-cautela',
            texto: 'Retomar, com cautela, o registro de acontecimentos importantes',
            deltas: { 'prestigio-astronomico': 6 },
            consequencia: 'As primeiras marcas depois do longo silêncio são modestas — mas são um começo de que o hiato, por fim, está perto do fim.',
          },
          {
            slug: 'formar-nova-geracao-sacerdotes',
            texto: 'Dedicar-se a formar uma nova geração de sacerdotes e escribas',
            deltas: { 'prestigio-astronomico': 4, 'rede-de-aliados': 2 },
            consequencia: 'O conhecimento sobrevive além da sua própria vida — o tipo de investimento que só rende resultado depois que você já não estiver lá para ver.',
          },
        ],
        'mercador-jade-obsidiana': [
          {
            slug: 'reativar-rotas-antigas',
            texto: 'Reativar rotas de comércio que tinham sido abandonadas durante a crise',
            deltas: { 'rede-de-aliados': 6, 'tensao-do-povo': -2 },
            consequencia: 'Bens voltam a circular como antes — um sinal, pequeno mas real, de que a vida em Tikal está voltando ao normal.',
          },
          {
            slug: 'consolidar-riqueza-propria',
            texto: 'Usar o período de silêncio para consolidar riqueza própria, sem grande risco',
            deltas: { 'rede-de-aliados': -2 },
            consequencia: 'Você sai do hiato mais rico do que entrou — a cidade como um todo, nem tanto.',
          },
        ],
        'mestre-construtor': [
          {
            slug: 'planejar-proximo-monumento',
            texto: 'Começar a planejar, com calma, o próximo grande monumento de Tikal',
            deltas: { 'prestigio-astronomico': 4, 'tensao-do-povo': 3 },
            consequencia: 'Nada é erguido ainda — mas o projeto começa a tomar forma, pronto para quando Tikal estiver pronta para gastar pedra e braço de novo.',
          },
          {
            slug: 'priorizar-recuperacao-agricola',
            texto: 'Priorizar apoiar a recuperação agrícola da região antes de qualquer nova obra',
            deltas: { 'tensao-do-povo': -6 },
            consequencia: 'A terra ao redor de Tikal se recupera antes da pedra — uma escolha que talvez não apareça em nenhuma inscrição, mas sustenta tudo o que vem depois.',
          },
        ],
        'campones-maia': [
          {
            slug: 'reconstruir-propria-vida',
            texto: 'Aproveitar o período mais calmo para reconstruir a própria vida e a própria terra',
            deltas: { 'tensao-do-povo': -6 },
            consequencia: 'Anos sem grandes convocações permitem que sua família finalmente respire — um alívio que nenhuma inscrição de pedra vai registrar, mas que é real.',
          },
          {
            slug: 'desconfiar-de-nova-convocacao',
            texto: 'Desconfiar que a calma é temporária e que uma nova convocação está por vir',
            deltas: { 'tensao-do-povo': 2 },
            consequencia: 'Sua desconfiança se prova, décadas depois, correta — mas por enquanto só torna a espera mais pesada.',
          },
        ],
      },
    },
  ],

  juri: {
    pergunta: 'Um mundo de cidades-Estado rivais, como o dos maias, é mais frágil ou mais resistente do que um império único, como o dos incas ou dos astecas?',
    lados: [
      { nome: 'Mais frágil', fontesSlugs: ['derrota-562-hiato', 'rede-de-alianca-calakmul'] },
      { nome: 'Mais resistente', fontesSlugs: ['cidades-estado-maias', 'recuperacao-tikal-695', 'aliancas-dinasticas-maias'] },
    ],
  },

  desfecho: {
    fixo:
      'Cerca de 130 anos se passam sem que Tikal erga um novo monumento contando sua própria ' +
      'glória. Mas a cidade não desaparece: em 695, um novo governante de Tikal derrota Calakmul ' +
      'numa batalha decisiva, encerrando a supremacia da rival e restaurando Tikal como a potência ' +
      'dominante da região — o hiato termina em recuperação, não em fim.',
    variavel: ['poder-final', 'rede-de-aliados-final', 'tensao-final'],
    textoFecho:
      'Ao contrário do Tawantinsuyu inca ou do império asteca centrado em Tenochtitlán, o poder de ' +
      'Tikal nunca foi permanente nem absoluto — podia cair, e caiu de fato em 562, quase até o ' +
      'esquecimento. Também podia se reerguer, e se reergueu, décadas depois, sem que nenhum ' +
      'império único jamais tivesse existido para garantir uma coisa ou outra. É essa a diferença ' +
      'estrutural mais importante entre os três "donos da terra" que este módulo mostrou: nem toda ' +
      'grande civilização americana antes de 1492 escolheu se organizar do mesmo jeito — e nem toda ' +
      'queda, mesmo uma que dure gerações, é definitiva.',
    perguntasDebate: [
      'A Tensão entre o povo da turma de vocês terminou alta ou baixa? Quem pagou o preço mais direto pelos templos, alianças e guerras de Tikal — e quem só colheu o prestígio?',
      'Diferente de "O Tawantinsuyu" e "Tenochtitlán", este cenário não tem um império único no centro. Isso mudou o tipo de decisão que vocês tomaram, papel a papel?',
      'Tikal quase desapareceu do registro histórico por 130 anos e ainda assim se recuperou. Que outros exemplos — históricos ou não — vocês conhecem de uma "queda" que não foi definitiva?',
    ],
    perguntasReflexao: [
      { nivel: 'Sua experiência', pergunta: 'No papel que você jogou, como foi decidir sem saber se Tikal ia se recuperar da derrota de 562 ou não? O que isso muda em relação a jogar um cenário cujo desfecho final você já sabe de antemão?' },
      { nivel: 'O conceito', pergunta: 'Ao contrário dos outros dois cenários da Aula 9, aqui não existe um "centro" único de poder. Como isso se chama, e por que essa diferença importa para entender os maias de verdade?' },
      { nivel: 'Além desta aula', pergunta: 'Rivalidades entre poucas "superpotências" que disputam a lealdade de países ou grupos menores existem hoje? Em que isso se parece, e em que se diferencia, da disputa entre Tikal e Calakmul?' },
    ],
  },
}
