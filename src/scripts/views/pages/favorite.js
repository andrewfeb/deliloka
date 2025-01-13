import '../components/navbar';
import '../components/hero';

const favorite = {
  async render() {
    return 'Favorite Page';
  },

  async afterRender() {
    return '';
  }
};

export default favorite;
