// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let numeroNatural = 10;

let resultado = 1;

for (index = numeroNatural; index >= 1; index --){
    resultado = resultado * index;    
}

let calculo = "";

for (contador = numeroNatural; contador >= 1; contador --){
    
    if(contador > 1){
        calculo += contador + " x ";
    } else {
        calculo += contador
    }
}

let impressao = numeroNatural + "! = " + calculo + " = " + resultado

console.log(impressao);