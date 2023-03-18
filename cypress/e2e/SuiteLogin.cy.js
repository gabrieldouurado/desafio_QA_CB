import userMockData from '../fixtures/user-mock-data.json'

describe('Suite de testes de Login', () => {
  it('CB-LOGIN-001 - Deve ser possível acessar uma conta com email e senha válidos', () => {
    const { validUser } = userMockData

    cy.visit('https://app.cocobambu.com/entrar')
    cy.get('#username > .native-input').type(validUser.email)
    cy.get(':nth-child(3) > .ng-pristine > .native-input').type(validUser.password)
    cy.get('.buttons-container > :nth-child(1)').click()
    cy.get('.is-primary').should('exist')
  })

  it('CB-LOGIN-002 - Não deve ser possível logar com um email inexistente', () => {
    const { validEmail, validPassword } = userMockData
    cy.visit('https://app.cocobambu.com/entrar')
    cy.get('#username > .native-input').type(validEmail)
    cy.get(':nth-child(3) > .ng-pristine > .native-input').type(validPassword)
    cy.get('.buttons-container > :nth-child(1)').click()
    cy.get('.server-error-container > .ng-tns-c115-0').contains('E-mail ou senha inválidos.')
  })

  it('CB-LOGIN-003 - Não deve ser possível logar quanto a senha estiver incorreta', () => {
    const { validUser, validPassword } = userMockData
    cy.visit('https://app.cocobambu.com/entrar')
    cy.get('#username > .native-input').type(validUser.email)
    cy.get(':nth-child(3) > .ng-pristine > .native-input').type(validPassword)
    cy.get('.buttons-container > :nth-child(1)').click()
    cy.get('.server-error-container > .ng-tns-c115-0').contains('E-mail ou senha inválidos.')
  })

  it('CB-LOGIN-004 - O botão de "ENTRAR" deve ser desabilitado quanto o email não respeitar a padronização requerida', () => {
    const { invalidEmail, validPassword } = userMockData
    cy.visit('https://app.cocobambu.com/entrar')
    cy.get('#username > .native-input').type(invalidEmail)
    cy.get('.error-message').contains(' E-mail inválido. ')
    cy.get(':nth-child(3) > .ng-pristine > .native-input').type(validPassword)
    cy.get('.disabled > .ng-tns-c115-0').should('exist')
  })

  it('CB-LOGIN-005 - O botão de "ENTRAR" deve ser desabilitado quanto a senha possuir menos de 6 caracteres', () => {
    const { validEmail, invalidPassword } = userMockData
    cy.visit('https://app.cocobambu.com/entrar')
    cy.get('#username > .native-input').type(validEmail)
    cy.get(':nth-child(3) > .ng-pristine > .native-input').type(invalidPassword)
    cy.get('.error-message').contains(' Senha deve conter no mínimo 6 caracteres. ')
    cy.get('.disabled > .ng-tns-c115-0').should('exist')
  })

  it('CB-LOGIN-006 - O botão de "ENTRAR" deve ser desabilitado quanto a senha não for preenchida', () => {
    const { validEmail } = userMockData

    cy.visit('https://app.cocobambu.com/entrar')
    cy.get('#username > .native-input').type(validEmail)
    cy.get('.disabled > .ng-tns-c115-0').should('exist')
  })
})
