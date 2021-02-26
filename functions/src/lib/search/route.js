const router = require("express").Router();
const controller = require("./controller");
router.get("/movies", controller.getMovieResults);

module.exports = router