var express = require('express'),
	app = express();

//app.set('view engine','jade');
//app.set('views', __dirname + '/server/views');
//
//app.get('/',function(req,res){
//	res.render('index');
//});
//app.get('/login',function(req,res){
//	req.render('')
//})
app.listen(5000,function(){
	console.log('server start on localhost:5000');
});
