import { TopRestaurantsPage } from './app.po';

describe('top-restaurants App', () => {
  let page: TopRestaurantsPage;

  beforeEach(() => {
    page = new TopRestaurantsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
