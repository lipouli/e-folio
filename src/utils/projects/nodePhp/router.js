module.exports = function(view, baseUri, req, res) {
  res.render(view, {
      method: req.method,
      get: req.query,
      post: req.body,
      baseUri,
  });
};
