const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Routes for api (projects)
const apiRouter = require('./Routes/apiRouter');

const app = express();

// basePath
const basePath = path.join(__dirname, '../..');
app.set('basePath', basePath);

// path for react page
const distPath = path.join(basePath, 'dist');
app.set('distPath', distPath);

// path to projects page
const projectsPath = path.join(basePath, 'src/projects');
app.set('projectsPath', projectsPath);

// Routes for react pages
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

// main application pages
app.get(reactPath, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// projects pages
app.use('/api', apiRouter);

// start server
app.listen(3000, () => {
  console.log('listening on port 3000 !');
});
