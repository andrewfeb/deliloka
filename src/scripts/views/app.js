import drawerInitiator from '../utils/drawer-initiator';
import urlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button,
    drawer,
    content
  }) {
    this.mButton = button;
    this.mDrawer = drawer;
    this.mContent = content;

    this.initialAppShell();
  }

  initialAppShell() {
    drawerInitiator.init({
      button: this.mButton,
      drawer: this.mDrawer,
      content: this.mContent
    });
  }

  isNotHome(currentMenu) {
    this.menu = currentMenu;

    return (this.menu !== null);
  }

  async renderPage() {
    const url = urlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.mContent.innerHTML = await page.render();
    await page.afterRender();

    // add active class in current menu
    const menus = document.querySelectorAll('.active');
    menus.forEach((menu) => {
      menu.classList.remove('active');
    });
    const currentMenu = document.querySelector(`a[href="#${url}"`);
    if (this.isNotHome(currentMenu)) {
      currentMenu.classList.add('active');
    }
  }
}

export default App;
