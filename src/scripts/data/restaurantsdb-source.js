import API from '../configs/api';
import CONFIG from '../configs/app';

class RestaurantsDB {
  static async getAll() {
    const response = await (await fetch(API.LIST)).json();

    return response.restaurants;
  }

  static async get(id) {
    const response = await (await fetch(API.DETAIL(id))).json();

    return response.restaurant;
  }

  static async addReview(data) {
    const response = await fetch(API.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': CONFIG.TOKEN_KEY,
      },
      body: JSON.stringify(data),
    });

    return response;
  }
}

export default RestaurantsDB;
