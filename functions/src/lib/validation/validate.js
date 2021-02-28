const {firestore} = require("../../firestore");
const bcrypt = require("bcrypt")
const Filter = require('bad-words')

async function getGalleryExists(galleryId) {
  const galleryRef = firestore.collection("galleries").doc(galleryId)
  const snapshot = await galleryRef.get();
  return snapshot.exists
}


async function getPermissionLevel(galleryId, password) {
  // req.
}

//4-20 (inclusive) alphanumeric from start to end
const re = /^[A-Za-z0-9]{4,20}$/
function isStringValid(input) {
  return re.test(input)
}
// Profanity filter
const filter = new Filter()

exports.isGalleryInfoValid = async function (galleryId, userKey, adminKey, checkProfanity) {
  const data = {valid: false, message:""}
  if (!(isStringValid(galleryId) && isStringValid(userKey) && isStringValid(adminKey))) {
    data.message = "Info does not fit the specified format"
  }
  else if (checkProfanity && filter.isProfane(galleryId)) {
    data.message = "GalleryId should not include profanity"
  }
  else if (await getGalleryExists(galleryId)) {
    data.message = "GalleryId in use already"
  }
  else {
    data.valid =true;
  }
  return data;
}

exports.getPasswordHash = async function(password) {
  return bcrypt.hash(password,10)
}