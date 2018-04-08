var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var logger = require('morgan');


//requiring route/users api
var routes = require('./routes/index');
var users = require('./routes/users');

//initializing express
var app = express();

//setting app port
app.set('port', (process.env.PORT || 3000));


// view engine setup
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/users', users);




///Setting port to listen for connections
app.listen(app.get('port'), function(err){
    if(err) throw err;
    
    console.log("listening on port..")
})