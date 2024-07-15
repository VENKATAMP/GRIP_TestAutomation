import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";

test.beforeEach(async ({loginPage}) =>{
  await loginPage.login(ENV.emailID, ENV.pwd);
});

test('Verify login success by validating title on landing page , @LoginPage @Production', async ({ page }) => {
  await page.waitForTimeout(6000);
  test.expect(await page.title()).toContain('Discover');
});

test('Verify add study , @AddStudy @Production', async ({studyPage, loginPage }) => {
  await loginPage.myDashboard.hover();
  await studyPage.doAddStudy();
});

