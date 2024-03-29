//Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];
// Realiznado utilizando map e sort
// const reportBetter = () => estudantes.map((estudante) => ({
//   name: estudante.nome,
//   materia: estudante.materias.sort((obj1, obj2) => obj2.nota - obj1.nota)[0].name}));
// console.log(reportBetter(estudantes));
// --------------------------------------------------------------------------------
// Realizando utilizando map e reduce

// const report = estudantes.map((estudante) => ({
//   name: estudante.nome,
//   materia: estudante.materias.reduce((acc, materia) => {
//     if(acc.nota > materia.nota) {
//       return acc;
//     } else {
//       return materia;
//     }
//   }).name
// }));
// console.log(report)

// Refatorando PARTE 1
// const report = estudantes.map((estudante) => ({
//   name: estudante.nome,
//   materia: estudante.materias.reduce((acc, materia) => acc.nota > materia.nota ? acc : materia).name
// }));
// console.log(report)

// Refatorando PARTE 2
// const report = estudantes.map((estudante) => ({
//   name: estudante.nome,
//   materia: estudante.materias
//     .reduce((acc, materia) => acc.nota > materia.nota ? acc : materia).name
// }));
// console.log(report)

// Refatorando PARTE 3
const reduzirMaterias = (acc, materia) => {
  if(acc.nota > materia.nota){
    return acc;
  }
  return materia;
}

const report = estudantes.map((estudante) => ({
  name: estudante.nome,
  materia: estudante.materias.reduce(reduzirMaterias).name}));
console.log(report);

