# CB-LOGIN-002 - Não deve ser possível logar com um email inexistente

## Objetivo
O objetivo desse teste é validar se a plataforma está impedindo o login quando o email não existe no sistema.

## Pré-condições
- Não possuir nenhuma sessão ativa no site
- É necessário possuir um email que não exista no sistema.

## Passos
1. Acessar a página de login.
> A página pode ser acessada por meio da url:
https://app.cocobambu.com/entrar

2. Preencher as informações de login
> Preencha o formulário de login com as informações (email/senha), utilizando um email que não exista no sistema e uma senha qualquer.

3. Efetuar o login
> Com as credenciais do usuário preenchidas, clicar no botão de **Entrar**

## Resultados esperados
O usuário deve **permanecer na mesma página** e deve ser mostrada para ele uma mensagem semelhante a esta:
```
E-mail ou senha inválidos.
```