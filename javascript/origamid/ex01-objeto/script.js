const menu = {
	class: ".principal",
	ativar() {
		const menuElement = document.querySelector(this.class);
		console.log(menuElement);
	},
};

let searchElements = [];

const defaultElements = {
	class: ".default",
	ativar() {
		const elements = document.querySelectorAll(this.class);
		searchElements = elements;
		console.log(elements);
	},
};

menu.ativar();
defaultElements.ativar();

searchElements.forEach((element, i) => {
	console.log(i + " - " + element.innerText);
});
