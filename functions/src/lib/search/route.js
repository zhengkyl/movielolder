const router = require("express").Router();
const controller = require("./controller");
router.get("/:galleryId/movies", controller.getMovieResults);

module.exports = router