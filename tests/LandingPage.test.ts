import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";

test.describe('Landing Page Test Cases', async () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(ENV.baseURL);
    await page.waitForURL(/studies/, { timeout: 30000 });
    await page.waitForTimeout(10000);
  });

  test('Verify filter functionality by Slider available in left side pane , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifySlider();
  });
  test('Verify availability of Logo & icon and also verify tabs availability of About , Platform, News & Resources, My Dashboard on home page , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifyLogoAndIcon();
    await landingPage.verifyMenuTabs();
  });
  test('Verify links functionalities for   verify About > Partners, Contact, Platform>Catalogue, News & Resources, My Dashboard> Register, Login , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifySubMenuLinks();
  });
  test('Verify links functionalities for   verify About > Partners, Contact, Platform>Catalogue, News & Resources, My Dashboard> Register, Login Navigation , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifySubMenuLinksNavigation();
  });
  test('Verify  Reset filter functionality and expand/collapse functionality , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifyResetFilter();
    await landingPage.verifyExpandAndCollapse();
  });
  test('verify filters by checking the checkboxes of disease name , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifyFilterByDisease();
  });
  test('Verify search results after selecting checkbox for Biosample Collection Type , @LandingPage @Production' , async ({ landingPage }) => {
    await landingPage.verifyFilterByBioSample();
  });
  test('Verify search results after selecting checkbox for Imaging Data Type , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifyFilterByImagingDataType();
  });
  test('Verify search results after selecting checkbox for Cognitive Data, @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifyFilterByCognitiveData();
  });
  test('Verify search results after selecting checkbox with a combination of any two above checkboxes , @LandingPage @Production', async ({ landingPage, studyDetailsPage }) => {
    await landingPage.verifyFilterByCombination();
    await studyDetailsPage.verifyMultipleDiseasesDisplay();
  });
  test('To verify textbox filter with study/disease name (verify text available below search box) , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifyStudyOrDiseaseBySearch("Alzheimer's disease (AD)");
  });
  test('To verify successfully filter by city/country name , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifyByCityOrCountry("Greece");
  });
  test('Verify Sort by study name functionality , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifySortByFunctionality();
  });
  test('Verify Footer:Click on logo to access the website, @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifyFooterLogoNavigation();
  });
  test('Verify Footer:About,Platform,News & Resources,Contact,Learn More link validation,LinkdIn link validation,Twitter link validation,Privacy validation , @LandingPage @Production', async ({ landingPage }) => {
    await landingPage.verifyFooterLinks();
  });
});













