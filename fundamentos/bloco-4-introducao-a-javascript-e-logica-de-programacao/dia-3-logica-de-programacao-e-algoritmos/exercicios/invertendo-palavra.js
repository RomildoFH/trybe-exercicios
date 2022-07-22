// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let palavra = "Romildo";

let palavraInvertida = "";

for (index = palavra.length -1 ; index >= 0; index --){
    palavraInvertida += palavra[index];
}

console.log(palavraInvertida);