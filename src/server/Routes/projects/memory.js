const express = require('express');
const path = require('path');

const memory = express.Router();

memory.use('/memory', ({ app }, res) => {
  app.use('/memory', express.static('src/projects/Memory/evaluation-js-memory'));
  res.sendFile(path.join(app.get('projectsPath'), 'Memory/evaluation-js-memory/html/index.html'));
});

module.exports = memory;
