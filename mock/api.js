export default {
  'GET /api/timestamp': (req, res) => {
    res.send({
      t: new Date().valueOf(),
    });
  },
};
