class Error404 extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="section-secondary ">
        <div class="container">
          <div class="height-full not-found justify-center">
            <img src="./images/404.png" alt="Error 404">
            <span class="font-medium text-lg">Page Not Found</span>
            <a href="#/" class="btn btn-primary">BACK TO HOME</a>
          </div>
        </div>
      </section>`;
  }
}

customElements.define('x-404', Error404);
