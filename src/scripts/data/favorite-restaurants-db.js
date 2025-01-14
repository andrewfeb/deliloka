import { openDB } from 'idb';
import CONFIG from '../configs/app';

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG;

// Open (or create) the database
const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const favoriteRestaurantIdb = {
  // Get a single item by ID
  async get(id) {
    try {
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    } catch (error) {
      console.error('Error getting data:', error);
    }
  },
  // Get all items
  async getAll() {
    try {
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    } catch (error) {
      console.error('Error getting all data:', error);
    }
  },
  // Add or update an item
  async put(restaurant) {
    try {
      return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    } catch (error) {
      console.error('Error putting data:', error);
    }
  },
  // Delete an item by ID
  async delete(id) {
    try {
      return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  },
};

export default favoriteRestaurantIdb;
