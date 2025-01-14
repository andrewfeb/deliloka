class Hero extends HTMLElement {
  connectedCallback() {
    this.heading = this.getAttribute('heading');
    this.subheading = this.getAttribute('subheading');

    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <div class="hero-content">
          <h1>${this.heading}</h1>
          <p class="subtitle">${this.subheading}</p>
          <a href="#" class="btn btn-primary">Our List</a>
        </div>
      </section>`;
  }
}

customElements.define('x-hero', Hero);
