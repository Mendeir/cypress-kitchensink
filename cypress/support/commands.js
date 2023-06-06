Cypress.Commands.add("getDataTest", (value) => {
  return cy.get(`[data-test=${value}]`);
});

Cypress.Commands.add("addToDoItem", (itemName) => {
  return cy.getDataTest("new-todo").type(`${itemName} {enter}`);
});
