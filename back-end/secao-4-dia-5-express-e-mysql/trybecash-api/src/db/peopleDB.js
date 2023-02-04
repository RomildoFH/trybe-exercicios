const conn = require('./connection');

const insert = (person) => conn.execute(
  `INSERT INTO people
    (first_name, last_name, email, phone) VALUE (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
);

const getAll = () => conn.execute(
  `SELECT * FROM people`
);

const getPersonById = (id) => conn.execute(
  `SELECT * FROM people
  WHERE id = ?`, [id]
);

const updatePerson = (id, person) => conn.execute(
  `UPDATE people
  SET first_name = ?, last_name = ?, email = ?, phone = ?
  WHERE id = ?`,
  [person.firstName, person.lastName, person.email, person.phone, id]
);

const deletePerson = (id) => conn.execute(
  `DELETE FROM people
  WHERE id = ?`, [id]
)

module.exports = {
  insert,
  getAll,
  getPersonById,
  updatePerson,
  deletePerson,
}