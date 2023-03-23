import Data from "./Data";
import Student from "./Student";

console.log('---> Exercício 01 e 02 <---');
const romildo = new Student('1234', 'Romildo Silva')

console.log('Nova pessoa estudante: ', romildo);

romildo.testGrades = [10, 8, 9, 10];

console.log('Cadastradas notas de testes: ', romildo);

romildo.workGrades = [7, 9];

console.log('Cadastradas notas de trabalhos: ', romildo);

console.log('O somatório de todas as notas é: ', romildo.sumGrades());

console.log(`A média final do aluno ${romildo.name} é: ${romildo.avarageGrades()}`);

console.log('-------------------');

console.log('---> Exercício 05 e 06 <---');

const Data1 = new Data(5, 11, 1994);
console.log(Data1);

const Date2 = new Data(1994, 11, 5);
console.log(Date2);

const Data3 = new Data(24, 4, 2004);
console.log(Data3);

console.log('Data inferior', Data3.compare(Date2));

const Data4 = new Data(13, 7, 2023);

console.log('Data superior', Data3.compare(Data4));

console.log('Data igual', Data4.compare(Data4));

console.log('O mês 13/07/2023 é: ', Data4.getMonthName());

const testDate = new Data(29, 1, 1989);
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd de M de aaaa'));
console.log(testDate.format('dd de mm de aaaa'));
console.log(testDate.format('dd de M de aaaa'));
console.log(testDate.format('dd/m/aaaa'));
console.log(testDate.format('dd/mm/aaaa'));

console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');

console.log('-------------------');
