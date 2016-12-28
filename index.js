var express = require('express'),
	app = express();
var config = require('./server/config/config');
require('./server/base/mongoose.js');

//app.set('view engine','jade');
//app.set('views', __dirname + '/server/views');
//
//app.get('/',function(req,res){
//	res.render('index');
//});
//app.get('/login',function(req,res){
//	req.render('')
//})
app.listen(config.port,function(){
	console.log('server start on localhost:'+ config.port);
});
