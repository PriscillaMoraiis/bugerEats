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
import 'cypress-file-upload';

import {
    randomName,
    randomEmail,
    randomzipCode,
}from './utils/faker';

Cypress.Commands.add("HomeEats", () => {
    return cy.visit("https://buger-eats.vercel.app/")
    
});

Cypress.Commands.add("randomName", (selector) => {
    return cy.get(selector).type(randomName());  
});

Cypress.Commands.add("randomEmail", (selector) => {
    return cy.get(selector).type(randomEmail()); 
});

Cypress.Commands.add("randomzipCode", (selector) => {
    return cy.get(selector).type(randomzipCode()); 
});

