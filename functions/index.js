const functions = require('firebase-functions');
const { handleCreate } = require('../src/hooks/create');

// exports.documentCreatedListener = functions.firestore
//   .document('/videos/{videoId}')
//   .onCreate(async snap => {
//     const data = snap.data();
//     await handleCreate(data);
//   });

// exports.documentupdatedListener = functions.firestore
//   .document('/videos/{videoId}')
//   .onUpdate(snap => {
//     console.log({ data: snap.after.data() });
//   });
