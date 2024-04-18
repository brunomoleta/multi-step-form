/// <reference types="cypress" />

describe('Select a plan form section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.completePersonalInfoStep()
    cy.get('[id="selectPlan"]').as('selectPlan')
    cy.get('[id="formSteps"]').as('formSteps')
    cy.get('[id="arcadePlanInput"]').as('arcadePlan')
    cy.get('[id="advancedPlanInput"]').as('advancedPlan')
    cy.get('[id="proPlanInput"]').as('proPlan')
    cy.get('[id="monthlySubInput"]').as('montlySub')
    cy.get('[id="yearlySubInput"]').as('yearlySub')
    cy.get('[id="nextButton"]').as('nextButton')
  })

  it('default plan of arcade and montly subscription should be selected', () => {
    cy.get('@arcadePlan').find('input').should('be.checked')
    cy.get('@montlySub').find('input').should('be.checked')

    cy.get('@formSteps')
      .find('[data-active="true"]')
      .should('contain', 'Select Plan')
  })

  it('should be able to select advanced plan', () => {
    cy.get('@advancedPlan').find('input').click()
    cy.get('@advancedPlan').find('input').should('be.checked')

    cy.get('@arcadePlan').find('input').should('not.be.checked')
  })

  it('should be able to select pro plan', () => {
    cy.get('@proPlan').find('input').click()
    cy.get('@proPlan').find('input').should('be.checked')

    cy.get('@arcadePlan').find('input').should('not.be.checked')
  })

  it('should be able to select yearly subscription', () => {
    cy.get('@yearlySub').find('input').click()
    cy.get('@yearlySub').find('input').should('be.checked')

    cy.get('@montlySub').find('input').should('not.be.checked')
  })

  it('should be able to move to next step with default values', () => {
    cy.get('@nextButton').click()

    cy.get('@selectPlan').should('not.exist')
    cy.get('[id="addOns"]').should('exist')
  })

  it('should be able to move to next step with pro plan and yearly subscriptoin selected', () => {
    cy.get('@proPlan').find('input').click()
    cy.get('@yearlySub').find('input').click()
    cy.get('@nextButton').click()

    cy.get('@selectPlan').should('not.exist')
    cy.get('[id="addOns"]').should('exist')
  })

  it('should be able to move to next step and back to previous step with same values selected', () => {
    cy.get('@advancedPlan').find('input').click()
    cy.get('@nextButton').click()

    cy.get('[id="addOns"]').should('exist')
    cy.get('[id="previousButton"]').click()
    cy.get('@advancedPlan').find('input').should('be.checked')
    // can't use alias because the component was re-redered, meaning it is not the same element previously aliased
    cy.get('[id="monthlySubInput"]').find('input').should('be.checked')
  })
})
