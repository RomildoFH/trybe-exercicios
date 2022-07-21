//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 

let nota = 120;

if (nota < 0 || nota > 100) {
    console.log("Nota inválida");
} else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if (nota < 50) {
    console.log("F");
}
