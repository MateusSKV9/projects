import footerCss from './footer.css?raw';  // Importando o CSS como raw

class MeuFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>${footerCss}</style>
      <footer>
        <h1>FOOTER</h1>
      </footer>
    `;
  }
}

customElements.define('meu-footer', MeuFooter);
