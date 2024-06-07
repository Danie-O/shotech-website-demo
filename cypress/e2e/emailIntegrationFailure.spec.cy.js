describe('Email Sending Failure', () => {
    it('should handle email sending failure gracefully', () => {
      cy.visit('/contact');
      cy.viewport(1200, 750);
  
      // Fill in the form with valid data
      cy.get('#first-name-input').type('John');
      cy.get('#last-name-input').type('Doe');
      cy.get('#email-input').type('johndoe@gmail.com');
      cy.get('#phone-number-input').type('12345');
      cy.contains('General').click();
      cy.get('#message').type('Sample message');
  
      // Stub the POST request to simulate email sending failure
      cy.intercept('POST', 'http://localhost:3000/send-email', {
        statusCode: 500,
        body: { error: 'Email sending failed' },
      }).as('sendEmail');
  
      // Submit the form
      cy.get('#submit-button').click();
  
      // Assert that an error message is displayed
      cy.contains('Message could not be sent, please try again.').should('be.visible');
    });
  });
  