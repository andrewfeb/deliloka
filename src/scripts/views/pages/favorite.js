import '../components/resto-list';
import '../components/not-found';
import favoriteRestaurantIdb from '../../data/favorite-restaurants-db';

const favorite = {
  async render() {
    return `
      <section class="header-section">
        <div class="container">
          <div class="header-title">
            <h2>Restaurant Favorite</h2>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="favorite main-content justify-center">
        </div>
      </section>`;
  },

  async afterRender() {
    const restaurants = await favoriteRestaurantIdb.getAll();

    const favoriteContainer = document.querySelector('.favorite');
    if (restaurants.length === 0) {
      const error = document.createElement('x-not-found');
      error.classList.add('not-found');
      error.message = 'You don&#39;t have any favorite restaurant';
      favoriteContainer.appendChild(error);
    } else {
      const restaurantsContainer = document.createElement('x-resto-list');
      restaurantsContainer.classList.add('list', 'grid');
      restaurantsContainer.restaurants = restaurants;
      favoriteContainer.appendChild(restaurantsContainer);
    }
  }
};

export default favorite;
