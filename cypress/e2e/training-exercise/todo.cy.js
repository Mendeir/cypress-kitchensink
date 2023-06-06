describe("todo", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("todo_url"));
  });

  it("as a user, i can add my own todo item", () => {
    cy.addToDoItem("Buy Milk");
    cy.get(".todo-list").should("contain", "Buy Milk");
  });

  it("as a user, i want to be able to complete a task: walk the dog", () => {
    cy.completeToDoItem(1).should("be.checked");
  });

  it("as a user, i want to make sure all items are being added: check if there are 3 items", () => {
    cy.addToDoItem("Buy Milk");
    cy.get(".todo-list li").should("have.length", 3);
  });

  it("as a user, i want to be able to see all my items in show all: there are only 2 items.", () => {
    cy.executeFilter("All");
    cy.get(".todo-list li").should("have.length", 2);
  });

  it.only("as a user, i want to be able to see all my active items in show active: there is only 1 item", () => {
    cy.completeToDoItem(0);
    cy.executeFilter("Active");
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
