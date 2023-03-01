const express = require('express');
const courseController = require('../controllers/course.controller');

const courseRoute = express.Router();

courseRoute.get('/:id', courseController.getById);
courseRoute.get('/', courseController.getAll);


module.exports = courseRoute;
