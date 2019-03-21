import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getParaText(){
    return element(by.css('app-root p')).getText();
  }
  getLessonsTextFromNavBar() {
    return element(by.css('[routerLink="/channel"]')).getText();
  }

  clickingAndNavigatingToLessonTab(){

  }
}
