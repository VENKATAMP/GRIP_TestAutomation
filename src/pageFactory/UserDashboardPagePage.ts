import { Locator, Page, BrowserContext } from '@playwright/test';
import { expect } from '../lib/BaseTest';

export class UserDashboardPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly yourAccessRequestsDropDown: Locator;
    readonly editBtn: Locator;
    readonly requestAccessBtn: Locator;
    readonly showMyRequestsFilterDropDown: Locator;


    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.yourAccessRequestsDropDown = page.locator("#filterOwnRequestSubState");
        this.editBtn = page.locator("//a[contains(@href,'edit')]").first();
        this.requestAccessBtn = page.getByText("View Request").first(); 
        this.showMyRequestsFilterDropDown  =page.locator("#filterOwnRequestSubState").first();
    }
    async clickEditBtnForDataSet() {
        await this.editBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});          
    }
    async clickRequestAccessBtnForDataSet() {
        await this.requestAccessBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});              
    }
    async selectOnlyDraftRequests(status:string) {
        await this.showMyRequestsFilterDropDown.selectOption(status); 
        await this.page.waitForLoadState("networkidle",{timeout:10000});          
    }
        
}