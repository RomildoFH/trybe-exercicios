const fetch = require('node-fetch');

const getRandomAdvice = () => {
  const url = 'https://api.adviceslip.com/advice'

  const request = fetch(url)
  .then((response) => (response.json()))
  // .then((object) => console.log(object.slip.advice)); // slip e advice são propriedades deste objeto retornado em específico.
  // desestruturando:
  // .then((object) => {
  //   const {slip} = object;
  //   const {id, advice} = slip;
  //   console.log(id, advice);
  // });
  // desestruturando em uma linha:
  .then(({ slip: { id, advice} }) => console.log(id, advice))
  .catch((error) => console.log(`Ops algo deu errado!`, error));
};
getRandomAdvice();