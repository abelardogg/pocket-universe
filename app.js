const express = require('express');
const app = express();
const fs = require('fs');

// CONFIG
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));

// const CONFIG_DB_RAW = fs.readFileSync('db/config.json');


app.get('/', (req, res) => {
	let view = 'pages/home';
	let model = {};
	let startPage = req.query.utm_source;

	if(!!startPage && startPage === 'homescreen'){
		view = 'pages/startPAge';
	}
	

    res.render(view, model);
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});