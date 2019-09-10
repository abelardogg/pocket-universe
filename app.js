const express = require('express');
const app = express();
const fs = require('fs');

const appRouter = require('./private/router/router.js');
const apiRouter = require('./private/router/apiRouter');



// CONFIG
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));

// const CONFIG_DB_RAW = fs.readFileSync('db/config.json');


app.use('/', appRouter);
app.use('/', apiRouter);



app.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});