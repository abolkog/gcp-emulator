const functions = require('firebase-functions');

exports.documentCreatedListener = functions.firestore
  .document('/videos/{videoId}')
  .onCreate(snap => {
    const original = snap.data();
    console.log({ data: original });
  });

exports.documentupdatedListener = functions.firestore
  .document('/videos/{videoId}')
  .onUpdate(snap => {
    console.log({ data: snap.after.data() });
  });
