class ReviewItem extends HTMLElement {
  set review(review) {
    this.reviewItem = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card-review">
        <div>
          <span class="text-sm font-bold">${this.reviewItem.name}</span> -
          <span class="text-xs">${this.reviewItem.date}</span>
        </div>
        <p class="text-sm">${this.reviewItem.review}</p>
      </div>
    `;
  }
}

customElements.define('review-item', ReviewItem);
