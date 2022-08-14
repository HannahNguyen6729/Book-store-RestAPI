const authorController = require("../controllers/authorController");

const router = require("express").Router();

// ADD author
router.post("/", authorController.addAuthor);

module.exports = router;
