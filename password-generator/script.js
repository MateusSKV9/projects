const alphabetLowerCase = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
const alphabetUpperCase = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const characterSpacials = ["!", "@", "#", "$", "%", "&", "*", "?"];

const btnGenerate = document.querySelector("#btn-generate");
const containerResult = document.querySelector(".container-result");
const result = document.querySelector("#result");
const inputQtyCharacter = document.querySelector("#iqty-character");

btnGenerate.addEventListener("click", (e) => {
	e.preventDefault();
	generatePassword();
});

inputQtyCharacter.addEventListener("change", (e) => {
	if (e.target.value) inputQtyCharacter.classList.remove("error");
});

function generatePassword() {
	const qtyCharacter = inputQtyCharacter.value;
	const lowerCase = document.querySelector("#ilowercase");
	const upperCase = document.querySelector("#iuppercase");
	const number = document.querySelector("#inumber");
	const special = document.querySelector("#ispecial");
	const result = document.querySelector("#result");

	const includeLowerCase = lowerCase.checked;
	const includeUpperCase = upperCase.checked;
	const includeNumber = number.checked;
	const includeSpecial = special.checked;

	result.textContent = "";
	inputQtyCharacter.classList.remove("error");

	if (!qtyCharacter) {
		inputQtyCharacter.classList.add("error");
		inputQtyCharacter.placeholder = "?";
		return;
	}

	let list = [];
	if (includeLowerCase) list = [...list, ...alphabetLowerCase];
	if (includeUpperCase) list = [...list, ...alphabetUpperCase];
	if (includeNumber) list = [...list, ...numbers];
	if (includeSpecial) list = [...list, ...characterSpacials];
	let password = "";

	if (list.length <= 0) {
		alert("Inclua pelo menos uma opção");
		return;
	}

	containerResult.classList.remove("hidden");

	for (let i = 0; i < qtyCharacter; i++) {
		let index = Math.floor(Math.random() * list.length);
		password += list[index];
	}

	result.textContent += password;
	console.log(`Senha: ${password}`);
}

containerResult.addEventListener("click", () => {
	navigator.clipboard
		.writeText(result.textContent)
		.then(() => {
			console.log("Texto copiado!");
		})
		.catch((err) => {
			console.error("Erro ao copiar:", err);
		});
});

containerResult.addEventListener("click", async () => {
	await navigator.clipboard.writeText(result.textContent);
	const password = result.textContent;

	result.innerText = "Copiado!";

	setTimeout(() => {
		result.innerText = password;
		result.disabled = true;
	}, 1500);
});
