const { injectAxe, checkA11y } = require("axe-playwright");

module.exports = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page) {
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
// ref 1. https://storybook.js.org/tutorials/ui-testing-handbook/react/en/accessibility-testing/
// ref 2. https://github.com/chromaui/ui-testing-guide-code/blob/bed20643690603d4d555d37eb20bd724e5a5b285/.storybook/test-runner.js
