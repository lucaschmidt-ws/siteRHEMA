# Coleção Crônicas da Fé

Conjunto visual de dez modelos da coleção Crônicas da Fé, cada um com imagens de frente, costas e lado. A pasta principal contém as camisetas pretas originais. As subpastas em `cores/` contêm as variações em branco, cinza, verde militar/musgo e marrom. Em cada cor, as dez frentes usam o mesmo símbolo RHEMA no peito, e cada estampa aparece nas costas; a vista lateral mostra o caimento e parte da arte.

As imagens foram criadas com ajuda do OpenAI Codex a partir das artes enviadas para o projeto. São mockups de apresentação, não fotos de peças físicas nem arquivos finais de produção. Na arte do Jardim do Éden, as figuras aparecem vestidas com túnicas.

## Variações de cor

Cada pasta contém `00-frente-comum.png` como referência da cor e dez conjuntos com os sufixos `-frente.png`, `-costas.png` e `-lado.png`:

- `cores/branco/` — branco suave.
- `cores/cinza/` — cinza mescla.
- `cores/verde-militar-musgo/` — verde militar/musgo.
- `cores/marrom/` — marrom chocolate.

As variações são recursos visuais para aprovação da coleção. Ainda não há seletor de cor no catálogo do site; preços, estoque e dados comerciais também precisam ser definidos antes do cadastro dos produtos.

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

Para cadastrar os modelos no site, associe os três caminhos correspondentes a cada produto em `js/main.js`. Adicione os dados comerciais de cada camiseta antes de publicar os produtos.
