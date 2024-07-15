import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";
import {faker} from "@faker-js/faker";


test.describe('Data Sets Page Test Cases', async () => {
  let studyName:any;
  let primaryInvistigatorName:any;
  let primaryInvistigatorEmail:any;
  let dataSetName:any;
  
  test.beforeEach(async ({ loginPage,studyDetailsPage }) => {
    await loginPage.login(ENV.emailID, ENV.pwd);
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    studyName=faker.internet.userName({ firstName: 'AUTOSTUDY' });
    primaryInvistigatorName=faker.internet.userName({ firstName: 'AUTOPI' });
    primaryInvistigatorEmail=faker.internet.email({ firstName: 'AUTOPI' });
    dataSetName=faker.internet.userName({ firstName: 'AUTODATASET' });
  });
  test('Verify links functionality for Add Dataset to Study: Common, Summary, Use conditions and Restrictions and Related Publication links validation under "Study Overview", @DataSets', async ({ studyAdministrationPage,dataSetsPage }) => {
    await studyAdministrationPage.selectOnlyType("Studies");
    await studyAdministrationPage.selectOnlyDraft();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageDataSets();
    await studyAdministrationPage.clickAddDataSets();
    await dataSetsPage.verifyLinksVisiblityForAddDataSetsToStudyUnderStudyOverview();
    await dataSetsPage.verifyCommonLinkForDataSets();
    await dataSetsPage.verifySummaryLinkForDataSets();
    await dataSetsPage.verifyUseConditionsAndRestrictionsLinkForDataSets();
    await dataSetsPage.verifyRelatedPublicationsLinkForDataSets();
    });
  test('Verify Add Dataset functionality with "Save as Draft": Validate pop up and available same study under Show Draft dorpdown, @DataSets', async ({ studyAdministrationPage,dataSetsPage ,addStudyPage}) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageDataSets();
    await studyAdministrationPage.clickAddDataSets();
    await dataSetsPage.verifyAddNewDataSetAndSaveAsDraft(dataSetName,primaryInvistigatorName,primaryInvistigatorEmail);
  });
  test('Verify Add Dataset functionality with "Submit to Catalogue": Validate pop up and available same study under Show Submitted dorpdown, @DataSets', async ({ studyAdministrationPage,dataSetsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageDataSets();
    await studyAdministrationPage.clickAddDataSets();
    await dataSetsPage.verifyAddNewDataSetAndSubmitToCatalogue(dataSetName,primaryInvistigatorName,primaryInvistigatorEmail,"India","Automation","Male");
  });
  test('Verify all fields are correctly populated with with respect to entered values like name, email, primary investigator/city country name etc , @DataSets', async ({ studyAdministrationPage,dataSetsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageDataSets();
    await studyAdministrationPage.clickAddDataSets();
    await dataSetsPage.verifyAddNewDataSetAndSaveAsDraft(dataSetName,primaryInvistigatorName,primaryInvistigatorEmail);
    await dataSetsPage.verifyAddedDataForSaveAndDraft(dataSetName,primaryInvistigatorName,primaryInvistigatorEmail);
  });
  test('Verify  Add new Dataset page fields:  Verify all details are entered like name, email, primary investigator/city country name etc , @DataSets', async ({ studyAdministrationPage,dataSetsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageDataSets();
    await studyAdministrationPage.clickAddDataSets();
    await dataSetsPage.verifyAddNewDataSetAndSubmitToCatalogue(dataSetName,primaryInvistigatorName,primaryInvistigatorEmail,"India","Automation","Male");
    await dataSetsPage.verifyAddedDataForSubmitToCatalogue(dataSetName,primaryInvistigatorName,primaryInvistigatorEmail);
  });
  test('Verify After Edit Dataset page fields:  Verify all details are entered like name, email, primary investigator/city country name etc, @DataSets', async ({ studyAdministrationPage,dataSetsPage ,addStudyPage}) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageDataSets();
    await studyAdministrationPage.clickAddDataSets();
    await dataSetsPage.verifyAddNewDataSetAndSaveAsDraft(dataSetName,primaryInvistigatorName,primaryInvistigatorEmail);
    await dataSetsPage.clickEditDataSet();
    await dataSetsPage.editSaveAsDraftDataSet(dataSetName+"UPDATED");
  });
  test('Verify Edit Study functionality(Manage) with Save as Draft and verify all fields are correctly populated with with respect to updated values , @DataSets', async ({ addStudyPage,studyAdministrationPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickOnEditSavedDraftStudy();
    await addStudyPage.editAndSaveStudy(studyName+"UPDATED");
    await studyAdministrationPage.verifyUpdatedSyudyAfterEdit("UPDATED");
  });
  test('Verify Edit Study functionality(Manage) with Submit to Catalogue and verify all fields are correctly populated with with respect to updated values, @DataSets', async ({ addStudyPage,studyAdministrationPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSubmitToCatalogue(studyName,primaryInvistigatorName,primaryInvistigatorEmail,"India","Automation");
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySubmitToCatalogueStudy(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForPublished();
    await studyAdministrationPage.clickOnEditSavedDraftStudy();
    await addStudyPage.editSubmitToCatalogueStudy(studyName+"UPDATED");
    await studyAdministrationPage.verifyUpdatedSyudyAfterEdit("UPDATED");
  });
  test('Verify Edit Study functionality(Manage) with Cancel button and verify no changes should get updated, @DataSets', async ({ studyAdministrationPage,dataSetsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickOnEditSavedDraftStudy();
    await addStudyPage.editAndCancelStudy(studyName+"UPDATED");
    await studyAdministrationPage.verifyUpdatedSyudyAfterCancelByEdit("UPDATED");
  });
  test('Verify Contact Owner link functionality and verify both the checkboxes can be selected with "contact" button functionality available on Pop up, @DataSets', async ({ studyAdministrationPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyContactOwnerLinkFunctionality();
  });
  test('Verify Delete button functionality and verify the text and "Go back" and "Delete" button functionality available on Pop up, @DataSets', async ({ studyAdministrationPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyGoBackAndDeletekFunctionality();
    
  });
  test('Verify Discard button functionality and verify text can be entered into textbox and "Cancel" and "Send Message" functionalities  available on Pop up(partial), @DataSets', async ({ studyAdministrationPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyDiscardBtnFunctionality();
  });
  test('Verify Manage Datasets button link functionality and verify all the elements are visible properly., @DataSets', async ({ studyAdministrationPage,dataSetsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageDataSets();
    await dataSetsPage.verifyAddDataSetsColumnsAvalability();
  });
  test('Verify all the columns available under Dataset tab below Add Dataset tab, @DataSets', async ({ studyAdministrationPage,dataSetsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageDataSets();
    await dataSetsPage.verifyAddDataSetsColumnsAvalability();
  });
  test('Verify "No Dataset yet" when no Dataset is added and verify also Back button functionality, @DataSets', async ({ studyAdministrationPage,dataSetsPage, addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageDataSets();
    await dataSetsPage.noDataSetsTextVisiblity();
  });
});













