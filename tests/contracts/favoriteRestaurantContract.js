const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.put({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.put({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteRestaurant.get('rqdv5juczeskfw1e867'))
      .toEqual({ id: 'rqdv5juczeskfw1e867' });
    expect(await favoriteRestaurant.get('s1knt6za9kkfw1e867'))
      .toEqual({ id: 's1knt6za9kkfw1e867' });
    expect(await favoriteRestaurant.get('w9pga3s2tubkfw1e867'))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.put({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAll())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.put({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.put({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteRestaurant.getAll())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.put({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.put({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.put({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteRestaurant.delete('rqdv5juczeskfw1e867');

    expect(await favoriteRestaurant.getAll())
      .toEqual([
        { id: 's1knt6za9kkfw1e867' },
        { id: 'w9pga3s2tubkfw1e867' },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.put({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.put({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.put({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteRestaurant.delete('uewq1zg2zlskfw1e867');

    expect(await favoriteRestaurant.getAll())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
        { id: 'w9pga3s2tubkfw1e867' },
      ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
