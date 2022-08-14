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
    const bookList = await Book.find();
    res.status(200).json(bookList);
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = bookController;
