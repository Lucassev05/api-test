const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-json/",
  reportPath: "./cypress/reports/",
  metadata: {
    browser: {
      name: "edge",
      version: "60",
    },
    device: "Máquina Local",
    platform: {
      name: "windows",
      version: "20H2",
    },
  },
});
