import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";
import {faker} from "@faker-js/faker";


test.describe.skip('Bio Sample Collection Details Page Test Cases', async () => {
  let studyName:any;
  let primaryInvistigatorName:any;
  let primaryInvistigatorEmail:any;
  let bioSampleName:any;
  
  test.beforeEach(async ({ loginPage,studyDetailsPage }) => {
    await loginPage.login(ENV.emailID, ENV.pwd);
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    studyName=faker.internet.userName({ firstName: 'AUTOSTUDY' });
    primaryInvistigatorName=faker.internet.userName({ firstName: 'AUTOPI' });
    primaryInvistigatorEmail=faker.internet.email({ firstName: 'AUTOPI' });
    bioSampleName=faker.internet.userName({ firstName: 'AUTODATASET' });
  });
  test('Verify links functionality for Add  Biosample Collection to Study: Common, Summary, Use conditions and Restrictions and Related Publication links validation under "Study Overview", @BioSample', async ({ studyAdministrationPage,bioSampleCollectionDetailsPage }) => {
    await studyAdministrationPage.selectOnlyType("Studies");
    await studyAdministrationPage.selectOnlyDraft();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageBioSampleCollection();
    await studyAdministrationPage.clickAddBioSampleCollectionLink();
    await bioSampleCollectionDetailsPage.verifyLinksVisiblityForAddDataSetsToStudyUnderStudyOverview();
    await bioSampleCollectionDetailsPage.verifyCommonLinkForDataSets();
    await bioSampleCollectionDetailsPage.verifySummaryLinkForDataSets();
    await bioSampleCollectionDetailsPage.verifyUseConditionsAndRestrictionsLinkForDataSets();
    await bioSampleCollectionDetailsPage.verifyRelatedPublicationsLinkForDataSets();
    });
  test('Verify Add Biosample Collection functionality with "Save as Draft": Validate pop up and available same study under Show Draft dorpdown, @BioSample', async ({ studyAdministrationPage,bioSampleCollectionDetailsPage ,addStudyPage}) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageBioSampleCollection();
    await studyAdministrationPage.clickAddBioSampleCollectionLink();
    await bioSampleCollectionDetailsPage.verifyAddNewDataSetAndSaveAsDraft(bioSampleName,primaryInvistigatorName,primaryInvistigatorEmail);
  });
  test('Verify Add Biosample Collection functionality with "Submit to Catalogue": Validate pop up and available same study under Show Submitted dorpdown, @BioSample', async ({ studyAdministrationPage,bioSampleCollectionDetailsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageBioSampleCollection();
    await studyAdministrationPage.clickAddBioSampleCollectionLink();
    await bioSampleCollectionDetailsPage.verifyAddNewDataSetAndSubmitToCatalogue(bioSampleName,primaryInvistigatorName,primaryInvistigatorEmail,"India","Automation","Male");
  });
  test('Verify after drafting all fields are correctly populated with respect to entered values like name, email, primary investigator/city country name etc, @BioSample', async ({ studyAdministrationPage,bioSampleCollectionDetailsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageBioSampleCollection();
    await studyAdministrationPage.clickAddBioSampleCollectionLink();
    await bioSampleCollectionDetailsPage.verifyAddNewDataSetAndSaveAsDraft(bioSampleName,primaryInvistigatorName,primaryInvistigatorEmail);
    await bioSampleCollectionDetailsPage.verifyAddedDataForSaveAndDraft(bioSampleName,primaryInvistigatorName,primaryInvistigatorEmail);
  });
  test('Verify  Add new   Biosample Collection page fields:   Verify all details are entered like name, email, primary investigator/city country name etc , @BioSample', async ({ studyAdministrationPage,bioSampleCollectionDetailsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageBioSampleCollection();
    await studyAdministrationPage.clickAddBioSampleCollectionLink();
    await bioSampleCollectionDetailsPage.verifyAddNewDataSetAndSubmitToCatalogue(bioSampleName,primaryInvistigatorName,primaryInvistigatorEmail,"India","Automation","Male");
    await bioSampleCollectionDetailsPage.verifyAddedDataForSubmitToCatalogue(bioSampleName,primaryInvistigatorName,primaryInvistigatorEmail);
  });
  test('Verify After Edit Biosample Collection page fields:   Verify all details are entered like name, email, primary investigator/city country name etc, @BioSample', async ({ studyAdministrationPage,bioSampleCollectionDetailsPage ,addStudyPage}) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageBioSampleCollection();
    await studyAdministrationPage.clickAddBioSampleCollectionLink();
    await bioSampleCollectionDetailsPage.verifyAddNewDataSetAndSaveAsDraft(bioSampleName,primaryInvistigatorName,primaryInvistigatorEmail);
    await bioSampleCollectionDetailsPage.clickEditDataSet();
    await bioSampleCollectionDetailsPage.editSaveAsDraftDataSet(bioSampleName+"UPDATED");
  });
  test('Verify Edit Study functionality(Manage) with Save as Draft and verify all fields are correctly populated with with respect to updated values, @BioSample', async ({ addStudyPage,studyAdministrationPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickOnEditSavedDraftStudy();
    await addStudyPage.editAndSaveStudy(studyName+"UPDATED");
    await studyAdministrationPage.verifyUpdatedSyudyAfterEdit("UPDATED");
  });
  test('Verify Edit Study functionality(Manage) with Submit to Catalogue and verify all fields are correctly populated with with respect to updated values, @BioSample', async ({ addStudyPage,studyAdministrationPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSubmitToCatalogue(studyName,primaryInvistigatorName,primaryInvistigatorEmail,"India","Automation");
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySubmitToCatalogueStudy(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForPublished();
    await studyAdministrationPage.clickOnEditSavedDraftStudy();
    await addStudyPage.editSubmitToCatalogueStudy(studyName+"UPDATED");
    await studyAdministrationPage.verifyUpdatedSyudyAfterEdit("UPDATED");
  });
  test('Verify Edit Study functionality(Manage) with Cancel button and verify no changes should get updated, @BioSample', async ({ studyAdministrationPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickOnEditSavedDraftStudy();
    await addStudyPage.editAndCancelStudy(studyName+"UPDATED");
    await studyAdministrationPage.verifyUpdatedSyudyAfterCancelByEdit("UPDATED");
  });
  test('Verify Contact Owner link functionality and verify both the checkboxes can be selected with "contact" button functionality available on Pop up, @BioSample', async ({ studyAdministrationPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyContactOwnerLinkFunctionality();
  });
  test('Verify Delete button functionality and verify the text and "Go back" and "Delete" button functionality available on Pop up, @BioSample', async ({ studyAdministrationPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyGoBackAndDeletekFunctionality();
    
  });
  test('Verify Discard button functionality and verify text can be entered into textbox and "Cancel" and "Send Message" functionalities  available on Pop up(partial), @BioSample', async ({ studyAdministrationPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyDiscardBtnFunctionality();
  });
  test('Verify Manage Biosample Collections button link functionality and verify all the elements are visible properly., @BioSample', async ({ studyAdministrationPage,bioSampleCollectionDetailsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageBioSampleCollection();
    await bioSampleCollectionDetailsPage.verifyAddDataSetsColumnsAvalability();
  });
  test('Verify all the columns available under Biosample Collection tab below Add Biosample Collection tab, @BioSample', async ({ studyAdministrationPage,bioSampleCollectionDetailsPage,addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageBioSampleCollection();
    await bioSampleCollectionDetailsPage.verifyAddDataSetsColumnsAvalability();
  });
  test('Verify "No Biosample Collection yet" when no Biosample Collection is added and verify also Back button functionality, @BioSample', async ({ studyAdministrationPage,bioSampleCollectionDetailsPage, addStudyPage }) => {
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName, primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickManageBioSampleCollection();
    await bioSampleCollectionDetailsPage.noDataSetsTextVisiblity();
  });
});













