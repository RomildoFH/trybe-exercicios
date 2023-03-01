const { Course, Student } = require('../models')

const getAll = async () => {
  const courses = await Course.findAll();
  return courses;
};

const getById = async (id, withStudent) => {
  const course = await Course.findByPk(id);
  if (withStudent) {
    const students = await Student.findAll({ where: { idCourse: course.id } });
    course.dataValues.students = students;
  }
  return course;
};

const create = async (course) => {
  const courseCreated = await Course.create(course);
  return courseCreated;
};

const update = async (id, course) => {
  console.log(id, course);
  const updatedCourse = await Course.update(course, {
    where: { id },
  });
  if (!updatedCourse[0]) return null;
  return course;
};

const destroy = async (id) => {
  await Course.destroy({ where: { id } });

  return null;
};
module.exports = { getAll, getById, update, destroy, create };