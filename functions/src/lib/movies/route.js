const router = require("express").Router();
const controller = require("./controller");
router.get("/:galleryId", controller.getMovies);

module.exports = router