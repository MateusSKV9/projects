const descricaoResultado = document.querySelector(".descricao-resultado");
const resultado = document.querySelector(".resultado");
const btnVerificar = document.querySelector("#btnVerificar");
const form = document.querySelector("form");
let notaMediaFinal;

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
	)}</strong> na prova final .`;

	resultado.innerHTML = `Prova Final >= <span>${notaProvaFinal.toFixed(2)}</span>`;
}

function passouDireto(mediaGeral) {
	const resultado = document.querySelector(".resultado");
	if (mediaGeral >= 7) {
		resultado.classList.remove("hidden");
		resultado.textContent = "Passou direto. Parabéns! 🤩";
		fireConfetti();
		return true;
	} else if (mediaGeral <= 3) {
		resultado.classList.remove("hidden");
		resultado.textContent = "Perdeu. Sinto Muito! 😥";
		return true;
	}

	return false;
}

function entradaValida(inputMediaGeral) {
	let isNull = inputMediaGeral.value == "";
	let menorQue0 = Number(inputMediaGeral.value) < 0;

	if (isNull || menorQue0) {
		alert(" ❌[ERRO]: Nota inválida!");
		resultado.classList.add("hidden");
		inputMediaGeral.value = "";
		return false;
	}

	return true;
}

function fireConfetti() {
	var count = 200;
	var defaults = {
		origin: { y: 0.7 },
	};

	function fire(particleRatio, opts) {
		confetti({
			...defaults,
			...opts,
			particleCount: Math.floor(count * particleRatio),
		});
	}

	fire(0.25, {
		spread: 26,
		startVelocity: 55,
	});
	fire(0.2, {
		spread: 60,
	});
	fire(0.35, {
		spread: 100,
		decay: 0.91,
		scalar: 0.8,
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 25,
		decay: 0.92,
		scalar: 1.2,
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 45,
	});
}
