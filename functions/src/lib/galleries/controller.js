const {firestore} = require("../../firestore");

async function resolveCollectionQuery({collectionRef, limit, page}, res, next) {
  try {
    const snapshot = await collectionRef.get();
    const exists = !snapshot.empty;

    const statusCode = exists ? 200 : 404;

    // Filter results to requested page
    const data = exists
      ? snapshot.docs
          .filter(
            (doc, index) => index >= (page - 1) * limit && index < page * limit
          )
          .map((doc) => doc.data())
      : "Gallery does not exist.";

    return res.status(statusCode).json({
      success: exists,
      data: data,
    });
  } catch (err) {
    return next(err);
  }
}

exports.getMovies = async function (req, res, next) {
  const galleryId = req.params.galleryId;
  const limit = parseInt(req.query.limit) || 1;
  // What "page", ie page 2 returns starting at the limit+1-th item
  const page = parseInt(req.query.page) || 1;
  // rating, date, etc all movie fields
  const sortBy = req.query.sortBy || "date";
  // asc or desc
  const order = req.query.order || "desc";

  // Since values can update past page boundaries,
  // we can't use pagination query cursors. Hence `page * limit`
  const moviesRef = firestore
    .collection(`galleries/${galleryId}/movies`)
    .orderBy(sortBy, order)
    .limit(page * limit);
  return resolveCollectionQuery({collectionRef:moviesRef, limit, page}, res, next);
};


exports.getGalleries = async function (req, res, next) {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  //TODO FIGURE OUT GALLERY META DATA

  // numMovies, 
  const sortBy = req.query.sortBy || "date";
  const order = req.query.order || "desc";

  const galleriesRef = firestore
    .collection("galleries")
    .orderBy(sortBy, order)
    .limit(page * limit);

  return resolveCollectionQuery({collectionRef:galleriesRef, limit, page}, res, next);
};
