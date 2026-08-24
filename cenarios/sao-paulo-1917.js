// São Paulo, 1917 — cenário da 2ª série (GDD v2, seção 8)
//
// STATUS (2026-08-23): as 5 rodadas estão escritas, e todos os 5 campos
// `fonte` principais são documentais — o livro do 2º ano (Aula 2, 3 e 4)
// cobre a origem da greve e a pauta das mulheres; o artigo completo de
// TOLEDO, E. "Um ano extraordinário: greves, revoltas e circulação de
// ideias no Brasil em 1917" (Estudos Históricos, 2017), enviado pelo
// professor, cobre o resto — a morte de José Gimenez Martinez, o cortejo,
// a pauta completa do Comitê e os termos do acordo. Alguns fragmentos
// menores de ambientação (o que se fala no galpão, o murmúrio patronal, os
// dois boatos) continuam `natureza: 'recriada'` porque são flavor text, não
// fatos historiográficos — isso é o esperado, não uma lacuna.
//
// Toda opção declara `consequencia`: uma ou duas frases mostrando o efeito
// concreto da escolha, não o conceito histórico por trás dela — o nome
// (liberalismo oligárquico, greve geral, etc.) só aparece no textoFecho.
// É o currículo invertido (seção 3 do GDD) aplicado opção por opção.
//
// Isso NÃO é o protótipo completo descrito na seção 16 do GDD (esse
// protótipo não foi encontrado em lugar nenhum acessível; construímos do
// zero, ver docs/GDD-v2-modulo-simulacoes.md).
export default {
  slug: 'sao-paulo-1917',
  versao: 3,
  serie: '2a',
  titulo: 'São Paulo, 1917',
  pergunta: 'Quem foi que decidiu que o pão ia custar o dobro?',
  introducao:
    'A Primeira Guerra Mundial, do outro lado do Atlântico, encareceu tudo no Brasil — e São ' +
    'Paulo virou a maior cidade industrial do país às custas de operários que ganham cada vez ' +
    'menos para trabalhar cada vez mais. Nos bairros da Mooca e do Brás, imigrantes e ' +
    'migrantes internos dividem galpões de tijolo com máquinas de tear. Em junho de 1917, ' +
    'ninguém imagina que uma fábrica parada vai virar a primeira greve geral da história do ' +
    'Brasil — e que o resultado dela vai depender de decisões como as que você está prestes a tomar.',
  era: 'republica',
  aulasRelacionadas: [2, 3, 4],

  indicadores: [
    { slug: 'carestia', nome: 'Carestia', inicial: 70, faixas: ['suportável', 'pesada', 'fome'] },
    { slug: 'producao', nome: 'Produção nas fábricas', inicial: 80, faixas: ['parada', 'reduzida', 'plena'] },
    { slug: 'coesao', nome: 'Coesão operária', inicial: 25, faixas: ['dispersa', 'articulada', 'greve geral'] },
    { slug: 'repressao', nome: 'Repressão', inicial: 40, faixas: ['contida', 'ostensiva', 'violenta'] },
    { slug: 'opiniao', nome: 'Opinião pública', inicial: 45, faixas: ['contra os grevistas', 'dividida', 'a favor'] },
    // Par revelado "só no fecho" (seção 8.2 do GDD): ambos começam em 0 e só
    // se mexem na R5. `direitos_papel` sobe por efeitoFixo (o acordo de 20%
    // é fato histórico, não escolha da turma); `direitos_cumprido` sobe ou
    // não conforme as decisões de quem tinha o poder de cumprir o combinado.
    { slug: 'direitos_papel', nome: 'Direitos no papel', inicial: 0, faixas: ['nenhum', 'parcial', 'pleno'] },
    { slug: 'direitos_cumprido', nome: 'Direitos cumpridos', inicial: 0, faixas: ['nenhum', 'parcial', 'pleno'] },
  ],

  papeis: [
    {
      slug: 'coronel-cafe', nome: 'Fazendeiro de café / coronel', bloco: 'elite', peso: 6, cota: 3,
      perguntaGuia: 'O que garante meu lucro: o preço ou o voto?',
      contexto: 'Sua renda vem do café que sai pelo porto de Santos. A guerra na Europa bagunçou o câmbio, e uma fábrica parada na cidade não é, a princípio, problema seu — até virar.',
      icone: '/imagens/sao-paulo-1917/papeis/coronel-cafe.jpg',
    },
    {
      slug: 'industrial-textil', nome: 'Industrial têxtil', bloco: 'elite', peso: 6, cota: 3,
      perguntaGuia: 'Até onde a máquina aguenta parar?',
      contexto: 'O Cotonifício Crespi é uma das maiores fábricas da Mooca. Você tem contrato de fornecimento para cumprir e um turno noturno que criou para dar conta da demanda da guerra.',
      icone: '/imagens/sao-paulo-1917/papeis/industrial-textil.jpg',
    },
    {
      slug: 'autoridade-estadual', nome: 'Autoridade estadual / Força Pública', bloco: 'elite', peso: 8, cota: 2,
      perguntaGuia: 'Ordem para quem?',
      contexto: 'Sua função é impedir que uma parede de 400 operários vire uma cidade parada. Em junho de 1917, ainda dá para tratar isso como caso de polícia local.',
      icone: '/imagens/sao-paulo-1917/papeis/autoridade-estadual.jpg',
    },
    {
      slug: 'grande-imprensa', nome: 'Grande imprensa', bloco: 'mediador', peso: 4, cota: 2,
      perguntaGuia: 'Notícia ou mediação?',
      contexto: 'Seu jornal chega às casas da elite paulistana. Uma greve de fábrica é, por enquanto, nota de pé de página — a questão é se ela vai continuar sendo.',
      icone: '/imagens/sao-paulo-1917/papeis/grande-imprensa.jpg',
    },
    {
      slug: 'imprensa-operaria', nome: 'Imprensa operária', bloco: 'mediador', peso: 2, cota: 2,
      perguntaGuia: 'Denunciar ou organizar?',
      contexto: 'Você escreve para A Plebe. Ninguém na Mooca depende de você para saber que o horário aumentou — mas todo mundo depende de você para saber que não está sozinho.',
      icone: '/imagens/sao-paulo-1917/papeis/imprensa-operaria.jpg',
    },
    {
      slug: 'operaria-textil', nome: 'Operária têxtil', bloco: 'popular', peso: 1, cota: 8,
      perguntaGuia: 'Por que meu salário é menor pela mesma máquina?',
      contexto: 'Você trabalha no Crespi. O turno da noite começou há pouco, o aluguel do cortiço subiu de novo, e a mesma máquina que você opera rende menos no seu contracheque do que no de um homem.',
      icone: '/imagens/sao-paulo-1917/papeis/operaria-textil.jpg',
    },
    {
      slug: 'operario-imigrante', nome: 'Operário imigrante', bloco: 'popular', peso: 1, cota: 10,
      perguntaGuia: 'Greve me dá direito ou passagem de volta?',
      contexto: 'Você veio de longe para trabalhar nessa fábrica. Ter seu nome numa lista de grevistas pode significar solidariedade — ou, se a coisa piorar, virar motivo de deportação.',
      icone: '/imagens/sao-paulo-1917/papeis/operario-imigrante.jpg',
    },
  ],

  rodadas: [
    {
      slug: 'preco-do-pao',
      titulo: 'O preço do pão',
      amplitude: 25,
      cena:
        'Junho de 1917. No bairro da Mooca, zona leste de São Paulo, o Cotonifício Crespi ' +
        'aumentou o turno noturno para dar conta da produção — a guerra na Europa disparou a ' +
        'demanda e também o preço de tudo. No dia 8, cerca de 400 operários pararam, reunidos ' +
        'pela Liga Operária da Mooca, pedindo 15 a 20% de aumento e o fim do turno da noite. A ' +
        'fábrica ameaçou demitir todo mundo. Ninguém, ainda, sabe se isso vai passar de um caso ' +
        'isolado.',
      fonte: {
        texto:
          'Em julho de 1917, uma greve de enormes proporções, envolvendo cerca de 100 mil ' +
          'trabalhadores, homens, mulheres e crianças, paralisou São Paulo [...]. A greve teve ' +
          'início no bairro da Mooca [...] no Cotonifício Crespi, no dia 8 de junho de 1917. Na ' +
          'fábrica Crespi, cerca de 400 operários iniciaram o movimento reivindicando um ' +
          'aumento salarial de 15 a 20% e protestando contra a extensão do horário de trabalho ' +
          'noturno [...]. A paralisação foi decidida pelos operários da fábrica, reunidos na ' +
          'Liga Operária da Mooca.',
        autor: 'TOLEDO, E. "Um ano extraordinário: greves, revoltas e circulação de ideias no Brasil em 1917." Estudos Históricos, Rio de Janeiro, v. 30, n. 61, p. 497-518, 2017.',
        acervo: 'Livro do 2º ano, Aula 3',
        natureza: 'documental',
      },
      contexto:
        'O Crespi não é a única fábrica sob essa tensão — a carestia da guerra aperta salários ' +
        'na cidade inteira. O mesmo cálculo que se faz na Mooca hoje vai se repetir em outras ' +
        'fábricas nas semanas seguintes: no fim do mês, os 1.600 operários da fábrica Ipiranga, ' +
        'do libanês Nami Jafet, também vão parar. (TOLEDO, 2017)',
      imagemContexto: {
        arquivo: '/imagens/sao-paulo-1917/preco-do-pao-enquanto-isso.jpg',
        onde: 'Foto fornecida pelo professor — acervo/fonte a confirmar.',
        porPapel: {
          'autoridade-estadual': {
            arquivo: '/imagens/sao-paulo-1917/preco-do-pao-policia.jpg',
            onde: 'Foto fornecida pelo professor — acervo/fonte a confirmar.',
          },
        },
      },
      imagemSugerida: {
        descricao:
          'O Cotonifício Crespi na Mooca — galpão de tijolo aparente ocupando um quarteirão inteiro, chaminés altas, fileira de janelas idênticas.',
        arquivo: '/imagens/sao-paulo-1917/preco-do-pao.jpg',
        onde: 'Foto fornecida pelo professor — acervo/fonte a confirmar.',
      },
      investigacao: {
        olhar:
          'O bonde que leva os operários até a fábrica é conhecido como "caradura" — lotado, ' +
          'barulhento, o mesmo trajeto todo santo dia. Da janela dá para ver as chaminés da ' +
          'Mooca, uma atrás da outra, e o movimento de quem troca o turno.',
        fontes: [
          {
            slug: 'bonde-carreira',
            tipo: 'olhar',
            titulo: 'O bonde "caradura"',
            papeis: ['operaria-textil', 'operario-imigrante', 'imprensa-operaria'],
            trecho:
              'Fotografia do bonde operário da Mooca, conhecido como "caradura" por levar os ' +
              'trabalhadores lotados até as fábricas. Datada de 1916, um ano antes da greve.',
            autor: 'Guilherme Gaensly (fotógrafo), 1916 — acervo do Instituto Moreira Salles.',
            acervo: 'Livro do 2º ano, Aula 3',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'autoritarismo-clientelismo',
            tipo: 'ler',
            titulo: 'Sobre o autoritarismo brasileiro',
            papeis: ['coronel-cafe', 'autoridade-estadual', 'grande-imprensa'],
            trecho:
              'Persistirá no Brasil um sério déficit republicano enquanto práticas patrimoniais ' +
              'e clientelistas continuarem a imperar no interior do nosso sistema político [...]. ' +
              'Sobretudo para os setores vulneráveis da sociedade, a regra democrática permanece ' +
              'muitas vezes suspensa no país.',
            autor: 'SCHWARCZ, L. M. Sobre o autoritarismo brasileiro. São Paulo: Companhia das Letras, 2019.',
            acervo: 'Livro do 2º ano, Aula 2',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'galpao-conversa',
            tipo: 'ouvir',
            titulo: 'O que se fala no galpão',
            papeis: ['operaria-textil', 'operario-imigrante'],
            trecho:
              '"Dizem que se a gente parar todo mundo junto, não tem jeito de mandar embora ' +
              'quatrocentos de uma vez. Mas se for só a nossa sala, é a nossa vaga que vai pra ' +
              'rua amanhã."',
            acervo: 'Reconstituição — não é um documento de época, é a fala típica de galpão que os ' +
              'relatos de sindicalistas e a imprensa operária do período registram sobre o cálculo ' +
              'que cada operário fazia antes de aderir.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'cambio-guerra',
            tipo: 'ler',
            titulo: 'O câmbio em tempo de guerra',
            papeis: ['coronel-cafe', 'industrial-textil'],
            trecho:
              'Telegrama resumido: com a guerra na Europa, o frete marítimo triplicou e o câmbio ' +
              'oscila semana a semana. O café ainda sai pelo porto, mas cada vez mais caro para ' +
              'embarcar — e o custo de importar máquina e insumo têxtil sobe junto.',
            acervo: 'Reconstituição — dramatiza um fato real e creditado do livro (a Primeira Guerra ' +
              'Mundial como causa da alta inflação e da carestia no período), sem forjar um ' +
              'documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        'operaria-textil': [
          {
            slug: 'reclamar-contramestra',
            texto: 'Reclamar formalmente à contramestra',
            deltas: { coesao: 2 },
            consequencia: 'A contramestra ouve, anota num papel que ninguém mais vai ler, e a conversa acaba ali. Nada muda no turno de amanhã — mas ficou registrado que você reclamou.',
          },
          {
            slug: 'lista-assinaturas',
            texto: 'Assinar a lista que corre no galpão pedindo aumento e fim do turno da noite',
            deltas: { coesao: 10, repressao: 3 },
            consequencia: 'Seu nome fica ao lado de outros na mesma lista, visível para quem quiser conferir. Amanhã, quem passar pela contramestra vai saber quem assinou primeiro.',
          },
          {
            slug: 'aceitar-hora-extra',
            texto: 'Aceitar a hora extra oferecida em vez de aderir',
            deltas: { carestia: -3, coesao: -5, producao: 5 },
            consequencia: 'O contracheque desta semana vem um pouco mais gordo. Também vem mais silencioso: quem aceitou a hora extra não está na roda de quem está organizando a lista.',
          },
        ],
        'operario-imigrante': [
          {
            slug: 'juntar-lista',
            texto: 'Juntar-se à lista de assinaturas',
            deltas: { coesao: 8, repressao: 2 },
            consequencia: 'Seu nome, ao lado de outros, agora está numa lista que a fábrica pode ler. Você calculou o risco e decidiu que valia — mas o cálculo não terminou aqui.',
          },
          {
            slug: 'cabeca-baixa',
            texto: 'Manter a cabeça baixa — o risco de ser mandado embora, ou pior, é maior para quem não nasceu aqui',
            deltas: { coesao: -5 },
            consequencia: 'Ninguém te aponta o dedo, ninguém te chama de covarde. Mas na hora do intervalo, sua mesa fica mais vazia do que a dos que assinaram.',
          },
          {
            slug: 'carta-familia',
            texto: 'Escrever para a família contando o que está acontecendo, sem se comprometer publicamente ainda',
            deltas: { coesao: 1 },
            consequencia: 'A carta vai no correio da tarde. Vai levar semanas para chegar — e quando chegar, o que você contar já vai estar ultrapassado.',
          },
        ],
        'industrial-textil': [
          {
            slug: 'reduzir-turno',
            texto: 'Reduzir o turno noturno',
            deltas: { producao: -8, coesao: -6, opiniao: 3 },
            consequencia: 'A produção cai visivelmente já na primeira noite sem o turno extra. Mas o galpão fica mais calmo — e menos gente fala em greve na hora do almoço.',
          },
          {
            slug: 'demitir-agitadores',
            texto: 'Demitir quem está organizando a lista',
            deltas: { coesao: 12, repressao: 5, opiniao: -5 },
            consequencia: 'Dois nomes saem da folha de pagamento ainda hoje. No galpão, o efeito é o oposto do esperado: quem ainda não tinha decidido nada, decide agora.',
          },
          {
            slug: 'aumentar-5-proibir',
            texto: 'Conceder 5% de aumento e proibir reuniões dentro da fábrica',
            deltas: { carestia: -2, coesao: 4, repressao: 3 },
            consequencia: 'O aumento de 5% aparece no próximo contracheque — bem abaixo dos 15-20% pedidos. A proibição de reunião aparece também, num aviso colado na parede.',
          },
        ],
        'coronel-cafe': [
          {
            slug: 'segurar-preco-saca',
            texto: 'Segurar o preço da saca de café à espera de melhor câmbio',
            deltas: { carestia: 2, opiniao: -2 },
            consequencia: 'A saca de café fica parada no armazém à espera de melhor câmbio. No mercado da cidade, o preço do pão não sente diferença nenhuma — não era ali que estava o problema.',
          },
          {
            slug: 'pressionar-cambio',
            texto: 'Pressionar o governo estadual por câmbio favorável às exportações',
            deltas: { carestia: -3, producao: 2 },
            consequencia: 'Um telegrama sai para o governo estadual ainda hoje. A resposta, se vier, vai demorar semanas — e a fábrica não tem esse tempo todo.',
          },
          {
            slug: 'apoiar-industriais',
            texto: 'Declarar apoio público aos industriais contra "a desordem"',
            deltas: { repressao: 3, opiniao: -3 },
            consequencia: 'Sua declaração sai no jornal de amanhã, ao lado do nome dos industriais. Publicamente, você escolheu um lado antes de qualquer acordo ser tentado.',
          },
        ],
        'autoridade-estadual': [
          {
            slug: 'monitorar',
            texto: 'Monitorar discretamente, sem intervir ainda',
            deltas: { repressao: 1 },
            consequencia: 'Um relatório discreto sobe para o gabinete do secretário. Na rua, nada muda — ainda.',
          },
          {
            slug: 'avisar-fabrica',
            texto: 'Avisar a fábrica para resolver internamente antes que vire caso de polícia',
            deltas: { repressao: 2, opiniao: 1 },
            consequencia: 'O recado chega à direção da fábrica por um canal informal. Formalmente, a Força Pública não fez nada; na prática, ela já escolheu de que lado vai ficar se a coisa esquentar.',
          },
          {
            slug: 'mobilizar-forca-publica',
            texto: 'Mobilizar a Força Pública preventivamente na Mooca',
            deltas: { repressao: 8, coesao: 3 },
            consequencia: 'Um pelotão aparece na Mooca antes de qualquer confronto ter acontecido. Para os operários, a mensagem chega antes de qualquer discurso: a polícia já decidiu quem é a ameaça.',
          },
        ],
        'grande-imprensa': [
          {
            slug: 'nota-local',
            texto: 'Publicar como incidente local, sem destaque',
            deltas: { opiniao: 1, coesao: -1 },
            consequencia: 'Três linhas na página cinco, sem foto. Quem não mora na Mooca provavelmente nem vai notar que aconteceu alguma coisa.',
          },
          {
            slug: 'ignorar',
            texto: 'Não publicar nada por enquanto',
            deltas: { coesao: -2 },
            consequencia: 'A edição de amanhã não menciona o Crespi. Para o leitor da capital, a fábrica continua funcionando normalmente — porque, para ele, nada aconteceu.',
          },
          {
            slug: 'reportar-parada',
            texto: 'Reportar a paralisação como fato, sem tomar partido declarado',
            deltas: { opiniao: 2, coesao: 2 },
            consequencia: 'A notícia sai em coluna própria, com números: 400 operários, aumento pedido, ameaça de demissão. É a primeira vez que gente de fora da Mooca lê sobre isso.',
          },
        ],
        'imprensa-operaria': [
          {
            slug: 'noticiar-a-plebe',
            texto: 'Noticiar o movimento nas páginas de A Plebe',
            deltas: { coesao: 10, repressao: 4 },
            consequencia: 'A edição desta semana de A Plebe estampa a paralisação na capa. Poucos milhares de exemplares — mas circulam exatamente onde precisam circular.',
          },
          {
            slug: 'convocar-solidariedade',
            texto: 'Convocar outras categorias a se solidarizarem',
            deltas: { coesao: 14, repressao: 5 },
            consequencia: 'O texto pede que outras fábricas parem em solidariedade. Ainda não há resposta, mas a pergunta agora está circulando fora da Mooca.',
          },
          {
            slug: 'aguardar',
            texto: 'Aguardar mais informações antes de publicar',
            deltas: { coesao: 2 },
            consequencia: 'Nenhuma linha sai esta semana. Quando A Plebe finalmente publicar, os fatos já vão ter avançado sem ela.',
          },
        ],
      },
    },

    {
      slug: 'nove-de-julho',
      titulo: '9 de julho',
      amplitude: 25,
      cena:
        '9 de julho de 1917. A tensão que vinha crescendo desde a Mooca chega ao centro. Num ' +
        'confronto entre grevistas e a Força Pública, o sapateiro José Martinez é baleado e ' +
        'morre. A notícia corre mais rápido do que qualquer jornal consegue imprimir.',
      efeitosFixos: { repressao: 8, coesao: 5 },
      fonte: {
        texto:
          'Se os operários morrem à mingua e se lamentam, que vão queixar-se a virgem dos ' +
          'desamparados; se reclamam e protestam ahi está a polícia, o exercito, a armada e ' +
          'todo aparelho legalitario [...]. O operariado realiza, portanto, uma obra justiceira ' +
          'conquistando pela gréve ou outros meios de acção directa tudo quanto lhe é ' +
          'extorquido, roubado legal ou illegalmente. [...] O movimento deve generalizar-se a ' +
          'todas as classes, alastrar-se por todo o paiz. (Grafia original.)',
        autor: 'BIBLIOTECA DIGITAL UNESP. "O porquê das greves." A Plebe, São Paulo, ano 1, n. 5, 09 jul. 1917.',
        acervo: 'Livro do 2º ano, Aula 3',
        natureza: 'documental',
      },
      contexto:
        'A cidade inteira sente o confronto. A tipografia de A Plebe é invadida e destruída, seu ' +
        'diretor Edgard Leuenroth é preso. Alguns dias antes, em 3 de julho, os socialistas do ' +
        'jornal Avanti! já tinham distribuído 10 mil cópias de um manifesto convocando a ' +
        'população a se solidarizar com os grevistas — a rede que sustenta o movimento é maior ' +
        'do que uma fábrica sozinha. (TOLEDO, 2017)',
      imagemSugerida: {
        descricao:
          'Um cordão de soldados da Força Pública enfileirados numa rua estreita do centro, de costas para o fotógrafo — a tropa formada antes de qualquer confronto acontecer.',
        arquivo: '/imagens/sao-paulo-1917/martinez-foto.jpg',
        onde: 'Foto fornecida pelo professor — acervo/fonte a confirmar.',
      },
      investigacao: {
        olhar:
          'Fumaça de algum lugar perto da linha do trem. Gente correndo em direções opostas — ' +
          'uns fugindo, outros indo ver o que houve. Um cordão de soldados da Força Pública se ' +
          'forma na esquina, calado.',
        fontes: [
          {
            slug: 'prisoes-operarios',
            tipo: 'ler',
            titulo: 'Prisões de operários',
            papeis: ['imprensa-operaria', 'operaria-textil', 'operario-imigrante'],
            trecho:
              'A constituição republicana é uma burla. Está em scena a heroica policia de S. ' +
              'Paulo. Numerosas prisões de operarios. Assalto à typographia onde se imprime A ' +
              'PLEBE e ás Ligas operarias [...]. A prisão do nosso director Edgard Leuenroth. O ' +
              'Centro Libertario è violentamente assaltado. (Grafia original.)',
            autor: 'A Plebe, São Paulo, 1917.',
            acervo: 'Livro do 2º ano, Aula 3',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'relato-confronto',
            tipo: 'ler',
            titulo: 'Quem era José Gimenez Martinez',
            papeis: ['operaria-textil', 'operario-imigrante', 'imprensa-operaria'],
            trecho:
              'José Gimenez Martinez foi apenas uma das vítimas dos protestos, que chegaram a ' +
              'cerca de 200, segundo a investigação realizada pelo jornal Fanfulla no cemitério ' +
              'do Araçá nas noites de 15 e 16 de julho, quando a polícia fechou o cemitério para ' +
              'transportar os cadáveres.',
            autor: 'TOLEDO, E. "Um ano extraordinário: greves, revoltas e circulação de ideias no Brasil em 1917." Estudos Históricos, Rio de Janeiro, v. 30, n. 61, p. 497-518, 2017.',
            acervo: 'Artigo acadêmico completo, enviado pelo professor em 2026-08-23.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'relatorio-forca-publica',
            tipo: 'ler',
            titulo: 'Relatório da Força Pública',
            papeis: ['autoridade-estadual', 'coronel-cafe', 'grande-imprensa'],
            trecho:
              'Comunicamos que a tropa agiu em legítima defesa diante de manifestantes que ' +
              'arremessavam pedras. Lamenta-se a perda de uma vida, mas a ordem pública precisa ' +
              'ser restabelecida sem demora.',
            acervo: 'Reconstituição de um documento oficial típico do período — não é a transcrição de ' +
              'um relatório real.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'boato-incendio',
            tipo: 'ouvir',
            titulo: '"Vão incendiar a fábrica esta noite"',
            papeis: ['industrial-textil', 'coronel-cafe', 'autoridade-estadual'],
            trecho:
              'Chegou aos ouvidos do patrão que os grevistas mais exaltados planejam atear fogo ' +
              'no Cotonifício ainda esta noite, em resposta à morte de Martinez.',
            acervo: 'Boato — nenhum incêndio a fábricas ocorreu durante a Greve Geral de 1917.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho:
              'Boato. Nenhuma fábrica foi incendiada em 1917 — o medo de que isso acontecesse é que ' +
              'foi real, e moveu decisões de gente que nunca chegou a ser ameaçada de verdade.',
          },
        ],
      },
      opcoesPorPapel: {
        'operaria-textil': [
          {
            slug: 'parar-em-luto',
            texto: 'Parar o trabalho em luto e protesto',
            deltas: { coesao: 12, repressao: 3 },
            consequencia: 'O galpão inteiro para, sem que ninguém precisasse dar ordem. É o primeiro dia, desde que a greve começou, em que a fábrica fica de fato vazia.',
          },
          {
            slug: 'trabalhar-com-medo',
            texto: 'Continuar trabalhando, com medo do que pode vir',
            deltas: { coesao: -4 },
            consequencia: 'As máquinas continuam ligadas, mas ninguém fala mais alto que o barulho delas. Todo mundo ouviu a notícia; poucos disseram alguma coisa em voz alta.',
          },
          {
            slug: 'cuidar-feridos',
            texto: 'Deixar o posto para ajudar quem ficou ferido',
            deltas: { coesao: 4, opiniao: 2 },
            consequencia: 'Você passa a tarde ajudando a carregar quem foi atingido. Não é o gesto mais visível da rodada, mas é o que alguém vai lembrar por mais tempo.',
          },
        ],
        'operario-imigrante': [
          {
            slug: 'aderir-risco',
            texto: 'Aderir ao protesto, mesmo sabendo o que uma ficha na polícia pode significar',
            deltas: { coesao: 10, repressao: 3 },
            consequencia: 'Você entra na rua sabendo que seu nome pode acabar numa ficha diferente da dos colegas nascidos aqui. Foi mesmo assim que você decidiu.',
          },
          {
            slug: 'manter-distancia',
            texto: 'Manter distância — muito a perder se for preso ou marcado',
            deltas: { coesao: -6 },
            consequencia: 'Você fica dentro de casa com a porta fechada. Ninguém te culpa — mas ninguém te procura depois, também.',
          },
          {
            slug: 'espalhar-noticia',
            texto: 'Espalhar a notícia entre outros imigrantes, sem se expor na rua',
            deltas: { coesao: 3 },
            consequencia: 'A notícia da morte de Martinez chega a outras pensões de imigrantes pela sua boca, baixinho, de porta em porta.',
          },
        ],
        'industrial-textil': [
          {
            slug: 'fechar-temporariamente',
            texto: 'Fechar a fábrica temporariamente',
            deltas: { producao: -10, repressao: -2, opiniao: 2 },
            consequencia: 'Os portões fecham por hoje. É a primeira vez que a fábrica reconhece, mesmo sem dizer isso em voz alta, que a situação mudou de patamar.',
          },
          {
            slug: 'pedir-protecao-reforcada',
            texto: 'Pedir reforço policial na porta da fábrica',
            deltas: { repressao: 6, coesao: 3 },
            consequencia: 'Mais policiais aparecem na porta ainda essa tarde. Para você, é segurança; para quem está do lado de fora do portão, é mais um sinal de para que lado a força pública está olhando.',
          },
          {
            slug: 'comissao-negociacao',
            texto: 'Aceitar receber uma comissão de operários para negociar',
            deltas: { coesao: 2, opiniao: 3 },
            consequencia: 'Você aceita ouvir uma comissão de operários pela primeira vez desde que a greve começou. Não prometeu nada — mas sentou à mesa, e isso já é notícia dentro da fábrica.',
          },
        ],
        'coronel-cafe': [
          {
            slug: 'pressionar-fim-rapido',
            texto: 'Pressionar por um fim rápido — a paralisação já ameaça o escoamento do café',
            deltas: { repressao: -2, opiniao: 1 },
            consequencia: 'Sua pressão chega ao governo estadual pelo canal de sempre — o telefone, não o jornal. Ninguém vai saber que foi você, exceto quem precisa saber.',
          },
          {
            slug: 'manter-distancia-cafe',
            texto: 'Manter distância — problema da cidade, não do campo',
            deltas: { opiniao: -1 },
            consequencia: 'Você não se pronuncia. No café da manhã, alguém comenta que "isso é problema de cidade" — e ninguém discorda.',
          },
          {
            slug: 'apoiar-linha-dura',
            texto: 'Apoiar publicamente a linha dura do governo',
            deltas: { repressao: 5, opiniao: -4 },
            consequencia: 'Sua declaração de apoio à repressão sai ao lado da notícia da morte de Martinez. As duas coisas, lado a lado, não passam despercebidas.',
          },
        ],
        'autoridade-estadual': [
          {
            slug: 'reconhecer-excesso',
            texto: 'Reconhecer publicamente o excesso e recuar',
            deltas: { repressao: -8, opiniao: 5 },
            consequencia: 'O comunicado reconhecendo o excesso sai ainda hoje. É raro, e por isso mesmo é notícia — mas não traz Martinez de volta.',
          },
          {
            slug: 'reforcar-tropa',
            texto: 'Reforçar a tropa nas ruas',
            deltas: { repressao: 10, coesao: 4 },
            consequencia: 'Mais soldados chegam à região ainda essa noite. A cidade que estava tensa passa a estar ocupada.',
          },
          {
            slug: 'abrir-investigacao',
            texto: 'Abrir uma investigação, sem mudar nada na rua por enquanto',
            deltas: { opiniao: 1, repressao: 2 },
            consequencia: 'Uma investigação é aberta, sem prazo anunciado. Nas ruas, ninguém para de protestar esperando o resultado.',
          },
        ],
        'grande-imprensa': [
          {
            slug: 'manchete-baderna',
            texto: 'Estampar manchete de "baderna" e desordem',
            deltas: { opiniao: -4, coesao: -2 },
            consequencia: 'A manchete de amanhã fala em "desordem" e "baderna". Quem perdeu alguém não se reconhece nela.',
          },
          {
            slug: 'manchete-assassinato',
            texto: 'Estampar manchete de "assassinato" e repressão policial',
            deltas: { opiniao: 5, coesao: 3, repressao: 2 },
            consequencia: 'A palavra "assassinato" aparece impressa pela primeira vez num jornal da grande imprensa. É um risco editorial que a redação sabe que está correndo.',
          },
          {
            slug: 'cobertura-factual',
            texto: 'Cobrir os fatos sem adjetivos, deixando o leitor tirar conclusões',
            deltas: { opiniao: 1 },
            consequencia: 'A matéria de amanhã traz hora, local e o que se sabe, sem adjetivo nenhum. Para uns, é covardia; para outros, o único jeito responsável de escrever sem saber tudo ainda.',
          },
        ],
        'imprensa-operaria': [
          {
            slug: 'convocar-cortejo',
            texto: 'Convocar publicamente o cortejo fúnebre como ato político',
            deltas: { coesao: 14, repressao: 3 },
            consequencia: 'A convocação para o cortejo sai ainda hoje, impressa às pressas. Amanhã, ela vai estar nas mãos de gente que nunca leu A Plebe antes.',
          },
          {
            slug: 'pedir-resposta-dura',
            texto: 'Pedir resposta à altura — inclusive fora da lei',
            deltas: { coesao: 8, repressao: 10, opiniao: -3 },
            consequencia: 'O texto fala em resposta "à altura". É a linha mais radical que A Plebe publicou até agora — e a Força Pública também vai lê-la.',
          },
          {
            slug: 'pedir-calma',
            texto: 'Pedir calma, para não dar pretexto a mais repressão',
            deltas: { coesao: 2, repressao: -2 },
            consequencia: 'O apelo à calma sai ao lado da notícia da morte. Nem todo leitor vai concordar que calma é a resposta certa para hoje.',
          },
        ],
      },
    },

    {
      slug: 'o-cortejo',
      titulo: 'O cortejo',
      amplitude: 35,
      efeitosFixos: { coesao: 15 },
      cena:
        'O funeral de José Gimenez Martinez — sapateiro, anarquista espanhol de 21 anos, do ' +
        'grupo Jovens Incansáveis — vira o maior ato político que São Paulo já viu. Mais de 10 ' +
        'mil pessoas acompanham o cortejo por vários pontos da cidade até o cemitério do Araçá, ' +
        'parando várias vezes para comícios de rua. Nenhum papel consegue fingir que isso não ' +
        'está acontecendo.',
      fonte: {
        texto:
          'O ponto máximo da agitação foi atingido no enterro do sapateiro José Gimenez ' +
          'Martinez, um jovem militante anarquista espanhol, que tinha apenas 21 anos e fazia ' +
          'parte do grupo Jovens Incansáveis. Mais de 10 mil pessoas participaram do cortejo ' +
          'fúnebre, que seguiu por vários pontos da cidade até o cemitério do Araçá. O cortejo ' +
          'foi interrompido por vários comícios.',
        autor: 'TOLEDO, E. "Um ano extraordinário: greves, revoltas e circulação de ideias no Brasil em 1917." Estudos Históricos, Rio de Janeiro, v. 30, n. 61, p. 497-518, 2017.',
        acervo: 'Artigo acadêmico completo, enviado pelo professor em 2026-08-23.',
        natureza: 'documental',
      },
      contexto:
        'O cortejo não é feito só de operários têxteis — padeiro, sapateiro, gente que nunca ' +
        'pisou numa fábrica se junta à passagem. É o mesmo padrão que vai se repetir: dias ' +
        'depois, a greve batizada de "geral" chega ao seu pico com quase 44 mil operários ' +
        'parados de uma vez só — número que nenhuma fábrica isolada produz sozinha. (TOLEDO, 2017)',
      imagemSugerida: {
        descricao:
          'Multidão preenchendo uma rua do centro de São Paulo de calçada a calçada, vista de cima ou de longe, sem cartazes nem uniformes — só a escala da massa de gente.',
        arquivo: '/imagens/sao-paulo-1917/o-cortejo.jpg',
        onde: 'Ilustração gerada — cena genérica, não é reprodução de foto de época. Se quiser substituir por uma foto real, buscar em: acervo Fanfulla/Biblioteca Nacional Digital ou BIONDI, L. Classe e nação (2011), já referenciado por TOLEDO (2017).',
      },
      investigacao: {
        olhar:
          'Não dá para ver o fim da fila de gente, em nenhuma das duas direções. Alguém começa a ' +
          'cantar; outros seguem calados. As lojas do trajeto fecham as portas — por respeito, ou ' +
          'por medo, ninguém sabe dizer.',
        fontes: [
          {
            slug: 'janela-do-gabinete',
            tipo: 'olhar',
            titulo: 'Visto da janela do gabinete',
            papeis: ['autoridade-estadual', 'grande-imprensa', 'coronel-cafe', 'industrial-textil'],
            trecho:
              'De cima, a rua parece um rio que não acaba. Alguém no gabinete comenta baixinho ' +
              'que nunca tinha visto tanta gente parada ao mesmo tempo na cidade.',
            acervo: 'Reconstituição — ambientação, não citação de um documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'no-meio-do-cortejo',
            tipo: 'olhar',
            titulo: 'No meio do cortejo',
            papeis: ['operaria-textil', 'operario-imigrante', 'imprensa-operaria'],
            trecho:
              'Gente que você nunca viu na fábrica está ali do seu lado. Padeiro, sapateiro, ' +
              'costureira — o cortejo já não é só de quem trabalha no Crespi.',
            acervo: 'Reconstituição — ambientação, não citação de um documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        'operaria-textil': [
          {
            slug: 'participar-cortejo',
            texto: 'Sair da fila e entrar no cortejo',
            deltas: { coesao: 15, repressao: 2 },
            consequencia: 'Você sai da fila do trabalho e entra na fila do cortejo. São a mesma rua, mas hoje ela significa outra coisa.',
          },
          {
            slug: 'observar-distancia',
            texto: 'Observar da porta da fábrica, sem entrar no cortejo',
            deltas: { coesao: -3 },
            consequencia: 'Você vê o cortejo passar da porta da fábrica, sem entrar nele. De longe, dez mil pessoas parecem ainda maiores.',
          },
          {
            slug: 'ajudar-organizar-cortejo',
            texto: 'Ajudar a organizar a passagem do cortejo pelo seu bairro',
            deltas: { coesao: 10, repressao: 3 },
            consequencia: 'Você passa a manhã ajudando a organizar por onde o cortejo vai passar no seu bairro. Ninguém te pediu — mas alguém precisava fazer, e você fez.',
          },
        ],
        'operario-imigrante': [
          {
            slug: 'participar-cortejo-risco',
            texto: 'Entrar no cortejo, apesar do risco',
            deltas: { coesao: 15, repressao: 3 },
            consequencia: 'Você entra no meio de dez mil pessoas, sabendo que qualquer uma delas pode estar sendo observada por alguém que anota nomes.',
          },
          {
            slug: 'observar-de-longe',
            texto: 'Observar de longe — muito visível para quem pode ser deportado',
            deltas: { coesao: -4 },
            consequencia: 'Você acompanha de uma esquina, pronto para sumir se precisar. Está lá, mas não está — pelo menos não do jeito que conta.',
          },
          {
            slug: 'apoio-logistico',
            texto: 'Ajudar sem se expor na linha de frente (água, recados, abrigo)',
            deltas: { coesao: 6 },
            consequencia: 'Você passa água e leva recado sem nunca ficar na linha de frente de uma fotografia. O cortejo também precisa de gente assim.',
          },
        ],
        'industrial-textil': [
          {
            slug: 'fechar-por-respeito',
            texto: 'Fechar a fábrica — por respeito, ou por medo, tanto faz o motivo',
            deltas: { producao: -12, opiniao: 3 },
            consequencia: 'Os portões ficam fechados o dia inteiro. Não importa muito o motivo declarado — o que fica registrado é que, hoje, nem a fábrica tentou funcionar como se nada estivesse acontecendo.',
          },
          {
            slug: 'manter-seguranca-reforcada',
            texto: 'Manter a produção com segurança reforçada na porta',
            deltas: { repressao: 5, coesao: 4 },
            consequencia: 'As máquinas continuam ligadas enquanto a cidade inteira para lá fora. É uma escolha que vai ser lembrada dos dois lados.',
          },
          {
            slug: 'buscar-mediacao',
            texto: 'Buscar mediação através do comércio e da igreja local',
            deltas: { opiniao: 3, repressao: -2 },
            consequencia: 'Você procura o padre e um comerciante conhecido para tentar abrir um canal de conversa. Ainda não há resposta, mas o gesto foi notado.',
          },
        ],
        'coronel-cafe': [
          {
            slug: 'pressionar-acordo-rapido',
            texto: 'Usar sua influência para pressionar por um acordo rápido',
            deltas: { repressao: -3, opiniao: 2 },
            consequencia: 'Um telefonema seu chega ao gabinete estadual ainda hoje, pedindo pressa. Você não quer greve — quer normalidade, e sabe que elas não vêm juntas por enquanto.',
          },
          {
            slug: 'manter-irrelevante',
            texto: 'Continuar tratando como problema alheio',
            deltas: { opiniao: -2 },
            consequencia: 'Você segue tratando isso como assunto alheio, mesmo com dez mil pessoas nas ruas do centro. "Alheio" está ficando cada vez mais difícil de sustentar.',
          },
          {
            slug: 'usar-influencia-politica',
            texto: 'Acionar contatos no governo estadual para "resolver isso"',
            deltas: { repressao: 3, opiniao: -1 },
            consequencia: 'Seus contatos no governo recebem o recado. Não é público, mas move alguma coisa em algum gabinete.',
          },
        ],
        'autoridade-estadual': [
          {
            slug: 'recuar-de-vez',
            texto: 'Recuar de vez, prometer investigação e reformas',
            deltas: { repressao: -10, opiniao: 6 },
            consequencia: 'O comunicado de recuo sai antes mesmo do fim do cortejo. É a primeira vez, em semanas, que o governo parece estar reagindo em vez de empurrando.',
          },
          {
            slug: 'reprimir-cortejo',
            texto: 'Tentar dispersar o cortejo',
            deltas: { repressao: 15, coesao: 6, opiniao: -8 },
            consequencia: 'A ordem de dispersar sai — e não funciona como planejado. Tentar deter dez mil pessoas em luto produz exatamente a imagem que você queria evitar.',
          },
          {
            slug: 'pedir-mediacao-terceiros',
            texto: 'Pedir que a imprensa e o comércio ajudem a mediar',
            deltas: { opiniao: 3, repressao: -2 },
            consequencia: 'Você pede à imprensa e ao comércio que ajudem a encontrar uma saída. É admitir, sem dizer em voz alta, que sozinho o governo não está dando conta.',
          },
        ],
        'grande-imprensa': [
          {
            slug: 'mudar-tom',
            texto: 'Mudar o tom — não dá mais para tratar isso como nota de pé de página',
            deltas: { opiniao: 5, coesao: 2 },
            consequencia: 'A manchete de amanhã já não fala em "incidente". Alguma coisa mudou na redação também, não só na rua.',
          },
          {
            slug: 'continuar-minimizando',
            texto: 'Continuar minimizando a dimensão do fato',
            deltas: { opiniao: -4 },
            consequencia: 'A cobertura de amanhã segue no mesmo tom de sempre, como se dez mil pessoas nas ruas não fossem notícia maior que isso.',
          },
          {
            slug: 'buscar-equilibrio',
            texto: 'Buscar entrevistar autoridades para "equilibrar" a cobertura',
            deltas: { opiniao: 1 },
            consequencia: 'Você tenta uma frase de autoridade ao lado do relato do cortejo. O "equilíbrio" sai mais parecido com indecisão.',
          },
        ],
        'imprensa-operaria': [
          {
            slug: 'convocar-geral',
            texto: 'Transformar a cobertura em convocação para greve geral',
            deltas: { coesao: 18, repressao: 4 },
            consequencia: 'A convocação para greve geral sai ainda com a poeira do cortejo no ar. É o texto mais lido que A Plebe já publicou.',
          },
          {
            slug: 'registrar-testemunhos',
            texto: 'Registrar testemunhos do cortejo para a posteridade',
            deltas: { coesao: 5, opiniao: 2 },
            consequencia: 'Você anota nomes e falas de quem estava lá. Não muda nada amanhã — mas garante que alguém, um dia, vai poder contar isso de verdade.',
          },
          {
            slug: 'manter-tom-anterior',
            texto: 'Manter o mesmo tom de antes, sem inflamar mais',
            deltas: { coesao: 3 },
            consequencia: 'Você decide não inflamar mais o que já está inflamado. A escolha é prudente; também é uma escolha de não aproveitar o momento.',
          },
        ],
      },
    },

    {
      slug: 'comite-defesa-proletaria',
      titulo: 'O Comitê de Defesa Proletária',
      amplitude: 25,
      cena:
        'Com a cidade parada, lideranças sindicais e anarquistas — entre elas Edgard Leuenroth, ' +
        'diretor de A Plebe, e o socialista italiano Teodoro Monicelli, diretor do Avanti! — ' +
        'formam o Comitê de Defesa Proletária para negociar em nome dos grevistas, após ' +
        'consultar as entidades operárias sobre o que incluir na pauta.',
      fonte: {
        texto:
          'Eram elas: a libertação dos grevistas presos, o respeito "do modo mais absoluto" ao ' +
          'direito de associação para os trabalhadores, nenhuma demissão por participação na ' +
          'greve, a abolição do trabalho de menores de 14 anos, a proibição do trabalho noturno ' +
          'para menores de 18 anos, a abolição do trabalho noturno das mulheres, o aumento de ' +
          '35% para os salários inferiores a 5$000 e de 25% para os superiores, o pagamento ' +
          'pontual a cada 15 dias, a garantia de trabalho permanente aos operários, a jornada ' +
          'de oito horas, a semana inglesa e o aumento de 50% em todo trabalho extraordinário, ' +
          'o imediato barateamento dos gêneros de primeira necessidade [...] e a redução do ' +
          'preço dos aluguéis.',
        autor: 'A Plebe, São Paulo, 21 jul. 1917, apud TOLEDO, E. "Um ano extraordinário..." Estudos Históricos, Rio de Janeiro, v. 30, n. 61, 2017.',
        acervo: 'Artigo acadêmico completo, enviado pelo professor em 2026-08-23 — a pauta real do Comitê de Defesa Proletária de São Paulo, não um modelo comparável.',
        natureza: 'documental',
      },
      contexto:
        'Não é só em São Paulo. No mesmo mês, em 18 de julho, uma onda de greves toma o Rio de ' +
        'Janeiro — marceneiros, têxteis, sapateiros, padeiros, metalúrgicos — organizada pela ' +
        'Federação Operária do Rio de Janeiro, que pede salário mínimo e equiparação salarial ' +
        'entre homens e mulheres. A mesma pauta que está sendo escrita aqui surgiu, de forma ' +
        'independente, a centenas de quilômetros de distância. (TOLEDO, 2017)',
      imagemSugerida: {
        descricao:
          'Cena genérica de uma tipografia operária de jornal anarquista, 1917 — não é um retrato de Edgard Leuenroth (diretor real de A Plebe e figura central do Comitê): gerar IA de uma pessoa real e identificável falsificaria um documento. Se quiser mostrar o Leuenroth de verdade, use uma foto real dele (ver `onde`).',
        arquivo: '/imagens/sao-paulo-1917/comite-defesa-proletaria.jpg',
        onde: 'Retratos reais de Leuenroth circulam em acervos acadêmicos sobre o anarquismo paulista (ex.: KHOURY, Y. A. "Edgard Leuenroth, anarquismo e as esquerdas no Brasil", 2007, já citado por TOLEDO). Creditar a fonte da imagem ao publicar.',
      },
      investigacao: {
        olhar:
          'Numa mesa de bar improvisada em sede sindical, alguém escreve a lápis, risca, escreve ' +
          'de novo. Cada item que entra na lista é uma discussão.',
        fontes: [
          {
            slug: 'bases-acordo-1906',
            tipo: 'ler',
            titulo: 'Bases de Acordo da Confederação Operária Brasileira (1906)',
            papeis: ['operaria-textil', 'imprensa-operaria'],
            trecho:
              'Considerando que a causa principal da exploração exercida contra as mulheres [...] ' +
              'está no fato de lhes faltar coesão e solidariedade [...], o Congresso [...] ' +
              'convida e incita os sindicatos operários a envidar todos os esforços para ' +
              'organizar as mulheres e torná-las companheiras de luta, abolindo a concorrência ' +
              'que fazem, aliás ocasionada pela exploração burguesa, a qual paga pouco e exige ' +
              'muito.',
            autor: 'Confederação Operária Brasileira, aprovadas pelo Primeiro Congresso Operário Brasileiro (1906).',
            acervo: 'Livro do 2º ano, Aula 4',
            natureza: 'documental',
            confiavel: true,
            destrancaOpcao: 'propor-salario-igual',
          },
          {
            slug: 'terra-livre-mulheres',
            tipo: 'ler',
            titulo: 'Mulheres na luta de classes — "A Terra Livre"',
            papeis: ['operaria-textil', 'imprensa-operaria'],
            trecho:
              '"Devemos demonstrar, enfim, que somos capazes de exigir o que nos pertence; e se ' +
              'todas forem solidárias [...] nós começaremos por desmascarar a cupidez dos ' +
              'patrões." [...] "Não devemos [...] esperar que nos concedam o que nos pertence ' +
              'quando lhes agrade. Devemos tomá-lo por nossas mãos."',
            autor: 'A Terra Livre, 19 jul. e 15 ago. 1906, apud RAGO, M. Trabalho feminino e sexualidade. In: PRIORI, M.; BASSANEZI, C. (org.). História das mulheres no Brasil. São Paulo: Contexto, 2004.',
            acervo: 'Livro do 2º ano, Aula 4',
            natureza: 'documental',
            confiavel: true,
            destrancaOpcao: 'propor-salario-igual',
          },
          {
            slug: 'murmurio-patronal',
            tipo: 'ouvir',
            titulo: 'O que se murmura do outro lado',
            papeis: ['industrial-textil', 'coronel-cafe'],
            trecho:
              '"Se a gente começa a ceder item por item, esse Comitê vira sindicato permanente. ' +
              'Melhor negociar rápido e calado do que deixar isso virar rotina."',
            acervo: 'Reconstituição — fala típica atribuída à classe patronal, não uma citação de um indivíduo real.',
            natureza: 'recriada',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        'operaria-textil': [
          {
            slug: 'propor-salario-igual',
            texto: 'Propor que a pauta inclua salário igual para homens e mulheres',
            deltas: { coesao: 10, opiniao: 2 },
            consequencia: 'A proposta entra na ata da reunião. Alguns homens da própria categoria hesitam antes de apoiar — mas ela entra.',
          },
          {
            slug: 'propor-jornada-8h',
            texto: 'Propor jornada de 8 horas',
            deltas: { coesao: 6 },
            consequencia: 'A jornada de 8 horas entra na lista, ao lado de outros pedidos que a categoria já reivindica há anos.',
          },
          {
            slug: 'aceitar-pauta-pronta',
            texto: 'Aceitar a pauta que já está pronta, sem propor mudança',
            deltas: { coesao: -3 },
            consequencia: 'Você não propõe nada, e a pauta segue sem a sua marca. Alguém vai assinar por você, mesmo sem ter perguntado o que você queria.',
          },
        ],
        'operario-imigrante': [
          {
            slug: 'propor-fim-trabalho-infantil',
            texto: 'Propor o fim do trabalho de menores de 14 anos',
            deltas: { coesao: 8, opiniao: 3 },
            consequencia: 'A proposta entra na pauta sem muita discussão — quase todo mundo na sala já viu criança trabalhando na fábrica.',
          },
          {
            slug: 'propor-protecao-acidente',
            texto: 'Propor indenização integral em caso de acidente',
            deltas: { coesao: 6 },
            consequencia: 'Você pensa em quem já perdeu um dedo ou uma mão na máquina sem receber nada em troca. O item entra na lista.',
          },
          {
            slug: 'nao-participar-redacao',
            texto: 'Não participar da redação — deixar para quem tem mais experiência',
            deltas: { coesao: -4 },
            consequencia: 'Você fica de fora da redação, achando que não é o seu lugar. A pauta final não carrega nenhuma marca sua.',
          },
        ],
        'industrial-textil': [
          {
            slug: 'aceitar-negociar-pauta',
            texto: 'Aceitar negociar item a item com o Comitê',
            deltas: { opiniao: 4, repressao: -2 },
            consequencia: 'Você aceita sentar item por item com o Comitê. É a primeira vez que a palavra "negociar", e não "conceder", aparece do seu lado.',
          },
          {
            slug: 'recusar-legitimidade-comite',
            texto: 'Recusar reconhecer o Comitê como interlocutor legítimo',
            deltas: { coesao: 6, repressao: 3, opiniao: -4 },
            consequencia: 'Você declara publicamente que não reconhece o Comitê. A recusa não faz o Comitê desaparecer — só deixa você fora da mesa onde as decisões estão sendo tomadas.',
          },
          {
            slug: 'contraproposta-reduzida',
            texto: 'Oferecer contraproposta reduzida antes de qualquer reunião',
            deltas: { opiniao: 1 },
            consequencia: 'Você manda uma proposta bem menor que a pauta, antes de qualquer reunião de verdade acontecer. É uma abertura — mas uma abertura pequena.',
          },
        ],
        'coronel-cafe': [
          {
            slug: 'pressionar-acordo-pauta',
            texto: 'Pressionar por um acordo rápido para acabar com o caos',
            deltas: { opiniao: 2, repressao: -1 },
            consequencia: 'Sua pressão por um acordo rápido chega onde precisa chegar. Você não está preocupado com o conteúdo da pauta — só com o calendário.',
          },
          {
            slug: 'manter-distancia-pauta',
            texto: 'Manter distância — pauta de fábrica não é problema do campo',
            deltas: { opiniao: -1 },
            consequencia: 'Pauta de fábrica continua não sendo, para você, problema do campo. A distância que você mantém também é uma escolha.',
          },
          {
            slug: 'endurecer-pauta',
            texto: 'Endurecer — ceder à pauta abre precedente perigoso',
            deltas: { repressao: 4, opiniao: -3 },
            consequencia: 'Você defende publicamente que ceder agora é abrir um precedente perigoso. A frase circula — e desagrada tanto quem queria acordo rápido quanto quem queria pauta cheia.',
          },
        ],
        'autoridade-estadual': [
          {
            slug: 'reconhecer-comite',
            texto: 'Reconhecer o Comitê como interlocutor e sentar à mesa',
            deltas: { repressao: -6, opiniao: 5 },
            consequencia: 'Você senta à mesa com o Comitê. É um reconhecimento informal, sem assinatura — mas é reconhecimento.',
          },
          {
            slug: 'ignorar-comite',
            texto: 'Ignorar o Comitê, tratar apenas com os patrões',
            deltas: { coesao: 5, opiniao: -3 },
            consequencia: 'Você trata só com os patrões, como se o Comitê não existisse. Do outro lado da mesa, ele existe cada vez mais.',
          },
          {
            slug: 'negociar-com-vigilancia',
            texto: 'Aceitar negociar, mas manter vigilância sobre as lideranças',
            deltas: { repressao: 4, opiniao: 1 },
            consequencia: 'Você aceita negociar, mas manda anotar quem fala mais na reunião. A mesa de negociação também virou um lugar de vigiar.',
          },
        ],
        'grande-imprensa': [
          {
            slug: 'publicar-pauta-integral',
            texto: 'Publicar a pauta na íntegra, item por item',
            deltas: { opiniao: 4, coesao: 2 },
            consequencia: 'A pauta inteira sai impressa, item por item, inclusive os mais controversos. É raro ver isso na grande imprensa.',
          },
          {
            slug: 'publicar-itens-moderados',
            texto: 'Publicar só os itens "razoáveis", omitir os outros',
            deltas: { opiniao: 1 },
            consequencia: 'Só os pedidos mais "aceitáveis" saem no jornal de amanhã. O leitor da capital nunca vai saber que salário igual também estava na lista.',
          },
          {
            slug: 'criticar-pauta',
            texto: 'Publicar editorial criticando a pauta como "inflamada"',
            deltas: { opiniao: -3, coesao: 2 },
            consequencia: 'O editorial de amanhã chama a pauta de "inflamada". A palavra pega — e vai ser repetida por quem nunca leu a lista inteira.',
          },
        ],
        'imprensa-operaria': [
          {
            slug: 'pauta-ampla',
            texto: 'Redigir uma pauta ampla, incluindo salário igual e fim do trabalho infantil',
            deltas: { coesao: 12, repressao: 3 },
            consequencia: 'A pauta que sai em A Plebe inclui salário igual e fim do trabalho infantil, lado a lado com aumento e jornada. Nada foi deixado de fora por medo de parecer demais.',
          },
          {
            slug: 'pauta-minima',
            texto: 'Redigir uma pauta mínima, focada só no que tem mais chance de ser aceito',
            deltas: { coesao: 2, opiniao: 2 },
            consequencia: 'Você escolhe publicar só o que parece mais fácil de conseguir. É uma aposta em vitória rápida, não em pauta completa.',
          },
          {
            slug: 'divulgar-bases-1906',
            texto: 'Reimprimir as Bases de Acordo de 1906 ao lado da nova pauta',
            deltas: { coesao: 8, opiniao: 2 },
            consequencia: 'As Bases de 1906 saem reimpressas ao lado da nova pauta. Quem lê os dois documentos juntos entende que essa discussão não começou esta semana.',
          },
        ],
      },
    },

    {
      slug: 'o-acordo',
      titulo: 'O acordo',
      amplitude: 30,
      efeitosFixos: { direitos_papel: 65, carestia: -12 },
      cena:
        'Entre sábado e segunda-feira (14 a 16 de julho), com o secretário de Justiça Eloy ' +
        'Chaves reunido com os principais empresários da cidade e uma comissão de diretores de ' +
        'jornais mediando, os patrões vão assinando o acordo: direito de reunião reconhecido, ' +
        'aumento de 20% nos salários, libertação dos presos, proibição de demitir grevistas. Os ' +
        'operários voltam ao trabalho. Nas semanas seguintes, porém, o que foi prometido nem ' +
        'sempre é o que se cumpre.',
      fonte: {
        texto:
          'Entre o sábado 14 e a segunda-feira 16 de julho, vários empresários foram assinando ' +
          'um acordo que reconhecia o direito de reunião, concedia aumento de 20% nos salários, ' +
          'garantia a libertação dos presos e proibia a demissão dos operários grevistas.',
        autor: 'TOLEDO, E. "Um ano extraordinário: greves, revoltas e circulação de ideias no Brasil em 1917." Estudos Históricos, Rio de Janeiro, v. 30, n. 61, p. 497-518, 2017.',
        acervo: 'Artigo acadêmico completo, enviado pelo professor em 2026-08-23.',
        natureza: 'documental',
      },
      contexto:
        'Enquanto São Paulo assina o acordo, o resto do país ainda está em polvorosa: no Rio ' +
        'Grande do Sul, uma greve geral toma Porto Alegre entre 31 de julho e 4 de agosto, com ' +
        'pauta parecida — redução do preço dos alimentos, jornada de 8 horas. Em Pernambuco, o ' +
        'movimento vai se intensificar em agosto e setembro. 1917 não foi a crise de uma fábrica, ' +
        'nem de uma cidade: foi, como escreveu a historiadora que documentou esse ano, "um ano ' +
        'extraordinário" para o país inteiro. (TOLEDO, 2017)',
      imagemSugerida: {
        descricao:
          'Operários entrando de volta pelo portão de uma fábrica têxtil, expressões neutras ou cansadas — o retorno ao trabalho depois do acordo, sem clima de celebração.',
        arquivo: '/imagens/sao-paulo-1917/o-acordo.jpg',
        onde: 'Ilustração gerada — cena genérica. Se quiser substituir por uma foto real, qualquer fotografia de portão de fábrica paulistana do período (acervos: Instituto Moreira Salles, Arquivo Público do Estado de São Paulo) serve.',
      },
      investigacao: {
        olhar:
          'A fábrica reabre. Algumas caras de sempre não aparecem no primeiro dia. Ninguém fala ' +
          'muito alto sobre isso.',
        fontes: [
          {
            slug: 'lista-demitidos',
            tipo: 'ler',
            titulo: 'Uma lista que corre por baixo',
            papeis: ['operaria-textil', 'imprensa-operaria'],
            trecho:
              'Uma lista, copiada à mão e passada de mão em mão, com o nome de quem não foi ' +
              'readmitido depois do acordo — a maioria, gente que apareceu na frente durante o ' +
              'cortejo ou o Comitê.',
            acervo: 'Reconstituição — representa o fenômeno real da demissão seletiva pós-acordo, sem forjar uma lista específica.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'aviso-lei-adolfo-gordo',
            tipo: 'ler',
            titulo: 'A Lei que já existia, agora usada',
            papeis: ['operario-imigrante', 'autoridade-estadual', 'imprensa-operaria'],
            trecho:
              'Uma lei de 1907 permite expulsar do país estrangeiro considerado perigoso à ordem ' +
              'pública. Ela não foi criada por causa da greve — mas é sobre lideranças imigrantes ' +
              'do movimento operário que ela está sendo aplicada agora.',
            acervo: 'Reconstituição — a Lei Adolfo Gordo (Decreto nº 1.641, de 1907) é real; sua aplicação ' +
              'contra lideranças anarquistas imigrantes no pós-1917 é fato histórico bem documentado, ' +
              'mas este trecho não transcreve um documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'boato-cancelamento',
            tipo: 'ouvir',
            titulo: '"O acordo vai ser cancelado"',
            papeis: ['operaria-textil', 'operario-imigrante', 'industrial-textil'],
            trecho:
              '"Dizem que se a produção não voltar ao normal em 48 horas, os patrões vão ' +
              'cancelar tudo que foi combinado."',
            acervo: 'Boato — não há registro de uma cláusula assim no acordo que encerrou a greve.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho:
              'Boato. Não existiu prazo nem cláusula de cancelamento — o medo de perder o que tinha ' +
              'sido conquistado é que empurrou gente de volta ao trabalho mais depressa do que precisava.',
          },
        ],
      },
      opcoesPorPapel: {
        'industrial-textil': [
          {
            slug: 'cumprir-integralmente',
            texto: 'Cumprir o acordo integralmente, sem retaliação',
            deltas: { direitos_cumprido: 15, opiniao: 4 },
            consequencia: 'Os operários voltam aos seus postos, todos, sem exceção. É o acordo funcionando exatamente como foi escrito — o que, você vai descobrir, é mais raro do que parece.',
          },
          {
            slug: 'demissao-seletiva',
            texto: 'Readmitir a maioria, mas demitir aos poucos quem liderou',
            deltas: { direitos_cumprido: -8, coesao: 4, opiniao: -3 },
            consequencia: 'A maioria volta ao trabalho. Um punhado de nomes, os que mais apareceram à frente durante a greve, some da folha de pagamento nas semanas seguintes — sem nunca aparecer como demissão por causa da greve.',
          },
          {
            slug: 'usar-lei-adolfo-gordo-industrial',
            texto: 'Denunciar lideranças estrangeiras à polícia com base na Lei Adolfo Gordo',
            deltas: { direitos_cumprido: -14, repressao: 8, opiniao: -6 },
            consequencia: 'Você passa nomes de lideranças estrangeiras à polícia, amparado por uma lei que já existia havia dez anos. O acordo dizia "sem demissão" — não dizia nada sobre deportação.',
          },
        ],
        'coronel-cafe': [
          {
            slug: 'apoiar-normalizacao',
            texto: 'Apoiar a normalização rápida — o que importa é a produção voltando',
            deltas: { producao: 4, direitos_cumprido: 3 },
            consequencia: 'Sua voz pública apoiando a normalização ajuda a virar a página mais rápido. Para você, o que importava sempre foi a produção voltando.',
          },
          {
            slug: 'manter-distancia-final',
            texto: 'Manter distância do desfecho, como fez o resto do tempo',
            deltas: { opiniao: -1 },
            consequencia: 'Você não se pronuncia sobre o desfecho, como não se pronunciou sobre quase nada nas rodadas anteriores. É uma coerência, pelo menos.',
          },
          {
            slug: 'pressionar-exemplo',
            texto: 'Pressionar para que "alguém pague o preço", evitando que isso se repita',
            deltas: { repressao: 6, direitos_cumprido: -6 },
            consequencia: 'Você defende que alguém precisa "pagar o preço" para isso não se repetir. A frase vai ecoar nas próximas demissões seletivas que ninguém vai chamar de retaliação.',
          },
        ],
        'autoridade-estadual': [
          {
            slug: 'fiscalizar-cumprimento',
            texto: 'Fiscalizar o cumprimento do acordo nas fábricas',
            deltas: { direitos_cumprido: 10, opiniao: 4 },
            consequencia: 'Fiscais aparecem nas fábricas nas semanas seguintes, conferindo quem foi readmitido. É trabalho burocrático e chato — e é também a diferença entre um acordo real e um acordo de papel.',
          },
          {
            slug: 'aplicar-lei-adolfo-gordo',
            texto: 'Usar a Lei Adolfo Gordo para deportar lideranças imigrantes',
            deltas: { direitos_cumprido: -12, repressao: 10, opiniao: -5 },
            consequencia: 'Você usa a mesma lei de 1907 para começar a reunir nomes de lideranças imigrantes. O acordo continua valendo — só não para todo mundo que ajudou a conquistá-lo.',
          },
          {
            slug: 'declarar-caso-encerrado',
            texto: 'Declarar o caso encerrado, sem fiscalizar nada',
            deltas: { direitos_cumprido: -5 },
            consequencia: 'Você declara o caso encerrado sem mandar fiscalizar nada. Cabe a cada fábrica decidir, sozinha, o que "cumprir o acordo" significa.',
          },
        ],
        'grande-imprensa': [
          {
            slug: 'cobrar-cumprimento',
            texto: 'Cobrar publicamente o cumprimento do acordo',
            deltas: { direitos_cumprido: 8, opiniao: 3 },
            consequencia: 'Uma matéria de acompanhamento sai perguntando se o acordo está sendo cumprido. É o tipo de pergunta que incomoda quem preferia que todo mundo esquecesse.',
          },
          {
            slug: 'declarar-paz-social',
            texto: 'Declarar "paz social restaurada" e seguir para a próxima pauta',
            deltas: { direitos_cumprido: -2 },
            consequencia: 'O editorial fala em "paz social restaurada" e o jornal segue para a próxima pauta. Ninguém volta a perguntar o que aconteceu com os demitidos.',
          },
          {
            slug: 'investigar-demissoes',
            texto: 'Investigar e publicar as demissões seletivas',
            deltas: { direitos_cumprido: 10, coesao: 3, opiniao: 2 },
            consequencia: 'A reportagem sobre demissões seletivas sai com nomes e números. É desconfortável para os industriais — e é exatamente por isso que importa.',
          },
        ],
        'imprensa-operaria': [
          {
            slug: 'denunciar-retaliacoes',
            texto: 'Denunciar publicamente as retaliações e deportações',
            deltas: { direitos_cumprido: 6, coesao: 6, repressao: 3 },
            consequencia: 'A Plebe publica os nomes de quem foi demitido ou ameaçado de deportação depois do acordo. É o tipo de notícia que a grande imprensa não vai repetir.',
          },
          {
            slug: 'comemorar-vitoria',
            texto: 'Comemorar a vitória, sem fiscalizar o que vem depois',
            deltas: { direitos_cumprido: -4 },
            consequencia: 'A vitória de 20% vira manchete de comemoração. Quem já foi demitido essa semana não aparece na comemoração.',
          },
          {
            slug: 'organizar-apoio',
            texto: 'Organizar apoio a quem for demitido ou ameaçado de deportação',
            deltas: { direitos_cumprido: 9, coesao: 8 },
            consequencia: 'Uma rede informal de apoio começa a se formar para quem ficou de fora do acordo. Não é grande, mas é o começo de alguma coisa.',
          },
        ],
        'operaria-textil': [
          {
            slug: 'cobrar-prometido',
            texto: 'Cobrar, publicamente, exatamente o que foi prometido',
            deltas: { direitos_cumprido: 6, coesao: 3 },
            consequencia: 'Você cobra, na frente de quem quiser ouvir, exatamente o que foi prometido. Nem todo mundo gosta de ouvir isso em voz alta.',
          },
          {
            slug: 'aceitar-o-que-vier',
            texto: 'Aceitar o que vier, com medo de perder o posto de novo',
            deltas: { direitos_cumprido: -5 },
            consequencia: 'Você aceita o que vier, com medo de perder o posto outra vez. Ninguém te culpa — a fábrica ainda é a fábrica, e o aluguel ainda vence todo mês.',
          },
          {
            slug: 'apoiar-colegas-demitidas',
            texto: 'Apoiar as colegas que forem demitidas mesmo assim',
            deltas: { direitos_cumprido: 5, coesao: 6 },
            consequencia: 'Você continua apoiando as colegas demitidas mesmo com o acordo em vigor. É um risco pequeno para você e uma diferença grande para elas.',
          },
        ],
        'operario-imigrante': [
          {
            slug: 'temer-e-recuar',
            texto: 'Recuar da vida pública — o risco de deportação agora é real',
            deltas: { direitos_cumprido: -6, coesao: -3 },
            consequencia: 'Você se afasta de qualquer atividade visível. O medo de deportação, abstrato há duas semanas, agora tem nome de lei.',
          },
          {
            slug: 'continuar-organizando',
            texto: 'Continuar organizando, apesar do risco',
            deltas: { direitos_cumprido: 7, coesao: 7, repressao: 3 },
            consequencia: 'Você continua organizando, sabendo que seu nome pode estar numa lista que nunca vai ver. É a mesma escolha que você fez desde a Rodada 1 — só que agora custa mais caro.',
          },
          {
            slug: 'buscar-apoio-conterraneos',
            texto: 'Buscar apoio e abrigo entre conterrâneos, por precaução',
            deltas: { direitos_cumprido: 2 },
            consequencia: 'Você busca abrigo entre outros imigrantes da mesma origem, por precaução. Não é fuga — é rede de segurança, construída rápido demais para o gosto de qualquer um.',
          },
        ],
      },
    },
  ],

  desfecho: {
    fixo: 'A greve acontece e o acordo de 20% é firmado.',
    variavel: ['cumprimento', 'repressao', 'quem-ficou-de-fora'],
    textoFecho:
      'A greve de 1917 termina como começou: decidida por quem trabalha, não por quem manda. ' +
      'O acordo de 20% foi real — mas o que a turma acabou de viver, nas duas últimas rodadas, ' +
      'é que "no papel" e "na prática" raramente são a mesma coisa. O nome que os livros dão a ' +
      'isso vem por último: vocês passaram por dentro da Primeira República — o mesmo sistema ' +
      'que a Aula 2 chama de liberalismo oligárquico.\n\n' +
      'Uma coisa que o jogo simplifica: vocês viram um nome — José Gimenez Martinez — e uma ' +
      'prisão — a de Edgard Leuenroth. Mas a investigação do jornal Fanfulla, já em julho de ' +
      '1917, contou cerca de 200 vítimas só no cemitério do Araçá (TOLEDO, 2017). O jogo dá ' +
      'nome a uma morte para que ela não vire estatística — mas o preço de 1917 não foi de uma ' +
      'pessoa só, foi de muitas cujo nome a maioria de vocês nunca vai ler em lugar nenhum.',
    perguntasDebate: [
      'A barra de "direitos cumpridos" ficou bem abaixo da de "direitos no papel"? Por quê, na visão de vocês?',
      'Quem, na turma, propôs salário igual para as mulheres na pauta — e quem só decidiu depois de ler as Bases de 1906? O que isso mudou?',
      'Se vocês fossem sorteados de novo, para outro papel, decidiriam diferente? O que isso diz sobre o peso que cada papel carrega?',
    ],
    // Reflexão individual (currículo em espiral — GDD seção 3): mesmo
    // conceito revisitado em 3 camadas crescentes, não 3 perguntas soltas.
    perguntasReflexao: [
      {
        nivel: 'Sua experiência',
        pergunta: 'No papel que você jogou, houve algum momento em que sua decisão pesou mais — ou menos — do que você esperava?',
      },
      {
        nivel: 'O conceito',
        pergunta: 'A greve só virou "geral" quando a coesão operária passou de um certo ponto — e aí cada decisão popular passou a valer mais. Por que um mecanismo desses existe? O que ele representa da vida real?',
      },
      {
        nivel: 'Além desta aula',
        pergunta: 'Onde mais — na história, ou hoje — você já viu um grupo pequeno pesar mais que um grupo grande numa decisão coletiva?',
      },
    ],
  },
}
