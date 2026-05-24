describe('RealBeans Shop Tests', () => {

  before(() => {
    cy.visit('https://r1037681-realbeans.myshopify.com/password')
    cy.get('input[type="password"]').type('yiadew')
    cy.contains('Enter').click()
    cy.wait(6000)
  })

  it('opens homepage', () => {
    cy.get('body').should('be.visible')
  })

  it('opens catalog page', () => {
    cy.visit('https://r1037681-realbeans.myshopify.com/collections/all')
    cy.wait(3000)
    cy.get('body').should('be.visible')
  })

  it('opens contact page', () => {
    cy.visit('https://r1037681-realbeans.myshopify.com/pages/contact')
    cy.wait(3000)
    cy.get('body').should('be.visible')
  })

})