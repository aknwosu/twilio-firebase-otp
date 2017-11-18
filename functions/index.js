const functions = require('firebase-functions');
const admin = require('firebase-admin');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-96de8.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
