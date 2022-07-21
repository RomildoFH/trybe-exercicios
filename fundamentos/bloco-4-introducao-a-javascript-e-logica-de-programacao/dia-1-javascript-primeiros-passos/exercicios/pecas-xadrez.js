//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let pecaXadrez = "sabão";

let pecaLowerCase = pecaXadrez.toLowerCase();

//Resolução utilizando if-else if-else
console.log("Resolução utilizando if-else if-else")

if (pecaLowerCase === "peão") {
    console.log(pecaLowerCase + ": Apenas uma casa para frente. O primeiro movimento da peça podem ser duas casas. Some come na diagonal");
} else if (pecaLowerCase === "torre") {
    console.log(pecaLowerCase + ": Livre para frente ou para os lados");
} else if (pecaLowerCase === "cavalo") {
    console.log(pecaLowerCase + ": Movimentos em L de 3 casas");
} else if (pecaLowerCase === "bispo") {
    console.log(pecaLowerCase + ": Livre para andar na diagonal");
} else if (pecaLowerCase === "rainha") {
    console.log(pecaLowerCase + ": Livre para percorrer nas nas direções verticais, horizontais e diagonais");
} else if (pecaLowerCase === "rei") {
    console.log(pecaLowerCase + ": Apenas uma casa em qualquer direção");
} else {
    console.log("Erro, Verifique a peça informada");
}

//Resolução utilizando switch
console.log("Resolução utilizando switch")

switch (pecaLowerCase) {
    case "peão": console.log(pecaLowerCase + ": Apenas uma casa para frente. O primeiro movimento da peça podem ser duas casas. Some come na diagonal");
        break;
    case "torre": console.log(pecaLowerCase + ": Livre para frente ou para os lados");
        break;
    case "cavalo": console.log(pecaLowerCase + ": Movimentos em L de 3 casas");
        break;    
    case "bispo": console.log(pecaLowerCase + ": Livre para andar na diagonal");
        break;
    case "rainha": console.log(pecaLowerCase + ": Livre para percorrer nas nas direções verticais, horizontais e diagonais");
        break;
    case "rei": console.log(pecaLowerCase + ": Apenas uma casa em qualquer direção");
    default: console.log("Erro, Verifique a peça informada")
}