describe("test connection", () => {
  it("connects", () => {
    cy.visit(Cypress.env("todo_url"));
  });
});
