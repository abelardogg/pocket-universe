// API ROUTER

const express = require('express');
const app = express();

const planets = require('../api/planets.js');

// API
app
.use('/api', planets);

module.exports = app;