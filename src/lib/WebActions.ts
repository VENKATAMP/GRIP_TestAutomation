import { Page, Locator,BrowserContext, Frame, ElementHandle } from "@playwright/test"



export class WebActions {
  readonly page: Page;
  readonly context: BrowserContext | undefined;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  async delay(time: number): Promise<void> {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }

  async clickByText(text: string): Promise<void> {
    await this.page.getByText(text, { exact: true }).click();  //Matches locator with exact text and clicks
  }

  async clickElementJS(locator: string): Promise<void> {
    await this.page.$eval(locator, (element: HTMLElement) => element.click());
  }



  //

  async scrollDown(page: Page, pixels: number) {
    await page.evaluate((pixelsToScroll) => {
      window.scrollBy(0, pixelsToScroll);
    }, pixels);
  }

  async scrollToElement(page: Page, selector: string): Promise<ElementHandle<SVGElement | HTMLElement>> {
    const element = await page.$(selector);
    if (!element) {
      throw new Error(`Unable to find element with selector: ${selector}`);
    }
    await element.scrollIntoViewIfNeeded();
    return element;
  }

  async switchToNewWindow(context: BrowserContext): Promise<Page> {
    const newPage = await context.waitForEvent('page');
    await newPage.bringToFront();
    return newPage;
  }

  async findElements(selector: string, page: Page): Promise<ElementHandle[]> {
    try {
      const elements = await page.$$(selector);
      return elements;
    } catch (error) {
      throw new Error(`Unable to find elements with locator: ${selector}`);
    }
  }


  async switchToFrameBySelector(page: Page, selector: string): Promise<Frame | null> {
    const frameElement = await page.$(selector);
    if (frameElement) {
      const frame = await frameElement.contentFrame();
      if (frame) {
        await page.bringToFront();
        await frame.waitForLoadState();
        await page.waitForSelector(selector);
        await page.waitForTimeout(500);
        await frame.focus("");
        return frame;
      }
    }
    return null;
  }

  async switchToFrameByName(page: Page, name: string): Promise<Frame> {
    const frame = page.frame({ name });
    if (!frame) {
      throw new Error(`Frame with name "${name}" not found.`);
    }
    await frame.waitForLoadState();
    return frame;
  }


  

  


  async clickOnRightMenu(page: Page) {
    await page.waitForSelector('//span[@class="userNameText slds-truncate"]', { timeout: 60000 });
    await page.locator('//span[@class="userNameText slds-truncate"]').click();
  }


  async waitUntillElementIsVisible(locatorElement: Locator): Promise<boolean> {
    try {
      await locatorElement.isVisible({ timeout: 10000 });
      console.log(locatorElement + " is the visible ");
      return true;
    } catch (TimeoutError) {
      console.log(locatorElement + " is not visible");
      return false;
    }
  }




  



  
}
