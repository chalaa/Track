describe('template spec', () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/login");
    cy.get("#email").type("sidiso8702@segichen.com");
    cy.get("#password").type("sidiso8702@segichen.com");
    cy.get("button").click();
    cy.wait(10000)
  });

  it("goest to", ()=> {
    cy.url().should("include","/Jobs")

  });

  afterEach(() => {
    cy.get("#logout").click();
    cy.wait(1000)
    cy.url().should("include", "/Jobs")
  })
})