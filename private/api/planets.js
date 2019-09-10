const express = require('express');
var router = express.Router();
const fs = require('fs');

const DB_PLANETS_RAW = fs.readFileSync('private/db/planets.json');
const DB_PLANETS = JSON.parse(DB_PLANETS_RAW);

router.get('/planets', (req, res) =>{
    const planets = DB_PLANETS.planets;
    res.json(planets);
});

module.exports = router;
