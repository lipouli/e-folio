const express = require('express');
const oblog = require('./projects/oblog');
const memory = require('./projects/memory');
const oquiz = require('./projects/oquiz');

const apiRouter = express.Router();

const projects = [
  oblog,
  memory,
  oquiz,
];

apiRouter.use('/projects', projects);

module.exports = apiRouter;
