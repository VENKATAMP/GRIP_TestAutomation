import { Locator, Page, BrowserContext } from '@playwright/test';
import { expect } from '../lib/BaseTest';


export class LandingPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly logoAndIcon: Locator;
    readonly aboutTab: Locator;
    readonly platFormTab: Locator;
    readonly newsAndResourcesTab: Locator;
    readonly myDashboardTab: Locator;
    readonly sliderFilter: Locator;
    readonly partnersLink: Locator;
    readonly aboutsLink: Locator;
    readonly contactLink: Locator;
    readonly catalogueLink: Locator;
    readonly newsAndResourcesLink: Locator;
    readonly registerLink: Locator;
    readonly loginLink: Locator;
    readonly resetFilter: Locator;
    readonly expandCollapseFilterBtn: Locator;
    readonly participantDiseaseAreaFirstChecboxFilter: Locator;
    readonly participantDiseaseAreaFirstSliderRadioBtnFilter: Locator;
    readonly participantDiseaseAreaFirstFilterTxt: Locator;
    readonly biosampleCollectionTypeCheckboxFilter: Locator;
    readonly imagingDataTypeCheckboxFilter: Locator;
    readonly cognitiveDataCheckboxFilter: Locator;
    readonly participantDiseaseAreaFirstChecboxLable: Locator;
    readonly biosampleCollectionTypeCheckboxLable: Locator;
    readonly imagingDataTypeCheckboxLable: Locator;
    readonly cognitiveDataCheckboxLable: Locator;
    readonly showingParticipantsHeader: Locator;
    readonly searchCatalogue: Locator;
    readonly sortByStudyName: Locator;
    readonly titleLogoLink: Locator;
    readonly footerLinks: Locator;
    readonly studyNameHeaders: Locator;
    readonly cityNameStr:string;
    readonly city:string;
    readonly csfCheckBox:Locator;
    readonly serumCheckBox:Locator;
    readonly firstStudyItem: Locator;
    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.logoAndIcon = page.locator("//nav[@aria-label='Main']//a").first();
        this.aboutTab = page.locator("#about");
        this.platFormTab = page.locator("#platform");
        this.sliderFilter = page.locator("(//span[@role='slider'])[2]");
        this.myDashboardTab = page.locator("#cohort-administration");
        this.newsAndResourcesTab = page.locator("#news-and-resources");
        this.partnersLink = page.locator("#partners");
        this.aboutsLink = page.locator("#about-us");
        this.contactLink = page.locator("#contact");
        this.catalogueLink = page.getByText("Catalogue").first();
        this.newsAndResourcesLink = page.locator("#news-and-resources");
        this.registerLink = page.getByTestId("nav-action-register");
        this.loginLink = page.getByTestId("nav-action-login");
        this.resetFilter = page.getByText("Reset Filter");
        this.expandCollapseFilterBtn = page.locator("//div[@data-testid='filter-category-list']//button");
        this.participantDiseaseAreaFirstChecboxFilter = page.locator("(//div[@data-testid='filter-category-list'])[1]//input[@type='checkbox']").first();
        this.participantDiseaseAreaFirstSliderRadioBtnFilter=page.locator("//span[text()='Cognitively normal']/parent::div//span[@role='slider']").first();
        this.participantDiseaseAreaFirstFilterTxt=page.locator("//span[text()='Cognitively normal']/parent::div//input").first();
        this.biosampleCollectionTypeCheckboxFilter = page.locator("(//div[@data-testid='filter-category-list'])[2]//input[@type='checkbox']").first();
        this.imagingDataTypeCheckboxFilter = page.locator("(//div[@data-testid='filter-category-list'])[3]//input[@type='checkbox']").first();
        this.cognitiveDataCheckboxFilter = page.locator("(//div[@data-testid='filter-category-list'])[4]//input[@type='checkbox']").first();
        this.expandCollapseFilterBtn = page.locator("//div[@data-testid='filter-category-list']//button");
        this.participantDiseaseAreaFirstChecboxLable = page.locator("(//div[@data-testid='filter-category-list'])[1]//input[@type='checkbox']/following-sibling::span");
        this.biosampleCollectionTypeCheckboxLable = page.locator("(//div[@data-testid='filter-category-list'])[2]//input[@type='checkbox']/following-sibling::span");
        this.imagingDataTypeCheckboxLable = page.locator("(//div[@data-testid='filter-category-list'])[3]//input[@type='checkbox']/following-sibling::span");
        this.cognitiveDataCheckboxLable = page.locator("(//div[@data-testid='filter-category-list'])[4]//input[@type='checkbox']/following-sibling::span");
        this.showingParticipantsHeader = page.locator("//div[@class='font-headline whitespace-nowrap']");
        this.searchCatalogue = page.getByPlaceholder("Search Catalogue");
        this.sortByStudyName = page.getByText("Sort by study name");
        this.titleLogoLink = page.locator("//div[contains(@class,'footer')]//a[@title='Visit the EPND home page and learn more']");
        this.footerLinks = page.locator("//div[contains(@class,'footer')]//a");
        this.studyNameHeaders = page.locator(".font-headline.text-primary");
        this.cityNameStr="//li[@data-testid='study-item']//span[text()='xxx']";
        this.csfCheckBox=page.locator("#haveBiosamplesCsf");
        this.serumCheckBox=page.locator("#haveBiosamplesSerum");
        this.firstStudyItem= page.locator("//li[@data-testid='study-item']//div[@class='font-headline text-primary']");
    }


    async verifySlider() {
        await this.sliderFilter.focus();
        expect(await this.sliderFilter).toBeVisible();
    }
    async verifyMenuTabs() {
        await this.aboutTab.focus();
        expect(await this.aboutTab).toBeVisible();
        expect(await this.myDashboardTab).toBeVisible();
        expect(await this.newsAndResourcesTab).toBeVisible();
        expect(await this.platFormTab).toBeVisible();
    }
    async verifySubMenuLinks() {
        await this.aboutTab.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.partnersLink).toBeVisible();
        expect(this.contactLink).toBeVisible();
        await this.aboutTab.focus();
        await this.platFormTab.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.catalogueLink).toBeVisible();
        expect(await this.newsAndResourcesLink).toBeVisible();
        await this.myDashboardTab.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.registerLink).toBeVisible();
        expect(await this.loginLink).toBeVisible();
    }
    async verifySubMenuLinksNavigation() {
        await this.aboutTab.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        if(this.page.url().includes("actc")){
            const [aboutUsLinkPage]=await Promise.all([
                this.context.waitForEvent("page"),
                await this.aboutsLink.click(),
                await this.page.waitForTimeout(2000)
            ])
            expect(await aboutUsLinkPage.url()).toContain("about");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await aboutUsLinkPage.close();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
        }
        else{
            const [partnersLinkPage]=await Promise.all([
                this.context.waitForEvent("page"),
                await this.partnersLink.click(),
                await this.page.waitForTimeout(2000)
            ])
            expect(await partnersLinkPage.url()).toContain("partners");
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            await partnersLinkPage.close();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
        }
        await this.aboutTab.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        const [contactLinkPage]=await Promise.all([
            this.context.waitForEvent("page"),
            await this.contactLink.click(),
            await this.page.waitForTimeout(2000)
        ])
        expect(await contactLinkPage.url()).toContain("contact");
        await contactLinkPage.close();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.platFormTab.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.catalogueLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.url()).toContain("catalogue");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        const [newsAndResourcesLinkPage]=await Promise.all([
            this.context.waitForEvent("page"),
            await this.newsAndResourcesLink.click(),
            await this.page.waitForTimeout(2000)
        ])
        if(this.page.url().includes("actc"))
            expect(await newsAndResourcesLinkPage.url()).toContain("news");
        else
            expect(await newsAndResourcesLinkPage.url()).toContain("news-and-resources");

        await newsAndResourcesLinkPage.close();
        await this.myDashboardTab.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.registerLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.url()).toContain("registrations");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.page.goBack();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.myDashboardTab.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.loginLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        expect(await this.page.url()).toContain("login");
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.page.goBack();
        await this.page.waitForLoadState("networkidle",{timeout:10000});        
    }
    async verifyLogoAndIcon() {
        expect(await this.logoAndIcon).toBeVisible();
    }
    async verifyResetFilter() {
        expect(await this.resetFilter).toBeVisible();
        if(this.page.url().includes("actc")){
            expect(await this.participantDiseaseAreaFirstFilterTxt.getAttribute("value")).toBe("0");
            await this.participantDiseaseAreaFirstSliderRadioBtnFilter.click();
            await this.page.keyboard.press("ArrowRight");
            await this.page.waitForLoadState("networkidle",{timeout:10000}); 
            expect(await this.participantDiseaseAreaFirstFilterTxt.getAttribute("value")).toBe("1");
            await this.resetFilter.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.participantDiseaseAreaFirstFilterTxt.getAttribute("value")).toBe("0");
        }else{
            expect(await this.participantDiseaseAreaFirstChecboxFilter).not.toBeChecked();
            await this.participantDiseaseAreaFirstChecboxFilter.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.participantDiseaseAreaFirstChecboxFilter).toBeChecked();
            await this.resetFilter.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.participantDiseaseAreaFirstChecboxFilter).not.toBeChecked();
        }
        
    }
    async verifyExpandAndCollapse() {
        expect(await this.expandCollapseFilterBtn.first()).toBeVisible();
        for (let i = 0; i < await this.expandCollapseFilterBtn.count(); i++) {
            await this.expandCollapseFilterBtn.nth(i).scrollIntoViewIfNeeded();
            expect(await this.expandCollapseFilterBtn.nth(i).getAttribute("aria-expanded")).toEqual("true");
            await this.expandCollapseFilterBtn.nth(i).scrollIntoViewIfNeeded();
            await this.expandCollapseFilterBtn.nth(i).click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.expandCollapseFilterBtn.nth(i).getAttribute("aria-expanded")).toEqual("false");
        }
        await this.page.reload();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyFilterByDisease() {
        let numberOfStudiesFromDisease;
        if(!this.page.url().includes("actc")){
            let charCount=await (await this.participantDiseaseAreaFirstChecboxLable.first().textContent()).length
            if(charCount>3)
                numberOfStudiesFromDisease = (await this.participantDiseaseAreaFirstChecboxLable.first().textContent()).slice(charCount-3,-1);
            else
                numberOfStudiesFromDisease = (await this.participantDiseaseAreaFirstChecboxLable.first().textContent()).slice(charCount-2,-1);
            await this.participantDiseaseAreaFirstChecboxFilter.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            let numberOfStudiesFromStudiesHeader = (await this.showingParticipantsHeader.textContent()).split(" ")[1];
            expect(numberOfStudiesFromDisease).toEqual(numberOfStudiesFromStudiesHeader);
            await this.resetFilter.click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
        }
    }
    async verifyFilterByBioSample() {
        let numberOfStudiesFromDisease;
        let charCount=await (await this.biosampleCollectionTypeCheckboxLable.first().textContent()).length
        if(charCount>3)
            numberOfStudiesFromDisease = (await this.biosampleCollectionTypeCheckboxLable.first().textContent()).slice(charCount-3,-1);
        else
        numberOfStudiesFromDisease = (await this.biosampleCollectionTypeCheckboxLable.first().textContent()).slice(charCount-2,-1);
        await this.biosampleCollectionTypeCheckboxFilter.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        let numberOfStudiesFromStudiesHeader = (await this.showingParticipantsHeader.textContent()).split(" ")[1];
        expect(numberOfStudiesFromDisease).toEqual(numberOfStudiesFromStudiesHeader);
        await this.resetFilter.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyFilterByImagingDataType() {
        let numberOfStudiesFromDisease;
        let charCount=await (await this.imagingDataTypeCheckboxLable.first().textContent()).length
        if(charCount>3)
            numberOfStudiesFromDisease = (await this.imagingDataTypeCheckboxLable.first().textContent()).slice(charCount-3,-1);
        else
        numberOfStudiesFromDisease = (await this.imagingDataTypeCheckboxLable.first().textContent()).slice(charCount-2,-1);
        await this.imagingDataTypeCheckboxFilter.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        let numberOfStudiesFromStudiesHeader = (await this.showingParticipantsHeader.textContent()).split(" ")[1];
        expect(numberOfStudiesFromDisease).toEqual(numberOfStudiesFromStudiesHeader);
        await this.resetFilter.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyFilterByCognitiveData() {
        let numberOfStudiesFromDisease;
        let charCount=await (await this.cognitiveDataCheckboxLable.first().textContent()).length
        if(charCount>3)
            numberOfStudiesFromDisease = (await this.cognitiveDataCheckboxLable.first().textContent()).slice(charCount-3,-1);
        else
        numberOfStudiesFromDisease = (await this.cognitiveDataCheckboxLable.first().textContent()).slice(charCount-2,-1);
        await this.cognitiveDataCheckboxFilter.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        let numberOfStudiesFromStudiesHeader = (await this.showingParticipantsHeader.textContent()).split(" ")[1];
        expect(numberOfStudiesFromDisease).toEqual(numberOfStudiesFromStudiesHeader);
        await this.resetFilter.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyFilterByCombination() {
        await this.csfCheckBox.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.serumCheckBox.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.studyNameHeaders.first().click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});   
    }
    async verifyStudyOrDiseaseBySearch(studyordisease: string) {
        let numberOfStudiesFromDisease;
        let charCount=await (await this.participantDiseaseAreaFirstChecboxLable.nth(1).textContent()).length
        if(charCount>3)
            numberOfStudiesFromDisease = (await this.participantDiseaseAreaFirstChecboxLable.nth(1).textContent()).slice(charCount-3,-1);
        else
        numberOfStudiesFromDisease = (await this.participantDiseaseAreaFirstChecboxLable.nth(1).textContent()).slice(charCount-2,-1);
        await this.searchCatalogue.fill(studyordisease);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        let numberOfStudiesFromStudiesHeader = (await this.showingParticipantsHeader.textContent()).split(" ")[1];
        expect(numberOfStudiesFromDisease).toEqual(numberOfStudiesFromStudiesHeader);
        await this.resetFilter.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyByCityOrCountry(cityorContry: string) {
        if(this.page.url().includes("actc")){
            cityorContry="Andorra";
        }
        await this.searchCatalogue.fill(cityorContry);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        let numberOfStudiesFromStudiesHeader = (await this.showingParticipantsHeader.textContent()).split(" ")[1];
        expect(String(await this.page.locator(this.cityNameStr.replace("xxx",cityorContry)).count())).toEqual(numberOfStudiesFromStudiesHeader);
        expect(await this.page.locator(this.cityNameStr.replace("xxx",cityorContry)).first()).toBeVisible();
        await this.page.reload();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifySortByFunctionality() {
        expect(this.sortByStudyName).toBeVisible();
    }
    async verifyFooterLogoNavigation() {
        if(this.page.url().includes("actc")){
            await this.footerLinks.first().click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.page.url()).toContain("https://www.nia.nih.gov/");
        }
        else{
            await this.footerLinks.first().click();
            await this.page.waitForLoadState("networkidle",{timeout:10000});
            expect(await this.page.url()).toContain("https://epnd.org/");
        }
        await this.page.goBack();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async verifyFooterLinks() {
        for (let i = 0; i < await this.footerLinks.count(); i++) {
            expect(await this.footerLinks.nth(i)).toBeVisible();
        }
    }
    async verifyAllPublishedStudiesDisplay() {
        expect(this.showingParticipantsHeader).toBeVisible();
    }
    async searchByPublishedStudyName(studyName: string) {
        await this.searchCatalogue.fill(studyName);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.firstStudyItem.first().click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async clickCatalogueLink(){
        await this.platFormTab.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.catalogueLink.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
}



