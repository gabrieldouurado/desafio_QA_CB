# CB-LOGIN-001 - Deve ser possível acessar uma conta com email e senha válidos

## Objetivo
O objetivo desse teste é validar se o usuário está logando corretamente quando as credenciais são váldias.

## Pré-condições
- Não possuir nenhuma sessão ativa no site
- É necessário possuir um usuário de testes cadastrado no sistema com email e senha conhecidos.

Caso esse usuário não exista, seguir os procedimentos do caso de teste CB-SIGNUP-001 par a criação do mesmo.

## Passos
1. Acessar a página de login.
> A página pode ser acessada por meio da url:
https://app.cocobambu.com/entrar

2. Preencher as informações de login
> Preencha o formulário de login com as informações (email/senha) do usuário de testes

3. Efetuar o login
> Com as credenciais do usuário preenchidas, clicar no botão de **Entrar**

## Resultados esperados
Após efeturar o login, a sessão deve ser validada e o usuário deve ser autenticado/autorizado e ter acesso aos menus protegidos por senha.