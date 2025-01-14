import './review-item';

class ReviewList extends HTMLElement {
  set reviews(reviews) {
    this.reviewList = reviews;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this.reviewList?.forEach((review) => {
      const reviewItem = document.createElement('review-item');
      reviewItem.review = review;
      this.appendChild(reviewItem);
    });
  }

  renderError(message) {
    this.innerHTML = `<h2>${message}</h2>`;
  }
}

customElements.define('customer-reviews', ReviewList);
