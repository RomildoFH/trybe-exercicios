// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let menorString = array[0];

let maiorString = array[0];

//verificando qual a menor string

for (index = 0; index < array.length; index ++){
    if(array[index].length < menorString.length){
        menorString = array[index];
    }
}

console.log("A menor palavra do array é: " + menorString);

//verificando a maior string

for (contador = 0; contador < array.length; contador ++){
    if(array[contador].length > maiorString.length){
        maiorString = array[contador];
    }
}

console.log("A maior palavra do array é: " + maiorString);