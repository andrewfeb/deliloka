import CONFIG from '../../configs/app';
import helper from '../../utils/helper';

class RestoDetail extends HTMLElement {
  set restaurant(restaurant) {
    this.restoItem = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="detail">
        <img class="cover lazyload" data-src="${CONFIG.BASE_IMAGE_URL('medium', this.restoItem.pictureId)}" alt="${this.restoItem.name}">
        <div class="detail-desc">
          <div class="title">
            <h3 class="text-secondary">${this.restoItem.name}</h3>
            <button type="button" id="favorite" aria-label="Favorite" class="icon btn btn-link">
              <i class="icon justify-center material-symbols-rounded">favorite</i>
            </button>
          </div>
          <p class="font-medium">${this.restoItem.categories.map((category) => category.name).join(' | ')}</p>
          <div class="icon"><i class="material-symbols-rounded text-sm">location_on</i><span class="text-sm">${this.restoItem.address}, ${this.restoItem.city}</span></div>
        <div class="icon">${helper.setVisualRating(this.restoItem.rating)}<span class="text-sm">${this.restoItem.rating}</span></div>
        <p class="card-text">${this.restoItem.description}</p>
        </div>
      </div>
      <div class="detail-menu">
        <h3>Menus</h3>
        <div class="menu">
          <div>
            <h4>Foods</h4>
            <ul>
              ${this.restoItem.menus.foods.map((food) => `<li class="icon"><i class="material-symbols-rounded text-sm text-secondary">check_circle</i>${food.name}</li>`).join('')}
            </ul>
          </div>
          <div>
            <h4>Drinks</h4>
            <ul>
              ${this.restoItem.menus.drinks.map((drink) => `<li class="icon"><i class="material-symbols-rounded text-sm text-secondary">check_circle</i>${drink.name}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('resto-detail', RestoDetail);
