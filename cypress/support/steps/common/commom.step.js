/// <reference types="Cypress" />

Given("Estou autenticado no sistema", () => {
  expect(Cypress.env("TOKEN")).to.not.be.empty;
});
