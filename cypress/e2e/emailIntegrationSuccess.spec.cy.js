describe('Email integration', () => {
  it('should send an email to company email address when form is submitted', () => {
    cy.visit('/');
    cy.viewport(1200, 750);
    
    // Navigate to the contact page
    cy.get('a[href="/contact"]').click();
    cy.url().should('include', '/contact');

    cy.get('#first-name-input').type('John');
    cy.get('#last-name-input').type('Doe');
    cy.get('#email-input').type('johndoe@gmail.com');
    cy.get('#phone-number-input').type('12345');
    cy.contains('General').click();
    cy.get('#message').type('Sample message')
    cy.get('#submit-button').click(); 


    // Make API request to trigger email sending form
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/send-email',
      body: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        phoneNumber: '12345',
        subject: 'General Inquiry', 
        message: 'Sample message'
      },
    }).then((response) => {
      // Assert email sending success
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Email sent successfully');
    });

    // Confirmation message should show if form was submitted and email was sent successfully
    cy.contains('Thanks for reaching out!').should('be.visible');
  })
})