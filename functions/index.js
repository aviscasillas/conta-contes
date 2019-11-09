const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.processTale = functions.https.onRequest((request, response) => {
  var responseBody = { name: 'el-secret-de-la-lluna-ivet-mataro-celia-albert.mp3' };
  response.send(responseBody);
});
