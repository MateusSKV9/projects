import headerCss from "./header.css?raw"; // Importando o CSS como raw

class MeuHeader extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });

		shadow.innerHTML = `
      <style>${headerCss}</style>

      <header>
        <h1>HEADER</h1>
      </header>
    `;
	}
}

customElements.define("meu-header", MeuHeader);
