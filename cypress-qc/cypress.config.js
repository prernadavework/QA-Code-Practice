const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6niymg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },baseUrl: 'https://fullpullrope.com',
  },
});
