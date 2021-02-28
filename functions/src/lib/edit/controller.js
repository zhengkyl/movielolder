const { firestore } = require("../../firestore");
const {
  getPasswordHash,
  isGalleryInfoValid,
} = require("../validation/validate");

// process vote and send new combo/
exports.vote = async function () {};
// {data, error, loading}
exports.createGallery = async function (req, res, next) {
  const galleryId = req.params.galleryId;
  const userKey = req.body.userKey;
  const adminKey = req.body.adminKey;

  const { valid, message } = await isGalleryInfoValid(
    galleryId,
    userKey,
    adminKey,
    true
  );
  if (!valid) {
    return res.status(400).json({
      success: valid,
      data: message,
    });
  }

  try {
    const userHash = await getPasswordHash(userKey);
    const adminHash = await getPasswordHash(adminKey);

    const metadata = {
      userHash,
      adminHash,
      count: 0,
    };

    await firestore.runTransaction(async (trans) => {
      const docRef = firestore.collection("galleries").doc(galleryId);
      trans.set(docRef, metadata);
    });
  } catch (err) {
    return next(err);
  }

  return res.status(200).json({
    success: true,
    data: "Gallery created.",
  });
};
