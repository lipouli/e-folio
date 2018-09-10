module.exports = (view, params, req, res) => {
  res.render(view, {
    method: req.method,
    get: req.query,
    post: req.body,
    ...params,
  });
};
