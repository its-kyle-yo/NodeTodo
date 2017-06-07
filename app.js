var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var port = process.env.PORT || 3001;
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
mongoose.connect(config.getDbConnectionString());
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

apiController(app);
setupController(app);
app.listen(port);
