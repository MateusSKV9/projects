import { fireConfetti } from "./confetti.js";

const descricaoResultado = document.querySelector(".descricao-resultado");
const resultado = document.querySelector(".resultado");
const btnVerificar = document.querySelector("#btnVerificar");

btnVerificar.addEventListener("click", (e) => {
	e.preventDefault();
	verificarNota();
});

function verificarNota() {
	const inputMediaGeral = document.querySelector("#iMediaGeral");
	let notaMediaGeral = Number(inputMediaGeral.value);

	descricaoResultado.innerHTML = "";
	resultado.innerHTML = "";

	if (!entradaValida(inputMediaGeral)) return;
	if (passouDireto(notaMediaGeral)) return;

	descricaoResultado.classList.remove("hidden");
	resultado.classList.remove("hidden");

	let notaProvaFinal;
	notaProvaFinal = (50 - 7 * notaMediaGeral) / 3;

	descricaoResultado.innerHTML = `Você precisa tirar uma nota <strong>maior ou igual</strong> a <strong>${notaProvaFinal.toFixed(
		2
	)}</strong> na prova final para passar.`;

	resultado.innerHTML = `Prova Final >= <span>${notaProvaFinal.toFixed(2)}</span>`;
}

function passouDireto(mediaGeral) {
	const resultado = document.querySelector(".resultado");
	descricaoResultado.classList.add("hidden");
	resultado.classList.remove("success");
	resultado.classList.remove("lose");
	resultado.classList.remove("hidden");

	if (mediaGeral >= 7) {
		resultado.classList.add("success");
		resultado.textContent = "Passou direto. Parabéns! 🤩";
		fireConfetti();
		return true;
	} else if (mediaGeral <= 3) {
		resultado.classList.add("lose");
		resultado.textContent = "Perdeu. Sinto Muito! 😥";
		return true;
	}

	return false;
}

function entradaValida(inputMediaGeral) {
	let isNull = inputMediaGeral.value == "";
	let menorQue0 = Number(inputMediaGeral.value) < 0;

	if (isNull || menorQue0) {
		alert(" ❌[ERRO]: Média inválida!");
		resultado.classList.add("hidden");
		inputMediaGeral.value = "";
		return false;
	}

	return true;
}
