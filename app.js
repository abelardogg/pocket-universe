const express = require('express');
const app = express();

const appRouter = require('./private/router/router.js');
const apiRouter = require('./private/router/apiRouter');
const errorPageHandler = require('./private/controllers/error');



// CONFIG
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));

// const CONFIG_DB_RAW = fs.readFileSync('db/config.json');


app.use('/', appRouter);
app.use('/', apiRouter);

// 404 handler
app.use(function(req, res, next) {
    console.log();
    errorPageHandler.notFoundPage(req, res, next);
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});