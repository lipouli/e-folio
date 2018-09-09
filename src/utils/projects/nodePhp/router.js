module.exports = (view, params, req, res) => {
  console.log(req.body);
  console.log(req.method);
  res.render(view, {
    method: req.method,
    get: req.query,
    post: req.body,
    ...params,
  });
};
