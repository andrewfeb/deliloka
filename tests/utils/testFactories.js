import likeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButton = async (restaurant) => {
  await likeButtonInitiator.init({
    likeButton: document.querySelector('#favorite'),
    restaurant: restaurant,
  });
};

export { createLikeButton };
