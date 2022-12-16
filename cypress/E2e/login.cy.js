beforeEach(() => {
    it("passes", () => {
            // runs before each test in the block
            cy.visit('http://127.0.0.1:8000/')
            cy.get('[name="email"]').type("superadmin@mail.com");
            cy.get('[name="password"]').type("password");
            cy.get('[name="login-button"]').click("password");
    
    })
})