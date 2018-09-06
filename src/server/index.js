const express = require('express');
const path = require('path');

const basePath = path.join(__dirname, '../../dist');
const app = express();

const reactPath = [
  '/',
  '/realisations',
];

app.use(express.static('dist'));

app.get(reactPath, (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000 !');
});
