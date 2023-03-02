// src/services/userBook.service.js

const { User, Book } = require('../models');

const getUsersBooksById = (id) => User.findOne({
  where: { id },
  include: [{ model: Book, as: 'books', through: { attributes: [] } }],
});

// a propriedade through: { attributes: [] } deve estar presente, pois sem ela, em cada book, apareceriam todos seus respectivos users. Tente fazê-lo sem e veja a diferença no resultado!
// localhost:3001/userbooks/3

module.exports = {
  getUsersBooksById,
};