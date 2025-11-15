// const
const PI = 3.14;
// PI = 3.1415; (Não permitido)
// PI = PI + 10; (Não permitido)
console.log(PI);

// const E; (Erro: precisa ser inicializado)
E = 2.71828;

// Referencia constante a um array
const cars = ["Gol", "Fiat47", "Palio"];
console.log(cars);

cars[0] = "Gol Quadrado";
console.log(cars);

cars.push("Ferrari");
console.log(cars);

// cars = ["Volvo", "Fusca"]; (Não permitido)

// Refencia constante a um objeto
const car = { type: "Fiat", model: "500", color: "white" };

car.color = "Red";
car.owner = "Johnson";
console.log(car);

// car = { type: "Uno", model: "400", color: "black" }; (Não permitido)

const nome = "Mateus";

{
	const nome = "Pedro";
}

console.log(nome);
