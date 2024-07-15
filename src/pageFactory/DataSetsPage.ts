import { Locator, Page, BrowserContext } from '@playwright/test';
import { expect } from '../lib/BaseTest';

export class DataSetsPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly editDataSetBtn: Locator;
    readonly allTypesForBothDropDown: Locator;
    readonly showDropDown: Locator;
    readonly searchForBothTxt: Locator;
    readonly nameColumn: Locator;
    readonly stateColumn: Locator;
    readonly lastUpdatedColumn: Locator;
    readonly submittedByColumn: Locator;
    readonly commonNameTxt: Locator
    readonly primaryInvistgatorName: Locator
    readonly saveAsDraftBtn: Locator
    readonly studySavedAsDraftSuccessMsg: Locator
    readonly backToAdminstrationBtn: Locator;
    readonly descriptionTxt: Locator;
    readonly primaryInvistgatorEmail: Locator
    readonly addBtnForPrimaryInvistgator: Locator;
    readonly submitToCatalogueBtn: Locator;
    readonly startYear: Locator;
    readonly statusOnGoingRadioBtn: Locator;
    readonly siteSingleSiteRadioBtn: Locator;
    readonly countriesDropDown: Locator;
    readonly birthSexDropDown: Locator;
    readonly maleOption: Locator;
    readonly femaleOption: Locator;
    readonly citiesTxt: Locator;
    readonly keyWordsTxt: Locator;
    readonly numberOfSubjects: Locator;
    readonly dataSetHeaderName: Locator;
    readonly donorCountTxt: Locator;
    readonly privacyAgreementChkBox: Locator;
    readonly disclosureChkBox: Locator;
    readonly cancelBtn: Locator;
    readonly contactOwnerBtn: Locator;
    readonly contactOwnerPopUpHeader: Locator;
    readonly contactPopUpHeader: Locator;
    readonly contactPopUpCancelBtn: Locator;
    readonly contactPopUpSendMesssagelBtn: Locator;
    readonly contactPopUpMessageTxt: Locator;
    readonly contactOwnerConfirmationMsgHeader: Locator;
    readonly saveBtn:Locator;
    dataSetStrings: String;
    readonly commonLink: Locator;
    readonly summaryLink: Locator;
    readonly useConditionsAndRestrictionsLink: Locator;
    readonly relatedPublicationsLink: Locator;
    readonly noDataSetsTxtMsg: Locator;
    readonly backBtn: Locator;
    readonly overviewLink: Locator;
    readonly acronymTxt: Locator;
    readonly fundingSourcesTxt: Locator;
    readonly ageCoverageTxt: Locator;
    readonly temporalCoverageTxt: Locator;
    readonly typesDropdown: Locator;
    readonly dataAccessReviewersAddContactBtn: Locator;
    readonly dataAccessReviewerName: Locator;
    readonly dataAccessReviewerEmail: Locator;
    readonly dataAccessReviewerOrg: Locator;
    readonly dataAccessReviewerSubmitButton: Locator;
    readonly requestAccessFromDropDown: Locator;
    readonly dataUploadIDTxt: Locator;


    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.editDataSetBtn = page.getByTestId("edit-entity-link");
        this.allTypesForBothDropDown = page.getByTestId("filterPendingEntity");
        this.showDropDown = page.getByTestId("filterEntitySubState");
        this.searchForBothTxt = page.getByTestId("filter-search-input");
        this.contactOwnerBtn =page.locator("//a[text()='Contact Admin']");
        this.nameColumn =page.locator("//tr[@data-testid='table-header']/th[1]");
        this.stateColumn =page.locator("//tr[@data-testid='table-header']/th[2]");
        this.lastUpdatedColumn =page.locator("//tr[@data-testid='table-header']/th[3]");
        this.submittedByColumn =page.locator("//tr[@data-testid='table-header']/th[4]");
        this.commonNameTxt = page.locator("#name");
        this.primaryInvistgatorName = page.locator("//input[@form='form_primaryInvestigators'][@id='name']");
        this.saveAsDraftBtn = page.getByTestId("save-draft-button");
        this.studySavedAsDraftSuccessMsg = page.getByAltText("Your study has been saved as draft");
        this.backToAdminstrationBtn = page.locator("//a[text()='Back to Administration']");
        this.descriptionTxt = page.locator("#description");
        this.primaryInvistgatorEmail=page.locator("#email");
        this.addBtnForPrimaryInvistgator =page.getByTestId("form_primaryInvestigators");
        this.submitToCatalogueBtn = page.getByTestId("submit-button");
        this.startYear=page.locator("#start");
        this.statusOnGoingRadioBtn =page.locator("#stillGrowing_Ongoing");
        this.siteSingleSiteRadioBtn =page.locator("#composition_Single-site");
        this.countriesDropDown=page.locator("//input[@aria-label='countries']");
        this.birthSexDropDown=page.locator("//input[@aria-label='birthSexCoverage']");
        this.maleOption =page.locator("#Male");
        this.femaleOption =page.locator("#Female");
        this.citiesTxt = page.locator("#cities");
        this.keyWordsTxt= page.locator("//input[@aria-label='keywords']");
        this.numberOfSubjects =page.locator("#numberOfSubjects");
        this.dataSetHeaderName=page.getByTestId("entity-name-heading");
        this.donorCountTxt=page.locator("#donorCount");
        this.privacyAgreementChkBox=page.locator("#privacyAgreement");
        this.disclosureChkBox=page.locator("#disclosure");
        this.cancelBtn=page.getByTestId("cancel-link");
        this.contactOwnerPopUpHeader=page.getByText("I would like to contact");
        this.contactPopUpHeader=page.getByText("Contact Study Owner");
        this.contactPopUpCancelBtn=page.getByText("Cancel");
        this.contactPopUpSendMesssagelBtn=page.getByText("Send Message");
        this.contactPopUpMessageTxt=page.getByPlaceholder("Message");
        this.contactOwnerConfirmationMsgHeader=page.getByText("Your message was sent");
        this.saveBtn=page.getByTestId("save-button");
        this.dataSetStrings="//div[contains(@class,'w-full grid gap')]//span[text()='xxx']";
        this.commonLink = page.locator("//a[contains(@href,'common')]");
        this.summaryLink = page.locator("//a[contains(@href,'summary')]");
        this.useConditionsAndRestrictionsLink=page.getByText("Use Conditions and Restrictions");
        this.relatedPublicationsLink=page.getByText("Related Publications");
        this.noDataSetsTxtMsg=page.getByText("No Datasets yet");
        this.backBtn=page.locator("//span[text()='Back']");
        this.overviewLink = page.locator("//a[contains(@href,'overview')]");
        this.acronymTxt = page.locator("#acronym");
        this.fundingSourcesTxt = page.locator("#fundingSources");
        this.ageCoverageTxt = page.locator("#ageCoverage");
        this.temporalCoverageTxt = page.locator("#datasetTemporalCoverage");
        this.typesDropdown = page.locator("//input[@aria-label='datasetType']");
        this.dataAccessReviewersAddContactBtn=page.locator("#dataAccessReviewers_inputWrapper button");
        this.dataAccessReviewerName = page.locator("//input[@form='form_dataAccessReviewers'][@id='name']");
        this.dataAccessReviewerEmail = page.locator("//input[@form='form_dataAccessReviewers'][@id='email']");
        this.dataAccessReviewerOrg = page.locator("//input[@form='form_dataAccessReviewers'][@id='organization']");
        this.dataAccessReviewerSubmitButton=page.getByTestId("form_dataAccessReviewers");
        this.requestAccessFromDropDown=page.locator("#darRequestForm");
        this.dataUploadIDTxt=page.locator("#dataLink");
    }
    
    async verifyAddNewDataSetAndSaveAsDraft(name:string,PI:string,email:string) {
        await this.commonNameTxt.first().fill(name);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.primaryInvistgatorName.scrollIntoViewIfNeeded();
        await this.descriptionTxt.first().fill("Automation Description");
        await this.primaryInvistgatorName.scrollIntoViewIfNeeded();
        await this.primaryInvistgatorName.fill(PI);
        await this.primaryInvistgatorEmail.fill(email);
        await this.addBtnForPrimaryInvistgator.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.saveAsDraftBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.dataSetHeaderName.scrollIntoViewIfNeeded();
        expect(await this.dataSetHeaderName).toBeVisible();
    }
    async verifyAddedDataForSaveAndDraft(name:string,PI:string,email:string) {
        expect(await this.dataSetHeaderName.textContent()).toBe(name);
        expect(await this.page.locator(this.dataSetStrings.replace("xxx",PI))).toBeVisible();
        expect(await this.page.locator(this.dataSetStrings.replace("xxx","Automation Description"))).toBeVisible();
    }
    async verifyAddNewDataSetAndSubmitToCatalogue(name:string,PI:string,email:string,country:string,keyword:string,gender:string) {
        if(this.page.url().includes("actc")){
            await this.commonNameTxt.first().fill(name);
            await this.descriptionTxt.first().fill("Automation Description");
            await this.primaryInvistgatorName.scrollIntoViewIfNeeded();
            await this.primaryInvistgatorName.fill(PI);
            await this.primaryInvistgatorEmail.fill(email);
            await this.addBtnForPrimaryInvistgator.scrollIntoViewIfNeeded();
            await this.addBtnForPrimaryInvistgator.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.acronymTxt.fill("AutomationAcronym");
            await this.fundingSourcesTxt.fill("ACTC Sources");
            await this.keyWordsTxt.scrollIntoViewIfNeeded();
            await this.keyWordsTxt.fill(keyword);
            await this.page.keyboard.press("Enter");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.page.keyboard.press("Escape");
            await this.numberOfSubjects.scrollIntoViewIfNeeded();
            await this.numberOfSubjects.fill("2");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.birthSexDropDown.fill(gender);
            await this.maleOption.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.ageCoverageTxt.fill("80");
            await this.temporalCoverageTxt.fill("50");
            await this.typesDropdown.fill("Clinical");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.page.keyboard.press("Enter");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.page.keyboard.press("Escape");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.submitToCatalogueBtn.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.dataSetHeaderName.scrollIntoViewIfNeeded();
            expect(await this.dataSetHeaderName).toBeVisible();
        }
        else{
            await this.commonNameTxt.first().fill(name);
            await this.descriptionTxt.first().fill("Automation Description");
            await this.primaryInvistgatorName.scrollIntoViewIfNeeded();
            await this.primaryInvistgatorName.fill(PI);
            await this.primaryInvistgatorEmail.fill(email);
            await this.addBtnForPrimaryInvistgator.scrollIntoViewIfNeeded();
            await this.addBtnForPrimaryInvistgator.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.countriesDropDown.scrollIntoViewIfNeeded();
            await this.countriesDropDown.fill(country);
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.page.keyboard.press("Enter");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.page.keyboard.press("Escape");
            await this.keyWordsTxt.scrollIntoViewIfNeeded();
            await this.keyWordsTxt.fill(keyword);
            await this.page.keyboard.press("Enter");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.page.keyboard.press("Escape");
            await this.numberOfSubjects.scrollIntoViewIfNeeded();
            await this.numberOfSubjects.fill("2");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.birthSexDropDown.fill(gender);
            await this.maleOption.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.submitToCatalogueBtn.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.dataSetHeaderName.scrollIntoViewIfNeeded();
            expect(await this.dataSetHeaderName).toBeVisible();
        }
    }
    async verifyAddedDataForSubmitToCatalogue(name:string,PI:string,email:string) {
        expect(await this.dataSetHeaderName.textContent()).toBe(name);
        expect(await this.page.locator(this.dataSetStrings.replace("xxx",PI))).toBeVisible();
        expect(await this.page.locator(this.dataSetStrings.replace("xxx","Automation Description"))).toBeVisible();
    }
    async editSubmitToCatalogueDataSet(updatedName:string) {
        await this.commonNameTxt.first().fill(updatedName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.submitToCatalogueBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.dataSetHeaderName.textContent()).toContain(updatedName);
    }
    async editSaveAsDraftDataSet(updatedName:string) {
        await this.commonNameTxt.first().fill(updatedName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.saveAsDraftBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.dataSetHeaderName.textContent()).toContain(updatedName);
    }
    async editAndCancelDataSet(updatedName:string) {
        await this.commonNameTxt.first().fill(updatedName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.cancelBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async editAndSaveDataSet(updatedName:string) {
        await this.commonNameTxt.first().fill(updatedName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.saveBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async noDataSetsTextVisiblity() {
        expect(await this.noDataSetsTxtMsg).toBeVisible();
    }
    async dataSetBackFunctionality() {
        expect(await this.backBtn).toBeVisible();
        await this.backBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.dataSetHeaderName).toBeVisible();
    }
    async verifyLinksVisiblityForAddDataSetsToStudyUnderStudyOverview() {
        if(this.page.url().includes("actc")){
            expect(await this.overviewLink).toBeVisible();
        }
        else{
            expect(await this.commonLink).toBeVisible();
        }
        expect(await this.summaryLink).toBeVisible();
        expect(await this.useConditionsAndRestrictionsLink.first()).toBeVisible();
        expect(await this.relatedPublicationsLink.first()).toBeVisible();
    }
    async verifyCommonLinkForDataSets() {
        if(this.page.url().includes("actc")){
            await this.overviewLink.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.page.url()).toContain("overview");
        }
        else{
            await this.commonLink.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.page.url()).toContain("common");
        }
    }
    async verifySummaryLinkForDataSets() {
        await this.summaryLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.url()).toContain("summary");
    }
    async verifyUseConditionsAndRestrictionsLinkForDataSets() {
        await this.useConditionsAndRestrictionsLink.first().click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.url()).toContain("use_conditions_and_restrictions");
    }
    async verifyRelatedPublicationsLinkForDataSets() {
        await this.relatedPublicationsLink.first().click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.url()).toContain("related_publications");
    }
    async verifyAddDataSetsColumnsAvalability() {
        expect(await this.nameColumn).toBeVisible();
        expect(await this.stateColumn).toBeVisible();
        expect(await this.lastUpdatedColumn).toBeVisible();
        expect(await this.submittedByColumn).toBeVisible();
    }
    async clickEditDataSet() {
        await this.editDataSetBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async addDataSetAlongWithDataAccessRequest(name:string,PI:string,email:string,accessReviewerName:string,keyword:string) {
        await this.commonNameTxt.first().fill(name);
            await this.descriptionTxt.first().fill("Automation Description");
            await this.primaryInvistgatorName.scrollIntoViewIfNeeded();
            await this.primaryInvistgatorName.fill(PI);
            await this.primaryInvistgatorEmail.fill(email);
            await this.addBtnForPrimaryInvistgator.scrollIntoViewIfNeeded();
            await this.addBtnForPrimaryInvistgator.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.acronymTxt.fill("AutomationAcronym");
            await this.dataAccessReviewersAddContactBtn.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.dataAccessReviewerName.fill(accessReviewerName);
            await this.dataAccessReviewerEmail.fill("ubot@gvgrip.tech");
            await this.dataAccessReviewerOrg.fill("iLink");
            await this.dataAccessReviewerSubmitButton.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.fundingSourcesTxt.fill("ACTC Sources");
            await this.keyWordsTxt.scrollIntoViewIfNeeded();
            await this.keyWordsTxt.fill(keyword);
            await this.page.keyboard.press("Enter");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.page.keyboard.press("Escape");
            await this.numberOfSubjects.fill("2");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.birthSexDropDown.fill("Male");
            await this.maleOption.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.ageCoverageTxt.fill("80");
            await this.temporalCoverageTxt.fill("50");
            await this.typesDropdown.fill("Clinical");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.page.keyboard.press("Enter");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.page.keyboard.press("Escape");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.requestAccessFromDropDown.selectOption("Data Access Request Template");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.dataUploadIDTxt.fill("0f4b4020-4e7b-4dc1-bd90-a9d586a5d51f");
            await this.page.waitForTimeout(2000);
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.submitToCatalogueBtn.click();
            await this.page.waitForTimeout(6000);
            if(await this.submitToCatalogueBtn.isVisible()){
                await this.submitToCatalogueBtn.click();
                await this.page.waitForLoadState("networkidle",{timeout:10000});
            }
            await this.dataSetHeaderName.scrollIntoViewIfNeeded();
            expect(await this.dataSetHeaderName).toBeVisible();         
    }
}