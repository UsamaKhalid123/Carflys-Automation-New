/// <reference types="cypress" />

require('./commands')

// load and register the grep feature
// https://github.com/bahmutov/cy-grep
require('@bahmutov/cy-grep')()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
