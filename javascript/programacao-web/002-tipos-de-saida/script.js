document.addEventListener("DOMContentLoaded", () => {
	const p = document.querySelector("#texto");
	p.textContent = "Meu nome é Mateus Santos";

	p.insertAdjacentHTML("beforebegin", "<h4>insertAdjacentHTML('beforebegin') - antes do p</h4>");

	p.insertAdjacentHTML("afterbegin", "<h4>insertAdjacentHTML('afterbegin') - primeiro dentro de p</h4>");
	p.insertAdjacentHTML("beforeend", "<h4>insertAdjacentHTML('beforeend') - último dentro de p</h4>");

	p.insertAdjacentHTML("afterend", "<h4>insertAdjacentHTML('afterend') - depois do p</h4>");
});

document.write("Conteúdo escrito usando <strong>document.write()</storng>");

const itens = [
	{ id: 5, name: "Glenn Miller" },
	{ id: 10, name: "Alta Grant" },
	{ id: 2, name: "Johanna Ray" },
];

function createList(itens) {
	const fragment = document.createDocumentFragment();

	itens.forEach((item) => {
		const li = document.createElement("li");
		li.textContent = `${item.id.toString().padStart(2, "0")} - ${item.name}`;

		fragment.appendChild(li);
	});

	return fragment;
}

const ul = document.querySelector("ul");
ul.appendChild(createList(itens));
