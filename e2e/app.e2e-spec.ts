import { Angular2TestPage } from './app.po';

describe('angular2-test App', function() {
  let page: Angular2TestPage;

  beforeEach(() => {
    page = new Angular2TestPage();
  });

  it('should display message saying home works', () => {
    browser.get('/');
    expect(page.getParagraphText()).toEqual('home works!');
  });

  it('should display message saying projects works', () => {
    browser.get('/projects');
    expect(page.getTextContent('.project-header')).toEqual('projects works!');

    expect(page.getTextContent('.project-header')).not.toEqual('project works!');
  });
});
