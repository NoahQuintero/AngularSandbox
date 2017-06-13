import { ThingsAppPage } from './app.po';

describe('things-app App', () => {
  let page: ThingsAppPage;

  beforeEach(() => {
    page = new ThingsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
