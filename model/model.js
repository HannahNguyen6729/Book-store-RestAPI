//create a structure for the database
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
  },
  genres: {
    type: [String],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

const Author = mongoose.model("Author", authorSchema);
const Book = mongoose.model("Book", bookSchema);

module.exports = { Book, Author };
