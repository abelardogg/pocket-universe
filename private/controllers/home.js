const express = require('express');
var router = express.Router();

const fs = require('fs');

const DB_RAW = fs.readFileSync('private/db/planets.json');
const DB = JSON.parse(DB_RAW);

router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next()
});

router.get('/', (req, res) => {
    let view = 'pages/home';
    let model = {};

    res.render(view, model);
});

router.get('/planets', (req, res) =>{
    const planets = DB;
    res.json(planets);
});

router.get('/start', (req, res) => {
    let view = 'pages/startPage';
    let model = {};

    res.render(view, model);
});

module.exports = router;

