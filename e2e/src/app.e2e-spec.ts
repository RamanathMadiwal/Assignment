import { AppPage } from './app.po';


describe('Assignment Application main page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display hello world in main page', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Hello, world!');
  });

  it('should display paragraph text', () => {
    page.navigateTo();
    expect(page.getParaText()).toEqual('Please click lesson tabs for assignment');
  });


  it('should display paragraph text', () => {
    page.navigateTo();
    expect(page.getLessonsTextFromNavBar()).toEqual('Lessons');
  });

});
