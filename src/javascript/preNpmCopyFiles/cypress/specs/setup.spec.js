describe('Verify project setup', () => {
 
  it('Verify Cypress is configured', () => {
    expect(true).to.equal(true)
  })

  it('Successfully routes to home page', () => {
    cy.visit('/')
  })

})