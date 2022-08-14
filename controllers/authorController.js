const { Author, Book } = require("../model/model");

const authorController = {
  //Add author
  addAuthor: async (req, res) => {
    await res.status(200).json(req.body);
  },
};

module.exports = authorController;
