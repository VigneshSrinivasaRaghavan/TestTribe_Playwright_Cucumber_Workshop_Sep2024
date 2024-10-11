const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results/report/",
  reportPath: "test-results/report/",
  metadata: {
    browser: {
      name: "chrome",
      version: "120",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Amazon Payment" },
      { label: "Release", value: "4.2" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});