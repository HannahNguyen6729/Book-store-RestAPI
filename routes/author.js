const authorController = require("../controllers/authorController");

const router = require("express").Router();

// CREATE a new author
router.post("/", authorController.addAuthor);

//GET all authors
router.get("/", authorController.getAllAuthors);

module.exports = router;
