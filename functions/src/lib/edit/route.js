const router = require("express").Router();
const controller = require("./controller");

//Movie Stuff -> USER LEVEL
// router.post("/:galleryId/vote", controller.vote);
// router.post("/:galleryId/addMovie", controller.addMovie);
// router.post("/:galleryId/removeMovie", controller.removeMovie);

//Gallery Stuff -> ADMIN LEVEL
// router.post("/:galleryId/changeKey", controller.changeKey);
router.post("/:galleryId/create", controller.createGallery);
// router.post("/:galleryId/delete", controller.deleteGallery);

module.exports = router