import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";
import {faker} from "@faker-js/faker";

test.describe('Post Login Study Details Page Test Cases', async () => {
  let studyName:any;
  let primaryInvistigatorName:any;
  let primaryInvistigatorEmail:any;
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.login(ENV.emailID, ENV.pwd);
    studyName=faker.internet.userName({ firstName: 'AUTOSTUDY' });
    primaryInvistigatorName=faker.internet.userName({ firstName: 'AUTOPI' });
    primaryInvistigatorEmail=faker.internet.email({ firstName: 'AUTOPI' });
  });
  test('Verify user is able to view the EPND Catalogue and all the Published studies after user launches the landing page, @PostLoginStudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyEpndCatalogueDisplay();
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
  });
  test('Verify opening the Study details page after clicking from catalogue view, @PostLoginStudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
  });
  test('Verify options available under Study Overview and verify links of Common, Summary, DataSets, Biosample Collection, Use conditions and Restrictions and Related Publication , @PostLoginStudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifyStudyOverviewLinks();
  });
  test('Verify Study Overview expand/collapse icon and Back functionality , @PostLoginStudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifyStudyOveroviewExpandAndCollapseCheck();
    await studyDetailsPage.verifyBackFunctionality();
  });
  test('Verify Study Overoview Expand And Collapse Check, @PostLoginStudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifyStudyOveroviewExpandAndCollapseCheck();
  });
  test.fixme('Verify Study (right side panel) availability and   Register & Login links functionality under Study section , @PostLoginStudyDetails @Production', async ({ studyDetailsPage }) => {
    await studyDetailsPage.verifyClickAndVerifyStydyItem();
    await studyDetailsPage.verifyStudySectionFunctionality();
  });
  test('Verify Study Administration page elements Availability of Add button, Two tabs, dropdowns(all type &Show), search text, @PostLoginStudyDetails @Production', async ({ studyDetailsPage,studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.verifyStudyAdminstrationElementsAvalability();
  });
  test('Verify functionality of elements on Study Administration page: All Types,  Show dropdown and Search under Unpublished Changes tab , @PostLoginStudyDetails @Production', async ({ studyDetailsPage,studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.verifyStudyAdminstrationUnPublishedElementsAvalability();
  });
  test('Verify columns available under "Unpublished Changes" tab on Study Administration page, @PostLoginStudyDetails @Production', async ({ studyDetailsPage, studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.verifyStudyAdminstrationUnPublishedColumnsAvalability();
    
  });
  test('Verify columns available under "Published Studies, Datasets and Biosample Collections" tab on Study Administration page, @PostLoginStudyDetails @Production', async ({ studyDetailsPage,studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.verifyStudyAdminstrationPublishedColumnsAvalability();
  });
  test('Verify functionality of Manage button available under  "Unpublished Changes" and "Published Studies, Datasets and Biosample Collections" tab, @PostLoginStudyDetails @Production', async ({ studyDetailsPage, studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.verifyManageButtonInPublishedAndUnpublishedTabs();
  });
  test('Verify functionality of elements on Study Administration page: Studies and Search under Published Studies, Datasets and Biosample Collections tab, @PostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage}) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.verifyStudyAdminstrationUnPublishedStudyDropdownFunctionality();
    await studyAdministrationPage.verifyStudyAdminstrationPublishedSearchFunctionality("AUTOSTUDY"); 
  });
  test('Verify Add Study functionality with "Save as Draft": Validate pop up and available same study under Show Draft dorpdown, @PostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage,addStudyPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyPage();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName,primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
  });
  test('Verify Add Study functionality with "Submit to Catalogue": Validate pop up and available same study under Show Submitted dropdown, @PostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage ,addStudyPage}) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSubmitToCatalogue(studyName,primaryInvistigatorName,primaryInvistigatorEmail,"India","Automation");
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySubmitToCatalogueStudy(studyName);
    
  });
  test('Verify all fields are correctly populated with with respect to entered values like name, email, primary investigator/city country name etc, @PostLoginStudyDetails', async ({ studyDetailsPage,studyAdministrationPage, addStudyPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyPage();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName,primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    
  });
  test('Verify Edit Study functionality(Manage) with Save as Draft and verify all fields are correctly populated with with respect to updated values, @PostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage,addStudyPage}) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyPage();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName,primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickEditStudyBtn();
    await addStudyPage.editSaveAsDraftStudy(studyName+"Updated",primaryInvistigatorName);
    await studyAdministrationPage.verifyUpdatedSyudyAfterEdit(studyName+"Updated");  
  });
  test('Verify Edit Study functionality(Manage) with Cancel button and verify no changes should get updated, @PostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage,addStudyPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyPage();
    await addStudyPage.verifyAddNewStudyAndSaveAsDraft(studyName,primaryInvistigatorName);
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySavedDraftInPendingChangsTab(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickEditStudyBtn();
    await addStudyPage.editAndCancelStudy(studyName+"Updated");
    await studyAdministrationPage.verifyUpdatedSyudyAfterEdit(studyName+"Updated");
    
  });
  test('Verify Contact Owner link functionality and verify both the checkboxes can be selected with "contact" button functionality available on Pop up, @PostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.selectOnlyDraft();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyContactOwnerLinkFunctionality();
  });
  test('Verify Delete button functionality and verify the text and "Go back" and "Delete" button functionality available on Pop up, @PostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.selectOnlyDraft();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyGoBackAndDeletekFunctionality();
  });
  test('Verify Discard button functionality and verify text can be entered into textbox and "Cancel" and "Send Message" functionalities  available on Pop up(partial), @PostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.selectOnlyDraft();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyDiscardBtnFunctionality();
  });
  test('Verify Manage Datasets button link functionality and verify all the elements are visible properly., @PostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.selectOnlyDraft();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyManageDataSetsLinkAndElementsFunctionlaity();
  });
  test('Verify Manage Biosample Collections button link functionality and verify all the elements are visible properly., @PostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.selectOnlyDraft();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyBioSampleCollectionLinkAndElementsFunctionlaity();
  });
  test('Verify approval of submitted study, @CatalogueAdminPostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage,addStudyPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    var firstStudyName=await studyAdministrationPage.getFirstRecordName();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyApproveBtnFunctionality();
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifyApprovedStudy(firstStudyName,"Bot Grip");
  });
  test('Verify availability of published study under "Published Studies, Datasets and Biosample Collections", @CatalogueAdminPostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.verifyStudyAdminstrationPublishedStudyDropdownFunctionality();
  });
  test('Verify rejection of submitted study, @CatalogueAdminPostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyRejectBtnFunctionality();
  });
  test('Verify Delete button functionality and verify the text and "Go back" and "Delete" button functionality available on Pop up as Catalouge Admin, @CatalogueAdminPostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.verifyGoBackAndDeletekFunctionality();
  });
  test('Verify edit functionality of of submitted study, @CatalogueAdminPostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage, addStudyPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.clickFirstRecordManageButtonForPublished();
    await studyAdministrationPage.clickEditStudyBtn();
    await addStudyPage.editAndSaveStudy("Updated");
    await studyAdministrationPage.verifyUpdatedSyudyAfterEdit("Updated");
  });
  test('Verify cancel functionality on Edit Study page, @CatalogueAdminPostLoginStudyDetails', async ({ studyDetailsPage, studyAdministrationPage,addStudyPage }) => {
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink();
    await studyAdministrationPage.clickFirstRecordManageButtonForUnPublished();
    await studyAdministrationPage.clickEditStudyBtn();
    await addStudyPage.editAndCancelStudy("Updated");
    await studyAdministrationPage.verifyUpdatedSyudyAfterCancelByEdit("Updated");
  });
});













