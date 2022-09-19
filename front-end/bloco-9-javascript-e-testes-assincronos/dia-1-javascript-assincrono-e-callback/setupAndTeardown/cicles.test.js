// cicles.test.js

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

beforeEach(() => {
  cities = [...cities, 'Pindamonhangaba'];
});

test('Testa a função addCity utilizando o beforeEach', () => {
  expect.assertions(5);
  addCity('Campinas');
  addCity('Goiania');
  addCity('Recife');
  expect(cities).toHaveLength(4);
  expect(cities).toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
  expect(cities).toContain('Pindamonhangaba');
});

test('Testa a função removeCity utilizando o beforeEach', () => {
  expect.assertions(5);
  removeCity('Campinas');
  expect(cities).toHaveLength(4);
  expect(cities).not.toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
  expect(cities).toContain('Pindamonhangaba');
  console.log(cities);
});