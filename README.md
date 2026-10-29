# RHEMA Streetwear

Projeto do site da RHEMA Streetwear, incluindo páginas da loja, catálogo, carrinho, imagens de produtos e materiais de identidade visual e direção de arte.

## Estrutura

- `index.html`: página inicial.
- `produtos.html`: catálogo de produtos.
- `produto.html`: página de detalhes do produto.
- `carrinho.html`: carrinho de compras.
- `sobre.html`: história do fundador e interface para envio/leitura de testemunhos da comunidade.
- `css/` e `js/`: estilos e funcionalidades do site.
- `js/sobre.js` e `js/sobre-config.js`: mural de testemunhos e configuração da URL/chave publicável do Supabase; a chave `service_role` não deve ir ao navegador.
- `imagens/`, `imagens/editorial/`, `imagens/colecao-cronicas-da-fe/`, `cabeçalhos/` e `Logo Rhema/`: imagens e recursos visuais, incluindo as três artes editoriais da homepage e dez modelos da coleção Crônicas da Fé nas cores preto, branco, cinza, verde militar/musgo e marrom, cada um com vistas frontal, traseira e lateral.
- `database/rhema_testimonies.sql`: estrutura preparada para o mural público; depende de ativar o Supabase e configurar a Data API antes de receber relatos.
- `Manual_RHEMA_Unificado.md`, `PROGRESSO.md` e documentos Word: manuais e acompanhamento do projeto.

Os cartões em “Explore por categoria” têm estados sutis ao passar o mouse ou navegar com teclado e removem o deslocamento quando o navegador pede movimento reduzido. O rótulo “Histórias” no cabeçalho abre `sobre.html`.

## Como visualizar

Abra `index.html` no navegador. Algumas funções do carrinho e do catálogo usam JavaScript local.
O item “Histórias” leva à página `sobre.html`. O formulário do mural está preparado, mas permanece desativado até o projeto Supabase ser ativado e conectado; as etapas estão em `Manual_RHEMA_Unificado.md`.

## Coleção Crônicas da Fé

Cada um dos dez modelos tem imagens de frente, costas e lado nas pastas de cor preto, branco, cinza, verde militar/musgo e marrom dentro de `imagens/colecao-cronicas-da-fe/`. As frentes repetem o mesmo símbolo RHEMA no peito; cada estampa aparece nas costas e também é visível na vista lateral. O guia da coleção lista os arquivos e temas. São mockups preparados com ajuda do OpenAI Codex a partir das artes enviadas e da camiseta já cadastrada; ainda não são fotos de peças físicas. A seleção de cor não foi integrada ao catálogo do site.

## Créditos e transparência

Este projeto foi desenvolvido com ajuda do OpenAI Codex, assistente de inteligência artificial da OpenAI, em colaboração com a pessoa responsável pela RHEMA, que orienta e revisa o trabalho. O site também exibe este crédito em seus rodapés.
