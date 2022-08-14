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
};

module.exports = authorController;
