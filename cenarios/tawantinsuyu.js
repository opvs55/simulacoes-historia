// "O Tawantinsuyu" — 1ª série, Aula 9 do livro ("Os donos da terra: território,
// poder e identidade nas civilizações inca, asteca e maia"). Cobre só a
// organização INTERNA do Império Inca, séculos antes de qualquer contato
// europeu — nenhuma menção a espanhóis, conquista ou colonização. Essa parte
// do currículo continua sendo só a Linha do tempo "Um continente que já tinha
// nome" (ver docs/plano-curriculo-1a-2a-serie.md, seção 3.3): aqui o cuidado
// é o mesmo — sem rostos em close-up (risco de estereotipagem), sem cenas de
// combate, fontes reais ou explicitamente marcadas como 'recriada'. Nenhum
// Sapa Inca é nomeado como personagem do jogo — "Conselho Imperial" é um
// cargo, igual "Conselho da Coroa" em coroa-e-cofre.js, pelo mesmo motivo:
// não há retrato de época confiável de nenhum governante inca específico, e
// inventar um seria pura invenção visual sobre uma pessoa real.
export default {
  slug: 'tawantinsuyu',
  versao: 1,
  serie: '1a',
  era: 'colonizacao',
  titulo: 'O Tawantinsuyu',
  pergunta: 'Como manter unido um império de dezenas de povos e línguas diferentes, sem moeda e sem escrita alfabética?',

  introducao:
    'Os Andes centrais, entre os séculos XV e XVI. O Tawantinsuyu — "as quatro regiões unidas", ' +
    'como os próprios incas chamavam seu território — cresce de um pequeno reino em torno de ' +
    'Cusco até se tornar o maior império da América pré-colombiana. Não há moeda, não há ' +
    'mercado como o europeu, não há escrita alfabética. O que existe é uma administração ' +
    'territorial complexa: estradas, depósitos, mensageiros, cordas com nós, e um sistema de ' +
    'trabalho obrigatório que sustenta tudo. Cada rodada é uma geração de decisões — o império ' +
    'nunca para de crescer, e cada decisão sobre como integrar um povo novo custa alguma coisa.',

  indicadores: [
    {
      slug: 'producao',
      nome: 'Produção e armazenamento',
      inicial: 55,
      faixas: ['escassa', 'estável', 'fartura nos depósitos'],
    },
    {
      slug: 'centralizacao',
      nome: 'Centralização de Cusco',
      inicial: 30,
      faixas: ['frouxa', 'em construção', 'consolidada'],
    },
    {
      slug: 'autonomia-ayllus',
      nome: 'Autonomia dos ayllus',
      inicial: 65,
      faixas: ['absorvida pelo Estado', 'negociada', 'preservada'],
    },
    {
      slug: 'legitimidade',
      nome: 'Legitimidade religiosa',
      inicial: 60,
      faixas: ['contestada', 'aceita', 'sagrada, inquestionável'],
    },
    {
      slug: 'coesao-etnica',
      nome: 'Coesão entre os povos do império',
      inicial: 45,
      faixas: ['ressentimento aberto', 'convivência tensa', 'aliança de fato'],
    },
  ],

  papeis: [
    {
      slug: 'conselho-imperial',
      nome: 'Conselho Imperial',
      bloco: 'elite',
      peso: 5,
      cota: 2,
      perguntaGuia: 'O que fortalece o Tawantinsuyu daqui a três gerações, não só amanhã?',
      contexto:
        'Você aconselha o Sapa Inca — "filho do Sol", topo de uma pirâmide de nobres, ' +
        'sacerdotes e administradores. Toda decisão de expansão, tributo ou sucessão passa por ' +
        'este círculo antes de virar ordem.',
      icone: '/imagens/tawantinsuyu/papeis/conselho-imperial.jpg',
    },
    {
      slug: 'curaca-local',
      nome: 'Curaca de um povo recém-anexado',
      bloco: 'mediador',
      peso: 2,
      cota: 4,
      perguntaGuia: 'Meu povo obedece a Cusco — mas ainda é meu povo?',
      contexto:
        'Você liderava sua comunidade antes de o Tawantinsuyu chegar até ela. Agora governa em ' +
        'nome do Sapa Inca, e precisa decidir, a cada geração, quanto entrega e quanto guarda.',
      icone: '/imagens/tawantinsuyu/papeis/curaca-local.jpg',
    },
    {
      slug: 'sacerdote-do-sol',
      nome: 'Sacerdote do culto ao Sol',
      bloco: 'elite',
      peso: 3,
      cota: 2,
      perguntaGuia: 'Se todo povo tem seus próprios deuses, o que faz do Sol o deus de todos?',
      contexto:
        'Você serve o culto oficial de Inti, o Sol — a mesma linhagem que legitima o Sapa Inca ' +
        'como seu filho na Terra. Calendário, colheita e guerra passam pelo templo antes de ' +
        'acontecer.',
      icone: '/imagens/tawantinsuyu/papeis/sacerdote-do-sol.jpg',
    },
    {
      slug: 'artesao-textil',
      nome: 'Artesã têxtil',
      bloco: 'popular',
      peso: 1,
      cota: 3,
      perguntaGuia: 'Um manto vale mais que ouro aqui — então por que quem tece tem tão pouco?',
      contexto:
        'Suas mãos produzem os tecidos mais finos do império — os mesmos que o Sapa Inca veste ' +
        'e distribui como prêmio político. Um trabalho de meses pode virar presente de um dia.',
      icone: '/imagens/tawantinsuyu/papeis/artesao-textil.jpg',
    },
    {
      slug: 'campones-do-ayllu',
      nome: 'Camponês do ayllu',
      bloco: 'popular',
      peso: 1,
      cota: 8,
      perguntaGuia: 'Quantas luas do ano pertencem a mim, e quantas pertencem ao Estado?',
      contexto:
        'Sua terra é da sua comunidade, o ayllu — mas parte do seu tempo, pela mita, é do Estado: ' +
        'estrada, terraço, depósito, exército, o que for preciso. Ninguém escapa do rodízio.',
      icone: '/imagens/tawantinsuyu/papeis/campones-do-ayllu.jpg',
    },
    {
      slug: 'chasqui',
      nome: 'Chasqui',
      bloco: 'mediador',
      peso: 1,
      cota: 2,
      perguntaGuia: 'A notícia que eu carrego chega antes de mim — o que faço com o que ouço no caminho?',
      contexto:
        'Você corre um trecho da rede de estradas do império, revezando com outro corredor no ' +
        'próximo posto — um recado sai de Cusco e chega a centenas de quilômetros em poucos ' +
        'dias. Você é rede nervosa do Tawantinsuyu.',
      icone: '/imagens/tawantinsuyu/papeis/chasqui.jpg',
    },
  ],

  rodadas: [
    {
      slug: 'pachacuti-reforma',
      titulo: 'O sistema que vira império',
      amplitude: 22,
      cena:
        'Um novo governante reorganiza o que era um reino pequeno em torno de Cusco. Decide ' +
        'formalizar a mita — o trabalho obrigatório rotativo — e ordena a construção dos ' +
        'primeiros grandes depósitos estatais, os qullqa, para guardar excedente de milho e ' +
        'batata contra anos ruins.',
      efeitosFixos: { centralizacao: 6 },
      contexto:
        'Historiadores identificam nesse período as reformas administrativas que transformam o ' +
        'pequeno reino de Cusco no núcleo de um Estado expansionista — divisão do território em ' +
        'quatro regiões (o próprio nome Tawantinsuyu), formalização do ayllu como unidade fiscal.',
      imagemSugerida: {
        descricao: 'Terraços agrícolas em encosta andina, com um grupo de trabalhadores ao longe (sem rostos em destaque), sob céu claro.',
        arquivo: '/imagens/tawantinsuyu/pachacuti-reforma.jpg',
        onde: 'Ilustração gerada — paisagem genérica de terraceamento andino, não reprodução de nenhum sítio específico.',
      },
      investigacao: {
        olhar: 'Uma fila de trabalhadores se reveza nos terraços mais altos, enquanto outra carrega sacos de grão para um depósito recém-construído.',
        fontes: [
          {
            slug: 'quipu-registro',
            tipo: 'olhar',
            titulo: 'O que um quipu registra',
            papeis: ['conselho-imperial', 'campones-do-ayllu'],
            trecho:
              'Cordas de cores diferentes, com nós amarrados em posições e quantidades precisas, ' +
              'registram quanto cada ayllu produziu, quanto entregou ao Estado e quanto ficou de ' +
              'reserva — sem uma única letra escrita.',
            acervo: 'Fato bem documentado sobre o sistema de contabilidade andino (quipu); não é a transcrição de um quipu específico, que exigiria um especialista para decodificar.',
            natureza: 'documental',
            confiavel: true,
            autor: 'Historiografia consolidada sobre a administração inca — não é citação de um documento específico.',
          },
          {
            slug: 'peso-da-mita',
            tipo: 'ouvir',
            titulo: '"Esse ano o rodízio caiu duas vezes pra nossa família"',
            papeis: ['campones-do-ayllu', 'curaca-local'],
            trecho:
              '"Meu irmão foi pro terraço novo, eu fui pro depósito. A terra da família ficou só ' +
              'com as mulheres e os velhos por duas luas inteiras."',
            natureza: 'recriada',
            confiavel: true,
            acervo: 'Reconstituição plausível do peso da mita sobre uma família de ayllu, com base em como o sistema é descrito pela historiografia — não é depoimento de época.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-imperial': [
          {
            slug: 'padronizar-mita',
            texto: 'Padronizar a mita por todo o território recém-unificado',
            deltas: { centralizacao: 10, 'autonomia-ayllus': -8, producao: 6 },
            consequencia: 'O sistema fica previsível e fácil de administrar — mas cada ayllu perde a palavra final sobre como organiza seu próprio trabalho.',
          },
          {
            slug: 'manter-costumes-locais',
            texto: 'Deixar cada região aplicar a mita do seu próprio jeito, dentro de um mínimo comum',
            deltas: { centralizacao: 3, 'autonomia-ayllus': 5, 'coesao-etnica': 4 },
            consequencia: 'A transição é mais suave — mas Cusco vai levar mais tempo para saber, de verdade, quanto cada região pode entregar.',
          },
        ],
        'curaca-local': [
          {
            slug: 'aceitar-reforma-integral',
            texto: 'Aceitar a reforma sem resistência, para ganhar confiança de Cusco',
            deltas: { centralizacao: 5, 'autonomia-ayllus': -6 },
            consequencia: 'Você entra bem visto pelo novo sistema — seu povo nota que decidiu por eles sem perguntar.',
          },
          {
            slug: 'negociar-prazo',
            texto: 'Pedir mais tempo antes de aplicar a mita por inteiro',
            deltas: { 'autonomia-ayllus': 7, centralizacao: -3 },
            consequencia: 'Você ganha uma folga real para sua gente — e um pequeno atraso na lista de confiança de Cusco.',
          },
        ],
        'sacerdote-do-sol': [
          {
            slug: 'abencoar-depositos',
            texto: 'Consagrar os novos depósitos como parte do culto ao Sol',
            deltas: { legitimidade: 8, centralizacao: 4 },
            consequencia: 'Guardar grão vira também um ato religioso — e questionar o Estado começa a soar como questionar o Sol.',
          },
          {
            slug: 'manter-culto-separado',
            texto: 'Manter o culto ao Sol separado da administração do Estado',
            deltas: { legitimidade: 3, 'coesao-etnica': 3 },
            consequencia: 'A fé continua sendo só fé — mas o Conselho perde uma ferramenta poderosa de convencimento.',
          },
        ],
        'artesao-textil': [
          {
            slug: 'entregar-melhor-producao',
            texto: 'Entregar os tecidos mais finos direto ao Conselho, esperando reconhecimento',
            deltas: { centralizacao: 3, producao: 2 },
            consequencia: 'Seu trabalho chama atenção de quem decide — nem sempre do jeito que você esperava.',
          },
          {
            slug: 'guardar-parte-producao',
            texto: 'Guardar parte da produção para o próprio ayllu, entregando só o mínimo exigido',
            deltas: { 'autonomia-ayllus': 5, centralizacao: -2 },
            consequencia: 'Sua comunidade tem mais para usar e trocar — e você reza para que ninguém em Cusco esteja contando.',
          },
        ],
        'campones-do-ayllu': [
          {
            slug: 'cumprir-rodizio',
            texto: 'Cumprir o rodízio da mita sem questionar',
            deltas: { producao: 5, centralizacao: 4 },
            consequencia: 'O sistema funciona porque famílias como a sua cumprem — o cansaço também é seu, não só do sistema.',
          },
          {
            slug: 'revezar-so-o-essencial',
            texto: 'Mandar só quem a família puder dispensar, mesmo arriscando o mínimo exigido',
            deltas: { 'autonomia-ayllus': 6, producao: -4 },
            consequencia: 'A terra da família não fica sem ninguém — mas o próximo recenseamento pode notar a diferença.',
          },
        ],
        'chasqui': [
          {
            slug: 'levar-mensagem-fielmente',
            texto: 'Levar cada mensagem exatamente como recebida, sem comentário',
            deltas: { centralizacao: 5 },
            consequencia: 'Cusco confia mais na rede de estradas — a notícia chega limpa, sem ninguém pelo caminho decidindo o que ela significa.',
          },
          {
            slug: 'avisar-comunidades-antes',
            texto: 'Avisar as comunidades no caminho um pouco antes da ordem oficial chegar',
            deltas: { 'coesao-etnica': 5, centralizacao: -3 },
            consequencia: 'As comunidades têm tempo de se preparar — e você carrega, sem ordem de ninguém, um pouco de poder que não é seu.',
          },
        ],
      },
      imagemSugerida: {
        descricao: 'Depósitos de pedra (qullqa) em fileira numa encosta andina, com sacos de grãos visíveis, sem pessoas em destaque.',
        arquivo: '/imagens/tawantinsuyu/pachacuti-reforma.jpg',
        onde: 'Ilustração gerada — cena genérica de armazenamento estatal andino, não reprodução de nenhum sítio específico.',
      },
    },
    {
      slug: 'expansao-militar',
      titulo: 'Um povo novo sob o Sol',
      amplitude: 24,
      cena:
        'O exército imperial anexa um território vizinho, com um povo que fala outra língua e ' +
        'venera outros deuses. A vitória militar foi rápida — o que vem depois é a parte mais ' +
        'difícil: transformar um povo derrotado em parte do Tawantinsuyu, não só um território ' +
        'ocupado.',
      efeitosFixos: { centralizacao: 5 },
      contexto:
        'Uma das ferramentas documentadas do Estado inca para integrar (e controlar) povos ' +
        'recém-anexados era o reassentamento planejado de populações inteiras — famílias inca ' +
        'leais eram enviadas para viver entre o povo novo, e famílias do povo novo eram enviadas ' +
        'para viver entre incas leais, em ambas as direções.',
      imagemSugerida: {
        descricao: 'Uma estrada de pedra atravessando um vale andino, ligando duas regiões, sem figuras humanas em primeiro plano.',
        arquivo: '/imagens/tawantinsuyu/expansao-militar.jpg',
        onde: 'Ilustração gerada — trecho genérico da rede de estradas incas, não reprodução de nenhum sítio específico.',
      },
      investigacao: {
        olhar: 'No mercado de trocas da nova província, panelas de dois estilos diferentes já aparecem lado a lado — algumas trazidas por quem chegou, outras feitas por quem sempre esteve ali.',
        fontes: [
          {
            slug: 'politica-de-reassentamento',
            tipo: 'ler',
            titulo: 'Famílias movidas para misturar lealdades',
            papeis: ['conselho-imperial', 'curaca-local'],
            trecho:
              'Famílias de regiões já leais ao Tawantinsuyu são enviadas para viver na província ' +
              'recém-anexada — e famílias da província nova são enviadas para viver entre incas ' +
              'de longa data. Nenhuma comunidade fica só entre os seus.',
            acervo: 'Fato documentado sobre a política inca de reassentamento planejado de populações (mitmaqkuna).',
            natureza: 'documental',
            confiavel: true,
            autor: 'Historiografia consolidada sobre a administração territorial inca — não é citação de um documento específico.',
            destrancaOpcao: 'apoiar-reassentamento',
          },
          {
            slug: 'resistencia-discreta',
            tipo: 'ouvir',
            titulo: '"Aqui a gente ainda reza pro nosso jeito, só não em público"',
            papeis: ['curaca-local'],
            trecho: '"O Sol pode ser o deus de Cusco. O nosso continua sendo nosso — só não falamos disso perto de quem manda."',
            natureza: 'recriada',
            confiavel: true,
            acervo: 'Reconstituição plausível da persistência de cultos locais sob domínio inca, historiograficamente bem estabelecida — não é depoimento de época.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-imperial': [
          {
            slug: 'reassentamento-imediato',
            texto: 'Ordenar o reassentamento de famílias já, para misturar lealdades rápido',
            deltas: { centralizacao: 9, 'coesao-etnica': -5, 'autonomia-ayllus': -4 },
            consequencia: 'A província fica sob controle mais rápido — e o deslocamento forçado de famílias inteiras deixa uma marca que não se apaga em uma geração.',
          },
          {
            slug: 'integracao-gradual',
            texto: 'Integrar aos poucos, começando por trocas comerciais e cargos administrativos locais',
            deltas: { 'coesao-etnica': 6, centralizacao: 2 },
            consequencia: 'A confiança cresce devagar, mas cresce de verdade — o custo é Cusco não ter certeza total de lealdade por enquanto.',
          },
        ],
        'curaca-local': [
          {
            slug: 'apoiar-reassentamento',
            texto: 'Apoiar publicamente o reassentamento, mostrando lealdade a Cusco',
            deltas: { centralizacao: 6, 'coesao-etnica': -3 },
            consequencia: 'Cusco nota sua lealdade — seu próprio povo nota que famílias estranhas agora vivem na terra deles.',
          },
          {
            slug: 'proteger-familias-locais',
            texto: 'Negociar para que menos famílias do seu povo sejam realocadas para fora',
            deltas: { 'coesao-etnica': 5, centralizacao: -3 },
            consequencia: 'Menos famílias suas são deslocadas — Cusco registra que você pediu exceção, não é gratuito.',
          },
        ],
        'sacerdote-do-sol': [
          {
            slug: 'impor-culto-oficial',
            texto: 'Exigir que o povo novo participe das cerimônias oficiais ao Sol',
            deltas: { legitimidade: 7, 'coesao-etnica': -4 },
            consequencia: 'O culto oficial ganha presença em mais um território — por baixo, os cultos antigos continuam vivos, só mais discretos.',
          },
          {
            slug: 'somar-cultos-locais',
            texto: 'Incorporar elementos do culto local ao calendário oficial, sem apagá-lo',
            deltas: { 'coesao-etnica': 6, legitimidade: 2 },
            consequencia: 'A província sente que seu deus não foi apagado — o culto ao Sol perde um pouco da força de ser "o único".',
          },
        ],
        'artesao-textil': [
          {
            slug: 'aprender-tecnica-local',
            texto: 'Aprender as técnicas têxteis do povo recém-anexado',
            deltas: { 'coesao-etnica': 4, producao: 3 },
            consequencia: 'Seu trabalho fica mais rico — e carrega, tecido, uma prova de que os dois povos já trocam algo além de ordem e tributo.',
          },
          {
            slug: 'manter-padrao-imperial',
            texto: 'Manter o padrão têxtil imperial, sem misturar estilos',
            deltas: { legitimidade: 3, 'coesao-etnica': -2 },
            consequencia: 'O padrão imperial continua reconhecível em qualquer província — e um pouco mais distante do que já existia ali antes.',
          },
        ],
        'campones-do-ayllu': [
          {
            slug: 'receber-familia-realocada',
            texto: 'Receber bem a família realocada que chegou no seu ayllu',
            deltas: { 'coesao-etnica': 5, 'autonomia-ayllus': -2 },
            consequencia: 'A convivência começa mais fácil — e sua comunidade nunca mais vai ser só quem sempre foi.',
          },
          {
            slug: 'manter-distancia',
            texto: 'Manter distância da família realocada, sem hostilidade aberta',
            deltas: { 'autonomia-ayllus': 3, 'coesao-etnica': -3 },
            consequencia: 'Seu ayllu segue quase como sempre foi — a integração que Cusco queria vai levar mais tempo para acontecer ali.',
          },
        ],
        'chasqui': [
          {
            slug: 'aprender-rota-nova',
            texto: 'Aprender a nova rota até a província anexada, integrando-a à rede',
            deltas: { centralizacao: 5, producao: 2 },
            consequencia: 'A província entra de vez na rede de comunicação do império — e nunca mais fica isolada de Cusco.',
          },
          {
            slug: 'levar-noticias-dos-dois-lados',
            texto: 'Levar também as notícias que o povo novo quer que Cusco ouça, não só as oficiais',
            deltas: { 'coesao-etnica': 5, centralizacao: -2 },
            consequencia: 'Cusco passa a ouvir uma versão mais completa da província nova — e você carrega mais do que mensagens oficiais permitem.',
          },
        ],
      },
    },
    {
      slug: 'infraestrutura-e-mita',
      titulo: 'A estrada que todos pagam',
      amplitude: 20,
      cena:
        'Um novo trecho da rede de estradas precisa ser construído para ligar uma província ' +
        'distante a Cusco — trabalho de meses, feito inteiramente pela mita. A obra vai ' +
        'facilitar comércio, administração e movimento de tropas por gerações. O custo cai sobre ' +
        'quem constrói, não sobre quem decide construir.',
      contexto:
        'A rede de estradas do Tawantinsuyu chegou a somar dezenas de milhares de quilômetros, ' +
        'cruzando de costa a serra a floresta — sustentada inteiramente por trabalho obrigatório ' +
        'rotativo, sem uso de rodas ou animais de tração como os europeus usariam depois.',
      imagemSugerida: {
        descricao: 'Trabalhadores de longe, sem rostos em destaque, movendo pedras para construir um trecho de estrada de montanha.',
        arquivo: '/imagens/tawantinsuyu/infraestrutura-e-mita.jpg',
        onde: 'Ilustração gerada — cena genérica de construção de estrada andina, não reprodução de nenhum sítio específico.',
      },
      investigacao: {
        olhar: 'A fila de trabalhadores se estende por quase um quilômetro, cada grupo revezando em turnos organizados por um contador com seu quipu.',
        fontes: [
          {
            slug: 'tambos-postos',
            tipo: 'ler',
            titulo: 'Os postos que sustentam a estrada',
            papeis: ['chasqui', 'conselho-imperial'],
            trecho:
              'A cada poucos quilômetros, um tambo — posto de descanso e armazenamento — guarda ' +
              'comida, roupa e abrigo para quem viaja a serviço do Estado, de chasquis a tropas ' +
              'em marcha.',
            acervo: 'Fato bem documentado sobre a infraestrutura de apoio à rede de estradas incas.',
            natureza: 'documental',
            confiavel: true,
            autor: 'Historiografia consolidada sobre a administração territorial inca — não é citação de um documento específico.',
          },
          {
            slug: 'exaustao-do-rodizio',
            tipo: 'ouvir',
            titulo: '"Voltei da estrada só para ser chamado pro terraço"',
            papeis: ['campones-do-ayllu', 'artesao-textil'],
            trecho: '"Não é que eu não sirva ao Sapa Inca. É que meu corpo só é um."',
            natureza: 'recriada',
            confiavel: true,
            acervo: 'Reconstituição plausível do peso cumulativo da mita sobre trabalhadores individuais — não é depoimento de época.',
            destrancaOpcao: 'pedir-alivio',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-imperial': [
          {
            slug: 'acelerar-obra',
            texto: 'Acelerar o cronograma da obra, convocando mais famílias por vez',
            deltas: { producao: 8, centralizacao: 5, 'autonomia-ayllus': -6 },
            consequencia: 'A estrada fica pronta antes — e mais famílias sentem o peso da mita ao mesmo tempo, na mesma estação de plantio.',
          },
          {
            slug: 'espacar-convocacoes',
            texto: 'Espaçar as convocações, mesmo que a obra demore mais',
            deltas: { 'autonomia-ayllus': 5, producao: -3 },
            consequencia: 'As famílias sentem menos o peso de uma vez só — Cusco espera mais tempo por uma estrada que já precisava.',
          },
        ],
        'curaca-local': [
          {
            slug: 'escalar-por-familia',
            texto: 'Organizar a escala de convocação de forma que nenhuma família saia duas vezes seguidas',
            deltas: { 'coesao-etnica': 5, 'autonomia-ayllus': 3 },
            consequencia: 'Sua comunidade sente que a divisão é justa — mesmo sendo você quem decide, não Cusco.',
          },
          {
            slug: 'seguir-lista-de-cusco',
            texto: 'Seguir exatamente a lista de convocação enviada por Cusco',
            deltas: { centralizacao: 5, 'coesao-etnica': -3 },
            consequencia: 'Ninguém pode dizer que você desobedeceu — algumas famílias notam que a lista não considerou quem já tinha ido duas vezes.',
          },
        ],
        'sacerdote-do-sol': [
          {
            slug: 'consagrar-obra',
            texto: 'Consagrar o início da obra como oferenda ao Sol',
            deltas: { legitimidade: 6, producao: 2 },
            consequencia: 'O trabalho pesado ganha um sentido além da ordem administrativa — para alguns, isso ajuda a suportar.',
          },
          {
            slug: 'pedir-descanso-ritual',
            texto: 'Exigir dias de descanso ritual durante a obra, mesmo atrasando o cronograma',
            deltas: { 'autonomia-ayllus': 4, producao: -2 },
            consequencia: 'Os trabalhadores têm pausas garantidas por tradição religiosa — o Conselho aceita, mas anota o atraso.',
          },
        ],
        'artesao-textil': [
          {
            slug: 'tecer-para-obra',
            texto: 'Produzir os panos e cordas usados na construção, além do têxtil de prestígio',
            deltas: { producao: 4, centralizacao: 2 },
            consequencia: 'Seu trabalho vira parte literal da estrada — menos tempo sobra para o tecido fino que te dava reconhecimento.',
          },
          {
            slug: 'manter-producao-de-prestigio',
            texto: 'Manter o foco no têxtil de prestígio, deixando a obra para outras mãos',
            deltas: { legitimidade: 2, 'autonomia-ayllus': 2 },
            consequencia: 'Seu ofício continua intacto — o material da obra sai de mãos com menos escolha do que você.',
          },
        ],
        'campones-do-ayllu': [
          {
            slug: 'pedir-alivio',
            texto: 'Pedir ao curaca para adiar sua convocação, alegando o rodízio recente',
            deltas: { 'autonomia-ayllus': 5, producao: -2 },
            consequencia: 'Sua família ganha um respiro — outra família da comunidade provavelmente vai cobrir o seu lugar.',
          },
          {
            slug: 'ir-sem-reclamar',
            texto: 'Ir para a obra sem pedir nada, mesmo cansado do último rodízio',
            deltas: { producao: 5, centralizacao: 3 },
            consequencia: 'A estrada avança com o seu trabalho — o cansaço acumulado é seu, e de mais ninguém.',
          },
        ],
        'chasqui': [
          {
            slug: 'reportar-atraso-real',
            texto: 'Reportar a Cusco o ritmo real da obra, mesmo sendo mais lento que o pedido',
            deltas: { 'coesao-etnica': 4, centralizacao: -2 },
            consequencia: 'Cusco toma decisões com informação mais honesta — e cobra explicações do Conselho, não só das famílias.',
          },
          {
            slug: 'reportar-ritmo-esperado',
            texto: 'Reportar o ritmo que Cusco espera ouvir, para não trazer má notícia',
            deltas: { centralizacao: 4, 'coesao-etnica': -3 },
            consequencia: 'A mensagem agrada quem a recebe — e a próxima decisão de Cusco vai se basear numa informação incompleta.',
          },
        ],
      },
    },
    {
      slug: 'huayna-capac-auge',
      titulo: 'A festa e a fronteira',
      amplitude: 23,
      cena:
        'No auge do império, uma grande festividade em Cusco reúne representantes de dezenas de ' +
        'povos — cada um trazendo tributo, e cada um observando os outros. É também quando ' +
        'rivalidades antigas entre povos anexados em épocas diferentes aparecem mais claramente: ' +
        'quem senta mais perto do centro, quem fala primeiro, quem carrega o quê.',
      efeitosFixos: { centralizacao: 4 },
      contexto:
        'Sob o governante que os livros descrevem como o do apogeu territorial do império, o ' +
        'Tawantinsuyu chega a abranger uma diversidade de povos e línguas maior do que em ' +
        'qualquer momento anterior — e a tarefa de administrar essa diversidade cresce junto.',
      imagemSugerida: {
        descricao: 'Uma praça cerimonial em Cusco vista de longe, com grupos vestindo têxteis de padrões diferentes, sem rostos em destaque.',
        arquivo: '/imagens/tawantinsuyu/huayna-capac-auge.jpg',
        onde: 'Ilustração gerada — cena genérica de cerimônia andina, não reprodução de nenhum evento específico documentado.',
      },
      investigacao: {
        olhar: 'Dois grupos, de províncias diferentes, evitam se misturar mesmo estando lado a lado na fila de entrega de tributo.',
        fontes: [
          {
            slug: 'hierarquia-da-festa',
            tipo: 'ler',
            titulo: 'Quem senta onde',
            papeis: ['conselho-imperial', 'curaca-local'],
            trecho:
              'A posição de cada delegação na cerimônia — distância do centro, ordem de entrega ' +
              'de tributo — reflete publicamente o tempo de lealdade e o valor que Cusco atribui ' +
              'a cada província.',
            acervo: 'Reconstituição plausível de como cerimônias de tributo funcionavam como linguagem política no império inca, com base na historiografia — não é a transcrição de um protocolo específico.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'rivalidade-entre-provincias',
            tipo: 'ouvir',
            titulo: '"Eles chegaram depois de nós e já falam mais alto"',
            papeis: ['curaca-local', 'campones-do-ayllu'],
            trecho: '"Não é o Sapa Inca que me incomoda. É aquele povo ali, que Cusco parece preferir hoje."',
            natureza: 'recriada',
            confiavel: true,
            acervo: 'Reconstituição plausível de tensão entre povos anexados em diferentes épocas — não é depoimento de época.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-imperial': [
          {
            slug: 'reforcar-hierarquia',
            texto: 'Reforçar publicamente a hierarquia entre as províncias, por tempo de lealdade',
            deltas: { centralizacao: 7, 'coesao-etnica': -5 },
            consequencia: 'A ordem fica clara para todos — e quem está mais longe do centro sente isso, cerimônia após cerimônia.',
          },
          {
            slug: 'tratar-provincias-igualmente',
            texto: 'Tratar todas as províncias com o mesmo protocolo, sem hierarquia visível',
            deltas: { 'coesao-etnica': 6, legitimidade: -2 },
            consequencia: 'As rivalidades esfriam um pouco — e alguns nobres murmuram que o Conselho está apagando distinções que "deveriam" existir.',
          },
        ],
        'curaca-local': [
          {
            slug: 'disputar-posicao',
            texto: 'Disputar abertamente uma posição melhor na cerimônia para seu povo',
            deltas: { 'coesao-etnica': -4, legitimidade: 2 },
            consequencia: 'Seu povo sente que você defende o lugar deles — a província rival não esquece a disputa.',
          },
          {
            slug: 'aceitar-posicao-atual',
            texto: 'Aceitar a posição atual, focando em cumprir bem o tributo entregue',
            deltas: { centralizacao: 3, 'coesao-etnica': 2 },
            consequencia: 'Nenhum atrito novo nasce da cerimônia — a posição de sempre continua sendo a de sempre.',
          },
        ],
        'sacerdote-do-sol': [
          {
            slug: 'unificar-pelo-culto',
            texto: 'Conduzir a cerimônia enfatizando que todos os povos servem ao mesmo Sol',
            deltas: { legitimidade: 6, 'coesao-etnica': 4 },
            consequencia: 'Por um momento, a irmandade religiosa pesa mais que a rivalidade entre províncias — dura o tempo da cerimônia, pelo menos.',
          },
          {
            slug: 'seguir-protocolo-tradicional',
            texto: 'Seguir o protocolo tradicional, sem alterar a ordem estabelecida',
            deltas: { legitimidade: 4, centralizacao: 2 },
            consequencia: 'A cerimônia transcorre como sempre — sem gesto novo para amenizar o que já estava tenso.',
          },
        ],
        'artesao-textil': [
          {
            slug: 'tecer-simbolo-de-uniao',
            texto: 'Tecer um manto cerimonial combinando padrões de diferentes províncias',
            deltas: { 'coesao-etnica': 5, legitimidade: 2 },
            consequencia: 'O gesto é notado e comentado — um símbolo pequeno, numa cerimônia cheia de símbolos maiores.',
          },
          {
            slug: 'manter-padrao-tradicional-cusco',
            texto: 'Manter o padrão têxtil tradicional de Cusco, sem misturas',
            deltas: { legitimidade: 3 },
            consequencia: 'A tradição de Cusco permanece visivelmente central — como sempre foi nessas ocasiões.',
          },
        ],
        'campones-do-ayllu': [
          {
            slug: 'conversar-com-outra-provincia',
            texto: 'Aproveitar a cerimônia para conversar com trabalhadores de outra província',
            deltas: { 'coesao-etnica': 4 },
            consequencia: 'Você troca umas palavras, descobre que o cansaço da mita é parecido em qualquer província — pequeno, mas real.',
          },
          {
            slug: 'manter-se-com-os-seus',
            texto: 'Manter-se só entre gente do seu próprio ayllu durante a cerimônia',
            deltas: { 'autonomia-ayllus': 3 },
            consequencia: 'Nada muda, nada arrisca — a cerimônia passa como mais um dia de tributo entregue.',
          },
        ],
        'chasqui': [
          {
            slug: 'circular-entre-delegacoes',
            texto: 'Circular entre as delegações levando recados informais entre elas',
            deltas: { 'coesao-etnica': 5, centralizacao: -2 },
            consequencia: 'Você vira, por um dia, uma ponte entre províncias que normalmente só falam com Cusco, nunca entre si.',
          },
          {
            slug: 'manter-funcao-oficial',
            texto: 'Manter-se disponível só para mensagens oficiais do Conselho',
            deltas: { centralizacao: 3 },
            consequencia: 'Sua função continua clara e confiável — a chance de aproximar províncias rivais passa sem ser usada.',
          },
        ],
      },
    },
    {
      slug: 'a-sucessao',
      titulo: 'Quem herda o Sol',
      amplitude: 21,
      cena:
        'O Sapa Inca está velho, e não escolheu publicamente qual filho vai sucedê-lo — o sistema ' +
        'de sucessão inca não é só primogenitura: nobres, sacerdotes e a capacidade demonstrada ' +
        'de cada candidato pesam na escolha. O Conselho Imperial e o templo do Sol vão ter que ' +
        'decidir, ou ajudar a decidir, antes que a incerteza vire disputa aberta.',
      contexto:
        'A sucessão imperial inca combinava linhagem com legitimação política e religiosa — não ' +
        'era incomum que múltiplos filhos tivessem apoio de diferentes facções da nobreza, e que ' +
        'a escolha final envolvesse negociação, não só herança automática.',
      imagemSugerida: {
        descricao: 'O interior de um templo de pedra em Cusco, com nichos e um símbolo solar esculpido na parede, sem figuras humanas.',
        arquivo: '/imagens/tawantinsuyu/a-sucessao.jpg',
        onde: 'Ilustração gerada — cena genérica de arquitetura cerimonial inca, não reprodução de nenhum templo específico.',
      },
      investigacao: {
        olhar: 'No pátio do templo, delegações de duas províncias diferentes esperam para serem recebidas — cada uma defendendo, sem dizer abertamente, um candidato diferente.',
        fontes: [
          {
            slug: 'criterios-de-sucessao',
            tipo: 'ler',
            titulo: 'O que pesa na escolha do próximo Sapa Inca',
            papeis: ['conselho-imperial', 'sacerdote-do-sol'],
            trecho:
              'Linhagem materna, apoio de facções nobres, capacidade militar e administrativa já ' +
              'demonstrada, e leitura religiosa de sinais favoráveis — a sucessão combina vários ' +
              'critérios, não um só.',
            acervo: 'Fato bem documentado sobre os critérios múltiplos que pesavam na sucessão imperial inca.',
            natureza: 'documental',
            confiavel: true,
            autor: 'Historiografia consolidada sobre a sucessão no Império Inca — não é citação de um documento específico.',
          },
          {
            slug: 'temor-de-divisao',
            tipo: 'ouvir',
            titulo: '"Se cada província apoiar um filho diferente, o que sobra do Tawantinsuyu?"',
            papeis: ['conselho-imperial', 'curaca-local'],
            trecho: '"Um império não sobrevive dividido entre dois Sóis."',
            natureza: 'recriada',
            confiavel: true,
            acervo: 'Reconstituição plausível da preocupação política com uma sucessão disputada, coerente com o que se sabe do período — não é depoimento de época.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-imperial': [
          {
            slug: 'indicar-sucessor-agora',
            texto: 'Indicar publicamente um sucessor agora, para evitar disputa',
            deltas: { centralizacao: 8, 'coesao-etnica': -4 },
            consequencia: 'A incerteza acaba rápido — e quem apostava no outro candidato guarda o ressentimento para depois.',
          },
          {
            slug: 'consultar-faccoes',
            texto: 'Consultar as principais facções nobres antes de qualquer indicação',
            deltas: { 'coesao-etnica': 5, centralizacao: -2 },
            consequencia: 'A escolha final tende a ter mais apoio real — o processo demora, e a incerteza continua por mais tempo.',
          },
        ],
        'curaca-local': [
          {
            slug: 'apoiar-candidato-forte',
            texto: 'Declarar apoio ao candidato que parece mais forte politicamente',
            deltas: { centralizacao: 4, 'coesao-etnica': -2 },
            consequencia: 'Você aposta certo, talvez — ou talvez não, e a memória de ter apoiado o outro lado não se apaga fácil.',
          },
          {
            slug: 'evitar-declarar-apoio',
            texto: 'Evitar declarar apoio publicamente a qualquer candidato',
            deltas: { 'autonomia-ayllus': 3 },
            consequencia: 'Você não faz inimigo nenhum lado — e também não ganha crédito com quem vencer.',
          },
        ],
        'sacerdote-do-sol': [
          {
            slug: 'ler-sinais-favoraveis',
            texto: 'Declarar que os sinais religiosos favorecem um dos candidatos',
            deltas: { legitimidade: 6, centralizacao: 4 },
            consequencia: 'A palavra do templo pesa mais que qualquer discurso político — e o templo agora está do lado de alguém.',
          },
          {
            slug: 'manter-templo-neutro',
            texto: 'Manter o templo neutro até a decisão do Conselho',
            deltas: { legitimidade: 2, 'coesao-etnica': 3 },
            consequencia: 'O culto ao Sol continua acima da disputa — e perde a chance de decidir quem vence.',
          },
        ],
        'artesao-textil': [
          {
            slug: 'aguardar-decisao',
            texto: 'Continuar o trabalho normalmente, esperando a decisão do Conselho',
            deltas: { producao: 3 },
            consequencia: 'O ofício segue seu curso — a política da sucessão passa longe da sua oficina, por enquanto.',
          },
          {
            slug: 'tecer-para-candidato',
            texto: 'Aceitar encomenda de têxteis cerimoniais de um dos candidatos',
            deltas: { centralizacao: 2, 'coesao-etnica': -2 },
            consequencia: 'Seu trabalho aparece do lado de alguém — e isso não passa despercebido se o outro lado vencer.',
          },
        ],
        'campones-do-ayllu': [
          {
            slug: 'seguir-o-que-vier',
            texto: 'Seguir o que o Conselho decidir, seja quem for o sucessor',
            deltas: { centralizacao: 3 },
            consequencia: 'Para sua família, o mais importante é que o rodízio continue previsível — quem senta no topo importa menos que isso.',
          },
          {
            slug: 'torcer-por-curaca',
            texto: 'Torcer pelo candidato que seu curaca apoiar, seja qual for',
            deltas: { 'coesao-etnica': 2, 'autonomia-ayllus': 2 },
            consequencia: 'Sua lealdade acompanha quem já lidera sua comunidade — o resultado da sucessão chega até você por essa via.',
          },
        ],
        'chasqui': [
          {
            slug: 'levar-mensagens-de-ambos',
            texto: 'Continuar levando mensagens de ambos os lados, sem escolher nenhum',
            deltas: { 'coesao-etnica': 3 },
            consequencia: 'A rede de comunicação do império não escolhe lado — mesmo quando todo o resto parece estar escolhendo.',
          },
          {
            slug: 'priorizar-mensagens-do-conselho',
            texto: 'Priorizar as mensagens que vêm diretamente do Conselho Imperial',
            deltas: { centralizacao: 4 },
            consequencia: 'A voz oficial chega mais rápido que qualquer outra — exatamente como Cusco prefere numa hora dessas.',
          },
        ],
      },
    },
  ],

  desfecho: {
    fixo:
      'O Tawantinsuyu segue de pé ao fim desta partida — maior, mais centralizado, mais difícil ' +
      'de administrar do que era cinco gerações atrás. Nenhuma decisão da turma muda o que a ' +
      'história registra depois: poucos anos após um momento parecido com este, uma disputa de ' +
      'sucessão real vai dividir o império entre dois irmãos, bem antes de qualquer navio europeu ' +
      'aparecer no horizonte andino.',
    variavel: ['producao', 'centralizacao', 'autonomia-ayllus', 'legitimidade', 'coesao-etnica'],
    textoFecho:
      'Em pouco mais de um século, o Tawantinsuyu cresceu de um reino regional para o maior ' +
      'império da América pré-colombiana — sem moeda, sem escrita alfabética, sustentado por ' +
      'estradas, mensageiros, depósitos e um sistema de trabalho obrigatório que tocava toda ' +
      'família do império. Cada geração de decisões — a sua, agora — deixou o mesmo tipo de ' +
      'marca: mais controle de Cusco, e algum preço pago por quem já estava ali antes.',
    perguntasDebate: [
      'Quem, nesta simulação, teve mais poder de decisão — e quem só teve poder de adaptação?',
      'A centralização de Cusco nunca diminuiu em nenhuma rodada, não importa o que a turma decidisse. O que isso diz sobre como impérios se sustentam?',
      'Existe uma forma de integrar um povo novo a um Estado maior sem que ele perca parte de si? O que a rodada da expansão militar sugere sobre isso?',
    ],
    perguntasReflexao: [
      {
        nivel: 'Sua experiência',
        pergunta: 'No papel que você teve, em algum momento sentiu que servir ao Tawantinsuyu e cuidar da sua própria gente eram a mesma coisa — ou eram coisas em disputa?',
      },
      {
        nivel: 'O conceito',
        pergunta: 'Agora que você viu o termo mita por dentro, como você explicaria para alguém de fora o que ele tem de parecido — e de diferente — com um imposto que você já ouviu falar?',
      },
      {
        nivel: 'Além desta aula',
        pergunta: 'Todo Estado grande — inca, francês do "A Coroa e o Cofre", ou o de hoje — parece precisar de algum sistema para integrar quem está longe do centro. O que muda de um sistema para o outro, e o que permanece igual?',
      },
    ],
  },
}
