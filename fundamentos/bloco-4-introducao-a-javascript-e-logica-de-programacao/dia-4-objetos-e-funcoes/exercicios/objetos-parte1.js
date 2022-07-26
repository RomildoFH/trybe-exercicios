let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
  //Bem-vinda, Margarida

  console.log("Bem-vinda, " + info.personagem);
  console.log('---------------')

  //🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

  info.recorrente = 'Sim'

  console.log(info);
  console.log('---------------')

  //3 - Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
    console.log(key);
}
console.log('---------------')
//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. 

for (let key in info) {
    console.log(info[key]);
}
console.log('---------------')

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = [{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  },
  {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  }];

  console.log(info2[0].personagem + " e " + info2[1].personagem);
  console.log(info2[0].origem + " e " + info2[1].origem);
  console.log(info2[0].nota + " e " + info2[1].nota);

    if (info2[0].recorrente ===  'Sim' && info2[1].recorrente === 'Sim'){
            console.log("Ambos recorrentes");
    } else if (info2[0].recorrente ===  'Sim' && info2[1].recorrente === 'Não') {
            console.log("Apenas um é recorrente");
    } else if (info2[0].recorrente ===  'Não' && info2[1].recorrente === 'Sim') {
            console.log("Apenas um é recorrente");
    } else if (info2[0].recorrente ===  'Não' && info2[1].recorrente === 'Não') {
            console.log("Nenhum é recorrente");
    } else {
            console.log("Verifique a recorrência informada");
    }

// for (var index = 0; index < info2.length; index ++){  
//     for(next = 1; index < info2.length; next ++){        
//     }
//     if (info2[index].recorrente ===  'Sim' && info2[next].recorrente === 'Sim'){
//             console.log("Ambos recorrentes");
//     } else if (info2[index].recorrente ===  'Sim' && info2[next].recorrente === 'Não') {
//             console.log("Apenas um é recorrente");
//     } else if (info2[index].recorrente ===  'Não' && info2[next].recorrente === 'Sim') {
//             console.log("Apenas um é recorrente");
//     } else if (info2[index].recorrente ===  'Não' && info2[next].recorrente === 'Não') {
//             console.log("Nenhum é recorrente");
//     } else {
//             console.log("Verifique a recorrência informada");
//     }
// }

