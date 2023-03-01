// src/services/employee.service.js

const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};
// ----eager loading----
/*
const getById = async (id) => {
  const employee = await Employee.findOne({
      where: { id },
      // include: [{ model: Address, as: 'addresses' }], // este método retorna com todos os atributos
      include: [{
        model: Address, as: 'addresses', attributes: { exclude: ['number'] }, // este método excluí o atributo referente ao número do endereço
      }],
    });
  return employee;
}
*/

// ----lazy loading----
const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
}

module.exports = { getAll, getById };