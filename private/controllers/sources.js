const express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next()
});

router.get('/', (req, res) => {
    let view = 'pages/sources';
    let model = {};

    res.render(view, model);
});

module.exports = router;
