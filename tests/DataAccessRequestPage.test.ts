import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";
import {faker} from "@faker-js/faker";

test.describe('Data Sets Page Test Cases', async () => {
  let projentName:any;
  let projectDes:any;
  let proposedAnalysisTxt:any;
  let studyName:any;
  let primaryInvistigatorName:any;
  let primaryInvistigatorEmail:any;
  let dataSetAccessReviewerName:any;
  let dataSetName:any;
  test.beforeEach(async ({ loginPage,studyDetailsPage,studyAdministrationPage,addStudyPage,dataSetsPage,landingPage,dataAccessRequestPage }) => {
    projentName=faker.internet.userName({ firstName: 'AUTOPRONAME' });
    projectDes=faker.internet.email({ firstName: 'AUTOPRODES' });
    proposedAnalysisTxt=faker.internet.userName({ firstName: 'AUTOPROANA' });
    studyName=faker.internet.userName({ firstName: 'AUTOST',lastName:'STD' });
    primaryInvistigatorName=faker.internet.userName({ firstName: 'AUTOPI' });
    primaryInvistigatorEmail=faker.internet.email({ firstName: 'AUTOPI' });
    dataSetAccessReviewerName=faker.internet.email({ firstName: 'AUTODSREVIEWER' });
    dataSetName=faker.internet.userName({ firstName: 'AUTODATA',lastName:'SET' });
    await loginPage.login(ENV.emailID, ENV.pwd);
    await studyDetailsPage.verifyAndNavigateStudyAdministrationLink(); 
    await studyAdministrationPage.clickAddStudyButton();
    await addStudyPage.verifyAddNewStudyAndSubmitToCatalogue(studyName,primaryInvistigatorName,primaryInvistigatorEmail,"India","Automation");
    await addStudyPage.clickBackToAdministration();
    await studyAdministrationPage.verifySubmitToCatalogueStudy(studyName);
    await studyAdministrationPage.clickFirstRecordManageButtonForPublished();
    await studyAdministrationPage.clickManageDataSets();
    await studyAdministrationPage.clickAddDataSets();
    await dataSetsPage.addDataSetAlongWithDataAccessRequest(dataSetName,primaryInvistigatorName,primaryInvistigatorEmail,dataSetAccessReviewerName,"Automation");
    await loginPage.logout();
    await loginPage.login(ENV.uBotEmailID, ENV.uBotPwd);
    await landingPage.searchByPublishedStudyName(studyName);
    await studyDetailsPage.clickDataSets();
    await dataAccessRequestPage.clickRequestAccess();
  });
  test('Verify DAR-User Navigate to Request Access Form, @DAR', async ({ dataAccessRequestPage,loginPage,landingPage,studyDetailsPage }) => {
    await dataAccessRequestPage.verifyDataSetsAcessRequestFormTitle();
  });
  test('Verify DAR- Successfully save/Submit the Access Request Form functionality, @DAR', async ({ dataAccessRequestPage,userDashboardPage,loginPage,landingPage,studyDetailsPage}) => {
    await dataAccessRequestPage.verifySaveAsDraft(projentName,projectDes,proposedAnalysisTxt);
    await dataAccessRequestPage.clickToMyRequests();
    await userDashboardPage.clickEditBtnForDataSet();
    await dataAccessRequestPage.verifySubmitRequestDuringEdit(projentName,projectDes,proposedAnalysisTxt);

  });
  test('Verify DAR - Cancel the  Drafted DAR Request Form, @DAR', async ({ dataAccessRequestPage,userDashboardPage,landingPage ,studyDetailsPage}) => {
    await dataAccessRequestPage.verifySaveAsDraft(projentName,projectDes,proposedAnalysisTxt);
    await dataAccessRequestPage.clickToMyRequests();
    await userDashboardPage.selectOnlyDraftRequests("Show: Saved As Draft");
    await userDashboardPage.clickEditBtnForDataSet();
    await dataAccessRequestPage.clickCancelRequest();
    await dataAccessRequestPage.verifyDataSetsAcessRequestFormTitle();
  });
  test('Verify DAR - Successfully approve Submitted DAR Request Form, @DAR', async ({ dataAccessRequestPage,userDashboardPage }) => {
    await dataAccessRequestPage.verifySubmitRequest(projentName,projectDes,proposedAnalysisTxt);
    await dataAccessRequestPage.clickToMyRequests();
    await userDashboardPage.selectOnlyDraftRequests("Show: Waiting for Approval");
    await userDashboardPage.clickRequestAccessBtnForDataSet();
    await dataAccessRequestPage.clickApproveRequest();
    await dataAccessRequestPage.enterApproveReasonAndClickApprove();
    await dataAccessRequestPage.verifyDataSetsAcessRequestApprovedStatus();
  });
  test('Verify  DAR - Successfully Decline Submitted DAR Request Form , @DAR', async ({ userDashboardPage,dataAccessRequestPage }) => {
    await dataAccessRequestPage.verifySubmitRequest(projentName,projectDes,proposedAnalysisTxt);
    await dataAccessRequestPage.clickToMyRequests();
    await userDashboardPage.selectOnlyDraftRequests("Show: Waiting for Approval");
    await userDashboardPage.clickRequestAccessBtnForDataSet();
    await dataAccessRequestPage.clickDeclineRequest();
    await dataAccessRequestPage.enterDeclineReasonAndClickApprove();
    await dataAccessRequestPage.verifyDataSetsAcessRequestDeclinedStatus();
  });
});













