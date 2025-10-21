import headerCss from "./header.css?raw"; // Importando o CSS como raw
import headerHtml from "./header.html?raw";

class MeuHeader extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });

		shadow.innerHTML = `
      <style>${headerCss}</style>
      ${headerHtml}
    `;
	}
}

customElements.define("meu-header", MeuHeader);
