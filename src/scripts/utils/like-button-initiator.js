import favoriteRestaurantIdb from '../data/favorite-restaurants-db';
import { createIconLikeTemplate, createIconUnlikeTemplate } from '../views/templates/template-creator';

const likeButtonInitiator = {
  async init({ likeButton, restaurant }) {
    this.mLikeButton = likeButton;
    this.mRestaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.mRestaurant;
    if (await this.isRestaurantExist(id)) {
      this.renderUnlike();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await favoriteRestaurantIdb.get(id);

    return !!restaurant;
  },

  renderLike() {
    this.mLikeButton.setAttribute('aria-label', 'Like this restaurant');
    this.mLikeButton.innerHTML = createIconUnlikeTemplate();
    this.mLikeButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.put(this.mRestaurant);
      this.renderButton();
    });
  },

  renderUnlike() {
    this.mLikeButton.setAttribute('aria-label', 'Unlike this restaurant');
    this.mLikeButton.innerHTML = createIconLikeTemplate();
    this.mLikeButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.delete(this.mRestaurant.id);
      this.renderButton();
    });
  },
};

export default likeButtonInitiator;
