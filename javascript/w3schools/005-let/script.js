// let
let x = 10;

{
	let x = 2;
}

console.log(x); // x = 2

let y = 1;
// let y = 1; Não permitido
console.log(y);

{
	let y = 9; // permitido
	console.log(y);
}

{
	let y = 7; // permitido
	console.log(y);
}

carName = "Volvo";
console.log(carName);
var carName;

nome = "Pedro"; // Erro
let nome = "Ana"; 
console.log(nome);
