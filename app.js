var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var port = process.env.PORT || 3001;
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

mongoose.connect(config.getDbConnectionString());

app.use('/', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

apiController(app);
setupController(app);
app.listen(port);
console.log(`App is live on localhost:${port}`);
console.log('Try out one of these');

// Super awesome reminder: Goes through all defined routes and spits out a 
// reminder for the available methods e.g. GET: /api/todos/:username 
// without manually having to add it to a list somewhere it dynamically will list all available routes 
// at startup 
app._router.stack.forEach(item => {
    if(item.route !== undefined
        && item.route.path !== undefined){
            console.log(`${item.route.stack[0].method.toUpperCase()}: ${item.route.path}`);
    }
})
