describe("tasks", () => {
  context("todo", () => {
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

    it("as a user, i want to be able to see all my active items in show active: there is only 1 item", () => {
      cy.completeToDoItem(0);
      cy.executeFilter("Active");
      cy.get(".todo-list li").should("have.length", 1);
    });

    it("as a user, i want to be able to see all my complted items in show complted: there is only 1 item", () => {
      cy.completeToDoItem(0);
      cy.executeFilter("Completed");
      cy.get(".todo-list li").should("have.length", 1);
    });

    it("as a user, i want to be able to clear all my completed items upon clicking clear all completed: there must be 1 item left", () => {
      cy.completeToDoItem(0);
      cy.get(".clear-completed").click();
      cy.get(".todo-list li").should("have.length", 1);
    });

    it("as a user, i want to be able to complete all my listed items", () => {
      cy.get('[for="toggle-all"]').click();
      cy.getToDoCheckBox(0).should("be.checked");
      cy.getToDoCheckBox(1).should("be.checked");
    });
  });

  context("/commands/actions", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("actions_url"));
    });

    it("asserts that it can visit /commands/actions and submit a Coupon Code", () => {
      cy.get(".action-form").find('[type="text"]').type("test");
      cy.get(".action-form")
        .submit()
        .next()
        .should("contain", "Your form has been submitted!");
    });
  });

  context("/commands/misc", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("misc_url"));
    });

    it("asserts that it can visit /commands/misc and is a correct url", () => {
      cy.url().should("include", "/commands/misc");
    });

    it("asserts that it can visit /commands/misc and the table is clickable (should turn)", () => {
      cy.get(".table-bordered").click();
      cy.get(".table-bordered").should("have.class", "table-bordered");
    });
  });
});
