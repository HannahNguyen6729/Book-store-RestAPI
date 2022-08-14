const { Book, Author } = require("../model/model");

const bookController = {
  addABook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      //console.log(savedBook);
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Get all books
  getAllBooks: async (req, res) => {
    try {
      const bookList = await Book.find();
      res.status(200).json(bookList);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Get a book
  getABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //update a book
  updateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //delete a book
  deleteBook: async (req, res) => {
    try {
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      const book = await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = bookController;
