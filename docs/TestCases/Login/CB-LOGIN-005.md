# CB-LOGIN-005 - O botão de "ENTRAR" deve ser desabilitado quanto a senha possuir menos de 6 caracteres

## Objetivo
O objetivo desse teste é validar se o botão de "ENTRAR" está sendo desabilitado quando a senha possuir menos de 6 caracteres

## Pré-condições
- Não possuir nenhuma sessão ativa no site

## Passos
1. Acessar a página de login.
> A página pode ser acessada por meio da url:
https://app.cocobambu.com/entrar

2. Preencher as informações de login
> Preencha preencher o campo de email com um email válido (ex: **userteste@email.com**) e com uma senha qualquer com **menos de 6 caracteres**.


## Resultados esperados
O botão de "ENTRAR" deve permancer desabilitado e deve ser mostrada logo abaixo do campo de senha uma mensagem semelhante a esta:
```
Senha deve conter no mínimo 6 caracteres.
```