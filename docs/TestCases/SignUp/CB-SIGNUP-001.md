# CB-SIGNUP-001 - Deve ser possível cadastrar um novo usuário no sistema

## Objetivo
Validar se é possível realizar o cadastro de um novo usuário no sistema.

## Pré-condições
- Não possuir nenhuma sessão ativa no site
- Possuir um email que ainda não tenha sido cadastrado no sistema.

## Passos
1. Acessar a página de login.
> A página pode ser acessada por meio da url:
https://app.cocobambu.com/entrar

2. Acessar o formulário de cadastro
> Clicar no botão "**Cadastre-se**" e aguardar o formulário ser aberto.

3. Preencher o dados do formulário de forma válida
- O nome deve estar preenchido com pelo menos **2 caracteres**
- O email deve possuir a forma **user@email.com**
- A senha deve possuir **6 ou mais** caracteres
- A confirmação de senha deve estar identica a senha preenchida
- Selecionar um estado da lista
- As políticas de privacidade devem ser aceitas

4. Efetuar cadastro
> Com as informações do novo usuário preenchidas, clicar no botão de **CADASTRAR**. Será enviado um código de confirmação para o email indicado e o usuário será redirecionado para a página de confirmação

5. Fornecer o código de confirmação recebido no email indicado
> Digitar o código de 6 caracteres recebido via email

## Resultados esperados
O cadastro do usuário deve ser finalizado e deve ser aberta uma sessão para ele.