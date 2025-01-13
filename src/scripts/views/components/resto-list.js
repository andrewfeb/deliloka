import './resto-item';

class RestoList extends HTMLElement {
  set restaurants(restaurants) {
    this.restoList = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this.restoList?.forEach((resto) => {
      const restoItem = document.createElement('x-resto-item');
      restoItem.classList.add('card');
      restoItem.resto = resto;
      this.appendChild(restoItem);
    });
  }

  renderError(message) {
    this.innerHTML = `<h2>${message}</h2>`;
  }
}

customElements.define('x-resto-list', RestoList);
