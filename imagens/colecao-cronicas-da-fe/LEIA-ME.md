# Coleção Crônicas da Fé

Conjunto visual de dez modelos da coleção Crônicas da Fé, cada um com imagens de frente, costas e lado. A pasta principal contém as camisetas pretas originais. As subpastas em `cores/` contêm as variações em branco, cinza, verde militar/musgo e marrom. Em cada cor, as dez frentes usam o mesmo símbolo RHEMA no peito, e cada estampa aparece nas costas; a vista lateral mostra o caimento e parte da arte. A pasta `pranchas-de-apresentacao/` reúne 50 pranchas no formato da referência visual: uma por estampa e por cor.

As imagens foram criadas com ajuda do OpenAI Codex a partir das artes enviadas para o projeto. São mockups de apresentação, não fotos de peças físicas nem arquivos finais de produção. Na arte do Jardim do Éden, as figuras aparecem vestidas com túnicas.

## Variações de cor

Cada pasta contém `00-frente-comum.png` como referência da cor e dez conjuntos com os sufixos `-frente.png`, `-costas.png` e `-lado.png`:

- `cores/branco/` — branco suave.
- `cores/cinza/` — cinza mescla.
- `cores/verde-militar-musgo/` — verde militar/musgo.
- `cores/marrom/` — marrom chocolate.

As variações visuais estão integradas como opções de cor na página dos produtos da coleção. O preço cadastrado é R$ 109,90 por modelo, igual ao da camiseta atual, e os tamanhos são P, M, G e GG. O estoque inicial de todos os tamanhos desses modelos está em zero; confirme e atualize cada saldo em `estoquePorTamanho` no `js/main.js` antes de oferecer as peças. O saldo é compartilhado entre cores e ainda não sincroniza pedidos entre clientes.

As pranchas combinam vistas grandes de frente e costas, cinco recortes de detalhes e quatro vistas menores na parte inferior. Elas são mockups editoriais; recortes de tecido, gola e costura são ilustrativos e não confirmam composição ou especificações de fabricação. Consulte `pranchas-de-apresentacao/LEIA-ME.md` para encontrar os 50 arquivos.

| Estampa | Frente | Costas | Lado |
|---|---|---|---|
| Jardim do Éden | `01-jardim-do-eden-frente.png` | `01-jardim-do-eden-costas.png` | `01-jardim-do-eden-lado.png` |
| Panorama bíblico e jornada de fé | `02-jornada-da-fe-frente.png` | `02-jornada-da-fe-costas.png` | `02-jornada-da-fe-lado.png` |
| Jonas e o grande peixe | `03-jonas-e-o-grande-peixe-frente.png` | `03-jonas-e-o-grande-peixe-costas.png` | `03-jonas-e-o-grande-peixe-lado.png` |
| Jó | `04-jo-frente.png` | `04-jo-costas.png` | `04-jo-lado.png` |
| Sansão — Juízes 13–16 | `05-sansao-frente.png` | `05-sansao-costas.png` | `05-sansao-lado.png` |
| Leão RHEMA — 2 Timóteo 1:7 | `06-leao-rhema-frente.png` | `06-leao-rhema-costas.png` | `06-leao-rhema-lado.png` |
| “Não temas, porque eu sou contigo” — Isaías 41:10 | `07-nao-temas-frente.png` | `07-nao-temas-costas.png` | `07-nao-temas-lado.png` |
| “Deus amou o mundo” — João 3:16 | `08-deus-amou-o-mundo-frente.png` | `08-deus-amou-o-mundo-costas.png` | `08-deus-amou-o-mundo-lado.png` |
| “Tudo contribui para o bem” — Romanos 8:28 | `09-tudo-contribui-para-o-bem-frente.png` | `09-tudo-contribui-para-o-bem-costas.png` | `09-tudo-contribui-para-o-bem-lado.png` |
| “Constância em todo processo” — Gálatas 6:9 | `10-constancia-frente.png` | `10-constancia-costas.png` | `10-constancia-lado.png` |

## Uso no site

Os dez modelos aparecem na vitrine inicial e na categoria Camisetas, com IDs 7 a 16. Em cada página de produto, o seletor de cor troca a prancha e as vistas de frente, costas e lado. O primeiro quadro é a prancha de apresentação; os três seguintes são as imagens individuais. Clique na imagem principal para ampliá-la e use as setas do visualizador para navegar. O zoom também está disponível nos cartões de produto da homepage e do catálogo.

O estoque da coleção começa em zero. Os saldos são definidos em `estoquePorTamanho` de cada produto em `js/main.js`; por exemplo, use `{ P: 2, M: 1, G: 0, GG: 0 }` para registrar peças disponíveis por tamanho. Atualize esses números quando o estoque mudar. O site marca o saldo zero como esgotado e mostra uma faixa translúcida na imagem quando restam de 1 a 5 unidades.

Os nomes, textos e referências dos dez modelos ficam em `modelosColecaoFe` em `js/main.js`. As cores ficam em `coresColecaoFe`, e os caminhos dos quatro arquivos por cor são gerados a partir do identificador do modelo e da cor. Ao acrescentar um modelo, use um ID único, uma pasta/slug no mesmo padrão e crie os arquivos correspondentes para as cinco cores, incluindo a prancha daquela combinação. O preço atual é definido junto à criação dos produtos em `produtosColecaoFe`.

As imagens são mockups para apresentação. Antes de comercializar, confirme cores, estoque, tecido, medidas e processo de impressão com a produção; as imagens de detalhes não certificam especificações físicas.
