describe('Access Top page', () => {
  it('can get title', () => {
    cy.visit('/')

    cy.contains('Next player: X')
  })
})
