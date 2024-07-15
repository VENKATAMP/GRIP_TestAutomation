import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";

test.describe('Study details page test cases', async () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(ENV.baseURL);
    await page.waitForURL(/studies/, { timeout: 30000 });
    await page.waitForTimeout(5000);
  });
  test('Verify EPND Catalogue , @StudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyEpndCatalogueDisplay();
  });
  test('Verify Click and Verify Study item , @StudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
  });
  test('Verify Common Link , @StudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifyCommonLink();
  });
  test('Verify Summary Link , @StudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifySummaryLink();
  });
  test('Verify Study Overoview Expand And Collapse Check, @StudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifyStudyOveroviewExpandAndCollapseCheck();
  });
  test('Verify Back Functionality , @StudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifyBackFunctionality();
  });
  test('Verify Study Section Functionality, @StudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifyStudySectionFunctionality();
  });
  test('Verify Bottom Login And Text Along With Lock Icon , @StudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifyBottomLoginAndTextAlongWithLockIcon();
  });
  test('Verify Security Lock For Data Sets,Bio Sample,ColUse Co And Rest Related Publications, @StudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifySecurityLockForDataSetsBioSampleColUseConAndRestRelatedPublications();
  });
});











