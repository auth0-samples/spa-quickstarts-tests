let url;
if (process.env.WEBAPP_URL) {
  url = process.env.WEBAPP_URL;
} else if (process.env.SAMPLE_PORT) {
  url = "http://localhost:" + process.env.SAMPLE_PORT;
} else {
  url = "http://localhost:3000";
}

exports.config = {
  tests: "./*_test.js",
  timeout: 10000,
  output: "out",
  multiple: {
    basic: {
      browsers: ["chromium", "firefox"],
    },
  },
  helpers: {
    Playwright: {
      url: url,
      show: false,
      browser: "chromium",
      waitForNavigation: "networkidle0",
    },
  },
  include: {},
  bootstrap: false,
  mocha: {},
  name: "webapp-tests",
};
