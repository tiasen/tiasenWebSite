var express = require('express'),
	app = express();
var config = require('./server/config/config');
require('./server/mongoose.js');

require('./server/api/api')(app);

app.use(express.static('app'));

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
