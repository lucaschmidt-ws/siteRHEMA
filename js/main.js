// JavaScript para o projeto RHEMA

// Lista de produtos do catálogo (os mesmos de produtos.html).
// A página produto.html usa esta lista para mostrar o produto escolhido.
const catalogo = [
  {
    id: 1,
    nome: 'Camiseta Streetwear',
    categoria: 'Camisetas',
    preco: 109.90,
    descricao: 'Camiseta Streetwear da RHEMA.',
    versiculo: 'Paráfrase de Gálatas 3:27: em Cristo recebemos uma nova identidade.',
    significado: 'A roupa compõe o estilo, mas a identidade de quem segue Jesus encontra seu fundamento nele e se expressa nas escolhas diárias.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    imagens: [
      { src: 'imagens/camiseta%20preta/camiseta-preta-frente.png', alt: 'frente da camiseta preta' },
      { src: 'imagens/camiseta%20preta/camiseta-preta-costas.png', alt: 'costas da camiseta preta' },
      { src: 'imagens/camiseta%20preta/camiseta-preta.jpeg', alt: 'detalhes da camiseta preta' }
    ]
  },
  {
    id: 2,
    nome: 'Calça Reta',
    categoria: 'Calças',
    preco: 189.90,
    descricao: 'Calça reta da RHEMA.',
    versiculo: 'Paráfrase de Colossenses 2:6-7: continuem vivendo em Cristo, enraizados nele e firmes na fé.',
    significado: 'Cada passo pode ser uma oportunidade de caminhar com gratidão, mantendo a fé como fundamento.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    imagens: [
      { src: 'imagens/calças/streetwear-calça/Calça-Streetwear-principal.png', alt: 'calça preta, vista principal' },
      { src: 'imagens/calças/streetwear-calça/Calça-Streetwear-frente.png', alt: 'frente da calça preta' },
      { src: 'imagens/calças/streetwear-calça/Calça-Streetwear-costas.png', alt: 'costas da calça preta' }
    ]
  },
  {
    id: 3,
    nome: 'Moletom',
    categoria: 'Moletons',
    preco: 259.90,
    descricao: 'Moletom da RHEMA.',
    versiculo: 'Paráfrase do Salmo 46:1: Deus é refúgio, força e auxílio presente nos momentos difíceis.',
    significado: 'Em dias de frio ou incerteza, esta peça lembra o convite a buscar em Deus amparo e coragem.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    imagens: [
      { src: 'imagens/moleton/moleton-bege.jpeg', alt: 'moletom bege' }
    ]
  },
  {
    id: 4,
    nome: 'Boné RHEMA',
    categoria: 'Acessórios',
    preco: 99.90,
    descricao: 'Boné RHEMA.',
    versiculo: 'Paráfrase de 1 Coríntios 2:16: quem segue Cristo aprende a olhar a vida a partir dele.',
    significado: 'O boné acompanha o dia a dia; que os pensamentos também sejam guiados pela sabedoria e pelo caráter de Cristo.',
    tamanhos: ['Único'],
    imagens: [
      { src: 'imagens/Nova%20pasta/bone-bege.jpeg', alt: 'boné bege' },
      { src: 'imagens/Nova%20pasta/bone-preto.jpeg', alt: 'boné preto' }
    ]
  },
  {
    id: 5,
    nome: 'Hoodie',
    categoria: 'Moletons',
    preco: 129.90,
    descricao: 'Hoodie da RHEMA.',
    versiculo: 'Paráfrase de Mateus 11:28-30: Jesus chama os cansados a se aproximarem dele e encontrarem descanso para a alma.',
    significado: 'O conforto pode lembrar o cuidado de Deus; o descanso que Jesus oferece à alma não significa ausência de dificuldades.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    imagens: [
      { src: 'imagens/moleton/moleton-preto.jpeg', alt: 'hoodie preto' }
    ]
  },
  {
    id: 6,
    nome: 'Jaqueta',
    categoria: 'Lifestyle',
    preco: 199.90,
    descricao: 'Jaqueta da RHEMA.',
    versiculo: 'Paráfrase de Colossenses 3:12-14: vistam-se de compaixão, bondade, humildade, mansidão, paciência e amor.',
    significado: 'A jaqueta se torna um lembrete simbólico para levar essas atitudes às relações do cotidiano.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    imagens: [
      { src: 'imagens/jaqueta/jaqueta.jpeg', alt: 'jaqueta RHEMA, vistas e detalhes' }
    ]
  }
];

// Usa a foto principal cadastrada no catálogo nos cards da home e do catálogo.
document.querySelectorAll('.product-gallery[data-product-id], .product-photo[data-product-id]').forEach(function(quadro) {
  const produto = catalogo.find(function(item) {
    return item.id === Number(quadro.dataset.productId);
  });

  if (!produto || !produto.imagens.length) return;

  const imagem = document.createElement('img');
  imagem.className = 'catalog-card-image';
  imagem.src = produto.imagens[0].src;
  imagem.alt = `${produto.nome} — ${produto.imagens[0].alt}`;
  imagem.loading = 'lazy';
  imagem.decoding = 'async';
  quadro.replaceChildren(imagem);

  const card = quadro.closest('.product-card');
  if (card) card.dataset.category = produto.categoria;
});

// Microetapa 8.9: cria a foto principal e as miniaturas do produto escolhido.
function renderizarGaleria(produto) {
  const imagemPrincipal = document.getElementById('imagem-principal');
  const miniaturas = document.getElementById('miniaturas-produto');
  const avisoSemFotos = document.getElementById('galeria-sem-fotos');

  if (!imagemPrincipal || !miniaturas) return;

  miniaturas.replaceChildren();
  const imagens = produto && Array.isArray(produto.imagens) ? produto.imagens : [];

  if (imagens.length === 0) {
    imagemPrincipal.hidden = true;
    miniaturas.hidden = true;
    if (avisoSemFotos) avisoSemFotos.hidden = false;
    return;
  }

  imagemPrincipal.hidden = false;
  imagemPrincipal.src = imagens[0].src;
  imagemPrincipal.alt = `${produto.nome} — ${imagens[0].alt}`;
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
    renderizarGaleria(produtoAtual);

    // Cria uma opção no seletor para cada tamanho do produto
    selectTamanho.innerHTML = '';
    produtoAtual.tamanhos.forEach(function(tamanho) {
      const opcao = document.createElement('option');
      opcao.value = tamanho;
      opcao.textContent = tamanho;
      selectTamanho.appendChild(opcao);
    });

    // Adicionar produto ao carrinho
    botaoCarrinho.addEventListener('click', function() {
      const tamanhoEscolhido = selectTamanho.value;

      // Pega o carrinho do localStorage ou cria um vazio se não existir
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

      // Verifica se o mesmo produto, no mesmo tamanho, já está no carrinho
      const indexExistente = carrinho.findIndex(function(item) {
        return item.id === produtoAtual.id && item.tamanho === tamanhoEscolhido;
      });

      if (indexExistente === -1) {
        // Adiciona o produto ao carrinho
        carrinho.push({
          id: produtoAtual.id,
          nome: produtoAtual.nome,
          preco: produtoAtual.preco,
          tamanho: tamanhoEscolhido
        });
        // Salva o carrinho atualizado no navegador
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorCarrinho();

        // Avisa o usuário
        alert(`"${produtoAtual.nome}" (${tamanhoEscolhido}) adicionado ao carrinho!`);
      } else {
        // Avisa que o produto já está lá
        alert('Este produto neste tamanho já está no carrinho!');
      }
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
        limparFiltro.href = 'produtos.html#search-input';
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
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    if (carrinho.length === 0) {
      cartItemsContainer.innerHTML = '<p>Carrinho vazio</p>';
      cartTotalElement.textContent = 'Total: R$ 0,00';
    } else {
      let total = 0;
      cartItemsContainer.innerHTML = ''; // Limpa o conteúdo existente

      carrinho.forEach(function(item, index) {
        // Itens antigos não têm tamanho; só mostra o tamanho quando existe
        const nomeComTamanho = item.tamanho ? `${item.nome} (${item.tamanho})` : item.nome;

        cartItemsContainer.innerHTML += `
          <div class="cart-item">
            <span class="cart-item-name">${nomeComTamanho}</span>
            <span class="cart-item-price">R$ ${formatarPreco(item.preco)}</span>
            <button class="cart-item-remove" data-index="${index}">Remover</button>
          </div>
        `;
        total += item.preco;
      });

      cartTotalElement.textContent = `Total: R$ ${formatarPreco(total)}`;

      // Adiciona evento para os botões de remover
      document.querySelectorAll('.cart-item-remove').forEach(function(button, index) {
        button.addEventListener('click', function() {
          const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
          carrinho.splice(index, 1); // Remove o item pelo índice
          localStorage.setItem('carrinho', JSON.stringify(carrinho));
          location.reload(); // Recarrega a página para atualizar a visualização
        });
      });
    }
  }
});


// Contadores da sacola no cabeçalho e no botão flutuante
function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const quantidade = carrinho.length;
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
  botao.classList.toggle('favoritado', favoritado);
  botao.textContent = favoritado ? '♥' : '♡';
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
