function upperName(nome) {
	return nome.toUpperCase();
}
document.write(upperName("mateus"));

const lowerName = (nome) => {
	return nome.toLowerCase();
};
document.write("<br>" + lowerName("Eliza"));

const countLetters = (word) => word.length;

document.write("<br> Quantidade de letras: " + countLetters("Mati"));
