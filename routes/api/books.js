const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
router.get(booksController.findAll)
router.post(booksController.create);

router.route("/:id")
router.get(booksController.findById)
router.put(booksController.update)
router.delete(booksController.remove);

module.exports = router;
