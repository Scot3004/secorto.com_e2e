import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankWireLink: ElementFinder;

  constructor () {
    this.bankWireLink = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async chooseBankWire(): Promise<void> {
    await this.bankWireLink.click();
  }
}
