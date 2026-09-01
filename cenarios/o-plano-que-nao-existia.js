// O plano que não existia — cenário da 2ª série (Aulas 6, 7 e 8 do livro)
//
// Estado Novo: a Revolta de 1932 (memória do bandeirante), o Plano Cohen
// (documento forjado usado como pretexto pro golpe de 1937) e o aparato do
// Estado Novo (DIP, Lei de Segurança Nacional, AIB x ANL). O centro deste
// cenário é o Plano Cohen — o aluno decide com base nele, sem saber que é
// falso, e só descobre no fecho. É o caso mais didático que o GDD tem para
// a seção 6.4 ("as fontes que mentem"): uma fonte falsa que produziu um
// golpe real.
//
// Fontes documentais: discurso de posse de Vargas (1937); artigos da
// Constituição de 1937; DANTAS (2014) sobre o Plano Cohen; PANDOLFI (2007)
// sobre a AIB; VIANNA sobre a ANL; charges da revista Careta. Todas do
// livro do 2º ano, Aulas 7 e 8.
export default {
  slug: 'o-plano-que-nao-existia',
  versao: 1,
  serie: '2a',
  titulo: 'O plano que não existia',
  subtitulo: 'O caminho para o Estado Novo, 1935-1937',
  pergunta: 'E se o documento que assustou o país inteiro fosse mentira?',
  introducao:
    'Brasil, 1935 a 1937. O país vive sob tensão: comunistas e integralistas se enfrentam nas ' +
    'ruas, o mandato do presidente Vargas está com os dias contados pela Constituição, e o ' +
    'medo de uma "ameaça vermelha" cresce a cada mês. Você está prestes a viver os meses que ' +
    'antecederam o golpe que fechou o Congresso e instaurou o Estado Novo — com base num ' +
    'documento que, a rigor, ninguém verificou.',
  era: 'era-vargas',
  aulasRelacionadas: [6, 7, 8],
  duracaoEstimada: '12 a 18 minutos',

  indicadores: [
    { slug: 'medo', nome: 'Medo público', inicial: 30, faixas: ['calmo', 'tenso', 'em pânico'] },
    { slug: 'liberdades', nome: 'Liberdades civis', inicial: 70, faixas: ['suspensas', 'restritas', 'plenas'] },
    { slug: 'centralizacao', nome: 'Poder centralizado no Executivo', inicial: 35, faixas: ['disperso', 'concentrando', 'absoluto'] },
    { slug: 'oposicao', nome: 'Força da oposição organizada', inicial: 40, faixas: ['esmagada', 'sobrevivendo', 'atuante'] },
    { slug: 'credibilidade', nome: 'Credibilidade da imprensa', inicial: 55, faixas: ['propaganda', 'dividida', 'confiável'] },
  ],

  papeis: [
    {
      slug: 'getulio',
      nome: 'Círculo de Vargas',
      bloco: 'elite',
      peso: 8,
      cota: 1,
      perguntaGuia: 'Uma ameaça de verdade precisa ser real para servir?',
      contexto:
        'Você assessora o Presidente da República num momento em que o mandato dele está com os dias contados pela Constituição de 1934. Um "estado de guerra" resolveria esse problema — falta só um motivo público.',
      icone: '/imagens/o-plano-que-nao-existia/papeis/getulio.jpg',
    },
    {
      slug: 'oficial-aib',
      nome: 'Oficial da Ação Integralista Brasileira',
      bloco: 'elite',
      peso: 5,
      cota: 3,
      perguntaGuia: 'O comunismo que combatemos precisa existir, ou só precisa ser útil?',
      contexto:
        'Você veste a camisa-verde e acredita no que prega: ordem, nação, hierarquia. Seu serviço secreto tem acesso a redações de outros movimentos — e a capacidade de escrever como eles escreveriam.',
      icone: '/imagens/o-plano-que-nao-existia/papeis/oficial-aib.jpg',
    },
    {
      slug: 'oficial-general',
      nome: 'Alto-comando militar',
      bloco: 'elite',
      peso: 7,
      cota: 2,
      perguntaGuia: 'Defender a ordem ou defender quem está no poder — dá sempre no mesmo?',
      contexto:
        'As Forças Armadas são chamadas a "garantir a segurança nacional". Cabe a você avaliar se a ameaça apresentada é real o bastante para justificar o que está sendo pedido.',
      icone: '/imagens/o-plano-que-nao-existia/papeis/oficial-general.jpg',
    },
    {
      slug: 'jornalista-grande-imprensa',
      nome: 'Jornalista da grande imprensa',
      bloco: 'mediador',
      peso: 4,
      cota: 3,
      perguntaGuia: 'Publicar rápido ou publicar certo?',
      contexto:
        'Um documento chegou à redação alegando revelar um plano comunista de tomada do país. É exatamente o tipo de furo que vende jornal — se for verdade.',
      icone: '/imagens/o-plano-que-nao-existia/papeis/jornalista-grande-imprensa.jpg',
    },
    {
      slug: 'militante-anl',
      nome: 'Militante da Aliança Nacional Libertadora',
      bloco: 'mediador',
      peso: 3,
      cota: 3,
      perguntaGuia: 'Como provar que não fiz o que dizem que eu ia fazer?',
      contexto:
        'Você organiza núcleos da ANL — comunistas, tenentes dissidentes, democratas, todos sob uma bandeira antifascista. Agora seu nome está sendo associado a um "plano de tomada do poder" que você nunca viu.',
      icone: '/imagens/o-plano-que-nao-existia/papeis/militante-anl.jpg',
    },
    {
      slug: 'funcionario-publico',
      nome: 'Funcionário público de carreira',
      bloco: 'popular',
      peso: 1,
      cota: 8,
      perguntaGuia: 'Obedecer à ordem de hoje me protege ou me compromete amanhã?',
      contexto:
        'Você trabalha num ministério. As instruções mudam de tom nas últimas semanas — mais vigilância, mais formulário, mais pergunta sobre "atividades suspeitas" de colegas.',
      icone: '/imagens/o-plano-que-nao-existia/papeis/funcionario-publico.jpg',
    },
    {
      slug: 'cidadao-comum',
      nome: 'Leitor de jornal, morador da cidade',
      bloco: 'popular',
      peso: 1,
      cota: 10,
      perguntaGuia: 'Se todo mundo tem medo da mesma coisa, ela precisa ser verdade?',
      contexto:
        'Você lê o jornal de manhã e comenta na fila da padaria. Não milita em nada — mas o clima de "algo grave está para acontecer" está em toda conversa que você tem essa semana.',
      icone: '/imagens/o-plano-que-nao-existia/papeis/cidadao-comum.jpg',
    },
  ],

  rodadas: [
    {
      slug: 'a-mvore-e-a-lembranca',
      titulo: 'A árvore e a lembrança',
      amplitude: 25,
      cena:
        'São Paulo, 1932. Vencidas as armas, a derrota vira memória: o bandeirante colonial reaparece nos cartazes como símbolo de coragem e progresso, e 9 de julho vira data cívica. A batalha pela versão do que aconteceu começa antes mesmo de a poeira baixar.',
      fonte: {
        texto:
          'Para ampliar sua base de apoio, essas lideranças mobilizaram um discurso identitário que recuperava a figura do bandeirante. [...] As oligarquias reinterpretaram essa imagem para apresentar São Paulo como guardião do trabalho, do progresso e da legalidade [...]. Essa memória, construída com finalidades políticas bem definidas, reforçou a imagem de São Paulo como defensor da democracia e do progresso.',
        autor: 'Livro do 2º ano, Aula 6, com base em SANTOS, M. C. dos; MOTA, A. São Paulo 1932: memória, mito e identidade. São Paulo: Alameda, 2010.',
        acervo: 'Livro do 2º ano, Aula 6',
        natureza: 'documental',
      },
      imagemSugerida: {
        descricao:
          'Cartazes convocatórios de 1932, convocando voluntários (enfermeiras e soldados) para a revolução constitucionalista, com forte apelo visual e simbólico.',
        arquivo: '/imagens/o-plano-que-nao-existia/a-mvore-e-a-lembranca.jpg',
        onde: 'Ilustração gerada — cena genérica de cartaz, não reprodução de um cartaz específico. Para a imagem real: Livro do 2º ano, Aula 6, Estação 1 — acervo Fapesp / Instituto Histórico e Geográfico de São Paulo / Arquivo Público do Estado de São Paulo.',
      },
      investigacao: {
        olhar:
          'Um mês depois da rendição, os mesmos muros que tinham cartaz de convocação para a guerra já têm cartaz de homenagem aos "heróis de 32". A cidade está reescrevendo o que acabou de viver.',
        fontes: [
          {
            slug: 'paulistanidade',
            tipo: 'ler',
            titulo: 'A "paulistanidade"',
            papeis: ['jornalista-grande-imprensa', 'oficial-general', 'cidadao-comum'],
            trecho:
              'A "paulistanidade" foi um poderoso amálgama na campanha de persuasão em prol do movimento constitucionalista de 1932. Por meio de cartazes, jornais e transmissões radiofônicas, calcava-se a propaganda em símbolos que exaltavam a excepcionalidade do povo paulista, que, descendendo diretamente de bandeirantes [...], teria como destino liderar a nação.',
            autor: 'SANTOS, M. C. dos; MOTA, A. São Paulo 1932: memória, mito e identidade. São Paulo: Alameda, 2010.',
            acervo: 'Livro do 2º ano, Aula 6',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'vaca-explorada',
            tipo: 'olhar',
            titulo: 'A vaca explorada',
            papeis: ['jornalista-grande-imprensa', 'cidadao-comum', 'funcionario-publico'],
            trecho:
              'Charge separatista: São Paulo representado como uma vaca sendo explorada pelos demais estados do Brasil. Legenda: "O que é que há / Thesouro Paulista / Salvação do Brasil / Que sempre houve".',
            autor: 'Charge/propaganda separatista, autoria não identificada, [1931-?].',
            acervo: 'Livro do 2º ano, Aula 6, Estação 3 — acervo Fapesp / Instituto Histórico e Geográfico de São Paulo.',
            natureza: 'documental',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        getulio: [
          {
            slug: 'anistia-ampla',
            texto: 'Conceder anistia ampla aos derrotados de 1932',
            deltas: { oposicao: 8, liberdades: 6, medo: -4 },
            consequencia:
              'A ferida não fecha, mas para de sangrar em público. Parte da elite paulista volta a negociar com o governo em vez de conspirar contra ele.',
          },
          {
            slug: 'punir-lideranças',
            texto: 'Punir seletivamente as lideranças do movimento',
            deltas: { centralizacao: 8, oposicao: -6, medo: 4 },
            consequencia:
              'Alguns nomes específicos pagam a conta pelos outros. A mensagem para o resto da elite paulista é clara: negociar compensa mais que resistir.',
          },
          {
            slug: 'deixar-construir-mito',
            texto: 'Deixar São Paulo construir seu próprio mito do 9 de julho, sem interferir',
            deltas: { oposicao: 5, credibilidade: -3 },
            consequencia:
              'O feriado estadual nasce sem oposição do Rio. Uma memória de derrota vira, com tempo e cartaz, uma memória de honra — e ninguém no governo federal gastou esforço nenhum para impedir.',
          },
        ],
        'oficial-aib': [
          {
            slug: 'aproximar-do-governo',
            texto: 'Aproximar a AIB do governo, oferecendo apoio contra "a desordem"',
            deltas: { centralizacao: 6, oposicao: -5 },
            consequencia:
              'Os camisas-verdes começam a ser vistos, nos corredores do poder, como aliados úteis contra os comunistas — um lugar à mesa que vai custar caro depois.',
          },
          {
            slug: 'criticar-elite-paulista',
            texto: 'Criticar publicamente o "mito do bandeirante" como saudosismo oligárquico',
            deltas: { credibilidade: 4, oposicao: -3 },
            consequencia:
              'A crítica rende manchete, mas também rende inimigo novo — a elite paulista, que até então via a AIB como aliada em potencial contra a esquerda.',
          },
          {
            slug: 'manter-neutralidade',
            texto: 'Manter distância — 1932 não é a guerra da AIB',
            deltas: { medo: -2 },
            consequencia:
              'A organização segue crescendo em silêncio, guardando forças e visibilidade para o confronto que ela já enxerga se formando com a esquerda.',
          },
        ],
        'oficial-general': [
          {
            slug: 'reintegrar-oficiais',
            texto: 'Reintegrar oficiais paulistas ao Exército nacional',
            deltas: { oposicao: 6, liberdades: 4 },
            consequencia:
              'A farda volta a ser uma farda só, pelo menos formalmente. Rancores pessoais não desaparecem — só deixam de aparecer em relatório oficial.',
          },
          {
            slug: 'reforcar-vigilancia-sp',
            texto: 'Reforçar a vigilância militar sobre São Paulo',
            deltas: { centralizacao: 8, oposicao: -6, medo: 5 },
            consequencia:
              'Tropas federais permanecem no estado por mais tempo que o anunciado. São Paulo aprende, na prática, que perder uma guerra civil também significa perder autonomia militar.',
          },
          {
            slug: 'relatorio-tecnico',
            texto: 'Emitir relatório técnico, sem recomendação política',
            deltas: { credibilidade: 5 },
            consequencia:
              'O documento é preciso e careta. Ninguém o cita nos discursos, mas ele fica no arquivo — o tipo de fonte que sobrevive porque ninguém se deu ao trabalho de manipulá-la.',
          },
        ],
        'jornalista-grande-imprensa': [
          {
            slug: 'noticiar-heroismo',
            texto: 'Noticiar o "heroísmo constitucionalista" na capa',
            deltas: { credibilidade: -3, oposicao: 5 },
            consequencia:
              'A narrativa de bravura paulista vira manchete recorrente. É boa para as vendas e ótima para quem está construindo o mito.',
          },
          {
            slug: 'questionar-narrativa',
            texto: 'Questionar, em editorial, se o discurso do "bandeirante" não é conveniente demais',
            deltas: { credibilidade: 6, oposicao: -3 },
            consequencia:
              'O editorial é lido — e mal recebido nos círculos que financiam parte da grande imprensa paulista. Você fez um inimigo influente por uma pergunta razoável.',
          },
          {
            slug: 'cobrir-os-dois-lados',
            texto: 'Cobrir tanto a memória oficial quanto os relatos dos que perderam',
            deltas: { credibilidade: 8 },
            consequencia:
              'A reportagem é mais trabalhosa e menos vendável que uma manchete só. Também é a única versão que um leitor de fora do círculo paulista consegue confiar plenamente.',
          },
        ],
        'militante-anl': [
          {
            slug: 'reorganizar-rede',
            texto: 'Aproveitar o pós-32 para reorganizar a rede de núcleos',
            deltas: { oposicao: 10, medo: 3 },
            consequencia:
              'Enquanto a elite paulista lambe as feridas, a militância de esquerda ocupa o espaço político que ficou vazio — um crescimento que não passa despercebido.',
          },
          {
            slug: 'distanciar-de-32',
            texto: 'Deixar claro que a ANL não teve nada a ver com o levante paulista',
            deltas: { credibilidade: 5 },
            consequencia:
              'A distinção é tecnicamente verdadeira e politicamente ignorada — para os adversários, toda oposição organizada é a mesma ameaça, não importa a bandeira.',
          },
          {
            slug: 'buscar-alianca-tenentes',
            texto: 'Buscar aliança com tenentes dissidentes descontentes com Vargas',
            deltas: { oposicao: 8, centralizacao: -4 },
            consequencia:
              'A aliança amplia a base, mas também amplia quem pode ser vigiado como "subversivo" — a fronteira entre tenentismo e comunismo, na cabeça de quem investiga, começa a desaparecer.',
          },
        ],
        'funcionario-publico': [
          {
            slug: 'seguir-instrucoes',
            texto: 'Seguir as instruções do ministério sem questionar',
            deltas: { centralizacao: 4 },
            consequencia:
              'Você preencheu o formulário certo, no prazo certo. Ninguém te notou — que, neste momento, é exatamente o que você queria.',
          },
          {
            slug: 'documentar-mudancas',
            texto: 'Anotar, por conta própria, como as instruções vêm mudando de tom',
            deltas: { credibilidade: 4, liberdades: 3 },
            consequencia:
              'Seu caderno pessoal registra uma escalada que ninguém no jornal ainda percebeu. Não é para publicar — é para não esquecer.',
          },
          {
            slug: 'comentar-com-colegas',
            texto: 'Comentar com colegas de confiança que "algo está mudando"',
            deltas: { oposicao: 3, medo: 2 },
            consequencia:
              'A conversa de corredor se espalha baixinho. Ninguém organiza nada — mas várias pessoas, isoladas, chegam à mesma desconfiança ao mesmo tempo.',
          },
        ],
        'cidadao-comum': [
          {
            slug: 'comemorar-9-julho',
            texto: 'Participar das comemorações de 9 de julho',
            deltas: { oposicao: 3 },
            consequencia:
              'É um feriado, tem desfile, tem sanduíche na praça. Poucos ali param para perguntar de que exatamente estão comemorando a derrota.',
          },
          {
            slug: 'ceticismo-cotidiano',
            texto: 'Comentar na padaria que "os jornais exageram os dois lados"',
            deltas: { credibilidade: 2 },
            consequencia:
              'Um ceticismo morno se espalha, sem direção nenhuma. Não muda o jornal de ninguém, mas planta uma pergunta que vai ser útil daqui a alguns anos.',
          },
          {
            slug: 'nao-se-importar',
            texto: 'Não se importar muito — política é para outros decidirem',
            deltas: {},
            consequencia:
              'A vida segue. É a opção mais comum, e é exatamente essa indiferença distribuída que faz caber, mais tarde, muita coisa que ninguém votou.',
          },
        ],
      },
    },

    {
      slug: 'o-documento',
      titulo: 'O documento',
      amplitude: 30,
      cena:
        'Setembro de 1937. Um documento chega às mãos do alto-comando: um suposto plano da Internacional Comunista para tomar o Brasil — assassinatos seletivos, saques, terror. Ninguém pergunta de onde ele veio antes de decidir o que fazer com ele.',
      fonte: {
        texto:
          'O Plano Cohen foi um documento atribuído à Internacional Comunista, contendo um suposto plano para a tomada do Brasil, que fora apresentado em setembro de 1937. [...] A autenticidade do documento não foi questionada e, dias depois, o Plano Cohen seria divulgado publicamente, alcançando enorme repercussão na imprensa e na sociedade, ao mesmo tempo em que era desencadeada uma forte campanha anticomunista.',
        autor: 'DANTAS, E. G. Palimpsesto antissemita: desconstruindo o Plano Cohen. Revista Escritas, v. 6, n. 1, p. 126-143, 2014.',
        acervo: 'Livro do 2º ano, Aula 7',
        natureza: 'documental',
      },
      imagemSugerida: {
        descricao:
          'Uma folha datilografada, com timbre fictício de organização comunista, sobre uma mesa de gabinete militar — o "documento" sendo lido e repassado antes de qualquer verificação.',
        arquivo: '/imagens/o-plano-que-nao-existia/o-documento.jpg',
        onde: 'Ilustração gerada — cena genérica de um documento datilografado sendo repassado, não reprodução do Plano Cohen real. Reproduções do texto integral do Plano Cohen circulam em acervos acadêmicos (ex.: artigo de DANTAS, 2014, já citado) — usar com cuidado e crédito, deixando claro que é reprodução de fraude histórica, nunca apresentada como verdade.',
      },
      investigacao: {
        olhar:
          'No gabinete, o documento passa de mão em mão mais rápido do que qualquer um consegue lê-lo com calma. Quem pergunta "isso é verificado?" recebe olhares de impaciência, não respostas.',
        fontes: [
          {
            slug: 'aib-e-o-plano',
            tipo: 'ler',
            titulo: '"Anauê!" — quem escreveu como o inimigo escreveria',
            papeis: ['oficial-aib', 'oficial-general', 'getulio'],
            trecho:
              'A AIB, criada em 1932 e dirigida pelo intelectual Plínio Salgado, inspirada no fascismo italiano, possuía uma estrutura organizacional paramilitar [...]. Combatia os partidos políticos existentes [...] e entrava em choque aberto com os comunistas.',
            autor: 'PANDOLFI, D. Os anos 30: as incertezas do regime. In: FERREIRA, J.; DELGADO, L. de A. N. (org.). O Brasil Republicano, v. 2, 2007.',
            acervo: 'Livro do 2º ano, Aula 7',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'anl-de-verdade',
            tipo: 'ler',
            titulo: 'O que a ANL realmente era',
            papeis: ['militante-anl', 'jornalista-grande-imprensa', 'funcionario-publico'],
            trecho:
              'A ANL foi lançada [...] em grande comício [...] que dizia ser "uma associação constituída de aderentes individuais e coletivos, com o fim de defender a Liberdade e a Emancipação Nacional e Social do Brasil", uniu partidos políticos, sindicatos, diversas organizações femininas, culturais, estudantis, profissionais liberais e militares.',
            autor: 'VIANNA, M. de A. G. O PCB, a ANL e as insurreições de novembro de 1935. In: FERREIRA, J.; DELGADO, L. de A. N. (org.). O Brasil Republicano, v. 2, 2007.',
            acervo: 'Livro do 2º ano, Aula 7',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'quem-assina-o-documento',
            tipo: 'ouvir',
            titulo: '"Dizem que veio de dentro da Internacional"',
            papeis: ['getulio', 'oficial-general', 'jornalista-grande-imprensa', 'cidadao-comum'],
            trecho:
              '"Contam que o documento foi interceptado de um agente soviético em trânsito pelo Brasil — teria vazado de dentro da própria Internacional Comunista."',
            acervo: 'Boato de origem — é exatamente essa história de "interceptação" que deu ao Plano Cohen sua aparência de autenticidade.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho:
              'Falso. O documento foi escrito pelo capitão Olímpio Mourão Filho, chefe do serviço secreto da própria Ação Integralista Brasileira — não veio de agente nenhum, nem de fora. A confissão só viria em 1945, do general Góes Monteiro. Por oito anos, o país inteiro tratou uma fraude doméstica como inteligência estrangeira interceptada.',
          },
        ],
      },
      opcoesPorPapel: {
        getulio: [
          {
            slug: 'divulgar-imediatamente',
            texto: 'Divulgar o documento imediatamente, sem verificação independente',
            deltas: { medo: 15, centralizacao: 10, liberdades: -8 },
            consequencia:
              'O rádio nacional interrompe a programação. Em poucas horas, o país inteiro sabe do "Plano Cohen" — e ninguém, em lugar nenhum, perguntou ainda de onde ele veio.',
          },
          {
            slug: 'pedir-verificacao',
            texto: 'Pedir verificação técnica antes de qualquer anúncio público',
            deltas: { credibilidade: 8, medo: -5 },
            consequencia:
              'A verificação atrasa o anúncio em alguns dias — tempo suficiente para que alguém, em algum lugar, tivesse notado as inconsistências. Ninguém notou. O documento segue seu caminho de qualquer forma.',
          },
          {
            slug: 'usar-como-pretexto',
            texto: 'Usar o documento como pretexto para decretar estado de guerra, verificado ou não',
            deltas: { centralizacao: 15, liberdades: -12, medo: 10 },
            consequencia:
              'A autenticidade deixou de importar no momento em que virou instrumento. O "Plano Cohen" não precisa ser real para fazer o trabalho que fez.',
          },
        ],
        'oficial-aib': [
          {
            slug: 'apresentar-como-achado',
            texto: 'Apresentar o documento ao Exército como um achado de inteligência real',
            deltas: { medo: 10, centralizacao: 8 },
            consequencia:
              'Ninguém no alto-comando pergunta à AIB de onde veio o papel. A confiança entre "aliados anticomunistas" às vezes substitui qualquer verificação.',
          },
          {
            slug: 'exagerar-detalhes',
            texto: 'Adicionar detalhes mais chocantes ao rascunho antes de repassar',
            deltas: { medo: 14, credibilidade: -8 },
            consequencia:
              'Assassinatos em massa, incêndios, saques — cada detalhe novo torna o documento mais assustador e, para quem soubesse comparar, mais implausível. Ninguém comparou.',
          },
          {
            slug: 'hesitar',
            texto: 'Hesitar — talvez seja longe demais, mesmo para combater o comunismo',
            deltas: { credibilidade: 4, medo: -2 },
            consequencia:
              'A hesitação dura pouco e não muda o rumo dos acontecimentos. Mas ela existiu — e fica registrada, para quem um dia for reconstruir esta história, que nem todo mundo dentro da AIB estava confortável.',
          },
        ],
        'oficial-general': [
          {
            slug: 'aceitar-sem-checar',
            texto: 'Aceitar o documento como autêntico e mobilizar tropas',
            deltas: { centralizacao: 12, medo: 8, liberdades: -6 },
            consequencia:
              'Um documento não assinado, de origem não confirmada, movimenta batalhões de verdade. É esse descompasso — entre o peso da fonte e o peso da resposta — que faz o Plano Cohen funcionar.',
          },
          {
            slug: 'exigir-pericia',
            texto: 'Exigir perícia técnica no documento antes de qualquer mobilização',
            deltas: { credibilidade: 10, medo: -6 },
            consequencia:
              'A perícia é solicitada, mas o processo político já andou mais rápido que o processo técnico. Quando o parecer chegaria, a decisão política já estava tomada.',
          },
          {
            slug: 'declarar-estado-guerra',
            texto: 'Recomendar a declaração de estado de guerra com base no documento',
            deltas: { centralizacao: 15, liberdades: -12 },
            consequencia:
              'A recomendação militar dá ao golpe civil sua roupagem de necessidade nacional. É mais fácil suspender garantias quando quem pede é a farda.',
          },
        ],
        'jornalista-grande-imprensa': [
          {
            slug: 'publicar-manchete',
            texto: 'Publicar o conteúdo do plano em manchete, como revelação',
            deltas: { medo: 12, credibilidade: -8 },
            consequencia:
              'A edição esgota nas bancas. Meses depois, quando a fraude for exposta, esta manchete específica vai ser lembrada — e não como o jornal gostaria.',
          },
          {
            slug: 'tentar-checar-fonte',
            texto: 'Tentar apurar a origem do documento antes de publicar',
            deltas: { credibilidade: 10 },
            consequencia:
              'A apuração não encontra nada que confirme a origem soviética — mas também não encontra nada que a desminta com certeza. Diante da dúvida, o jornal escolhe não publicar ainda. É a decisão mais cara e a mais correta da rodada.',
          },
          {
            slug: 'publicar-com-ressalva',
            texto: 'Publicar mencionando que a autenticidade não foi confirmada',
            deltas: { medo: 6, credibilidade: 3 },
            consequencia:
              'A ressalva vai no segundo parágrafo. Quase ninguém lê até o segundo parágrafo — o título já fez o trabalho que ia fazer.',
          },
        ],
        'militante-anl': [
          {
            slug: 'negar-publicamente',
            texto: 'Negar publicamente qualquer ligação da ANL com o documento',
            deltas: { credibilidade: 6, oposicao: -4 },
            consequencia:
              'A negação é verdadeira e chega tarde demais para importar. Provar que não se fez algo é, historicamente, uma das tarefas mais difíceis que existem.',
          },
          {
            slug: 'buscar-provas-fraude',
            texto: 'Tentar reunir provas de que o documento é forjado',
            deltas: { credibilidade: 8, oposicao: 4 },
            consequencia:
              'Você identifica incoerências reais no texto — mas não tem como publicá-las com alcance nenhum perto do documento original. A prova existe; a plateia, não.',
          },
          {
            slug: 'esconder-se',
            texto: 'Ir para a clandestinidade antes que as prisões comecem',
            deltas: { oposicao: -6, liberdades: 4 },
            consequencia:
              'A decisão te tira de circulação — e também tira você da posição de contestar publicamente o que está sendo dito sobre a ANL.',
          },
        ],
        'funcionario-publico': [
          {
            slug: 'repassar-instrucao',
            texto: 'Repassar as novas instruções de "segurança" sem questionar',
            deltas: { centralizacao: 5 },
            consequencia:
              'Os formulários de vigilância se multiplicam nos ministérios. Você não escreveu a política, só a distribuiu — mas distribuir também é um jeito de fazê-la acontecer.',
          },
          {
            slug: 'questionar-fonte-internamente',
            texto: 'Perguntar, internamente, se alguém verificou a origem do documento',
            deltas: { credibilidade: 4, medo: -3 },
            consequencia:
              'A pergunta não sai da sala em que foi feita. Mas alguém no ministério, agora, sabe que nem todo funcionário aceitou tudo sem examinar.',
          },
          {
            slug: 'aproveitar-clima',
            texto: 'Aproveitar o clima para denunciar um colega rival como "suspeito"',
            deltas: { medo: 5, liberdades: -6, oposicao: -4 },
            consequencia:
              'A denúncia não tem nada a ver com comunismo e tudo a ver com uma disputa de cargo antiga. É assim que um clima de suspeita nacional também vira ferramenta de acerto de contas pessoal.',
          },
        ],
        'cidadao-comum': [
          {
            slug: 'acreditar-e-temer',
            texto: 'Acreditar no que o rádio anunciou e temer pela família',
            deltas: { medo: 10 },
            consequencia:
              'Você tranca a porta um pouco mais cedo essa semana. O medo é genuíno — mesmo sendo, sem que você soubesse, uma reação a algo que não existia.',
          },
          {
            slug: 'desconfiar_documento',
            texto: 'Estranhar que ninguém mostrou o documento original, só resumos',
            deltas: { credibilidade: 5, medo: -3 },
            consequencia:
              'Uma dúvida pequena e sem plateia. Você comenta com um ou dois vizinhos; a maioria prefere acreditar no rádio a duvidar dele.',
          },
          {
            slug: 'repetir-boato',
            texto: 'Repassar adiante os detalhes mais chocantes que ouviu',
            deltas: { medo: 8, credibilidade: -3 },
            consequencia:
              'Cada repetição acrescenta um detalhe novo, cada detalhe torna a história mais assustadora e menos parecida com o que quer que tenha sido o documento original.',
          },
        ],
      },
    },

    {
      slug: 'o-golpe',
      titulo: 'O golpe',
      amplitude: 30,
      efeitosFixos: { centralizacao: 20, liberdades: -18 },
      cena:
        '10 de novembro de 1937. Vargas dissolve o Congresso Nacional e outorga uma nova Constituição. O "estado de guerra" contra uma ameaça que ninguém verificou vira, na prática, o fim da democracia liberal no Brasil. O Estado Novo começa.',
      fonte: {
        texto:
          'Art. 74. Compete privativamente ao Presidente da República: [...] b) expedir decretos-leis [...]; j) intervir nos Estados [...]; k) decretar o estado de emergência e o estado de guerra [...]. Art. 75. São prerrogativas do Presidente da República: [...] b) dissolver a Câmara dos Deputados [...].',
        autor: 'BRASIL. Constituição da República dos Estados Unidos do Brasil de 1937. Rio de Janeiro: Casa Civil, 1937.',
        acervo: 'Livro do 2º ano, Aula 8',
        natureza: 'documental',
      },
      imagemSugerida: {
        descricao:
          'Cena genérica de Vargas discursando ao microfone de rádio para o país — não é a charge real de Belmonte (Folha da Manhã, 22 jul. 1937) mencionada em `onde`; recriar essa charge específica por IA a apresentaria como algo que ela não é.',
        arquivo: '/imagens/o-plano-que-nao-existia/o-golpe.jpg',
        onde: 'A charge real de Belmonte com as caricaturas de Vargas está no Livro do 2º ano, Aula 8 — Folha da Manhã, acervo digital. Use-a se quiser a imagem documental de verdade.',
      },
      investigacao: {
        olhar:
          'No rádio nacional, a voz de Vargas anuncia a nova ordem em tom grave e paternal. Nas ruas, o Congresso está fechado e há soldados na porta.',
        fontes: [
          {
            slug: 'discurso-de-posse',
            tipo: 'ler',
            titulo: 'Discurso de posse, 10 de novembro de 1937',
            papeis: ['getulio', 'oficial-general', 'jornalista-grande-imprensa', 'funcionario-publico'],
            trecho:
              'Nos períodos de crise [...] a democracia de partidos, em lugar de oferecer segura oportunidade de crescimento e de progresso [...], subverte a hierarquia, ameaça a unidade pátria e põe em perigo a existência da Nação [...]. Quando as competições políticas ameaçam degenerar em guerra civil, é sinal de que o regime constitucional perdeu o seu valor prático, subsistindo, apenas, como abstração.',
            autor: 'VARGAS, G. Proclamação ao povo brasileiro, discurso de posse, 10 de novembro de 1937. Biblioteca da Presidência da República.',
            acervo: 'Livro do 2º ano, Aula 8',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'lei-seguranca-charge',
            tipo: 'olhar',
            titulo: '"É para nos defendermos... dela!"',
            papeis: ['cidadao-comum', 'militante-anl', 'funcionario-publico'],
            trecho:
              'Charge: "ZÉ: – Todo esse aparato é para garantir a democracia liberal? GETÚLIO: – Não. É para nos defendermos... dela!"',
            autor: 'Charge de Storni, revista Careta, 23 fev. 1935.',
            acervo: 'Livro do 2º ano, Aula 7',
            natureza: 'documental',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        getulio: [
          {
            slug: 'consolidar-rapido',
            texto: 'Consolidar o novo regime rapidamente: fechar Congresso, nomear interventores',
            deltas: { centralizacao: 10, liberdades: -8, medo: 5 },
            consequencia:
              'Em poucos dias, a estrutura do Estado Novo está de pé. A velocidade não deixa tempo para reação organizada — e essa é exatamente a lógica por trás dela.',
          },
          {
            slug: 'gesto-conciliador',
            texto: 'Fazer um gesto conciliador: manter alguns direitos formalmente',
            deltas: { liberdades: 6, credibilidade: 4 },
            consequencia:
              'Alguns direitos permanecem escritos na nova Constituição, mesmo que pouco praticados. A distância entre o papel e a prática, aqui, já é familiar.',
          },
          {
            slug: 'discurso-nacionalista',
            texto: 'Investir num discurso de unidade nacional e progresso, não de repressão',
            deltas: { medo: -4, centralizacao: 6 },
            consequencia:
              'A propaganda foca em rodovias, indústria, trabalhismo — a "cara boa" do regime. É a mesma centralização, com outra iluminação.',
          },
        ],
        'oficial-aib': [
          {
            slug: 'esperar-recompensa',
            texto: 'Esperar que o novo regime recompense a AIB por seu papel',
            deltas: { centralizacao: 4 },
            consequencia:
              'A recompensa não vem como esperado — Vargas absorve o discurso anticomunista da AIB, mas não divide poder com ela. O aliado de ontem começa a virar rival.',
          },
          {
            slug: 'pressionar-por-espaco',
            texto: 'Pressionar publicamente por um lugar formal no novo governo',
            deltas: { oposicao: -3, credibilidade: -3 },
            consequencia:
              'A pressão pública incomoda um regime que não pretende dividir protagonismo com ninguém — nem com quem ajudou a construir o pretexto para ele existir.',
          },
          {
            slug: 'manter-organizacao-paralela',
            texto: 'Manter a AIB organizada e armada, por precaução',
            deltas: { medo: 4, oposicao: -2 },
            consequencia:
              'A milícia continua existindo fora do controle direto do novo Estado — um detalhe que o próprio Estado Novo vai lembrar, com desconfiança, poucos meses depois.',
          },
        ],
        'oficial-general': [
          {
            slug: 'garantir-golpe',
            texto: 'Garantir o golpe com apoio militar explícito',
            deltas: { centralizacao: 15, liberdades: -10 },
            consequencia:
              'Sem um só tiro, a farda valida a ruptura institucional. É a forma mais eficiente de golpe: aquele que não precisa de violência porque ninguém com força para resistir vai resistir.',
          },
          {
            slug: 'exigir-garantias',
            texto: 'Exigir garantias de que o novo regime vai preservar a hierarquia militar',
            deltas: { centralizacao: 8, credibilidade: 3 },
            consequencia:
              'O apoio vem com condições. Os quartéis continuam sendo, dali em diante, um centro de poder próprio dentro do regime — não apenas um instrumento dele.',
          },
          {
            slug: 'silencio-profissional',
            texto: 'Manter silêncio profissional — política não é assunto de farda',
            deltas: {},
            consequencia:
              'A neutralidade declarada é, na prática, consentimento. Um exército que não impede um golpe está, goste ou não, tomando partido.',
          },
        ],
        'jornalista-grande-imprensa': [
          {
            slug: 'apoiar-editorial',
            texto: 'Apoiar o golpe em editorial, como "restauração da ordem"',
            deltas: { credibilidade: -8, medo: -3 },
            consequencia:
              'O editorial de hoje vai envelhecer mal. Mas hoje, ele soa razoável para um público exausto de meses de "clima de ameaça".',
          },
          {
            slug: 'resistir-censura',
            texto: 'Tentar publicar uma crítica ao fechamento do Congresso',
            deltas: { liberdades: 4, credibilidade: 6 },
            consequencia:
              'A matéria não passa da censura prévia do DIP. Mas a tentativa fica registrada nos arquivos internos do jornal — prova de que nem toda redação se calou por escolha.',
          },
          {
            slug: 'reportagem-factual',
            texto: 'Reportar os fatos institucionais sem adjetivá-los',
            deltas: { credibilidade: 4 },
            consequencia:
              'A notícia sai seca: datas, artigos da nova Constituição, nomes de interventores. É a forma mais segura de escrever sob censura — e também a mais fácil de reler, décadas depois, sem constrangimento.',
          },
        ],
        'militante-anl': [
          {
            slug: 'resistencia-clandestina',
            texto: 'Organizar resistência clandestina ao novo regime',
            deltas: { oposicao: 6, medo: 4, liberdades: -4 },
            consequencia:
              'A rede sobrevive, mas encolhida e escondida. Cada reunião agora carrega um risco que, há dois anos, não existia da mesma forma: a polícia política do Estado Novo prendia e interrogava sob violência quem considerava subversivo — não era exceção, era rotina.',
            evento: {
              imagem: '/imagens/o-plano-que-nao-existia/eventos/batida-policial.jpg',
              texto:
                'Numa madrugada, agentes da polícia política batem na porta do local onde vocês se reuniam. Alguém tinha informado.',
              reacoes: [
                {
                  slug: 'negar',
                  texto: 'Negar que a reunião era política',
                  resultado: 'Você diz que estava só de passagem, visitando um amigo. Não convence ninguém — mas atrasa o processo em algumas horas.',
                },
                {
                  slug: 'resistir',
                  texto: 'Recusar-se a acompanhar os agentes sem mandado',
                  resultado: 'Você exige ver o mandado. Eles não têm, e não se importam com isso. Você é levado do mesmo jeito — só que agora com um motivo a mais registrado contra você.',
                },
                {
                  slug: 'delatar',
                  texto: 'Sob pressão, confirmar dois nomes que já pareciam saber',
                  resultado: 'Você aponta dois nomes que os agentes já citavam, meio de leve. Talvez já soubessem mesmo. Você sai mais cedo. Os outros dois, não — e isso não é algo que se decide sozinho outra vez.',
                },
              ],
            },
          },
          {
            slug: 'exilio',
            texto: 'Buscar exílio antes que as prisões alcancem você',
            deltas: { oposicao: -8 },
            consequencia:
              'Você sai do país com o que consegue carregar. A militância que você construiu continua existindo — sem você dentro dela, por enquanto.',
          },
          {
            slug: 'aceitar-prisao',
            texto: 'Permanecer, aceitando o risco de prisão, para não abandonar a rede',
            deltas: { oposicao: 4, liberdades: -6 },
            consequencia:
              'Ficar tem um preço que se paga rápido: dias depois, é você quem está sendo procurado. A rede que você não quis abandonar agora precisa decidir se abandona você.',
          },
        ],
        'funcionario-publico': [
          {
            slug: 'jurar-nova-ordem',
            texto: 'Assinar o termo de fidelidade ao novo regime',
            deltas: { centralizacao: 5 },
            consequencia:
              'Seu cargo está seguro por enquanto. A assinatura é uma formalidade pequena — do tipo que, somada a milhares de outras iguais, é o que faz um regime novo funcionar no dia seguinte.',
          },
          {
            slug: 'pedir-demissao',
            texto: 'Pedir demissão em vez de servir ao novo regime',
            deltas: { credibilidade: 3, oposicao: 2 },
            consequencia:
              'Você sai sem alarde e sem substituto imediato. É um gesto que quase ninguém nota — exceto você mesmo, e isso, para você, já é o suficiente.',
          },
          {
            slug: 'continuar-em-silencio',
            texto: 'Continuar trabalhando, sem manifestar opinião de nenhum lado',
            deltas: {},
            consequencia:
              'Nada muda na sua rotina visível. Por dentro, é outra história — mas por dentro não é o que fica registrado em nenhum arquivo.',
          },
        ],
        'cidadao-comum': [
          {
            slug: 'aceitar-nova-ordem',
            texto: 'Aceitar a nova ordem — pelo menos agora "alguém está no controle"',
            deltas: { medo: -5, liberdades: -3 },
            consequencia:
              'O alívio de um perigo (real ou não) supera, por ora, o desconforto de um Congresso fechado. É uma troca que muita gente faz sem perceber que está fazendo.',
          },
          {
            slug: 'desconfiar-golpe',
            texto: 'Desconfiar que o "perigo comunista" serviu de desculpa fácil demais',
            deltas: { credibilidade: 5, medo: -2 },
            consequencia:
              'Você não tem como provar nada — só uma sensação incômoda de que a sequência de eventos foi conveniente demais para ser só coincidência. Você está certo, e vai levar oito anos para descobrir.',
          },
          {
            slug: 'seguir-vida',
            texto: 'Seguir a vida — o Congresso fechado não muda o seu dia a dia amanhã',
            deltas: {},
            consequencia:
              'De fato, quase nada muda na sua rua amanhã de manhã. É assim que uma ruptura institucional às vezes acontece: sem barulho nenhum na vida de quem não está no centro dela.',
          },
        ],
      },
    },
  ],

  juri: {
    pergunta: 'O governo sabia que o Plano Cohen era falso e usou como pretexto, ou foi enganado como o resto do país?',
    lados: [
      {
        nome: 'Sabia e usou como pretexto',
        fontesSlugs: ['aib-e-o-plano', 'lei-seguranca-charge'],
      },
      {
        nome: 'Foi enganado como todo mundo',
        fontesSlugs: ['discurso-de-posse', 'anl-de-verdade'],
      },
    ],
  },

  desfecho: {
    fixo: 'O Estado Novo é instaurado em 10 de novembro de 1937. Em toda partida.',
    variavel: ['medo-final', 'liberdades-restantes', 'quem-soube-da-fraude-a-tempo'],
    textoFecho:
      'Em março de 1945 — oito anos depois — o general Góes Monteiro admitiu publicamente: o Plano Cohen foi forjado pelo capitão Olímpio Mourão Filho, chefe do serviço secreto da própria Ação Integralista Brasileira. Não havia agente soviético, não havia plano de tomada, não havia Internacional Comunista por trás de nada daquilo. Vocês decidiram, rodada após rodada, com base num documento que nunca existiu — e o Estado Novo que ele ajudou a justificar durou oito anos de qualquer forma. Isso não é sobre terem "caído" numa mentira. É sobre o que uma mentira bem colocada, no momento certo, é capaz de fazer um país inteiro fazer.\n\n' +
      'Uma coisa que o jogo simplifica: quem jogou como militante da ANL sentiu o "medo" subir como número numa barra. No Estado Novo real, esse medo tinha corpo — prisão, interrogatório sob tortura, exílio. Milhares de pessoas foram presas nos anos seguintes ao golpe, boa parte delas por associação com uma organização que a essa altura já nem existia mais oficialmente. O jogo não encena isso a cada rodada porque faria da simulação uma sequência previsível de punição — mas o preço de estar do lado errado de um Estado que acabou de se tornar absoluto era esse, e era real.',
    perguntasDebate: [
      'Quantas decisões da turma mudariam se todo mundo já soubesse, desde a Rodada 2, que o documento era falso?',
      'O "Círculo de Vargas" e o "Alto-comando militar" tinham o maior peso do jogo. Eles também foram os que menos investigaram a origem do documento?',
      'A Constituição de 1937 deu ao presidente o poder de "decretar o estado de guerra". Uma lei real e uma ameaça falsa produziram, juntas, oito anos de ditadura — o que isso ensina sobre onde mora o perigo: na lei, na mentira, ou na combinação das duas?',
    ],
    perguntasReflexao: [
      {
        nivel: 'Sua experiência',
        pergunta: 'Seu papel chegou a desconfiar do documento em algum momento — ou aceitou ele como verdadeiro até o fim?',
      },
      {
        nivel: 'O conceito',
        pergunta: 'O Plano Cohen era falso, mas o Estado Novo que ele ajudou a justificar durou oito anos de verdade. O que isso ensina sobre a diferença entre uma mentira ser desmentida e uma mentira deixar de fazer efeito?',
      },
      {
        nivel: 'Além desta aula',
        pergunta: 'Pensando em como informação circula hoje — o que, nesse episódio de 1937, ainda se parece com alguma coisa que você já viu acontecer?',
      },
    ],
  },
}
