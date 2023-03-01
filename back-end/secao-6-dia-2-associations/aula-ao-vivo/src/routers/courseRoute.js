const express = require('express');
const courseController = require('../controllers/course.controller');
const courseRoute = express.Router();

courseRoute.get('/', courseController.getAll);
courseRoute.get('/:id', courseController.getById);
courseRoute.post('/', courseController.create);
courseRoute.put('/:id', courseController.update);
courseRoute.delete('/:id', courseController.destroy);


module.exports = courseRoute;
