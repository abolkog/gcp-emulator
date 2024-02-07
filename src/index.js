const net = require('net');
const { Firestore } = require('@google-cloud/firestore');

const FIRESTORE_PORT = 8080;
const sleep = (ms = 3000) =>
  new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });

const isPortTaken = port =>
  new Promise((resolve, reject) => {
    const portTester = net.createServer();

    portTester.once('error', err => {
      if (err.code != 'EADDRINUSE') {
        resolve(false);
      } else {
        resolve(true);
      }
    });

    portTester.once('listening', () => {
      portTester.close();
      resolve(false);
    });

    portTester.listen(port);

    // const tester = net
    //   .createServer()
    //   .once('error', function (err) {
    //     if (err.code != 'EADDRINUSE') return fn(err);
    //     fn(null, true);
    //   })
    //   .once('listening', function () {
    //     tester
    //       .once('close', function () {
    //         fn(null, false);
    //       })
    //       .close();
    //   })
    //   .listen(port);
  });

const start = async () => {
  console.log('Checking if emulator is up....');
  let isFirebaseEmulatorReady = await isPortTaken(FIRESTORE_PORT);
  while (!isFirebaseEmulatorReady) {
    console.log('Emulator is not up. Retrying in 3 seconds');
    await sleep();
    isFirebaseEmulatorReady = await isPortTaken(FIRESTORE_PORT);
  }

  try {
    console.log('Adding default settings');
    const firebaseClient = new Firestore({
      projectId: 'kopa-ai-local',
      databaseId: '(default)',
    });
    const document = firebaseClient.collection('settings').doc('indexing');
    await document.set({
      numberOfVideos: 5,
      videoAge: 60,
      subCount: 100000,
      viewCountWithSub: 100000,
      viewCount: 500000,
    });
    console.log('I am done here. Bye 👋🏽');
  } catch (e) {
    console.error(e);
  }
};

start();
