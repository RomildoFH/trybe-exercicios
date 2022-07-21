//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 5300;

console.log("O salaário bruto é de R$ " + salarioBruto)

let INSS;

if (salarioBruto <= 1556.94 && salarioBruto > 0) {
    INSS = 0.08 * salarioBruto;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    INSS = 0.09 * salarioBruto;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    INSS = 0.11 * salarioBruto;
} else if (salarioBruto > 5189.82){
    INSS = 570.88;
} else {
    INSS = "Verifique valor informado";
}

console.log("A dedução do INSS é de R$ " + INSS);

let salarioBase = salarioBruto - INSS

console.log("O salário base para o cálculo do imposto de renda é de R$ " + salarioBase);

let IR;

if (salarioBase > 0 && salarioBase <= 1903.98) {
    IR = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    IR = salarioBase * 0.075 - 142.80;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    IR = salarioBase * 0.15 - 354.80;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    IR = salarioBase * 0.225 - 636.13;
} else {
    IR = salarioBase * 0.275 - 869.36;
}

console.log ("O IR é de R$ " + IR);

let salarioLiquido = salarioBruto - INSS - IR;

let contribuicaoMensal = INSS + IR

console.log("Total de contribuição mensal R$ " + contribuicaoMensal);

console.log("O salário líquido é de R$ " + salarioLiquido);