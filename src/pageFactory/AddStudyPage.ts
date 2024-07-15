import { Locator, Page, BrowserContext } from '@playwright/test';
import { expect } from '../lib/BaseTest';

export class AddStudyPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly addNewStudyHeader:Locator;
    readonly commonNameTxt: Locator
    readonly primaryInvistgatorName: Locator
    readonly saveAsDraftBtn: Locator;
    readonly submitToCatalogueBtn: Locator;
    readonly studySavedAsDraftSuccessMsg: Locator;
    readonly studySubmitToCatalogueSuccessMsg: Locator;
    readonly backToAdminstrationBtn: Locator;
    readonly descriptionTxt: Locator;
    readonly primaryInvistgatorEmail: Locator
    readonly addBtnForPrimaryInvistgator: Locator;
    readonly publishToCatalogueBtn: Locator;
    readonly startYear: Locator;
    readonly statusOnGoingRadioBtn: Locator;
    readonly siteSingleSiteRadioBtn: Locator;
    readonly countriesDropDown: Locator;
    readonly citiesTxt: Locator;
    readonly keyWordsTxt: Locator;
    readonly privacyAgreementChkBox: Locator;
    readonly disclosureChkBox: Locator;
    readonly cancelBtn: Locator;
    readonly contactOwnerPopUpHeader: Locator;
    readonly contactPopUpHeader: Locator;
    readonly contactPopUpCancelBtn: Locator;
    readonly contactPopUpSendMesssagelBtn: Locator;
    readonly contactPopUpMessageTxt: Locator;
    readonly contactOwnerConfirmationMsgHeader: Locator;
    readonly saveBtn:Locator;
    readonly acronymTxt: Locator;
    readonly fundingSourcesTxt: Locator;
    readonly ageCoverageTxt: Locator;
    readonly temporalCoverageTxt: Locator;
    readonly typesDropdown: Locator;
    readonly birthSexDropDown: Locator;
    readonly maleOption: Locator;
    readonly femaleOption: Locator;
    
    
    
    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.addNewStudyHeader= page.getByText("Add new Study");
        this.commonNameTxt = page.locator("#name");
        this.primaryInvistgatorName = page.locator("//input[@form='form_primaryInvestigators'][@id='name']");
        this.saveAsDraftBtn = page.getByTestId("save-draft-button");
        this.submitToCatalogueBtn = page.getByTestId("submit-button");
        this.studySavedAsDraftSuccessMsg = page.getByText("Your study has been saved as draft");
        this.studySubmitToCatalogueSuccessMsg = page.getByText("Your study has been published to the catalogue.");
        this.backToAdminstrationBtn = page.locator("//a[text()='Back to Administration']");
        this.descriptionTxt = page.locator("#description");
        this.primaryInvistgatorEmail=page.locator("#email");
        this.addBtnForPrimaryInvistgator =page.getByTestId("form_primaryInvestigators");
        this.publishToCatalogueBtn = page.getByTestId("submit-button");
        this.startYear=page.locator("#start");
        this.statusOnGoingRadioBtn =page.locator("#stillGrowing_Ongoing");
        this.siteSingleSiteRadioBtn =page.locator("#composition_Single-site");
        this.countriesDropDown=page.locator("//input[@aria-label='countries']");
        this.citiesTxt = page.locator("#cities");
        this.keyWordsTxt= page.locator("//input[@aria-label='keywords']");
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
        this.acronymTxt = page.locator("#acronym");
        this.fundingSourcesTxt = page.locator("#fundingSources");
        this.ageCoverageTxt = page.locator("#ageCoverage");
        this.temporalCoverageTxt = page.locator("#datasetTemporalCoverage");
        this.typesDropdown = page.locator("//input[@aria-label='datasetType']");
        this.birthSexDropDown=page.locator("//input[@aria-label='birthSexCoverage']");
        this.maleOption =page.locator("#Male");
        this.femaleOption =page.locator("#Female");
    }
    async verifyAddNewStudyPage() {
        expect(await this.addNewStudyHeader).toBeVisible();
    }
    async verifyAddNewStudyAndSaveAsDraft(name:string,PI:string) {
        await this.commonNameTxt.first().fill(name);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.primaryInvistgatorName.scrollIntoViewIfNeeded();
        await this.primaryInvistgatorName.fill(PI);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.saveAsDraftBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.studySavedAsDraftSuccessMsg.scrollIntoViewIfNeeded();
        expect(await this.studySavedAsDraftSuccessMsg).toBeVisible();
    }
    async clickBackToAdministration() {
            await this.backToAdminstrationBtn.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async editSaveAsDraftStudy(updatedName:string,PI:string) {
        await this.commonNameTxt.first().fill(updatedName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.primaryInvistgatorName.scrollIntoViewIfNeeded();
        await this.primaryInvistgatorName.fill(PI);
        await this.saveAsDraftBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.studySavedAsDraftSuccessMsg).toBeVisible();
    }
    async editSubmitToCatalogueStudy(updatedName:string) {
        await this.commonNameTxt.first().fill(updatedName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.submitToCatalogueBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async editAndCancelStudy(updatedName:string) {
        await this.commonNameTxt.first().fill(updatedName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.cancelBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async editAndSaveStudy(updatedName:string) {
        await this.commonNameTxt.first().fill(updatedName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.primaryInvistgatorName.scrollIntoViewIfNeeded();
        await this.primaryInvistgatorName.fill("PI");
        await this.saveAsDraftBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyAddNewStudyAndSubmitToCatalogue(name:string,PI:string,email:string,country:string,keyword:string) {
        await this.commonNameTxt.first().fill(name);
        if(this.page.url().includes("actc"))
            await this.acronymTxt.fill("AutomationAcronym");
        await this.descriptionTxt.first().fill("Automation Description");
        await this.primaryInvistgatorName.scrollIntoViewIfNeeded();
        await this.primaryInvistgatorName.fill(PI);
        await this.primaryInvistgatorEmail.fill(email);
        await this.addBtnForPrimaryInvistgator.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.startYear.pressSequentially("2000");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.statusOnGoingRadioBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.siteSingleSiteRadioBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.countriesDropDown.scrollIntoViewIfNeeded();
        await this.countriesDropDown.fill(country);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.page.keyboard.press("Enter");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.page.keyboard.press("Escape");
        await this.citiesTxt.fill("RJY");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    if(this.page.url().includes("actc")){
        await this.fundingSourcesTxt.fill("ACTC Sources");
        await this.ageCoverageTxt.fill("80");
        await this.birthSexDropDown.fill("Male");
        await this.maleOption.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }    
        await this.keyWordsTxt.scrollIntoViewIfNeeded();
        await this.keyWordsTxt.fill(keyword);
        await this.page.keyboard.press("Enter");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.page.keyboard.press("Escape");
        await this.privacyAgreementChkBox.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.disclosureChkBox.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.submitToCatalogueBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});          
    }
}