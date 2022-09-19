const fetch = require('node-fetch');

// const getRandomAdvice = () => {
//   const url = 'https://api.adviceslip.com/advice'

//   const request = fetch(url)
//   .then((response) => (response.json()))  
//   .then(({ slip: { id, advice} }) => console.log(id, advice))
//   .catch((error) => console.log(`Ops algo deu errado!`, error));
// };
// getRandomAdvice();

const getRandomAdvice = async () => {
  const url = 'https://api.adviceslip.com/advice'
  try {
    const request = await fetch(url);
    const json = await request.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log('Ops, algo deu errado!');
  }
};
getRandomAdvice();