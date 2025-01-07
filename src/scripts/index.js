import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import data from '../public/data/DATA.json';

// sticky header/navbar
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header?.classList.toggle("sticky", window.scrollY > 10);
})

const btnTop = document.querySelector(".btn-top");
// show or hidden top button
window.onscroll = () => {
  let height = document.body.scrollTop || document.documentElement.scrollTop;

  if (height > 100) {
    btnTop?.classList.remove('hidden');
  } else {
    btnTop?.classList.add('hidden');
  }
};

// scroll back to top page
const smoothScroll = (height) => {
  let i = height || document.documentElement.scrollTop;
  if (i > -1) {
    setTimeout(() => {
      window.scrollTo(0, i);
      smoothScroll(i - 10);
    }, 1.5);
  }
};

btnTop?.addEventListener('click', () => smoothScroll());

// menu toggle for mobile device
const menuToggle = document.querySelector(".navbar-toggler");
menuToggle.addEventListener('click', () => {
  const navbar = document.querySelector("nav");
  navbar?.classList.toggle("collapse");
})

const strLimit = (str, limit) => {
  if (str.length > limit) {
    return str.substring(0, limit) + '...';
  }
  return str;
};

const iconRate = (iconName, fill=true) => {
  return `<i class="material-symbols-rounded text-sm text-primary ${(fill) ? 'fill':''}">${iconName}</i>`;
}

const setVisualRating = (rate, limit = 5) => {
  let calRate = Math.trunc(rate);
  let visualRate = '';
  for (let i = 1; i <= limit; i++) {
    if (i <= calRate) {
      visualRate += iconRate('star');
    } else if ((rate % calRate > 0.5) && (Math.round(rate) == i)) {
      visualRate += iconRate('star_half');
    } else {
      visualRate += iconRate('star', false);
    }
  }

  return visualRate;
}

//list of restaurants
const listOfResto = data.restaurants;
const list = document.querySelector('.list');
let resto = '';
listOfResto.forEach(item => {
  resto += `<article class="card">
                <img src="${item.pictureId}" alt="Image Restaurant ${item.name}">
                <div class="card-body">
                    <a href="#"><h3 class="card-title">${item.name}</h3></a>
                    <div class="icon"><i class="material-symbols-rounded text-sm">location_on</i><span class="text-sm">${item.city}</span></div>
                    <div class="icon">${setVisualRating(item.rating)}<span class="text-sm">${item.rating}</span></div>
                    <p class="card-text">${strLimit(item.description, 150)}</p>
                </div>
            </article>`;
});
list.innerHTML = resto;
