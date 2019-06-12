import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private acceptTermsCheckbox: ElementFinder;
  private checkoutButton: ElementFinder;

  constructor () {
    this.acceptTermsCheckbox = $('#cgv');
    this.checkoutButton = $('#form > p > button > span');
  }

  public async acceptTerms(): Promise<void> {
    await this.acceptTermsCheckbox.click();
  }

  public async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
