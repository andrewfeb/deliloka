import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('.navbar-toggler'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#page-content'),
});

const loaderContainer = document.querySelector('.loader-container');
const pageContent = document.querySelector('#page-content');

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  loaderContainer?.classList.add('hidden');
  pageContent?.classList.add('visible');
  app.renderPage();
});

// sticky header/navbar
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header?.classList.toggle('sticky', window.scrollY > 10);
});

const btnTop = document.querySelector('.btn-top');
// show or hidden top button
window.onscroll = () => {
  const height = document.body.scrollTop || document.documentElement.scrollTop;

  if (height > 100) {
    btnTop?.classList.remove('hidden');
  } else {
    btnTop?.classList.add('hidden');
  }
};

// scroll back to top page
const smoothScroll = (height) => {
  const i = height || document.documentElement.scrollTop;
  if (i > -1) {
    setTimeout(() => {
      window.scrollTo(0, i);
      smoothScroll(i - 10);
    }, 0.5);
  }
};

btnTop?.addEventListener('click', () => smoothScroll());
