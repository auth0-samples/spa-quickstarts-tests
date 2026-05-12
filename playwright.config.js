const { defineConfig } = require("@playwright/test");

const baseURL = process.env.WEBAPP_URL
  || (process.env.SAMPLE_PORT ? `http://localhost:${process.env.SAMPLE_PORT}` : "http://localhost:3000");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  retries: 1,
  use: {
    baseURL,
    headless: true,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { browserName: "chromium" } },
    { name: "firefox", use: { browserName: "firefox" } },
  ],
});
