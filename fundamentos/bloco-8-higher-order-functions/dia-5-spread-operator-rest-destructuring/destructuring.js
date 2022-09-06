// Imprima a frase 'Scrooge McDuck form Glasgow, Scotland'

const richestDuckinTheWorld = {
  name:'Scrooge McDuck',
  birthPlace:'Glasgow, Scotland',
  city:'Duckburg',
  jobs: ['Sailor', 'Cowboy', 'Banker', 'Golf']
};

// Sem Destructuring

// const name = richestDuckinTheWorld.name;
// const birthPlace = richestDuckinTheWorld.birthPlace;
// const city = richestDuckinTheWorld.city;
// const jobs = richestDuckinTheWorld.jobs;
// const favorityJob = jobs[2];

// console.log(`${name} from ${birthPlace}`);

// Usando destructuring

const { name, birthPlace, city, jobs } = richestDuckinTheWorld;
console.log(`${name} from ${birthPlace}`);

// Imprimindo os jobs com array desctructuring:
const [ jobOne, jobTwo, ...rest ] = jobs;
console.log(jobOne);
console.log(jobTwo);
console.log(rest);


