import { Workshop2Page } from './app.po';

describe('workshop2 App', () => {
  let page: Workshop2Page;

  beforeEach(() => {
    page = new Workshop2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
