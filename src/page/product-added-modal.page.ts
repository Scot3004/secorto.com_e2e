import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async checkout(): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(this.checkoutButton), 3000);
    await this.checkoutButton.click();
  }
}
