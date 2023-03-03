const express = require('express');
const { courseRoute, studentRoute } = require('./routers')

const app = express();
app.use(express.json());

app.use('/courses', courseRoute);
app.use('/students', studentRoute);

module.exports = app;