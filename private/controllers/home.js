const express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next()
});

router.get('/', (req, res) => {
    let view = 'pages/home';
    let model = {};

    res.render(view, model);
});

router.get('/start', (req, res) => {
    let view = 'pages/startPage';
    let model = {};

    res.render(view, model);
});

module.exports = router;

