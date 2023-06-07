Cypress.Commands.add("getDataTest", (value) => {
  return cy.get(`[data-test=${value}]`);
});

Cypress.Commands.add("addToDoItem", (itemName) => {
  return cy.getDataTest("new-todo").type(`${itemName} {enter}`);
});

Cypress.Commands.add("getToDoCheckBox", (index) => {
  return cy.get(".view").get(".toggle").eq(index);
});

Cypress.Commands.add("completeToDoItem", (index) => {
  return cy.getToDoCheckBox(index).click();
});

Cypress.Commands.add("executeFilter", (filterName) => {
  return cy.get(".filters").contains(filterName).click();
});
