const { Course } = require('../models')

const getAll = async () => {
  const courses = await Course.findAll();
  return courses;
};

const getById = async (id) => {
  const course = await Course.findByPk(id);
  return course;
};

module.exports = {
  getAll,
  getById,
};
