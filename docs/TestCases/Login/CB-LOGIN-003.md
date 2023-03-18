# CB-LOGIN-003 - Não deve ser possível logar quanto a senha estiver incorreta

## Objetivo
O objetivo desse teste é validar se a plataforma está impedindo o login quando o email é válido, porém a senha não bate com a senha cadastrada no sistema.

## Pré-condições
- Não possuir nenhuma sessão ativa no site
- É necessário possuir um usuário de testes cadastrado no sistema com email e senha conhecidos.

Caso esse usuário não exista, seguir os procedimentos do caso de teste CB-SIGNUP-001 par a criação do mesmo.

## Passos
1. Acessar a página de login.
> A página pode ser acessada por meio da url:
https://app.cocobambu.com/entrar

2. Preencher as informações de login
> Preencha o formulário de login com as informações (email/senha), utilizando um email válido e uma senha **diferente** da senha cadastrada.

3. Efetuar o login
> Com as credenciais do usuário preenchidas, clicar no botão de **Entrar**

## Resultados esperados
O usuário deve **permanecer na mesma página** e deve ser mostrada para ele uma mensagem semelhante a esta:
```
E-mail ou senha inválidos.
```