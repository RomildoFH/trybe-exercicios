const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const adicionaPropriedade = (obj, chave, valor) => {
    obj[chave] = valor;
}
adicionaPropriedade(lesson2, 'turno', 'noite');
console.log(lesson2);
console.log('--------------')

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listarChaves = (obj) => {
    console.log(Object.keys(obj));
}
listarChaves(lesson1);
console.log('--------------')

// 3. Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const tamanhoObjeto = obj => {
    console.log(Object.keys(obj).length);
}
tamanhoObjeto(lesson3);
console.log('------------------')

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listarValores = obj => {
    console.log(Object.values(obj));
}
listarValores(lesson2);
console.log('------------------')

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
console.log('------------------')

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalEstudantes = (obj) => {
    let totalEstudantes = 0;
    for(let lesson in allLessons) {
        totalEstudantes += allLessons[lesson].numeroEstudantes;
    }
    console.log(totalEstudantes);
}
totalEstudantes(allLessons);
console.log('------------------')

// 7. Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. 
const getKeyValue = (obj, index) => {
    console.log(Object.values(obj)[index]);
}
getKeyValue (allLessons, 1);

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verificarPar = (obj, chave, valor) => {
    valor = parseInt(valor);
    if(Object.keys(obj).includes(chave)) {
        if(Object.values(obj).includes(valor)) {
            console.log('Sim');
        } else {
            console.log('Não');
        }
    } else {
        console.log('Não');
    }
}
verificarPar (lesson1, 'numeroEstudantes', '20');