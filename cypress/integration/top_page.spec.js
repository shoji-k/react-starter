const one = 'X'
const two = 'O'

describe('Access Top page', () => {
  it('can get the title', () => {
    cy.visit('/')
    cy.contains('Next player: ' + one)
  })

  it('can switch a player', () => {
    cy.get('[data-cy=cell5]').click().contains(one)
    cy.contains('Next player: ' + two)
  })

  it('can win by player X', () => {
    cy.get('[data-cy=cell1]').click().contains(two)
    cy.contains('Next player: ' + one)
    cy.get('[data-cy=cell3]').click().contains(one)
    cy.contains('Next player: ' + two)
    cy.get('[data-cy=cell9]').click().contains(two)
    cy.contains('Next player: ' + one)
    cy.get('[data-cy=cell7]').click().contains(one)
    cy.contains('Winner: ' + one)
  })
})
