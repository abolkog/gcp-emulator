const axios = require('axios');

const url = 'http://localhost:5000/classify';

const makeHeaders = id => {
  return {
    'ce-document': `videos/${id}`,
    'ce-project': 'kopa-ai',
    'ce-type': 'google.cloud.firestore.document.v1.created',
  };
};

exports.handleCreate = async videoDocument => {
  try {
    const { data } = await axios.default.post(url, videoDocument, {
      headers: makeHeaders(videoDocument.videoId),
    });
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};
