# CB-LOGIN-006 - O botão de "ENTRAR" deve ser desabilitado quanto a senha não for preenchida

## Objetivo
O objetivo desse teste é validar se o botão de "ENTRAR" está sendo desabilitado quando a senha não é preenchida

## Pré-condições
- Não possuir nenhuma sessão ativa no site

## Passos
1. Acessar a página de login.
> A página pode ser acessada por meio da url:
https://app.cocobambu.com/entrar

2. Preencher as informações de login
> Preencha preencher o campo de email com um email válido (ex: **userteste@email.com**) e deixar o campo de senha **vazio**


## Resultados esperados
O botão de "ENTRAR" deve permancer desabilitado e deve ser mostrada logo abaixo do campo de senha uma mensagem semelhante a esta:
```
Senha é obrigatória.
```