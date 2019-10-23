
describe('Testar formulario de cadastro de usuário', function() {
  it('Checar se a pagina existe', function() {
    cy.visit('http://localhost:8000')
  })

  it('checar se os campos existem no formulario', function() {

       cy.contains('name')
       cy.contains('Address')
       cy.contains('Neighborhood')
       cy.contains('City')
       cy.contains('Country')
       cy.contains('email')
       cy.contains('Age')
       cy.contains('telephone')
       cy.get('input[type="Submit"]')
  })

  it('testar preenchimento dos campos do formulario e fazer o submit', function() {
    //
    cy.get('input[name="name"]').type('flavia')
    cy.get('input[name="Address"]').type('rua vicentina maria freitas 112 ')
    cy.get('input[name="Neighborhood"]').type('Vila Santa Rita')
    cy.get('input[name="City"]').type('Belo Horizonte')
    cy.get('input[name="Country"]').type('Brasil')
    cy.get('input[name="email"]').type('flavialj@hotmail.com')
    cy.get('input[name="Age"]').type('25')
    cy.get('input[name="telephone"]').type('33369545')
    cy.get('input[name="comments"]').type('Felicidade')
    cy.get('input[type="Submit"]').click()
  })

  it('conferindo informações', function() {

    cy.contains('name:flavia')
    cy.contains('Address:rua vicentina maria freitas 112')
    cy.contains('Neighborhood:Vila Santa Rita')
    cy.contains('City:Belo horizonte')
    cy.contains('Country:Brasil')
    cy.contains('email:flavialj@hotmail.com')
    cy.contains('Age:25')
    cy.contains('telephone:33369545')
    cy.contains('Submit Form')

  })

  it('teste dos campos obrigatórios', function() {

    cy.contains('name:flavia').should('not exist')
    cy.contains('Address:rua vicentina maria freitas 112').should('not exist')
    cy.contains('Neighborhood:Vila Santa Rita').should('not exist')
    cy.contains('City:Belo horizonte').should('not exist')
    cy.contains('Country:Brasil').should('not exist')
    cy.contains('email:flavialj@hotmail.com').should('not exist')
    cy.contains('Age:25').should('not exist')
    cy.contains('telephone:33369545').should('not exist')
    cy.contains('Submit Form').should('not exist')
})
})
