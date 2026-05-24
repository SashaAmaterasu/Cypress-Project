const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://r1037681-realbeans.myshopify.com',
    specPattern: 'cypress/e2e/**/*.cy.js'
  }
})
