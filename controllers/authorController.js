const { Author, Book } = require("../model/model");

const authorController = {
  //Create a new author
  addAuthor: async (req, res) => {
    try {
      //await res.status(200).json(req.body);
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET all authors
  getAllAuthors: async (req, res) => {
    try {
      const authorsList = await Author.find();
      res.status(200).json(authorsList);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET an author
  getAnAuthor: async (req, res) => {
    try {
      // console.log(req.params.id);
      const author = await Author.findById(req.params.id).populate("books");
      res.status(200).json(author);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Update an author
  updateAnAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      await author.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Delete an author
  deleteAnAuthor: async (req, res) => {
    try {
      await Book.updateMany({ author: req.params.id }, { author: null });
      const author = await Author.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = authorController;
