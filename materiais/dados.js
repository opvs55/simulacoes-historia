// Materiais alternativos — indicados pelo professor, não gerados pelo jogo.
// Pensado pra complementar (não substituir) o livro didático: vídeos,
// documentários, textos que ajudam a entender o pano de fundo de um ou
// mais cenários antes ou depois de jogar.
//
// tipo: 'video' | 'texto' | 'documentario' | 'linha-do-tempo' — usado só pra
// escolher o ícone e, no caso de linha-do-tempo, pra linkar dentro do
// próprio site em vez de abrir um vídeo externo.
// serie: '1a' | '2a' — usado pra filtrar a lista em /materiais.
// cenariosRelacionados: slugs de cenarios/*.js que esse material ajuda a
// entender. /materiais agrupa cada item pelo PRIMEIRO slug da lista (um
// item nunca aparece duplicado em duas seções); lista vazia joga o item
// no grupo "Sem simulação ligada".
// duracaoMin: quantos minutos leva, aproximado — a linha esconde o campo
// quando ausente. Vídeos usam a duração real do YouTube; linhas do tempo
// são uma estimativa (a leitura mostra "no seu ritmo" ao lado, então não
// precisa ser exata).
// momento: 'antes' | 'depois' de jogar a simulação relacionada — opcional,
// só quando a ordem faz diferença de verdade pro que o material ensina.
export default [
  {
    slug: 'da-revolta-ao-desenvolvimento',
    titulo: 'Do quartel ao canteiro de obras',
    tipo: 'linha-do-tempo',
    serie: '2a',
    url: '/linha-do-tempo/da-revolta-ao-desenvolvimento',
    descricao:
      'Mulheres operárias, a Revolta de 1932, a CLT como estratégia de controle do movimento ' +
      'operário, Dutra na Guerra Fria, o retorno e a queda de Vargas, e JK prometendo 50 anos ' +
      'em 5. O que fica entre "São Paulo, 1917" e a era de Brasília.',
    cenariosRelacionados: ['sao-paulo-1917', 'o-plano-que-nao-existia'],
    duracaoMin: 10,
    momento: 'antes',
  },
  {
    slug: 'povos-originarios-e-colonizacao',
    titulo: 'Um continente que já tinha nome',
    tipo: 'linha-do-tempo',
    serie: '1a',
    url: '/linha-do-tempo/povos-originarios-e-colonizacao',
    descricao:
      'Maias, astecas e incas antes do contato; o encontro, a conquista e a colonização depois ' +
      '— sem decisão jogável, com atenção a quem escreveu cada fonte e à resistência indígena ' +
      'documentada desde o início. Doze telas.',
    cenariosRelacionados: [],
    duracaoMin: 11,
  },
  {
    slug: 'absolutismo-e-mercantilismo',
    titulo: 'O rei, a fé e o mercado',
    tipo: 'linha-do-tempo',
    serie: '1a',
    url: '/linha-do-tempo/absolutismo-e-mercantilismo',
    descricao:
      'Como a Europa deixou de ser um mosaico de feudos e virou um continente de reis ' +
      'absolutos, em treze telas — Reforma, Contrarreforma, formação das monarquias, os três ' +
      'teóricos do absolutismo, navegações e mercantilismo. O mesmo pano de fundo de "A Coroa ' +
      'e o Cofre".',
    cenariosRelacionados: ['coroa-e-cofre'],
    duracaoMin: 12,
    momento: 'antes',
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
    duracaoMin: 15,
    momento: 'antes',
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
    duracaoMin: 48,
    momento: 'antes',
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
    duracaoMin: 112,
    momento: 'depois',
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
      'existia". Mesmo pano de fundo da simulação "9 de Julho".',
    cenariosRelacionados: ['nove-de-julho-1932', 'o-plano-que-nao-existia'],
    duracaoMin: 25,
    momento: 'antes',
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
    duracaoMin: 9,
    momento: 'antes',
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
    duracaoMin: 9,
    momento: 'antes',
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
    duracaoMin: 27,
    momento: 'antes',
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
    duracaoMin: 27,
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
    duracaoMin: 27,
    momento: 'antes',
  },

  // Leituras — trocadas em 2026-09-03: a primeira leva (InfoEscola/Toda
  // Matéria) tinha publicidade agressiva demais (vídeos "rewarded ad" no
  // meio do texto) e foi trocada por Wikipédia PT, verificada artigo a
  // artigo: gratuita, sem cadastro, sem NENHUM anúncio, mais substancial
  // e mais reconhecida do que os sites anteriores.
  {
    slug: 'luis-xiv-absolutismo',
    titulo: 'Luís XIV de França',
    tipo: 'texto',
    serie: '1a',
    url: 'https://pt.wikipedia.org/wiki/Luís_XIV_de_França',
    descricao:
      'Leitura de apoio (Wikipédia). Como o poder real se tornou centralizado sob Luís XIV — ' +
      'inclui Colbert e o mercantilismo, o mesmo pano de fundo de "A Coroa e o Cofre".',
    cenariosRelacionados: ['coroa-e-cofre'],
    duracaoMin: 10,
    momento: 'antes',
  },
  {
    slug: 'imperio-inca',
    titulo: 'Império Inca',
    tipo: 'texto',
    serie: '1a',
    url: 'https://pt.wikipedia.org/wiki/Império_Inca',
    descricao:
      'Leitura de apoio (Wikipédia). Organização política, tributo (mita) e expansão territorial ' +
      'do Tawantinsuyu — o mesmo pano de fundo da simulação "O Tawantinsuyu".',
    cenariosRelacionados: ['tawantinsuyu'],
    duracaoMin: 12,
    momento: 'antes',
  },
  {
    slug: 'coronelismo',
    titulo: 'Coronelismo',
    tipo: 'texto',
    serie: '2a',
    url: 'https://pt.wikipedia.org/wiki/Coronelismo',
    descricao:
      'Leitura de apoio (Wikipédia). Como os coronéis controlavam o voto na República Velha, do ' +
      '"curral eleitoral" ao fim do voto aberto — pano de fundo direto de "A terra do favor".',
    cenariosRelacionados: ['a-terra-do-favor'],
    duracaoMin: 10,
    momento: 'antes',
  },
  {
    slug: 'grandes-navegacoes',
    titulo: 'Grandes Navegações',
    tipo: 'texto',
    serie: '1a',
    url: 'https://pt.wikipedia.org/wiki/Era_dos_Descobrimentos',
    descricao:
      'Leitura de apoio (Wikipédia). O contexto, as técnicas e as etapas da expansão marítima ' +
      'portuguesa e espanhola — o mesmo pano de fundo da simulação "A Casa da Índia".',
    cenariosRelacionados: ['casa-da-india'],
    duracaoMin: 12,
    momento: 'antes',
  },
  {
    slug: 'era-vargas-panorama',
    titulo: 'Era Vargas',
    tipo: 'texto',
    serie: '2a',
    url: 'https://pt.wikipedia.org/wiki/Era_Vargas',
    descricao:
      'Leitura de apoio (Wikipédia). As três fases do governo Vargas — Provisório, ' +
      'Constitucional e Estado Novo — incluindo a CLT e a legislação trabalhista.',
    cenariosRelacionados: ['o-plano-que-nao-existia'],
    duracaoMin: 10,
    momento: 'antes',
  },
]
