// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function numeroMaisRepete (array){

    let contRepeticao = 0;
    let contNumero = 0;
    let indexMaisRepete = 0;

    for (index = 0; index < array.length; index ++){
        let verificaNumero = array[index];
        for (index2 = 0; index2 < array.length; index2 ++){
            if (verificaNumero === array[index2]){
                contNumero += 1;
            }
        }
        if (contNumero > contRepeticao){
            contRepeticao = contNumero;
            indexMaisRepete = index;
        }
        contNumero = 0;
    }
    console.log(array[indexMaisRepete]);
}
numeroMaisRepete ([2, 3, 2, 5, 8, 2, 3]);