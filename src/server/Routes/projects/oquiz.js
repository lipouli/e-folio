const express = require('express');
const nodePhp = require('../../../utils/projects/nodePhp')({
  bindPath: '/usr/bin/php',
});
const multer = require('multer');

const upload = multer();
const oquiz = express.Router();

oquiz.use('/oquiz', upload.array(), (req, res) => {
  const { app } = req;
  app.set('views', 'src/projects/Oquiz/evaluation-back-oquiz/public/');
  app.engine('php', nodePhp.engine);
  app.set('view engine', 'php');
  app.use('/oquiz', express.static('src/projects/Oquiz/evaluation-back-oquiz/public'));
  const requestUri = req.path.replace(req.baseUrl, '');
  const params = {
    requestUri,
    baseUri: req.baseUrl,
    user: req.cookies.user ? req.cookies.user : false,
  };

  app.post('/api/utils/oquiz/login', (req, res) => {
    res.cookie('user', req.body.user);
    res.json({
      sucess: true,
    });
  });

  app.get('/api/utils/oquiz/logout', (req, res) => {
    res.clearCookie('user');
    res.redirect('/api/projects/oquiz');
  });

  nodePhp.router('index.php', params, req, res);
});

module.exports = oquiz;
