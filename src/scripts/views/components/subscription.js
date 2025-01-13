class Subscription extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="subscription">
        <div class="container">
          <div class="section-title">
            <h2>Subscribe our weekly subscription</h2>
            <p class="subtitle text-base">We'll send you the best of our restaurants just once a weekly.</p>
          </div>
          <div class="section-body">
            <input type="email" class="input" name="email" placeholder="Entry your email address">
            <button type="button" class="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>`;
  }
}

customElements.define('x-subscription', Subscription);
