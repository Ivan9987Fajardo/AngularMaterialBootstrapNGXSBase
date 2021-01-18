import { browser, by, element } from 'protractor';

export class AppPage {
  /**
   * Angular Base Functions
   */
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  /**
   * Angular Base Functions
   */
  getTitleText(): Promise<string> {
    return element(
      by.css('app-root .content span')
    ).getText() as Promise<string>;
  }
}
