describe("todo", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("todo_url"));
  });

  it("adds a todo", () => {
    cy.get('[data-test="new-todo"]').type("Buy Milk{enter}");
  });
});
