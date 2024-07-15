import { Locator, Page, BrowserContext } from '@playwright/test';
import  ENV  from '../lib/env';
import { expect } from '../lib/BaseTest';

export class StudyAdministrationPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly addStudyBtn: Locator;
    readonly pendingChangesTab: Locator;
    readonly publishedStudiesTab: Locator;
    readonly allTypesForBothDropDown: Locator;
    readonly showDropDown: Locator;
    readonly searchForBothTxt: Locator;
    readonly nameColumn: Locator;
    readonly typeColumn: Locator;
    readonly unPublishedPrimaryInvistigatorColumn: Locator;
    readonly unPublishedLastModifiedColumn: Locator;
    readonly unPublishedNameModifiedByColumn: Locator;
    readonly unPublishedStatusColumn: Locator;
    readonly publishedPublishedColumn: Locator;
    readonly publishedApprovedByColumn: Locator;
    readonly contactAdminBtn: Locator;
    readonly editStudyBtn:Locator;
    readonly manageDataSetBtn:Locator;
    readonly manageBioSampleBtn:Locator;
    readonly deleteStudyBtn:Locator;
    readonly discardBtn:Locator;
    readonly contactBtn: Locator;
    readonly manageBtn: Locator;
    readonly studiesType: Locator;
    searchResultString: String;
    readonly firstRecordName: Locator;
    readonly firstRecordStatus: Locator;
    readonly updatedStudyNameheader: Locator;
    readonly contactOwnerBtn: Locator;
    readonly privacyAgreementChkBox: Locator;
    readonly disclosureChkBox: Locator;
    readonly cancelBtn: Locator;
    readonly contactOwnerPopUpHeader: Locator;
    readonly contactPopUpHeader: Locator;
    readonly contactPopUpCancelBtn: Locator;
    readonly contactPopUpSendMesssagelBtn: Locator;
    readonly contactPopUpMessageTxt: Locator;
    readonly contactOwnerConfirmationMsgHeader: Locator;
    readonly goBackBtn: Locator;
    readonly deleteBtnInsideDeletePopUp:Locator;
    readonly deletePopUpHeader:Locator;
    readonly discardPopUpHeader: Locator;
    readonly dataSetsTab: Locator;
    readonly bioSampleCollectionstab: Locator;
    readonly approveBtn: Locator;
    readonly rejectBtn: Locator;
    readonly successfullyApprovedHeader: Locator;
    readonly approvedByName: Locator;
    readonly addDatasetsLink: Locator;
    readonly addBioSampleCollectionBtn: Locator;

    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.addStudyBtn=page.getByTestId("add-study-link");
        this.pendingChangesTab = page.locator("//div[@data-testid='pending-entities-tab']");
        this.publishedStudiesTab = page.getByTestId("published-entities-tab");
        this.allTypesForBothDropDown = page.getByTestId("filterPendingEntity");
        this.showDropDown = page.getByTestId("filterEntitySubState");
        this.searchForBothTxt = page.getByTestId("filter-search-input");
        this.contactAdminBtn =page.locator("//a[text()='Contact Admin']");
        this.nameColumn =page.locator("//tr[@data-testid='table-header']/th[1]");
        this.typeColumn =page.locator("//tr[@data-testid='table-header']/th[2]");
        this.unPublishedPrimaryInvistigatorColumn =page.locator("//tr[@data-testid='table-header']/th[3]");
        this.unPublishedLastModifiedColumn =page.locator("//tr[@data-testid='table-header']/th[4]");
        this.unPublishedNameModifiedByColumn =page.locator("//tr[@data-testid='table-header']/th[5]");
        this.unPublishedStatusColumn =page.locator("//tr[@data-testid='table-header']/th[6]");
        this.publishedPublishedColumn =page.locator("//tr[@data-testid='table-header']/th[4]");
        this.publishedApprovedByColumn =page.locator("//tr[@data-testid='table-header']/th[5]");
        this.editStudyBtn=page.getByTestId("edit-entity-link");
        this.manageDataSetBtn=page.getByTestId("manage-datasets-link");
        this.manageBioSampleBtn=page.getByTestId("manage-biosample-collections-link");
        this.deleteStudyBtn=page.getByTestId("delete-entity-button");
        this.discardBtn=page.getByTestId("discard-entity-button");
        this.contactBtn=page.locator("//button[text()='Contact']");
        this.manageBtn=page.getByRole("link", {name: "Manage"});
        this.studiesType=page.locator("//table[@class='w-full mb-4']//tr/td[2]/span");
        this.searchResultString="//a[contains(text(),'xxx')]";
        this.firstRecordName=page.locator("//table//tbody/tr[1]/td[1]//a");
        this.firstRecordStatus=page.locator("//table//tbody/tr[1]/td[6]//span");
        this.updatedStudyNameheader=page.getByTestId("entity-name-heading");
        this.contactOwnerBtn=page.getByTestId("contact-owner-button");
        this.privacyAgreementChkBox=page.locator("#privacyAgreement");
        this.disclosureChkBox=page.locator("#disclosure");
        this.cancelBtn=page.getByTestId("cancel-link");
        this.contactOwnerPopUpHeader=page.getByText("I would like to contact");
        this.contactPopUpHeader=page.getByText("Contact Study Owner");
        this.contactPopUpCancelBtn=page.getByText("Cancel");
        this.contactPopUpSendMesssagelBtn=page.getByText("Send Message");
        this.contactPopUpMessageTxt=page.getByPlaceholder("Message");
        this.contactOwnerConfirmationMsgHeader=page.getByText("Your message was sent");
        this.goBackBtn=page.getByText("Go back");
        this.deleteBtnInsideDeletePopUp=page.getByText("Delete").last();
        this.deletePopUpHeader=page.locator("//h1[contains(text(),'Do you want ')]");
        this.discardPopUpHeader=page.locator("//div[@class='font-headline'][text()='Summary']");
        this.dataSetsTab=page.getByText("Datasets");
        this.bioSampleCollectionstab=page.getByText("Biosample Collections")
        this.approveBtn=page.getByTestId("approve-entity-button");
        this.rejectBtn=page.getByTestId("reject-entity-button");
        this.successfullyApprovedHeader=page.locator("//h2");
        this.approvedByName=page.locator("//table//tbody/tr[1]/td[5]//span");
        this.addDatasetsLink=page.getByTestId("add-dataset-link");
        this.addBioSampleCollectionBtn = page.getByTestId("add-biosample-link");

    }
    async verifyStudyAdminstrationElementsAvalability() {
        expect(await this.addStudyBtn).toBeVisible();
        expect(await this.pendingChangesTab).toBeVisible();
        expect(await this.publishedStudiesTab).toBeVisible();
        expect(await this.allTypesForBothDropDown).toBeVisible();
        expect(await this.showDropDown).toBeVisible();
        expect(await this.searchForBothTxt).toBeVisible();
        await this.publishedStudiesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.allTypesForBothDropDown).toBeVisible();
        expect(await this.searchForBothTxt).toBeVisible();
    }
    async verifyStudyAdminstrationUnPublishedElementsAvalability() {
        expect(await this.allTypesForBothDropDown).toBeVisible();
        expect(await this.showDropDown).toBeVisible();
        expect(await this.searchForBothTxt).toBeVisible();
        expect(await this.allTypesForBothDropDown).toBeVisible();
        expect(await this.searchForBothTxt).toBeVisible();
    }
    async verifyStudyAdminstrationUnPublishedColumnsAvalability() {
        expect(await this.nameColumn).toBeVisible();
        expect(await this.typeColumn).toBeVisible();
        expect(await this.unPublishedPrimaryInvistigatorColumn).toBeVisible();
        expect(await this.unPublishedLastModifiedColumn).toBeVisible();
        expect(await this.unPublishedNameModifiedByColumn).toBeVisible();
        expect(await this.unPublishedStatusColumn).toBeVisible();
    }
    async verifyStudyAdminstrationPublishedColumnsAvalability() {
        await this.publishedStudiesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.nameColumn).toBeVisible();
        expect(await this.typeColumn).toBeVisible();
        expect(await this.unPublishedPrimaryInvistigatorColumn).toBeVisible();
        expect(await this.publishedPublishedColumn).toBeVisible();
        expect(await this.publishedApprovedByColumn).toBeVisible();
    }
    async verifyManageButtonInPublishedAndUnpublishedTabs() {
        expect(await this.manageBtn.first()).toBeVisible();
        await this.publishedStudiesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.manageBtn.first()).toBeVisible();
    }
    async verifyStudyAdminstrationUnPublishedStudyDropdownFunctionality() {
        await this.pendingChangesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.allTypesForBothDropDown.selectOption("Studies");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        for(let i=0;i<await this.studiesType.count();i++){
            expect(await this.studiesType.nth(i).textContent()).toBe("Study");
        }
        await this.allTypesForBothDropDown.selectOption("Datasets");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        for(let i=0;i<await this.studiesType.count();i++){
            expect(await this.studiesType.nth(i).textContent()).toBe("Dataset");
        }
        await this.allTypesForBothDropDown.selectOption("Biosample Collections");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        for(let i=0;i<await this.studiesType.count();i++){
            expect(await this.studiesType.nth(i).textContent()).toBe("Biosample Collection");
        }
        await this.page.reload();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyStudyAdminstrationPublishedSearchFunctionality(searchValue:string) {
        await this.publishedStudiesTab.click();
        await this.searchForBothTxt.fill(searchValue);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.locator(this.searchResultString.replace("xxx",searchValue)).first()).toBeVisible();
    }
    async clickAddStudyButton() {
        await this.addStudyBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifySavedDraftInPendingChangsTab(name:string) {
        await this.pendingChangesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.showDropDown.selectOption("Show: Drafts");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.searchForBothTxt.fill(name);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.firstRecordName.textContent()).toBe(name);
        expect(await this.firstRecordStatus.textContent()).toBe("Draft creation");
    }
    async verifySubmitToCatalogueStudy(name:string) {
        await this.publishedStudiesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.searchForBothTxt.fill(name);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.firstRecordName.textContent()).toBe(name);
    }
    async clickOnMangeToEditSavedDraftInPendingChangsTab(name:string) {
        await this.pendingChangesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.showDropDown.selectOption("Show: Drafts");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.searchForBothTxt.fill(name);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.manageBtn.first().click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.editStudyBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});   
    }
    async verifyUpdatedSyudyAfterEdit(name:string) {
        expect(await this.updatedStudyNameheader.textContent()).toContain(name);   
    }
    async verifyUpdatedSyudyAfterCancelByEdit(name:string) {
        expect(await this.updatedStudyNameheader.textContent()).not.toContain(name);   
    }
    async verifyContactOwnerLinkFunctionality() {
        if(!this.page.url().includes("actc")){
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.contactOwnerBtn.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.contactOwnerPopUpHeader).toBeVisible();
            await this.privacyAgreementChkBox.click();
            await this.disclosureChkBox.click();
            await this.contactBtn.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(this.contactPopUpCancelBtn).toBeVisible();
            expect(this.contactPopUpSendMesssagelBtn).toBeVisible();
            expect(this.contactPopUpMessageTxt).toBeVisible();
            await this.contactPopUpMessageTxt.fill("Hi");
            await this.contactPopUpSendMesssagelBtn.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(this.contactOwnerConfirmationMsgHeader).toBeVisible();
        }        
    }
    async verifyGoBackAndDeletekFunctionality() {
        await this.deleteStudyBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.goBackBtn).toBeVisible();
        expect(await this.deleteBtnInsideDeletePopUp).toBeVisible();
        await this.goBackBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.deleteBtnInsideDeletePopUp).not.toBeVisible();
        await this.deleteStudyBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.deleteBtnInsideDeletePopUp.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(this.addStudyBtn).toBeVisible();        
    }
    async verifyDiscardBtnFunctionality() {
        await this.discardBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.discardPopUpHeader).toBeVisible();
        await this.contactPopUpCancelBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.discardPopUpHeader).not.toBeVisible();
        await this.discardBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(this.contactPopUpSendMesssagelBtn).toBeVisible();
        expect(this.contactPopUpMessageTxt).toBeVisible();
        await this.contactPopUpMessageTxt.fill("Hi");
        await this.contactPopUpSendMesssagelBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(this.addStudyBtn).toBeVisible();        
    }
    async verifyManageDataSetsLinkAndElementsFunctionlaity() {
        await this.manageDataSetBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.dataSetsTab.first()).toBeVisible();
        expect(await this.nameColumn.textContent()).toBe("Name");
        expect(await this.typeColumn.textContent()).toBe("State");
        expect(await this.unPublishedPrimaryInvistigatorColumn.textContent()).toBe("Last Updated");
        expect(await this.unPublishedLastModifiedColumn.textContent()).toBe("Submitted by");
    }
    async verifyBioSampleCollectionLinkAndElementsFunctionlaity() {
        if(this.page.url().includes("actc")){
            await this.manageDataSetBtn.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
        }else{
            await this.manageBioSampleBtn.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
        }
        expect(await this.bioSampleCollectionstab.first()).toBeVisible();
        expect(await this.nameColumn.textContent()).toBe("Name");
        expect(await this.typeColumn.textContent()).toBe("State");
        expect(await this.unPublishedPrimaryInvistigatorColumn.textContent()).toBe("Last Updated");
        expect(await this.unPublishedLastModifiedColumn.textContent()).toBe("Submitted by");
    }
    async clickFirstRecordManageButtonForPublished() {
        await this.publishedStudiesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.manageBtn.first().click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async clickFirstRecordManageButtonForUnPublished() {
        await this.pendingChangesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.manageBtn.first().click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async selectOnlyDraft() {
        await this.pendingChangesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.showDropDown.selectOption("Show: Drafts");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async selectOnlySubmitted() {
        await this.pendingChangesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.showDropDown.selectOption("Show: Submitted");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyApproveBtnFunctionality() {
        await this.approveBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.discardPopUpHeader).toBeVisible();
        await this.contactPopUpCancelBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.discardPopUpHeader).not.toBeVisible();
        await this.approveBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(this.contactPopUpSendMesssagelBtn).toBeVisible();
        expect(this.contactPopUpMessageTxt).toBeVisible();
        await this.contactPopUpMessageTxt.fill("Approved");
        await this.contactPopUpSendMesssagelBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(this.successfullyApprovedHeader).toBeVisible();        
    }
    async verifyRejectBtnFunctionality() {
        await this.rejectBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.discardPopUpHeader).toBeVisible();
        await this.contactPopUpCancelBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.discardPopUpHeader).not.toBeVisible();
        await this.rejectBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(this.contactPopUpSendMesssagelBtn).toBeVisible();
        expect(this.contactPopUpMessageTxt).toBeVisible();
        await this.contactPopUpMessageTxt.fill("Rejected");
        await this.contactPopUpSendMesssagelBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(this.addStudyBtn).toBeVisible();        
    }
    async verifyStudyAdminstrationPublishedStudyDropdownFunctionality() {
        await this.publishedStudiesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.allTypesForBothDropDown.selectOption("Studies");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        for(let i=0;i<await this.studiesType.count();i++){
            expect(await this.studiesType.nth(i).textContent()).toBe("Study");
        }
        await this.allTypesForBothDropDown.selectOption("Datasets");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        for(let i=0;i<await this.studiesType.count();i++){
            expect(await this.studiesType.nth(i).textContent()).toBe("Dataset");
        }
        await this.allTypesForBothDropDown.selectOption("Biosample Collections");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        for(let i=0;i<await this.studiesType.count();i++){
            expect(await this.studiesType.nth(i).textContent()).toBe("Biosample Collection");
        }
        await this.page.reload();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    
    async getFirstRecordName() {
        return await this.firstRecordName.textContent();
    }
    async clickEditStudyBtn() {
        await this.editStudyBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyApprovedStudy(name:string,approverName:string) {
        await this.publishedStudiesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.searchForBothTxt.fill(name);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.approvedByName.textContent()).toBe(approverName);
    }
    async verifySaveAsDraftDataSet(dataSetName:string) {
        await this.pendingChangesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.showDropDown.selectOption("Show: Drafts");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.searchForBothTxt.fill(dataSetName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.firstRecordName.textContent()).toBe(dataSetName);
        expect(await this.firstRecordStatus.textContent()).toBe("Draft creation");
    }
    async verifySubmitToCatalogueDataSet(dataSetName:string) {
        await this.pendingChangesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.showDropDown.selectOption("Show: Submitted");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.searchForBothTxt.fill(dataSetName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.firstRecordName.textContent()).toBe(dataSetName);
        expect(await this.firstRecordStatus.textContent()).toBe("Creation submitted");
    }
    async clickManageDataSets() {
        await this.manageDataSetBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.dataSetsTab.first()).toBeVisible();
    }
    async clickManageBioSampleCollection() {
        await this.manageBioSampleBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.dataSetsTab.first()).toBeVisible();
    }
    async clickAddDataSets() {
        await this.addDatasetsLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async clickAddBioSampleCollectionLink() {
        await this.addBioSampleCollectionBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async clickAddBioSampleCollection() {
        await this.bioSampleCollectionstab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async selectOnlyType(studyType:string) {
        await this.pendingChangesTab.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.allTypesForBothDropDown.selectOption(studyType);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async clickOnEditSavedDraftStudy() {
        await this.editStudyBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});   
    }
}