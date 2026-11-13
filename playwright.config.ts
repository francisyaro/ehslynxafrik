import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/e2e",
  use: { baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: process.env.PLAYWRIGHT_BASE_URL ? undefined : {
    command: "npm run dev", url: "http://localhost:3000", reuseExistingServer: !process.env.CI, timeout: 120000
  }
});
