const express = require('express');
const path = require('path');

const oblog = express.Router();

oblog.use('/oblog', ({ app }, res) => {
  app.use('/oblog', express.static('src/projects/Oblog/evaluation-html-css'));
  res.sendFile(path.join(app.get('projectsPath'), 'Oblog/evaluation-html-css/html/index.html'));
});

module.exports = oblog;
