const express = require('express'); // Importa o express
const fs = require('fs').promises;
const path = require('path');

const app = express(); // utilizar o express

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

app.use(express.json()); // Transforma dados JSON para JavaScript e poder trabalhar com os dados

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello my friend' });
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const movies = await readFile();
    let filtredMovie = movies.find((movie) => (movie.id === Number(id)));
    filtredMovie = filtredMovie || ({ message: 'filme não encontrado' });
    res.status(200).json(filtredMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies', async (req, res) => {  
  try {
    res.status(200).json(await readFile());
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    const { movie, price } = req.body;
    const newMovie = {
      id: movies.length,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(200).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(200).json(movies[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;