// TODO: real-time chat with node.js
// TODO: Facebook Like, Twitter share button on news
// TODO: News stored in markdown files
// TODO: Mediaelement.js for playing music and videos
// TODO:

/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
  res.render('home', { title: 'Express' });
});
app.get('/bio', bio.index);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
