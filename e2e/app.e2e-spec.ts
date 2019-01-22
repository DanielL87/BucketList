import { MyNewProjectPage } from './app.po';

describe('my-new-project App', () => {
  let page: MyNewProjectPage;

  beforeEach(() => {
    page = new MyNewProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
