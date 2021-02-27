const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore();

const ENV_VARS = require("firebase-functions").config();

module.exports = {
  ENV_VARS,
  firestore,
};

// A single firestore instance
