// CONTROLLERS ROUTER

const express = require('express');
const app = express();

const home = require('../controllers/home.js');
const about = require('../controllers/about.js');
const sources = require('../controllers/sources.js');

app
.use('/', home)
.use('/about', about)
.use('/sources', sources);

module.exports = app;