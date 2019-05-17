import { browser } from 'protractor';

describe('This is the first example of protractor', () => {
  it('should have a title', () => {
    browser.ignoreSynchronization = true;
    browser.get('http://www.secorto.com');
    expect(browser.getTitle()).toEqual('Sergio Orozco Torres');
  });
});
