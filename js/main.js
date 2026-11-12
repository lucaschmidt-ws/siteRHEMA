// JavaScript para o projeto RHEMA

// Cabeçalho unificado: mantém o menu acessível em todas as páginas do site.
const menuRhema = document.querySelector('#clothing-menu-panel');
const alternadorMenuRhema = document.querySelector('.clothing-menu-toggle');

if (menuRhema && alternadorMenuRhema) {
  const fecharMenuRhema = function() {
    menuRhema.hidden = true;
    alternadorMenuRhema.setAttribute('aria-expanded', 'false');
    alternadorMenuRhema.setAttribute('aria-label', 'Abrir menu');
  };

  alternadorMenuRhema.addEventListener('click', function() {
    const aberto = alternadorMenuRhema.getAttribute('aria-expanded') !== 'true';
    menuRhema.hidden = !aberto;
    alternadorMenuRhema.setAttribute('aria-expanded', String(aberto));
    alternadorMenuRhema.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  document.addEventListener('click', function(evento) {
    if (!alternadorMenuRhema.contains(evento.target) && !menuRhema.contains(evento.target)) {
      fecharMenuRhema();
    }
  });

  document.addEventListener('keydown', function(evento) {
    if (evento.key === 'Escape') fecharMenuRhema();
  });
}

// Filme de campanha: inicia sem som e respeita a preferência por movimento reduzido.
const videosCampanhaRhema = document.querySelectorAll('.rhema-film-video');
const prefereMovimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefereMovimentoReduzido) {
  videosCampanhaRhema.forEach(function(video) {
    video.play().catch(function() {});
  });
}

// Lista de produtos do catálogo (os mesmos de produtos.html).
// A página produto.html usa esta lista para mostrar o produto escolhido.
const catalogo = [
  {
    id: 1,
    nome: 'Camiseta Streetwear',
    categoria: 'Camisetas',
    preco: 109.90,
    estoquePorTamanho: { P: 1, M: 1, G: 1, GG: 0 },
    descricao: 'Camiseta Streetwear da RHEMA.',
    versiculo: 'Paráfrase de Gálatas 3:27: em Cristo recebemos uma nova identidade.',
    significado: 'A roupa compõe o estilo, mas a identidade de quem segue Jesus encontra seu fundamento nele e se expressa nas escolhas diárias.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    imagemDestaque: { src: 'imagens/camiseta%20preta/camiseta-preta.jpeg', alt: 'prancha de apresentação da camiseta preta com frente, costas, laterais e detalhes' },
    imagens: [
      { src: 'imagens/camiseta%20preta/camiseta-preta-frente.png', alt: 'frente da camiseta preta RHEMA' },
      { src: 'imagens/camiseta%20preta/camiseta-preta-costas.png', alt: 'costas da camiseta preta RHEMA' },
      { src: 'imagens/produtos-vistas/camiseta-streetwear/lateral.jpg', alt: 'vista lateral da camiseta preta RHEMA' },
      { src: 'imagens/camiseta%20preta/camiseta-preta.jpeg', alt: 'prancha da camiseta preta com todas as vistas' }
    ]
  },
  {
    id: 2,
    nome: 'Calça Reta de Veludo',
    categoria: 'Calças',
    preco: 189.90,
    estoquePorTamanho: { P: 0, M: 0, G: 0, GG: 0 },
    descricao: 'Calça reta de veludo cotelê da RHEMA, com modelagem ampla e acabamento premium.',
    versiculo: 'Paráfrase de Colossenses 2:6-7: continuem vivendo em Cristo, enraizados nele e firmes na fé.',
    significado: 'Cada passo pode ser uma oportunidade de caminhar com gratidão, mantendo a fé como fundamento.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    imagemDestaque: { src: 'imagens/produto-cores/calca-reta-veludo-preta.png', alt: 'calça reta preta de veludo cotelê RHEMA' },
    imagens: [
      { src: 'imagens/produto-cores/calca-reta-veludo-preta.png', alt: 'frente da calça reta preta de veludo cotelê RHEMA' }
    ]
  },
  {
    id: 3,
    nome: 'Moletom Discípulos com Capuz',
    categoria: 'Moletons',
    preco: 259.90,
    estoquePorTamanho: { P: 0, M: 0, G: 0, GG: 0 },
    descricao: 'Moletom da RHEMA.',
    versiculo: 'Paráfrase do Salmo 46:1: Deus é refúgio, força e auxílio presente nos momentos difíceis.',
    significado: 'Em dias de frio ou incerteza, esta peça lembra o convite a buscar em Deus amparo e coragem.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    imagemDestaque: { src: 'imagens/catalogo-vistas/moletom-capuz-areia-prancha.png', alt: 'prancha de apresentação do moletom areia com frente, costas, laterais e detalhes' },
    imagens: [
      { src: 'imagens/produtos-vistas/moletom-areia/frente.jpg', alt: 'frente do moletom areia RHEMA' },
      { src: 'imagens/produtos-vistas/moletom-areia/costas.jpg', alt: 'costas do moletom areia RHEMA' },
      { src: 'imagens/produtos-vistas/moletom-areia/lateral.jpg', alt: 'vista lateral do moletom areia RHEMA' },
      { src: 'imagens/catalogo-vistas/moletom-capuz-areia-prancha.png', alt: 'prancha do moletom areia com todas as vistas' }
    ]
  },
  {
    id: 4,
    nome: 'Boné RHEMA',
    categoria: 'Acessórios',
    preco: 99.90,
    estoquePorTamanho: { 'Único': 0 },
    descricao: 'Boné RHEMA.',
    versiculo: 'Paráfrase de 1 Coríntios 2:16: quem segue Cristo aprende a olhar a vida a partir dele.',
    significado: 'O boné acompanha o dia a dia; que os pensamentos também sejam guiados pela sabedoria e pelo caráter de Cristo.',
    tamanhos: ['Único'],
    imagemDestaque: { src: 'imagens/Nova%20pasta/bone-bege.jpeg', alt: 'prancha de apresentação do boné bege RHEMA com frente, costas, laterais e detalhes' },
    imagens: [
      { src: 'imagens/produtos-vistas/bone-bege/frente.jpg', alt: 'frente do boné bege RHEMA' },
      { src: 'imagens/produtos-vistas/bone-bege/costas.jpg', alt: 'costas do boné bege RHEMA' },
      { src: 'imagens/produtos-vistas/bone-bege/lateral.jpg', alt: 'vista lateral do boné bege RHEMA' },
      { src: 'imagens/Nova%20pasta/bone-bege.jpeg', alt: 'prancha do boné bege com todas as vistas' },
      { src: 'imagens/produtos-vistas/bone-preto/frente.jpg', alt: 'frente do boné preto RHEMA' },
      { src: 'imagens/produtos-vistas/bone-preto/costas.jpg', alt: 'costas do boné preto RHEMA' },
      { src: 'imagens/produtos-vistas/bone-preto/lateral.jpg', alt: 'vista lateral do boné preto RHEMA' },
      { src: 'imagens/Nova%20pasta/bone-preto.jpeg', alt: 'prancha do boné preto com todas as vistas' }
    ]
  },
  {
    id: 5,
    nome: 'Moletom RHEMA com Capuz',
    categoria: 'Moletons',
    preco: 129.90,
    estoquePorTamanho: { P: 0, M: 0, G: 0, GG: 0 },
    descricao: 'Moletom preto com capuz da RHEMA.',
    versiculo: 'Paráfrase de Mateus 11:28-30: Jesus chama os cansados a se aproximarem dele e encontrarem descanso para a alma.',
    significado: 'O conforto pode lembrar o cuidado de Deus; o descanso que Jesus oferece à alma não significa ausência de dificuldades.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    imagemDestaque: { src: 'imagens/catalogo-vistas/moletom-capuz-preto-prancha.png', alt: 'prancha de apresentação do moletom preto com capuz e todas as vistas' },
    imagens: [
      { src: 'imagens/produtos-vistas/moletom-preto/frente.jpg', alt: 'frente do moletom preto RHEMA' },
      { src: 'imagens/produtos-vistas/moletom-preto/costas.jpg', alt: 'costas do moletom preto RHEMA' },
      { src: 'imagens/produtos-vistas/moletom-preto/lateral.jpg', alt: 'vista lateral do moletom preto RHEMA' },
      { src: 'imagens/catalogo-vistas/moletom-capuz-preto-prancha.png', alt: 'prancha do moletom preto com todas as vistas' }
    ]
  },
  {
    id: 6,
    nome: 'Casaco RHEMA sem capuz',
    categoria: 'Casacos',
    preco: 199.90,
    estoquePorTamanho: { P: 0, M: 0, G: 0, GG: 0 },
    descricao: 'Moletom de gola careca da RHEMA, sem capuz.',
    versiculo: 'Paráfrase de Colossenses 3:12-14: vistam-se de compaixão, bondade, humildade, mansidão, paciência e amor.',
    significado: 'Uma peça para o dia a dia que acompanha a escolha de vestir compaixão, bondade, humildade e amor.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    imagemDestaque: { src: 'imagens/catalogo-vistas/casaco-sem-capuz-prancha.png', alt: 'prancha de apresentação do casaco preto sem capuz com todas as vistas' },
    imagens: [
      { src: 'imagens/produtos-vistas/casaco-gola-careca/frente.jpg', alt: 'frente do casaco preto RHEMA sem capuz' },
      { src: 'imagens/produtos-vistas/casaco-gola-careca/costas.jpg', alt: 'costas do casaco preto RHEMA sem capuz' },
      { src: 'imagens/produtos-vistas/casaco-gola-careca/lateral.jpg', alt: 'vista lateral do casaco preto RHEMA sem capuz' },
      { src: 'imagens/catalogo-vistas/casaco-sem-capuz-prancha.png', alt: 'prancha do casaco sem capuz com todas as vistas' }
    ]
  }
];

// Variações de cor dos produtos básicos. Cada cor tem a própria imagem e
// estoque por tamanho; cores sem saldo cadastrado permanecem indisponíveis.
function criarVarianteProduto(produto, slug, nome, src, imagens, estoquePorTamanho) {
  const imagemDestaque = { src: src, alt: `${produto.nome}, cor ${nome}` };
  return {
    slug: slug,
    nome: nome,
    imagemDestaque: imagemDestaque,
    imagens: imagens || [imagemDestaque],
    estoquePorTamanho: estoquePorTamanho || Object.fromEntries(produto.tamanhos.map(function(tamanho) {
      return [tamanho, 0];
    }))
  };
}

function configurarVariantesProduto(id, definicoes) {
  const produto = catalogo.find(function(item) { return item.id === id; });
  if (!produto) return;
  produto.variantes = definicoes.map(function(definicao) {
    return criarVarianteProduto(
      produto,
      definicao.slug,
      definicao.nome,
      definicao.src,
      definicao.imagens,
      definicao.estoquePorTamanho
    );
  });
  produto.imagemDestaque = produto.variantes[0].imagemDestaque;
  produto.imagens = produto.variantes[0].imagens;
}

const estoqueCamisetaStreetwearPreta = { P: 1, M: 1, G: 1, GG: 0 };

configurarVariantesProduto(1, [
  { slug: 'preta', nome: 'Preta', src: 'imagens/camiseta%20preta/camiseta-preta.jpeg', imagens: catalogo[0].imagens, estoquePorTamanho: estoqueCamisetaStreetwearPreta },
  { slug: 'branca', nome: 'Branca', src: 'imagens/variantes-produtos/camiseta-streetwear/branca.jpg' },
  { slug: 'off-white', nome: 'Off-white', src: 'imagens/camiseta%20off%20white/camiseta-off-principal.jpeg' },
  { slug: 'marrom', nome: 'Marrom', src: 'imagens/variantes-produtos/camiseta-streetwear/marrom.jpg' },
  { slug: 'verde-musgo', nome: 'Verde musgo', src: 'imagens/variantes-produtos/camiseta-streetwear/verde-musgo.jpg' }
]);

configurarVariantesProduto(2, [
  { slug: 'preta', nome: 'Preta', src: 'imagens/produto-cores/calca-reta-veludo-preta.png' },
  { slug: 'branca', nome: 'Branca', src: 'imagens/produto-cores/calca-reta-veludo-branca.png' },
  { slug: 'off-white', nome: 'Off-white', src: 'imagens/produto-cores/calca-reta-veludo-off-white.png' },
  { slug: 'marrom', nome: 'Marrom', src: 'imagens/produto-cores/calca-reta-veludo-marrom.png' },
  { slug: 'verde-musgo', nome: 'Verde musgo', src: 'imagens/produto-cores/calca-reta-veludo-verde-musgo.png' }
]);

configurarVariantesProduto(3, [
  { slug: 'preta', nome: 'Preta', src: 'imagens/variantes-produtos/moletom-historia/preta.jpg', imagens: [
    { src: 'imagens/produtos-vistas/moletom-discipulos-frente.png', alt: 'frente do moletom preto Discípulos RHEMA' },
    { src: 'imagens/variantes-produtos/moletom-historia/preta.jpg', alt: 'prancha do moletom preto Discípulos com vistas e detalhes' }
  ] },
  { slug: 'branca', nome: 'Branca', src: 'imagens/variantes-produtos/moletom-historia/branca.jpg' },
  { slug: 'off-white', nome: 'Off-white', src: 'imagens/catalogo-vistas/moletom-capuz-areia-prancha.png', imagens: catalogo[2].imagens },
  { slug: 'marrom', nome: 'Marrom', src: 'imagens/variantes-produtos/moletom-historia/marrom.jpg' },
  { slug: 'verde-musgo', nome: 'Verde musgo', src: 'imagens/variantes-produtos/moletom-historia/verde-musgo.jpg' }
]);

configurarVariantesProduto(4, [
  { slug: 'preta', nome: 'Preta', src: 'imagens/Nova%20pasta/bone-preto.jpeg', imagens: catalogo[3].imagens.slice(4) },
  { slug: 'branca', nome: 'Branca', src: 'imagens/variantes-produtos/bone-rhema/branca.jpg' },
  { slug: 'off-white', nome: 'Off-white', src: 'imagens/variantes-produtos/bone-rhema/off-white.jpg' },
  { slug: 'marrom', nome: 'Marrom', src: 'imagens/variantes-produtos/bone-rhema/marrom.jpg' },
  { slug: 'verde-musgo', nome: 'Verde musgo', src: 'imagens/variantes-produtos/bone-rhema/verde-musgo.jpg' }
]);

configurarVariantesProduto(5, [
  { slug: 'preta', nome: 'Preta', src: 'imagens/catalogo-vistas/moletom-capuz-preto-prancha.png', imagens: catalogo[4].imagens },
  { slug: 'branca', nome: 'Branca', src: 'imagens/variantes-produtos/moletom-capuz/branca.jpg' },
  { slug: 'off-white', nome: 'Off-white', src: 'imagens/variantes-produtos/moletom-capuz/off-white.jpg' },
  { slug: 'marrom', nome: 'Marrom', src: 'imagens/variantes-produtos/moletom-capuz/marrom.jpg' },
  { slug: 'verde-musgo', nome: 'Verde musgo', src: 'imagens/variantes-produtos/moletom-capuz/verde-musgo.jpg' }
]);

configurarVariantesProduto(6, [
  { slug: 'preta', nome: 'Preta', src: 'imagens/catalogo-vistas/casaco-sem-capuz-prancha.png', imagens: catalogo[5].imagens },
  { slug: 'branca', nome: 'Branca', src: 'imagens/variantes-produtos/casaco-sem-capuz/branca.jpg' },
  { slug: 'off-white', nome: 'Off-white', src: 'imagens/variantes-produtos/casaco-sem-capuz/off-white.jpg' },
  { slug: 'marrom', nome: 'Marrom', src: 'imagens/variantes-produtos/casaco-sem-capuz/marrom.jpg' },
  { slug: 'verde-musgo', nome: 'Verde musgo', src: 'imagens/variantes-produtos/casaco-sem-capuz/verde-musgo.jpg' }
]);

// Imagens recortadas para os cards do catálogo, sobre o fundo escuro da vitrine.
const imagensCardsRhema = {
  1: { src: 'imagens/catalogo-cards/streetwear-costas.png', alt: 'costas da camiseta Streetwear preta RHEMA' },
  2: { src: 'imagens/produto-cores/calca-reta-veludo-preta.png', alt: 'calça reta de veludo cotelê RHEMA preta' },
  3: { src: 'imagens/catalogo-cards/moletom-discipulos.png', alt: 'frente do moletom Discípulos RHEMA' },
  4: { src: 'imagens/catalogo-cards/bone-rhema.png', alt: 'boné preto RHEMA' },
  5: { src: 'imagens/catalogo-cards/moletom-capuz.png', alt: 'frente do moletom RHEMA com capuz' },
  6: { src: 'imagens/catalogo-cards/moletom-sem-capuz.png', alt: 'frente do moletom RHEMA sem capuz' }
};

Object.entries(imagensCardsRhema).forEach(function([id, imagem]) {
  const produto = catalogo.find(function(item) { return item.id === Number(id); });
  if (produto) produto.imagemCard = imagem;
});

// Cada cor abre sua própria foto recortada; o fundo carvão vem da galeria.
const imagensVariantesProdutosRhema = {
  1: {
    preta: 'imagens/catalogo-cards/streetwear-costas.png',
    branca: 'imagens/produto-cores/camiseta-streetwear-branca.png',
    'off-white': 'imagens/produto-cores/camiseta-streetwear-off-white.png',
    marrom: 'imagens/produto-cores/camiseta-streetwear-marrom.png',
    'verde-musgo': 'imagens/produto-cores/camiseta-streetwear-verde-musgo.png'
  },
  2: {
    preta: 'imagens/produto-cores/calca-reta-veludo-preta.png',
    branca: 'imagens/produto-cores/calca-reta-veludo-branca.png',
    'off-white': 'imagens/produto-cores/calca-reta-veludo-off-white.png',
    marrom: 'imagens/produto-cores/calca-reta-veludo-marrom.png',
    'verde-musgo': 'imagens/produto-cores/calca-reta-veludo-verde-musgo.png'
  },
  3: {
    preta: 'imagens/catalogo-cards/moletom-discipulos.png',
    branca: 'imagens/produto-cores/moletom-discipulos-branca.png',
    'off-white': 'imagens/produto-cores/moletom-discipulos-off-white.png',
    marrom: 'imagens/produto-cores/moletom-discipulos-marrom.png',
    'verde-musgo': 'imagens/produto-cores/moletom-discipulos-verde-musgo.png'
  },
  4: {
    preta: 'imagens/catalogo-cards/bone-rhema.png',
    branca: 'imagens/produto-cores/bone-rhema-branca.png',
    'off-white': 'imagens/produto-cores/bone-rhema-off-white.png',
    marrom: 'imagens/produto-cores/bone-rhema-marrom.png',
    'verde-musgo': 'imagens/produto-cores/bone-rhema-verde-musgo.png'
  },
  5: {
    preta: 'imagens/catalogo-cards/moletom-capuz.png',
    branca: 'imagens/produto-cores/moletom-capuz-branca.png',
    'off-white': 'imagens/produto-cores/moletom-capuz-off-white.png',
    marrom: 'imagens/produto-cores/moletom-capuz-marrom.png',
    'verde-musgo': 'imagens/produto-cores/moletom-capuz-verde-musgo.png'
  },
  6: {
    preta: 'imagens/catalogo-cards/moletom-sem-capuz.png',
    branca: 'imagens/produto-cores/casaco-sem-capuz-branca.png',
    'off-white': 'imagens/produto-cores/casaco-sem-capuz-off-white.png',
    marrom: 'imagens/produto-cores/casaco-sem-capuz-marrom.png',
    'verde-musgo': 'imagens/produto-cores/casaco-sem-capuz-verde-musgo.png'
  }
};

Object.entries(imagensVariantesProdutosRhema).forEach(function([id, imagensPorCor]) {
  const produto = catalogo.find(function(item) { return item.id === Number(id); });
  if (!produto || !Array.isArray(produto.variantes)) return;

  produto.variantes.forEach(function(variante) {
    const src = imagensPorCor[variante.slug];
    if (!src) return;
    const vista = produto.id === 1 ? 'costas' : 'frente';
    const imagem = {
      src: src,
      alt: `${vista} do produto ${produto.nome} na cor ${variante.nome}`
    };
    variante.imagemDestaque = imagem;
    variante.imagens = [imagem];
  });

  produto.imagemDestaque = produto.variantes[0].imagemDestaque;
  produto.imagens = produto.variantes[0].imagens;
});

// Modelos da coleção Crônicas da Fé. As imagens ficam organizadas por cor,
// e cada prancha de apresentação abre junto das vistas individuais do produto.
const coresColecaoFe = [
  { slug: 'preta', nome: 'Preta' },
  { slug: 'branco', nome: 'Branca' },
  { slug: 'off-white', nome: 'Off-white' },
  { slug: 'marrom', nome: 'Marrom' },
  { slug: 'verde-militar-musgo', nome: 'Verde musgo' }
];

const modelosColecaoFe = [
  {
    id: 7, slug: '01-jardim-do-eden', nome: 'Camiseta Jardim do Éden',
    descricao: 'Arte inspirada no Jardim do Éden e no início da narrativa bíblica.',
    versiculo: 'Referência a Gênesis 2–3: a narrativa do jardim convida à reflexão sobre escolhas, responsabilidade e recomeço diante de Deus.',
    significado: 'Uma estampa sobre origem, liberdade e a esperança de recomeçar, parte da coleção Crônicas da Fé.'
  },
  {
    id: 8, slug: '02-jornada-da-fe', nome: 'Camiseta Jornada da Fé',
    descricao: 'Colagem de histórias bíblicas que retratam jornadas de fé e perseverança.',
    versiculo: 'Paráfrase de Hebreus 11:1: a fé é confiança naquilo que se espera e convicção quanto ao que ainda não se vê.',
    significado: 'Uma lembrança visual de que cada caminhada pode ser vivida com confiança em Deus.'
  },
  {
    id: 9, slug: '03-jonas-e-o-grande-peixe', nome: 'Camiseta Jonas e o Grande Peixe',
    descricao: 'Estampa inspirada na história de Jonas e do grande peixe.',
    versiculo: 'Paráfrase de Jonas 2:2: em sua angústia, Jonas clamou ao Senhor, e foi ouvido.',
    significado: 'Mesmo nos momentos de fuga e dificuldade, ainda é possível clamar a Deus e buscar um novo caminho.'
  },
  {
    id: 10, slug: '04-jo', nome: 'Camiseta Jó',
    descricao: 'Arte inspirada na perseverança de Jó durante o sofrimento.',
    versiculo: 'Paráfrase de Jó 19:25: Jó mantém esperança em seu Redentor mesmo em meio à dor.',
    significado: 'Uma mensagem sobre permanecer em busca de Deus e de esperança em tempos difíceis.'
  },
  {
    id: 11, slug: '05-sansao', nome: 'Camiseta Sansão',
    descricao: 'Estampa inspirada na história de Sansão, narrada em Juízes 13–16.',
    versiculo: 'Paráfrase de Juízes 16:28: Sansão clama ao Senhor por força em seu momento de necessidade.',
    significado: 'A história de Sansão lembra que força, escolhas e propósito caminham juntos diante de Deus.'
  },
  {
    id: 12, slug: '06-leao-rhema', nome: 'Camiseta Leão RHEMA',
    descricao: 'Símbolo do leão com a mensagem RHEMA, inspirado em 2 Timóteo 1:7.',
    versiculo: 'Paráfrase de 2 Timóteo 1:7: Deus nos chama à coragem, ao amor e ao equilíbrio.',
    significado: 'Uma peça sobre viver com coragem e propósito, sem esquecer o amor e a sabedoria.'
  },
  {
    id: 13, slug: '07-nao-temas', nome: 'Camiseta Não Temas',
    descricao: 'Mensagem de coragem inspirada em Isaías 41:10.',
    versiculo: 'Paráfrase de Isaías 41:10: Deus fortalece, ajuda e sustenta quem confia nele.',
    significado: 'Uma lembrança de que a presença de Deus acompanha cada pessoa em sua caminhada.'
  },
  {
    id: 14, slug: '08-deus-amou-o-mundo', nome: 'Camiseta Deus Amou o Mundo',
    descricao: 'A mensagem do amor de Deus pelo mundo, inspirada em João 3:16.',
    versiculo: 'Paráfrase de João 3:16: o amor de Deus pelo mundo se revela na dádiva de seu Filho.',
    significado: 'Uma mensagem sobre o amor de Deus que alcança pessoas em todos os lugares.'
  },
  {
    id: 15, slug: '09-tudo-contribui-para-o-bem', nome: 'Camiseta Tudo Contribui',
    descricao: 'Arte com Bíblia aberta inspirada em Romanos 8:28.',
    versiculo: 'Paráfrase de Romanos 8:28: Deus age em todas as coisas para o bem daqueles que o amam e vivem segundo seu propósito.',
    significado: 'Uma mensagem de esperança para atravessar os processos sem perder a confiança em Deus.'
  },
  {
    id: 16, slug: '10-constancia', nome: 'Camiseta Constância',
    descricao: 'Mensagem sobre perseverança, inspirada em Gálatas 6:9.',
    versiculo: 'Paráfrase de Gálatas 6:9: não desistamos de praticar o bem; a seu tempo haverá colheita.',
    significado: 'Um incentivo a continuar fazendo o bem com paciência e fidelidade.'
  }
];

const produtosColecaoFe = modelosColecaoFe.map(function(modelo) {
  const variantes = coresColecaoFe.map(function(cor) {
    const pasta = cor.slug === 'preta'
      ? 'imagens/colecao-cronicas-da-fe'
      : `imagens/colecao-cronicas-da-fe/cores/${cor.slug}`;

    const extensaoPrancha = cor.slug === 'off-white' ? 'jpg' : 'png';
    const prancha = { src: `imagens/colecao-cronicas-da-fe/pranchas-de-apresentacao/${modelo.slug}-${cor.slug}.${extensaoPrancha}`, alt: `prancha da ${modelo.nome}, cor ${cor.nome}` };
    return {
      slug: cor.slug,
      nome: cor.nome,
      estoquePorTamanho: { P: 0, M: 0, G: 0, GG: 0 },
      imagemDestaque: prancha,
      imagens: cor.slug === 'off-white' ? [prancha] : [
        { src: `${pasta}/${modelo.slug}-frente.png`, alt: `frente da ${modelo.nome}, cor ${cor.nome}` },
        { src: `${pasta}/${modelo.slug}-costas.png`, alt: `costas da ${modelo.nome}, cor ${cor.nome}` },
        { src: `${pasta}/${modelo.slug}-lado.png`, alt: `vista lateral da ${modelo.nome}, cor ${cor.nome}` },
        prancha
      ]
    };
  });

  return {
    id: modelo.id,
    nome: modelo.nome,
    categoria: 'Camisetas',
    colecao: 'Crônicas da Fé',
    preco: 109.90,
    estoquePorTamanho: { P: 0, M: 0, G: 0, GG: 0 },
    descricao: modelo.descricao,
    versiculo: modelo.versiculo,
    significado: modelo.significado,
    tamanhos: ['P', 'M', 'G', 'GG'],
    variantes: variantes,
    imagemDestaque: variantes[0].imagemDestaque,
    imagens: variantes[0].imagens,
    imagemCard: {
      src: `imagens/catalogo-cards/${modelo.slug}-costas.png`,
      alt: `costas da ${modelo.nome} com estampa em destaque`
    }
  };
});

catalogo.push(...produtosColecaoFe);

function obterEstoqueTamanho(produto, tamanho, variante) {
  const estoque = variante && variante.estoquePorTamanho
    ? variante.estoquePorTamanho
    : produto && produto.estoquePorTamanho;
  if (!estoque || !Object.prototype.hasOwnProperty.call(estoque, tamanho)) return 0;
  const quantidade = Number(estoque[tamanho]);
  return Number.isInteger(quantidade) && quantidade >= 0 ? quantidade : 0;
}

function obterEstoqueTotal(produto, variante) {
  const estoque = variante && variante.estoquePorTamanho
    ? variante.estoquePorTamanho
    : produto && produto.estoquePorTamanho;
  if (!produto || !estoque) return null;
  return produto.tamanhos.reduce(function(total, tamanho) {
    return total + obterEstoqueTamanho(produto, tamanho, variante);
  }, 0);
}

function obterCarrinho() {
  try {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    return Array.isArray(carrinho) ? carrinho : [];
  } catch (erro) {
    return [];
  }
}

function quantidadeNoCarrinho(produto, tamanho, variante, ignorarIndice) {
  const slugPadrao = produto && Array.isArray(produto.variantes) && produto.variantes.length
    ? produto.variantes[0].slug
    : '';
  const slugSelecionado = variante ? variante.slug : slugPadrao;
  return obterCarrinho().reduce(function(total, item, indice) {
    const slugNoCarrinho = item.corSlug || slugPadrao;
    if (indice === ignorarIndice || Number(item.id) !== Number(produto.id) || item.tamanho !== tamanho || slugNoCarrinho !== slugSelecionado) return total;
    return total + Math.max(1, Number(item.quantidade) || 1);
  }, 0);
}

function obterEstoqueDisponivel(produto, tamanho, variante, ignorarIndice) {
  return Math.max(0, obterEstoqueTamanho(produto, tamanho, variante) - quantidadeNoCarrinho(produto, tamanho, variante, ignorarIndice));
}

function textoEstoqueBaixo(quantidade) {
  if (quantidade === null || quantidade > 5) return '';
  if (quantidade === 0) return 'Estoque: 0 unidades';
  if (quantidade === 1) return 'Resta 1 unidade';
  return `Restam ${quantidade} unidades`;
}

function criarIconeZoomCatalogo() {
  const icone = document.createElement('span');
  icone.className = 'catalog-zoom-icon';
  icone.setAttribute('aria-hidden', 'true');
  icone.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m15.5 15.5 5 5M10.5 7.5v6M7.5 10.5h6"></path></svg>';
  return icone;
}

function atualizarIconeFavorito(botao, favoritado) {
  botao.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5-8.8 11.3-8.8 11.3S3.2 13.7 3.2 8.7A4.7 4.7 0 0 1 12 6.9a4.7 4.7 0 0 1 8.8 1.8Z"></path></svg>';
  botao.classList.toggle('favoritado', favoritado);
}

function atualizarIndicadorEstoque(produto, botaoImagem, textoEstoque, variante) {
  const variantePadrao = variante || (Array.isArray(produto.variantes) ? produto.variantes[0] : null);
  const quantidade = obterEstoqueTotal(produto, variantePadrao);
  const esgotado = quantidade === 0;

  if (botaoImagem) {
    let faixa = botaoImagem.querySelector('.stock-badge');
    if (!faixa) {
      faixa = document.createElement('span');
      faixa.className = 'stock-badge';
      botaoImagem.appendChild(faixa);
    }
    faixa.textContent = esgotado ? 'ESGOTADO' : textoEstoqueBaixo(quantidade);
    faixa.hidden = !esgotado && (quantidade === null || quantidade > 5);
    const descricaoBase = `Ampliar imagens de ${produto.nome}`;
    botaoImagem.setAttribute('aria-label', esgotado
      ? `${descricaoBase}; produto esgotado`
      : quantidade > 0 && quantidade <= 5
        ? `${descricaoBase}; ${textoEstoqueBaixo(quantidade)}`
        : descricaoBase);
  }

  if (textoEstoque) {
    const mensagem = textoEstoqueBaixo(quantidade);
    textoEstoque.textContent = mensagem;
    textoEstoque.hidden = mensagem === '';
  }

  return quantidade;
}

// Acrescenta os novos modelos ao catálogo e à vitrine inicial sem repetir
// seus dados comerciais em HTML separado.
function criarCartaoProduto(produto, paginaInicial) {
  const artigo = document.createElement('article');
  artigo.className = paginaInicial ? 'home-product-card' : 'product-card';
  artigo.dataset.productId = produto.id;

  const botaoZoom = document.createElement('button');
  botaoZoom.type = 'button';
  botaoZoom.className = paginaInicial ? 'zoom-trigger home-image-zoom' : 'zoom-trigger product-image-zoom';
  botaoZoom.setAttribute('aria-label', `Ampliar imagens de ${produto.nome}`);

  const quadro = document.createElement('div');
  quadro.className = paginaInicial ? 'product-photo' : 'product-gallery';
  quadro.dataset.productId = produto.id;
  botaoZoom.appendChild(quadro);
  if (!paginaInicial) botaoZoom.appendChild(criarIconeZoomCatalogo());

  if (paginaInicial) {
    const link = document.createElement('a');
    link.className = 'home-product-info';
    link.href = `produto.html?id=${produto.id}`;

    const nome = document.createElement('h3');
    nome.textContent = produto.nome;
    const preco = document.createElement('p');
    preco.textContent = `R$ ${formatarPreco(produto.preco)}`;
    link.append(nome, preco);
    artigo.append(botaoZoom, link);
  } else {
    const favorito = document.createElement('button');
    favorito.type = 'button';
    favorito.className = 'favorito';
    favorito.dataset.id = produto.id;
    favorito.setAttribute('aria-label', 'Favoritar produto');
    favorito.setAttribute('aria-pressed', 'false');
    atualizarIconeFavorito(favorito, false);

    const informacoes = document.createElement('div');
    informacoes.className = 'catalog-product-info';
    const meta = document.createElement('div');
    meta.className = 'catalog-product-meta';
    const categoria = document.createElement('span');
    categoria.textContent = produto.categoria || 'RHEMA';
    const marca = document.createElement('span');
    marca.textContent = 'RHEMA';
    meta.append(categoria, marca);

    const nome = document.createElement('h3');
    nome.textContent = produto.nome;
    const preco = document.createElement('p');
    preco.className = 'price';
    preco.textContent = `R$ ${formatarPreco(produto.preco)}`;
    const detalhes = document.createElement('a');
    detalhes.href = `produto.html?id=${produto.id}`;
    detalhes.className = 'btn-small';
    detalhes.append(document.createTextNode('Ver detalhes '));
    const seta = document.createElement('span');
    seta.setAttribute('aria-hidden', 'true');
    seta.textContent = '↗';
    detalhes.appendChild(seta);
    informacoes.append(meta, nome, preco, detalhes);
    artigo.dataset.category = produto.categoria || '';
    artigo.append(botaoZoom, favorito, informacoes);
  }

  return artigo;
}

const gradeCatalogo = document.querySelector('.product-grid');
if (gradeCatalogo) {
  produtosColecaoFe.forEach(function(produto) {
    gradeCatalogo.appendChild(criarCartaoProduto(produto, false));
  });
}

const trilhoInicial = document.getElementById('product-track');
if (trilhoInicial && trilhoInicial.children.length === 0) {
  produtosColecaoFe.forEach(function(produto) {
    trilhoInicial.appendChild(criarCartaoProduto(produto, true));
  });
}

// Caixa de zoom acessível e reutilizada nos cards e na galeria do produto.
const dialogoZoom = document.createElement('dialog');
dialogoZoom.className = 'image-zoom-dialog';
dialogoZoom.setAttribute('aria-label', 'Imagem ampliada do produto');
dialogoZoom.innerHTML = `
  <button class="image-zoom-close" type="button" aria-label="Fechar imagem ampliada">×</button>
  <div class="image-zoom-viewer">
    <button class="image-zoom-step image-zoom-prev" type="button" aria-label="Imagem anterior">‹</button>
    <figure class="image-zoom-figure">
      <img class="image-zoom-image" alt="">
      <figcaption class="image-zoom-caption"></figcaption>
    </figure>
    <button class="image-zoom-step image-zoom-next" type="button" aria-label="Próxima imagem">›</button>
  </div>`;
document.body.appendChild(dialogoZoom);

const imagemZoom = dialogoZoom.querySelector('.image-zoom-image');
const legendaZoom = dialogoZoom.querySelector('.image-zoom-caption');
const botaoFecharZoom = dialogoZoom.querySelector('.image-zoom-close');
const botaoAnteriorZoom = dialogoZoom.querySelector('.image-zoom-prev');
const botaoProximoZoom = dialogoZoom.querySelector('.image-zoom-next');
let imagensZoom = [];
let indiceZoom = 0;
let focoAnteriorZoom = null;

function atualizarZoom() {
  if (!imagensZoom.length) return;
  const imagemAtual = imagensZoom[indiceZoom];
  imagemZoom.src = imagemAtual.src;
  imagemZoom.alt = imagemAtual.alt || 'Imagem do produto ampliada';
  legendaZoom.textContent = `${legendaZoom.dataset.nome || 'Produto'} — ${indiceZoom + 1} de ${imagensZoom.length}`;
  const temNavegacao = imagensZoom.length > 1;
  botaoAnteriorZoom.hidden = !temNavegacao;
  botaoProximoZoom.hidden = !temNavegacao;
}

function abrirZoom(imagens, indice, acionador, nomeProduto) {
  if (!Array.isArray(imagens) || !imagens.length) return;
  imagensZoom = imagens;
  indiceZoom = Math.min(Math.max(Number(indice) || 0, 0), imagens.length - 1);
  focoAnteriorZoom = acionador || document.activeElement;
  legendaZoom.dataset.nome = nomeProduto || 'Produto';
  atualizarZoom();

  if (typeof dialogoZoom.showModal === 'function') {
    dialogoZoom.showModal();
    botaoFecharZoom.focus();
  } else {
    window.open(imagensZoom[indiceZoom].src, '_blank', 'noopener');
  }
}

function navegarZoom(direcao) {
  if (!imagensZoom.length) return;
  indiceZoom = (indiceZoom + direcao + imagensZoom.length) % imagensZoom.length;
  atualizarZoom();
}

botaoFecharZoom.addEventListener('click', function() { dialogoZoom.close(); });
botaoAnteriorZoom.addEventListener('click', function() { navegarZoom(-1); });
botaoProximoZoom.addEventListener('click', function() { navegarZoom(1); });
dialogoZoom.addEventListener('click', function(evento) {
  if (evento.target === dialogoZoom) dialogoZoom.close();
});
dialogoZoom.addEventListener('keydown', function(evento) {
  if (evento.key === 'ArrowLeft') {
    evento.preventDefault();
    navegarZoom(-1);
  }
  if (evento.key === 'ArrowRight') {
    evento.preventDefault();
    navegarZoom(1);
  }
});
dialogoZoom.addEventListener('close', function() {
  if (focoAnteriorZoom && typeof focoAnteriorZoom.focus === 'function') focoAnteriorZoom.focus();
});

function obterImagemLimpaCatalogo(produto) {
  if (produto.imagemCard) return produto.imagemCard;
  const variantePadrao = Array.isArray(produto.variantes) ? produto.variantes[0] : null;
  const imagens = variantePadrao && Array.isArray(variantePadrao.imagens) && variantePadrao.imagens.length
    ? variantePadrao.imagens
    : produto.imagens;
  return imagens.find(function(item) { return /frente|front/i.test(`${item.alt} ${item.src}`); })
    || imagens.find(function(item) { return !/prancha|apresenta[cç][aã]o|todas as vistas/i.test(`${item.alt} ${item.src}`); })
    || produto.imagemDestaque
    || imagens[0];
}

function classeAmostraCor(variante) {
  const nome = `${variante.slug || ''} ${variante.nome || ''}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (/verde|musgo/.test(nome)) return 'verde';
  if (/off.?white/.test(nome)) return 'off-white';
  if (/branc|white/.test(nome)) return 'branco';
  if (/marrom|brown/.test(nome)) return 'marrom';
  if (/cinza|gray|grey/.test(nome)) return 'cinza';
  return 'preto';
}

function criarAmostrasCores(produto) {
  if (!Array.isArray(produto.variantes) || !produto.variantes.length) return null;
  const amostras = document.createElement('div');
  amostras.className = 'catalog-color-swatches';
  amostras.setAttribute('role', 'group');
  amostras.setAttribute('aria-label', `Escolha uma cor para ${produto.nome}`);
  produto.variantes.forEach(function(variante) {
    const amostra = document.createElement('button');
    amostra.type = 'button';
    amostra.className = 'catalog-color-choice';
    amostra.dataset.variantSlug = variante.slug;
    amostra.setAttribute('aria-label', `Mostrar ${variante.nome} de ${produto.nome}`);
    amostra.setAttribute('aria-pressed', variante === produto.variantes[0] ? 'true' : 'false');
    const circulo = document.createElement('span');
    circulo.className = `catalog-color-swatch catalog-color-swatch--${classeAmostraCor(variante)}`;
    circulo.setAttribute('aria-hidden', 'true');
    amostra.appendChild(circulo);
    amostras.appendChild(amostra);
  });
  return amostras;
}

function obterImagemVarianteParaCard(variante) {
  if (!variante) return null;
  const imagens = Array.isArray(variante.imagens) ? variante.imagens : [];
  return imagens.find(function(item) { return /costas/i.test(item.alt || ''); })
    || variante.imagemDestaque
    || imagens[0]
    || null;
}

function prepararImagensZoomDoCard(produto, variante, imagemVisivel) {
  const imagens = variante && Array.isArray(variante.imagens) && variante.imagens.length
    ? variante.imagens
    : produto && Array.isArray(produto.imagens)
      ? produto.imagens
      : [];
  const srcVisivel = imagemVisivel && (imagemVisivel.currentSrc || imagemVisivel.src);
  if (!srcVisivel) return imagens.slice();

  const chaveSrc = function(src) {
    try {
      return new URL(src, document.baseURI).href;
    } catch (erro) {
      return String(src || '');
    }
  };
  const chaveVisivel = chaveSrc(srcVisivel);
  const indiceVisivel = imagens.findIndex(function(item) {
    return chaveSrc(item.src) === chaveVisivel;
  });
  const imagemSelecionada = indiceVisivel >= 0
    ? imagens[indiceVisivel]
    : { src: srcVisivel, alt: imagemVisivel.alt || `Imagem selecionada de ${produto.nome}` };

  return [imagemSelecionada].concat(imagens.filter(function(item, indice) {
    return indice !== indiceVisivel && chaveSrc(item.src) !== chaveVisivel;
  }));
}

// Usa a imagem editorial de cada card; as vistas completas continuam no zoom e na página do produto.
document.querySelectorAll('.product-gallery[data-product-id], .product-photo[data-product-id]').forEach(function(quadro) {
  const produto = catalogo.find(function(item) {
    return item.id === Number(quadro.dataset.productId);
  });

  if (!produto || !produto.imagens.length) return;
  let varianteSelecionadaNoCard = Array.isArray(produto.variantes) ? produto.variantes[0] : null;

  const imagemDestaque = obterImagemLimpaCatalogo(produto);
  const imagem = document.createElement('img');
  imagem.className = 'catalog-card-image';
  imagem.src = imagemDestaque.src;
  imagem.alt = `${produto.nome} — ${imagemDestaque.alt}`;
  imagem.loading = 'lazy';
  imagem.decoding = 'async';
  quadro.replaceChildren(imagem);

  const card = quadro.closest('.product-card');
  if (card) {
    card.dataset.category = produto.categoria;
    const informacoes = card.querySelector('.catalog-product-info');
    if (informacoes) {
      const metadados = informacoes.querySelectorAll('.catalog-product-meta span');
      if (metadados[0]) metadados[0].textContent = produto.categoria || 'RHEMA';
      if (metadados[1]) metadados[1].textContent = 'RHEMA';
      const nome = informacoes.querySelector('h3');
      if (nome) nome.textContent = produto.nome;
      const preco = informacoes.querySelector('.price');
      if (preco) preco.textContent = `R$ ${formatarPreco(produto.preco)}`;
      const detalhes = informacoes.querySelector('.btn-small');
      if (detalhes) detalhes.href = `produto.html?id=${produto.id}`;
      const amostrasExistentes = informacoes.querySelector('.catalog-color-swatches');
      const amostras = criarAmostrasCores(produto);
      if (amostras && detalhes) informacoes.insertBefore(amostras, detalhes);
      else if (amostras && !detalhes) informacoes.appendChild(amostras);
      if (amostras) {
        amostras.addEventListener('click', function(evento) {
          const botaoAmostra = evento.target.closest('.catalog-color-choice[data-variant-slug]');
          if (!botaoAmostra) return;
          const variante = produto.variantes.find(function(item) {
            return item.slug === botaoAmostra.dataset.variantSlug;
          });
          const imagemVariante = obterImagemVarianteParaCard(variante);
          if (!imagemVariante) return;

          varianteSelecionadaNoCard = variante;
          imagem.src = imagemVariante.src;
          imagem.alt = `${produto.nome} — ${imagemVariante.alt || `cor ${variante.nome}`}`;
          const acionadorZoom = quadro.closest('.product-image-zoom, .home-image-zoom');
          if (acionadorZoom) acionadorZoom.setAttribute('aria-label', `Ampliar imagens de ${produto.nome}, cor ${variante.nome}`);
          amostras.querySelectorAll('.catalog-color-choice').forEach(function(item) {
            const selecionado = item === botaoAmostra;
            item.setAttribute('aria-pressed', String(selecionado));
          });
          if (detalhes) detalhes.href = `produto.html?id=${produto.id}&cor=${encodeURIComponent(variante.slug)}`;
        });
      }
      if (amostrasExistentes) amostrasExistentes.remove();
    }
  }

  // Os cards antigos do catálogo já tinham a galeria em HTML. Envolve a foto
  // em um botão para dar a eles o mesmo zoom dos produtos recém-adicionados.
  if (quadro.classList.contains('product-gallery') && !quadro.closest('.product-image-zoom')) {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'zoom-trigger product-image-zoom';
    botao.setAttribute('aria-label', `Ampliar imagens de ${produto.nome}`);
    quadro.parentNode.insertBefore(botao, quadro);
    botao.appendChild(quadro);
    if (document.querySelector('.catalog-page')) {
      botao.appendChild(criarIconeZoomCatalogo());
    }
  }

  const botaoZoom = quadro.classList.contains('product-photo')
    ? quadro.closest('.home-image-zoom')
    : quadro.closest('.product-image-zoom');

  if (botaoZoom && !botaoZoom.dataset.zoomBound) {
    botaoZoom.dataset.zoomBound = 'true';
    botaoZoom.addEventListener('click', function() {
      const imagemVisivel = quadro.querySelector('img');
      const imagensZoomProduto = prepararImagensZoomDoCard(produto, varianteSelecionadaNoCard, imagemVisivel);
      const nomeComCor = varianteSelecionadaNoCard
        ? `${produto.nome} — ${varianteSelecionadaNoCard.nome}`
        : produto.nome;
      abrirZoom(imagensZoomProduto, 0, botaoZoom, nomeComCor);
    });
  }

  if (botaoZoom) {
    atualizarIndicadorEstoque(produto, botaoZoom, null);
  }
});

// Microetapa 8.9: cria a foto principal e as miniaturas do produto escolhido.
let imagensGaleriaAtual = [];
let indiceImagemGaleriaAtual = 0;
let varianteGaleriaAtual = null;

function renderizarGaleria(produto, variante) {
  const imagemPrincipal = document.getElementById('imagem-principal');
  const miniaturas = document.getElementById('miniaturas-produto');
  const avisoSemFotos = document.getElementById('galeria-sem-fotos');
  const botaoZoomPrincipal = document.getElementById('abrir-zoom-produto');

  if (!imagemPrincipal || !miniaturas) return;

  miniaturas.replaceChildren();
  const imagens = variante && Array.isArray(variante.imagens)
    ? variante.imagens
    : produto && Array.isArray(produto.imagens)
      ? produto.imagens
      : [];
  imagensGaleriaAtual = imagens;
  indiceImagemGaleriaAtual = 0;
  varianteGaleriaAtual = variante || null;

  if (imagens.length === 0) {
    imagemPrincipal.hidden = true;
    if (botaoZoomPrincipal) botaoZoomPrincipal.hidden = true;
    miniaturas.hidden = true;
    if (avisoSemFotos) avisoSemFotos.hidden = false;
    return;
  }

  imagemPrincipal.hidden = false;
  if (botaoZoomPrincipal) {
    botaoZoomPrincipal.hidden = false;
    if (!botaoZoomPrincipal.dataset.zoomBound) {
      botaoZoomPrincipal.dataset.zoomBound = 'true';
      botaoZoomPrincipal.addEventListener('click', function() {
        const nomeComCor = varianteGaleriaAtual && produto
          ? `${produto.nome} — ${varianteGaleriaAtual.nome}`
          : produto && produto.nome;
        abrirZoom(imagensGaleriaAtual, indiceImagemGaleriaAtual, botaoZoomPrincipal, nomeComCor);
      });
    }
  }
  imagemPrincipal.src = imagens[0].src;
  imagemPrincipal.alt = `${produto.nome} — ${imagens[0].alt}`;
  if (botaoZoomPrincipal) {
    botaoZoomPrincipal.setAttribute('aria-label', `Ampliar imagem de ${produto.nome}`);
  }
  miniaturas.hidden = imagens.length < 2;
  if (avisoSemFotos) avisoSemFotos.hidden = true;

  imagens.forEach(function(imagem, indice) {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = indice === 0 ? 'thumbnail active' : 'thumbnail';
    botao.setAttribute('aria-label', `Ver ${imagem.alt}`);
    botao.setAttribute('aria-pressed', indice === 0 ? 'true' : 'false');

    const miniatura = document.createElement('img');
    miniatura.src = imagem.src;
    miniatura.alt = '';
    botao.appendChild(miniatura);

    botao.addEventListener('click', function() {
      indiceImagemGaleriaAtual = indice;
      imagemPrincipal.src = imagem.src;
      imagemPrincipal.alt = `${produto.nome} — ${imagem.alt}`;

      miniaturas.querySelectorAll('.thumbnail').forEach(function(item) {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });

      botao.classList.add('active');
      botao.setAttribute('aria-pressed', 'true');
    });

    miniaturas.appendChild(botao);
  });
}

// Formata um número como preço brasileiro: 59.9 vira "59,90"
function formatarPreco(valor) {
  return valor.toFixed(2).replace('.', ',');
}

let temporizadorAvisoCarrinho;
function mostrarAvisoCarrinho(detalhe) {
  let aviso = document.querySelector('.rhema-cart-toast');

  if (!aviso) {
    aviso = document.createElement('div');
    aviso.className = 'rhema-cart-toast';
    aviso.setAttribute('role', 'status');
    aviso.setAttribute('aria-live', 'polite');
    aviso.setAttribute('aria-atomic', 'true');
    aviso.innerHTML = '<span class="rhema-cart-toast-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="m8 12.2 2.6 2.6 5.5-5.6"></path></svg></span><span class="rhema-cart-toast-copy"><strong>Adicionado ao carrinho</strong><span class="rhema-cart-toast-detail"></span></span>';
    document.body.appendChild(aviso);
  }

  aviso.querySelector('.rhema-cart-toast-detail').textContent = detalhe;
  aviso.classList.add('is-visible');
  window.clearTimeout(temporizadorAvisoCarrinho);
  temporizadorAvisoCarrinho = window.setTimeout(function() {
    aviso.classList.remove('is-visible');
  }, 3600);
}

// Microetapas 5.1 e R1.6: página do produto (só roda onde existe o botão)
const botaoCarrinho = document.querySelector('.btn-cart');

if (botaoCarrinho) {
  // Descobre qual produto mostrar pelo endereço (ex.: produto.html?id=3)
  const params = new URLSearchParams(window.location.search);
  const idTexto = params.get('id');
  const idProduto = idTexto === null ? 1 : Number(idTexto);

  const produtoAtual = catalogo.find(function(item) {
    return item.id === idProduto;
  });

  const selectTamanho = document.getElementById('tamanho');
  const selectCor = document.getElementById('cor-produto');
  const opcaoCor = document.getElementById('opcao-cor');
  const inputQuantidade = document.getElementById('quantidade-produto');

  if (!produtoAtual) {
    // Endereço com um id que não existe no catálogo
    document.getElementById('produto-nome').textContent = 'Produto não encontrado';
    document.getElementById('produto-preco').textContent = '';
    document.getElementById('produto-descricao').innerHTML = 'Volte ao <a href="produtos.html">catálogo</a> e escolha um produto.';
    renderizarGaleria(null);
    document.querySelector('.product-options').style.display = 'none';
    botaoCarrinho.style.display = 'none';
  } else {
    // Preenche a página com os dados do produto
    document.title = produtoAtual.nome + ' | RHEMA';
    document.getElementById('produto-nome').textContent = produtoAtual.nome;
    document.getElementById('produto-preco').textContent = 'R$ ' + formatarPreco(produtoAtual.preco);
    document.getElementById('produto-descricao').textContent = produtoAtual.descricao;
    document.getElementById('produto-versiculo').textContent = produtoAtual.versiculo;
    document.getElementById('produto-significado').textContent = produtoAtual.significado;
    document.getElementById('produto-conteudo-fe').hidden = false;
    const textoEstoqueProduto = document.getElementById('estoque-produto');
    const botaoImagemProduto = document.getElementById('abrir-zoom-produto');
    let varianteSelecionada = null;

    function atualizarDisponibilidadeSelecionada() {
      const tamanho = selectTamanho.value;
      const noEstoque = obterEstoqueTamanho(produtoAtual, tamanho, varianteSelecionada);
      const disponivel = obterEstoqueDisponivel(produtoAtual, tamanho, varianteSelecionada);
      const rotuloEstoque = noEstoque === 0
        ? `Esgotado no tamanho ${tamanho}.`
        : disponivel === 0
          ? `As ${noEstoque} ${noEstoque === 1 ? 'unidade disponível está' : 'unidades disponíveis estão'} na sacola.`
          : `${disponivel === 1 ? 'Resta' : 'Restam'} ${disponivel} ${disponivel === 1 ? 'unidade' : 'unidades'} no tamanho ${tamanho}.`;

      textoEstoqueProduto.textContent = rotuloEstoque;
      textoEstoqueProduto.classList.toggle('is-sold-out', disponivel === 0);
      inputQuantidade.max = String(disponivel);
      inputQuantidade.disabled = disponivel === 0;
      if (disponivel === 0) inputQuantidade.value = '1';
      else if (Number(inputQuantidade.value) > disponivel) inputQuantidade.value = String(disponivel);

      botaoCarrinho.disabled = disponivel === 0;
      botaoCarrinho.textContent = disponivel === 0 ? 'Esgotado neste tamanho' : 'Adicionar ao Carrinho';

      let faixa = botaoImagemProduto.querySelector('.stock-badge');
      if (!faixa) {
        faixa = document.createElement('span');
        faixa.className = 'stock-badge';
        botaoImagemProduto.appendChild(faixa);
      }
      faixa.textContent = disponivel === 0
        ? `ESGOTADO · ${tamanho}`
        : `${textoEstoqueBaixo(disponivel)} · ${tamanho}`;
      faixa.hidden = disponivel > 5;

      const descricaoZoom = `Ampliar imagem de ${produtoAtual.nome}`;
      botaoImagemProduto.setAttribute('aria-label', disponivel === 0
        ? `${descricaoZoom}; tamanho ${tamanho} esgotado`
        : `${descricaoZoom}; ${disponivel} ${disponivel === 1 ? 'unidade disponível' : 'unidades disponíveis'} no tamanho ${tamanho}`);
      return disponivel;
    }

    if (Array.isArray(produtoAtual.variantes) && produtoAtual.variantes.length && selectCor && opcaoCor) {
      opcaoCor.hidden = false;
      selectCor.replaceChildren();
      produtoAtual.variantes.forEach(function(variante) {
        const opcao = document.createElement('option');
        opcao.value = variante.slug;
        opcao.textContent = variante.nome;
        selectCor.appendChild(opcao);
      });
      const corSolicitada = params.get('cor');
      varianteSelecionada = produtoAtual.variantes.find(function(variante) {
        return variante.slug === corSolicitada;
      }) || produtoAtual.variantes.find(function(variante) {
        return variante.slug === selectCor.value;
      }) || produtoAtual.variantes[0];
      selectCor.value = varianteSelecionada.slug;
      selectCor.addEventListener('change', function() {
        varianteSelecionada = produtoAtual.variantes.find(function(variante) {
          return variante.slug === selectCor.value;
        }) || produtoAtual.variantes[0];
        renderizarGaleria(produtoAtual, varianteSelecionada);
        atualizarDisponibilidadeSelecionada();
      });
    } else if (opcaoCor) {
      opcaoCor.hidden = true;
    }

    renderizarGaleria(produtoAtual, varianteSelecionada);

    // Cria uma opção no seletor para cada tamanho do produto
    selectTamanho.innerHTML = '';
    produtoAtual.tamanhos.forEach(function(tamanho) {
      const opcao = document.createElement('option');
      opcao.value = tamanho;
      opcao.textContent = tamanho;
      selectTamanho.appendChild(opcao);
    });
    selectTamanho.addEventListener('change', atualizarDisponibilidadeSelecionada);
    inputQuantidade.addEventListener('input', function() {
      const disponivel = obterEstoqueDisponivel(produtoAtual, selectTamanho.value, varianteSelecionada);
      const quantidade = Math.max(1, Math.min(disponivel || 1, Math.floor(Number(inputQuantidade.value) || 1)));
      inputQuantidade.value = String(quantidade);
    });
    atualizarDisponibilidadeSelecionada();

    // Adicionar produto ao carrinho
    botaoCarrinho.addEventListener('click', function() {
      const tamanhoEscolhido = selectTamanho.value;
      const corEscolhida = varianteSelecionada ? varianteSelecionada.nome : '';
      const corSlugEscolhida = varianteSelecionada ? varianteSelecionada.slug : '';
      const quantidadeSolicitada = Math.max(1, Math.floor(Number(inputQuantidade.value) || 1));
      const carrinho = obterCarrinho();
      const disponivel = obterEstoqueDisponivel(produtoAtual, tamanhoEscolhido, varianteSelecionada);

      if (quantidadeSolicitada > disponivel) {
        alert(`Há somente ${disponivel} ${disponivel === 1 ? 'unidade disponível' : 'unidades disponíveis'} no tamanho ${tamanhoEscolhido}.`);
        atualizarDisponibilidadeSelecionada();
        return;
      }

      const indexExistente = carrinho.findIndex(function(item) {
        return Number(item.id) === produtoAtual.id
          && item.tamanho === tamanhoEscolhido
          && (item.corSlug || '') === corSlugEscolhida;
      });

      if (indexExistente !== -1) {
        carrinho[indexExistente].quantidade = Math.max(1, Number(carrinho[indexExistente].quantidade) || 1) + quantidadeSolicitada;
      } else {
        carrinho.push({
          id: produtoAtual.id,
          nome: produtoAtual.nome,
          preco: produtoAtual.preco,
          tamanho: tamanhoEscolhido,
          cor: corEscolhida,
          corSlug: corSlugEscolhida,
          quantidade: quantidadeSolicitada
        });
      }

      // Salva o carrinho atualizado no navegador
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      atualizarContadorCarrinho();
      atualizarDisponibilidadeSelecionada();

      // Confirma a adição com o aviso visual da identidade RHEMA.
      const detalheCor = corEscolhida ? `, ${corEscolhida}` : '';
      mostrarAvisoCarrinho(`${produtoAtual.nome} · ${tamanhoEscolhido}${detalheCor} · ×${quantidadeSolicitada}`);
    });
  }
}

// Microetapa 6.1 e R1.3: Busca de produtos no catálogo
const input = document.getElementById('search-input');
const produtos = document.querySelectorAll('.product-card');

function normalizarTexto(texto) {
  return texto
    .toLocaleLowerCase('pt-BR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

if (input) {
  const parametrosBusca = new URLSearchParams(window.location.search);
  const categoriasValidas = new Set(catalogo.map(function(produto) { return produto.categoria; }));
  const categoriaSolicitada = parametrosBusca.get('categoria');
  const categoriaAtiva = categoriasValidas.has(categoriaSolicitada) ? categoriaSolicitada : '';
  const statusBusca = document.getElementById('catalog-filter-status');
  input.value = parametrosBusca.get('busca') || '';

  function filtrarProdutos() {
    const termo = normalizarTexto(input.value.trim());
    let quantidadeVisivel = 0;

    produtos.forEach(function(produto) {
      const nome = normalizarTexto(produto.querySelector('h3').textContent);
      const correspondeAoTermo = nome.includes(termo);
      const correspondeACategoria = !categoriaAtiva || produto.dataset.category === categoriaAtiva;
      const visivel = correspondeAoTermo && correspondeACategoria;

      produto.hidden = !visivel;
      if (visivel) quantidadeVisivel += 1;
    });

    if (statusBusca) {
      statusBusca.replaceChildren();
      if (categoriaAtiva) {
        statusBusca.append(`Categoria: ${categoriaAtiva}. `);
        const limparFiltro = document.createElement('a');
        limparFiltro.href = 'catalogo.html#search-input';
        limparFiltro.textContent = 'Ver todas as categorias';
        statusBusca.appendChild(limparFiltro);
      } else if (termo) {
        statusBusca.textContent = quantidadeVisivel
          ? `${quantidadeVisivel} produto(s) encontrado(s).`
          : 'Nenhum produto encontrado.';
      }
    }
  }

  input.addEventListener('input', filtrarProdutos);
  filtrarProdutos();
}

// Microetapa 7.2: Renderização do carrinho
document.addEventListener('DOMContentLoaded', function() {
  // Apenas executa se estivermos na página do carrinho
  if (document.getElementById('cart-items')) {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    function renderizarCarrinho() {
      const carrinho = obterCarrinho();
      let total = 0;
      cartItemsContainer.replaceChildren();

      if (carrinho.length === 0) {
        cartItemsContainer.textContent = 'Sua sacola está vazia.';
        cartTotalElement.textContent = 'Total: R$ 0,00';
        atualizarContadorCarrinho();
        return;
      }

      carrinho.forEach(function(item, index) {
        const quantidade = Math.max(1, Number(item.quantidade) || 1);
        const detalhesVariacao = [item.cor, item.tamanho].filter(Boolean);
        const nomeComTamanho = detalhesVariacao.length
          ? `${item.nome} (${detalhesVariacao.join(', ')})`
          : item.nome;
        const produto = catalogo.find(function(itemCatalogo) { return itemCatalogo.id === Number(item.id); });
        const varianteCarrinho = produto && Array.isArray(produto.variantes)
          ? produto.variantes.find(function(variante) { return variante.slug === item.corSlug; }) || produto.variantes[0]
          : null;
        const estoqueDisponivelParaSomar = produto
          ? obterEstoqueDisponivel(produto, item.tamanho, varianteCarrinho, index)
          : 0;

        const linha = document.createElement('div');
        linha.className = 'cart-item';
        const nome = document.createElement('span');
        nome.className = 'cart-item-name';
        nome.textContent = nomeComTamanho;
        const unitario = document.createElement('span');
        unitario.className = 'cart-item-price';
        unitario.textContent = `R$ ${formatarPreco(Number(item.preco) || 0)} cada`;
        const controles = document.createElement('div');
        controles.className = 'cart-quantity-controls';
        const diminuir = document.createElement('button');
        diminuir.type = 'button';
        diminuir.className = 'cart-quantity-button';
        diminuir.dataset.cartAction = 'decrease';
        diminuir.dataset.index = String(index);
        diminuir.setAttribute('aria-label', `Diminuir quantidade de ${nomeComTamanho}`);
        diminuir.textContent = '−';
        diminuir.disabled = quantidade <= 1;
        const quantidadeTexto = document.createElement('span');
        quantidadeTexto.className = 'cart-quantity-value';
        quantidadeTexto.setAttribute('aria-label', `Quantidade: ${quantidade}`);
        quantidadeTexto.textContent = String(quantidade);
        const aumentar = document.createElement('button');
        aumentar.type = 'button';
        aumentar.className = 'cart-quantity-button';
        aumentar.dataset.cartAction = 'increase';
        aumentar.dataset.index = String(index);
        aumentar.setAttribute('aria-label', `Aumentar quantidade de ${nomeComTamanho}`);
        aumentar.textContent = '+';
        aumentar.disabled = estoqueDisponivelParaSomar <= 0;
        controles.append(diminuir, quantidadeTexto, aumentar);
        const subtotal = document.createElement('span');
        subtotal.className = 'cart-item-price cart-item-subtotal';
        subtotal.textContent = `R$ ${formatarPreco((Number(item.preco) || 0) * quantidade)}`;
        const remover = document.createElement('button');
        remover.type = 'button';
        remover.className = 'cart-item-remove';
        remover.dataset.cartAction = 'remove';
        remover.dataset.index = String(index);
        remover.textContent = 'Remover';
        linha.append(nome, unitario, controles, subtotal, remover);
        cartItemsContainer.appendChild(linha);
        total += (Number(item.preco) || 0) * quantidade;
      });

      cartTotalElement.textContent = `Total: R$ ${formatarPreco(total)}`;
      atualizarContadorCarrinho();
    }

    cartItemsContainer.addEventListener('click', function(evento) {
      const botao = evento.target.closest('[data-cart-action]');
      if (!botao) return;
      const carrinho = obterCarrinho();
      const indice = Number(botao.dataset.index);
      const item = carrinho[indice];
      if (!item) return;
      const quantidade = Math.max(1, Number(item.quantidade) || 1);

      if (botao.dataset.cartAction === 'remove') carrinho.splice(indice, 1);
      if (botao.dataset.cartAction === 'decrease' && quantidade > 1) item.quantidade = quantidade - 1;
      if (botao.dataset.cartAction === 'increase') {
        const produto = catalogo.find(function(itemCatalogo) { return itemCatalogo.id === Number(item.id); });
        const varianteCarrinho = produto && Array.isArray(produto.variantes)
          ? produto.variantes.find(function(variante) { return variante.slug === item.corSlug; }) || produto.variantes[0]
          : null;
        const disponivelAdicional = produto
          ? obterEstoqueDisponivel(produto, item.tamanho, varianteCarrinho, indice)
          : 0;
        if (disponivelAdicional > 0) item.quantidade = quantidade + 1;
      }

      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      renderizarCarrinho();
    });

    renderizarCarrinho();
  }
});


// Contadores da sacola no cabeçalho e no botão flutuante
function atualizarContadorCarrinho() {
  const carrinho = obterCarrinho();
  const quantidade = carrinho.reduce(function(total, item) {
    return total + Math.max(1, Number(item.quantidade) || 1);
  }, 0);
  document.querySelectorAll('[data-cart-count]').forEach(function(badge) {
    badge.textContent = quantidade;
  });
  const contadorFlutuante = document.getElementById('fab-cart-count');
  if (contadorFlutuante) {
    contadorFlutuante.textContent = quantidade;
  }
  const linkSacola = document.querySelector('a.header-action[href="carrinho.html"]');
  if (linkSacola) {
    linkSacola.setAttribute('aria-label', `Abrir sacola, ${quantidade} ${quantidade === 1 ? 'item' : 'itens'}`);
  }
  const linkSacolaFlutuante = document.querySelector('a.fab-cart');
  if (linkSacolaFlutuante) {
    linkSacolaFlutuante.setAttribute('aria-label', `Ver carrinho, ${quantidade} ${quantidade === 1 ? 'item' : 'itens'}`);
  }
}

document.addEventListener('DOMContentLoaded', atualizarContadorCarrinho);

// Botão voltar ao topo: aparece depois de rolar
const botaoTopo = document.getElementById('fab-top');

if (botaoTopo) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      botaoTopo.classList.add('visivel');
    } else {
      botaoTopo.classList.remove('visivel');
    }
  });

  botaoTopo.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const trilhoProdutos = document.getElementById('product-track');
const botaoAnterior = document.getElementById('products-prev');
const botaoProximo = document.getElementById('products-next');
const indicadores = document.querySelectorAll('.carousel-dot');

if (trilhoProdutos && botaoAnterior && botaoProximo) {
  function atualizarEstadoCarrossel() {
    const limite = Math.max(0, trilhoProdutos.scrollWidth - trilhoProdutos.clientWidth);
    const chegouAoInicio = trilhoProdutos.scrollLeft <= 8;
    const chegouAoFim = limite > 8 && trilhoProdutos.scrollLeft >= limite - 8;

    botaoAnterior.disabled = chegouAoInicio;
    botaoProximo.disabled = limite <= 8 || chegouAoFim;

    indicadores.forEach(function(indicador, indice) {
      const ativo = (indice === 0 && !chegouAoFim) || (indice === 1 && chegouAoFim);
      indicador.classList.toggle('active', ativo);
      indicador.setAttribute('aria-current', ativo ? 'true' : 'false');
    });
  }

  function moverCarrossel(direcao) {
    const primeiroCard = trilhoProdutos.querySelector('.home-product-card');
    const espacoEntreCards = parseFloat(getComputedStyle(trilhoProdutos).columnGap) || 0;
    const passo = primeiroCard
      ? primeiroCard.getBoundingClientRect().width + espacoEntreCards
      : trilhoProdutos.clientWidth;

    trilhoProdutos.scrollBy({ left: passo * direcao, behavior: 'smooth' });
  }

  botaoAnterior.addEventListener('click', function() { moverCarrossel(-1); });
  botaoProximo.addEventListener('click', function() { moverCarrossel(1); });

  indicadores.forEach(function(indicador, indice) {
    indicador.addEventListener('click', function() {
      const limite = Math.max(0, trilhoProdutos.scrollWidth - trilhoProdutos.clientWidth);
      const destino = indice === 0 ? 0 : limite;
      trilhoProdutos.scrollTo({ left: destino, behavior: 'smooth' });
    });
  });

  trilhoProdutos.addEventListener('scroll', atualizarEstadoCarrossel);
  window.addEventListener('resize', atualizarEstadoCarrossel);
  atualizarEstadoCarrossel();
}

const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('newsletter-message').textContent =
      'Cadastro demonstrativo: ainda não foi enviado.';
  });
}

// Uma palavra autoral para cada livro do cânon de 66 livros.
// O campo `versiculo` contém uma paráfrase, não uma citação literal de tradução bíblica.
const devocionais = [
  {
    referencia: 'Gênesis 1:1',
    versiculo: 'Paráfrase: Deus é a origem da vida e pode trazer ordem e esperança onde tudo parece vazio.',
    reflexao: 'A Bíblia começa apresentando um Deus que cria. O seu recomeço também pode começar confiando naquele que dá vida.',
    oracao: 'Deus Criador, renova em mim a esperança e ajuda-me a cuidar com gratidão da vida que me deste.'
  },
  {
    referencia: 'Êxodo 3:7-8',
    versiculo: 'Paráfrase: Deus vê a aflição do seu povo, ouve seu clamor e age para libertá-lo.',
    reflexao: 'A dor não passa despercebida por Deus. Mesmo quando a resposta ainda não chegou, você pode levar seu clamor a Ele.',
    oracao: 'Senhor, vê minha necessidade e guia-me pelo caminho da libertação e da vida.'
  },
  {
    referencia: 'Levítico 19:18',
    versiculo: 'Paráfrase: Ame o próximo com o mesmo cuidado com que deseja ser tratado.',
    reflexao: 'A fé também aparece na maneira como tratamos as pessoas ao nosso redor, inclusive quando seria mais fácil guardar ressentimento.',
    oracao: 'Deus, ensina-me a amar com atitudes, perdoar com sabedoria e tratar cada pessoa com dignidade.'
  },
  {
    referencia: 'Números 6:24-26',
    versiculo: 'Paráfrase: Que o Senhor abençoe, proteja, conceda graça e dê paz.',
    reflexao: 'A bênção sacerdotal lembra que a paz e o cuidado vêm de Deus e podem acompanhar cada etapa do caminho.',
    oracao: 'Senhor, guarda minha vida, ilumina meu caminho e dá-me a Tua paz hoje.'
  },
  {
    referencia: 'Deuteronômio 10:12',
    versiculo: 'Paráfrase: Deus chama seu povo a reverenciá-lo, andar em seus caminhos, amá-lo e servi-lo de coração.',
    reflexao: 'Seguir a Deus envolve o coração inteiro e escolhas concretas no cotidiano.',
    oracao: 'Pai, orienta meus passos e ajuda-me a servir-te com amor sincero.'
  },
  {
    referencia: 'Josué 1:9',
    versiculo: 'Paráfrase: Tenha coragem; Deus acompanha você por onde andar.',
    reflexao: 'Coragem bíblica não é ausência de medo: é avançar lembrando quem está presente no caminho.',
    oracao: 'Senhor, fortalece meu coração para dar o próximo passo com confiança na Tua presença.'
  },
  {
    referencia: 'Juízes 6:14-16',
    versiculo: 'Paráfrase: Deus chama Gideão a agir e promete estar com ele, apesar de sua sensação de fraqueza.',
    reflexao: 'Deus pode trabalhar por meio de pessoas que se sentem pequenas. A suficiência não está no tamanho do medo, mas na presença de Deus.',
    oracao: 'Deus, ajuda-me a responder ao Teu chamado e a confiar que não caminho sozinho.'
  },
  {
    referencia: 'Rute 2:12',
    versiculo: 'Paráfrase: Rute encontra abrigo sob o cuidado do Deus de Israel.',
    reflexao: 'A fidelidade de Rute floresce em tempos difíceis, e ela encontra acolhimento e provisão no caminho.',
    oracao: 'Senhor, sê meu abrigo e ajuda-me a demonstrar lealdade e bondade às pessoas que colocas perto de mim.'
  },
  {
    referencia: '1 Samuel 16:7',
    versiculo: 'Paráfrase: Deus não avalia como as pessoas avaliam; Ele vê o coração.',
    reflexao: 'A aparência não revela toda a história de alguém. Peça a Deus um olhar capaz de reconhecer caráter e dignidade.',
    oracao: 'Pai, purifica minhas intenções e ensina-me a enxergar as pessoas com justiça e compaixão.'
  },
  {
    referencia: '2 Samuel 22:2-3',
    versiculo: 'Paráfrase: O Senhor é rocha, fortaleza e libertador para quem busca refúgio nele.',
    reflexao: 'Davi transforma a memória do livramento em louvor. Lembrar como Deus sustentou você pode renovar a esperança de hoje.',
    oracao: 'Senhor, sê minha rocha nas horas instáveis e recebe minha gratidão pelo cuidado que já demonstraste.'
  },
  {
    referencia: '1 Reis 19:11-12',
    versiculo: 'Paráfrase: Depois do vento, do tremor e do fogo, Elias percebe a presença de Deus numa voz mansa.',
    reflexao: 'Nem toda direção chega em meio ao barulho. Reserve espaço para silenciar e ouvir com atenção.',
    oracao: 'Deus, acalma minha pressa e ajuda-me a reconhecer Tua direção com humildade.'
  },
  {
    referencia: '2 Reis 6:16-17',
    versiculo: 'Paráfrase: Eliseu lembra seu servo de que a proteção de Deus é maior do que aquilo que conseguem ver.',
    reflexao: 'O medo pode limitar nossa visão. A oração ajuda a lembrar que não enxergamos toda a realidade.',
    oracao: 'Senhor, abre meus olhos para perceber Teu cuidado e dá-me serenidade diante do que me assusta.'
  },
  {
    referencia: '1 Crônicas 16:11',
    versiculo: 'Paráfrase: Busque o Senhor e a força que vem dele; volte a procurá-lo continuamente.',
    reflexao: 'A busca por Deus não precisa ficar restrita a um momento da semana: pode orientar as decisões de cada dia.',
    oracao: 'Pai, atrai meu coração para Ti e renova minhas forças enquanto Te busco.'
  },
  {
    referencia: '2 Crônicas 20:12-15',
    versiculo: 'Paráfrase: Diante de uma ameaça maior que suas forças, Judá clama a Deus e recebe direção.',
    reflexao: 'Reconhecer que não sabemos o que fazer pode ser o começo de uma oração honesta e de uma nova direção.',
    oracao: 'Senhor, não sei como enfrentar tudo isso; volto meus olhos para Ti e peço sabedoria para o próximo passo.'
  },
  {
    referencia: 'Esdras 7:10',
    versiculo: 'Paráfrase: Esdras preparou o coração para estudar a lei de Deus, praticá-la e ensiná-la.',
    reflexao: 'Conhecer a Palavra ganha profundidade quando permitimos que ela transforme nossas atitudes antes de compartilhá-la.',
    oracao: 'Deus, dá-me disposição para aprender, coragem para praticar e humildade para ensinar.'
  },
  {
    referencia: 'Neemias 8:10',
    versiculo: 'Paráfrase: A alegria que vem do Senhor fortalece o povo.',
    reflexao: 'A alegria em Deus não apaga as dificuldades, mas oferece sustento para atravessá-las com esperança.',
    oracao: 'Senhor, sustenta-me com a Tua alegria e ajuda-me a repartir cuidado com quem está abatido.'
  },
  {
    referencia: 'Ester 4:14',
    versiculo: 'Paráfrase: Ester é desafiada a considerar se chegou àquela posição justamente para aquele momento.',
    reflexao: 'Talentos, relacionamentos e oportunidades podem abrir espaço para proteger e servir outras pessoas.',
    oracao: 'Deus, dá-me discernimento para reconhecer minhas responsabilidades e coragem para agir com sabedoria.'
  },
  {
    referencia: 'Jó 19:25',
    versiculo: 'Paráfrase: Em meio à perda, Jó ainda afirma sua esperança em seu Redentor.',
    reflexao: 'A fé de Jó não nega o sofrimento; ela procura um ponto de apoio para continuar em meio à dor.',
    oracao: 'Senhor, encontra-me no sofrimento e mantém viva em mim a esperança de redenção.'
  },
  {
    referencia: 'Salmos 121:1-2',
    versiculo: 'Paráfrase: O auxílio verdadeiro vem do Senhor, criador dos céus e da terra.',
    reflexao: 'Quando a jornada parece longa, lembre-se de que pedir ajuda a Deus é parte da caminhada.',
    oracao: 'Criador, guarda meus passos e ajuda-me a confiar em Ti durante todo o caminho.'
  },
  {
    referencia: 'Provérbios 16:3',
    versiculo: 'Paráfrase: Entregue seus planos ao Senhor e busque conduzi-los com dependência dele.',
    reflexao: 'Consagrar um plano não é exigir que tudo aconteça como imaginamos; é agir com responsabilidade e deixar que Deus oriente o resultado.',
    oracao: 'Senhor, recebe meus planos e dá-me disposição para ajustá-los à Tua sabedoria.'
  },
  {
    referencia: 'Eclesiastes 3:1',
    versiculo: 'Paráfrase: Há um tempo apropriado para cada propósito debaixo do céu.',
    reflexao: 'Nem toda fase pede a mesma resposta. Discernir o tempo ajuda a agir com paciência e presença.',
    oracao: 'Deus, ensina-me a viver bem esta estação e a confiar quando ainda não vejo a próxima.'
  },
  {
    referencia: 'Cânticos 8:7',
    versiculo: 'Paráfrase: O amor verdadeiro não pode ser comprado nem apagado pelas muitas águas.',
    reflexao: 'Cânticos celebra a força do amor comprometido. Cuide dos vínculos com respeito, ternura e fidelidade.',
    oracao: 'Deus, ajuda-me a amar com sinceridade e a tratar com cuidado as pessoas que confiaste a mim.'
  },
  {
    referencia: 'Isaías 40:31',
    versiculo: 'Paráfrase: Quem espera no Senhor recebe novas forças para continuar a jornada.',
    reflexao: 'Esperar em Deus não é desistir: é recuperar fôlego e seguir sem depender apenas das próprias forças.',
    oracao: 'Senhor, renova minhas forças e dá-me paciência para continuar com esperança.'
  },
  {
    referencia: 'Jeremias 17:7-8',
    versiculo: 'Paráfrase: Feliz quem confia no Senhor; como árvore junto às águas, atravessa o calor com raízes firmes.',
    reflexao: 'Raízes profundas não impedem a seca, mas ajudam a permanecer. Cultive confiança em Deus também nos dias tranquilos.',
    oracao: 'Pai, aprofunda minhas raízes em Ti para que eu permaneça firme nas mudanças.'
  },
  {
    referencia: 'Lamentações 3:22-23',
    versiculo: 'Paráfrase: O amor fiel do Senhor não se esgota; sua misericórdia se renova a cada manhã.',
    reflexao: 'O livro nasce de uma realidade dolorosa e ainda assim encontra esperança na fidelidade de Deus.',
    oracao: 'Senhor, obrigado pela misericórdia de hoje. Ajuda-me a recomeçar com humildade e esperança.'
  },
  {
    referencia: 'Ezequiel 36:26',
    versiculo: 'Paráfrase: Deus promete um coração novo e um espírito renovado ao seu povo.',
    reflexao: 'A mudança profunda não se limita a corrigir um hábito: Deus pode renovar desejos, prioridades e maneiras de viver.',
    oracao: 'Deus, renova meu coração e torna-me sensível à Tua vontade.'
  },
  {
    referencia: 'Daniel 3:17-18',
    versiculo: 'Paráfrase: Os três jovens confiam que Deus pode livrá-los e permanecem fiéis mesmo sem saber o desfecho.',
    reflexao: 'A fidelidade não é uma troca para garantir o resultado desejado; é escolher Deus mesmo em meio à incerteza.',
    oracao: 'Senhor, dá-me firmeza para permanecer fiel, qualquer que seja o resultado desta situação.'
  },
  {
    referencia: 'Oseias 6:6',
    versiculo: 'Paráfrase: Deus deseja amor leal e conhecimento dele, mais do que uma religiosidade apenas exterior.',
    reflexao: 'Práticas religiosas têm sentido quando caminham junto com misericórdia, fidelidade e relacionamento verdadeiro com Deus.',
    oracao: 'Pai, livra-me de uma fé apenas aparente e forma em mim um amor leal.'
  },
  {
    referencia: 'Joel 2:13',
    versiculo: 'Paráfrase: Volte-se para Deus de coração; ele é compassivo, paciente e abundante em amor.',
    reflexao: 'Arrependimento é retorno sincero a Deus, que oferece misericórdia e chama a uma vida renovada.',
    oracao: 'Senhor, recebe meu retorno e transforma as escolhas que precisam mudar.'
  },
  {
    referencia: 'Amós 5:24',
    versiculo: 'Paráfrase: Deus chama seu povo a fazer a justiça correr continuamente como um rio.',
    reflexao: 'A fé pública também se mede pela maneira como protegemos quem sofre injustiça e tratamos o próximo.',
    oracao: 'Deus justo, mostra onde posso agir com retidão e defender a dignidade de outras pessoas.'
  },
  {
    referencia: 'Obadias 1:3-4',
    versiculo: 'Paráfrase: O orgulho faz Edom confiar numa segurança que não pode sustentá-lo.',
    reflexao: 'Conquistas e posições não tornam ninguém invulnerável. A humildade nos ajuda a depender de Deus e a servir.',
    oracao: 'Senhor, guarda-me do orgulho e ensina-me a usar o que tenho para o bem.'
  },
  {
    referencia: 'Jonas 2:2',
    versiculo: 'Paráfrase: Do fundo de sua aflição, Jonas clama a Deus e é ouvido.',
    reflexao: 'A oração pode começar exatamente onde estamos, mesmo quando nossa situação é resultado de escolhas erradas.',
    oracao: 'Deus, ouve meu clamor e ajuda-me a responder com arrependimento e obediência.'
  },
  {
    referencia: 'Miqueias 6:8',
    versiculo: 'Paráfrase: Deus pede que pratiquemos a justiça, amemos a misericórdia e caminhemos humildemente com ele.',
    reflexao: 'Uma vida de fé se expressa em escolhas justas, compaixão concreta e humildade diante de Deus.',
    oracao: 'Senhor, guia minhas ações pela justiça, pela misericórdia e pela humildade.'
  },
  {
    referencia: 'Naum 1:7',
    versiculo: 'Paráfrase: O Senhor é bom e oferece proteção a quem nele busca refúgio em tempos difíceis.',
    reflexao: 'A bondade de Deus não ignora a violência; ela é abrigo para quem sofre e esperança de justiça.',
    oracao: 'Deus, sê meu refúgio e dá-me coragem para praticar o bem em tempos difíceis.'
  },
  {
    referencia: 'Habacuque 3:17-18',
    versiculo: 'Paráfrase: Mesmo quando a colheita falha, Habacuque escolhe alegrar-se em Deus, sua salvação.',
    reflexao: 'A alegria do profeta não depende de negar a escassez; nasce de uma confiança que permanece em meio à perda.',
    oracao: 'Senhor, sustenta minha esperança quando os resultados não chegam como eu esperava.'
  },
  {
    referencia: 'Sofonias 3:17',
    versiculo: 'Paráfrase: Deus está no meio do seu povo, salva e se alegra com amor sobre ele.',
    reflexao: 'A imagem de Deus presente e amoroso ajuda a substituir a vergonha pelo acolhimento e pela esperança.',
    oracao: 'Deus, ajuda-me a receber Teu amor e a viver com a segurança da Tua presença.'
  },
  {
    referencia: 'Ageu 1:7-8',
    versiculo: 'Paráfrase: O povo é chamado a avaliar seus caminhos e reconstruir o que estava abandonado.',
    reflexao: 'Ageu convida a rever prioridades e a transformar intenção em trabalho fiel, feito em comunidade.',
    oracao: 'Senhor, mostra o que tenho deixado de lado e dá-me disposição para reconstruir com fidelidade.'
  },
  {
    referencia: 'Zacarias 4:6',
    versiculo: 'Paráfrase: A obra de Deus não avança apenas por força humana, mas pelo seu Espírito.',
    reflexao: 'Planejamento e esforço têm seu lugar, mas não precisam carregar sozinhos o peso do resultado.',
    oracao: 'Espírito de Deus, orienta meu trabalho e ensina-me a depender de Ti.'
  },
  {
    referencia: 'Malaquias 4:2',
    versiculo: 'Paráfrase: Para os que honram o nome do Senhor, surge a esperança de cura e restauração.',
    reflexao: 'A promessa aponta para um futuro de justiça e renovação, mesmo quando a espera parece longa.',
    oracao: 'Senhor, cura o que está ferido em mim e mantém viva minha esperança na Tua justiça.'
  },
  {
    referencia: 'Mateus 11:28-30',
    versiculo: 'Paráfrase: Jesus convida os cansados a se aproximarem dele e aprenderem seu caminho manso.',
    reflexao: 'Jesus não oferece uma vida sem responsabilidades, mas companhia e descanso para quem está sobrecarregado.',
    oracao: 'Jesus, recebo Teu convite. Ensina-me a caminhar contigo e a descansar em Tua graça.'
  },
  {
    referencia: 'Marcos 10:45',
    versiculo: 'Paráfrase: Jesus veio para servir e entregar sua vida em favor de muitos.',
    reflexao: 'No Reino de Deus, grandeza se revela no serviço. Procure hoje uma forma concreta de aliviar o peso de alguém.',
    oracao: 'Senhor Jesus, forma em mim um coração disposto a servir sem buscar reconhecimento.'
  },
  {
    referencia: 'Lucas 15:20',
    versiculo: 'Paráfrase: O pai vê o filho que retorna, corre ao seu encontro e o acolhe com compaixão.',
    reflexao: 'A parábola mostra um Deus que recebe quem volta. A vergonha não precisa impedir o primeiro passo de retorno.',
    oracao: 'Pai, ajuda-me a voltar quando me afastar e a acolher outras pessoas com misericórdia.'
  },
  {
    referencia: 'João 15:5',
    versiculo: 'Paráfrase: Jesus é a videira; permanecer unido a ele torna possível produzir fruto.',
    reflexao: 'Fruto duradouro cresce de uma relação contínua com Cristo, não da tentativa de provar nosso valor.',
    oracao: 'Jesus, mantém-me perto de Ti e que minhas atitudes revelem o Teu amor.'
  },
  {
    referencia: 'Atos 1:8',
    versiculo: 'Paráfrase: O Espírito Santo capacita os discípulos para testemunhar de Jesus até os lugares mais distantes.',
    reflexao: 'A missão começa onde estamos e se estende por meio de palavras e atitudes que apontam para Cristo.',
    oracao: 'Espírito Santo, dá-me coragem e sabedoria para testemunhar de Jesus com minha vida.'
  },
  {
    referencia: 'Romanos 12:2',
    versiculo: 'Paráfrase: Não se molde automaticamente ao padrão deste mundo; deixe Deus renovar sua mente.',
    reflexao: 'A transformação cristã inclui examinar ideias e hábitos à luz do caráter de Deus.',
    oracao: 'Senhor, renova meus pensamentos e ajuda-me a escolher aquilo que te agrada.'
  },
  {
    referencia: '1 Coríntios 13:4-7',
    versiculo: 'Paráfrase: O amor é paciente, bondoso, não se ensoberbece e persevera com esperança.',
    reflexao: 'Paulo descreve o amor como prática diária. Observe qual dessas atitudes pode orientar uma conversa sua hoje.',
    oracao: 'Deus, ensina-me a amar com paciência, bondade, verdade e perseverança.'
  },
  {
    referencia: '2 Coríntios 12:9',
    versiculo: 'Paráfrase: A graça de Cristo basta, e seu poder se manifesta na fraqueza humana.',
    reflexao: 'Reconhecer limites não diminui a fé. Pode abrir espaço para receber graça e buscar apoio com humildade.',
    oracao: 'Jesus, sustenta-me com Tua graça e ajuda-me a atravessar minhas limitações com honestidade.'
  },
  {
    referencia: 'Gálatas 5:22-23',
    versiculo: 'Paráfrase: O Espírito produz amor, alegria, paz, paciência, bondade, fidelidade, mansidão e domínio próprio.',
    reflexao: 'O fruto do Espírito aparece no caráter cultivado ao longo do tempo, especialmente nas relações difíceis.',
    oracao: 'Espírito Santo, faz crescer Teu fruto em mim e transforma a maneira como trato as pessoas.'
  },
  {
    referencia: 'Efésios 2:10',
    versiculo: 'Paráfrase: Somos obra de Deus, criados em Cristo para viver as boas obras que ele preparou.',
    reflexao: 'Boas obras não compram o amor de Deus; são uma resposta à graça recebida e uma forma de servir.',
    oracao: 'Pai, mostra as oportunidades de fazer o bem e ajuda-me a responder com generosidade.'
  },
  {
    referencia: 'Filipenses 1:6',
    versiculo: 'Paráfrase: Paulo confia que Deus completará a boa obra que começou em seu povo.',
    reflexao: 'Crescimento espiritual é processo. Celebre os passos dados e continue aberto à transformação de Deus.',
    oracao: 'Senhor, continua Tua obra em mim e dá-me perseverança para crescer com humildade.'
  },
  {
    referencia: 'Colossenses 3:23-24',
    versiculo: 'Paráfrase: Faça o trabalho de coração, como serviço ao Senhor e não apenas para agradar às pessoas.',
    reflexao: 'Até tarefas simples podem ser realizadas com integridade, dedicação e respeito por quem será beneficiado.',
    oracao: 'Deus, orienta meu trabalho hoje para que eu aja com excelência, honestidade e cuidado.'
  },
  {
    referencia: '1 Tessalonicenses 5:16-18',
    versiculo: 'Paráfrase: Cultivem alegria, oração constante e gratidão em todas as circunstâncias.',
    reflexao: 'Gratidão não chama o sofrimento de bom; ajuda a reconhecer a presença de Deus mesmo em dias difíceis.',
    oracao: 'Senhor, abre meus olhos para os motivos de gratidão e mantém meu coração em diálogo contigo.'
  },
  {
    referencia: '2 Tessalonicenses 3:3',
    versiculo: 'Paráfrase: O Senhor é fiel, fortalece os seus e os guarda do mal.',
    reflexao: 'A fidelidade de Deus oferece firmeza quando as circunstâncias e as pessoas parecem instáveis.',
    oracao: 'Senhor fiel, fortalece-me e guarda meu coração enquanto sigo Teus caminhos.'
  },
  {
    referencia: '1 Timóteo 4:12',
    versiculo: 'Paráfrase: A juventude não impede ninguém de ser exemplo na fala, na conduta, no amor, na fé e na pureza.',
    reflexao: 'A influência não depende apenas de idade ou posição; aparece na coerência das escolhas cotidianas.',
    oracao: 'Deus, ajuda-me a ser exemplo de amor, fé e integridade em cada ambiente.'
  },
  {
    referencia: '2 Timóteo 1:7',
    versiculo: 'Paráfrase: Deus nos dá um espírito de poder, amor e equilíbrio, não de covardia.',
    reflexao: 'A coragem cristã combina firmeza com amor e domínio próprio; não precisa se transformar em impulsividade.',
    oracao: 'Senhor, dá-me coragem amorosa e equilíbrio para enfrentar o que tenho diante de mim.'
  },
  {
    referencia: 'Tito 2:11-12',
    versiculo: 'Paráfrase: A graça de Deus nos alcança e nos ensina a viver com domínio próprio, justiça e devoção.',
    reflexao: 'A graça não apenas perdoa; também educa e forma um modo de vida comprometido com o bem.',
    oracao: 'Pai, que Tua graça me ensine a abandonar o que faz mal e a viver com justiça.'
  },
  {
    referencia: 'Filemom 1:16',
    versiculo: 'Paráfrase: Paulo pede que Onésimo seja recebido não apenas como servo, mas como irmão amado.',
    reflexao: 'O evangelho muda a maneira de enxergar pessoas e confronta relações baseadas apenas em posição ou utilidade.',
    oracao: 'Senhor, ajuda-me a reconhecer a dignidade de cada pessoa e a construir relações marcadas por respeito.'
  },
  {
    referencia: 'Hebreus 4:16',
    versiculo: 'Paráfrase: Podemos aproximar-nos com confiança do trono da graça para receber misericórdia e auxílio.',
    reflexao: 'A oração não exige que escondamos nossas necessidades; em Cristo podemos pedir ajuda com confiança e reverência.',
    oracao: 'Deus, recebo Tua misericórdia e peço graça para a necessidade que enfrento hoje.'
  },
  {
    referencia: 'Tiago 1:5',
    versiculo: 'Paráfrase: Quem precisa de sabedoria pode pedi-la a Deus, que dá generosamente.',
    reflexao: 'Em decisões difíceis, pedir sabedoria é mais útil do que agir apenas pela pressa ou pelo orgulho.',
    oracao: 'Senhor, concede-me sabedoria para decidir com responsabilidade, verdade e amor.'
  },
  {
    referencia: '1 Pedro 5:7',
    versiculo: 'Paráfrase: Entregue a Deus suas ansiedades, pois ele cuida de você.',
    reflexao: 'Levar a ansiedade a Deus não impede buscar ajuda prática; lembra que você não precisa carregar tudo isolado.',
    oracao: 'Pai, entrego a Ti minhas preocupações e peço coragem para procurar o apoio de que preciso.'
  },
  {
    referencia: '2 Pedro 1:5-7',
    versiculo: 'Paráfrase: Acrescente à fé virtude, conhecimento, domínio próprio, perseverança, devoção, fraternidade e amor.',
    reflexao: 'A maturidade cristã cresce quando a fé se traduz em caráter e cuidado perseverante pelo próximo.',
    oracao: 'Deus, desenvolve em mim essas virtudes e ajuda-me a crescer sem desistir.'
  },
  {
    referencia: '1 João 4:19',
    versiculo: 'Paráfrase: Nosso amor é resposta ao amor que Deus nos ofereceu primeiro.',
    reflexao: 'Você não precisa conquistar o amor de Deus antes de amar; pode responder à graça que já recebeu.',
    oracao: 'Senhor, obrigado por me amares primeiro. Ensina-me a compartilhar esse amor com o próximo.'
  },
  {
    referencia: '2 João 1:6',
    versiculo: 'Paráfrase: Amar é viver segundo os mandamentos de Deus e permanecer no caminho que ele ensinou.',
    reflexao: 'O amor cristão não é só sentimento: toma forma em escolhas fiéis, verdadeiras e cuidadosas.',
    oracao: 'Pai, que meu amor se torne atitude e permaneça fiel ao Teu caminho.'
  },
  {
    referencia: '3 João 1:4',
    versiculo: 'Paráfrase: João encontra grande alegria ao saber que seus filhos espirituais vivem na verdade.',
    reflexao: 'A verdade cristã é algo a ser vivido. Sua coerência pode encorajar as pessoas que caminham com você.',
    oracao: 'Deus, ajuda-me a viver com verdade e a encorajar outras pessoas em sua caminhada.'
  },
  {
    referencia: 'Judas 1:24-25',
    versiculo: 'Paráfrase: Deus é poderoso para guardar seu povo e apresentá-lo com alegria diante de sua glória.',
    reflexao: 'A perseverança não depende apenas da força individual; a doxologia de Judas dirige o olhar para Deus, que sustenta.',
    oracao: 'Deus Salvador, guarda-me no caminho e recebe minha gratidão por Tua fidelidade.'
  },
  {
    referencia: 'Apocalipse 21:4',
    versiculo: 'Paráfrase: A visão final anuncia um tempo em que Deus enxugará as lágrimas e a morte e a dor terão fim.',
    reflexao: 'A esperança cristã olha para a restauração final sem minimizar o sofrimento presente.',
    oracao: 'Senhor, consola quem sofre, dá-me força para cuidar do próximo e mantém viva a esperança da renovação.'
  }
];

function obterDevocionalDeHoje() {
  const hoje = new Date();
  const hojeEmUTC = Date.UTC(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  const inicioDoAnoEmUTC = Date.UTC(hoje.getFullYear(), 0, 1);
  const diasPassados = Math.floor((hojeEmUTC - inicioDoAnoEmUTC) / 86400000);
  const indice = diasPassados % devocionais.length;
  return devocionais[indice];
}

document.addEventListener('DOMContentLoaded', function() {
  const elementoReferencia = document.getElementById('devocional-referencia');

  if (elementoReferencia) {
    const devocionalHoje = obterDevocionalDeHoje();

    elementoReferencia.textContent = devocionalHoje.referencia;
    document.getElementById('devocional-versiculo').textContent = devocionalHoje.versiculo;
    document.getElementById('devocional-reflexao').textContent = devocionalHoje.reflexao;
    document.getElementById('devocional-oracao').textContent = devocionalHoje.oracao;
  }
});

function formatarDataISO(data) {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const dia = String(data.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

function atualizarSequenciaDevocional() {
  const elementoSequencia = document.getElementById('devocional-sequencia');
  if (!elementoSequencia) return;

  let sequencia = 0;
  try {
    const valorSalvo = Number(localStorage.getItem('devocional-sequencia'));
    if (Number.isSafeInteger(valorSalvo) && valorSalvo > 0) sequencia = valorSalvo;
  } catch (erro) {
    // A leitura continua utilizável mesmo quando o navegador bloqueia o armazenamento local.
  }

  elementoSequencia.textContent = sequencia > 0
    ? `🔥 ${sequencia} dia(s) seguido(s)`
    : 'Comece sua sequência hoje!';
}

function mostrarStatusDevocional(mensagem) {
  const status = document.getElementById('devocional-status');
  if (status) status.textContent = mensagem;
}

document.addEventListener('DOMContentLoaded', function() {
  atualizarSequenciaDevocional();

  const botaoLiHoje = document.getElementById('btn-li-hoje');

  if (botaoLiHoje) {
    botaoLiHoje.addEventListener('click', function() {
      const hojeTexto = formatarDataISO(new Date());
      let ultimaLeitura = null;
      let sequencia = 0;

      try {
        ultimaLeitura = localStorage.getItem('devocional-ultima-leitura');
        const valorSalvo = Number(localStorage.getItem('devocional-sequencia'));
        if (Number.isSafeInteger(valorSalvo) && valorSalvo > 0) sequencia = valorSalvo;
      } catch (erro) {
        mostrarStatusDevocional('O navegador não permitiu acessar o armazenamento local.');
        return;
      }

      if (ultimaLeitura === hojeTexto) {
        mostrarStatusDevocional('Você já marcou a leitura de hoje.');
        return;
      }

      const ontem = new Date();
      ontem.setDate(ontem.getDate() - 1);
      const ontemTexto = formatarDataISO(ontem);

      sequencia = (ultimaLeitura === ontemTexto) ? sequencia + 1 : 1;

      try {
        localStorage.setItem('devocional-ultima-leitura', hojeTexto);
        localStorage.setItem('devocional-sequencia', String(sequencia));
      } catch (erro) {
        mostrarStatusDevocional('Não foi possível salvar a leitura neste navegador.');
        return;
      }

      atualizarSequenciaDevocional();
      mostrarStatusDevocional(`Leitura marcada. Sua sequência é de ${sequencia} dia(s).`);
    });
  }
});

function montarTextoDevocional(devocional) {
  return `📖 ${devocional.referencia}\n${devocional.versiculo}\n\n${devocional.reflexao}\n\nRHEMA | O jeito certo de vestir a fé.`;
}

function copiarTextoComFallback(texto) {
  function copiarComSelecao() {
    const campoTemporario = document.createElement('textarea');
    campoTemporario.value = texto;
    campoTemporario.setAttribute('readonly', '');
    campoTemporario.setAttribute('aria-hidden', 'true');
    campoTemporario.style.position = 'fixed';
    campoTemporario.style.opacity = '0';
    document.body.appendChild(campoTemporario);
    campoTemporario.select();

    let copiado = false;
    try {
      copiado = typeof document.execCommand === 'function' && document.execCommand('copy');
    } catch (erro) {
      copiado = false;
    } finally {
      campoTemporario.remove();
    }

    return copiado
      ? Promise.resolve()
      : Promise.reject(new Error('A cópia não foi autorizada pelo navegador.'));
  }

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    return navigator.clipboard.writeText(texto).catch(copiarComSelecao);
  }

  return copiarComSelecao();
}

document.addEventListener('DOMContentLoaded', function() {
  const botaoWhatsapp = document.getElementById('btn-compartilhar-whatsapp');
  const botaoCopiar = document.getElementById('btn-copiar-texto');

  if (botaoWhatsapp) {
    botaoWhatsapp.addEventListener('click', function() {
      const devocionalHoje = obterDevocionalDeHoje();
      const texto = montarTextoDevocional(devocionalHoje);
      const link = `https://wa.me/?text=${encodeURIComponent(texto)}`;
      window.open(link, '_blank', 'noopener,noreferrer');
      mostrarStatusDevocional('Abrindo o compartilhamento do WhatsApp.');
    });
  }

  if (botaoCopiar) {
    botaoCopiar.addEventListener('click', function() {
      const devocionalHoje = obterDevocionalDeHoje();
      const texto = montarTextoDevocional(devocionalHoje);

      copiarTextoComFallback(texto).then(function() {
        mostrarStatusDevocional('Texto do devocional copiado.');
      }).catch(function() {
        mostrarStatusDevocional('Não foi possível copiar automaticamente. Selecione e copie o texto manualmente.');
      });
    });
  }
});

// Microetapa 9.7: favoritos locais no catálogo.
function carregarFavoritos() {
  try {
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    if (!Array.isArray(favoritosSalvos)) return [];

    return Array.from(new Set(favoritosSalvos.filter(function(id) {
      return Number.isSafeInteger(id) && id > 0;
    })));
  } catch (erro) {
    return [];
  }
}

function atualizarBotaoFavorito(botao, favoritado) {
  atualizarIconeFavorito(botao, favoritado);
  botao.setAttribute('aria-pressed', favoritado ? 'true' : 'false');
  botao.setAttribute('aria-label', favoritado ? 'Remover dos favoritos' : 'Favoritar produto');
}

document.querySelectorAll('.favorito').forEach(function(botao) {
  const id = Number(botao.dataset.id);
  botao.type = 'button';

  if (!Number.isSafeInteger(id) || id <= 0) {
    botao.disabled = true;
    return;
  }

  atualizarBotaoFavorito(botao, carregarFavoritos().includes(id));

  botao.addEventListener('click', function() {
    const favoritos = carregarFavoritos();
    const favoritado = favoritos.includes(id);
    const favoritosAtualizados = favoritado
      ? favoritos.filter(function(favId) { return favId !== id; })
      : favoritos.concat(id);

    localStorage.setItem('favoritos', JSON.stringify(favoritosAtualizados));
    atualizarBotaoFavorito(botao, !favoritado);
  });
});

// Microetapa 9.8: mural de oração salvo somente neste navegador.
const LIMITE_CARACTERES_ORACAO = 500;
const LIMITE_PEDIDOS_ORACAO = 100;

function carregarOracoes() {
  try {
    const dadosSalvos = JSON.parse(localStorage.getItem('muralOracao') || '[]');
    if (!Array.isArray(dadosSalvos)) return [];

    return dadosSalvos
      .filter(function(oracao) {
        return oracao && typeof oracao.texto === 'string';
      })
      .map(function(oracao) {
        return {
          texto: oracao.texto.trim().slice(0, LIMITE_CARACTERES_ORACAO),
          data: typeof oracao.data === 'string' ? oracao.data.slice(0, 40) : ''
        };
      })
      .filter(function(oracao) { return oracao.texto.length > 0; })
      .slice(0, LIMITE_PEDIDOS_ORACAO);
  } catch (erro) {
    return [];
  }
}

function renderizarOracoes() {
  const lista = document.getElementById('lista-oracoes');
  if (!lista) return;

  const oracoes = carregarOracoes();
  const mensagemVazia = document.getElementById('mural-vazio');
  lista.replaceChildren();
  if (mensagemVazia) mensagemVazia.hidden = oracoes.length > 0;

  oracoes.forEach(function(oracao, indice) {
    const item = document.createElement('li');
    item.className = 'oracao-item';

    const texto = document.createElement('p');
    texto.className = 'oracao-texto';
    texto.textContent = oracao.texto;
    item.appendChild(texto);

    if (oracao.data) {
      const data = document.createElement('span');
      data.className = 'oracao-data';
      data.textContent = oracao.data;
      item.appendChild(data);
    }

    const botaoRemover = document.createElement('button');
    botaoRemover.type = 'button';
    botaoRemover.className = 'oracao-remover';
    botaoRemover.textContent = 'Excluir pedido';
    botaoRemover.setAttribute('aria-label', 'Excluir este pedido de oração');
    botaoRemover.addEventListener('click', function() {
      const statusRemocao = document.getElementById('mural-status');
      const pedidosAtualizados = carregarOracoes();
      pedidosAtualizados.splice(indice, 1);

      try {
        localStorage.setItem('muralOracao', JSON.stringify(pedidosAtualizados));
      } catch (erro) {
        if (statusRemocao) statusRemocao.textContent = 'Não foi possível atualizar o mural neste navegador.';
        return;
      }

      renderizarOracoes();
      if (statusRemocao) statusRemocao.textContent = 'Pedido removido deste navegador.';
    });
    item.appendChild(botaoRemover);

    lista.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('form-oracao');
  const campoTexto = document.getElementById('texto-oracao');
  const contador = document.getElementById('mural-contador');
  const status = document.getElementById('mural-status');

  renderizarOracoes();
  if (!formulario || !campoTexto) return;

  function atualizarContador() {
    if (contador) {
      contador.textContent = `${campoTexto.value.length} / ${LIMITE_CARACTERES_ORACAO} caracteres`;
    }
  }

  campoTexto.addEventListener('input', function() {
    campoTexto.removeAttribute('aria-invalid');
    if (status) status.textContent = '';
    atualizarContador();
  });

  atualizarContador();

  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const texto = campoTexto.value.trim().slice(0, LIMITE_CARACTERES_ORACAO);

    if (!texto) {
      campoTexto.setAttribute('aria-invalid', 'true');
      if (status) status.textContent = 'Escreva seu pedido antes de salvar.';
      campoTexto.focus();
      return;
    }

    const oracoes = carregarOracoes();
    if (oracoes.length >= LIMITE_PEDIDOS_ORACAO) {
      if (status) status.textContent = 'O mural chegou ao limite de 100 pedidos. Remova dados do navegador antes de salvar outro.';
      return;
    }

    oracoes.unshift({
      texto: texto,
      data: new Date().toLocaleDateString('pt-BR')
    });

    try {
      localStorage.setItem('muralOracao', JSON.stringify(oracoes));
    } catch (erro) {
      if (status) status.textContent = 'Não foi possível salvar. Confira o espaço disponível neste navegador.';
      return;
    }

    campoTexto.value = '';
    campoTexto.removeAttribute('aria-invalid');
    atualizarContador();
    renderizarOracoes();
    if (status) status.textContent = 'Pedido salvo somente neste navegador.';
  });
});
