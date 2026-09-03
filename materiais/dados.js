// Materiais alternativos — indicados pelo professor, não gerados pelo jogo.
// Pensado pra complementar (não substituir) o livro didático: vídeos,
// documentários, textos que ajudam a entender o pano de fundo de um ou
// mais cenários antes ou depois de jogar.
//
// tipo: 'video' | 'texto' | 'documentario' | 'linha-do-tempo' — usado só pra
// escolher o ícone e, no caso de linha-do-tempo, pra linkar dentro do
// próprio site em vez de abrir um vídeo externo.
// serie: '1a' | '2a' — usado pra agrupar a lista em /materiais (ver
// docs/plano-curriculo-1a-2a-serie.md, seção 2).
// cenariosRelacionados: slugs de cenarios/*.js que esse material ajuda a entender
export default [
  {
    slug: 'absolutismo-e-mercantilismo',
    titulo: 'O rei, a fé e o mercado',
    tipo: 'linha-do-tempo',
    serie: '1a',
    url: '/linha-do-tempo/absolutismo-e-mercantilismo',
    descricao:
      'Como a Europa deixou de ser um mosaico de feudos e virou um continente de reis ' +
      'absolutos, em onze telas — Contrarreforma, formação das monarquias, os três teóricos ' +
      'do absolutismo, navegações e mercantilismo. O mesmo pano de fundo de "A Coroa e o Cofre".',
    cenariosRelacionados: [],
  },
  {
    slug: 'republica-velha-1889-1930',
    titulo: 'A República que o povo assistiu',
    tipo: 'linha-do-tempo',
    serie: '2a',
    url: '/linha-do-tempo/republica-velha',
    descricao:
      'Os quarenta anos da Primeira República em dezessete telas, em modo história — role como ' +
      'num feed, com glossário e checagens rápidas no caminho. Cobre o pano de fundo dos 3 ' +
      'cenários: o coronelismo de "A terra do favor", a greve de "São Paulo, 1917" e a ascensão ' +
      'de Vargas de "O plano que não existia".',
    cenariosRelacionados: ['sao-paulo-1917', 'a-terra-do-favor', 'o-plano-que-nao-existia'],
  },
  {
    slug: 'era-vargas-tempo-de-revolucao',
    titulo: 'Era Vargas — Tempo de Revolução',
    tipo: 'video',
    serie: '2a',
    url: 'https://www.youtube.com/watch?v=b86dJnjDoDw',
    descricao:
      'Indicado pelo professor. Cobre o fim da Primeira República e a Revolução de 1930 — ' +
      'o pano de fundo direto de "A terra do favor" (o sistema eleitoral que a Revolução ' +
      'derruba) e o ponto de partida de "O plano que não existia" (a ascensão de Vargas que ' +
      'termina no Estado Novo, sete anos depois).',
    cenariosRelacionados: ['a-terra-do-favor', 'o-plano-que-nao-existia'],
  },
  {
    slug: 'getulio-vargas-ditadura-ou-lideranca',
    titulo: 'Getúlio Vargas: ditadura implacável ou liderança histórica? (1/2)',
    tipo: 'video',
    serie: '2a',
    url: 'https://www.youtube.com/watch?v=c-JXN-QIZoA',
    descricao:
      'Indicado pelo professor. Primeira parte de duas sobre a trajetória de Vargas — ' +
      'complementa "O plano que não existia" (Estado Novo) e o período depois dele, quando ' +
      'Vargas volta ao poder eleito em 1950.',
    cenariosRelacionados: ['o-plano-que-nao-existia'],
  },
  {
    slug: '1932-revolucao-paulista',
    titulo: '1932: a revolução paulista quando São Paulo enfrentou o Brasil',
    tipo: 'video',
    serie: '2a',
    url: 'https://www.youtube.com/watch?v=NGKl_4f8KYk',
    descricao:
      'Indicado pelo professor. A Revolta Constitucionalista de 1932 — as elites paulistas ' +
      'contra o governo provisório de Vargas, entre 1930 e o Estado Novo de "O plano que não ' +
      'existia". Ainda não é uma simulação própria no site (ver plano de currículo), mas já ' +
      'é pano de fundo direto.',
    cenariosRelacionados: ['o-plano-que-nao-existia'],
  },
  {
    slug: 'nerdologia-proclamacao-da-republica',
    titulo: 'Proclamação da República (Nerdologia)',
    tipo: 'video',
    serie: '2a',
    url: 'https://www.youtube.com/watch?v=4xSQkZ8jzeM',
    descricao:
      'Indicado pelo professor. O 15 de novembro de 1889 explicado rápido — o mesmo &ldquo;povo ' +
      'bestializado&rdquo; que abre a Linha do tempo da República Velha.',
    cenariosRelacionados: ['a-terra-do-favor'],
  },
  {
    slug: 'nerdologia-tenentismo',
    titulo: 'Tenentismo (Nerdologia)',
    tipo: 'video',
    serie: '2a',
    url: 'https://www.youtube.com/watch?v=50GbBByAgcI',
    descricao:
      'Indicado pelo professor. O movimento dos jovens oficiais nos anos 1920 — moralizar a ' +
      'República, não fazer revolução social. Pano de fundo direto da Revolta de 1932 e do ' +
      'grupo que chega ao poder com Vargas em 1930.',
    cenariosRelacionados: [],
  },
  {
    slug: 'economia-brasileira-ep01-brasil-de-portugal',
    titulo: 'Economia Brasileira, Ep. 01: 1492–1808, Brasil de Portugal',
    tipo: 'video',
    serie: '1a',
    url: 'https://www.youtube.com/watch?v=zsC3u2861C4',
    descricao:
      'Indicado pelo professor. Primeiro episódio de uma série sobre a economia brasileira — ' +
      'a lógica colonial e mercantilista vista pelo dinheiro, do início da colonização até a ' +
      'vinda da Corte portuguesa.',
    cenariosRelacionados: [],
  },
  {
    slug: 'economia-brasileira-ep02',
    titulo: 'Economia Brasileira, Ep. 02: 1808–1888',
    tipo: 'video',
    serie: '2a',
    url: 'https://www.youtube.com/watch?v=MQJkeDatZRg',
    descricao:
      'Indicado pelo professor. Segundo episódio — da vinda da Corte à véspera da República. ' +
      'Período de ponte entre a colonização (1ª série) e a Primeira República (2ª série).',
    cenariosRelacionados: [],
  },
  {
    slug: 'economia-brasileira-ep03-brasil-dos-brasileiros',
    titulo: 'Economia Brasileira, Ep. 03: 1888–1929, Brasil dos brasileiros',
    tipo: 'video',
    serie: '2a',
    url: 'https://www.youtube.com/watch?v=sf0sFLoYMoY',
    descricao:
      'Indicado pelo professor. Terceiro episódio — a economia da Primeira República até a ' +
      'véspera da crise de 1929. Pano de fundo direto de "São Paulo, 1917" e "A terra do favor".',
    cenariosRelacionados: ['sao-paulo-1917', 'a-terra-do-favor'],
  },
]
