import * as testFactories from './utils/testFactories';
import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-db';

describe('Unliking a Restaurant', () => {
  const addLikeButton = () => {
    document.body.innerHTML = '<button type="button" id="favorite"></button>';
  };

  beforeEach(async () => {
    addLikeButton();
    await favoriteRestaurantIdb.put({ id: 'rqdv5juczeskfw1e867' });
  });

  afterEach(async () => {
    await favoriteRestaurantIdb.delete('rqdv5juczeskfw1e867');
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await testFactories.createLikeButton({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="Unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await testFactories.createLikeButton({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="Like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await testFactories.createLikeButton({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('[aria-label="Unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAll()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await testFactories.createLikeButton({ id: 'rqdv5juczeskfw1e867' });

    await favoriteRestaurantIdb.delete('rqdv5juczeskfw1e867');
    document.querySelector('[aria-label="Unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAll()).toEqual([]);
  });
});
