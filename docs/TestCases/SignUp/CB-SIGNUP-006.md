# CB-SIGNUP-006 - Não deve ser possível cadastrar um usuário quando as senhas forem semelhante ao email

## Objetivo
Validar se o botão de cadastrar é desabilitado quando o email não segue a padronização requerida

## Pré-condições
- Não possuir nenhuma sessão ativa no site
- É necessário possuir um email que não esteja cadastrado na base de dados

## Passos
1. Acessar a página de login.
> A página pode ser acessada por meio da url:
https://app.cocobambu.com/entrar

2. Acessar o formulário de cadastro
> Clicar no botão "**Cadastre-se**" e aguardar o formulário ser aberto.

3. Preencher o dados do formulário de forma válida
- O nome deve estar preenchido com pelo menos **2 caracteres**
- Selecionar um estado da lista
- As políticas de privacidade devem ser aceitas


4. Preencher os campos de email e senha com valores semelhantes
> Preencher o email com algo semelhante a **joao.silva@email.com** e a senha **@silvaJS1**

## Resultados esperados
O botão de "CADASTRAR" deve estar desabilitado e abaixo do campo de "senha" deve aparecer uma mensagem semelhante a esta:
```
Sua senha é muito similar aos seus dados pessoais.
```