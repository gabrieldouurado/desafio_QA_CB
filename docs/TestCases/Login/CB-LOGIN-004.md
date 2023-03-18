# CB-LOGIN-004 - O botão de "ENTRAR" deve ser desabilitado quanto o email não respeitar a padronização requerida.

## Objetivo
O objetivo desse teste é validar se o botão de "ENTRAR" está sendo desabilitado quando o email preenchido no formulário não está de acordo com a padronização requerida.

```
user@email.com
```

## Pré-condições
- Não possuir nenhuma sessão ativa no site

## Passos
1. Acessar a página de login.
> A página pode ser acessada por meio da url:
https://app.cocobambu.com/entrar

2. Preencher as informações de login
> Preencha preencher o campo de email com um email inválido (ex: **userteste.com**) e com uma senha qualquer com **mais de 6 caracteres**.


## Resultados esperados
O botão de "ENTRAR" deve permancer desabilitado e deve ser mostrada logo abaixo do campo de email uma mensagem semelhante a esta:
```
E-mail inválido.
```