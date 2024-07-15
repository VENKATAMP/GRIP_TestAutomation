import { Locator, Page, BrowserContext } from '@playwright/test';
import ENV from '../lib/env';

export class LoginPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly myDashboard: Locator
    readonly emailId: Locator
    readonly pwd: Locator
    readonly lgnBtn: Locator
    readonly loginLink: Locator
    readonly logoutLink: Locator;

    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.emailId = page.getByLabel('Email');
        this.pwd = page.getByLabel('Password', { exact: true });
        this.lgnBtn = page.getByRole('button', { name: 'Sign In' });
        this.myDashboard = page.getByText('My Dashboard');
        this.loginLink = page.getByRole('button', { name: 'Login' });
        this.logoutLink = page.getByRole('button', { name: 'Logout' });


    }

    async login(username: string, password: string) {
        await this.page.goto(ENV.baseURL);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.myDashboard.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.loginLink.click();
        await this.emailId.fill(username);
        await this.pwd.fill(password);
        await this.lgnBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
    }
    async logout() {
        await this.myDashboard.hover();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.logoutLink.click();
        await this.page.waitForTimeout(5000);
    }


}