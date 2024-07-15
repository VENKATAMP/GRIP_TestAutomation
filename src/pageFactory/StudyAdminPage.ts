import { Locator, Page, BrowserContext } from '@playwright/test';
export class StudyAdmin {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly studyAdministrationLink: Locator
    readonly addStudy: Locator
    readonly name: Locator

    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.context = context;
        this.studyAdministrationLink = page.getByTestId('nav-item-study-administration');
        this.addStudy = page.getByTestId('add-study-link');
        this.name = page.getByLabel('Name *');
    }

    async doAddStudy(){
        await this.studyAdministrationLink.click();
        await this.addStudy.click();
        await this.name.isVisible();
    }

}