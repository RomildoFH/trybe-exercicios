// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somaNumeros (numero){

    let resultado = 0;
    let equacao = "";
    for (var index = 1; index <= numero; index ++){
        resultado = resultado + index;
        if(index < numero){
            equacao += index + "+";
        } else {
            equacao += index;
        }
    }
    console.log(equacao + " = " + resultado);
}

somaNumeros (10);