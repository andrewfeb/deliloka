class Subscription extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="section-secondary">
        <div class="container">
          <div class="main-content">
          <div class="section-title">
            <h2>Subscribe our weekly subscription</h2>
            <p class="subtitle text-base">We'll send you the best of our restaurants just once a weekly.</p>
          </div>
          <div class="section-body">
            <input class="radius-full" type="email" class="input" name="email" placeholder="Entry your email address">
            <button type="button" class="btn btn-primary">Subscribe</button>
          </div>
          </div>
        </div>
      </section>`;
  }
}

customElements.define('x-subscription', Subscription);
