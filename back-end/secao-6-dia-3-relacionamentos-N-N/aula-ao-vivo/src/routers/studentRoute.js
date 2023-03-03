const express = require('express');
const studentController = require('../controllers/student.controller');
const studentRoute = express.Router();

studentRoute.get('/', studentController.getStudents);
studentRoute.post('/', studentController.createStudent);

module.exports = studentRoute;
