import CONFIG from '../../configs/app';
import helper from '../../utils/helper';

class RestoItem extends HTMLElement {
  set resto(resto) {
    this.restoItem = resto;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="${CONFIG.BASE_IMAGE_URL('small', this.restoItem.pictureId)}" alt="${this.restoItem.name}">
      <div class="card-body">
        <a class="btn btn-link" href="/#/detail/${this.restoItem.id}"><h3 class="card-title">${this.restoItem.name}</h3></a>
        <div class="icon"><i class="material-symbols-rounded text-sm">location_on</i><span class="text-sm">${this.restoItem.city}</span></div>
        <div class="icon">${helper.setVisualRating(this.restoItem.rating)}<span class="text-sm">${this.restoItem.rating}</span></div>
        <p class="card-text">${helper.strLimit(this.restoItem.description, 150)}</p>
      </div>
    `;
  }
}

customElements.define('x-resto-item', RestoItem);
