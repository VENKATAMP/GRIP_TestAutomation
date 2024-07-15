const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests/',
  /* Maximum time one test can run for. */
  timeout: 240000,

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : 4,

  //outputDir: "trace-report",
  use: {
    actionTimeout: 60000,
    trace: 'off',
    video: 'only-on-failure',
    screenshot: 'only-on-failure',
    headless: false,
    
  },
  globalSetup: "src/lib/globalSetup.ts",
  globalTeardown: "src/lib/global-teardown.ts",
  reporter: [['html', { open: 'never' }],
             ["allure-playwright", { outputFolder: 'allure-results/', detail: true }],
             ['junit',{outputFile:'results.xml'}],
             ['line'],
             ],

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'],
      launchOptions:{args:['--deny-permission-prompts','--start-fullscreen']},
      baseURL: process.env.baseURL
    }, 
    },
  ],
});

