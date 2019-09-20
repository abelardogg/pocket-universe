// API ROUTER

const express = require('express');
const app = express();

const planets = require('../api/planets.js');
const stars = require('../api/stars.js');

// API
app
.use('/api', planets)
.use('/api', stars);

module.exports = app;