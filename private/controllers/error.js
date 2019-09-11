const express = require('express');
const app = express();

function notFoundPage(req, res, next){
        let view = 'pages/not-found-page';
        let model = {};

        res.status(404);
        res.render(view, model);
}

function serverErrorPage(req, res, next){
    let view = 'pages/server-error-page';
    let model = {};

    res.status(500);
    res.render(view, model);

}

module.exports = {
    notFoundPage: notFoundPage,
    serverErrorPage: serverErrorPage
};
