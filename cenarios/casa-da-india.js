// "A Casa da Índia" — Portugal, c. 1430-1500. Mesmo padrão de coroa-e-cofre.js:
// nenhuma pessoa real e nomeada é retratada como papel jogável nem em imagem
// (nem o Infante Dom Henrique, nem Bartolomeu Dias, nem Vasco da Gama, nem o
// rei João II) — eventos e datas reais aparecem só como fatos históricos
// (`documental`, em `contexto` e `investigacao`), do mesmo jeito que Luís XIV
// aparece em coroa-e-cofre.js.
//
// Deliberadamente FORA deste cenário: o início do tráfico de pessoas
// escravizadas a partir da costa africana (Arguim, a partir de 1440;
// Companhia da Guiné) — um tema real, mas que merece o mesmo tratamento
// cuidadoso e dedicado que a colonização da América já recebe no currículo
// (ver docs/plano-curriculo-1a-2a-serie.md, seção 3.3), não uma rodada dentro
// de uma simulação sobre financiamento de rotas e diplomacia. Este cenário
// fica deliberadamente no comércio de ouro e especiarias e no risco da
// navegação — não na costa da Guiné, não em pessoas como mercadoria.
//
// Fontes: datas e eventos (barreira do Cabo Bojador até 1434, Tratado de
// Alcáçovas 1479, Tratado de Tordesilhas 1494, Bartolomeu Dias dobra o Cabo
// em 1488, chegada a Calicute em 1498, fundação da Casa da Índia por volta
// de 1500, altíssima taxa de perda de naus e vidas na Carreira da Índia) são
// fatos históricos bem estabelecidos, marcados como `documental`. "Vozes de
// época" — o que um marinheiro, mercador ou carpinteiro teria dito — não são
// citações reais verificadas, então são sempre `recriada`.
export default {
  slug: 'casa-da-india',
  versao: 1,
  serie: '1a',
  era: 'absolutismo',
  titulo: 'A Casa da Índia',
  pergunta: 'Vale apostar o tesouro do reino numa rota que ninguém garante que existe?',

  introducao:
    'Portugal, século XV. Um reino pequeno em território e população decide investir, geração ' +
    'após geração, no que nenhum vizinho europeu ainda tenta a sério: descer a costa africana ' +
    'pelo Atlântico, buscando uma rota própria até o ouro e, décadas depois, até a pimenta — sem ' +
    'depender das caravanas que cruzam o Saara nem dos intermediários do Mediterrâneo. Não existe ' +
    'um único gênio por trás disso, e sim décadas de caravelas cada vez mais ousadas, cartas ' +
    'náuticas reescritas viagem após viagem, e um Tesouro real que aposta, de novo e de novo, num ' +
    'retorno que nunca é garantido. O ouro e a pimenta que essa rota traz para Lisboa vão financiar, ' +
    'poucas décadas depois, o tipo de monarquia forte e centralizada que a Europa inteira vai ' +
    'copiar — a mesma que "A Coroa e o Cofre" mostra em pleno funcionamento na França de Luís XIV.',

  indicadores: [
    { slug: 'tesouro-coroa', nome: 'Tesouro da Coroa', inicial: 40, faixas: ['vazio', 'apertado', 'folgado'] },
    { slug: 'conhecimento-nautico', nome: 'Conhecimento náutico', inicial: 30, faixas: ['rudimentar', 'em expansão', 'avançado'] },
    { slug: 'rivalidade-castela', nome: 'Rivalidade com Castela', inicial: 35, faixas: ['cordial', 'tensa', 'à beira da guerra'] },
    { slug: 'custo-humano', nome: 'Custo humano da rota', inicial: 15, faixas: ['controlado', 'pesado', 'catastrófico'] },
    { slug: 'lucro-do-comercio', nome: 'Lucro do comércio ultramarino', inicial: 5, faixas: ['inexistente', 'promissor', 'vultoso'] },
  ],

  papeis: [
    {
      slug: 'coroa-portuguesa',
      nome: 'Coroa portuguesa',
      bloco: 'elite',
      peso: 8,
      cota: 1,
      perguntaGuia: 'Quanto do tesouro do reino vale apostar numa rota que ninguém garante que existe?',
      contexto:
        'Você fala em nome do rei de Portugal — um reino pequeno em população, mas com décadas de ' +
        'investimento acumulado em navegação, cartografia e uma frota que nenhum vizinho europeu ' +
        'ainda consegue igualar. Cada nau enviada mar afora é uma aposta do Tesouro que só se paga ' +
        'se voltar.',
      icone: '/imagens/casa-da-india/papeis/coroa-portuguesa.jpg',
    },
    {
      slug: 'fidalgo-da-armada',
      nome: 'Fidalgo da armada',
      bloco: 'elite',
      peso: 4,
      cota: 3,
      perguntaGuia: 'Servir no mar é a única forma de continuar sendo alguém?',
      contexto:
        'Sua família tem nome, mas cada vez menos terra e menos posição garantida só por nascença. ' +
        'O mar oferece o que a corte já não oferece fácil: uma chance de mercê real, um título, um ' +
        'lugar de destaque — se a viagem que você comandar voltar, e se você voltar com ela.',
      icone: '/imagens/casa-da-india/papeis/fidalgo-da-armada.jpg',
    },
    {
      slug: 'mercador-financiador',
      nome: 'Mercador financiador',
      bloco: 'mediador',
      peso: 3,
      cota: 4,
      perguntaGuia: 'Vale arriscar capital numa viagem que pode nunca voltar?',
      contexto:
        'Seu capital pode bancar parte de uma expedição que a Coroa sozinha não cobre inteira. Se a ' +
        'nau voltar carregada, seu retorno é real. Se não voltar, o prejuízo também é só seu — a ' +
        'Coroa não devolve o que se perde no mar.',
      icone: '/imagens/casa-da-india/papeis/mercador-financiador.jpg',
    },
    {
      slug: 'mestre-de-cartas-e-rumos',
      nome: 'Mestre de cartas e rumos',
      bloco: 'mediador',
      peso: 2,
      cota: 3,
      perguntaGuia: 'O que eu sei vale mais guardado em segredo, ou vendido a quem paga mais?',
      contexto:
        'Você registra cada trecho novo de costa, cada corrente, cada estrela usada para calcular a ' +
        'posição de uma nau em alto-mar. O que você sabe é, ao mesmo tempo, o bem mais valioso do ' +
        'reino e o mais fácil de vender para quem paga mais — inclusive Castela.',
      icone: '/imagens/casa-da-india/papeis/mestre-de-cartas-e-rumos.jpg',
    },
    {
      slug: 'marinheiro-da-carreira',
      nome: 'Marinheiro da Carreira',
      bloco: 'popular',
      peso: 1,
      cota: 8,
      perguntaGuia: 'Por que embarcar numa viagem de que nem todos voltam?',
      contexto:
        'Você embarca numa viagem que pode levar mais de um ano, sem saber ao certo se vai voltar. ' +
        'O soldo é melhor do que a maioria dos trabalhos em terra — e a lista de quem não voltou da ' +
        'última frota é conhecida de todo mundo no cais antes mesmo de você embarcar.',
      icone: '/imagens/casa-da-india/papeis/marinheiro-da-carreira.jpg',
    },
    {
      slug: 'carpinteiro-da-ribeira',
      nome: 'Carpinteiro da Ribeira',
      bloco: 'popular',
      peso: 1,
      cota: 6,
      perguntaGuia: 'Cada nau que construo bem é uma que pode voltar — ou uma que o rei manda ainda mais longe?',
      contexto:
        'Na Ribeira das Naus, em Lisboa, cada prancha que você encaixa é parte de uma embarcação que ' +
        'vai enfrentar meses de mar aberto. Um erro seu, descoberto tarde demais, pode custar uma ' +
        'tripulação inteira longe de qualquer costa.',
      icone: '/imagens/casa-da-india/papeis/carpinteiro-da-ribeira.jpg',
    },
  ],

  rodadas: [
    {
      slug: 'alem-do-bojador',
      titulo: 'Além do Bojador',
      amplitude: 22,
      cena:
        'Década de 1430. Cabo Bojador, na costa do atual Saara Ocidental, tem fama de ponto sem ' +
        'volta — correntes fortes, baixios traiçoeiros e lendas de um mar fervente onde nenhuma nau ' +
        'retorna. Depois de anos de tentativas fracassadas, um capitão finalmente consegue contorná-lo ' +
        'e voltar para contar. A Coroa decide: vale continuar mandando caravelas cada vez mais para o ' +
        'sul, atrás de uma rota própria até o ouro que hoje atravessa o Saara em caravanas controladas ' +
        'por intermediários muçulmanos?',
      efeitosFixos: { 'custo-humano': 6 },
      contexto:
        'Enquanto a Coroa financia essas primeiras viagens, um novo tipo de embarcação, a caravela, ' +
        'começa a ser aperfeiçoada nos estaleiros portugueses — mais leve e manobrável que as naus do ' +
        'Mediterrâneo, capaz de navegar contra o vento em zigue-zague, essencial para voltar de uma ' +
        'costa que o vento e a corrente empurram para o sul.',
      imagemSugerida: {
        descricao: 'Uma caravela pequena vista de longe, navegando próxima a uma costa desértica e rochosa da África ocidental, mar agitado.',
        arquivo: '/imagens/casa-da-india/alem-do-bojador.jpg',
        onde: 'Ilustração gerada — cena genérica, não reprodução de nenhuma pintura específica.',
      },
      investigacao: {
        olhar: 'Um mapa-múndi de meados do século XV, com a costa africana desenhada apenas até um ponto — depois dele, o cartógrafo deixou o espaço em branco.',
        fontes: [
          {
            slug: 'bojador-vencido',
            tipo: 'ler',
            titulo: 'O cabo que ninguém voltava para contar',
            papeis: ['coroa-portuguesa', 'fidalgo-da-armada'],
            trecho:
              'Por anos, capitães enviados além do Cabo Bojador não retornavam ou voltavam sem ' +
              'completar a travessia — até que, por volta de 1434, um deles consegue contornar o cabo ' +
              'e voltar a Lisboa para relatar o caminho.',
            autor: 'Historiografia consolidada sobre a expansão marítima portuguesa do século XV — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
            destrancaOpcao: 'financiar-frota-maior',
          },
          {
            slug: 'ouro-do-sudao',
            tipo: 'ler',
            titulo: 'O ouro que atravessa o deserto',
            papeis: ['mercador-financiador'],
            trecho:
              'Há séculos, o ouro da região do atual Mali e Sudão Ocidental chega ao Mediterrâneo por ' +
              'caravanas que cruzam o Saara, controladas por intermediários do Norte da África — cada ' +
              'etapa da rota cobra seu próprio pedágio antes que o metal chegue à Europa.',
            autor: 'Historiografia consolidada sobre as rotas transaarianas de ouro — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-mar-fervente',
            tipo: 'ouvir',
            titulo: '"Depois do Bojador, o mar ferve"',
            papeis: ['marinheiro-da-carreira', 'carpinteiro-da-ribeira'],
            trecho:
              'Marinheiros mais antigos contam que, além daquele ponto, o mar é tão quente que ferve, ' +
              'e que qualquer nau que se aproxime é engolida por completo.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho:
              'Lenda. O mar além do Bojador não ferve — o que existia de verdade era um baixio ' +
              'traiçoeiro perto da costa e uma corrente que dificultava a volta, o suficiente para ' +
              'nenhuma nau ter voltado a desmentir o boato antes de 1434.',
          },
        ],
      },
      opcoesPorPapel: {
        'coroa-portuguesa': [
          {
            slug: 'financiar-nova-expedicao',
            texto: 'Financiar mais uma expedição para tentar contornar o cabo',
            deltas: { 'tesouro-coroa': -10, 'conhecimento-nautico': 10 },
            consequencia: 'O Tesouro sente cada caravela enviada sem garantia de retorno — mas cada uma que volta traz consigo um pedaço a mais do mapa que ninguém tinha antes.',
          },
          {
            slug: 'aguardar-resultados',
            texto: 'Esperar notícias antes de financiar a próxima viagem',
            deltas: { 'tesouro-coroa': 4, 'conhecimento-nautico': -4 },
            consequencia: 'O cofre real folga um pouco — e a costa africana continua, por enquanto, tão desconhecida quanto estava.',
          },
          {
            slug: 'financiar-frota-maior',
            texto: 'Agora que se sabe que dá para voltar, financiar uma frota maior e mais ambiciosa',
            deltas: { 'tesouro-coroa': -18, 'conhecimento-nautico': 16, 'custo-humano': 4 },
            consequencia: 'Saber que existe volta muda o cálculo de risco inteiro — a Coroa aposta grosso numa rota que, até ontem, parecia impossível de sequer tentar de novo.',
          },
        ],
        'fidalgo-da-armada': [
          {
            slug: 'comandar-expedicao',
            texto: 'Pedir para comandar pessoalmente a próxima expedição',
            deltas: { 'conhecimento-nautico': 6, 'custo-humano': 2 },
            consequencia: 'Comandar uma frota rumo ao desconhecido é a chance mais direta de mercê real que um fidalgo sem título de peso pode conseguir — se voltar.',
          },
          {
            slug: 'ficar-na-corte',
            texto: 'Permanecer na corte, perto do rei, em vez de embarcar',
            deltas: { 'conhecimento-nautico': -2 },
            consequencia: 'Você preserva a proximidade com o rei — e vê outro fidalgo, não você, voltar com o crédito de ter ido mais longe que qualquer nau antes dele.',
          },
        ],
        'mercador-financiador': [
          {
            slug: 'investir-viagem',
            texto: 'Investir capital próprio numa das novas viagens',
            deltas: { 'tesouro-coroa': -4, 'lucro-do-comercio': 3 },
            consequencia: 'Seu capital ajuda a bancar o que a Coroa sozinha não cobre — e se a viagem voltar com ouro, você recebe uma parte combinada de antemão.',
          },
          {
            slug: 'esperar-rota-provada',
            texto: 'Esperar a rota estar mais provada antes de arriscar capital',
            deltas: { 'lucro-do-comercio': -2 },
            consequencia: 'Você não arrisca nada agora — e não tem parte em nada do que as primeiras viagens trouxerem, se trouxerem.',
          },
        ],
        'mestre-de-cartas-e-rumos': [
          {
            slug: 'registrar-rota',
            texto: 'Registrar com precisão cada trecho novo de costa, correntes e ventos',
            deltas: { 'conhecimento-nautico': 10 },
            consequencia: 'Cada carta que você atualiza vale, para o próximo piloto, mais do que qualquer relato de memória — e vale ouro para quem quiser comprá-la.',
          },
          {
            slug: 'guardar-segredo',
            texto: 'Guardar as novas informações só para a Coroa, sem registrar em carta comum',
            deltas: { 'conhecimento-nautico': 4, 'rivalidade-castela': -4 },
            consequencia: 'O conhecimento fica mais protegido dos olhos de Castela — e mais frágil: existe só na sua memória e na de poucos outros pilotos.',
          },
        ],
        'marinheiro-da-carreira': [
          {
            slug: 'embarcar-expedicao',
            texto: 'Embarcar na próxima expedição rumo ao desconhecido',
            deltas: { 'custo-humano': 4, 'conhecimento-nautico': 2 },
            consequencia: 'Você embarca sabendo que parte das últimas tripulações enviadas ao sul não voltou — o soldo prometido pesa mais que o medo, por enquanto.',
            evento: {
              texto: 'Na noite antes de partir, um companheiro mais velho de tripulação some do porto sem se despedir.',
              reacoes: [
                { slug: 'denunciar', texto: 'Avisar o mestre da nau', resultado: 'A partida não atrasa, mas agora todos sabem que alguém preferiu fugir a embarcar.' },
                { slug: 'calar', texto: 'Não dizer nada e embarcar assim mesmo', resultado: 'Uma vaga a menos na tripulação, preenchida às pressas por alguém que nunca tinha visto o mar.' },
              ],
            },
          },
          {
            slug: 'recusar-viagem',
            texto: 'Recusar esta viagem e esperar uma rota já mais conhecida',
            deltas: { 'custo-humano': -2 },
            consequencia: 'Você evita o risco desta viagem específica — e o soldo mais alto que ela pagava, também.',
          },
        ],
        'carpinteiro-da-ribeira': [
          {
            slug: 'construir-caravela-nova',
            texto: 'Dedicar-se ao novo modelo de caravela, mais leve e manobrável',
            deltas: { 'conhecimento-nautico': 8, 'tesouro-coroa': -4 },
            consequencia: 'O novo desenho navega contra o vento de um jeito que as naus antigas não conseguem — essencial para voltar de uma costa que empurra tudo para o sul.',
          },
          {
            slug: 'manter-modelo-conhecido',
            texto: 'Manter o modelo de nau já testado e conhecido',
            deltas: { 'conhecimento-nautico': -4, 'tesouro-coroa': 2 },
            consequencia: 'Menos risco de um projeto experimental falhar — e menos capacidade de fazer o que uma caravela nova consegue fazer sozinha.',
          },
        ],
      },
    },

    {
      slug: 'tordesilhas',
      titulo: 'A linha que dividia o mundo',
      amplitude: 18,
      cena:
        '1493. Cristóvão Colombo retorna a Castela anunciando terras encontradas a oeste, navegando ' +
        'em nome da coroa rival. Portugal já tinha, por tratado anterior e por bula papal, direitos ' +
        'reconhecidos sobre as rotas atlânticas ao sul — mas a viagem de Colombo ameaça abrir uma ' +
        'disputa nova sobre tudo que ainda não foi mapeado a oeste. A Coroa decide negociar diretamente ' +
        'com Castela uma nova linha de divisão.',
      contexto:
        'A primeira proposta de linha, definida por uma bula do papa Alexandre VI em 1493, ainda ' +
        'favorece fortemente Castela; é a negociação direta entre as duas coroas, sem esperar por ' +
        'Roma, que desloca a linha final quase 1500 quilômetros mais a oeste.',
      imagemSugerida: {
        descricao: 'Dois cartógrafos, um português e um castelhano, debruçados sobre um mesmo mapa-múndi numa mesa, cada um apontando para um ponto diferente do oceano.',
        arquivo: '/imagens/casa-da-india/tordesilhas.jpg',
        onde: 'Ilustração gerada — cena genérica representando a negociação, não reprodução de um documento específico.',
      },
      investigacao: {
        olhar: 'Uma cópia do tratado com uma linha reta desenhada sobre um mapa-múndi, cortando o oceano Atlântico de polo a polo.',
        fontes: [
          {
            slug: 'tratado-alcacovas',
            tipo: 'ler',
            titulo: 'O acordo que já existia antes de Colombo',
            papeis: ['coroa-portuguesa'],
            trecho:
              'Em 1479, o Tratado de Alcáçovas já reconhecia à Coroa portuguesa o domínio sobre as ' +
              'rotas atlânticas ao sul das Canárias — o direito que a viagem de Colombo, catorze anos ' +
              'depois, ameaça colocar em disputa.',
            autor: 'Historiografia consolidada sobre os tratados ibéricos do século XV — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'tratado-tordesilhas',
            tipo: 'ler',
            titulo: 'A linha de Tordesilhas',
            papeis: ['coroa-portuguesa', 'fidalgo-da-armada'],
            trecho:
              'Assinado em 1494, o Tratado de Tordesilhas desloca a linha de divisão para 370 léguas a ' +
              'oeste das ilhas de Cabo Verde — bem mais favorável a Portugal do que a proposta original ' +
              'do papa Alexandre VI, um ano antes.',
            autor: 'Historiografia consolidada sobre o Tratado de Tordesilhas — não é citação de um documento específico.',
            acervo: 'Fato histórico — Tratado de Tordesilhas, 1494.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-terra-a-oeste',
            tipo: 'ouvir',
            titulo: '"Dizem que Castela achou uma terra cheia de ouro"',
            papeis: ['mercador-financiador', 'marinheiro-da-carreira'],
            trecho: 'Nos portos, corre a notícia de que os castelhanos encontraram terras a oeste cobertas de ouro, prontas para tomar.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho:
              'Exagero de porto. O que Colombo encontrou em 1492 não era a Ásia nem um território ' +
              'coberto de ouro pronto para tomar — mas a notícia, distorcida, é o suficiente para ' +
              'acelerar a negociação portuguesa por uma linha mais favorável.',
          },
        ],
      },
      opcoesPorPapel: {
        'coroa-portuguesa': [
          {
            slug: 'negociar-diretamente',
            texto: 'Negociar diretamente com Castela uma nova linha, sem esperar Roma',
            deltas: { 'rivalidade-castela': -6, 'tesouro-coroa': -4 },
            consequencia: 'A negociação direta custa concessões e desgaste diplomático — mas desloca a linha centenas de léguas mais a favor de Portugal do que a proposta original do papa.',
          },
          {
            slug: 'aceitar-linha-papal',
            texto: 'Aceitar a linha já proposta pelo papa, sem reabrir a negociação',
            deltas: { 'rivalidade-castela': 4, 'tesouro-coroa': 2 },
            consequencia: 'Você evita o desgaste de uma nova rodada de negociação — e aceita uma linha que reserva a Portugal bem menos do Atlântico sul do que a Coroa acredita merecer.',
          },
        ],
        'fidalgo-da-armada': [
          {
            slug: 'oferecer-expedicao-confirmar',
            texto: 'Oferecer-se para liderar uma expedição que confirme a nova linha na prática',
            deltas: { 'conhecimento-nautico': 8, 'rivalidade-castela': -2 },
            consequencia: 'Um tratado no papel vale pouco se ninguém for até lá conferir onde, exatamente, a linha cai sobre o oceano de verdade.',
          },
          {
            slug: 'pressionar-por-recompensa',
            texto: 'Usar a negociação para pressionar por título ou recompensa própria',
            deltas: { 'rivalidade-castela': -2 },
            consequencia: 'Você garante algo para si em meio à negociação da Coroa — um cálculo que nem todo fidalgo aprova em voz alta.',
          },
        ],
        'mercador-financiador': [
          {
            slug: 'apostar-lado-portugues',
            texto: 'Reforçar investimento nas rotas do lado português da nova linha',
            deltas: { 'lucro-do-comercio': 3, 'tesouro-coroa': -2 },
            consequencia: 'Você aposta que a linha portuguesa vai valer mais do que parece agora — um risco calculado sobre um tratado que ainda não provou nada na prática.',
          },
          {
            slug: 'diversificar-castela',
            texto: 'Manter também contatos comerciais do lado castelhano, por precaução',
            deltas: { 'rivalidade-castela': -4, 'lucro-do-comercio': 1 },
            consequencia: 'Você não aposta tudo numa só coroa — uma prudência que a própria Coroa portuguesa não veria com bons olhos, se soubesse.',
          },
        ],
        'mestre-de-cartas-e-rumos': [
          {
            slug: 'redesenhar-mapas',
            texto: 'Redesenhar os mapas oficiais com a nova linha de Tordesilhas',
            deltas: { 'conhecimento-nautico': 6 },
            consequencia: 'Uma linha reta sobre um mapa parece simples — traçá-la com precisão sobre um oceano real, sem instrumento confiável de longitude, é outra história.',
          },
          {
            slug: 'questionar-precisao',
            texto: 'Alertar a Coroa de que a linha não pode ser medida com precisão em alto-mar',
            deltas: { 'conhecimento-nautico': 4, 'rivalidade-castela': -2 },
            consequencia: 'Você diz uma verdade incômoda: sem forma confiável de medir longitude no mar, a linha de Tordesilhas vai gerar disputas por décadas, tratado ou não.',
          },
        ],
        'marinheiro-da-carreira': [
          {
            slug: 'aceitar-nova-rota',
            texto: 'Aceitar servir numa expedição que testará a nova linha em alto-mar',
            deltas: { 'custo-humano': 4 },
            consequencia: 'Testar um tratado no meio do Atlântico significa semanas a mais de viagem, longe de qualquer costa conhecida.',
          },
          {
            slug: 'preferir-rota-africa',
            texto: 'Preferir servir nas rotas já conhecidas da costa africana',
            deltas: { 'custo-humano': -2 },
            consequencia: 'Você escolhe o risco que já conhece em vez do risco novo que ninguém mediu ainda.',
          },
        ],
        'carpinteiro-da-ribeira': [
          {
            slug: 'preparar-naus-longo-curso',
            texto: 'Preparar naus especialmente para viagens mais longas, de alto-mar',
            deltas: { 'conhecimento-nautico': 6, 'tesouro-coroa': -4 },
            consequencia: 'Uma linha mais a oeste significa viagens mais longas antes de qualquer terra à vista — as naus precisam carregar mais água e mantimento do que antes.',
          },
          {
            slug: 'manter-producao-atual',
            texto: 'Manter o ritmo de produção atual, sem adaptações',
            deltas: { 'tesouro-coroa': 2 },
            consequencia: 'A Ribeira das Naus segue no ritmo de sempre — e as tripulações que partirem depois vão sentir a diferença no meio do oceano.',
          },
        ],
      },
    },

    {
      slug: 'a-rota-do-cabo',
      titulo: 'A rota do Cabo',
      amplitude: 24,
      cena:
        '1488. Uma expedição contorna pela primeira vez a ponta sul da África, provando que existe ' +
        'caminho marítimo até o oceano Índico. Dez anos depois, uma frota completa a travessia e ' +
        'chega a Calicute, na costa oeste da Índia, direto à fonte da pimenta que a Europa hoje compra ' +
        'depois de passar por dezenas de intermediários entre a Ásia e o Mediterrâneo.',
      efeitosFixos: { 'custo-humano': 8 },
      contexto:
        'A rota até Calicute e volta leva mais de um ano e meio; da tripulação que parte, uma fração ' +
        'relevante não sobrevive à viagem — não a combates, mas a escorbuto, tempestades e naufrágio, ' +
        'o custo invisível que nenhum mapa mostra.',
      imagemSugerida: {
        descricao: 'Uma frota de naus vista de longe contornando um cabo rochoso e batido por ondas fortes, céu carregado.',
        arquivo: '/imagens/casa-da-india/a-rota-do-cabo.jpg',
        onde: 'Ilustração gerada — cena genérica de travessia marítima, não reprodução de pintura específica.',
      },
      investigacao: {
        olhar: 'Um registro de bordo com a contagem de dias sem avistar terra, marcando cada semana com um traço.',
        fontes: [
          {
            slug: 'dias-contorna-cabo',
            tipo: 'ler',
            titulo: 'O Cabo das Tormentas',
            papeis: ['fidalgo-da-armada', 'mestre-de-cartas-e-rumos'],
            trecho:
              'Em 1488, uma expedição contorna pela primeira vez a ponta sul do continente africano, ' +
              'provando que o oceano Atlântico se conecta ao Índico — o rei renomeia o ponto de "Cabo ' +
              'das Tormentas" para "Cabo da Boa Esperança".',
            autor: 'Historiografia consolidada sobre a expansão marítima portuguesa — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'chegada-calicute',
            tipo: 'ler',
            titulo: 'Direto à fonte da pimenta',
            papeis: ['coroa-portuguesa', 'mercador-financiador'],
            trecho:
              'Em 1498, uma frota portuguesa chega a Calicute, na costa do Malabar — o primeiro contato ' +
              'direto por mar entre a Europa e a fonte da pimenta indiana, até então comprada através ' +
              'de uma longa cadeia de intermediários árabes, egípcios e venezianos.',
            autor: 'Historiografia consolidada sobre a chegada portuguesa à Índia — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-riqueza-facil',
            tipo: 'ouvir',
            titulo: '"Lá é só carregar as naus de especiaria"',
            papeis: ['marinheiro-da-carreira', 'carpinteiro-da-ribeira'],
            trecho: 'Corre entre as tripulações que, uma vez em Calicute, basta encher o porão de pimenta e voltar rico.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho:
              'Não era simples assim: a frota chega a um porto onde mercadores árabes já estabelecidos ' +
              'comerciam pimenta havia gerações, e negociar em Calicute exige meses de barganha e ' +
              'desconfiança dos dois lados antes de qualquer carregamento fechado.',
          },
        ],
      },
      opcoesPorPapel: {
        'coroa-portuguesa': [
          {
            slug: 'negociar-calicute',
            texto: 'Instruir a frota a negociar comercialmente com o governante de Calicute',
            deltas: { 'lucro-do-comercio': 10 },
            consequencia: 'A negociação comercial direta com Calicute, sem intermediários, é exatamente o que duas gerações de investimento em rotas vinham buscando.',
          },
          {
            slug: 'investir-nova-armada',
            texto: 'Já financiar uma segunda armada, maior, antes mesmo da primeira voltar',
            deltas: { 'tesouro-coroa': -14, 'lucro-do-comercio': 4 },
            consequencia: 'Apostar numa segunda frota antes de confirmar o sucesso da primeira é arriscar o cofre duas vezes seguidas na mesma aposta.',
          },
        ],
        'fidalgo-da-armada': [
          {
            slug: 'liderar-negociacao',
            texto: 'Liderar pessoalmente a negociação em Calicute',
            deltas: { 'conhecimento-nautico': 4, 'custo-humano': 2 },
            consequencia: 'Negociar num porto estrangeiro, sem tropas para impor nada, exige uma paciência que a educação de um fidalgo de armas raramente ensina.',
          },
          {
            slug: 'proteger-frota',
            texto: 'Concentrar-se em proteger as naus e a rota de volta',
            deltas: { 'custo-humano': -4 },
            consequencia: 'A carga negociada só vale alguma coisa se a frota conseguir voltar inteira até Lisboa.',
          },
        ],
        'mercador-financiador': [
          {
            slug: 'fechar-contrato-pimenta',
            texto: 'Fechar contrato de fornecimento direto de pimenta com mercadores de Calicute',
            deltas: { 'lucro-do-comercio': 8 },
            consequencia: 'Um contrato direto corta fora décadas de intermediários — o mesmo grão de pimenta que custava uma fortuna em Veneza agora tem um preço de origem.',
          },
          {
            slug: 'financiar-negociacao-cautelosa',
            texto: 'Financiar apenas uma negociação inicial pequena, para testar o terreno',
            deltas: { 'lucro-do-comercio': 3, 'tesouro-coroa': 2 },
            consequencia: 'Você arrisca pouco — e ganha pouco, enquanto outros financiadores mais ousados fecham contratos maiores na mesma viagem.',
          },
        ],
        'mestre-de-cartas-e-rumos': [
          {
            slug: 'registrar-rota-india',
            texto: 'Registrar em detalhe toda a rota até Calicute, ventos e correntes incluídos',
            deltas: { 'conhecimento-nautico': 12 },
            consequencia: 'Esta carta vale, sozinha, mais do que toda a viagem custou — é ela que torna a próxima viagem mais rápida e menos incerta que esta.',
          },
          {
            slug: 'vender-conhecimento',
            texto: 'Considerar vender parte desse conhecimento a outra coroa europeia',
            deltas: { 'conhecimento-nautico': -6, 'rivalidade-castela': -8 },
            consequencia: 'O dinheiro de um segredo vendido pesa na mão — e pesa ainda mais se alguém em Lisboa descobrir de onde veio.',
            evento: {
              texto: 'Um funcionário da Coroa pergunta, sem rodeios, se você teve contato com agentes castelhanos nos últimos meses.',
              reacoes: [
                { slug: 'negar-tudo', texto: 'Negar qualquer contato', resultado: 'Ele anota sua resposta e sai — sem acreditar totalmente, mas sem prova nenhuma para agir.' },
                { slug: 'confessar-parcial', texto: 'Admitir um contato comercial menor, sem detalhes', resultado: 'A meia-verdade compra um pouco de confiança — e deixa a suspeita completa em aberto para a próxima vez.' },
              ],
            },
          },
        ],
        'marinheiro-da-carreira': [
          {
            slug: 'seguir-ate-india',
            texto: 'Seguir viagem até a Índia, mesmo com a tripulação já desfalcada',
            deltas: { 'custo-humano': 6, 'conhecimento-nautico': 4 },
            consequencia: 'Chegar é uma coisa; chegar com metade da tripulação de partida perdida no caminho é o preço que os livros raramente contam.',
          },
          {
            slug: 'pedir-retorno-antecipado',
            texto: 'Defender que a frota deveria voltar antes de completar a rota inteira',
            deltas: { 'custo-humano': -4, 'lucro-do-comercio': -4 },
            consequencia: 'Voltar mais cedo salva vidas da tripulação mais exausta — e devolve a Lisboa uma frota sem a pimenta que justificaria toda a viagem.',
          },
        ],
        'carpinteiro-da-ribeira': [
          {
            slug: 'reforcar-cascos',
            texto: 'Reforçar os cascos das naus para uma viagem mais longa que qualquer outra até agora',
            deltas: { 'custo-humano': -4, 'tesouro-coroa': -4 },
            consequencia: 'O reforço extra custa tempo e madeira — e é exatamente o que separa uma nau que aguenta dezoito meses de mar de uma que não aguenta.',
          },
          {
            slug: 'priorizar-velocidade',
            texto: 'Priorizar naus mais rápidas, mesmo com casco mais leve',
            deltas: { 'lucro-do-comercio': 2, 'custo-humano': 4 },
            consequencia: 'Uma nau mais rápida chega antes e volta antes — se aguentar o caminho todo sem reforço extra.',
          },
        ],
      },
    },

    {
      slug: 'casa-da-india-lisboa',
      titulo: 'A casa que pesa a pimenta',
      amplitude: 20,
      cena:
        'Por volta de 1500. A Coroa organiza em Lisboa a Casa da Índia, sucessora da antiga Casa da ' +
        'Guiné e Mina — o órgão que vai pesar, taxar e distribuir toda especiaria, toda peça de ' +
        'marfim, todo produto que chegar pela nova rota. Em poucos anos, o preço da pimenta despenca ' +
        'nos mercados de Veneza, que por séculos dominou o comércio pelo Mediterrâneo.',
      contexto:
        'A queda no preço da pimenta em Veneza, historicamente registrada nas décadas seguintes, é o ' +
        'espelho comercial direto do que a Casa da Índia organiza em Lisboa: cada especiaria que chega ' +
        'por mar até Portugal é uma que deixa de precisar atravessar o Mediterrâneo sob controle ' +
        'veneziano e otomano.',
      imagemSugerida: {
        descricao: 'O interior de um grande armazém em Lisboa, sacos de especiarias empilhados sendo pesados numa balança grande, um funcionário real anotando o peso.',
        arquivo: '/imagens/casa-da-india/casa-da-india-lisboa.jpg',
        onde: 'Ilustração gerada — cena genérica representando a Casa da Índia, não reprodução de gravura específica.',
      },
      investigacao: {
        olhar: 'Um livro de registro com colunas de peso e valor, cada linha referente a uma nau diferente que atracou naquele mês.',
        fontes: [
          {
            slug: 'casa-da-india-fundacao',
            tipo: 'ler',
            titulo: 'A Casa da Índia',
            papeis: ['coroa-portuguesa', 'mercador-financiador'],
            trecho:
              'Organizada em Lisboa por volta de 1500, sucedendo a antiga Casa da Guiné e Mina, a Casa ' +
              'da Índia centraliza o controle real sobre todo o comércio ultramarino português — da ' +
              'pesagem da especiaria à cobrança de impostos sobre cada carga.',
            autor: 'Historiografia consolidada sobre as instituições do comércio ultramarino português — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'declinio-veneza',
            tipo: 'ler',
            titulo: 'O preço da pimenta cai em Veneza',
            papeis: ['mercador-financiador', 'fidalgo-da-armada'],
            trecho:
              'Nas décadas seguintes à abertura da rota do Cabo, o preço da pimenta nos mercados de ' +
              'Veneza — por séculos o grande entreposto europeu da especiaria vinda da Ásia — sofre ' +
              'quedas relevantes, refletindo a concorrência da nova rota atlântica direta.',
            autor: 'Historiografia consolidada sobre o impacto comercial da rota do Cabo — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-fortunas-instantaneas',
            tipo: 'ouvir',
            titulo: '"Todo mundo em Lisboa vai ficar rico"',
            papeis: ['carpinteiro-da-ribeira', 'marinheiro-da-carreira'],
            trecho: 'Nas tabernas do porto de Lisboa, diz-se que a chegada da pimenta vai deixar rico até quem só carrega saco no cais.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'A riqueza da Casa da Índia concentra-se, sobretudo, na Coroa e nos grandes financiadores — o cais segue pagando salário de carregador, não parte do lucro da pimenta.',
          },
        ],
      },
      opcoesPorPapel: {
        'coroa-portuguesa': [
          {
            slug: 'monopolio-fechado',
            texto: 'Manter a Casa da Índia como monopólio real fechado, sem sócios privados',
            deltas: { 'tesouro-coroa': 16, 'lucro-do-comercio': 4 },
            consequencia: 'Cada saco de pimenta que entra em Lisboa passa pela balança da Coroa antes de qualquer outra mão — o controle é total, e o rendimento também.',
          },
          {
            slug: 'abrir-financiadores-privados',
            texto: 'Abrir parte do comércio a financiadores privados, mediante taxa',
            deltas: { 'tesouro-coroa': 8, 'lucro-do-comercio': 10 },
            consequencia: 'O volume total de comércio cresce mais rápido com capital privado ajudando a bancar novas viagens — e uma fatia do lucro que seria só da Coroa passa a ser dividida.',
          },
        ],
        'fidalgo-da-armada': [
          {
            slug: 'pedir-cargo-casa-india',
            texto: 'Buscar um cargo de administração dentro da própria Casa da Índia',
            deltas: { 'tesouro-coroa': -2, 'lucro-do-comercio': 2 },
            consequencia: 'Um cargo administrativo rende menos glória do que comandar uma frota — e uma renda bem mais estável e previsível.',
          },
          {
            slug: 'buscar-nova-expedicao',
            texto: 'Recusar cargo de escritório e pedir para liderar a próxima expedição',
            deltas: { 'conhecimento-nautico': 4, 'custo-humano': 2 },
            consequencia: 'Você aposta, de novo, que o mar rende mais prestígio do que qualquer balança em Lisboa jamais vai render.',
          },
        ],
        'mercador-financiador': [
          {
            slug: 'reinvestir-lucro',
            texto: 'Reinvestir o lucro obtido em novas viagens e contratos',
            deltas: { 'lucro-do-comercio': 8, 'tesouro-coroa': -2 },
            consequencia: 'Cada lucro reinvestido financia a próxima frota — um ciclo que, enquanto durar, cresce sozinho.',
          },
          {
            slug: 'retirar-lucro',
            texto: 'Retirar o lucro já obtido e reduzir exposição a novas viagens',
            deltas: { 'lucro-do-comercio': -4 },
            consequencia: 'Você garante o que já ganhou — e sai de um jogo que, para quem ficar, ainda vai crescer bastante nos próximos anos.',
          },
        ],
        'mestre-de-cartas-e-rumos': [
          {
            slug: 'padronizar-cartas-casa-india',
            texto: 'Padronizar as cartas náuticas sob controle direto da Casa da Índia',
            deltas: { 'conhecimento-nautico': 8, 'rivalidade-castela': -4 },
            consequencia: 'Centralizar o conhecimento cartográfico na Casa da Índia protege o segredo da rota — e o transforma em segredo de Estado, guardado sob chave.',
          },
          {
            slug: 'formar-novos-pilotos',
            texto: 'Dedicar-se a formar novos pilotos, em vez de guardar o conhecimento só para si',
            deltas: { 'conhecimento-nautico': 6 },
            consequencia: 'Menos exclusivo, mais duradouro: o conhecimento que você ensina não desaparece se uma única nau naufragar com você a bordo.',
          },
        ],
        'marinheiro-da-carreira': [
          {
            slug: 'buscar-nova-viagem',
            texto: 'Alistar-se para uma nova viagem, agora com rota mais conhecida',
            deltas: { 'custo-humano': 4, 'lucro-do-comercio': 2 },
            consequencia: 'A rota já é mais conhecida do que na primeira vez — o que não significa mais segura, só menos incerta.',
          },
          {
            slug: 'buscar-trabalho-em-terra',
            texto: 'Buscar trabalho em terra, na própria Casa da Índia, em vez de embarcar de novo',
            deltas: { 'custo-humano': -4 },
            consequencia: 'Você troca o risco do mar pelo trabalho braçal dos armazéns — carregando a mesma pimenta que quase te custou a vida para trazer.',
          },
        ],
        'carpinteiro-da-ribeira': [
          {
            slug: 'aumentar-producao',
            texto: 'Aumentar o ritmo de produção de naus para sustentar mais viagens',
            deltas: { 'tesouro-coroa': -6, 'lucro-do-comercio': 6 },
            consequencia: 'Mais naus saindo da Ribeira significa mais frotas por ano — cada uma ainda sujeita ao mesmo mar que não ficou mais seguro.',
          },
          {
            slug: 'manter-ritmo-atual',
            texto: 'Manter o ritmo atual de produção, sem expandir',
            deltas: { 'tesouro-coroa': 2 },
            consequencia: 'Menos naus novas por ano — e menos risco de a qualidade cair por pressa de entregar mais rápido.',
          },
        ],
      },
    },

    {
      slug: 'o-preco-da-rota',
      titulo: 'O preço da rota',
      amplitude: 26,
      cena:
        'Anos depois de aberta, a rota do Cabo até a Índia mostra seu custo real: uma fração ' +
        'significativa das naus enviadas jamais retorna — perdidas em tempestades, encalhadas, ou ' +
        'voltando com tripulações dizimadas pelo escorbuto, doença que ninguém ainda sabe explicar ' +
        'direito. A Coroa e todos que dependem da rota precisam decidir até onde vale continuar ' +
        'apostando nela.',
      efeitosFixos: { 'custo-humano': 10 },
      contexto:
        'A "Carreira da Índia", nome que os historiadores dão a essa rota regular entre Lisboa e a ' +
        'Índia, vai ser, ao longo dos séculos seguintes, uma das travessias marítimas mais mortais já ' +
        'registradas — não por combate, mas por naufrágio e doença; nenhum remédio eficaz contra o ' +
        'escorbuto será conhecido por muito tempo ainda.',
      imagemSugerida: {
        descricao: 'O casco de uma nau naufragada, meio submerso, numa praia deserta ao amanhecer, sem figuras humanas visíveis.',
        arquivo: '/imagens/casa-da-india/o-preco-da-rota.jpg',
        onde: 'Ilustração gerada — cena genérica representando naufrágio, não reprodução de evento específico.',
      },
      investigacao: {
        olhar: 'Uma lista de naus partidas num certo ano, com uma coluna simples ao lado: "voltou" ou "não voltou".',
        fontes: [
          {
            slug: 'carreira-da-india-perdas',
            tipo: 'ler',
            titulo: 'A Carreira da Índia',
            papeis: ['coroa-portuguesa', 'fidalgo-da-armada'],
            trecho:
              'Historiadores estimam que, ao longo dos séculos em que a Carreira da Índia funcionou, ' +
              'uma fração relevante das naus enviadas jamais completou a viagem de ida e volta — ' +
              'perdida por naufrágio, tempestade ou abandono no caminho.',
            autor: 'Historiografia consolidada sobre a Carreira da Índia — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'escorbuto-carreira',
            tipo: 'ler',
            titulo: 'A doença que matava mais que qualquer tempestade',
            papeis: ['marinheiro-da-carreira', 'carpinteiro-da-ribeira'],
            trecho:
              'Em viagens de mais de seis meses sem terra à vista, o escorbuto mata mais tripulantes do ' +
              'que qualquer naufrágio ou tempestade — e por muito tempo, ninguém entende exatamente ' +
              'por quê.',
            autor: 'Historiografia consolidada sobre a mortalidade na navegação de longo curso do período — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-cura-milagrosa',
            tipo: 'ouvir',
            titulo: '"Um piloto disse que descobriu a cura"',
            papeis: ['mestre-de-cartas-e-rumos', 'mercador-financiador'],
            trecho: 'Corre a notícia de que um piloto teria descoberto, por conta própria, uma cura garantida contra o mal que mata tantos marinheiros em alto-mar.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Não havia cura conhecida e confiável contra o escorbuto nesta época — o vínculo com a falta de certos alimentos frescos só vai ser estabelecido de forma sistemática muito tempo depois.',
          },
        ],
      },
      opcoesPorPapel: {
        'coroa-portuguesa': [
          {
            slug: 'manter-ritmo-viagens',
            texto: 'Manter o ritmo atual de frotas anuais para a Índia, aceitando as perdas',
            deltas: { 'lucro-do-comercio': 8, 'custo-humano': 4 },
            consequencia: 'O fluxo de especiaria não para — e nem para a lista de naus que, todo ano, entra na coluna de "não voltou".',
          },
          {
            slug: 'reduzir-frequencia',
            texto: 'Reduzir a frequência de frotas, priorizando viagens mais bem preparadas',
            deltas: { 'lucro-do-comercio': -6, 'custo-humano': -8 },
            consequencia: 'Menos ouro e pimenta chegam por ano — e menos naus e tripulações inteiras somem no meio do caminho.',
          },
        ],
        'fidalgo-da-armada': [
          {
            slug: 'insistir-comando',
            texto: 'Insistir em comandar mais uma frota, mesmo sabendo do risco',
            deltas: { 'custo-humano': 4, 'conhecimento-nautico': 2 },
            consequencia: 'A glória de comandar a Carreira da Índia ainda vale, para você, o risco real de nunca mais voltar.',
          },
          {
            slug: 'aceitar-cargo-em-terra',
            texto: 'Aceitar finalmente um cargo em terra, na Casa da Índia',
            deltas: { 'custo-humano': -2 },
            consequencia: 'Você troca definitivamente o mar por um cargo de mesa — uma escolha que anos antes teria parecido impensável para um fidalgo de armada.',
          },
        ],
        'mercador-financiador': [
          {
            slug: 'diversificar-frotas',
            texto: 'Financiar várias frotas menores em vez de apostar tudo numa só grande',
            deltas: { 'tesouro-coroa': -2, 'lucro-do-comercio': 4 },
            consequencia: 'Se uma nau se perde, o prejuízo não é o investimento inteiro — uma lição de risco que qualquer financiador aprende cedo ou tarde nesta rota.',
          },
          {
            slug: 'seguro-informal',
            texto: 'Combinar com outros investidores uma espécie de fundo comum contra perdas',
            deltas: { 'lucro-do-comercio': 2 },
            consequencia: 'Um acordo informal entre financiadores reparte o risco de uma nau perdida — um embrião do que, séculos depois, vai se tornar seguro marítimo de verdade.',
          },
        ],
        'mestre-de-cartas-e-rumos': [
          {
            slug: 'mapear-pontos-perigo',
            texto: 'Dedicar-se a mapear com precisão os pontos de maior risco da rota',
            deltas: { 'conhecimento-nautico': 10, 'custo-humano': -4 },
            consequencia: 'Saber exatamente onde os naufrágios se repetem não evita todos eles — mas evita alguns, o que nesta rota já é muito.',
          },
          {
            slug: 'desmentir-boato-cura',
            texto: 'Desmentir publicamente o boato da cura milagrosa contra o escorbuto',
            deltas: { 'conhecimento-nautico': 2 },
            consequencia: 'Você evita que tripulações confiem numa falsa esperança — sem ter, no lugar dela, nenhuma resposta real para oferecer.',
          },
        ],
        'marinheiro-da-carreira': [
          {
            slug: 'aceitar-mais-uma-viagem',
            texto: 'Aceitar embarcar em mais uma viagem da Carreira',
            deltas: { 'custo-humano': 6, 'lucro-do-comercio': 2 },
            consequencia: 'Você já viu companheiros não voltarem — e embarca mesmo assim, porque o soldo da Carreira ainda paga mais do que quase qualquer trabalho em terra.',
          },
          {
            slug: 'desistir-do-mar',
            texto: 'Desistir da vida no mar depois desta rota',
            deltas: { 'custo-humano': -6 },
            consequencia: 'Você escolhe viver — e deixa a próxima vaga na tripulação para outro, tão pressionado pela necessidade quanto você já foi.',
          },
        ],
        'carpinteiro-da-ribeira': [
          {
            slug: 'investir-seguranca',
            texto: 'Priorizar reforços de segurança em vez de velocidade nas próximas naus',
            deltas: { 'custo-humano': -6, 'tesouro-coroa': -4 },
            consequencia: 'Uma nau mais lenta e mais segura talvez não vença nenhuma corrida — mas é mais provável que apareça de novo no porto de Lisboa, um ano depois.',
          },
          {
            slug: 'manter-producao-rapida',
            texto: 'Manter a produção rápida para atender à demanda de novas frotas',
            deltas: { 'lucro-do-comercio': 4, 'custo-humano': 4 },
            consequencia: 'Mais naus saem da Ribeira no mesmo tempo de sempre — ao custo de menos tempo de teste e reforço em cada uma delas.',
          },
        ],
      },
    },
  ],

  juri: {
    pergunta: 'As Grandes Navegações foram, sobretudo, uma conquista do conhecimento humano sobre o mar — ou uma aposta financeira de risco altíssimo, paga com vidas que os livros raramente contam?',
    lados: [
      { nome: 'Uma conquista do conhecimento', fontesSlugs: ['bojador-vencido', 'dias-contorna-cabo', 'chegada-calicute'] },
      { nome: 'Uma aposta paga com vidas', fontesSlugs: ['carreira-da-india-perdas', 'escorbuto-carreira'] },
    ],
  },

  desfecho: {
    fixo:
      'A rota do Cabo até a Índia se torna permanente: por mais de um século, é por ela que a pimenta ' +
      'e outras especiarias chegam à Europa, driblando o Mediterrâneo. A Casa da Índia se consolida ' +
      'como o centro do comércio ultramarino português — e o ouro e a pimenta que ela pesa e taxa ' +
      'ajudam a financiar, em Portugal e depois em outras monarquias europeias, o tipo de Estado ' +
      'centralizado que cobra impostos, banca guerras e sustenta uma corte cada vez maior.',
    variavel: ['tesouro-final', 'custo-humano-final', 'quem-lucrou', 'quem-pagou-com-a-vida'],
    textoFecho:
      'Nenhuma decisão nesta simulação depende de um único gênio ou de um único herói: a rota até a ' +
      'Índia é o resultado de décadas de investimento, de conhecimento acumulado por pilotos e ' +
      'cartógrafos sem nome, e de um custo humano real que os livros costumam resumir numa frase e ' +
      'que você acabou de ver, rodada após rodada, na barra de Custo Humano subindo quase sem parar. ' +
      'O ouro e a pimenta que chegam a Lisboa não ficam parados: são exatamente o tipo de riqueza que, ' +
      'na França de Luís XIV, mais de cento e cinquenta anos depois, sustenta um Tesouro Real, uma ' +
      'corte em Versalhes e um rei que se diz absoluto. As Grandes Navegações não são só o capítulo ' +
      'anterior ao Absolutismo — são uma de suas causas diretas.',
    perguntasDebate: [
      'Quem, nesta simulação, corria o risco de morrer numa viagem — e quem só corria o risco de perder dinheiro? Isso muda como avaliamos as decisões de cada papel?',
      'O Custo Humano da rota só subiu, rodada após rodada, em quase toda decisão possível. O que isso diz sobre o preço real das Grandes Navegações, além do que os mapas e as datas mostram?',
      'De que forma o ouro e a pimenta que chegam a Lisboa nesta simulação ajudam a explicar o Tesouro, a corte e o poder que aparecem em "A Coroa e o Cofre"?',
    ],
    perguntasReflexao: [
      { nivel: 'Sua experiência', pergunta: 'No papel que você teve, em algum momento a busca por lucro ou por glória pesou mais do que o risco real de vidas envolvidas? Descreva a rodada em que isso ficou mais claro.' },
      { nivel: 'O conceito', pergunta: 'Agora que você sabe o nome disso — mercantilismo, mesmo antes da palavra existir — como ele explica por que Portugal queria controlar a rota inteira, e não só participar dela?' },
      { nivel: 'Além desta aula', pergunta: 'A Casa da Índia concentrava numa só instituição o controle de todo um comércio. Existe hoje alguma empresa ou instituição que concentra, de forma parecida, o controle de uma rota inteira de produção ou distribuição?' },
    ],
  },
}
