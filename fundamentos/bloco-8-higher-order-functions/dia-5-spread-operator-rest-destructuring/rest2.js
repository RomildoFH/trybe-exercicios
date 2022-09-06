// Faça uma função que obtenha seis dados de data-hora (ano, mês, dia, hora, minuto, segundo) e retorne os dados de ano, mês e dia formatados. 31/7/1981.

const formatDate = (year, month, day, hour, minute, second) => {
  return `${day}/${month}/${year}`;
}

// Com SPREAD:
const dateInfo = ['1981', '7', '31', '22', '47', '12'];
console.log(formatDate(...dateInfo));

// Com REST:
// const formatDate2 = (year, month, day, ...rest) => {
//   return `${day}/${month}/${year} - ${rest[0]}:${rest[1]}:${rest[2]}`;
// }
// const dateInfo2 = ['1981', '7', '31', '22', '47', '12'];
// console.log(formatDate2(...dateInfo2));

// Refatorando REST:
const formatDate2 = (year, month, day, ...rest) => `${day}/${month}/${year} - ${rest.join(':')}`;
const dateInfo2 = ['1981', '7', '31', '22', '47', '12'];
console.log(formatDate2(...dateInfo2));
