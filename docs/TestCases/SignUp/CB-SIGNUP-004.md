# CB-SIGNUP-004 - O botao de "CADASTRAR" deve ficar desabilitado quando as senhas não estiverem identicas

## Objetivo
Validar se o botão de cadastrar é desabilitado quando as senhas não estiverem identicas

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
- O email deve possuir a forma **user@email.com**
- Selecionar um estado da lista
- As políticas de privacidade devem ser aceitas


4. Preencher os campos de senha e confirmação de senha
> Preencher os campos com valores direrentes. Ambos os campos precisam possuir mais **6 ou mais** caracteres.

## Resultados esperados
O botão de "CADASTRAR" deve estar desabilitado e abaixo do campo de "confirmação de senha" deve aparecer uma mensagem semelhante a esta:
```
As senhas inseridas são diferentes.
```