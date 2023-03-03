const courseService = require('../services/course.service');

const getAll = async (req, res) => {
  const courses = await courseService.getAll();
  res.status(200).json(courses);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { withStudent } = req.query
  const course = await courseService.getById(id, withStudent === 'true');
  res.status(200).json(course);
};

const create = async (req, res) => {
  const course = req.body;
  const created = await courseService.create(course);
  res.status(200).json(created);
};

const update = async (req, res) => {
  const { id } = req.params;
  const course = req.body;
  const updated = await courseService.update(id, course);
  res.status(200).json(updated);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const course = await courseService.destroy(id);
  res.status(204).json(course);
};

module.exports = { getAll, getById, create, update, destroy };