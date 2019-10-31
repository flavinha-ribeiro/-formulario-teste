describe('Testar formulario de cadastro de usuário', function() {
  it('Checar se a pagina existe', function() {
    cy.visit('http://localhost:8000')
  })

  it('testando campos required', function() {
    cy.get('input[name="name"]')
    cy.get('input[name="Address"]').type('rua vicentina maria freitas 112 ')
    cy.get('input[name="Neighborhood"]').type('Vila Santa Rita')
    cy.get('input[name="City"]').type('Belo Horizonte')
    cy.get('input[name="Country"]').type('Brasil')
    cy.get('input[name="email"]').type('flavialj@hotmail.com')
    cy.get('input[name="Age"]').type('25')
    cy.get('input[name="telephone"]').type('33369545')
    cy.get('#comments')
    cy.get('input[type="Submit"]').click()
    cy.get('input[name="telephone"]').type('33369545')
  })
})
