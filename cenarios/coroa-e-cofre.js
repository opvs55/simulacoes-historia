// "A Coroa e o Cofre" — França, 1661-1685. Design completo na seção 7 do
// GDD (docs/GDD-v2-modulo-simulacoes.md). Os alunos são personagens
// fictícios comuns; o rei da partida é o Conselho da Coroa, não o retrato
// de Luís XIV — nenhuma imagem deste cenário retrata uma pessoa real
// nomeada (nem Luís XIV, nem Colbert, nem Bossuet).
//
// Fontes: eventos e datas (criação da Companhia Francesa das Índias
// Orientais em 1664, tarifa de 1667, Guerra Franco-Holandesa 1672-1678,
// Édito de Fontainebleau em 18 de outubro de 1685) são fatos históricos
// bem estabelecidos, marcados como `documental`. "Vozes de época" — o que
// um camponês, artesão ou clérigo teria dito — não são citações reais
// verificadas, então são sempre `recriada`, nunca atribuídas a uma pessoa
// nomeada específica.
export default {
  slug: 'coroa-e-cofre',
  versao: 1,
  serie: '1a',
  era: 'absolutismo',
  titulo: 'A Coroa e o Cofre',
  pergunta: 'Se o rei podia tudo, por que precisava pedir dinheiro emprestado?',

  introducao:
    'França, 1661. Com a morte do cardeal Mazarino, Luís XIV anuncia que governará sozinho, ' +
    'sem primeiro-ministro. Nas duas décadas seguintes, a Coroa vai unificar leis, moedas e ' +
    'impostos, sufocar a diversidade religiosa em nome de "uma fé, um reino", e financiar tudo ' +
    'isso — inclusive guerras — com dinheiro que nunca é totalmente seu. O absolutismo que os ' +
    'livros descrevem como o poder de um homem só é, de perto, uma rede de dependências: da ' +
    'nobreza que trocou poder por pensão, do clero que prega obediência, da burguesia que ' +
    'empresta a juros, dos artesãos que sustentam o monopólio real, dos camponeses que pagam a ' +
    'conta final de tudo isso.',

  indicadores: [
    { slug: 'tesouro', nome: 'Tesouro Real', inicial: 40, faixas: ['vazio', 'apertado', 'folgado'] },
    { slug: 'legitimidade', nome: 'Legitimidade (direito divino)', inicial: 70, faixas: ['contestada', 'aceita', 'inquestionável'] },
    { slug: 'ordem', nome: 'Ordem interna', inicial: 60, faixas: ['motim', 'tensa', 'obedecida'] },
    { slug: 'comercio', nome: 'Comércio e manufaturas', inicial: 35, faixas: ['estagnado', 'crescendo', 'próspero'] },
    { slug: 'fome', nome: 'Fome no campo', inicial: 45, faixas: ['contida', 'crescente', 'revolta'] },
    { slug: 'divida', nome: 'Dívida com a burguesia', inicial: 20, faixas: ['controlada', 'pesada', 'impagável'] },
  ],

  papeis: [
    {
      slug: 'conselho-coroa',
      nome: 'Conselho da Coroa',
      bloco: 'elite',
      peso: 8,
      cota: 1,
      perguntaGuia: 'Como mandar sem quebrar?',
      contexto:
        'Você fala em nome do rei — governo pessoal, sem primeiro-ministro. Cada decreto que ' +
        'assina precisa ser pago por alguém: pela terra, pela venda de um cargo, ou por um ' +
        'empréstimo que a Coroa não sabe quando vai quitar.',
      icone: '/imagens/coroa-e-cofre/papeis/conselho-coroa.jpg',
    },
    {
      slug: 'nobreza-espada',
      nome: 'Nobreza de espada',
      bloco: 'elite',
      peso: 4,
      cota: 3,
      perguntaGuia: 'Como manter privilégio sem poder?',
      contexto:
        'Sua família tem título há gerações, mas cada vez menos poder de decisão sobre a própria ' +
        'terra. A corte oferece pensão, cargo, proximidade do rei — em troca de deixar de ser um ' +
        'senhor de guerra e virar um cortesão.',
      icone: '/imagens/coroa-e-cofre/papeis/nobreza-espada.jpg',
    },
    {
      slug: 'alto-clero',
      nome: 'Alto clero',
      bloco: 'elite',
      peso: 4,
      cota: 3,
      perguntaGuia: 'A fé serve à Coroa, ou a Coroa serve à fé?',
      contexto:
        'Você tem o púlpito e a confissão — sabe da fome e do descontentamento antes de o ' +
        'Conselho saber. A Coroa quer sua palavra a favor da obediência; sua consciência quer ' +
        'outra coisa, nem sempre a mesma.',
      icone: '/imagens/coroa-e-cofre/papeis/alto-clero.jpg',
    },
    {
      slug: 'burguesia-mercantil',
      nome: 'Burguesia mercantil',
      bloco: 'mediador',
      peso: 3,
      cota: 5,
      perguntaGuia: 'Vale comprar um lugar na ordem que me despreza?',
      contexto:
        'Seu dinheiro financia companhias, guerras e a própria Coroa — mas o título de nobreza ' +
        'continua fora do seu alcance, a menos que o compre. Um mercador rico ainda é, aos olhos ' +
        'da corte, só um mercador.',
      icone: '/imagens/coroa-e-cofre/papeis/burguesia-mercantil.jpg',
    },
    {
      slug: 'mestres-artesaos',
      nome: 'Mestres de ofício e artesãos',
      bloco: 'popular',
      peso: 1,
      cota: 6,
      perguntaGuia: 'O monopólio do rei me protege ou me estrangula?',
      contexto:
        'Sua corporação regula quem pode produzir o quê, e como — em teoria, para garantir ' +
        'qualidade. Na prática, também trava o preço que você pode cobrar e limita quem pode ' +
        'virar mestre depois de você.',
      icone: '/imagens/coroa-e-cofre/papeis/mestres-artesaos.jpg',
    },
    {
      slug: 'camponeses',
      nome: 'Camponeses',
      bloco: 'popular',
      peso: 1,
      cota: 12,
      perguntaGuia: 'Onde termina o imposto e começa a fome?',
      contexto:
        'Você paga a taille — o imposto direto do qual nobreza e clero são isentos — além do ' +
        'dízimo à Igreja e da renda ao senhor da terra. Toda guerra da Coroa, toda obra de ' +
        'Versalhes, sai primeiro do seu celeiro.',
      icone: '/imagens/coroa-e-cofre/papeis/camponeses.jpg',
    },
  ],

  rodadas: [
    {
      slug: 'um-rei-uma-lei',
      titulo: 'Um rei, uma lei, um peso, uma medida',
      amplitude: 22,
      cena:
        'Cada província da França mede seu grão numa vara diferente, cobra impostos por regras ' +
        'diferentes, e responde a uma nobreza local que às vezes pesa mais que o próprio rei. O ' +
        'Conselho da Coroa decide: é hora de unificar moeda, impostos, exército e lei sob uma só ' +
        'autoridade.',
      contexto:
        'Enquanto a Coroa organiza a centralização em Paris, nas províncias três feudos vizinhos ' +
        'ainda usam três varas de medir diferentes para o mesmo saco de grão — a unificação leva ' +
        'anos para chegar ao campo, mesmo depois de decretada na capital.',
      imagemSugerida: {
        descricao: 'Três varas de medir de tamanhos diferentes lado a lado, sobre um saco de grãos, em um mercado rural do século XVII.',
        arquivo: '/imagens/coroa-e-cofre/um-rei-uma-lei.jpg',
        onde: 'Ilustração gerada — cena genérica de mercado rural francês do século XVII, não reprodução de nenhuma gravura específica.',
      },
      investigacao: {
        olhar: 'Um mapa de intendências reais recém-criadas, sobrepondo fronteiras que não coincidem com nenhum feudo antigo.',
        fontes: [
          {
            slug: 'relatorio-intendente',
            tipo: 'ler',
            titulo: 'O relatório do intendente',
            papeis: ['conselho-coroa'],
            trecho:
              '"Nesta província, três medidas de grão correm ao mesmo tempo — a do rei, a do senhor ' +
              'local e a do mosteiro. Cada uma favorece quem a cobra. Recomendo que Vossa Majestade ' +
              'não anuncie a unificação sem antes garantir que os arrecadadores locais serão pagos ' +
              'de outra forma — ou o decreto será obedecido no papel e ignorado no celeiro."',
            acervo: 'Reconstituição — plausível, no estilo dos relatórios de intendentes do período; nenhum documento específico é citado como fonte real.',
            natureza: 'recriada',
            confiavel: true,
            destrancaOpcao: 'imposto-terra',
          },
          {
            slug: 'a-taille',
            tipo: 'ler',
            titulo: 'A taille, o imposto que só o povo paga',
            papeis: ['camponeses'],
            trecho:
              'A taille é o principal imposto direto do reino francês — e nobreza e clero são ' +
              'legalmente isentos dela. O peso da Coroa recai quase todo sobre quem já tem menos.',
            autor: 'Historiografia consolidada sobre o sistema fiscal do Antigo Regime francês — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado sobre a estrutura fiscal francesa do Antigo Regime.',
            natureza: 'documental',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-coroa': [
          {
            slug: 'cargo-vendido',
            texto: 'Vender o cargo de arrecadador a quem pagar mais por ele',
            deltas: { tesouro: 18, legitimidade: -6, divida: 8 },
            consequencia: 'O Tesouro respira, mas o cargo vai para quem sabe comprar, não para quem sabe arrecadar com justiça — e o comprador vai querer reaver o que gastou, com juros, do próprio povo.',
          },
          {
            slug: 'imposto-terra',
            texto: 'Impor um novo tributo direto sobre a terra',
            deltas: { tesouro: 10, fome: 14 },
            consequencia: 'O dinheiro entra rápido, mas sai do mesmo lugar de sempre — quem já paga a taille agora paga mais.',
          },
          {
            slug: 'emprestimo-banqueiros',
            texto: 'Tomar empréstimo com banqueiros da praça de Paris',
            deltas: { tesouro: 20, divida: 16 },
            consequencia: 'O caixa enche sem tocar em ninguém agora — mas a Coroa acaba de criar um credor que um dia vai cobrar, e não com decreto.',
          },
        ],
        'nobreza-espada': [
          {
            slug: 'aceitar-corte',
            texto: 'Aceitar o convite para viver na órbita da corte, com pensão',
            deltas: { ordem: 8, legitimidade: 6 },
            consequencia: 'Sua espada vira cerimônia. Você troca comando sobre a própria terra por proximidade do poder — e uma renda que depende inteiramente de continuar agradando.',
          },
          {
            slug: 'resistir-provincia',
            texto: 'Permanecer na província, mandando como sempre mandou',
            deltas: { ordem: -12, legitimidade: -4 },
            consequencia: 'Você mantém a autoridade local — mas cada vez mais isolado de onde as decisões de verdade são tomadas agora.',
          },
        ],
        'camponeses': [
          {
            slug: 'pagar',
            texto: 'Pagar o que for cobrado e seguir plantando',
            deltas: { ordem: 6, fome: 8 },
            consequencia: 'Você não chama atenção — e sobra menos grão para o inverno.',
          },
          {
            slug: 'esconder-colheita',
            texto: 'Esconder parte da colheita antes do arrecadador passar',
            deltas: { fome: -6, tesouro: -8 },
            evento: {
              texto:
                'Um vizinho denuncia o esconderijo ao arrecadador local — talvez por medo, talvez por ' +
                'inveja de uma colheita que parecia menor do que era.',
              reacoes: [
                { slug: 'negar', texto: 'Negar tudo e devolver só uma parte', resultado: 'O arrecadador leva o que acha e desconfia de você dali em diante — mas o grão escondido de verdade continua escondido.' },
                { slug: 'subornar', texto: 'Oferecer parte do que sobrou ao próprio arrecadador', resultado: 'Ele aceita, e olha para o outro lado desta vez — um acordo que só funciona enquanto durar a confiança entre vocês dois.' },
              ],
            },
            consequencia: 'Sua família come melhor este inverno — se ninguém falar.',
          },
          {
            slug: 'fugir-cidade',
            texto: 'Deixar a terra e tentar a vida na cidade',
            deltas: { comercio: 6, fome: 10 },
            consequencia: 'Uma boca a menos na aldeia, uma boca a mais competindo por trabalho na cidade — a fome não desaparece, só muda de endereço.',
          },
        ],
        'alto-clero': [
          {
            slug: 'negociar-dom-gratuito',
            texto: 'Negociar com a Coroa um "dom gratuito" da Igreja em vez de imposto direto',
            deltas: { legitimidade: 8, tesouro: 6 },
            consequencia: 'A Igreja mantém sua isenção formal da taille — e paga, por fora, um valor que ela mesma decide entregar, não que lhe é cobrado.',
          },
          {
            slug: 'apoiar-unificacao',
            texto: 'Apoiar publicamente a unificação de leis e medidas',
            deltas: { legitimidade: 6, ordem: 4 },
            consequencia: 'Seu apoio ajuda a legitimar a centralização — desde que os privilégios e tribunais próprios da Igreja continuem de fora dela.',
          },
        ],
        'burguesia-mercantil': [
          {
            slug: 'comprar-cargo-administrativo',
            texto: 'Comprar um dos novos cargos administrativos criados pela reforma',
            deltas: { divida: 6, comercio: 6 },
            consequencia: 'Você agora tem um pé dentro do aparato do Estado — pago do próprio bolso, mas com influência que nenhum título de nascença te daria.',
          },
          {
            slug: 'lucrar-padronizacao',
            texto: 'Reorganizar seus negócios em torno da nova moeda e medida únicas',
            deltas: { comercio: 10 },
            consequencia: 'Um sistema único de pesos e moeda facilita negociar entre províncias que antes exigiam três conversões diferentes — quem se adapta primeiro, larga na frente.',
          },
        ],
        'mestres-artesaos': [
          {
            slug: 'adotar-medida-real',
            texto: 'Adotar de imediato a nova medida padrão do rei',
            deltas: { ordem: 6, comercio: 4 },
            consequencia: 'Seus produtos já saem certificados na medida que o resto do reino está aprendendo a usar — uma vantagem pequena, mas real, sobre quem ainda relutava.',
          },
          {
            slug: 'manter-medida-local',
            texto: 'Continuar usando a medida local, que os fregueses já conhecem',
            deltas: { ordem: -6, comercio: -2 },
            consequencia: 'Seus clientes de sempre não notam diferença — mas cada venda fora da aldeia agora exige uma conversão que ninguém mais quer fazer.',
          },
        ],
      },
    },

    {
      slug: 'ouro-que-nao-se-deixa-sair',
      titulo: 'O ouro que não se deixa sair',
      amplitude: 24,
      cena:
        'A política econômica da Coroa tem um objetivo simples de dizer e difícil de sustentar: ' +
        'que o ouro entre e não saia. Monopólios reais, tarifas sobre produtos estrangeiros e ' +
        'manufaturas subsidiadas pelo Estado tentam fazer a França produzir tudo que hoje compra ' +
        'de fora.',
      efeitosFixos: { comercio: 6 },
      contexto:
        'Em 1664 nasce a Companhia Francesa das Índias Orientais, com monopólio real sobre o ' +
        'comércio asiático; três anos depois, uma tarifa aumenta fortemente as taxas sobre ' +
        'tecidos e produtos importados — sobretudo da Holanda, que não vai esquecer.',
      imagemSugerida: {
        descricao: 'Fardos de tecido sendo carregados num porto francês do século XVII, com um funcionário real conferindo uma lista de mercadorias contra um selo de monopólio.',
        arquivo: '/imagens/coroa-e-cofre/ouro-que-nao-se-deixa-sair.jpg',
        onde: 'Ilustração gerada — cena genérica de porto francês do século XVII, não reprodução de nenhuma gravura específica.',
      },
      investigacao: {
        olhar: 'Um cartaz real anunciando a nova Companhia das Índias e convocando investidores — com o brasão da Coroa acima do texto.',
        fontes: [
          {
            slug: 'companhia-indias',
            tipo: 'ler',
            titulo: 'A Companhia Francesa das Índias Orientais',
            papeis: ['conselho-coroa', 'burguesia-mercantil'],
            trecho:
              'Fundada em 1664 por decisão da Coroa, a Companhia recebe monopólio real sobre o ' +
              'comércio francês com a Ásia — quem quiser negociar naquela rota sem autorização real ' +
              'está, tecnicamente, contrabandeando contra o próprio Estado.',
            autor: 'Historiografia consolidada sobre a política mercantilista de Colbert — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado sobre a política mercantilista de Colbert.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-tarifa',
            tipo: 'ouvir',
            titulo: '"Dizem que vai ter guerra por causa da tarifa"',
            papeis: ['burguesia-mercantil', 'mestres-artesaos'],
            trecho: 'Rumores de que os holandeses vão retaliar a nova tarifa com um bloqueio comercial já circulam nas tavernas do porto, meses antes de qualquer coisa acontecer de fato.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Não era bloqueio — a tensão pela tarifa de 1667 alimenta, alguns anos depois, a Guerra Franco-Holandesa de 1672, mas não do jeito imediato que o boato do porto sugeria.',
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-coroa': [
          {
            slug: 'carta-monopolio',
            texto: 'Conceder carta de monopólio a uma grande companhia',
            deltas: { comercio: 16, tesouro: 6 },
            consequencia: 'O comércio de longa distância cresce sob controle direto da Coroa — e os pequenos negociantes fora do círculo do monopólio perdem o acesso a essa rota inteira.',
          },
          {
            slug: 'tarifa-protecionista',
            texto: 'Impor tarifa alta sobre tecidos e manufaturados estrangeiros',
            deltas: { comercio: 10, ordem: -4 },
            consequencia: 'A manufatura francesa ganha vantagem em casa — e a Holanda, principal afetada, começa a tratar a França como rival declarado, não só comercial.',
          },
          {
            slug: 'manufatura-subsidiada',
            texto: 'Subsidiar uma manufatura real de tecidos de luxo',
            deltas: { comercio: 12, tesouro: -10 },
            consequencia: 'A França passa a produzir o que antes importava da Itália — a um custo que sai direto do Tesouro, não do lucro da própria manufatura.',
          },
        ],
        'burguesia-mercantil': [
          {
            slug: 'financiar-companhia',
            texto: 'Investir na Companhia das Índias',
            deltas: { divida: 6, comercio: 8 },
            consequencia: 'Seu capital ajuda a sustentar o projeto da Coroa — e o poder de barganha que isso te dá é real, mesmo sem título nenhum.',
          },
          {
            slug: 'comprar-titulo',
            texto: 'Usar o lucro para comprar um título de nobreza',
            deltas: { legitimidade: 4, comercio: -4 },
            consequencia: 'Você sai do próprio bloco social — de mercador a nobre de toga. A corte ainda vai te tratar como recém-chegado, mas seus filhos já nascem nobres.',
          },
          {
            slug: 'contrabandear',
            texto: 'Negociar por fora do monopólio, sem autorização real',
            deltas: { comercio: 10, ordem: -8 },
            evento: {
              texto: 'Um funcionário da alfândega real intercepta parte da sua carga não declarada num porto secundário.',
              reacoes: [
                { slug: 'subornar-funcionario', texto: 'Oferecer parte da carga como suborno', resultado: 'O funcionário aceita e a carga segue viagem — mas agora ele sabe o seu nome, e vai lembrar.' },
                { slug: 'assumir-perda', texto: 'Abandonar a carga apreendida e seguir sem ela', resultado: 'Você perde o carregamento, mas mantém a rota livre de suspeita para a próxima vez.' },
              ],
            },
            consequencia: 'Fora do monopólio, o lucro é maior — e o risco também.',
          },
        ],
        'mestres-artesaos': [
          {
            slug: 'entrar-corporacao',
            texto: 'Seguir as regras da corporação regulada pela Coroa',
            deltas: { ordem: 6, comercio: 4 },
            consequencia: 'Seu ofício fica protegido da concorrência desleal — e também travado no preço e no ritmo que a corporação permite.',
          },
          {
            slug: 'produzir-fora-monopolio',
            texto: 'Produzir e vender fora das regras da corporação',
            deltas: { comercio: 8, ordem: -6 },
            consequencia: 'Você vende mais rápido e mais barato do que os concorrentes regulados — até que alguém da corporação decida denunciar.',
          },
          {
            slug: 'migrar-oficio',
            texto: 'Abandonar o ofício da família por outro mais protegido pela Coroa',
            deltas: { comercio: 2, fome: -4 },
            consequencia: 'Décadas de tradição familiar ficam para trás — mas o novo ofício, subsidiado pela Coroa, paga as contas com menos sobressalto.',
          },
        ],
        'nobreza-espada': [
          {
            slug: 'desprezar-comercio',
            texto: 'Manter distância — comércio é "coisa de mercador", não de nobre',
            deltas: { legitimidade: 2, comercio: -2 },
            consequencia: 'Sua honra permanece intacta aos olhos antigos da nobreza — enquanto burgueses que você despreza acumulam a riqueza que hoje pesa mais que um brasão.',
          },
          {
            slug: 'investir-terras-manufatura',
            texto: 'Direcionar a produção das próprias terras para abastecer as novas manufaturas',
            deltas: { comercio: 6, legitimidade: -2 },
            consequencia: 'Você lucra com o mercantilismo sem admitir isso em voz alta — um nobre que virou fornecedor, ainda que ninguém use essa palavra na sua presença.',
          },
        ],
        'alto-clero': [
          {
            slug: 'silencio-mercantilismo',
            texto: 'Não se pronunciar sobre a corrida por lucro e monopólio',
            deltas: { legitimidade: -2 },
            consequencia: 'Seu silêncio evita conflito com a Coroa — e deixa sem resposta quem esperava alguma palavra sobre a cobiça que a nova economia parece incentivar.',
          },
          {
            slug: 'abencoar-manufatura-real',
            texto: 'Abençoar publicamente a nova manufatura real como obra que gera trabalho honesto',
            deltas: { legitimidade: 6, ordem: 4 },
            consequencia: 'Sua bênção dá ao projeto da Coroa um verniz moral — trabalho organizado, não ganância, é a leitura que você oferece ao povo.',
          },
        ],
        'camponeses': [
          {
            slug: 'vender-materia-prima',
            texto: 'Vender lã e linho às novas manufaturas reais em vez de tecer em casa',
            deltas: { comercio: 6, fome: -4 },
            consequencia: 'A renda extra ajuda no inverno — e o tear de casa, que sustentava parte da família, começa a ficar parado.',
          },
          {
            slug: 'manter-teares-caseiros',
            texto: 'Continuar tecendo em casa, fora do circuito das manufaturas reais',
            deltas: { comercio: -4, fome: 2 },
            consequencia: 'Você não depende de nenhum comprador só — mas também não vê nenhum centavo do dinheiro que passa pelas manufaturas do rei.',
          },
        ],
      },
    },

    {
      slug: 'uma-fe-um-reino',
      titulo: 'Uma fé, um reino',
      amplitude: 20,
      cena:
        'A Coroa vê a diversidade religiosa como uma ameaça à própria unidade que está construindo ' +
        '— um reino com duas fés, argumenta o Conselho, é um reino com duas lealdades possíveis. A ' +
        'pressão sobre os protestantes franceses, os huguenotes, cresce ano após ano.',
      contexto:
        'Enquanto a Coroa debate o tom da política religiosa, soldados começam a ser alojados à ' +
        'força em casas de famílias huguenotes em algumas províncias — uma pressão informal que ' +
        'antecede qualquer decreto formal contra elas.',
      imagemSugerida: {
        descricao: 'O interior modesto de um templo protestante francês do século XVII, banco de madeira simples, sem imagens religiosas nas paredes.',
        arquivo: '/imagens/coroa-e-cofre/uma-fe-um-reino.jpg',
        onde: 'Ilustração gerada — cena genérica; os templos huguenotes anteriores a 1685 raramente sobreviveram, não é reprodução de um templo específico.',
      },
      investigacao: {
        olhar: 'Um mapa de província marcando, em pontos vermelhos, onde soldados foram alojados em casas de famílias huguenotes nos últimos meses.',
        fontes: [
          {
            slug: 'sermao-obediencia',
            tipo: 'ouvir',
            titulo: 'Um sermão sobre obediência ao rei',
            papeis: ['alto-clero'],
            trecho:
              '"A autoridade dos reis vem de Deus — quem resiste ao príncipe resiste à ordem que ' +
              'Deus estabeleceu. A unidade da fé é a unidade do reino; onde há uma só Igreja, há um só ' +
              'povo obediente a um só rei."',
            acervo: 'Reconstituição no estilo dos sermões de teóricos do direito divino do período (ex.: Bossuet); não é citação literal de nenhum sermão específico.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'dragonnades',
            tipo: 'ler',
            titulo: 'Soldados hospedados à força',
            papeis: ['camponeses', 'mestres-artesaos'],
            trecho:
              'Nas regiões com mais huguenotes, tropas reais passam a ser alojadas em casas de ' +
              'famílias protestantes — sem escolha da família — até que a família se converta ao ' +
              'catolicismo. A prática fica conhecida, mais tarde, como dragonnade.',
            autor: 'Historiografia consolidada sobre a política religiosa do reinado de Luís XIV — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado, intensificado sobretudo a partir de 1681.',
            natureza: 'documental',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        'alto-clero': [
          {
            slug: 'pregar-obediencia',
            texto: 'Pregar a obediência à Coroa e à fé única',
            deltas: { legitimidade: 14, ordem: 8 },
            consequencia: 'Sua palavra reforça a autoridade real — e ajuda a preparar o terreno para uma pressão sobre os huguenotes que só vai crescer.',
          },
          {
            slug: 'denunciar-luxo',
            texto: 'Denunciar o luxo da corte em vez de pregar contra os huguenotes',
            deltas: { legitimidade: -6, fome: -4 },
            consequencia: 'Você desvia o sermão do alvo esperado — arrisca o favor da Coroa, mas alivia, por um instante, a pressão sobre quem mais sofre com a fome.',
          },
          {
            slug: 'calar',
            texto: 'Evitar se posicionar publicamente',
            deltas: { legitimidade: -2 },
            consequencia: 'Seu silêncio não convence ninguém — nem a Coroa, que esperava apoio, nem quem esperava alguma palavra de proteção.',
          },
        ],
        'conselho-coroa': [
          {
            slug: 'tolerancia-pragmatica',
            texto: 'Manter tolerância pragmática por enquanto',
            deltas: { comercio: 10, legitimidade: -4 },
            consequencia: 'Os mercadores e artesãos huguenotes — muitos deles produtivos e ligados a redes de comércio internacional — permanecem, e o comércio segue funcionando.',
          },
          {
            slug: 'intensificar-pressao',
            texto: 'Intensificar a pressão por conversão',
            deltas: { legitimidade: 10, comercio: -12 },
            consequencia: 'A unidade religiosa avança aos olhos da corte — enquanto famílias com capital, oficinas e redes comerciais começam a considerar deixar o reino.',
          },
        ],
        'nobreza-espada': [
          {
            slug: 'apoiar-uniformidade',
            texto: 'Apoiar a uniformidade religiosa como prova de lealdade à Coroa',
            deltas: { legitimidade: 8, ordem: 4 },
            consequencia: 'Seu apoio público reforça a imagem de uma nobreza unida em torno do rei — mesmo quando isso significa pressionar vizinhos e dependentes protestantes.',
          },
          {
            slug: 'proteger-dependentes',
            texto: 'Proteger discretamente dependentes huguenotes nas próprias terras',
            deltas: { legitimidade: -4, ordem: 2 },
            consequencia: 'Você mantém intacta uma rede de lealdade construída por gerações — arriscando parecer, aos olhos da Coroa, menos comprometido do que deveria.',
          },
        ],
        'burguesia-mercantil': [
          {
            slug: 'temer-perda-parceiros',
            texto: 'Alertar a Coroa sobre o risco de perder parceiros comerciais huguenotes',
            deltas: { comercio: 4, legitimidade: -4 },
            consequencia: 'Seu argumento é ouvido, mas não muda o rumo da política — a lógica religiosa pesa mais, na corte, do que a lógica dos negócios.',
          },
          {
            slug: 'absorver-clientela',
            texto: 'Se posicionar para herdar a clientela de comerciantes huguenotes pressionados',
            deltas: { comercio: 8 },
            consequencia: 'Cada rede comercial que um huguenote deixa para trás é uma oportunidade para quem fica — um cálculo frio, mas real.',
          },
        ],
        'mestres-artesaos': [
          {
            slug: 'aprender-oficio-huguenote',
            texto: 'Aproveitar a pressão para aprender técnicas de mestres huguenotes antes que partam',
            deltas: { comercio: 6 },
            consequencia: 'Você absorve conhecimento de ofício que levou gerações para se desenvolver — um ganho que carrega, também, o desconforto de saber de onde veio.',
          },
          {
            slug: 'nao-se-envolver',
            texto: 'Manter distância da perseguição, sem tomar partido nem lucrar com ela',
            deltas: { ordem: 2 },
            consequencia: 'Você não ganha nem perde diretamente — só observa colegas de ofício desaparecerem, um a um, das oficinas vizinhas.',
          },
        ],
        'camponeses': [
          {
            slug: 'abrigar-fugitivos',
            texto: 'Abrigar por uma noite uma família huguenota em fuga',
            deltas: { ordem: -8, fome: -2 },
            consequencia: 'Você ajuda quem está desesperado — e se descoberto, a mesma dragonnade que persegue huguenotes pode se voltar contra quem os abriga.',
          },
          {
            slug: 'evitar-envolvimento',
            texto: 'Evitar qualquer contato com famílias marcadas para pressão religiosa',
            deltas: { ordem: 4 },
            consequencia: 'Você se protege da suspeita — e se afasta de vizinhos que, até pouco tempo atrás, eram só vizinhos, não "huguenotes".',
          },
        ],
      },
    },

    {
      slug: 'guerra-gloria-conta',
      titulo: 'Guerra, glória e conta',
      amplitude: 22,
      cena:
        'Em 1672, a Coroa entra em guerra contra a República Holandesa — antiga rival comercial, ' +
        'agora alvo militar direto. A guerra vai durar seis anos. Toda opção nesta rodada custa ' +
        'Tesouro; a diferença é de onde exatamente esse dinheiro sai.',
      efeitosFixos: { tesouro: -8 },
      contexto:
        'A campanha militar consome recursos numa escala que nenhuma rodada anterior exigiu — ' +
        'soldados, cavalos, pólvora e fortificações custam mais do que qualquer cargo vendido ou ' +
        'tarifa cobrada consegue repor sozinho.',
      imagemSugerida: {
        descricao: 'Uma coluna de soldados de infantaria do século XVII em marcha por uma estrada de terra francesa, carroças de suprimento ao fundo.',
        arquivo: '/imagens/coroa-e-cofre/guerra-gloria-conta.jpg',
        onde: 'Ilustração gerada — cena genérica de campanha militar francesa do período, não reprodução de nenhuma batalha específica.',
      },
      investigacao: {
        olhar: 'Um registro de requisição: sacos de grão, cavalos e homens jovens listados por aldeia, com a assinatura de um oficial de recrutamento.',
        fontes: [
          {
            slug: 'guerra-holandesa',
            tipo: 'ler',
            titulo: 'A Guerra Franco-Holandesa',
            papeis: ['conselho-coroa'],
            trecho:
              'A guerra contra a República Holandesa começa em 1672 e se estende até 1678 — seis anos ' +
              'de campanha que consomem uma fração enorme do orçamento real, mesmo terminando com ' +
              'ganhos territoriais para a França.',
            autor: 'Historiografia consolidada sobre as guerras de Luís XIV — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'requisicao-aldeia',
            tipo: 'ler',
            titulo: 'A lista de requisição',
            papeis: ['camponeses'],
            trecho: '"Da presente aldeia, requisitam-se doze sacos de grão e três homens em idade de servir, a entregar antes da próxima lua." — reconstituição no estilo dos registros de requisição do período.',
            acervo: 'Reconstituição plausível — não é cópia de um documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        'conselho-coroa': [
          {
            slug: 'espremer-campo',
            texto: 'Financiar a guerra com mais requisições sobre o campo',
            deltas: { tesouro: 14, fome: 16 },
            consequencia: 'O exército segue abastecido — e a fome que já crescia no campo aperta mais um degrau.',
          },
          {
            slug: 'dever-burguesia',
            texto: 'Tomar mais empréstimo com a burguesia financista',
            deltas: { tesouro: 16, divida: 14 },
            consequencia: 'A guerra é paga sem tocar diretamente no campo desta vez — mas a Dívida, que só sabe crescer, cresce mais rápido ainda.',
          },
        ],
        'camponeses': [
          {
            slug: 'entregar-requisicao',
            texto: 'Entregar o que foi requisitado sem resistir',
            deltas: { ordem: 6, fome: 12 },
            consequencia: 'Você cumpre a exigência — e o celeiro que devia durar o inverno inteiro dura bem menos.',
          },
          {
            slug: 'negociar-prazo',
            texto: 'Tentar negociar prazo ou quantidade menor com o oficial de recrutamento',
            deltas: { ordem: -4, fome: 4 },
            consequencia: 'Você consegue alívio parcial — a um custo de ficar marcado como aldeia "difícil" para a próxima requisição.',
          },
        ],
        'nobreza-espada': [
          {
            slug: 'servir-guerra',
            texto: 'Assumir posto de comando na campanha militar',
            deltas: { legitimidade: 10, ordem: 4 },
            consequencia: 'A guerra é, para você, a última função que a nobreza de espada ainda cumpre sem intermediário — e uma chance real de favor direto do rei.',
          },
          {
            slug: 'evitar-front',
            texto: 'Evitar o front e permanecer junto à corte',
            deltas: { legitimidade: -6 },
            consequencia: 'Você preserva a própria pele — e perde a chance de renovar prestígio numa das poucas frentes onde a nobreza de espada ainda importa de corpo presente.',
          },
        ],
        'alto-clero': [
          {
            slug: 'pregar-guerra-justa',
            texto: 'Pregar a guerra como justa e abençoada pela Coroa',
            deltas: { legitimidade: 8, ordem: 4 },
            consequencia: 'Seu púlpito vira instrumento de mobilização moral — os que hesitavam em contribuir passam a ver a guerra como dever de consciência, não só de súdito.',
          },
          {
            slug: 'doar-recursos-igreja',
            texto: 'Doar parte dos recursos da própria diocese ao esforço de guerra',
            deltas: { tesouro: 6, legitimidade: 4 },
            consequencia: 'A Igreja mostra lealdade concreta, não só palavras — um gesto que a Coroa não esquece, mesmo sem exigir formalmente.',
          },
        ],
        'burguesia-mercantil': [
          {
            slug: 'lucrar-guerra',
            texto: 'Fornecer crédito e suprimentos ao esforço de guerra, a juros',
            deltas: { divida: 4, comercio: 6 },
            consequencia: 'A guerra vira, para você, uma linha de negócio — a Coroa paga tarde e mal, mas paga, e o contrato abre portas para os próximos anos.',
          },
          {
            slug: 'temer-fechamento-rotas',
            texto: 'Reduzir investimentos, temendo o fechamento de rotas comerciais com a Holanda',
            deltas: { comercio: -8, divida: -4 },
            consequencia: 'Você evita perdas diretas com o conflito — e também perde a chance de lucrar com uma guerra que, cedo ou tarde, vai terminar de um jeito ou de outro.',
          },
        ],
        'mestres-artesaos': [
          {
            slug: 'fornecer-guerra',
            texto: 'Fechar contrato para fornecer armas ou tecido de uniforme ao exército real',
            deltas: { comercio: 8, ordem: 2 },
            consequencia: 'Encomendas da Coroa não faltam durante a guerra — mesmo que o pagamento, como sempre, atrase mais do que promete.',
          },
          {
            slug: 'perder-aprendizes',
            texto: 'Ver aprendizes jovens da oficina serem recrutados para o front',
            deltas: { comercio: -6, fome: 2 },
            consequencia: 'A oficina perde mão de obra que levou anos para formar — e não há como reclamar disso a quem decide quem vai para a guerra.',
          },
        ],
      },
    },

    {
      slug: 'a-conta-chega',
      titulo: 'A conta chega',
      amplitude: 26,
      cena:
        'Outubro de 1685. Em Fontainebleau, a Coroa assina o edito que revoga formalmente a ' +
        'tolerância religiosa de quase um século: as igrejas protestantes devem ser demolidas, ' +
        'suas escolas fechadas, todo culto público ou privado proibido. Ao mesmo tempo, o balanço ' +
        'de duas décadas de governo pessoal chega à mesa do Conselho — mais centralizado, e mais ' +
        'endividado do que nunca.',
      efeitosFixos: { legitimidade: 8, comercio: -14 },
      contexto:
        'Nos meses seguintes ao edito, cerca de 200 mil huguenotes deixam a França rumo à ' +
        'Holanda, à Inglaterra, aos territórios alemães e às colônias — levando junto capital, ' +
        'oficinas inteiras e redes de comércio que a Coroa não vai conseguir substituir rápido.',
      imagemSugerida: {
        descricao: 'Uma carroça de família carregada com poucos pertences, parada numa estrada de fronteira ao amanhecer, olhando para trás.',
        arquivo: '/imagens/coroa-e-cofre/a-conta-chega.jpg',
        onde: 'Ilustração gerada — cena genérica; o Refúgio Huguenote (1685 em diante) é amplamente documentado por historiadores, esta não é uma foto de época.',
      },
      investigacao: {
        olhar: 'Um registro de porto de fronteira, com nomes de famílias e ofícios — tecelão, ourives, relojoeiro — cruzando para fora do reino na mesma semana.',
        fontes: [
          {
            slug: 'edito-fontainebleau',
            tipo: 'ler',
            titulo: 'O Édito de Fontainebleau',
            papeis: ['conselho-coroa', 'alto-clero'],
            trecho:
              'Assinado em 18 de outubro de 1685, o edito revoga o Édito de Nantes (1598): ordena a ' +
              'demolição de todos os templos protestantes remanescentes, o fechamento das escolas ' +
              'huguenotes e proíbe qualquer culto reformado, público ou privado, em todo o reino.',
            autor: 'Historiografia consolidada sobre o Édito de Fontainebleau — não é citação literal do texto original do edito.',
            acervo: 'Fato histórico — Édito de Fontainebleau, 18 de outubro de 1685.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'refugio-huguenote',
            tipo: 'ler',
            titulo: 'O Refúgio Huguenote',
            papeis: ['burguesia-mercantil', 'mestres-artesaos'],
            trecho:
              'Apesar de o próprio edito proibir a emigração, cerca de 200 mil huguenotes deixam a ' +
              'França nos anos seguintes — muitos deles artesãos e comerciantes que levam consigo ' +
              'ofícios, capital e redes comerciais inteiras para Holanda, Inglaterra, os territórios ' +
              'alemães e as colônias.',
            autor: 'Historiografia consolidada sobre o Refúgio Huguenote — não é citação de um documento específico.',
            acervo: 'Fato histórico amplamente documentado, conhecido como Refúgio Huguenote.',
            natureza: 'documental',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        'camponeses': [
          {
            slug: 'suplica',
            texto: 'Buscar súplica formal junto à autoridade local',
            deltas: { ordem: 4, legitimidade: 2 },
            consequencia: 'Sua súplica entra numa fila de outras iguais — o sistema ouve, mas raramente responde a tempo de mudar algo.',
          },
          {
            slug: 'motim',
            texto: 'Somar-se a um motim local contra a requisição de mais impostos para a guerra',
            deltas: { ordem: -16, fome: -6 },
            consequencia: 'Sozinho, um motim de aldeia é esmagado rápido. Coordenado com vizinhos, é o único jeito de fazer o Conselho hesitar antes da próxima cobrança.',
          },
          {
            slug: 'exodo',
            texto: 'Deixar a terra rumo a outra região do reino',
            deltas: { fome: -8, comercio: -2 },
            consequencia: 'Você troca fome certa por incerteza em outro lugar — e junta-se a um movimento de gente que a Coroa nunca contou de verdade.',
          },
        ],
        'mestres-artesaos': [
          {
            slug: 'suplica-artesao',
            texto: 'Pedir isenção ou tolerância junto às autoridades locais',
            deltas: { ordem: 4 },
            consequencia: 'A resposta, quando vem, raramente é um "sim" — mas o pedido formal ao menos fica registrado.',
          },
          {
            slug: 'converter-permanecer',
            texto: 'Converter-se publicamente ao catolicismo para permanecer',
            deltas: { legitimidade: 6, comercio: 4 },
            consequencia: 'Sua oficina continua funcionando sob a lei — a fé que você pratica em casa, a partir de agora, é assunto seu, escondido.',
          },
          {
            slug: 'exilio-oficio',
            texto: 'Deixar o reino, levando o ofício para outro país',
            deltas: { comercio: -8 },
            consequencia: 'Sua oficina reabre em outro lugar, sob outra bandeira — e a França perde, com você, um ofício inteiro que não vai voltar tão cedo.',
          },
        ],
        'burguesia-mercantil': [
          {
            slug: 'converter-negocio',
            texto: 'Converter-se e manter os negócios sob a nova ordem',
            deltas: { legitimidade: 6, divida: -2 },
            consequencia: 'Seus contratos continuam válidos, suas rotas seguem abertas — a um preço de consciência que só você mede.',
          },
          {
            slug: 'transferir-capital',
            texto: 'Transferir capital e redes comerciais para fora do reino antes de decidir o resto',
            deltas: { comercio: -10, divida: -6 },
            consequencia: 'Parte da sua fortuna já está segura em outro país quando a decisão final precisar ser tomada — um seguro que a maioria não teve.',
          },
        ],
        'conselho-coroa': [
          {
            slug: 'aplicar-rigor-total',
            texto: 'Ordenar aplicação rigorosa do edito em todo o reino, sem exceção',
            deltas: { legitimidade: 8, comercio: -10 },
            consequencia: 'A unidade religiosa se impõe sem ambiguidade — e o êxodo de artesãos e mercadores huguenotes, que uma aplicação mais lenta talvez retivesse em parte, acelera.',
          },
          {
            slug: 'reter-talento-util',
            texto: 'Instruir autoridades locais a fechar os olhos para artesãos e financistas úteis à Coroa',
            deltas: { legitimidade: -4, comercio: 6 },
            consequencia: 'Alguns nomes valiosos para o Tesouro e para as manufaturas reais permanecem, discretamente tolerados — uma exceção que contradiz o próprio edito que a Coroa acabou de assinar.',
          },
        ],
        'nobreza-espada': [
          {
            slug: 'fiscalizar-rigor',
            texto: 'Fiscalizar com rigor o cumprimento do edito nas próprias terras',
            deltas: { legitimidade: 6, ordem: 4 },
            consequencia: 'Você demonstra lealdade inequívoca à Coroa — ao custo de expulsar ou denunciar famílias que serviam suas terras havia gerações.',
          },
          {
            slug: 'vista-grossa-dependentes',
            texto: 'Fazer vista grossa para dependentes huguenotes valiosos nas próprias terras',
            deltas: { legitimidade: -4, comercio: 4 },
            consequencia: 'Sua terra mantém artesãos e rendeiros que outras regiões perderam — um risco calculado, que só funciona enquanto ninguém em Paris perguntar demais.',
          },
        ],
        'alto-clero': [
          {
            slug: 'celebrar-vitoria',
            texto: 'Celebrar publicamente a revogação como vitória da fé única',
            deltas: { legitimidade: 10, ordem: 4 },
            consequencia: 'Seu sermão de celebração ecoa a narrativa oficial — a Igreja e a Coroa, mais uma vez, falando com uma só voz diante do reino.',
          },
          {
            slug: 'cumprir-sem-entusiasmo',
            texto: 'Cumprir o dever de anunciar o edito, sem celebração adicional',
            deltas: { legitimidade: 2 },
            consequencia: 'Você lê o que precisa ler, sem acrescentar mais — uma diferença sutil que quem ouve, principalmente quem está de saída, ainda assim percebe.',
          },
        ],
      },
    },
  ],

  juri: {
    pergunta: 'O absolutismo de Luís XIV fortaleceu a França, ou construiu uma dívida — financeira e social — que alguém precisaria pagar depois?',
    lados: [
      {
        nome: 'Fortaleceu o reino',
        fontesSlugs: ['guerra-holandesa', 'companhia-indias', 'edito-fontainebleau'],
      },
      {
        nome: 'Construiu uma dívida que ainda não venceu',
        fontesSlugs: ['relatorio-intendente', 'a-taille', 'refugio-huguenote'],
      },
    ],
  },

  desfecho: {
    fixo:
      'A monarquia sai desta simulação mais centralizada em todas as partidas — e mais endividada ' +
      'em todas. O Édito de Fontainebleau é assinado, os huguenotes partem aos milhares, e a ' +
      'Dívida com a burguesia, que nenhuma opção deste jogo jamais diminuiu, segue subindo.',
    variavel: ['tesouro-final', 'fome-final', 'quem-partiu', 'quem-ficou'],
    textoFecho:
      'O Conselho da Coroa terminou o reinado mais forte do que começou: leis unificadas, exército ' +
      'permanente, uma só fé oficialmente praticada. Mas a barra da Dívida, que você viu crescer ' +
      'rodada após rodada sem nunca descer, é a outra metade da história — o rei concentrou o ' +
      'poder, e ao concentrá-lo, ficou dependente de quem tinha o dinheiro para sustentá-lo. A ' +
      'burguesia financiou o absolutismo que a tratava como cidadã de segunda categoria. Um século ' +
      'depois, essa mesma conta — literal e figurada — chega à mesa de outro rei, num reinado que ' +
      'termina de um jeito bem diferente deste.',
    perguntasDebate: [
      'Quem, nesta simulação, teve mais poder de decisão — e quem só teve poder de reação?',
      'A Dívida com a burguesia nunca diminuiu em nenhuma opção do jogo. O que isso diz sobre o próprio sistema, e não só sobre as escolhas de cada rodada?',
      'A revogação do Édito de Nantes fortaleceu ou enfraqueceu a França, considerando quem partiu e o que levou consigo?',
    ],
    perguntasReflexao: [
      { nivel: 'Sua experiência', pergunta: 'No papel que você teve, em algum momento sentiu que "obedecer" e "sobreviver" eram a mesma escolha? Descreva a rodada em que isso ficou mais claro.' },
      { nivel: 'O conceito', pergunta: 'Agora que você sabe o nome disso — absolutismo, mercantilismo, sociedade estamental — qual desses três explica melhor a rodada que você decidiu mais rápido, sem pensar muito?' },
      { nivel: 'Além desta aula', pergunta: 'Existe hoje alguma versão de "direitos concedidos em troca de controle" parecida com o que a Coroa fez com nobreza, clero e burguesia neste jogo?' },
    ],
  },
}
