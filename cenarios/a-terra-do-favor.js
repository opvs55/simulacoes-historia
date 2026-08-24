// A terra do favor — cenário da 2ª série (Aulas 1 e 2 do livro)
//
// Coronelismo, voto de cabresto e a "cidadania de fachada" da Primeira
// República. O aluno atravessa uma eleição municipal de 1927 e descobre
// que o resultado já estava decidido — o que ele muda é o custo, quem
// apanhou e quantos conseguiram guardar alguma autonomia.
//
// Fontes documentais: LEAL, V. N. "Coronelismo, enxada e voto" (1949);
// SCHWARCZ & STARLING, "Brasil: uma biografia" (2015); charge "As eleições
// de cabresto" (Careta, 1927); RESENDE (2013) sobre liberalismo oligárquico.
// Todas vieram do livro do 2º ano, Aulas 1 e 2.
export default {
  slug: 'a-terra-do-favor',
  versao: 1,
  serie: '2a',
  titulo: 'A terra do favor',
  subtitulo: 'Uma eleição no interior, 1927',
  pergunta: 'Se o voto é livre, por que é o coronel que paga o sapato?',
  introducao:
    'A Primeira República é liberal na Constituição e oligárquica na prática: só vota quem ' +
    'sabe ler, o voto não é secreto, e em muitos municípios do interior o resultado da eleição ' +
    'já está decidido antes mesmo de a urna abrir. Você está prestes a atravessar uma eleição ' +
    'municipal de 1927 onde o voto de cada eleitor pode valer um sapato novo, um emprego — ou ' +
    'uma dívida que não estava escrita em lugar nenhum.',
  era: 'republica',
  aulasRelacionadas: [1, 2],
  duracaoEstimada: '10 a 15 minutos',

  indicadores: [
    { slug: 'curral', nome: 'Curral eleitoral', inicial: 70, faixas: ['aberto', 'sob pressão', 'fechado'] },
    { slug: 'autonomia', nome: 'Autonomia do eleitor', inicial: 15, faixas: ['nenhuma', 'frágil', 'real'] },
    { slug: 'favor', nome: 'Economia do favor', inicial: 75, faixas: ['é direito', 'meio a meio', 'tudo é favor'] },
    { slug: 'coercao', nome: 'Coerção', inicial: 35, faixas: ['contida', 'ostensiva', 'violenta'] },
    { slug: 'legitimidade', nome: 'Legitimidade da eleição', inicial: 45, faixas: ['contestada', 'duvidosa', 'aceita'] },
  ],

  papeis: [
    {
      slug: 'coronel',
      nome: 'Coronel do município',
      bloco: 'elite',
      peso: 8,
      cota: 2,
      perguntaGuia: 'Quantos votos eu consigo entregar?',
      contexto:
        'A fazenda é sua, a venda é sua, e boa parte do município deve alguma coisa a você. Seu poder não vem de um cargo — vem de quantos votos você consegue entregar ao governo do estado no dia certo.',
      icone: '/imagens/a-terra-do-favor/papeis/coronel.jpg',
    },
    {
      slug: 'presidente-estado',
      nome: 'Presidente do Estado',
      bloco: 'elite',
      peso: 6,
      cota: 1,
      perguntaGuia: 'De quais coronéis eu preciso, e a que preço?',
      contexto:
        'Você governa o estado, mas não governa o interior: quem governa o interior são os coronéis. Você tem cargos para distribuir — delegado, professora, coletor — e precisa dos votos deles em troca.',
      icone: '/imagens/a-terra-do-favor/papeis/presidente-estado.jpg',
    },
    {
      slug: 'delegado',
      nome: 'Delegado de polícia',
      bloco: 'elite',
      peso: 4,
      cota: 2,
      perguntaGuia: 'A quem eu devo o meu cargo?',
      contexto:
        'Você foi nomeado por indicação — e sabe muito bem por indicação de quem. Sua autoridade é do Estado, mas sua nomeação é de um homem só.',
      icone: '/imagens/a-terra-do-favor/papeis/delegado.jpg',
    },
    {
      slug: 'professora',
      nome: 'Professora primária',
      bloco: 'mediador',
      peso: 2,
      cota: 4,
      perguntaGuia: 'Ensinar a ler é favor ou é direito?',
      contexto:
        'Sua cadeira na escola também veio por indicação. E há uma ironia difícil de engolir: só vota quem sabe ler, e é você quem ensina a ler. Cada aluno alfabetizado é um eleitor a mais — de alguém.',
      icone: '/imagens/a-terra-do-favor/papeis/professora.jpg',
    },
    {
      slug: 'imprensa-oposicao',
      nome: 'Jornal de oposição',
      bloco: 'mediador',
      peso: 2,
      cota: 3,
      perguntaGuia: 'Denunciar adianta, ou só marca quem denunciou?',
      contexto:
        'Você imprime umas centenas de exemplares por semana numa cidade onde a maioria não lê. Sua arma é o constrangimento — e ela só funciona se alguém de fora estiver olhando.',
      icone: '/imagens/a-terra-do-favor/papeis/imprensa-oposicao.jpg',
    },
    {
      slug: 'trabalhador-rural',
      nome: 'Trabalhador rural',
      bloco: 'popular',
      peso: 1,
      cota: 14,
      perguntaGuia: 'O que é meu por direito e o que eu recebo de favor?',
      contexto:
        'Você trabalha na terra que não é sua. O remédio, o transporte, o documento, o sapato de couro que você não teria — tudo isso já veio da mão do coronel em algum momento. E vem de novo agora, em ano de eleição.',
      icone: '/imagens/a-terra-do-favor/papeis/trabalhador-rural.jpg',
    },
  ],

  rodadas: [
    {
      slug: 'o-alistamento',
      titulo: 'O alistamento',
      amplitude: 25,
      cena:
        'Ano de eleição. Antes de votar, é preciso virar eleitor — e virar eleitor custa: documento, transporte até a vila, o dia de trabalho perdido, às vezes a roupa e o calçado para se apresentar. Quem paga essa conta? Quase nunca é o próprio eleitor. E só entra na lista quem sabe ler.',
      fonte: {
        texto:
          'São, pois, os fazendeiros e chefes locais que custeiam as despesas do alistamento e da eleição. Sem dinheiro e sem interesse direto, o roceiro não faria o menor sacrifício nesse sentido. [...] Documentos, transporte, alojamento, refeições, dias de trabalho perdidos, e até roupa, calçado, chapéu para o dia da eleição, tudo é pago pelos mentores políticos empenhados na sua qualificação e comparecimento.',
        autor: 'LEAL, V. N. Coronelismo, enxada e voto: o município e o regime representativo no Brasil. 3. ed. Rio de Janeiro: Nova Fronteira, 1978, p. 35-6.',
        acervo: 'Livro do 2º ano, Aula 2',
        natureza: 'documental',
      },
      imagemSugerida: {
        descricao:
          'Uma fila de homens do campo diante de uma mesa de alistamento eleitoral, roupa de trabalho, alguns descalços — enquanto um capanga do coronel confere a lista de nomes.',
        arquivo: '/imagens/a-terra-do-favor/o-alistamento.jpg',
        onde: 'Ilustração gerada — cena genérica. Se quiser substituir por uma foto real, qualquer fotografia de fila eleitoral rural da Primeira República serve (acervos: Biblioteca Nacional Digital, Arquivo Público do Estado de São Paulo).',
      },
      investigacao: {
        olhar:
          'A vila num dia de alistamento: mesa de madeira na porta da igreja, um escrivão suando, e um homem de terno que não é da vila anotando quem chega e com quem chega.',
        fontes: [
          {
            slug: 'liberalismo-oligarquico',
            tipo: 'ler',
            titulo: 'O liberalismo oligárquico',
            papeis: ['presidente-estado', 'imprensa-oposicao', 'professora'],
            trecho:
              'É da coexistência de uma Constituição liberal com práticas oligárquicas que deriva a expressão liberalismo oligárquico [...]. A denominação de República oligárquica [...] denuncia um sistema baseado na dominação de uma minoria e na exclusão de uma maioria no processo de participação política.',
            autor: 'RESENDE, M. E. L. de. A República Velha: fatos e documentos. Belo Horizonte: Autêntica, 2013.',
            acervo: 'Livro do 2º ano, Aula 1',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'quem-nao-le-nao-vota',
            tipo: 'ler',
            titulo: 'Quem não lê, não vota',
            papeis: ['professora', 'trabalhador-rural', 'imprensa-oposicao'],
            trecho:
              'A Constituição de 1891 restringia o sufrágio aos homens alfabetizados, maiores de 21 anos, mantendo o voto não secreto. Mulheres, analfabetos, pobres e soldados rasos ficavam de fora — uma cidadania regulada e de fachada.',
            acervo:
              'Reconstituição — resume, em linguagem de cena, o que o livro do 2º ano (Aula 1) descreve sobre a Constituição de 1891, sem transcrever um documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'conversa-na-venda',
            tipo: 'ouvir',
            titulo: 'O que se diz na venda',
            papeis: ['trabalhador-rural'],
            trecho:
              '"Dizem que desta vez o coronel vai levar todo mundo de caminhão, dar o almoço e o sapato. Quem não for, dizem também, é melhor nem aparecer na venda pedindo fiado no mês que vem."',
            acervo: 'Reconstituição — fala típica de troca de favores e ameaça velada, não é citação de um registro específico.',
            natureza: 'recriada',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        coronel: [
          {
            slug: 'custear-alistamento',
            texto: 'Custear o alistamento de todo mundo — documento, transporte, sapato',
            deltas: { curral: 12, favor: 10, autonomia: -8 },
            consequencia:
              'Dezenas de trabalhadores viram eleitores no papel — e devedores na prática. Nenhum deles pagou nada, e é exatamente por isso que nenhum deles se sente dono do próprio voto.',
          },
          {
            slug: 'alistar-so-confiaveis',
            texto: 'Alistar só quem já é de confiança',
            deltas: { curral: 6, coercao: 3 },
            consequencia:
              'O curral fica menor, porém mais firme. Quem ficou de fora entendeu o recado: não é analfabetismo que impede de votar, é não ser da casa.',
          },
          {
            slug: 'nao-gastar',
            texto: 'Não gastar com isso — o resultado já está combinado mesmo',
            deltas: { curral: -6, autonomia: 5 },
            consequencia:
              'Sem transporte e sem documento pago, muita gente simplesmente não se alista. O curral encolhe — e, sem querer, abre um espaço que ninguém tinha pedido.',
          },
        ],
        'presidente-estado': [
          {
            slug: 'prometer-cargos',
            texto: 'Prometer cargos ao coronel em troca dos votos do município',
            deltas: { curral: 10, favor: 12, legitimidade: -5 },
            consequencia:
              'Delegado, coletor, professora: os cargos públicos do município saem da sua caneta, mas por indicação dele. O Estado chega à vila já pertencendo a alguém.',
          },
          {
            slug: 'ameacar-trocar-coronel',
            texto: 'Ameaçar apoiar o coronel rival se os votos não vierem',
            deltas: { curral: 6, coercao: 8 },
            consequencia:
              'A ameaça funciona, mas endurece tudo: agora o coronel precisa provar serviço, e quem paga a demonstração de força é quem está embaixo.',
          },
          {
            slug: 'ignorar-municipio',
            texto: 'Ignorar este município — é pequeno demais para importar',
            deltas: { curral: -5, autonomia: 6, legitimidade: 3 },
            consequencia:
              'Sem a pressão do palácio, a disputa local fica mais frouxa. Ninguém agradece — mas alguns eleitores descobrem que ninguém veio buscá-los de caminhão desta vez.',
          },
        ],
        delegado: [
          {
            slug: 'vigiar-alistamento',
            texto: 'Ficar de olho em quem se alista com a oposição',
            deltas: { coercao: 10, autonomia: -8, curral: 5 },
            consequencia:
              'Ninguém foi preso, ninguém foi agredido. Bastou estar de farda encostado na parede, anotando nomes — e a fila da oposição foi ficando curta sozinha.',
          },
          {
            slug: 'facilitar-documentos',
            texto: 'Acelerar os documentos de quem o coronel indicar',
            deltas: { curral: 8, favor: 6 },
            consequencia:
              'A burocracia, que é lenta para todo mundo, fica instantânea para alguns. Fica claro na vila que a diferença entre ter e não ter documento é conhecer a pessoa certa.',
          },
          {
            slug: 'cumprir-a-lei',
            texto: 'Cumprir a lei exatamente como está escrita, sem favorecer ninguém',
            deltas: { autonomia: 8, legitimidade: 6, favor: -5 },
            consequencia:
              'Você tratou todo mundo igual — e isso, aqui, é um ato político. Seu nome chega ao coronel antes do fim do dia.',
          },
        ],
        professora: [
          {
            slug: 'alfabetizar-todos',
            texto: 'Alfabetizar todo mundo que aparecer, sem perguntar de quem é',
            deltas: { autonomia: 12, favor: -6 },
            consequencia:
              'Cada pessoa que aprende a ler passa a poder se alistar por conta própria. Ler não garante votar livre — mas não ler garante não votar.',
          },
          {
            slug: 'alfabetizar-indicados',
            texto: 'Priorizar os que o coronel indicou — foi ele que conseguiu sua cadeira',
            deltas: { curral: 8, favor: 8, autonomia: -4 },
            consequencia:
              'A escola vira mais uma engrenagem do arranjo: alfabetiza, sim, mas alfabetiza eleitores previamente escolhidos.',
          },
          {
            slug: 'ensinar-o-que-e-voto',
            texto: 'Ensinar, junto com as letras, o que é um voto e o que diz a Constituição',
            deltas: { autonomia: 14, favor: -8, coercao: 4 },
            consequencia:
              'Alguns alunos voltam para casa com uma pergunta nova: se o voto é meu, por que outro escolhe? A pergunta viaja mais rápido que a cartilha — e chega a ouvidos que não gostaram.',
          },
        ],
        'imprensa-oposicao': [
          {
            slug: 'denunciar-alistamento',
            texto: 'Denunciar a compra do alistamento na primeira página',
            deltas: { legitimidade: -8, autonomia: 6, coercao: 5 },
            consequencia:
              'A denúncia sai. Na vila, quase ninguém lê — mas o jornal da capital reproduz a nota, e o município aparece no noticiário estadual pela primeira vez em anos.',
          },
          {
            slug: 'publicar-a-lei',
            texto: 'Publicar simplesmente o texto da lei eleitoral, sem comentário',
            deltas: { autonomia: 8, legitimidade: 3 },
            consequencia:
              'Nenhuma acusação, nenhuma ofensa — só a lei impressa do lado do que está acontecendo. É mais difícil processar, e mais constrangedor de ler.',
          },
          {
            slug: 'guardar-para-depois',
            texto: 'Guardar o material e publicar tudo depois da eleição',
            deltas: { legitimidade: -3 },
            consequencia:
              'A matéria fica pronta na gaveta, mais segura e menos útil. Depois da eleição, denúncia vira história; antes, seria obstáculo.',
          },
        ],
        'trabalhador-rural': [
          {
            slug: 'aceitar-alistamento',
            texto: 'Aceitar o alistamento pago pelo coronel',
            deltas: { curral: 8, favor: 6, autonomia: -5 },
            consequencia:
              'Você virou eleitor — coisa que sozinho levaria meses e um dinheiro que você não tem. O documento é seu; a dívida também.',
          },
          {
            slug: 'alistar-por-conta',
            texto: 'Tentar se alistar por conta própria, pagando do próprio bolso',
            deltas: { autonomia: 12, favor: -6, curral: -4 },
            consequencia:
              'Custou dois dias de trabalho perdidos e um dinheiro que fazia falta. Mas ninguém no cartório perguntou de quem você é — porque desta vez não é de ninguém.',
          },
          {
            slug: 'nao-se-alistar',
            texto: 'Não se alistar — isso não é assunto seu',
            deltas: { autonomia: -3, curral: -3 },
            consequencia:
              'Ninguém veio te buscar dessa vez — sozinho, não se alistar não chama atenção de ninguém. Mas o coronel tem capangas pra quem chama atenção de verdade, e faltam três rodadas pra você descobrir se vai precisar disso.',
          },
        ],
      },
    },

    {
      slug: 'a-vespera',
      titulo: 'A véspera',
      amplitude: 25,
      cena:
        'Falta um dia. A vila está cheia: caminhão parado no largo, churrasco montado, sapato novo distribuído. Cada um sabe exatamente o que se espera dele amanhã — ninguém precisou dizer em voz alta.',
      fonte: {
        texto:
          'O "voto de cabresto" era quase uma prática político-cultural – um ato de lealdade do votante ao chefe local. [...] O voto era entendido como moeda de troca [...]. Ele hipotecava seu apoio ao governo estadual na forma de votos, e, em troca, o governo garantia o poder do coronel sobre seus dependentes e rivais, especialmente através da cessão dos cargos públicos, que iam do delegado de polícia à professora primária.',
        autor: 'SCHWARCZ, L. M.; STARLING, H. M. Brasil: uma biografia. São Paulo: Companhia das Letras, 2015, p. 479-80.',
        acervo: 'Livro do 2º ano, Aula 2',
        natureza: 'documental',
      },
      imagemSugerida: {
        descricao:
          'Cena genérica da véspera — caminhão, churrasco, sapatos distribuídos — não é a charge "As eleições de cabresto" mencionada em `onde`; recriar essa charge específica por IA a apresentaria como algo que ela não é.',
        arquivo: '/imagens/a-terra-do-favor/a-vespera.jpg',
        onde: 'A charge real "As eleições de cabresto" está no Livro do 2º ano, Aula 2, Fonte I — charge de Alfredo Storni, revista Careta, Rio de Janeiro, 19 de fevereiro de 1927. Use-a se quiser a imagem documental de verdade.',
      },
      investigacao: {
        olhar:
          'O largo da vila na véspera: fogo aceso, cheiro de carne, um caminhão de carroceria com bancos improvisados. Perto da mesa, uma pilha de cédulas já impressas — todas com o mesmo nome.',
        fontes: [
          {
            slug: 'grande-fazenda',
            tipo: 'ler',
            titulo: '"O país não passava de uma grande fazenda"',
            papeis: ['imprensa-oposicao', 'professora', 'presidente-estado', 'trabalhador-rural'],
            trecho:
              'E desse modo se estabilizava a República brasileira no início do século XX, na base de muita troca, empréstimo, favoritismos, negociações e repressão. Visto desse ângulo, e como diziam os jornais satíricos de época, o país não passava de uma grande fazenda.',
            autor: 'SCHWARCZ, L. M.; STARLING, H. M. Brasil: uma biografia. São Paulo: Companhia das Letras, 2015.',
            acervo: 'Livro do 2º ano, Aula 2',
            natureza: 'documental',
            confiavel: true,
            destrancaOpcao: 'recusar-a-troca',
          },
          {
            slug: 'o-patrao-benfeitor',
            tipo: 'ler',
            titulo: 'O patrão na conta de benfeitor',
            papeis: ['trabalhador-rural', 'professora'],
            trecho:
              'Completamente analfabeto, ou quase, sem assistência médica, não lendo jornais [...], o trabalhador rural, a não ser em casos esporádicos, tem o patrão na conta de benfeitor. E é dele, na verdade, que recebe os únicos favores que sua obscura existência conhece.',
            autor: 'LEAL, V. N. Coronelismo, enxada e voto. 3. ed. Rio de Janeiro: Nova Fronteira, 1978.',
            acervo: 'Livro do 2º ano, Aula 2',
            natureza: 'documental',
            confiavel: true,
            destrancaOpcao: 'recusar-a-troca',
          },
          {
            slug: 'boato-lista-negra',
            tipo: 'ouvir',
            titulo: '"Existe uma lista"',
            papeis: ['trabalhador-rural', 'professora', 'delegado'],
            trecho:
              '"Contam que o coronel tem uma lista com o nome de quem votar errado, e que quem estiver nela perde o barracão e o trabalho antes do Natal."',
            acervo: 'Boato — não existe lista nenhuma; a ameaça circula sozinha e faz o trabalho que a lista faria.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho:
              'Boato. Não havia lista — e não precisava haver. O medo de estar numa lista que ninguém nunca viu controlou mais votos do que qualquer papel controlaria. É assim que funciona: o mais barato dos instrumentos de poder é o que a própria vítima carrega.',
          },
        ],
      },
      opcoesPorPapel: {
        coronel: [
          {
            slug: 'churrasco-e-sapato',
            texto: 'Churrasco, caminhão e sapato novo para todos',
            deltas: { curral: 12, favor: 12, coercao: -3 },
            consequencia:
              'Ninguém foi ameaçado, ninguém foi obrigado. Todo mundo comeu, bebeu e ganhou sapato — e amanhã todo mundo vai lembrar de quem pagou.',
          },
          {
            slug: 'recado-com-capanga',
            texto: 'Mandar um recado, pelos capangas, sobre o que acontece a quem votar errado',
            deltas: { curral: 10, coercao: 14, autonomia: -8, legitimidade: -6 },
            consequencia:
              'O recado não precisou ser explícito. Dois homens a cavalo passando devagar na frente das casas certas fizeram o serviço inteiro.',
          },
          {
            slug: 'confiar-na-lealdade',
            texto: 'Não fazer nada — a lealdade já está construída há anos',
            deltas: { curral: 4, favor: 4 },
            consequencia:
              'Nem festa nem ameaça: só o peso do costume. E o costume, aqui, é mais antigo que a República.',
          },
        ],
        'presidente-estado': [
          {
            slug: 'enviar-forca',
            texto: 'Enviar força policial "para garantir a ordem" no dia',
            deltas: { coercao: 12, curral: 6, legitimidade: -6 },
            consequencia:
              'A tropa chega na véspera e acampa na praça. Oficialmente veio garantir a eleição; na prática, todo mundo entendeu de que lado ela veio garantir.',
          },
          {
            slug: 'garantir-cargos',
            texto: 'Confirmar por escrito os cargos prometidos',
            deltas: { favor: 10, curral: 8 },
            consequencia:
              'O papel assinado transforma promessa em contrato. O município inteiro passa a ter dono formal por mais quatro anos.',
          },
          {
            slug: 'nao-intervir',
            texto: 'Não intervir — deixar a eleição correr como for',
            deltas: { autonomia: 8, legitimidade: 5, curral: -4 },
            consequencia:
              'Sem tropa e sem promessa nova, o coronel fica só com o que já tinha. Descobre-se que uma parte do poder dele era emprestada do estado.',
          },
        ],
        delegado: [
          {
            slug: 'ronda-ostensiva',
            texto: 'Fazer ronda ostensiva pelos bairros da oposição',
            deltas: { coercao: 14, autonomia: -10, curral: 6 },
            consequencia:
              'Ninguém foi tocado. Mas o cavalo da polícia passou três vezes na mesma rua, e na terceira as portas já estavam fechadas.',
          },
          {
            slug: 'proteger-urna',
            texto: 'Garantir que a urna e as cédulas fiquem sob custódia oficial',
            deltas: { legitimidade: 10, curral: -6 },
            consequencia:
              'A urna passa a noite trancada e vigiada. Uma medida técnica, sem discurso — e a primeira em muitos anos.',
          },
          {
            slug: 'sumir-na-vespera',
            texto: 'Sumir na véspera — não estar presente é mais seguro',
            deltas: { coercao: 4, legitimidade: -4 },
            consequencia:
              'Sem autoridade na rua, quem manda é quem sempre mandou. A ausência da polícia também é uma decisão política.',
          },
        ],
        professora: [
          {
            slug: 'explicar-voto-secreto',
            texto: 'Explicar, para quem quiser ouvir, como a cédula funciona',
            deltas: { autonomia: 12, curral: -8, coercao: 4 },
            consequencia:
              'Um punhado de pessoas aprende, na véspera, que a cédula pode ser dobrada antes de entregue. Informação simples, e por isso mesmo perigosa.',
          },
          {
            slug: 'ficar-quieta',
            texto: 'Ficar quieta — o emprego depende de quem você sabe',
            deltas: { favor: 6, autonomia: -4 },
            consequencia:
              'Você não mentiu para ninguém; só não disse. E não dizer, na véspera de uma eleição, é escolher um lado sem precisar assinar embaixo.',
          },
          {
            slug: 'abrir-escola-como-abrigo',
            texto: 'Deixar a escola aberta como lugar neutro para quem quiser conversar',
            deltas: { autonomia: 8, legitimidade: 5 },
            consequencia:
              'A escola vira o único espaço da vila que não é de ninguém. Poucas pessoas usam — mas as que usam, usam justamente por isso.',
          },
        ],
        'imprensa-oposicao': [
          {
            slug: 'manchete-cabresto',
            texto: 'Estampar a charge do cabresto na capa de amanhã',
            deltas: { legitimidade: -10, autonomia: 8, coercao: 6 },
            consequencia:
              'A charge é mais eficaz que o texto: quem não lê entende o desenho. É também mais fácil de responder com violência do que um artigo.',
          },
          {
            slug: 'documentar-para-capital',
            texto: 'Documentar tudo e mandar para o jornal da capital',
            deltas: { legitimidade: -6, autonomia: 4 },
            consequencia:
              'O material segue no trem da noite. Não muda nada amanhã, mas coloca o município num arquivo que alguém, algum dia, vai abrir.',
          },
          {
            slug: 'nao-publicar-vespera',
            texto: 'Não publicar na véspera para não expor os denunciantes',
            deltas: { coercao: -4 },
            consequencia:
              'Ninguém foi identificado, ninguém foi ameaçado por sua causa. O preço é que a véspera passa em silêncio.',
          },
        ],
        'trabalhador-rural': [
          {
            slug: 'aceitar-tudo',
            texto: 'Aceitar o churrasco, o sapato e a carona',
            deltas: { curral: 10, favor: 8, autonomia: -6 },
            consequencia:
              'Foi o melhor almoço do ano e o primeiro sapato de couro em muito tempo. Também foi a coisa mais cara que já te deram de graça.',
          },
          {
            slug: 'recusar-a-troca',
            texto: 'Aceitar o que precisa, mas avisar que o voto é seu',
            deltas: { autonomia: 15, curral: -8, coercao: 6 },
            consequencia:
              'Você disse em voz alta o que muita gente pensou baixinho. Duas ou três pessoas concordaram na hora; o resto olhou para o chão — e alguém contou ao coronel antes do jantar. Historicamente, isso podia significar uma visita do capanga só pra "conversar" — ou coisa pior: espancamento, queima de roça, despejo da terra. Nem toda desobediência terminava assim. Mas quem falava alto sabia que podia.',
          },
          {
            slug: 'combinar-com-os-outros',
            texto: 'Conversar com os outros trabalhadores sobre o que fazer amanhã',
            deltas: { autonomia: 10, curral: -5 },
            consequencia:
              'Nada foi decidido, mas a conversa aconteceu — e a diferença entre pensar sozinho e descobrir que outros pensam igual é o começo de tudo.',
          },
        ],
      },
    },

    {
      slug: 'dia-da-eleicao',
      titulo: 'O dia da eleição',
      amplitude: 30,
      efeitosFixos: { legitimidade: -8 },
      cena:
        'A urna está na sala da câmara municipal. O voto não é secreto: a cédula vai aberta, e a mesa vê o que cada um entrega. Do lado de fora, o caminhão do coronel descarrega a última leva de eleitores.',
      fonte: {
        texto:
          'É, portanto, perfeitamente compreensível que o eleitor da roça obedeça à orientação de quem tudo lhe paga, e com insistência, para praticar um ato que lhe é completamente indiferente.',
        autor: 'LEAL, V. N. Coronelismo, enxada e voto. 3. ed. Rio de Janeiro: Nova Fronteira, 1978.',
        acervo: 'Livro do 2º ano, Aula 2',
        natureza: 'documental',
      },
      imagemSugerida: {
        descricao:
          'Uma mesa eleitoral da Primeira República: mesários sentados, um eleitor de pé entregando a cédula aberta, e homens observando de perto — o voto acontecendo à vista de todos.',
        arquivo: '/imagens/a-terra-do-favor/dia-da-eleicao.jpg',
        onde: 'Ilustração gerada — cena genérica. Acervos possíveis para uma foto real: Biblioteca Nacional Digital, Arquivo Público do Estado de São Paulo, ou charges da revista Careta do período.',
      },
      investigacao: {
        olhar:
          'A sala é pequena e cheia. A mesa fica de frente para a porta, e quem entrega a cédula entrega de frente para todo mundo. Encostado na janela, um homem que não é mesário nem eleitor confere cada rosto que passa.',
        fontes: [
          {
            slug: 'voto-a-descoberto',
            tipo: 'olhar',
            titulo: 'O voto a descoberto',
            papeis: ['trabalhador-rural', 'professora', 'imprensa-oposicao'],
            trecho:
              'A cédula é entregue aberta e conferida pela mesa antes de entrar na urna. Não há cabine, não há envelope. Todo mundo na sala sabe em quem cada um votou no instante em que ele vota.',
            acervo:
              'Reconstituição — descreve o funcionamento do voto não secreto sob a Constituição de 1891, tal como o livro do 2º ano (Aula 1) o resume.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'bico-de-pena',
            tipo: 'ler',
            titulo: 'A eleição a "bico de pena"',
            papeis: ['coronel', 'presidente-estado', 'imprensa-oposicao'],
            trecho:
              'Além da pressão sobre o eleitor, existia a fraude na própria ata: votos acrescentados, nomes de mortos e ausentes, atas inteiras redigidas depois — a chamada eleição a "bico de pena", feita não na urna, mas na escrita do resultado.',
            acervo:
              'Reconstituição — a expressão e a prática são bem documentadas na historiografia da Primeira República; este trecho as resume, sem transcrever um documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        coronel: [
          {
            slug: 'conferir-cedulas',
            texto: 'Postar alguém na mesa para conferir cada cédula entregue',
            deltas: { curral: 14, autonomia: -12, legitimidade: -8 },
            consequencia:
              'Cada eleitor vota olhando para um homem que sabe o nome dele, o nome do pai dele e onde ele mora. Quase ninguém erra o voto.',
          },
          {
            slug: 'bico-de-pena-opcao',
            texto: 'Deixar o resultado ser "ajustado" na ata depois',
            deltas: { curral: 10, legitimidade: -14 },
            consequencia:
              'A urna passa a ser detalhe. O que vale é a ata — e a ata se escreve com calma, depois que todo mundo foi embora.',
          },
          {
            slug: 'deixar-votar',
            texto: 'Deixar cada um votar como quiser e ver no que dá',
            deltas: { autonomia: 12, curral: -10, legitimidade: 6 },
            consequencia:
              'Pela primeira vez em muitos anos, ninguém confere nada na porta. Alguns eleitores demoram mais do que o normal na mesa — descobrindo, ali, que a escolha era mesmo deles.',
          },
        ],
        'presidente-estado': [
          {
            slug: 'garantir-resultado',
            texto: 'Deixar claro à mesa apuradora qual resultado o estado espera',
            deltas: { curral: 10, legitimidade: -10 },
            consequencia:
              'A instrução desce sem nada por escrito e sem precisar de detalhes. A mesa entende, porque a mesa também foi nomeada.',
          },
          {
            slug: 'observador-oficial',
            texto: 'Mandar um observador oficial acompanhar a votação',
            deltas: { legitimidade: 8, coercao: -4, curral: -4 },
            consequencia:
              'A presença de um estranho de fora muda o comportamento de todos na sala — inclusive de quem não tinha intenção nenhuma de mudar.',
          },
          {
            slug: 'lavar-as-maos',
            texto: 'Não se envolver no dia — o arranjo já está feito',
            deltas: { curral: 4 },
            consequencia:
              'O estado não aparece. Não precisa: a máquina que ele montou funciona sozinha há tempo suficiente.',
          },
        ],
        delegado: [
          {
            slug: 'policia-na-porta',
            texto: 'Posicionar a polícia na porta da votação',
            deltas: { coercao: 15, autonomia: -12 },
            consequencia:
              'Ninguém foi impedido de entrar. Mas votar passando por dois policiais é uma experiência diferente de votar sem eles — e a diferença aparece nas cédulas.',
          },
          {
            slug: 'garantir-ordem-neutra',
            texto: 'Manter a ordem, mas expulsar da sala quem não for mesário ou eleitor',
            deltas: { autonomia: 12, legitimidade: 10, curral: -8 },
            consequencia:
              'Os capangas saem da sala reclamando. Sem plateia, a fila anda mais devagar — e mais gente hesita antes de entregar a cédula.',
          },
          {
            slug: 'prender-agitadores',
            texto: 'Deter quem estiver "agitando" na fila',
            deltas: { coercao: 18, autonomia: -14, legitimidade: -8 },
            consequencia:
              'Três pessoas passam o dia da eleição na cadeia sem acusação formal. São soltas à noite, quando a urna já está fechada.',
          },
        ],
        professora: [
          {
            slug: 'ser-mesaria',
            texto: 'Aceitar ser mesária e conferir a lista com rigor',
            deltas: { legitimidade: 10, curral: -6 },
            consequencia:
              'Cada nome é conferido de verdade. Dois eleitores "fantasmas" não conseguem votar — e todo mundo na sala vê acontecer.',
          },
          {
            slug: 'ler-para-quem-nao-sabe',
            texto: 'Ler a cédula em voz baixa para quem não consegue ler sozinho',
            deltas: { autonomia: 12, curral: -8 },
            consequencia:
              'Algumas pessoas descobrem, na hora de votar, que o nome na cédula que lhe entregaram não é o nome que elas queriam.',
          },
          {
            slug: 'nao-comparecer',
            texto: 'Não ir — melhor não estar envolvida',
            deltas: { autonomia: -3 },
            consequencia:
              'Sua ausência não é notada por quase ninguém. A mesa fica com uma pessoa a menos disposta a conferir alguma coisa.',
          },
        ],
        'imprensa-oposicao': [
          {
            slug: 'registrar-tudo',
            texto: 'Ficar na porta anotando tudo o que acontece',
            deltas: { legitimidade: -8, autonomia: 6, coercao: 5 },
            consequencia:
              'Seu caderno vira o único registro independente do dia. Ele também vira o motivo pelo qual você é convidado a sair da calçada duas vezes.',
          },
          {
            slug: 'telegrama-capital',
            texto: 'Mandar telegrama para a capital durante a votação',
            deltas: { legitimidade: -10, autonomia: 4 },
            consequencia:
              'A notícia sai do município antes da urna fechar. Pela primeira vez, alguém de fora está olhando enquanto ainda dá tempo.',
          },
          {
            slug: 'acompanhar-de-longe',
            texto: 'Acompanhar de longe, sem se expor',
            deltas: { coercao: -3 },
            consequencia:
              'Você vê tudo e não é visto. O relato existe, mas ninguém pode confirmar que você estava lá.',
          },
        ],
        'trabalhador-rural': [
          {
            slug: 'votar-como-mandaram',
            texto: 'Entregar a cédula que te deram',
            deltas: { curral: 12, favor: 6, autonomia: -8 },
            consequencia:
              'Você entregou o papel sem abrir. Foi rápido, ninguém falou nada, e no caminho de volta serviram o almoço prometido.',
          },
          {
            slug: 'votar-diferente',
            texto: 'Votar diferente do que combinaram, mesmo com todo mundo olhando',
            deltas: { autonomia: 18, curral: -12, coercao: 8 },
            consequencia:
              'A mesa viu. O homem da janela viu. Você votou no que quis e saiu andando — e passou o resto do dia calculando o preço disso. No coronelismo real, esse preço variava de um aviso a uma visita armada à sua porta à noite. É por isso que votar diferente, sozinho e à vista de todos, era um dos atos mais raros — e mais corajosos — que um trabalhador rural podia fazer.',
            evento: {
              imagem: '/imagens/a-terra-do-favor/eventos/visita-noturna.jpg',
              texto:
                'Dias depois, dois homens a cavalo param na porta da sua casa ao anoitecer. Não dizem muito — não precisam. Episódios como esse, documentados por LEAL (1949), eram a forma mais comum de coerção no coronelismo: não a violência em si, mas a certeza de que ela podia vir a qualquer hora.',
              reacoes: [
                {
                  slug: 'negar',
                  texto: 'Negar que votou diferente',
                  resultado: 'Você diz que não sabe do que estão falando. Eles não insistem — mas também não parecem convencidos. A visita, de todo jeito, já foi o recado.',
                },
                {
                  slug: 'recuar',
                  texto: 'Pedir desculpas e prometer se explicar com o coronel',
                  resultado: 'Você diz que foi engano, que vai resolver isso pessoalmente. Eles vão embora satisfeitos. Você passa a semana seguinte sem dormir direito, mesmo assim.',
                },
                {
                  slug: 'enfrentar',
                  texto: 'Perguntar, de frente, o que eles querem ali',
                  resultado: 'Um dos dois desce do cavalo devagar, sem pressa nenhuma. O que acontece depois não fica nesta tela — mas também não precisa: quem pergunta assim, naquele lugar, já sabe que arriscou o corpo, não só o voto.',
                },
              ],
            },
          },
          {
            slug: 'nao-votar',
            texto: 'Não comparecer',
            deltas: { curral: -6, autonomia: 3 },
            consequencia:
              'Ninguém foi buscar você. É a forma mais silenciosa de não obedecer — e também a única que não deixa registro nenhum.',
          },
        ],
      },
    },

    {
      slug: 'a-degola',
      titulo: 'A degola',
      amplitude: 30,
      efeitosFixos: { curral: 8, legitimidade: -10 },
      cena:
        'A urna foi apurada e a ata seguiu para a capital. Mas o resultado local ainda não é o resultado final: cabe à Comissão Verificadora de Poderes, no Congresso, decidir quem é diplomado — e ela costuma "degolar" os eleitos que não interessam ao governo, independentemente do que a urna disse.',
      fonte: {
        texto:
          'Como de costume, as fraudes, o suborno e as coerções eleitorais ocorreram dos dois lados, em todo o país [...]. O sistema político era um ciclo fechado e o resultado da eleição, previsível.',
        autor: 'SCHWARCZ, L. M.; STARLING, H. M. Brasil: uma biografia. São Paulo: Companhia das Letras, 2015.',
        acervo: 'Livro do 2º ano, Aula 5 (o trecho descreve 1930, mas a mecânica da degola vale para toda a Primeira República)',
        natureza: 'documental',
      },
      imagemSugerida: {
        descricao:
          'Uma ata eleitoral manuscrita da Primeira República, com assinaturas e rasuras visíveis — o documento que decidia mais que a urna.',
        arquivo: '/imagens/a-terra-do-favor/a-degola.jpg',
        onde: 'Ilustração gerada — cena genérica. Acervos possíveis para o documento real: Arquivo Nacional, Arquivo Público do Estado de São Paulo.',
      },
      investigacao: {
        olhar:
          'Na capital, uma sala com pilhas de atas vindas de centenas de municípios. Ninguém ali esteve em nenhuma das eleições. As decisões saem por lista, em poucas horas.',
        fontes: [
          {
            slug: 'politica-dos-governadores',
            tipo: 'ler',
            titulo: 'A política dos governadores',
            papeis: ['presidente-estado', 'coronel', 'imprensa-oposicao'],
            trecho:
              'O equilíbrio político que fragmentou a distribuição do poder através de um arranjo não escrito entre o governo federal e as elites regionais – a Política dos Governadores – [...]. Washington Luís estava convencido de que não se governava uma República com eleições e votos, e sim com o estrito controle das forças políticas estaduais.',
            autor: 'SCHWARCZ, L. M.; STARLING, H. M. Brasil: uma biografia. São Paulo: Companhia das Letras, 2015.',
            acervo: 'Livro do 2º ano, Aula 5',
            natureza: 'documental',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        coronel: [
          {
            slug: 'cobrar-a-conta',
            texto: 'Cobrar do presidente do estado os cargos prometidos',
            deltas: { favor: 12, curral: 6 },
            consequencia:
              'A conta é paga em nomeações. O município ganha delegado novo, coletor novo e uma vaga de professora — todos indicados por você.',
          },
          {
            slug: 'pedir-degola',
            texto: 'Pedir a degola dos poucos eleitos da oposição',
            deltas: { legitimidade: -12, autonomia: -8, curral: 8 },
            consequencia:
              'Os votos existiram, foram contados e não valeram nada. Quem votou na oposição descobriu que votar não era a etapa que decidia.',
          },
          {
            slug: 'aceitar-resultado',
            texto: 'Aceitar o resultado como saiu da urna',
            deltas: { legitimidade: 10, autonomia: 6 },
            consequencia:
              'Você não moveu um dedo na capital. O município passa a ter, pela primeira vez, um vereador que ninguém indicou.',
          },
        ],
        'presidente-estado': [
          {
            slug: 'degolar-oposicao',
            texto: 'Degolar os eleitos que não são da base do governo',
            deltas: { legitimidade: -15, autonomia: -10, curral: 10 },
            consequencia:
              'A Comissão Verificadora resolve em uma tarde o que o município levou um ano para decidir. Ninguém precisa justificar nada.',
          },
          {
            slug: 'diplomar-todos',
            texto: 'Diplomar todos os eleitos, inclusive os incômodos',
            deltas: { legitimidade: 14, autonomia: 10, curral: -8 },
            consequencia:
              'Um resultado de urna sobrevive intacto até o fim do processo. É um precedente pequeno e barulhento.',
          },
          {
            slug: 'negociar-caso-a-caso',
            texto: 'Negociar caso a caso: diplomar alguns, cortar outros',
            deltas: { legitimidade: -6, favor: 10 },
            consequencia:
              'Cada diploma vira moeda. Os eleitos que ficaram aprenderam a quem devem o mandato — e não é ao eleitor.',
          },
        ],
        delegado: [
          {
            slug: 'assinar-ata-falsa',
            texto: 'Assinar a ata como testemunha, sem ler',
            deltas: { legitimidade: -10, curral: 6 },
            consequencia:
              'Sua assinatura dá aparência oficial a um documento que você não conferiu. É a parte mais barata e mais eficiente de toda a fraude.',
          },
          {
            slug: 'recusar-assinar',
            texto: 'Recusar-se a assinar o que não presenciou',
            deltas: { legitimidade: 12, autonomia: 6 },
            consequencia:
              'A ata segue mesmo assim, mas com uma assinatura faltando — e uma assinatura faltando é a única coisa que um arquivo consegue lembrar.',
          },
          {
            slug: 'entregar-relatorio',
            texto: 'Entregar um relatório reservado sobre o que viu no dia',
            deltas: { legitimidade: 8, coercao: -5 },
            consequencia:
              'O relatório provavelmente será engavetado. Provavelmente. Ele existe, tem data e tem autor.',
          },
        ],
        professora: [
          {
            slug: 'guardar-a-lista',
            texto: 'Guardar sua cópia da lista de presença da mesa',
            deltas: { legitimidade: 8, autonomia: 5 },
            consequencia:
              'Um papel de professora, guardado numa gaveta de escola, passa a ser a única prova independente de quem realmente compareceu.',
          },
          {
            slug: 'ensinar-o-que-houve',
            texto: 'Contar aos alunos, na semana seguinte, o que aconteceu na eleição',
            deltas: { autonomia: 14, favor: -8, coercao: 5 },
            consequencia:
              'A aula não muda o resultado. Mas as crianças que ouviram vão ser eleitoras em dez anos, e vão saber o nome do que viram.',
          },
          {
            slug: 'seguir-a-rotina',
            texto: 'Voltar à rotina e não tocar no assunto',
            deltas: { favor: 5 },
            consequencia:
              'A escola reabre na segunda como se a semana anterior não tivesse existido. Para muitos alunos, é como se de fato não tivesse.',
          },
        ],
        'imprensa-oposicao': [
          {
            slug: 'publicar-a-degola',
            texto: 'Publicar a degola em manchete, com nomes e números',
            deltas: { legitimidade: -12, autonomia: 8, coercao: 6 },
            consequencia:
              'A manchete circula por três dias e some. Mas a coleção do jornal fica — e é dela que, décadas depois, um historiador vai tirar este município do esquecimento.',
          },
          {
            slug: 'processar',
            texto: 'Entrar com recurso formal contra a apuração',
            deltas: { legitimidade: 8, autonomia: 5 },
            consequencia:
              'O recurso quase certamente será negado. Mas negar exige escrever a negativa — e a negativa também vira documento.',
          },
          {
            slug: 'desistir',
            texto: 'Encerrar o assunto — a próxima eleição é daqui a quatro anos',
            deltas: { legitimidade: -5, autonomia: -4 },
            consequencia:
              'O jornal volta a falar de preço de gado e festa da padroeira. O município volta a não existir para ninguém de fora.',
          },
        ],
        'trabalhador-rural': [
          {
            slug: 'aceitar-como-sempre',
            texto: 'Aceitar — sempre foi assim',
            deltas: { favor: 8, autonomia: -6, curral: 6 },
            consequencia:
              'Você foi trabalhar na segunda como em qualquer segunda. A eleição virou mais um assunto que aconteceu com você, não por você.',
          },
          {
            slug: 'perguntar-por-que',
            texto: 'Perguntar em voz alta por que o voto não valeu',
            deltas: { autonomia: 14, favor: -8, coercao: 6 },
            consequencia:
              'Ninguém soube responder direito — nem o coronel, nem o padre, nem o delegado. A pergunta ficou circulando pela vila sem dono, que é o jeito mais difícil de calar uma pergunta.',
          },
          {
            slug: 'guardar-para-proxima',
            texto: 'Guardar o aprendizado para a próxima eleição',
            deltas: { autonomia: 10, curral: -5 },
            consequencia:
              'Você aprendeu como a máquina funciona por dentro: o alistamento, a véspera, a cédula aberta, a ata. Da próxima vez, você já entra sabendo onde ela aperta.',
          },
        ],
      },
    },
  ],

  desfecho: {
    fixo: 'O candidato do governo é diplomado. Em toda partida.',
    variavel: ['coerção', 'autonomia conquistada', 'legitimidade queimada'],
    textoFecho:
      'O resultado nunca esteve em disputa — e agora vocês sabem por quê: o voto era aberto, quem pagava o alistamento escolhia o eleitor, e quem escrevia a ata decidia mais que a urna. Isso tem nome, e o nome só vem agora: coronelismo, clientelismo, mandonismo — as três peças do que os historiadores chamam de liberalismo oligárquico. A Constituição de 1891 era liberal no papel. Vocês acabaram de atravessar o que ela era na prática.\n\n' +
      'Uma coisa que o jogo simplifica: a coerção que vocês sentiram aqui — o medo, a pressão, o "alguém contou ao coronel" — no coronelismo real também incluía capangas armados, e desobedecer podia custar mais do que reputação. LEAL (1949), a mesma obra citada nas fontes deste cenário, documenta esse tipo de violência como parte estrutural do sistema, não exceção. O jogo não mostra isso acontecer a cada rodada porque, se mostrasse, toda partida viraria uma sequência previsível de punição — e a coerção do coronelismo funcionava, em parte, por nunca ser previsível. Mas o preço de resistir era real, e às vezes era esse.',
    perguntasDebate: [
      'A barra de "Autonomia do eleitor" começou em 15. Onde ela terminou — e quem, na turma, a empurrou para cima?',
      'O boato da "lista" do coronel não existia. Quantas decisões da turma foram tomadas por causa dele mesmo assim?',
      'Se o resultado da eleição estava decidido de antemão, o que exatamente vocês estavam disputando durante as quatro rodadas?',
    ],
    perguntasReflexao: [
      {
        nivel: 'Sua experiência',
        pergunta: 'No papel que você jogou, você teve alguma escolha real — ou o resultado já estava dado desde o alistamento?',
      },
      {
        nivel: 'O conceito',
        pergunta: 'A Constituição de 1891 dizia que o voto era livre. Qual foi o mecanismo mais forte que fez, na prática, ele não ser — o dinheiro, o medo, ou a falta de alternativa?',
      },
      {
        nivel: 'Além desta aula',
        pergunta: 'Vocês conseguem pensar numa regra de hoje que também é "livre" no papel, mas funciona diferente pra quem tem menos poder?',
      },
    ],
  },
}
