const express = require('express');
const router = express.Router();
const stars = require('../dao/starsDao');

router.get('/stars', (req, res) =>{
    const starsList = stars().getAllStars();
    res.send(starsList);
});

router.get('/starsShort', (req, res) =>{
    const starsList = stars().getAllStarsShortInfo();
    res.send(starsList);
});

module.exports = router;
