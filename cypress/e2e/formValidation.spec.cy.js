describe('Form Validation', () => {
    it('should display error messages for missing or invalid form data', () => {
        cy.visit('/');
        cy.viewport(1200, 750);
    
        // Navigate to the contact page
        cy.get('a[href="/contact"]').click();
        cy.url().should('include', '/contact');
  
        // Submit the form without filling any fields
        cy.get('#submit-button').click();
  
        // Assert error message is displayed indicating required fields
        cy.contains('Some required fields are missing!').should('be.visible');
    
        // Fill in invalid email and assert error message display on clicking submit
        cy.get('#email-input').type('invalid-email');
        cy.get('#submit-button').click();
        cy.contains('Please enter a valid email address.').should('be.visible');

        cy.get('#first-name-input').type('John');
        cy.get('#last-name-input').type('Doe');
        cy.get('#email-input').type('johndoe@gmail.com');
        cy.get('#phone-number-input').type('12345');
        cy.contains('General').click();
        cy.get('#message').type('Sample message')
        cy.get('#submit-button').click();

        // Confirmation message should show if required fields are provided and form was subitted successfully
        cy.contains('Thanks for reaching out!').should('be.visible');

    });
  });
  