# Progresso do Projeto RHEMA

**Última atualização:** 29/10/2026

**Nova coleção — Crônicas da Fé:** dez modelos com mockups de frente, costas e lado nas cores preto, branco, cinza, verde militar/musgo e marrom. As frentes mantêm o símbolo RHEMA no peito e as estampas ficam nas costas, também parcialmente visíveis na vista lateral. Os arquivos e temas estão descritos em `imagens/colecao-cronicas-da-fe/LEIA-ME.md`. As imagens são mockups, ainda não fotos de peças físicas; as cores ainda não foram integradas como opção no catálogo. Os produtos não foram cadastrados porque faltam preços, estoque e dados comerciais.

**Fase 9:** microetapas 9.1–9.9 concluídas. O site exibe e compartilha o devocional, registra a sequência de leitura, mostra as passagens dos seis produtos, salva favoritos e oferece um mural de oração privado no navegador.

**Correção desta revisão:** removido o hero duplicado; corrigidos o link interno quebrado, o espaçamento do rodapé e a responsividade do hero e dos benefícios. A vitrine e o catálogo agora mostram fotos reais associadas aos produtos. Os atalhos de categoria filtram o catálogo, a busca ignora acentos, os botões flutuantes usam ícones lineares e a faixa “Streetwear com identidade” foi incluída.

**Categorias da homepage:** adicionados estados sutis de hover e foco por teclado aos cinco cartões: elevação leve, borda dourada e filete lateral. A preferência por movimento reduzido desativa o deslocamento.

**Página Sobre e mural:** criada `sobre.html` como página separada, com o testemunho do fundador, a apresentação do mural comunitário e um formulário que fica desativado até a conexão do banco online. O projeto Supabase conectado está com status `INACTIVE`; a lista de tabelas não pôde ser consultada e a publicação global ainda não está ativa. O SQL seguro para revisão/publicação manual está em `database/rhema_testimonies.sql`.

**Ajuste complementar do rodapé:** incluídos ícones de Instagram, WhatsApp e e-mail, além das bandeiras Visa, Mastercard, Elo e American Express. O link do WhatsApp usa o número já existente no site. Instagram e e-mail ficam sem link até serem informados; as bandeiras são previstas para uma futura integração de pagamento.

**Planejamento futuro:** implementar criação de conta real somente depois de estruturar o banco de dados e o back-end. A autenticação demonstrativa descrita no manual não representa cadastro real.

## Estado atual

- [x] 9.1 — seção do devocional e ações acessíveis na homepage.
- [x] 9.2 — lista com 66 devocionais, abrangendo Gênesis a Apocalipse; referências, paráfrases, reflexões e orações.
- [x] 9.3 — escolher e exibir o devocional do dia.
- [x] 9.4 — registrar a leitura diária e a sequência no LocalStorage.
- [x] 9.5 — compartilhar o devocional pelo WhatsApp ou copiá-lo.
- [x] 9.6 — exibir paráfrase bíblica e significado para os seis produtos.
- [x] 9.7 — favoritar e desfavoritar os seis produtos; preferências salvas no LocalStorage.
- [x] 9.8 — mural pessoal: salvar, consultar e excluir até 100 pedidos de até 500 caracteres, somente neste navegador.
- [x] 9.9 — revisão funcional e visual em desktop e celular; JavaScript sem exceções.

**Registro da revisão 9.9:** Chrome verificou as quatro páginas em 390 px sem rolagem horizontal, os seis produtos e suas fotos, o devocional e a sequência diária, o compartilhamento, favoritos, mural, armazenamento, exclusão e entradas vazias/inválidas. As capturas do mural e dos favoritos foram revisadas visualmente. O teste isolado não teve acesso de rede às fontes Google; isso gerou mensagens de falha de DNS para Manrope/Inter, enquanto o site usou a fonte alternativa. Não houve exceções de JavaScript.

As microetapas 8.1, 8.2, 8.3 e 8.5 a 8.10 estão implementadas. A etapa 8.7 foi concluída com três imagens editoriais novas e conferência responsiva; a etapa 8.4 permanece parcial por depender da arte final do hero. A etapa 8.11 e a revisão visual completa da homepage continuam pendentes.

- [x] 8.1 — paleta retificada nos tokens existentes.
- [x] 8.2 — Manrope nos títulos e Inter nos textos das quatro páginas.
- [x] 8.3 — cabeçalho, navegação, busca, sacola e contadores no site.
- [x] 8.9 — galeria dinâmica na página de produto, com fotos específicas por produto.
- [x] 8.8 — ícones flutuantes sem emojis e contagem acessível no carrinho.
- [x] Faixa “Streetwear com identidade” adicionada entre os benefícios e a vitrine.
- [x] Fotos reais associadas aos cards da homepage e do catálogo.
- [x] Os cinco atalhos de categoria filtram os produtos; a Jaqueta está marcada como Lifestyle.
- [x] Os cartões de categoria têm animações sutis e foco visível, com respeito à preferência por movimento reduzido.
- [x] Busca aceita termos sem acento, como “bone” para encontrar “Boné”.
- [x] Correções estruturais: hero duplicado removido, link interno consertado e rodapé ajustado.
- [x] Item “Histórias” abre uma página separada com o testemunho do fundador e a interface responsiva do mural em `sobre.html`.
- [x] Script SQL do mural preparado com RLS: visitantes só poderão ler relatos aprovados e enviar novos relatos como pendentes depois da ativação do banco.
- [ ] Ativar o projeto Supabase, executar `database/rhema_testimonies.sql`, expor a tabela na Data API e configurar a chave pública em `js/sobre-config.js`; testar envio e aprovação antes de liberar o mural.
- [x] Verificação de sintaxe do `js/main.js` e existência dos caminhos cadastrados no catálogo.
- [ ] Conferência visual das galerias em desktop e celular; fazer no navegador local.

## O que mudou na 8.9

- `produto.html` agora fornece um espaço para a foto principal e um contêiner vazio para as miniaturas.
- `js/main.js` guarda as imagens junto aos dados dos produtos, escolhe as fotos conforme `produto.html?id=...` e cria as miniaturas automaticamente.
- As imagens usam os arquivos já presentes em `imagens/`. Produtos com uma foto exibem apenas a foto principal; os botões de miniatura aparecem quando há duas ou mais fotos.
- A foto principal agora acompanha a proporção natural do arquivo; somente as miniaturas permanecem quadradas.
- O erro de declaração duplicada da galeria foi removido.
- O manual unificado agora explica como incluir outra foto: copiar o arquivo para a pasta correta e adicionar um item `{ src, alt }` à lista `imagens` do produto.

## Arquivos atualizados na implementação 8.9 e nesta revisão

- `index.html`
- `produtos.html`
- `carrinho.html`
- `produto.html`
- `js/main.js`
- `css/styles.css`
- `Manual_RHEMA_Unificado.md`
- `PROGRESSO.md`

As imagens fornecidas estão organizadas dentro de `imagens/` e não foram renomeadas. Pastas com espaço aparecem codificadas como `%20` nos caminhos web.

## Fase 8 — Design luxo e clean

| Microetapa | Estado | Próximo ponto |
|---|---|---|
| 8.1 — Paleta e tokens | Implementada | Revisão visual no navegador |
| 8.2 — Tipografia | Implementada | Revisão visual no navegador |
| 8.3 — Cabeçalho e ações | Implementada | Revisão visual no navegador |
| 8.4 — Hero de campanha | Parcial | Falta arte de campanha aprovada; estrutura responsiva está no site |
| 8.5 — Faixa de benefícios | Implementada | Confirmar as promessas e revisar visualmente |
| 8.6 — Vitrine com carrossel | Implementada | Conferir fotos e navegação no navegador |
| 8.7 — Seções editoriais e categorias | Implementada | Fotos editoriais incluídas; símbolo original preservado no quadro de história |
| 8.8 — Estados e interações | Implementada | Revisão visual dos controles no navegador |
| 8.9 — Galeria do produto | Implementada | Revisão visual no navegador |
| 8.10 — Rodapé e redução de movimento | Implementada | Formulário é demonstrativo; revisar visualmente |
| 8.11 — Revisão da homepage | Pendente | Fazer depois das outras etapas |

## Pontos a acompanhar

- As fotos da camiseta, calça, moletom, boné e jaqueta agora estão ligadas aos IDs correspondentes no catálogo. Confirme se cada arquivo representa a versão comercial que deseja mostrar.
- O catálogo não tem opção de cor; se as miniaturas mostrarem cores diferentes, inclua apenas variantes que realmente estarão disponíveis ou implemente uma seleção de cor em outra etapa.
- Os produtos com uma foto cadastrada precisam de novas vistas antes de terem miniaturas.
- As imagens dos cards usam a primeira foto cadastrada em `catalogo` no `js/main.js`; confira se cada foto representa a versão comercial que será vendida.
- A categoria Lifestyle está associada ao produto Jaqueta por ser a opção disponível no catálogo atual; revise essa classificação quando a organização comercial estiver definida.
- O catálogo ainda repete nome, preço e ID entre `produtos.html` e `js/main.js`; mantenha esses dados sincronizados.
- A arte final do hero da etapa 8.4 ainda não foi fornecida.
- As imagens editoriais de 8.7 estão em `imagens/editorial/`: editorial, lifestyle e textura para o símbolo original.

## Histórico anterior

As Fases 1 a 7 e as correções R1 continuam registradas nos documentos anteriores do projeto. Os relatos de testes anteriores são históricos; não foram repetidos nesta atualização.

## Próximo passo

A Fase 9 está concluída. O próximo trabalho de desenvolvimento é a Fase 10; o cadastro real deve aguardar o banco de dados e o back-end da Fase 11. Na Fase 8, seguem pendentes a arte final do hero e a revisão completa da homepage. O mural de testemunhos só poderá receber e mostrar relatos entre visitantes quando o Supabase estiver ativo e a tabela for exposta à Data API.
