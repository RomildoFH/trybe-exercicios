//Aula vídeo
//Criar tabela do número 7 utilizando estrutura for;

var numero = 7;

for (var contador = 1; contador <= 10; contador ++) {
    console.log(""); //inserindo espaço entre linhas
    console.log(numero + " X " + contador + " = " + numero * contador); //calculando
}

//Exercício aula
//Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (var index = 0; index < groceryList.length; index ++){
    console.log(groceryList[index]);
}
