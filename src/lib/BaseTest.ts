import { test as base } from '@playwright/test';
//replace with export of page with locators
import { LoginPage } from '../pageFactory/LoginPage';
import { StudyAdmin } from '../pageFactory/StudyAdminPage';
import { LandingPage } from '../pageFactory/LandingPage';
import { StudyDetailsPage } from '../pageFactory/StudyDetailsPage';
import { StudyAdministrationPage } from '../pageFactory/StudyAdministrationPage';
import { AddStudyPage } from '../pageFactory/AddStudyPage';
import { DataSetsPage } from '../pageFactory/DataSetsPage';
import { BioSampleCollectionDetailsPage } from '../pageFactory/BioSampleCollectionDetailsPage';
import { DataAccessRequestPage } from '../pageFactory/DataAccessRequestPage';
import { UserDashboardPage } from '../pageFactory/UserDashboardPagePage';
import { WebActions } from './WebActions';

//replace with POM classes
const test = base.extend<{
    loginPage: LoginPage;
    studyPage: StudyAdmin;
    landingPage: LandingPage;
    studyDetailsPage: StudyDetailsPage;
    studyAdministrationPage: StudyAdministrationPage;
    addStudyPage: AddStudyPage;
    dataSetsPage: DataSetsPage;
    bioSampleCollectionDetailsPage: BioSampleCollectionDetailsPage;
    dataAccessRequestPage: DataAccessRequestPage;
    userDashboardPage: UserDashboardPage;
    webActions: WebActions;

}>({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },
    studyPage: async ({page, context }, use) => {
        await use(new StudyAdmin(page, context));
    },
    landingPage: async ({page, context }, use) => {
        await use(new LandingPage(page, context));
    },
    studyDetailsPage: async ({page, context }, use) => {
        await use(new StudyDetailsPage(page, context));
    },
    studyAdministrationPage: async ({page, context }, use) => {
        await use(new StudyAdministrationPage(page, context));
    },
    addStudyPage: async ({page, context }, use) => {
        await use(new AddStudyPage(page, context));
    },
    dataSetsPage: async ({page, context }, use) => {
        await use(new DataSetsPage(page, context));
    },
    bioSampleCollectionDetailsPage: async ({page, context }, use) => {
        await use(new BioSampleCollectionDetailsPage(page, context));
    },
    dataAccessRequestPage: async ({page, context }, use) => {
        await use(new DataAccessRequestPage(page, context));
    },
    userDashboardPage: async ({page, context }, use) => {
        await use(new UserDashboardPage(page, context));
    },
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
})

export default test;
export const expect = test.expect;
