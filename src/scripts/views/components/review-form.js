class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h4>Leave your review:</h4>
      <form>
        <div class="field">
          <input type="text" name="name" placeholder="Entry your name" required>
        </div>
        <div class="field">
          <textarea name="review" rows="3" placeholder="Entry your review" required></textarea>
        </div>
        <div class="field">
          <button type="submit" id="btn-send" class="btn btn-primary btn-full">Send Review</review>
        </div>
      </form>
    `;
  }
}

customElements.define('review-form', ReviewForm);
