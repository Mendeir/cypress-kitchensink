describe("todo", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("todo_url"));
  });

  it("adds a todo", () => {
    cy.getDataTest("new-todo").type("Buy Milk{enter}");
    cy.get(".todo-list").should("contain", "Buy Milk");
  });

  it("checks walk the dog", () => {
    cy.get(":nth-child(2) > .view > .toggle").click().should("be.checked");
  });

  it("asserts that there are 3 items", () => {
    cy.getDataTest("new-todo").type("Buy Milk{enter}");
    cy.get(".todo-list li").should("have.length", 3);
  });

  it("asserts it shows 2 items in show all", () => {
    cy.get(".selected").click();
    cy.get(".todo-list li").should("have.length", 2);
  });

  it("asserts it shows 1 item in show active", () => {
    cy.get(":nth-child(1) > .view > .toggle").click().should("be.checked");
    cy.get(".filters > :nth-child(2) > a").click();
    cy.get(".todo-list li").should("have.length", 1);
  });

  it("asserts it shows 1 item in show completed", () => {
    cy.get(":nth-child(1) > .view > .toggle").click().should("be.checked");
    cy.get(".filters > :nth-child(3) > a").click();
    cy.get(".todo-list li").should("have.length", 1);
  });
});
