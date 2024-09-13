let express = require("express");
let router = express.Router();

const BookController = require("../controllers/book-controller");

router.get("/", function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/get", BookController.getBooks);
router.get("/get/:id", BookController.getBookById);
router.post("/add", BookController.addBook);
router.delete("/delete/:id", BookController.deleteBook);

module.exports = router;