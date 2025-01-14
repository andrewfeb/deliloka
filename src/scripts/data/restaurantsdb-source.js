import API from '../configs/api';

class RestaurantsDB {
  static async getAll() {
    try {
      const response = await fetch(API.LIST);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const responseJson = await response.json();

      return responseJson.restaurants;
    } catch (error) {
      console.error(error.message);
    }
  }

  static async get(id) {
    try {
      const response = await fetch(API.DETAIL(id));

      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}`);
      }

      const responseJson = await response.json();

      return responseJson.restaurant;
    } catch (error) {
      console.error(error.message);
    }
  }

  static async addReview(data) {
    try {
      const response = await fetch(API.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json;',
        },
        body: JSON.stringify(data),
      });

      return response;
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default RestaurantsDB;
