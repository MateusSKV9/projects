document.addEventListener("DOMContentLoaded", () => {
	const head = document.querySelector("#head");
	const body = document.querySelector("#body");
	const leftEye = document.querySelector(".eye.left");
	const rightEye = document.querySelector(".eye.right");
	const leftArm = document.querySelector(".arm.left");
	const rightArm = document.querySelector(".arm.right");
	const leftLeg = document.querySelector(".leg.left");
	const rightLeg = document.querySelector(".leg.right");
	const containerLetters = document.querySelector("#container-letters");
	const inputLetter = document.querySelector("#inputLetter");
	const pSentLetters = document.querySelector("#pSentLetters");
	const tipContent = document.querySelector("#tipContent");
	const title = document.querySelector("#title");

	let errors = 0;
	let sortedWord = "";
	let sentLetters = [];
	let filledLetters = 0;

	function generateNewWord(word, tip) {
		reset();
		sortedWord = word;
		tipContent.textContent = tip;
		containerLetters.innerHTML = "";
		const fragment = document.createDocumentFragment();

		for (let i = 0; i < word.length; i++) {
			const input = document.createElement("input");
			input.className = "inputLetter";
			input.type = "text";
			input.readOnly = true;
			input.name = `letter${i + 1}`;
			input.title = "letter";
			fragment.appendChild(input);
		}

		containerLetters.appendChild(fragment);
	}

	function wordHasLetter(letter) {
		let lettersOfWord = sortedWord.split("");
		const inputs = containerLetters.querySelectorAll("input");

		let hasLetter = sortedWord.toLowerCase().indexOf(letter.toLowerCase());

		if (!validateLetter(letter)) return;

		inputLetter.value = "";

		if (sentLetters.includes(letter)) return;
		sentLetters.push(letter);
		pSentLetters.textContent += ` - ${letter}`;

		const hangmanParts = [head, body, leftArm, rightArm, leftLeg, rightLeg];

		if (hasLetter >= 0) {
			lettersOfWord.forEach((letterWord, index) => {
				if (letter.toLowerCase() == letterWord.toLowerCase()) {
					inputs[index].value = letter;
					filledLetters++;
				}
			});

			if (filledLetters == lettersOfWord.length) {
				fireConfetti();
				title.classList.add("win");
				finish();
			}

			return;
		} else {
			errors++;

			if (errors <= hangmanParts.length) {
				hangmanParts[errors - 1].classList.remove("hidden");
			}

			if (errors == 6) {
				title.classList.add("lose");
				leftEye.classList.remove("hidden");
				rightEye.classList.remove("hidden");
				finish();
			}
		}
	}

	function resetPerson() {
		head.classList.add("hidden");
		body.classList.add("hidden");
		leftArm.classList.add("hidden");
		rightArm.classList.add("hidden");
		leftLeg.classList.add("hidden");
		rightLeg.classList.add("hidden");
		leftEye.classList.add("hidden");
		rightEye.classList.add("hidden");
	}

	function reset() {
		resetPerson();
		errors = 0;
		filledLetters = 0;
		sentLetters = [];
		title.className = "";
		inputLetter.value = "";
		inputLetter.style.borderColor = "black";
		inputLetter.style.cursor = "text";
		pSentLetters.textContent = "Letras já testadas: ";
		btnPlay.removeAttribute("disabled");
		tipContent.classList.add("hidden");
		inputLetter.removeAttribute("readonly");
		inputLetter.removeAttribute("placeholder");
	}

	function finish() {
		inputLetter.setAttribute("readonly", "readonly");
		inputLetter.style.cursor = "not-allowed";
		btnPlay.setAttribute("disabled", "disabled");
	}

	function validateLetter(letter) {
		if (!letter || letter.trim() === "") {
			inputLetter.style.border = "2px solid red";
			inputLetter.setAttribute("placeholder", "!");
			inputLetter.value = "";
			return false;
		}

		return true;
	}

	const btnNewWord = document.querySelector("#btnNewWord");
	btnNewWord.addEventListener("click", () => {
		searchWord();
	});

	const btnPlay = document.querySelector("#btnPlay");
	btnPlay.addEventListener("click", () => {
		wordHasLetter(inputLetter.value);
	});

	const btnTip = document.querySelector("#btnTip");
	btnTip.addEventListener("click", () => {
		tipContent.classList.toggle("hidden");
	});

	document.addEventListener("keydown", (event) => {
		if (event.key == "Enter") wordHasLetter(inputLetter.value);
	});

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

	async function searchWord() {
		const loading = document.querySelector("#loading-container");
		loading.classList.remove("hidden");
		let longLoadTimer;

		try {
			longLoadTimer = setTimeout(() => {
				const loadingMessage = document.querySelector("#loading-long-timer");
				loadingMessage.textContent += "Servidor quase pronto...🚀";
			}, 5000);

			const response = await fetch("https://json-server-5bev.onrender.com/jogo-da-forca");
			const data = await response.json();

			const randomIndex = Math.floor(Math.random() * data.length);
			const selectedWord = data[randomIndex].palavra;
			const tip = data[randomIndex].pista;

			generateNewWord(selectedWord, tip);
		} catch (error) {
			alert("Erro ao carregar palavra: " + error);
		} finally {
			clearTimeout(longLoadTimer);
			loading.classList.add("hidden");
		}
	}

	searchWord();
});
