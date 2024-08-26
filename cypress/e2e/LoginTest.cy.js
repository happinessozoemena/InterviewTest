describe('Login Functionality', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('https://demo.guru99.com/V1/index.php');
  });

  it('Successful login with valid credentials', () => {
    // Enter valid username
    cy.get('input[name="uid"]').type('mngr587552');
    // Enter valid password
    cy.get('input[name="password"]').type('jygUqEd');
    // Click on login button
    cy.get('input[name="btnLogin"]').click();

    // Assert that the user is redirected to the manager home page
    cy.url().should('include', 'manager_home.php'); // Update with the correct URL fragment

    // Assert that the manager ID is displayed on the home page
    cy.contains('Manger Id : mngr581643').should('be.visible'); // Ensure this text is correct
  });

  it('Failed login with invalid credentials', () => {
    // Enter invalid username
    cy.get('input[name="uid"]').type('invalidUsername');
    // Enter invalid password
    cy.get('input[name="password"]').type('invalidPassword');
    // Click on login button
    cy.get('input[name="btnLogin"]').click();

    // Assert that the user stays on the login page
    cy.url().should('include', 'index.php');
  });

  it('Error message display when login fails', () => {
    // Enter invalid username
    cy.get('input[name="uid"]').type('invalidUsername');
    // Enter invalid password
    cy.get('input[name="password"]').type('invalidPassword');
    // Click on login button
    cy.get('input[name="btnLogin"]').click();

    // Assert that the error message is displayed
    cy.get('div.error-message').should('be.visible') // Adjust the selector based on actual implementation
      .and('contain.text', 'User or Password is not valid'); // Ensure this text matches the actual error message
  });
});
