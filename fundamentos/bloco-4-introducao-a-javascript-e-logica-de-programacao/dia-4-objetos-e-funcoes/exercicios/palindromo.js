// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

function verificaPalindrome (word){
let palavra = word.toLowerCase();
let palavraInvertida = "";
let verificacao;

for (index = palavra.length - 1; index >= 0; index --){
    
    palavraInvertida += palavra[index];
}
 if (palavra === palavraInvertida){
    verificacao = true;
 } else {
    verificacao = false;
 }

 console.log(verificacao);
}

verificaPalindrome ("Hannah")