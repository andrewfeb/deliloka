import '../components/resto-detail';
import '../components/review-list';
import '../components/review-form';
import RestaurantsDB from '../../data/restaurantsdb-source';
import urlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-button-initiator';

const detail = {
  async render() {
    return `
      <section class="header-section">
        <div class="container">
          <div class="header-title">
            <h2>Restaurant Detail</h2>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="main-content">
          <resto-detail></resto-detail>
        </div>
      </section>
      <section class="section-secondary">
        <div class="container">
          <div class="main-content">
              <h3>Customer Reviews</h3>
              <div class="review">
                <customer-reviews></customer-reviews>
                <review-form class="card-review border-none"></review-form>
              </grid>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    let resto = await RestaurantsDB.get(url.id);
    const restaurantContainer = document.querySelector('resto-detail');
    restaurantContainer.restaurant = resto;

    const customerReviews = document.querySelector('customer-reviews');
    customerReviews.reviews = resto.customerReviews;

    likeButtonInitiator.init({
      likeButton: document.querySelector('#favorite'),
      restaurant: resto
    });

    const sendReview = document.querySelector('#btn-send');
    sendReview.addEventListener('click', async (event) => {
      event.preventDefault();
      const name = document.querySelector('input[name="name"]');
      const review = document.querySelector('textarea[name="review"]');
      if (name.value === '' || review.value === '') {
        alert('Inputan tidak boleh kosong');
      } else {
        await RestaurantsDB.addReview({
          id: url.id,
          name: name.value,
          review: review.value,
        });
        resto = await RestaurantsDB.get(url.id);
        name.value = '';
        review.value = '';
        customerReviews.reviews = resto.customerReviews;
      }
    });
  }
};

export default detail;
