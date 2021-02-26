const sequelize = require('../config/database');
const Sequelize = require('sequelize');
const { responseHandler, errorHandler } = require('../helper/httpHandler');

const Book = require('../models/book')(sequelize, Sequelize);
Book.sync();

module.exports = {
  // GET /books
  async index(e, ctx, cb) {
    try {
      const books = await Book.findAll();

      cb(null, responseHandler(200, books));
    } catch (error) {
      cb(null, errorHandler(400, error));
    }
  },

  // GET /books/:id
  async show({ pathParameters: { id } }, ctx, cb) {
    try {
      const book = await Book.findOne({ where: { id } });

      if (book) {
        cb(null, responseHandler(200, book));
      } else {
        cb(null, errorHandler(404, { msg: `Cannot find book with ID: ${id}` }));
      }
    } catch (error) {
      cb(null, errorHandler(400, error));
    }
  },

  // POST /books
  async create({ body = {} }, ctx, cb) {
    const { title, description } = JSON.parse(body);

    try {
      const book = await Book.create({
        title,
        description
      });

      cb(null, responseHandler(200, book));
    } catch (error) {
      cb(null, errorHandler(400, error));
    }
  },

  // PUT /books/:id
  async update({ pathParameters: { id }, body = {} }, ctx, cb) {
    const { title, description } = JSON.parse(body);

    try {
      const book = await Book.update({ title, description }, { where: { id } });

      if (book[0]) {
        cb(null, responseHandler(200, { id }));
      } else {
        cb(null, errorHandler(404, { msg: `Cannot find book with ID: ${id}` }));
      }
    } catch (error) {
      cb(null, errorHandler(400, error));
    }
  },

  // DELETE /books/:id
  async delete({ pathParameters: { id } }, ctx, cb) {
    try {
      const book = await Book.destroy({ where: { id } });

      cb(null, responseHandler(200, book));
    } catch (error) {
      cb(null, errorHandler(400, error));
    }
  }
}