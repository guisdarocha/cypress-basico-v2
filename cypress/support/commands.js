Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Guilherme')
    cy.get('#lastName').type('da Rocha')
    cy.get('#email').type('guis.darocha@gmail.com')
    cy.get('#open-text-area').type('O começo é sempre dificil')
    cy.contains('button', 'Enviar').click()
})