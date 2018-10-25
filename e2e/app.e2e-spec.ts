import { SecondAttemptPage } from './app.po';

describe('second-attempt App', function() {
  let page: SecondAttemptPage;

  beforeEach(() => {
    page = new SecondAttemptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
