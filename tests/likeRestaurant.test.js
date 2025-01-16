import * as testFactories from './utils/testFactories';
import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-db';

describe('Like a Restaurant', () => {
  const addLikeButton = () => {
    document.body.innerHTML = '<button type="button" id="favorite"></button>';
  };

  beforeEach(() => {
    addLikeButton();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButton({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="Like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButton({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="Unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await testFactories.createLikeButton({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('#favorite').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestaurantIdb.get('rqdv5juczeskfw1e867');

    expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' });

    favoriteRestaurantIdb.delete('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await testFactories.createLikeButton({ id: 'rqdv5juczeskfw1e867' });

    await favoriteRestaurantIdb.put({ id: 'rqdv5juczeskfw1e867' });
    document.querySelector('#favorite').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAll()).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);

    favoriteRestaurantIdb.delete('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant when it has no id', async () => {
    await testFactories.createLikeButton({});

    document.querySelector('#favorite').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAll()).toEqual([]);
  });
});
