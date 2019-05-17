import { browser } from 'protractor';

describe('Given a person who want to meet Sergio Orozco', () => {
  describe('when open the home page', () => {
    beforeEach(() => {
      browser.get('http://www.secorto.com');
    });

    it('then should have a title', () => {
      expect(browser.getTitle()).toEqual('Sergio Orozco Torres');
    });
  });
});
