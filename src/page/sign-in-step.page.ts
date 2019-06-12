import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private signInButton: ElementFinder;
  private emailField: ElementFinder;
  private passwordField: ElementFinder;

  constructor () {
    this.signInButton = $('#SubmitLogin > span');
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
  }

  public async signIn(email: string, password: string): Promise<void> {
    await this.emailField.sendKeys(email);
    await this.passwordField.sendKeys(password);
    await this.signInButton.click();
  }
}
