
describe('Test User Registration Form', function() {
  it('Check if page exists', function() {
    cy.visit('http://localhost:8000')
  })

  it('check if the fields exist in the form', function() {

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

  it('test form field completion and submit', function() {
    //
    cy.get('input[name="name"]').type('flavia')
    cy.get('input[name="Address"]').type('rua vicentina maria freitas 112 ')
    cy.get('input[name="Neighborhood"]').type('Vila Santa Rita')
    cy.get('input[name="City"]').type('Belo Horizonte')
    cy.get('input[name="Country"]').type('Brasil')
    cy.get('input[name="email"]').type('flavialj@hotmail.com')
    cy.get('input[name="Age"]').type('25')
    cy.get('input[name="telephone"]').type('33369545')
    cy.get('#comments').type('Felicidade')
    cy.get('input[type="Submit"]').click()
  })

  it('checking information', function() {

    cy.contains('flavia')
    cy.contains('rua vicentina maria freitas 112')
    cy.contains('Belo Horizonte')
    cy.contains('Brasil')
    cy.contains('flavialj@hotmail.com')
    cy.contains('25')
    cy.contains('33369545')
    cy.contains('Felicidade')
  })
})
