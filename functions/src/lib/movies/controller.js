const firestore = require("../../firestore");

exports.getMovies = async function getMovies(req, res) {
  const galleryId = req.params.galleryId;
  const limit = req.query.limit || 0;

  const moviesRef = firestore
    .collection(`galleries/${galleryId}/movies`)
    .limit(limit);

  const snapshot = await moviesRef.get()

  return res.status(exists ? 200: 404).json({
    success:snapshot.exists,
    data:snapshot.exists ? snapshot.docs: 'Gallery not found'
  })
};
