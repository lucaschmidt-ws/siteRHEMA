# RHEMA — Fase 10.1: planejamento da área de conta

**Status:** concluída como planejamento e prévia visual. Login e cadastro reais continuam desativados até a preparação do back-end na Fase 11.

## O que foi preparado

- Página `conta.html` acessível pelo menu como **Minha conta · prévia**.
- Prévia identifica claramente que não existe autenticação ativa e pede para não informar dados reais.
- Campos de e-mail e senha estão desativados; nenhum formulário é enviado e nenhum dado de conta é armazenado no navegador.
- Fluxo futuro descrito: criar conta, confirmar e-mail, entrar/sair e recuperar acesso.
- Página marcada para não aparecer em mecanismos de busca enquanto for apenas uma prévia.
- Ajustes responsivos compartilhados para telas móveis: áreas seguras do iOS, alvos de toque maiores, menus acessíveis ao toque e campos com tamanho de fonte que evita zoom automático no Safari.

## Dados mínimos previstos

| Dado | Finalidade | Momento |
| --- | --- | --- |
| E-mail | Identificar a conta, confirmar o endereço e recuperar acesso | Cadastro |
| Senha | Autenticar a pessoa | Processada pelo provedor de autenticação; nunca armazenada em texto puro pelo site |
| Nome de exibição | Personalizar a conta, se necessário | Opcional e somente quando houver finalidade definida |
| Endereço e telefone | Entregar pedidos e tratar solicitações relacionadas à compra | Checkout, não cadastro inicial |

Antes da ativação, a política de privacidade deve ser ajustada ao provedor escolhido e ao tratamento realmente implementado. Não coletar esses dados pela prévia.

## Jornada planejada

1. A pessoa escolhe criar conta e informa somente e-mail e senha.
2. O provedor de autenticação envia a confirmação do endereço.
3. Após confirmar, a pessoa entra e pode encerrar a sessão com clareza.
4. Se esquecer a senha, solicita recuperação pelo e-mail cadastrado.
5. Uma área de perfil e histórico de pedidos só será acrescentada quando o back-end e a integração de pedidos estiverem prontos.

## Base para um aplicativo futuro

O site e um futuro aplicativo devem usar a mesma API e o mesmo provedor de autenticação no servidor. Cada cliente recebe apenas os recursos autorizados para a sessão da pessoa. O aplicativo não deve manter uma cópia paralela de usuários, aceitar senhas localmente como validação, nem receber segredos administrativos.

Para a Fase 11, ainda será necessário escolher/configurar o back-end, definir regras de acesso, revisar privacidade, proteger segredos fora do código público e validar cadastro, recuperação e encerramento de sessão antes de habilitar a autenticação.

## Arquivos desta preparação

- `conta.html` — prévia da futura área de conta.
- `css/styles.css` — layout da prévia e melhorias responsivas compartilhadas.
- Páginas principais do site — área segura de viewport e acesso à prévia pelo menu.
