describe('WebDriverIO to Cypress Migration', () => {
  it('handles login with API mock', () => {
    cy.intercept('POST', '/api/login', { success: true }).as('login');
    cy.visit('/');
    cy.get('[data-test="username"]').type('admin');
    cy.get('[data-test="password"]').type('secret');
    cy.get('[data-test="login-btn"]').click();
    cy.wait('@login');
    cy.get('[data-test="header"]').should('contain', 'Welcome');
  });
});