const router = require("express").Router();
const controller = require("./controller");
router.get("/:galleryId/movies", controller.getMovies);
// router.get("/:galleryId/metadata", controller.getMetadata);
router.get("/", controller.getGalleries);

module.exports = router