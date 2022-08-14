const bookController = require("../controllers/bookController");

const router = require("express").Router();

//create a new book
router.post("/", bookController.addABook);

//get all books
router.get("/", bookController.getAllBooks);

module.exports = router;
