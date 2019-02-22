const timestamp = () => ({
  t: new Date().valueOf(),
});

const resolve = f => (..._) => {
  new Promise(r => {
    r(f());
  }).then($ => {
    _[1].send($);
  });
};

export default {
  'GET /api/timestamp': resolve(timestamp),
};
