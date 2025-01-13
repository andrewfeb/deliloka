import CONFIG from './app';

const API = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  SEARCH: (search) => `${CONFIG.BASE_URL}/search?q=${search}`,
};

export default API;
