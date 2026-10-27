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
