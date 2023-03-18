# CB-SIGNUP-003 - O botão de "CADASTRAR" deve ficar desabilitado quando o usuário não aceitar os termos

## Objetivo
Validar se o botão de cadastrar é desabilitado quando os termos e política **não** são aceitos

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
- A senha deve possuir **6 ou mais** caracteres
- A confirmação de senha deve estar identica a senha preenchida
- Selecionar um estado da lista

4. Não aceitar os termos e políticas de privacidade
> Manter desmarcada a checkbox de termos e políticas de privacidade.

## Resultados esperados
O botão de "CADASTRAR" deve estar desabilitado.