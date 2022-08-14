const authorController = require("../controllers/authorController");

const router = require("express").Router();

// CREATE a new author
router.post("/", authorController.addAuthor);

//GET all authors
router.get("/", authorController.getAllAuthors);

//GET an author
router.get("/:id", authorController.getAnAuthor);

//UPDATE an author
router.put("/:id", authorController.updateAnAuthor);

//DELETE an author
router.delete("/:id", authorController.deleteAnAuthor);

module.exports = router;
