// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-file-upload";

import { randomName, randomEmail, randomPhone } from "./utils/faker";

Cypress.Commands.add("HomeEats", () => {
    cy.visit("https://buger-eats.vercel.app/");
    cy.viewport(1920, 1080);
    cy.get("#page-home main h1")
        .should("have.text", "Seja um parceiro entregador pela Buger Eats")
        .should("be.visible");
    cy.get('a[href*="/deliver"]').click();
    cy.url().should("include", "/deliver");
});

Cypress.Commands.add("randomName", (selector) => {
    return cy.get(selector).type(randomName());
});

Cypress.Commands.add("randomEmail", (selector) => {
    return cy.get(selector).type(randomEmail());
});

Cypress.Commands.add("addName", (selector) => {
    cy.get('input[name="name"]').type(selector);
});

Cypress.Commands.add("addCPF", (selector) => {
    cy.get('input[name="cpf"]').type(selector);
});

Cypress.Commands.add("addEmail", (selector) => {
    cy.get('input[name="email"]').type(selector);
});

Cypress.Commands.add("addWhatsapp", (selector) => {
    cy.get('input[name="whatsapp"]').type(selector);
});

Cypress.Commands.add("addZipcode", (selector) => {
    cy.get('input[name="postalcode"]').type(selector);
});

Cypress.Commands.add("searchButton", () => {
    cy.get('input[type="button"][value= "Buscar CEP"]').click();
});

Cypress.Commands.add("addressNumber", (selector) => {
    cy.get('input[name="address-number"]').type(selector);
});

Cypress.Commands.add("addressDetails", (selector) => {
    cy.get('input[name="address-details"]').type(selector);
});

Cypress.Commands.add("deliveryMethod", (selector) => {
    cy.contains(".delivery-method li", selector).click();
});

Cypress.Commands.add("AddPhoto", () => {
    cy.get('input[accept^="image"]').attachFile(
        "/image/" + "cnh_gratuita.jpeg",
    );
});

Cypress.Commands.add("formButton", () => {
    cy.get('form button[type="submit"]').click();
});

Cypress.Commands.add("addNameEmpty", () => {
    cy.get('input[name="name"]').clear();
});

Cypress.Commands.add("alert", (selector) => {
    cy.get(".alert-error").contains(selector);
});
