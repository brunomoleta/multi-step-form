/// <reference types="cypress" />

describe('Add-ons form section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    // personal info step
    cy.completePersonalInfoStep()
    // arcade plan, montly subscription
    cy.completePlanStep()

    cy.get('[id="addOns"]').as('addOns')
    cy.get('[id="formSteps"]').as('formSteps')
    cy.get('[id="nextButton"]').as('nextButton')
    cy.get('[id="onlineServiceInput"]').as('onlineServiceInput')
    cy.get('[id="largerStorageInput"]').as('largerStorageInput')
    cy.get('[id="customProfileInput"]').as('customProfileInput')
  })

  it('no options should be selected, should be able to proceed', () => {
    cy.get('@onlineServiceInput').find('input').should('not.be.checked')
    cy.get('@largerStorageInput').find('input').should('not.be.checked')
    cy.get('@customProfileInput').find('input').should('not.be.checked')

    cy.get('@formSteps')
      .find('[data-active="true"]')
      .should('contain', 'Add-Ons')

    cy.get('@nextButton').click()
    cy.get('[id="confirmation"]').should('exist')
    cy.get('@addOns').should('not.exist')
  })

  it('should be able to select all options and proceed', () => {
    cy.get('@onlineServiceInput').find('input').click()
    cy.get('@onlineServiceInput').find('input').should('be.checked')

    cy.get('@largerStorageInput').find('input').click()
    cy.get('@largerStorageInput').find('input').should('be.checked')

    cy.get('@customProfileInput').find('input').click()
    cy.get('@customProfileInput').find('input').should('be.checked')

    cy.get('@nextButton').click()
    cy.get('[id="confirmation"]').should('exist')
    cy.get('@addOns').should('not.exist')
  })

  it('should be able to proceed with no selections', () => {
    cy.get('@nextButton').click()
    cy.get('[id="confirmation"]').should('exist')
    cy.get('@addOns').should('not.exist')
  })

  it('should be able to deselect an option', () => {
    cy.get('@onlineServiceInput').find('input').click()
    cy.get('@onlineServiceInput').find('input').should('be.checked')

    cy.get('@onlineServiceInput').find('input').click()
    cy.get('@onlineServiceInput').find('input').should('not.be.checked')
  })

  it('should be able to move foward and go back and see same options selected', () => {
    cy.get('@onlineServiceInput').find('input').click()

    cy.get('@nextButton').click()
    cy.get('[id="confirmation"]').should('exist')
    cy.get('@addOns').should('not.exist')

    cy.get('[id="previousButton"]').click()
    // component re-rendered, need to re-select elements
    cy.get('[id="addOns"]').should('exist')
    cy.get('[id="onlineServiceInput"]')
      .find('input')
      .should('be.checked')
    cy.get('[id="largerStorageInput"]')
      .find('input')
      .should('not.be.checked')
    cy.get('[id="customProfileInput"]')
      .find('input')
      .should('not.be.checked')
  })
})
