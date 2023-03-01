const express = require('express');
const courseRoute = require('./routers');

const app = express();

app.use(express.json());

app.use('/', courseRoute);

module.exports = app;