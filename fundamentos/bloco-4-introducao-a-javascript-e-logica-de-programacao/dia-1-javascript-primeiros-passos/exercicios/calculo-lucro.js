//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

const custoLiquido = 100;
const valorVenda = 160;

let custoTotal = custoLiquido * 1.20;
let lucroUnitario = valorVenda - custoTotal;
let lucroTotal = lucroUnitario * 1000;

if (custoLiquido <= 0 || valorVenda <= 0) {
    console.log("Erro, revise os dados")    
} else {
    console.log("O lucro é de R$ " + lucroTotal);
}

