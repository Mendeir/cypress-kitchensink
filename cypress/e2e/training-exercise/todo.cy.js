describe("todo", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("todo_url"));
  });

  it("adds a todo", () => {
    cy.getDataTest("new-todo").type("Buy Milk{enter}");
    cy.get(".todo-list").should("contain", "Buy Milk");
  });

  it("checks walk the dog", () => {
    cy.get(":nth-child(2) > .view > .toggle").click();
  });
});
