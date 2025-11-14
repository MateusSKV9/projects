// let (Quando não poder usar const)
let x = 5;
let y = 6;
let z = x + y;
console.log(z);
let carName;
console.log(carName); // undefined
carName = "Volvo";
console.log(carName);

// const (Não altera. Array e Objetos)
const a = 1;
const b = 2;
const c = a + b;
console.log(c);
const car = "Volvo";

// sublinhado (_)
let _varivavelPrivada = "1234";
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
console.log(_lastName, _x, _100);

// Cifrão ($)
let $ = "Hello, World!";
let $$ = 2;
let $money = 10;
console.log($, $$, $money);

// let e const
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total);

// Declaração automática (Não recomendado)
m = 5;
n = 2;
w = m + n;
console.log(w);

// var (Não recomendado)
var v1 = 5;
var v2 = 5;
var v3 = v1 + v2;
console.log(v3);

// numbers e strings
const pi = 3.14;
let person = "Mateus";
let answer = "Sou eu!";

// Declarando várias variáveis
let a1 = 3,
	a2 = "Olá",
	prince4 = 200;
console.log(a1, a2, prince4);

// Aritmética
let k1 = 3 + 6 + 9;
console.log(k1);

// Concatenação de strings
let hello = "Olá";
let world = "Mundo";
let frase = hello + ", " + world + "!";
console.log(frase);

// Número entre aspas
x = "5" + 2 + 2;
console.log(x); // 522
x = 2 + 3 + "5";
console.log(x); // 55
x = 5 * "3";
console.log(x); // 15
x = 10 / "2";
console.log(x); // 5
