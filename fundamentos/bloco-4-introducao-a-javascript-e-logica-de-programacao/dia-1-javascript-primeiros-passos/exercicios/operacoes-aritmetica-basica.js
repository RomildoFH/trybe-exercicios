const a = 15;
const b = 3;
const c = 27;
const d = -5;

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

if (a > b) {
    console.log("O maior é a");
} else {
    console.log("O maior é b");
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

if (a > b && a > c){
    console.log("O maior é a");
} else if (b > a && b > c) {
    console.log("O maior é b");
} else {
    console.log("O maior é c");
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

if (d < 0){
    console.log("d é negativo");
} else if (d > 0) {
    console.log("d é positivo");
} else {
    console.log("d é nulo");
}