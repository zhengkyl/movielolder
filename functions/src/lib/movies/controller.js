const firestore = require("../../firestore");

exports.getMovies = async function getMovies(req, res, next) {
  const galleryId = req.params.galleryId;
  const limit = parseInt(req.query.limit) || 1;
  // console.log("galleryid: " + galleryId)
  const moviesRef = firestore
    .collection(`galleries`).doc(galleryId).collection("movies")
    .limit(limit);

  try {
    const snapshot = await moviesRef.get();
    const exists = !snapshot.empty
    // console.log(snapshot)
    return res.status(exists ? 200 : 404).json({
      success: exists,
      data: exists ? snapshot.docs.map(doc=>doc.data()) : "Gallery not found",
    });
  } catch (err) {
    return next(err)
    // console.log(galleryId)
    // return res.status(500).json({
    //   success:false,
    //   data:"Internal Server Error"
    // })
  }
};
