const { firestore } = require("../../firestore");
const {
  getPasswordHash,
  isGalleryInfoValid,
  isKeyValid,
} = require("../validation/validate");

// process vote and send new combo/
exports.vote = async function () {};

exports.addMovie = async function (req, res, next) {
  const galleryId = req.params.galleryId;
  const key = req.body.key;
  const { valid, message } = await isKeyValid(galleryId, key);
  if (!valid) {
    // console.log("message is " + message)
    return res.status(400).json({
      success: valid,
      data: message,
    });
  }
  // believe info from client is correct
  // because user should be able to add whatever they want
  const movieId = req.body.movie.id;
  const movieData = {
    posterPath: req.body.movie.posterPath,
    summary: req.body.movie.summary,
    title: req.body.movie.title,
    year: req.body.movie.year,
  };
  const movieDoc = firestore
    .collection("galleries")
    .doc(galleryId)
    .collection("movies")
    .doc(movieId);
  const galleryDoc = firestore.collection("galleries").doc(galleryId);

  try {
    await firestore.runTransaction(async (trans) => {
      const newMovie = await movieDoc.get();
      if (!newMovie.exists) {
        const metadata = await trans.get(galleryDoc);
        const newCount = metadata.data().count + 1;
        trans.update(galleryDoc, { count: newCount });

        trans.set(movieDoc, movieData);
      }
    });

    return res.status(200).json({
      success: true,
      data: "Movie added successfully",
    });
  } catch (err) {
    // console.log("next error")
    return next(err);
  }
};

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
