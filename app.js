
var express = require('express')
,	path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3478);
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
//app.set('views', __dirname + '/public/views');

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//app.use(favicon(__dirname + '/public/images/favicon.ico'));
//app.use(logger('dev'));

var server = app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

