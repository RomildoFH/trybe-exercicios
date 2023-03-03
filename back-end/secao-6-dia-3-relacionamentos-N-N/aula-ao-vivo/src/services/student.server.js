const { Student, Course } = require('../models');

// eager loading
const getStudents = async () => Student.findAll({
  include: {
    model: Course,
    as: 'course'
  }
});

const createStudent = async ({ name, email, birthday, active, idCourse }) =>
  Student.create({
  name, email, birthday, active, idCourse
});

module.exports = {
  getStudents,
  createStudent,
};
