'use strict';

const booksFunction = require('./src/functions/booksFunction')

module.exports = {
  listBooks: booksFunction.index,
  showBook: booksFunction.show,
  createBook: booksFunction.create,
  updateBook: booksFunction.update,
  deleteBook: booksFunction.delete
};
