describe("todo", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("todo_url"));
  });

  it("as a user, i can add my own todo item", () => {
    cy.addToDoItem("Buy Milk");
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

  it("asserts that it shows 1 items in all after clearing all completed", () => {
    cy.get(":nth-child(1) > .view > .toggle").click().should("be.checked");
    cy.get(".clear-completed").click();
    cy.get(".todo-list li").should("have.length", 1);
  });

  it("asserts that it can visit /commands/actions and submit a Coupon Code", () => {
    cy.visit("localhost:8080/commands/actions");
    cy.get("#couponCode1").type("test");
    cy.get(".action-form > .btn").click();
    cy.get(":nth-child(14) > .well").should(
      "contain",
      "Your form has been submitted!"
    );
  });

  it("asserts that it can visit /commands/misc and is a correct url", () => {
    cy.visit("localhost:8080/commands/misc");
    cy.url().should("include", "/commands/misc");
  });

  it("asserts that it can visit /commands/misc and the table is clickable (should turn)", () => {
    cy.visit("localhost:8080/commands/misc");
    cy.get(".table-bordered").click();
    cy.get(".table-bordered").should("have.class", "table-bordered");
  });

  it("asserts that it can check all todo-list items", () => {
    cy.get('[for="toggle-all"]').click();
    cy.get(":nth-child(2) > .view > .toggle").should("be.checked");
    cy.get(":nth-child(1) > .view > .toggle").should("be.checked");
  });
});
