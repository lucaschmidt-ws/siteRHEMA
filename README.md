# RHEMA Streetwear

Projeto do site da RHEMA Streetwear, incluindo páginas da loja, catálogo, carrinho, imagens de produtos e materiais de identidade visual e direção de arte.

## Estrutura

- `index.html`: página inicial.
- `produtos.html`: página editorial Roupas, com categorias, frame de vídeo reservado e destaque RHEMA BLACK.
- `catalogo.html`: catálogo completo, com busca, filtros por categoria, cards com zoom e acesso às páginas dos produtos.
- `produto.html`: página de detalhes do produto.
- `carrinho.html`: carrinho de compras.
- `sobre.html`: história do fundador e interface para envio/leitura de testemunhos da comunidade.
- `politicas.html`: informações sobre entrega, trocas, devoluções e atendimento.
- `privacidade.html`: dados usados pelo site, finalidades, serviços externos e direitos da pessoa usuária.
- `css/` e `js/`: estilos e funcionalidades do site.
- `js/sobre.js` e `js/sobre-config.js`: mural de testemunhos e configuração da URL/chave publicável do Supabase; a chave `service_role` não deve ir ao navegador.
- `imagens/`, `imagens/editorial/`, `imagens/colecao-cronicas-da-fe/`, `imagens/catalogo-vistas/`, `cabeçalhos/` e `Logo Rhema/`: imagens e recursos visuais, incluindo as três artes editoriais da homepage, dez modelos da coleção Crônicas da Fé em cinco cores, 50 pranchas editoriais de apresentação e vistas dos moletons/casaco.
- `database/rhema_testimonies.sql`: estrutura preparada para o mural público; depende de ativar o Supabase e configurar a Data API antes de receber relatos.
- `Manual_RHEMA_Unificado.md`, `PROGRESSO.md` e documentos Word: manuais e acompanhamento do projeto.

Os cabeçalhos de Início e Histórias usam a mesma identidade visual de Roupas: wordmark RHEMA à esquerda, linha dourada, busca, sacola e menu recolhível. O menu separa navegação, categorias do catálogo e conteúdo institucional; cada categoria abre o catálogo já filtrado. Os cartões em “Explore por categoria” têm estados sutis ao passar o mouse ou navegar com teclado e removem o deslocamento quando o navegador pede movimento reduzido.

## Como visualizar

Abra `index.html` no navegador. Algumas funções do carrinho e do catálogo usam JavaScript local.
O item “Histórias” leva à página `sobre.html`. O formulário do mural está preparado, mas permanece desativado até o projeto Supabase ser ativado e conectado; as etapas estão em `Manual_RHEMA_Unificado.md`.

## Página Roupas — Manifesto Street

A página `produtos.html` combina a direção editorial em preto e branco com a identidade atual da RHEMA: fundo escuro, detalhes dourados e uma faixa clara inspirada em papel impresso. As categorias são Camisetas, Calças, Moletons, Casacos sem capuz e Acessórios. A antiga Jaqueta foi substituída no catálogo por um casaco/moletom de gola careca sem capuz. Os cards usam pranchas como destaque; ao abrir um produto, a galeria permite percorrer as imagens individuais de frente, costas e lateral, seguidas pela prancha completa. As camisetas da coleção mantêm as vistas individuais separadas para cada cor. O botão editorial “Ver lifestyle” da homepage continua funcionando como atalho para Casacos. As imagens das galerias são mockups criados com ajuda do OpenAI Codex, não fotos de peças físicas nem confirmação das especificações de fabricação.

Depois das categorias, a página reserva um frame horizontal para um futuro vídeo de campanha com pessoas vestindo peças RHEMA. O frame está intencionalmente vazio até existir um vídeo adequado. Em seguida, a seção antes chamada “Coleção 2026 / PROPÓSITO” foi movida para Roupas e apresentada como **RHEMA BLACK**, sem ano de coleção, com destaque editorial e os produtos pretos do catálogo. O catálogo completo fica em `catalogo.html`, com busca, filtros por categoria e cards de produtos. A página Roupas direciona os cards de categoria para o catálogo já filtrado.

## Coleção Crônicas da Fé

Os dez modelos foram integrados ao catálogo como camisetas com IDs 7 a 16. Cada um oferece preto, branco suave, cinza mescla, verde militar/musgo, marrom chocolate, tamanhos P a GG e preço de R$ 109,90. Na página do produto, a seleção de cor troca as imagens de frente, costas, lado e prancha de apresentação; a cor e o tamanho escolhidos são salvos no carrinho. A sacola permite ajustar quantidades, calcula subtotais e total, e bloqueia acréscimos acima do estoque restante para o tamanho selecionado, somando as cores. O contador mostra unidades. O estoque inicial está em `js/main.js`: Camiseta Streetwear — P 1, M 1, G 1 e GG 0; todos os tamanhos dos demais produtos estão em zero. Os cards mostram “ESGOTADO” ou, para saldos de 1 a 5, uma faixa translúcida sobre a imagem com a quantidade. O estoque é configuração estática local e ainda não se sincroniza entre clientes nem reserva unidades. A sacola não conclui pedidos ou pagamentos. A pasta `pranchas-de-apresentacao/` contém uma prancha por estampa e cor, com frente, costas, detalhes ampliados e ângulos laterais no estilo da referência enviada. São mockups preparados com ajuda do OpenAI Codex; ainda não são fotos de peças físicas e os detalhes visuais não confirmam especificações de fabricação.

Os links de entrega e trocas/devoluções abrem as seções próprias em `politicas.html`; a política de privacidade está em `privacidade.html`. A identificação RHEMA Streetwear e o WhatsApp foram autorizados como provisórios; razão social e endereço comercial ainda precisam ser informados. Os formulários de newsletter e testemunhos permanecem inativos e não enviam dados.

O rodapé exibe Visa, Mastercard e Elo como bandeiras previstas para uma futura integração. American Express foi removido; nenhuma bandeira representa um meio de pagamento já habilitado.

## Créditos e transparência

Este projeto foi desenvolvido com ajuda do OpenAI Codex, assistente de inteligência artificial da OpenAI, em colaboração com a pessoa responsável pela RHEMA, que orienta e revisa o trabalho. O site também exibe este crédito em seus rodapés.
