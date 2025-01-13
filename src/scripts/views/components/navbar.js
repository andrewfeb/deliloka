class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="/">
        <img src="images/logo/logo.svg" class="logo" alt="Deliloka">
      </a>
      <nav>
        <button type="button" class="navbar-toggler" aria-label="Menu">
          <svg class="burger" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <ul class="nav-menu">
          <li><a class="nav-link active" class="active" href="#/">HOME</a></li>
          <li><a class="nav-link" href="#/favorite">FAVORITE</a></li>
          <li><a class="nav-link" href="https://github.com/andrewfeb" target="_blank" rel="noreferrer">ABOUT</a></li>
        </ul>
      </nav>`;
  }
}

customElements.define('x-navbar', NavBar);
