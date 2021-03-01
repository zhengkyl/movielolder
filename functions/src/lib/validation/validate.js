const { firestore } = require("../../firestore");
const bcrypt = require("bcrypt");
const Filter = require("bad-words");

async function getGalleryExists(galleryId) {
  const galleryRef = firestore.collection("galleries").doc(galleryId);
  const snapshot = await galleryRef.get();
  return snapshot.exists;
}

async function getPermissionLevel(galleryId, password) {
  // req.
}

//4-20 (inclusive) alphanumeric from start to end
const re = /^[A-Za-z0-9]{4,20}$/;
function isStringValid(input) {
  return re.test(input);
}
// Profanity filter
const filter = new Filter();

//Valid to create a NEW gallery
exports.isGalleryInfoValid = async function (
  galleryId,
  userKey,
  adminKey,
  checkProfanity
) {
  const data = { valid: false, message: "" };
  if (
    !(
      isStringValid(galleryId) &&
      isStringValid(userKey) &&
      isStringValid(adminKey)
    )
  ) {
    data.message = "Info does not fit the specified format";
  } else if (checkProfanity && filter.isProfane(galleryId)) {
    data.message = "GalleryId should not include profanity";
  } else if (await getGalleryExists(galleryId)) {
    data.message = "GalleryId in use already";
  } else {
    data.valid = true;
  }
  return data;
};

exports.isKeyValid = async function (galleryId, key, adminOnly) {
  const data = { valid: false, message: "Permission Denied" };
  if (!isStringValid(key)) {
    data.message = "Key does not fit format";
    return data;
  }
  const docRef = firestore.collection("galleries").doc(galleryId);
  const snapshot = await docRef.get();
  if (!snapshot.exists) {
    data.message = "Error retrieving gallery";
    return data;
  }


  const adminHash = snapshot.data()["adminHash"];
  const matchAdmin = await bcrypt.compare(key, adminHash);
  if (adminOnly || matchAdmin) {
    data.valid = matchAdmin;
    return data;
  }

  const userHash = snapshot.data()["userHash"];
  const matchUser = await bcrypt.compare(key, userHash);

  data.valid = matchUser;
  return data;
};

exports.getPasswordHash = async function (password) {
  return bcrypt.hash(password, 10);
};
