const router = require("express").Router();
const controller = require("./controller");
router.get("/movies", controller.getMovieResults);
router.get("/galleries", controller.getGalleryResults);

module.exports = router