const Book = require('../models/Book');

// GET all books
const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// ADD a book
const addBook = async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json(newBook);
};

module.exports = { getBooks, addBook };
