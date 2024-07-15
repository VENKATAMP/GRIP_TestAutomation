import {type FullConfig} from "@playwright/test";
import * as fs from 'fs';
import * as fs2 from 'fs-extra';
import {execSync} from "child_process";

async function globalTeardown(config: FullConfig) {

	// copy the allure-report/history to allure-result/history
	try {
		const sourcePath = "./allure-report/history";
		const destinationPath = "./allure-results/history";
		if (!fs.existsSync("./allure-results/history")) {
			fs.mkdirSync("./allure-results/history");
		}
		// fs.copyFileSync('./allure-report/history', './allure-results/history');
		fs2.copySync(sourcePath, destinationPath);
		console.log(`Successfully copied ${sourcePath} to ${destinationPath}`);
	} catch (error: any) {
		console.error("Error copying history directory:", error.message);
	}

	// generate new allure-results including history trend
	try {
		execSync("npx allure generate allure-results --clean", {
			stdio: "inherit",
		});
	} catch (error: any) {
		console.error("Error generating Allure results:", error.message);
	}

	//open allure report after the run
	/*
    try {
        execSync("npx allure open allure-report ", { stdio: "inherit" });
        } catch (error:any) {
        console.error("Error opening Allure report:", error.message);
        }
    */
}

export default globalTeardown;
