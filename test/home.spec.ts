import { browser } from 'protractor';

describe('Given a person who want to meet Sergio Orozco', () => {
  describe('when open the home page', () => {
    beforeEach(async () => {
      await browser.get('http://www.secorto.com');
    });

    it('then should have a title', async () => {
      await expect(browser.getTitle()).toEqual('Sergio Orozco Torres');
    });
  });
});
