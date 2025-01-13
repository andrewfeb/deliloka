import '../components/navbar';
import '../components/hero';
import '../components/resto-list';
import '../components/subscription';
import RestaurantsDB from '../../data/restaurantsdb-source';

const home = {
  async render() {
    return `
      <x-hero
        heading="Discover Most Culinary Places"
        subheading="We will help you to discover a restaurant you like"></x-hero>
      <section class="container">
        <div class="main-content">
          <div class="section-title">
            <h2>List Restaurant</h2>
            <p class="subtitle text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <x-resto-list class="list grid"></x-resto-list>
      </div>
      </section>
      <x-subscription />
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsDB.getAll();
    console.log(restaurants);
    const restoList = document.querySelector('x-resto-list');
    if (restoList) {
      restoList.restaurants = restaurants;
    }
  }
};

export default home;
