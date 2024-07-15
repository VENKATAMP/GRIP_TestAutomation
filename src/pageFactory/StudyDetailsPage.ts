import { Locator, Page, BrowserContext } from '@playwright/test';
import { expect } from '../lib/BaseTest';


export class StudyDetailsPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly epndCatalogue: Locator;
    readonly firstStudyItem: Locator;
    readonly commonLink: Locator;
    readonly overviewLink: Locator;
    readonly summaryLink: Locator;
    readonly summaryArea: Locator;
    readonly studyArea: Locator;
    readonly studyRegisterLink: Locator;
    readonly studyLogInLink: Locator;
    readonly bottomTextAreaStudy: Locator;
    readonly dataSetsLockIcon: Locator;
    readonly overviewLockIcon: Locator;
    readonly bioSampleCollectionLockIcon: Locator;
    readonly useConditionsAndRestrictionLockIcon: Locator;
    readonly relatedPublicationsLockIcon: Locator;
    readonly bottomTextLockIcon: Locator;
    readonly studyOverviewExpandIcon: Locator;
    readonly backBtnStudyDetailsPgae: Locator;
    readonly registerHeader:Locator;
    readonly signInIntoAccountHeader: Locator;
    readonly bottonLoginBtn: Locator;
    readonly csfDiseaseTickMarkIcon: Locator;
    readonly serumDiseaseTickMarkIcon: Locator;
    readonly bioSampleCollectionTypeHeader: Locator;
    readonly datasetsLink: Locator;
    readonly biosampleCollectionsLink: Locator;
    readonly useConditionsAndRestrictionsLink: Locator;
    readonly relatedPublicationsLink: Locator;
    readonly myDashboardTab: Locator;
    readonly studyAdministrationSubMenuLink: Locator;
    readonly platFormTab: Locator;
    readonly catalogueLink: Locator;
    readonly accessRequestFormHeader: Locator;
    

    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.epndCatalogue = page.locator("//h1[@data-testid='catalogue-page-message']");
        this.firstStudyItem= page.locator("//li[@data-testid='study-item']//div[@class='font-headline text-primary']");
        this.commonLink = page.locator("//a[contains(@href,'common')]");
        this.overviewLink = page.locator("//a[contains(@href,'overview')]");
        this.overviewLockIcon=page.locator("//span[text()='Overview']/following-sibling::*[local-name()='svg' and @aria-hidden='true']")
        this.summaryLink = page.locator("//a[contains(@href,'summary')]");
        this.summaryArea = page.locator("#summary");
        this.studyArea = page.locator("//p[contains(text(),'request data from the study.')]");
        this.studyRegisterLink = page.locator("#register");
        this.studyLogInLink = page.locator("//button[@data-testid='login-button']");
        this.bottomTextAreaStudy = page.locator("//div[contains(text(),'To access Datasets')]");
        this.dataSetsLockIcon = page.locator("//span[text()='Datasets']/following-sibling::*[local-name()='svg' and @aria-hidden='true']");
        this.bioSampleCollectionLockIcon = page.locator("//span[text()='Biosample Collections']/following-sibling::*[local-name()='svg' and @aria-hidden='true']");
        this.relatedPublicationsLockIcon = page.locator("//span[contains(text(),'Publications')]/following-sibling::*[local-name()='svg' and @aria-hidden='true']");
        this.useConditionsAndRestrictionLockIcon = page.locator("//span[contains(text(),'Use Conditions')]/following-sibling::*[local-name()='svg' and @aria-hidden='true']");
        this.bottomTextLockIcon = page.locator("//div[contains(@class,'font-headline')]/ancestor::div[contains(@class,'bg-highlight-section')]//*[local-name()='svg']");
        this.bottonLoginBtn=page.locator("//div[contains(@class,'font-headline')]/ancestor::div[contains(@class,'bg-highlight-section')]//button[text()='Log In']");
        this.studyOverviewExpandIcon = page.locator("//span[@class='ml-auto']//*[local-name()='svg']");
        this.backBtnStudyDetailsPgae = page.getByText("Back");
        this.registerHeader = page.getByText("Register"); 
        this.signInIntoAccountHeader = page.locator("h1#kc-page-title");
        this.csfDiseaseTickMarkIcon= page.locator("//div[text()='Biosample Collection Type']/following-sibling::div/span[text()='CSF']");
        this.serumDiseaseTickMarkIcon= page.locator("//div[text()='Biosample Collection Type']/following-sibling::div/span[text()='Serum']");
        this.bioSampleCollectionTypeHeader=page.locator("//div[text()='Biosample Collection Type']");
        this.datasetsLink=page.getByText("Datasets");
        this.biosampleCollectionsLink=page.getByText("Biosample Collections");
        this.useConditionsAndRestrictionsLink=page.getByText("Use Conditions and Restrictions");
        this.relatedPublicationsLink=page.getByText("Related Publications");
        this.myDashboardTab = page.locator("#cohort-administration");
        this.studyAdministrationSubMenuLink=page.locator("//a[@data-testid='nav-item-study-administration']");
        this.platFormTab = page.locator("#platform");
        this.catalogueLink = page.getByText("Catalogue").first();
        this.accessRequestFormHeader = page.locator("//h1");
        

    }

    async verifyEpndCatalogueDisplay() {
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.epndCatalogue).toBeVisible();
    }
    async verifyClickAndVerifyStydyItem() {
        await this.page.waitForTimeout(20000);
        expect(await this.firstStudyItem.first()).toBeVisible();
        await this.firstStudyItem.first().click();
        await this.page.waitForTimeout(20000);
        expect(await this.studyOverviewExpandIcon).toBeVisible();
    }
    async verifyCommonLink() {
        if(this.page.url().includes("actc")){
            if(!await this.overviewLockIcon.isVisible()){
                await this.overviewLink.click();
                await this.page.waitForLoadState("networkidle",{timeout:10000});
                expect(await this.page.url()).toContain("overveiw");
            }   
        }
        else
        {
            await this.commonLink.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.page.url()).toContain("common");
        }
    }
    async verifySummaryLink() {
        await this.summaryLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.url()).toContain("summary");
        await this.page.reload();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyStudyOveroviewExpandAndCollapseCheck() {
        await this.studyOverviewExpandIcon.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        if(this.page.url().includes("actc")){
            expect(await this.overviewLink).toBeHidden();
            await this.studyOverviewExpandIcon.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.overviewLink).toBeVisible();
        }else{
            expect(await this.commonLink).toBeHidden();
            await this.studyOverviewExpandIcon.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.commonLink).toBeVisible();
        }
    }
    async verifyBackFunctionality() {
        expect(await this.backBtnStudyDetailsPgae).toBeVisible();
        await this.backBtnStudyDetailsPgae.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.backBtnStudyDetailsPgae).not.toBeVisible();
        await this.page.goBack();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyStudySectionFunctionality() {
        expect(await this.studyArea).toBeVisible();
        await this.studyRegisterLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.url()).toContain("registrations");
        expect(await this.registerHeader.first()).toBeVisible();
        await this.page.goBack();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.studyLogInLink).toBeVisible();
        await this.studyLogInLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.url()).toContain("login");
        //expect(await this.signInIntoAccountHeader).toBeVisible();
    }
    async verifyBottomLoginAndTextAlongWithLockIcon() {
        await this.bottomTextAreaStudy.scrollIntoViewIfNeeded();
        expect( await this.bottomTextAreaStudy).toBeVisible();
        expect(await this.bottomTextLockIcon).toBeVisible();
        await this.bottonLoginBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.url()).toContain("login");             
    }
    async verifySecurityLockForDataSetsBioSampleColUseConAndRestRelatedPublications() {
        if(!this.page.url().includes("actc")){
            expect(await this.dataSetsLockIcon.first()).toBeVisible();
            await this.dataSetsLockIcon.first().click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.signInIntoAccountHeader).toBeVisible();
            await this.page.goBack();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.bioSampleCollectionLockIcon.first()).toBeVisible();
            await this.bioSampleCollectionLockIcon.first().click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.signInIntoAccountHeader).toBeVisible();
            await this.page.goBack();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.relatedPublicationsLockIcon.first()).toBeVisible();
            await this.relatedPublicationsLockIcon.first().click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.signInIntoAccountHeader).toBeVisible();
            await this.page.goBack();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.useConditionsAndRestrictionLockIcon.first()).toBeVisible();  
            await this.useConditionsAndRestrictionLockIcon.first().click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.signInIntoAccountHeader).toBeVisible();
            await this.page.goBack(); 
            await this.page.waitForLoadState("networkidle",{timeout:10000});  
        } 
    }
    async verifyMultipleDiseasesDisplay() {
        await this.bioSampleCollectionTypeHeader.scrollIntoViewIfNeeded();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.csfDiseaseTickMarkIcon).toBeAttached();
        expect(await this.serumDiseaseTickMarkIcon).toBeAttached();              
    }
    async verifyStudyOverviewLinks() {
        if(this.page.url().includes("actc")){
            expect(await this.overviewLink).toBeVisible();
        }else{
            expect(await this.commonLink).toBeVisible();
        }
        expect(await this.summaryLink).toBeVisible();
        expect(await this.datasetsLink.first()).toBeVisible();
        if(!this.page.url().includes("actc"))
            expect(await this.biosampleCollectionsLink.first()).toBeVisible();
        expect(await this.useConditionsAndRestrictionsLink.first()).toBeVisible();
        if(!this.page.url().includes("actc"))
            expect(await this.relatedPublicationsLink.first()).toBeVisible();
    }
    async verifyAndNavigateStudyAdministrationLink() {
        await this.myDashboardTab.hover();
        expect(await this.studyAdministrationSubMenuLink).toBeVisible();
        await this.studyAdministrationSubMenuLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async clickDataSets() {
        await this.datasetsLink.first().click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});              
    }
    async verifyClickAndVerifyStydyItemForDataSets() {
        for(let i=0;i<await this.firstStudyItem.count();i++){
            await this.firstStudyItem.nth(i).scrollIntoViewIfNeeded();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await this.firstStudyItem.nth(i).click();
            await this.clickDataSets();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            if(! await this.accessRequestFormHeader.isVisible)
                await this.clickCatalogueFromPlotForm();
            else
                break;   
        }
    }
    async clickCatalogueFromPlotForm(){
        await this.platFormTab.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.catalogueLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
}