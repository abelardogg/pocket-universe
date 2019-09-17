const express = require('express');
const router = express.Router();
const planets = require('../dao/planetsDao');

router.get('/planets', (req, res) =>{
    const planetsList = planets().getAllPlanets();
    res.send(planetsList);
});

router.get('/planetsShort', (req, res) =>{
    const planetsList = planets().getAllPlanetsShortInfo();
    res.send(planetsList);
});

module.exports = router;
