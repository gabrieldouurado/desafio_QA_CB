# CB-SIGNUP-002 - Não deve ser possível cadastrar um novo usuário com um email já existente no sistema.

## Objetivo
Validar se **não** é possível realizar o cadastro de um novo usuário quanto o email informado já estiver em uso.

## Pré-condições
- Não possuir nenhuma sessão ativa no site
- É necessário possuir um usuário de testes cadastrado no sistema com email e senha conhecidos.

Caso esse usuário não exista, seguir os procedimentos do caso de teste CB-SIGNUP-001 par a criação do mesmo.

## Passos
1. Acessar a página de login.
> A página pode ser acessada por meio da url:
https://app.cocobambu.com/entrar

2. Acessar o formulário de cadastro
> Clicar no botão "**Cadastre-se**" e aguardar o formulário ser aberto.

3. Preencher o dados do formulário de forma válida
> Preencher o campo de email com um email que já esteja cadastrado no sistema

## Resultados esperados
O botão de "CADASTRAR" deve estar desabilitado e deve ser mostrada uma mensagem semelhante a esta próxima ao campo de email:

```
E-mail já cadastrado.
```