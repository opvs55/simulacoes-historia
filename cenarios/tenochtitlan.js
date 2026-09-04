// "Tenochtitlán" — 1ª série, Aula 9 do livro (mesma aula de tawantinsuyu.js,
// ângulo diferente: economia e tributo em vez de território e integração,
// para não repetir a mesma mecânica duas vezes). Mesmo corte ético: só
// organização INTERNA do Império Asteca, séculos antes de qualquer contato
// europeu — nenhuma menção a espanhóis, conquista ou colonização. Evita de
// propósito o tema de sacrifício ritual: não é necessário para cobrir
// tributo/comércio, e é o assunto mais sensacionalizado e estereotipado
// sobre os astecas — incluí-lo sem necessidade pedagógica clara arrisca
// reduzir a civilização a esse único traço. Nenhum Huey Tlatoani nomeado
// como personagem — mesmo motivo do "conselho-coroa"/"conselho-imperial"
// nos outros cenários.
export default {
  slug: 'tenochtitlan',
  versao: 1,
  serie: '1a',
  era: 'colonizacao',
  titulo: 'Tenochtitlán',
  pergunta: 'Como um império sem moeda cobra tributo de dezenas de povos dominados — e ainda sustenta uma rede de comércio de longa distância?',

  introducao:
    'O Vale do México, entre os séculos XIV e XVI. Tenochtitlán — fundada sobre um lago em ' +
    '1325, segundo a tradição, onde uma águia pousou sobre um cacto — cresce até se tornar o ' +
    'centro de uma rede que domina dezenas de povos na Mesoamérica. Não há moeda: o cacau serve ' +
    'de referência de valor, mas o que sustenta o império de verdade são duas coisas — tributo ' +
    'que entra de fora, e uma classe de comerciantes que viaja centenas de quilômetros carregando ' +
    'bens que a própria cidade não produz. Cada rodada é uma geração de decisões sobre como ' +
    'manter as duas coisas funcionando ao mesmo tempo.',

  indicadores: [
    {
      slug: 'chinampas',
      nome: 'Produção das chinampas',
      inicial: 55,
      faixas: ['insuficiente', 'estável', 'excedente para comércio'],
    },
    {
      slug: 'tributo',
      nome: 'Tributo recebido',
      inicial: 40,
      faixas: ['irregular', 'previsível', 'abundante'],
    },
    {
      slug: 'rede-pochteca',
      nome: 'Alcance da rede de comércio',
      inicial: 35,
      faixas: ['local', 'regional', 'de longa distância'],
    },
    {
      slug: 'ressentimento',
      nome: 'Ressentimento dos povos tributários',
      inicial: 25,
      faixas: ['convivência', 'tensão contida', 'revolta latente'],
    },
    {
      slug: 'prestigio',
      nome: 'Prestígio de Tenochtitlán',
      inicial: 50,
      faixas: ['cidade entre outras', 'respeitada', 'centro do mundo conhecido'],
    },
  ],

  papeis: [
    {
      slug: 'conselho-tlatoani',
      nome: 'Conselho do Tlatoani',
      bloco: 'elite',
      peso: 5,
      cota: 2,
      perguntaGuia: 'O que sustenta Tenochtitlán daqui a três gerações — o tributo que chega, ou o comércio que sai?',
      contexto:
        'Você aconselha o Tlatoani — o "grande orador", escolhido entre a nobreza para governar. ' +
        'Toda decisão sobre tributo, guerra ou comércio de longa distância passa por este círculo.',
      icone: '/imagens/tenochtitlan/papeis/conselho-tlatoani.jpg',
    },
    {
      slug: 'pochteca',
      nome: 'Pochteca',
      bloco: 'mediador',
      peso: 3,
      cota: 2,
      perguntaGuia: 'Eu vejo o que nenhum nobre em Tenochtitlán vê — o que faço com isso quando volto?',
      contexto:
        'Você é comerciante de longa distância, e também um pouco espião e diplomata: viaja por ' +
        'territórios fora do domínio direto do império, troca cacau, pena, jade e obsidiana, e ' +
        'traz notícias que ninguém mais tem.',
      icone: '/imagens/tenochtitlan/papeis/pochteca.jpg',
    },
    {
      slug: 'calpixque',
      nome: 'Calpixque de uma província tributária',
      bloco: 'mediador',
      peso: 2,
      cota: 3,
      perguntaGuia: 'Quanto posso exigir antes de a província deixar de ser aliada e virar risco?',
      contexto:
        'Você administra o tributo de uma província que não é asteca por origem — foi anexada, e ' +
        'agora entrega algodão, cacau, penas ou guerreiros conforme a lista que Tenochtitlán exige.',
      icone: '/imagens/tenochtitlan/papeis/calpixque.jpg',
    },
    {
      slug: 'chinampera',
      nome: 'Agricultora de chinampas',
      bloco: 'popular',
      peso: 1,
      cota: 6,
      perguntaGuia: 'A ilha que minha família construiu no lago é nossa — mas o milho dela é só nosso?',
      contexto:
        'Sua família cultiva uma chinampa — uma ilha artificial de terra e lama sobre o lago, ' +
        'presa por raízes de salgueiro. É um dos jeitos mais produtivos de plantar da Mesoamérica ' +
        '— e parte do que ele produz nunca chega à sua própria mesa.',
      icone: '/imagens/tenochtitlan/papeis/chinampera.jpg',
    },
    {
      slug: 'artesao-pena',
      nome: 'Artesão de penas',
      bloco: 'popular',
      peso: 1,
      cota: 3,
      perguntaGuia: 'Um manto de penas leva meses para ficar pronto — e vira presente de um dia só.',
      contexto:
        'Você trabalha com amantecayotl — a arte de compor mantos, escudos e adornos com penas de ' +
        'aves tropicais trazidas de longe pelos pochteca. É um dos trabalhos mais respeitados do ' +
        'império, e um dos mais controlados por quem manda.',
      icone: '/imagens/tenochtitlan/papeis/artesao-pena.jpg',
    },
    {
      slug: 'povo-tributario',
      nome: 'Representante de um povo tributário',
      bloco: 'popular',
      peso: 2,
      cota: 4,
      perguntaGuia: 'Meu povo perdeu a guerra uma geração atrás — até quando isso continua custando caro?',
      contexto:
        'Seu povo não é mexica de origem. Foi derrotado em guerra e agora vive sob domínio de ' +
        'Tenochtitlán, entregando tributo todo ciclo — e observando, de perto, o que acontece a ' +
        'quem atrasa a entrega.',
      icone: '/imagens/tenochtitlan/papeis/povo-tributario.jpg',
    },
  ],

  rodadas: [
    {
      slug: 'a-lista-de-tributo',
      titulo: 'A lista que toda província conhece',
      amplitude: 22,
      cena:
        'O Conselho revisa a lista de tributos exigidos de cada província dominada — algodão de ' +
        'um lado, cacau de outro, penas e obsidiana de um terceiro. A lista precisa ser exigente ' +
        'o bastante para sustentar Tenochtitlán, e viável o bastante para não empurrar as ' +
        'províncias à revolta.',
      efeitosFixos: { ressentimento: 5 },
      contexto:
        'Historiadores identificam listas de tributo detalhadas, província por província, ' +
        'registradas em códices — cada uma especificando exatamente o que, quanto, e com que ' +
        'frequência cada território dominado devia entregar.',
      imagemSugerida: {
        descricao: 'Fardos de algodão, cacau em grãos e penas coloridas organizados em pilhas separadas sobre esteiras, sem pessoas em destaque.',
        arquivo: '/imagens/tenochtitlan/a-lista-de-tributo.jpg',
        onde: 'Ilustração gerada — cena genérica de bens de tributo mesoamericano, não reprodução de nenhum códice específico.',
      },
      investigacao: {
        olhar: 'Escribas registram símbolos numa longa folha dobrada, cada símbolo representando uma quantidade exata de um bem diferente.',
        fontes: [
          {
            slug: 'codices-de-tributo',
            tipo: 'ler',
            titulo: 'O que um códice de tributo registra',
            papeis: ['conselho-tlatoani', 'calpixque'],
            trecho:
              'Cada província tinha sua entrega detalhada por símbolos: uma certa quantidade de ' +
              'mantos, outra de cacau, outra de guerreiros para o exército em caso de campanha — ' +
              'nada deixado à memória ou ao acordo verbal.',
            acervo: 'Fato bem documentado sobre os códices de tributo asteca (como o Codex Mendoza, produzido já no período colonial mas registrando o sistema tributário pré-existente).',
            natureza: 'documental',
            confiavel: true,
            autor: 'Historiografia consolidada sobre o sistema tributário asteca — não é citação de um documento específico.',
          },
          {
            slug: 'peso-da-lista',
            tipo: 'ouvir',
            titulo: '"Esse ciclo a lista pediu mais pena do que temos ave"',
            papeis: ['povo-tributario', 'calpixque'],
            trecho: '"Não é que não queiramos entregar. É que a lista foi escrita por quem nunca caçou uma ave dessas."',
            natureza: 'recriada',
            confiavel: true,
            acervo: 'Reconstituição plausível da tensão entre exigência de tributo e capacidade real de produção local — não é depoimento de época.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-tlatoani': [
          {
            slug: 'lista-rigida',
            texto: 'Manter a lista de tributo rígida, sem exceções por província',
            deltas: { tributo: 9, ressentimento: 6, prestigio: 3 },
            consequencia: 'A previsibilidade favorece Tenochtitlán — e cada província sabe exatamente o que perde, ciclo após ciclo.',
          },
          {
            slug: 'lista-ajustavel',
            texto: 'Permitir ajustes na lista conforme a capacidade real de cada província',
            deltas: { tributo: 3, ressentimento: -3 },
            consequencia: 'O sistema fica mais justo, na medida do possível — e mais difícil de planejar com certeza absoluta.',
          },
        ],
        'pochteca': [
          {
            slug: 'reportar-capacidade-real',
            texto: 'Reportar ao Conselho a capacidade real de produção das províncias que visita',
            deltas: { ressentimento: -3, tributo: 2 },
            consequencia: 'Suas informações tornam a cobrança mais realista — e você vira, sem escolher, uma espécie de fiscal.',
          },
          {
            slug: 'manter-foco-comercio',
            texto: 'Manter o foco só no comércio, sem se envolver na questão do tributo',
            deltas: { 'rede-pochteca': 4 },
            consequencia: 'Sua rede de contatos comerciais cresce — a lista de tributo segue seu curso sem sua palavra nisso.',
          },
        ],
        'calpixque': [
          {
            slug: 'cobrar-integralmente',
            texto: 'Cobrar a lista integralmente, sem abrir exceção',
            deltas: { tributo: 7, ressentimento: 5 },
            consequencia: 'Tenochtitlán recebe exatamente o que pediu — e você é quem a província vê exigindo isso, não o Conselho distante.',
          },
          {
            slug: 'negociar-prazo',
            texto: 'Negociar um prazo maior para a província completar a entrega',
            deltas: { ressentimento: -4, tributo: -2 },
            consequencia: 'A província respira um pouco — Tenochtitlán recebe um pouco menos, um pouco depois.',
          },
        ],
        'chinampera': [
          {
            slug: 'entregar-excedente',
            texto: 'Entregar o excedente da colheita para o tributo da própria Tenochtitlán',
            deltas: { chinampas: 3, tributo: 3 },
            consequencia: 'Sua chinampa sustenta, em parte, a cidade que você mesma habita — diferente de uma província distante entregando para um centro que nunca visita.',
          },
          {
            slug: 'guardar-para-familia',
            texto: 'Guardar o máximo possível para o sustento da própria família',
            deltas: { chinampas: 4 },
            consequencia: 'Sua família passa o ciclo com mais folga — o excedente que poderia ter sido tributo fica em casa.',
          },
        ],
        'artesao-pena': [
          {
            slug: 'priorizar-encomenda-oficial',
            texto: 'Priorizar as encomendas oficiais de mantos cerimoniais',
            deltas: { prestigio: 5, tributo: 2 },
            consequencia: 'Seu trabalho aparece nas cerimônias mais importantes — o tempo que sobra para outras encomendas encolhe.',
          },
          {
            slug: 'aceitar-encomendas-diversas',
            texto: 'Aceitar encomendas de diferentes nobres, não só do Conselho',
            deltas: { 'rede-pochteca': 3 },
            consequencia: 'Seu ofício circula mais amplamente pela nobreza — sem o mesmo peso de prestígio de uma peça oficial.',
          },
        ],
        'povo-tributario': [
          {
            slug: 'cumprir-lista',
            texto: 'Organizar o povo para cumprir a lista de tributo integralmente',
            deltas: { tributo: 5, ressentimento: 2 },
            consequencia: 'A entrega sai completa — o custo dela continua sendo sentido por quem entrega, não por quem recebe.',
          },
          {
            slug: 'entregar-minimo',
            texto: 'Entregar o mínimo possível, alegando dificuldades da colheita',
            deltas: { ressentimento: 4, tributo: -3 },
            consequencia: 'Seu povo guarda um pouco mais para si — e Tenochtitlán vai notar a diferença na próxima contagem.',
          },
        ],
      },
    },
    {
      slug: 'expedicao-de-longa-distancia',
      titulo: 'Uma caravana além da fronteira',
      amplitude: 21,
      cena:
        'Uma caravana de pochteca se prepara para viajar além das fronteiras diretamente ' +
        'controladas pelo império, em busca de jade, penas de quetzal e outros bens que ' +
        'Tenochtitlán não produz. A viagem é longa, o caminho passa por território não dominado, ' +
        'e o retorno não é garantido.',
      contexto:
        'Os pochteca formavam uma categoria social própria, com privilégios e riscos distintos — ' +
        'viajavam armados, por vezes disfarçados, e serviam também como fonte de informação sobre ' +
        'territórios que o exército ainda não havia alcançado.',
      imagemSugerida: {
        descricao: 'Uma trilha de terra através de uma floresta densa, com cestos de carga empilhados ao lado do caminho, sem pessoas em destaque.',
        arquivo: '/imagens/tenochtitlan/expedicao-de-longa-distancia.jpg',
        onde: 'Ilustração gerada — cena genérica de rota comercial mesoamericana, não reprodução de nenhuma expedição específica.',
      },
      investigacao: {
        olhar: 'Os cestos são revisados um a um antes da partida — cacau, obsidiana lascada e tecidos finos, organizados para a troca do outro lado da fronteira.',
        fontes: [
          {
            slug: 'pochteca-como-informantes',
            tipo: 'ler',
            titulo: 'O comerciante que também observa',
            papeis: ['pochteca', 'conselho-tlatoani'],
            trecho:
              'Além de trocar bens, os pochteca traziam de volta informações sobre a força militar, ' +
              'a riqueza e as alianças de territórios distantes — informação que o Conselho usava ' +
              'para decidir sobre futuras campanhas.',
            acervo: 'Fato bem documentado sobre o papel duplo dos pochteca como comerciantes e informantes.',
            natureza: 'documental',
            confiavel: true,
            autor: 'Historiografia consolidada sobre a organização dos pochteca — não é citação de um documento específico.',
            destrancaOpcao: 'relatar-informacoes-militares',
          },
          {
            slug: 'risco-do-caminho',
            tipo: 'ouvir',
            titulo: '"Da última caravana, nem todos voltaram"',
            papeis: ['pochteca'],
            trecho: '"O caminho não pertence a Tenochtitlán inteiro. Fora da vista das guarnições, somos só comerciantes com carga valiosa."',
            natureza: 'recriada',
            confiavel: true,
            acervo: 'Reconstituição plausível do risco real das expedições de longa distância pochteca — não é depoimento de época.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-tlatoani': [
          {
            slug: 'financiar-expedicao-grande',
            texto: 'Financiar uma expedição grande, com escolta armada',
            deltas: { 'rede-pochteca': 8, tributo: -3 },
            consequencia: 'A caravana parte mais protegida e mais cara — o Conselho aposta recursos considerando o retorno maior.',
          },
          {
            slug: 'expedicao-modesta',
            texto: 'Autorizar uma expedição modesta, sem escolta especial',
            deltas: { 'rede-pochteca': 3 },
            consequencia: 'O risco fica maior para quem viaja — o custo para os cofres de Tenochtitlán, menor.',
          },
        ],
        'pochteca': [
          {
            slug: 'relatar-informacoes-militares',
            texto: 'Relatar ao Conselho o que observar sobre a força militar dos territórios visitados',
            deltas: { prestigio: 4, ressentimento: 2 },
            consequencia: 'Sua informação vira insumo de decisões que talvez você nunca veja de perto — inclusive decisões de guerra.',
          },
          {
            slug: 'focar-apenas-comercio',
            texto: 'Focar só na troca comercial, sem levar informações militares de volta',
            deltas: { 'rede-pochteca': 5 },
            consequencia: 'Sua reputação como comerciante confiável cresce nos territórios que visita — e só como isso.',
          },
        ],
        'calpixque': [
          {
            slug: 'usar-rota-pochteca',
            texto: 'Usar a rota da caravana para escoar parte do tributo da própria província',
            deltas: { tributo: 4, 'rede-pochteca': 2 },
            consequencia: 'A logística da caravana passa a servir dois propósitos ao mesmo tempo — comércio e tributo, na mesma estrada.',
          },
          {
            slug: 'manter-rotas-separadas',
            texto: 'Manter a rota de tributo separada da rota comercial dos pochteca',
            deltas: { ressentimento: -2 },
            consequencia: 'As duas cargas não se misturam — nem o risco de uma vira o risco da outra.',
          },
        ],
        'chinampera': [
          {
            slug: 'contribuir-com-mantimentos',
            texto: 'Contribuir com mantimentos para a caravana, em troca de uma parte da troca',
            deltas: { chinampas: -2, 'rede-pochteca': 3 },
            consequencia: 'Sua produção ajuda a sustentar a viagem — e você aposta, sem controle sobre o caminho, numa troca que ainda vai acontecer longe dali.',
          },
          {
            slug: 'manter-producao-normal',
            texto: 'Manter a rotina normal da chinampa, sem se envolver com a expedição',
            deltas: { chinampas: 3 },
            consequencia: 'Sua ilha segue seu ciclo de sempre — a expedição parte sem nada que venha de você.',
          },
        ],
        'artesao-pena': [
          {
            slug: 'encomendar-materia-prima',
            texto: 'Encomendar aos pochteca penas raras que só vêm de territórios distantes',
            deltas: { prestigio: 5, 'rede-pochteca': -2 },
            consequencia: 'Seu próximo trabalho vai usar material que quase ninguém mais tem acesso — se a caravana voltar como deveria.',
          },
          {
            slug: 'trabalhar-com-material-local',
            texto: 'Continuar trabalhando só com penas já disponíveis localmente',
            deltas: { chinampas: 0 },
            consequencia: 'Seu ofício segue sem depender do resultado incerto de uma viagem longa.',
          },
        ],
        'povo-tributario': [
          {
            slug: 'oferecer-guias',
            texto: 'Oferecer guias do seu povo que conhecem parte do caminho',
            deltas: { ressentimento: -3, 'rede-pochteca': 3 },
            consequencia: 'A caravana viaja com mais segurança — seu povo aparece, pela primeira vez em muito tempo, como parceiro e não só como tributário.',
          },
          {
            slug: 'nao-se-envolver',
            texto: 'Não se envolver — a expedição não é problema nem oportunidade do seu povo',
            deltas: { ressentimento: 1 },
            consequencia: 'A caravana segue sem vocês — nem o risco, nem a chance de aparecer como parceiro.',
          },
        ],
      },
    },
    {
      slug: 'limites-do-lago',
      titulo: 'Até onde o lago aguenta',
      amplitude: 20,
      cena:
        'A cidade cresce, e a demanda por comida cresce junto. O Conselho discute expandir a área ' +
        'de chinampas — mais ilhas artificiais, construídas mais rápido, no mesmo lago que já ' +
        'sustenta a cidade inteira.',
      efeitosFixos: { prestigio: 3 },
      contexto:
        'O sistema de chinampas ao redor de Tenochtitlán chegou a sustentar uma das maiores ' +
        'densidades populacionais do mundo pré-industrial — mas a expansão indefinida do sistema ' +
        'tinha limites físicos reais impostos pela geografia do próprio lago.',
      imagemSugerida: {
        descricao: 'Vista de um sistema de ilhas artificiais retangulares sobre um lago, com canais estreitos entre elas, sem pessoas em destaque.',
        arquivo: '/imagens/tenochtitlan/limites-do-lago.jpg',
        onde: 'Ilustração gerada — cena genérica de sistema de chinampas, não reprodução de nenhum local específico.',
      },
      investigacao: {
        olhar: 'Trabalhadores amarram novas estacas na margem de uma chinampa recém-construída, testando se a estrutura aguenta mais uma camada de terra.',
        fontes: [
          {
            slug: 'tecnica-das-chinampas',
            tipo: 'ler',
            titulo: 'Como se constrói uma chinampa',
            papeis: ['chinampera', 'conselho-tlatoani'],
            trecho:
              'Estacas de salgueiro fincadas no fundo do lago formam uma armação; camadas de lama ' +
              'e vegetação aquática preenchem o espaço até formar uma ilha firme o bastante para ' +
              'plantio intensivo, com canais entre uma chinampa e outra para transporte por canoa.',
            acervo: 'Fato bem documentado sobre a técnica de construção das chinampas.',
            natureza: 'documental',
            confiavel: true,
            autor: 'Historiografia consolidada sobre agricultura asteca — não é citação de um documento específico.',
          },
          {
            slug: 'disputa-por-espaco',
            tipo: 'ouvir',
            titulo: '"A família vizinha já construiu perto demais da nossa"',
            papeis: ['chinampera'],
            trecho: '"O lago parece grande até você tentar construir mais uma ilha nele."',
            natureza: 'recriada',
            confiavel: true,
            acervo: 'Reconstituição plausível de disputas por espaço num sistema de chinampas em expansão — não é depoimento de época.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-tlatoani': [
          {
            slug: 'expandir-rapido',
            texto: 'Autorizar expansão rápida de novas chinampas, sem planejamento detalhado de espaço',
            deltas: { chinampas: 8, ressentimento: 4 },
            consequencia: 'A produção cresce rápido — e famílias vizinhas passam a disputar espaço que ninguém organizou com cuidado.',
          },
          {
            slug: 'planejar-expansao',
            texto: 'Planejar a expansão com um responsável definindo os limites de cada nova chinampa',
            deltas: { chinampas: 4, ressentimento: -2 },
            consequencia: 'O crescimento é mais lento e mais ordenado — poucas famílias reclamam de invasão de espaço.',
          },
        ],
        'pochteca': [
          {
            slug: 'trazer-mudas-novas',
            texto: 'Trazer de outras regiões variedades de plantas ainda não cultivadas nas chinampas',
            deltas: { chinampas: 4, 'rede-pochteca': 2 },
            consequencia: 'A diversidade de cultivo aumenta — trazida de fora, como boa parte do que sustenta a cidade.',
          },
          {
            slug: 'nao-se-envolver-agricultura',
            texto: 'Manter o foco no comércio de bens não-agrícolas',
            deltas: { 'rede-pochteca': 3 },
            consequencia: 'Sua rede de contatos continua crescendo em outra direção, longe da discussão sobre o lago.',
          },
        ],
        'calpixque': [
          {
            slug: 'exigir-mais-producao',
            texto: 'Exigir que a expansão das chinampas aumente também a cota de tributo da região',
            deltas: { tributo: 5, ressentimento: 3 },
            consequencia: 'Mais chinampas, mais tributo esperado — a conta chega rápido depois da terra nova.',
          },
          {
            slug: 'manter-cota-atual',
            texto: 'Manter a cota de tributo atual, mesmo com a produção aumentando',
            deltas: { ressentimento: -2, chinampas: 2 },
            consequencia: 'As famílias sentem que o excedente é, ao menos em parte, delas — por enquanto.',
          },
        ],
        'chinampera': [
          {
            slug: 'construir-nova-chinampa',
            texto: 'Construir uma nova chinampa para a própria família, aproveitando a expansão',
            deltas: { chinampas: 5 },
            consequencia: 'Sua família ganha mais terra fértil — na mesma disputa de espaço que todo mundo ao redor também está tentando resolver.',
          },
          {
            slug: 'manter-chinampa-atual',
            texto: 'Manter só a chinampa que a família já tem, sem disputar espaço novo',
            deltas: { ressentimento: -1 },
            consequencia: 'Você evita a disputa — e também a chance de ampliar o que a família produz.',
          },
        ],
        'artesao-pena': [
          {
            slug: 'observar-oportunidade',
            texto: 'Observar se a expansão libera terra para cultivo de plantas tintórias que seu ofício usa',
            deltas: { prestigio: 2 },
            consequencia: 'Um detalhe pequeno da expansão pode acabar beneficiando seu trabalho — se você prestar atenção certa.',
          },
          {
            slug: 'manter-rotina',
            texto: 'Manter a rotina do ofício, sem acompanhar a discussão sobre o lago',
            deltas: {},
            consequencia: 'A expansão segue seu curso, decidida por outros — seu trabalho não muda por causa dela.',
          },
        ],
        'povo-tributario': [
          {
            slug: 'observar-de-longe',
            texto: 'Observar de longe — a expansão do lago não afeta diretamente seu território',
            deltas: {},
            consequencia: 'Tenochtitlán resolve seu próprio espaço sem que seu povo precise se envolver nisso.',
          },
          {
            slug: 'comentar-desigualdade',
            texto: 'Comentar, entre os seus, como Tenochtitlán expande terra enquanto cobra tributo de fora',
            deltas: { ressentimento: 3 },
            consequencia: 'O comentário não muda nada na prática — mas fica registrado, mais uma vez, o contraste entre o centro e a periferia do império.',
          },
        ],
      },
    },
    {
      slug: 'o-atraso-da-provincia',
      titulo: 'A entrega que não chegou completa',
      amplitude: 23,
      cena:
        'Uma província tributária entrega só parte do que a lista exige, alegando uma colheita ' +
        'ruim. É a segunda vez em poucos ciclos. O Conselho precisa decidir como responder — sem ' +
        'saber ao certo se a desculpa é verdadeira ou se é o início de uma resistência maior.',
      efeitosFixos: { ressentimento: 4 },
      contexto:
        'O não cumprimento de tributo por províncias dominadas era um problema recorrente e ' +
        'documentado na administração asteca, tratado de formas que iam da negociação renovada à ' +
        'repressão militar direta, dependendo do cálculo político do momento.',
      imagemSugerida: {
        descricao: 'Cestos parcialmente vazios ao lado de uma balança de contagem, num pátio de armazenamento, sem pessoas em destaque.',
        arquivo: '/imagens/tenochtitlan/o-atraso-da-provincia.jpg',
        onde: 'Ilustração gerada — cena genérica de contagem de tributo incompleto, não reprodução de nenhum evento específico documentado.',
      },
      investigacao: {
        olhar: 'O calpixque da região recém-chegou a Tenochtitlán, e evita olhar diretamente para o Conselho enquanto explica a diferença na entrega.',
        fontes: [
          {
            slug: 'padrao-de-repressao',
            tipo: 'ler',
            titulo: 'O que geralmente acontece com quem atrasa',
            papeis: ['conselho-tlatoani', 'calpixque'],
            trecho:
              'Províncias que atrasavam tributo repetidamente enfrentavam desde o aumento da cota ' +
              'seguinte até campanhas militares punitivas — a resposta dependia de quão vital ' +
              'aquela província era, e de quão exposta Tenochtitlán estava a parecer fraca.',
            acervo: 'Fato bem documentado sobre os mecanismos de coerção usados diante de inadimplência tributária no império asteca.',
            natureza: 'documental',
            confiavel: true,
            autor: 'Historiografia consolidada sobre o sistema tributário asteca — não é citação de um documento específico.',
            destrancaOpcao: 'investigar-antes-de-punir',
          },
          {
            slug: 'colheita-ruim-de-verdade',
            tipo: 'ouvir',
            titulo: '"A seca chegou antes da cobrança, não depois"',
            papeis: ['povo-tributario'],
            trecho: '"Ninguém escondeu grão nenhum. O que não choveu, não choveu."',
            natureza: 'recriada',
            confiavel: true,
            acervo: 'Reconstituição plausível de uma explicação genuína para atraso de tributo — não é depoimento de época.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-tlatoani': [
          {
            slug: 'exigir-compensacao',
            texto: 'Exigir que a próxima entrega compense integralmente o que faltou',
            deltas: { tributo: 4, ressentimento: 7 },
            consequencia: 'Tenochtitlán não perde nada no total — a província paga a diferença em dobro de urgência.',
          },
          {
            slug: 'investigar-antes-de-punir',
            texto: 'Enviar alguém para verificar se a colheita realmente falhou antes de decidir',
            deltas: { ressentimento: -4, tributo: -1 },
            consequencia: 'A resposta demora mais — e, se a colheita falhou de verdade, a decisão evita punir quem não tinha culpa.',
          },
        ],
        'pochteca': [
          {
            slug: 'confirmar-situacao-regiao',
            texto: 'Usar sua rede de contatos para confirmar se houve seca na região',
            deltas: { ressentimento: -3, prestigio: 2 },
            consequencia: 'Sua informação evita, talvez, uma resposta injusta — e reforça sua utilidade para além do comércio puro.',
          },
          {
            slug: 'nao-se-envolver-questao',
            texto: 'Não se envolver — não é questão de comércio',
            deltas: {},
            consequencia: 'O Conselho decide sem sua informação, com o que já tinha em mãos.',
          },
        ],
        'calpixque': [
          {
            slug: 'defender-provincia',
            texto: 'Defender a província perante o Conselho, atestando a colheita ruim',
            deltas: { ressentimento: -3, prestigio: -2 },
            consequencia: 'A província ganha um defensor dentro do sistema — e você assume, perante Tenochtitlán, o risco de estar errado.',
          },
          {
            slug: 'reportar-sem-opiniao',
            texto: 'Reportar os números sem emitir opinião sobre a causa do atraso',
            deltas: { tributo: 1 },
            consequencia: 'Você não assume risco nenhum — a decisão fica inteiramente com o Conselho.',
          },
        ],
        'chinampera': [
          {
            slug: 'compartilhar-excedente',
            texto: 'Se sua chinampa teve excedente, compartilhar informalmente com quem precisa',
            deltas: { ressentimento: -2 },
            consequencia: 'A solidariedade não aparece em nenhum registro oficial — mas alivia alguém, na prática.',
          },
          {
            slug: 'manter-producao-propria',
            texto: 'Manter o que produziu só para a própria família',
            deltas: { chinampas: 1 },
            consequencia: 'Sua família não sente o mesmo aperto — o problema da outra província continua sendo só dela.',
          },
        ],
        'artesao-pena': [
          {
            slug: 'observar-de-longe',
            texto: 'Observar a situação de longe, sem se envolver',
            deltas: {},
            consequencia: 'A questão do tributo não chega perto do seu ofício desta vez.',
          },
          {
            slug: 'comentar-com-outros-artesaos',
            texto: 'Comentar o caso com outros artesãos, que também dependem de bens vindos de fora',
            deltas: { 'rede-pochteca': -1 },
            consequencia: 'A conversa não muda a decisão do Conselho — mas espalha, entre quem depende de comércio, uma noção de que a rede é mais frágil do que parece.',
          },
        ],
        'povo-tributario': [
          {
            slug: 'apoiar-provincia-atrasada',
            texto: 'Manifestar apoio à província que atrasou, reconhecendo a mesma pressão',
            deltas: { ressentimento: 5 },
            consequencia: 'A solidariedade entre povos tributários cresce — e Tenochtitlán, se estiver prestando atenção, nota o padrão.',
          },
          {
            slug: 'manter-distancia',
            texto: 'Manter distância — cada província cuida do seu próprio problema com Tenochtitlán',
            deltas: {},
            consequencia: 'Seu povo não se arrisca por uma causa que não é diretamente sua — desta vez.',
          },
        ],
      },
    },
    {
      slug: 'a-grande-entrega',
      titulo: 'Quando todas as províncias chegam juntas',
      amplitude: 21,
      cena:
        'Uma vez por ciclo maior, representantes de todas as províncias tributárias chegam a ' +
        'Tenochtitlán ao mesmo tempo para a grande entrega cerimonial — tributo, comércio e ' +
        'exibição de poder acontecem juntos, diante de toda a nobreza reunida.',
      contexto:
        'Cerimônias de entrega coletiva de tributo funcionavam também como demonstração pública de ' +
        'poder — quanto mais rica e organizada a exibição, mais forte a mensagem para qualquer ' +
        'província que estivesse considerando resistir.',
      imagemSugerida: {
        descricao: 'Uma grande praça cerimonial vista de longe, com filas organizadas de pessoas carregando fardos, sem rostos em destaque.',
        arquivo: '/imagens/tenochtitlan/a-grande-entrega.jpg',
        onde: 'Ilustração gerada — cena genérica de cerimônia mesoamericana, não reprodução de nenhum evento específico documentado.',
      },
      investigacao: {
        olhar: 'Cada província ocupa um espaço marcado na praça, na ordem em que Tenochtitlán decidiu recebê-las — e a ordem em si já é uma mensagem.',
        fontes: [
          {
            slug: 'ordem-como-mensagem',
            tipo: 'ler',
            titulo: 'A ordem da fila também é poder',
            papeis: ['conselho-tlatoani', 'calpixque'],
            trecho:
              'A posição de cada província na cerimônia — mais perto ou mais longe do centro — ' +
              'comunicava publicamente o quanto Tenochtitlán confiava ou desconfiava daquela ' +
              'região, sem precisar dizer isso em voz alta.',
            acervo: 'Reconstituição plausível de como cerimônias coletivas de tributo funcionavam como linguagem política, coerente com a historiografia — não é a transcrição de um protocolo específico.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'comparacao-entre-provincias',
            tipo: 'ouvir',
            titulo: '"A província vizinha trouxe mais do que nós — vão pensar que somos fracos"',
            papeis: ['povo-tributario'],
            trecho: '"Não é sobre o que temos. É sobre o que parece que temos, na frente de todo mundo."',
            natureza: 'recriada',
            confiavel: true,
            acervo: 'Reconstituição plausível da pressão competitiva entre províncias tributárias — não é depoimento de época.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-tlatoani': [
          {
            slug: 'exibicao-grandiosa',
            texto: 'Organizar uma exibição grandiosa, reforçando publicamente a hierarquia entre províncias',
            deltas: { prestigio: 8, ressentimento: 5 },
            consequencia: 'Nenhuma província presente terá dúvida sobre o poder de Tenochtitlán — nem sobre seu próprio lugar nele.',
          },
          {
            slug: 'cerimonia-sobria',
            texto: 'Conduzir uma cerimônia mais sóbria, sem ênfase excessiva em hierarquia',
            deltas: { ressentimento: -3, prestigio: 2 },
            consequencia: 'A tensão entre províncias esfria um pouco — e a demonstração de força perde parte do impacto.',
          },
        ],
        'pochteca': [
          {
            slug: 'expor-bens-exoticos',
            texto: 'Expor publicamente os bens exóticos trazidos de expedições recentes',
            deltas: { prestigio: 5, 'rede-pochteca': 2 },
            consequencia: 'A riqueza vinda de fora reforça a imagem de Tenochtitlán como centro do mundo conhecido — e a sua própria como quem torna isso possível.',
          },
          {
            slug: 'manter-perfil-discreto',
            texto: 'Manter perfil discreto durante a cerimônia, sem chamar atenção para o comércio',
            deltas: {},
            consequencia: 'A cerimônia segue seu curso sem destaque especial para os pochteca desta vez.',
          },
        ],
        'calpixque': [
          {
            slug: 'apresentar-provincia-bem',
            texto: 'Apresentar a entrega da sua província da melhor forma possível',
            deltas: { prestigio: 3, ressentimento: 2 },
            consequencia: 'Sua província parece mais forte do que talvez esteja — o que ajuda hoje pode virar cobrança amanhã.',
          },
          {
            slug: 'apresentar-com-honestidade',
            texto: 'Apresentar a entrega com honestidade, sem inflar a aparência',
            deltas: { ressentimento: -2 },
            consequencia: 'Não há exagero para desmentir depois — também não há o brilho extra que impressiona o Conselho.',
          },
        ],
        'chinampera': [
          {
            slug: 'participar-desfile',
            texto: 'Participar do desfile de excedente agrícola da cidade',
            deltas: { prestigio: 3, chinampas: -1 },
            consequencia: 'Seu trabalho vira, por um dia, parte da imagem pública de Tenochtitlán — em vez de só sustento da própria família.',
          },
          {
            slug: 'observar-de-fora',
            texto: 'Observar a cerimônia de fora, sem participar diretamente',
            deltas: {},
            consequencia: 'Você vê o espetáculo como qualquer outro morador da cidade — sem fazer parte dele.',
          },
        ],
        'artesao-pena': [
          {
            slug: 'vestir-nobreza',
            texto: 'Fornecer os mantos cerimoniais que a nobreza usa na recepção às províncias',
            deltas: { prestigio: 6 },
            consequencia: 'Seu trabalho está, literalmente, sobre os ombros de quem representa Tenochtitlán diante de todo o império — reconhecimento e pressão na mesma peça.',
          },
          {
            slug: 'nao-participar-cerimonia',
            texto: 'Não se envolver com encomendas para a cerimônia deste ciclo',
            deltas: {},
            consequencia: 'Outro artesão veste a nobreza desta vez — seu trabalho segue sem essa vitrine.',
          },
        ],
        'povo-tributario': [
          {
            slug: 'entregar-com-orgulho',
            texto: 'Entregar o tributo do seu povo com o máximo de dignidade possível, apesar de tudo',
            deltas: { prestigio: 2, ressentimento: -1 },
            consequencia: 'Ninguém pode dizer que seu povo entregou de má vontade visível — o que sente por dentro é outra história.',
          },
          {
            slug: 'entregar-minimo-ceremonial',
            texto: 'Cumprir só o mínimo cerimonial exigido, sem esforço extra',
            deltas: { ressentimento: 2 },
            consequencia: 'A entrega acontece, sem nenhum gesto a mais — e sem nenhum a menos que desse motivo para punição.',
          },
        ],
      },
    },
  ],

  desfecho: {
    fixo:
      'Tenochtitlán segue crescendo ao fim desta partida — mais rica, mais dependente de tributo ' +
      'e comércio de longa distância, e cercada por províncias cujo ressentimento nenhuma decisão ' +
      'da turma conseguiu zerar de vez. Nenhuma escolha muda o que a história registra depois: ' +
      'décadas após um momento como este, navios vão aparecer na costa do golfo — e algumas das ' +
      'mesmas províncias tributárias que pagaram a Tenochtitlán vão pesar essa história na hora de ' +
      'escolher um lado.',
    variavel: ['chinampas', 'tributo', 'rede-pochteca', 'ressentimento', 'prestigio'],
    textoFecho:
      'Em cerca de dois séculos, Tenochtitlán cresceu de uma cidade fundada sobre um lago para o ' +
      'centro de uma rede que dominava dezenas de povos na Mesoamérica — sustentada por tributo ' +
      'que entrava de fora e por uma classe de comerciantes que ia buscar, a centenas de ' +
      'quilômetros, o que a própria cidade não produzia. Cada geração de decisões — a sua, agora — ' +
      'deixou o mesmo tipo de marca: mais riqueza e prestígio no centro, e algum ressentimento ' +
      'acumulado nas províncias que sustentavam esse centro sem nunca serem o centro.',
    perguntasDebate: [
      'Quem, nesta simulação, teve mais poder de decisão — e quem só teve poder de entregar o que era exigido?',
      'O ressentimento das províncias tributárias nunca zerou em nenhuma rodada, não importa o que a turma decidisse. O que isso diz sobre impérios sustentados por tributo?',
      'Os pochteca eram comerciantes e também informantes. Existe alguma atividade hoje que combine essas duas funções da mesma forma?',
    ],
    perguntasReflexao: [
      {
        nivel: 'Sua experiência',
        pergunta: 'No papel que você teve, em algum momento sentiu que servir Tenochtitlán e cuidar da sua própria família ou comunidade eram a mesma coisa — ou eram coisas em disputa?',
      },
      {
        nivel: 'O conceito',
        pergunta: 'Agora que você viu o tributo por dentro, como você explicaria a diferença entre um "imposto" (que você paga por fazer parte de algo) e um "tributo" (que uma província paga por ter perdido uma guerra)?',
      },
      {
        nivel: 'Além desta aula',
        pergunta: 'Tenochtitlán dependia de duas coisas que vinham de fora: tributo forçado e comércio voluntário. Você consegue pensar em algum sistema — histórico ou atual — que também combine essas duas formas de fazer riqueza entrar?',
      },
    ],
  },
}
