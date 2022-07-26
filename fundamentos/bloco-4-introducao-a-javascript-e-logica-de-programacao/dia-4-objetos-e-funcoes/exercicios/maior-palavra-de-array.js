// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function maiorPalavra (array){
    let maiorPalavra = array[0];
    for (index = 0; index < array.length; index ++){
        if (array[index].length > maiorPalavra.length){
            maiorPalavra = array[index];
        }
    }
    console.log(maiorPalavra);
}
maiorPalavra (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);