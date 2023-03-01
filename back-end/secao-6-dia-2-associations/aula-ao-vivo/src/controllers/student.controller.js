const studentService = require('../services/student.server');

const getStudents = async (_req, res) => {
  const students = await studentService.getStudents();

  return res.status(200).json(students);
};

const createStudent = async (req, res) => {
  const student = await studentService.createStudent(req.body);

  return res.status(201).json(student);
};

module.exports = {
  getStudents,
  createStudent,
};
