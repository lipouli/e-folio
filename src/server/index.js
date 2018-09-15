const express = require('express');
const nodePhp = require('../utils/projects/nodePhp')({
  bindPath: '/usr/bin/php',
});
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser');

const upload = multer();
const basePath = path.join(__dirname, '../..');
const distPath = path.join(basePath, 'dist');
const projectsPath = path.join(basePath, 'src/projects');
const app = express();
const reactPath = [
  '/',
  '/realisations',
  '/moi',
  '/contact',
];

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get(reactPath, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.get('/api/projects/oblog', (req, res) => {
  app.use('/oblog', express.static('src/projects/Oblog/evaluation-html-css'));
  res.sendFile(path.join(projectsPath, 'Oblog/evaluation-html-css/html/index.html'));
});

app.get('/api/projects/memory', (req, res) => {
  app.use('/memory', express.static('src/projects/Memory/evaluation-js-memory'));
  res.sendFile(path.join(projectsPath, 'Memory/evaluation-js-memory/html/index.html'));
});

app.use('/api/projects/oquiz', upload.array(), (req, res) => {
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
  nodePhp.router('index.php', params, req, res);
});

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

app.listen(3000, () => {
  console.log('Example app listening on port 3000 !');
});
