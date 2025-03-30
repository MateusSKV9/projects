const languages = ["JavaScript", "Java", "Python", "C", "C++", "C#", "Ruby", "Kotlin", "Go", "Swift"];
const input = document.getElementById("input-lang");
const suggestions = document.getElementById("suggestions");

function updateSuggestions() {
	const query = input.value.toLowerCase();
	suggestions.innerHTML = "";

	const filtered = languages.filter((lang) => lang.toLowerCase().includes(query));

	if (filtered.length === 0 || query === "") {
		suggestions.style.display = "none";
		return;
	}

	filtered.forEach((lang) => {
		const li = document.createElement("li");
		li.textContent = lang;
		li.addEventListener("click", () => {
			input.value = lang;
			suggestions.style.display = "none";
		});
		suggestions.appendChild(li);
	});

	suggestions.style.display = "block";
}

input.addEventListener("input", updateSuggestions);

document.addEventListener("click", (e) => {
	if (!input.contains(e.target) && !suggestions.contains(e.target)) {
		suggestions.style.display = "none";
	}
});

// -----------------

const btnAumentar = document.querySelector("#aumentar");
const btnDiminuir = document.querySelector("#diminuir");
const progress = document.querySelector("progress");
const progressValue = document.querySelector("#progress-value");
const success = document.querySelector("#success");

getProgress();
showProgressValue();

btnAumentar.addEventListener("click", () => updateProgress(10));

btnDiminuir.addEventListener("click", () => updateProgress(-10));

function updateProgress(change) {
	progress.value += change;
	localStorage.setItem("currentProgress", progress.value);
	showProgressValue();
	toggleSuccessMessage();
}

function toggleSuccessMessage() {
	if (progress.value != 100) {
		success.style.display = "none";
	} else {
		success.style.display = "block";
	}
}

function showProgressValue() {
	progressValue.textContent = progress.value;
}

function getProgress() {
	let currentProgress = localStorage.getItem("currentProgress");

	if (currentProgress) {
		progress.value = Number(currentProgress);
	} else {
		localStorage.setItem("currentProgress", 0);
	}
}
