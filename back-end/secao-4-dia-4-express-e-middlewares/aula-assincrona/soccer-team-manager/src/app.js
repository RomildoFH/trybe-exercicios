// src/app.js

const express = require('express');

const app = express();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());

// Para fixar

/*
1.🚀 Crie um middleware existingId para garantir que o id passado como parâmetro na rota GET /teams/:id existe no objeto teams. Refatore essa rota para usar o middleware.
*/

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.some((e) => e.id === id)) {
    return next(); // Chama o próximo middleware
  } else {
    res.json({ message: "verifique o id informado" }); // Ou já responde avisando que deu errado
  }
};

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

// app.post('/teams', (req, res) => {
//   const requiredProperties = ['nome', 'sigla'];
//   if (requiredProperties.every((property) => property in req.body)) {
//     const team = { id: nextId, ...req.body };
//     teams.push(team);
//     nextId += 1;
//     res.status(201).json(team);
//   } else {
//     res.sendStatus(400);
//   }
// });

// app.put('/teams/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const requiredProperties = ['nome', 'sigla'];
//   const team = teams.find(t => t.id === id);
//   if (team && requiredProperties.every((property) => property in req.body)) {
//     const index = teams.indexOf(team);
//     const updated = { id, ...req.body };
//     teams.splice(index, 1, updated);
//     res.status(201).json(updated);
//   } else {
//     res.sendStatus(400);
//   }
// });

// app.delete('/teams/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find(t => t.id === id);
//   if (team) {
//     const index = teams.indexOf(team);
//     teams.splice(index, 1);
//   }
//   res.sendStatus(204);
// });

// const validateTeam = (req, res, next) => {
//   const requiredProperties = ['nome', 'sigla'];
//   if (requiredProperties.every((property) => property in req.body)) {
//     next(); // Chama o próximo middleware
//   } else {
//     res.sendStatus(400); // Ou já responde avisando que deu errado
//   }
// };

// // Arranja os middlewares para chamar validateTeam primeiro
// app.post('/teams', validateTeam, (req, res) => {
//   const team = { id: nextId, ...req.body };
//   teams.push(team);
//   nextId += 1;
//   res.status(201).json(team);
// });

// app.put('/teams/:id', validateTeam, (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find(t => t.id === id);
//   if (team) {
//     const index = teams.indexOf(team);
//     const updated = { id, ...req.body };
//     teams.splice(index, 1, updated);
//     res.status(201).json(updated);
//   } else {
//     res.sendStatus(400);
//   }
// });


module.exports = app;