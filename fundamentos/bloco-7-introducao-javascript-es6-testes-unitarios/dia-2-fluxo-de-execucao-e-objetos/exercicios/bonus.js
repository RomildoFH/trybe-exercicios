const allLessons = {
    lesson1: {
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã'
    },
    lesson2: {
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'noite'
    },
    lesson3: {
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite'
    }
}
// 1. 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const estudantesPorProfessor = (professorNome) => {
    let estudantes = 0;
    for(let index in allLessons) {
        if(allLessons[index].professor === professorNome) {
            estudantes += allLessons[index].numeroEstudantes;
        }
    }
    console.log(estudantes);
}
estudantesPorProfessor('Maria Clara');
console.log('-------------')

// 2. 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
 const dados = (obj, professorNome) => {
    const materiasEnsinadas = [];
    let numeroAlunos = 0;
    for(let index in obj) {
        if(obj[index].professor === professorNome) {
            materiasEnsinadas.push(obj[index].materia);
            numeroAlunos += obj[index].numeroEstudantes;
        }
    }
    return ({ aulas: materiasEnsinadas, estudantes: numeroAlunos });
 }

 const relatorio = (obj, professorNome) => {
    const reporte = {};
    reporte.professor = professorNome;
    Object.assign(reporte, dados(obj, professorNome));
    return reporte;
 }

 console.log(relatorio(allLessons, 'Maria Clara'));