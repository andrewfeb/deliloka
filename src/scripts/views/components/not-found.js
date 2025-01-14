class NotFound extends HTMLElement {
  set message(message) {
    this.msg = message;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="./images/not_found.png" alt="Not Found">
      <span class="font-medium">${this.msg}</span>
    `;
  }
}

customElements.define('x-not-found', NotFound);
