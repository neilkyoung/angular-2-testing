export class Angular2TestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTextContent(element){
  	return $(element).getText();
  }
}
