import { StarwarsPage } from './app.po';

describe('starwars App', function() {
  let page: StarwarsPage;

  beforeEach(() => {
    page = new StarwarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
