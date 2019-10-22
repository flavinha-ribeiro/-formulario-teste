
describe('Testar formulario de cadastro de usuário', function() {
  it('Checar se a pagina existe', function() {
    cy.visit('http://localhost:8000')
  })

  it('checar se os campos existem no formulario', function() {
    //
    cy.get("input[name='name']")
    cy.get("input[name='email']")
    cy.get("input[name='Address']")
    cy.get("input[name='City']")
    cy.get("input[name='Country']")
    cy.get("input[name='Age']")
    cy.get("input[name='birth']")
    cy.get("input[name='telephone']")


  })

  it('testar preenchimento dos campos do formulario e fazer o submit', function() {

  cy.get('form').submit()   // Submit a form
  m
  })

  it('teste dos campos obrigatórios', function() {

  })
})
