import { Locator, Page, BrowserContext } from '@playwright/test';
import { expect } from '../lib/BaseTest';

export class DataAccessRequestPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly requestAccessBtn: Locator;
    readonly accessRequestFormHeader: Locator;
    readonly projectNameTxt: Locator;
    readonly projectDescriptiontxt: Locator;
    readonly proposedAnalysisTxt: Locator;
    readonly dataUsageAgreementChkBox: Locator;
    readonly submitRequestBtn: Locator;
    readonly saveRequestBtn: Locator;
    readonly submittedByColumn: Locator;
    readonly commonNameTxt: Locator
    readonly primaryInvistgatorName: Locator;
    readonly saveAsDraftBtn: Locator;
    readonly editButton: Locator;
    readonly cancelButton: Locator;
    readonly saveAsDraftSuccessMsgHeader: Locator;
    readonly toUserDashBoardBtn: Locator;
    readonly toMyRequestsBtn: Locator;
    readonly requestSubmittedForReviewSuccessMsgHeader: Locator;
    readonly cancelBtn: Locator;
    readonly accessDiscardedHeader: Locator;
    readonly accessApprovedHeader: Locator;
    readonly accessDeclinedHeader: Locator;
    readonly approveAccessRequestBtn: Locator;
    readonly declineAccessRequestBtn: Locator;
    readonly approveRejectMsgTxt: Locator;
    readonly dialogApproveBtn: Locator;
    readonly dialogDeclineBtn: Locator;
        

    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.requestAccessBtn=page.getByText("Request Access").first();
        this.accessRequestFormHeader = page.locator("//h1");
        this.projectNameTxt = page.locator("#projectName");
        this.projectDescriptiontxt = page.locator("#projectDescription");
        this.proposedAnalysisTxt = page.locator("#projectProposedAnalysis");
        this.dataUsageAgreementChkBox =page.locator("#dataUsageAgreement");
        this.submitRequestBtn = page.getByTestId("submit-button");
        this.saveRequestBtn =page.getByTestId("save-request-button");
        this.cancelButton = page.getByTestId("cancel-button");
        this.editButton = page.getByTestId("edit-button");
        this.saveAsDraftSuccessMsgHeader=page.getByText("Your request has been saved as draft.");
        this.toUserDashBoardBtn =page.getByText("To User dashboard");
        this.toMyRequestsBtn =page.getByText("To my requests");
        this.requestSubmittedForReviewSuccessMsgHeader=page.getByText("Your request has been submitted for review.");
        this.cancelBtn=page.getByTestId("cancel");
        this.accessDiscardedHeader =page.getByText("Access Discarded");
        this.accessDeclinedHeader =page.getByText("Request declined.");
        this.accessApprovedHeader =page.getByText("Request successfully approved.");
        this.approveAccessRequestBtn= page.getByTestId("approve-button");
        this.declineAccessRequestBtn=page.getByTestId("decline-button");
        this.approveRejectMsgTxt=page.locator("//textarea[@name='comment']");
        this.dialogApproveBtn=page.locator("//div[@role='dialog']//button[text()='Approve']");
        this.dialogDeclineBtn=page.locator("//div[@role='dialog']//button[text()='Decline']");
        
    }
    async verifyDataSetsAcessRequestFormTitle() {
        expect(await this.accessRequestFormHeader.textContent()).toBe("Access Request Form");
    }
    async verifySaveAsDraft(projentName:string,projectDes:string,projectAnalysys:string) {
        await this.projectNameTxt.fill(projentName);
        await this.projectDescriptiontxt.fill(projectDes);
        await this.proposedAnalysisTxt.fill(projectAnalysys);
        await this.dataUsageAgreementChkBox.click();
        await this.saveRequestBtn.click();
        await this.page.waitForTimeout(5000);
        expect(await this.saveAsDraftSuccessMsgHeader).toBeVisible();
    }
    async verifySubmitRequest(projentName:string,projectDes:string,projectAnalysys:string) {
        await this.projectNameTxt.fill(projentName);
        await this.projectDescriptiontxt.fill(projectDes);
        await this.proposedAnalysisTxt.fill(projectAnalysys);
        await this.page.waitForTimeout(1000);
        await this.dataUsageAgreementChkBox.click();
        await this.page.waitForTimeout(2000);
        await this.submitRequestBtn.click();
        await this.page.waitForTimeout(6000);
        expect(await this.requestSubmittedForReviewSuccessMsgHeader).toBeVisible();
    }
    async verifySubmitRequestDuringEdit(projentName:string,projectDes:string,projectAnalysys:string) {
        await this.projectNameTxt.fill(projentName);
        await this.projectDescriptiontxt.fill(projectDes);
        await this.proposedAnalysisTxt.fill(projectAnalysys);
        await this.page.waitForTimeout(1000);
        await this.submitRequestBtn.click();
        await this.page.waitForTimeout(6000);
        expect(await this.requestSubmittedForReviewSuccessMsgHeader).toBeVisible();
    }
    async clickRequestAccess() {
        await this.requestAccessBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});              
    }
    async clickToUserDashBoard() {
        await this.toUserDashBoardBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});              
    }
    async clickToMyRequests() {
        await this.toMyRequestsBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});              
    }
    async clickCancelRequest() {
        await this.cancelButton.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});    
    }
    async clickEditRequest() {
        await this.editButton.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});    
    }
    async verifyDataSetsAcessRequestDiscardStatus() {
        expect(await this.accessDiscardedHeader).toBeVisible();
    }
    async clickApproveRequest() {
        await this.approveAccessRequestBtn.click();
        await this.page.waitForTimeout(3000);    
    }
    async clickDeclineRequest() {
        await this.declineAccessRequestBtn.click();
        await this.page.waitForTimeout(3000);    
    }
    async verifyDataSetsAcessRequestApprovedStatus() {
        expect(await this.accessApprovedHeader).toBeVisible();
    }
    async verifyDataSetsAcessRequestDeclinedStatus() {
        expect(await this.accessDeclinedHeader).toBeVisible();
    }
    async enterApproveReasonAndClickApprove() {
        await this.approveRejectMsgTxt.fill("Approving");
        await this.dialogApproveBtn.click();    
        await this.page.waitForTimeout(3000);  
    }
    async enterDeclineReasonAndClickApprove() {
        await this.approveRejectMsgTxt.fill("Declining the dataset since none of the reuiremnet swere not asccpeted");
        await this.dialogDeclineBtn.click();    
        await this.page.waitForTimeout(3000);  
    }
    
        
}