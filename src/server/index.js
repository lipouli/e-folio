const express = require('express');
const path = require('path');

const basePath = path.join(__dirname, '../..');
const distPath = path.join(basePath, 'dist');
const projectsPath = path.join(basePath, 'src/projects');
const app = express();

const reactPath = [
  '/',
  '/realisations',
];

app.use(express.static('dist'));

app.get(reactPath, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.get('/api/projects/oblog', (req, res) => {
  app.use(express.static('src/projects/Oblog/evaluation-html-css'));
  res.sendFile(path.join(projectsPath, 'Oblog/evaluation-html-css/html/index.html'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000 !');
});
