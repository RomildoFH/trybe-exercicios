// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. 
//Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

let objeto = {
    area: 0,
    perimetro: 0
  }

function quadrado (base, altura){
    objeto.area = base * altura;    
    objeto.perimetro = 2 * base + 2 * altura;    
    console.log(objeto);
};


quadrado (2, 2);

console.log("-----------------")

function quadrado2 (base, altura){
    let resultado = {
        area: base * altura,
        perimetro: 2 * base + 2 * altura
    };
    return resultado;
}
console.log(quadrado2 (2, 2));
console.log("-----------------")

//Exercício 2 - Crie uma função que, dado um array de números inteiros, 
//retorne a quantidade de números pares e ímpares no formato:

var numeros = {
    pares: 0,
    ímpares: 0
  }

function classeNumeros (arrey) {
  for (contador = 0; contador < arrey.length; contador ++){
    if (arrey[contador] % 2 === 0){
      numeros.pares += 1;
    } else {
      numeros.ímpares += 1;
    }
   }
  console.log(numeros) ;
}

classeNumeros ([1, 2, 3, 4, 5, 6, 7]);
console.log("-----------------")


//Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.
//Dica: Use o split.
// valor de teste: ‘trybe’ e ‘be’
// valor esperado no retorno da função: true
//verificaFimPalavra(‘trybe’, ‘be’);  
// Retorno esperado: true  
//verificaFimPalavra(‘joaofernando’, ‘fernan’);  
//  Retorno esperado: false;  

function verificaFimPalavra (word, ending){

  let palavra = word;
  let final = ending
  let palavraInvertida = "";
  let finalInvertido = "";
  let resultado = false;

  for (index = palavra.length -1 ; index >= 0; index --){
      palavraInvertida += palavra[index];
  }

  for (index = final.length -1 ; index >= 0; index --){
    finalInvertido += final[index];
    if(finalInvertido[index] === palavraInvertida[index]){
      resultado = true;
    }
  }

  console.log("A palavra invertida é: " + palavraInvertida);
  console.log("O final invertido é: " + finalInvertido);
  console.log(resultado + ": é final da palavra");

}

verificaFimPalavra ('Romildo', 'mildo')