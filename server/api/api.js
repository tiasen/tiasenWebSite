var models = require('../models/models');
//var express = require('express'),
//	app = express();
var AccontModel = models.AccontModel;
var sha1 = require('sha1');
var control = require('../server-controller/server-controller');

var api = function(app){	
	app.use(require('cookie-parser')('tiasen'));
	app.use(require('body-parser')());
	app.post('/api/signup',function(req,res){	
		if((!!req.body.email && req.body.email.length>0) || (!!req.body.password && req.body.password.length>0)){
			
			var rqData = {
					email:req.body.email,
					password:req.body.password
				}
			control.signupAccont(rqData,cb);
			function cb(data){
				console.log(data)
				if(data === 1001 || data === 1003){
					return res.json(500,{
						success:false,
						massage:'服务器出错,请重试'
					})
				} else if(data === 1002){
					return res.json({
						success:false,
						massage:'此邮箱已注册，请直接登录'
					})
				} else if(data == 2000){
					return res.json({
						success:true,
						massage:'ok'
					})
				}
			}
		}else{
			return res.json({
				success:false,
				massage:'账号或密码为空！'
			})
		}
	});
	app.post('/api/signin',function(req,res){
		console.log(!!req.body.email && req.body.email.length>0)
		if((!!req.body.email && req.body.email.length>0) || (!!req.body.password && req.body.password.length>0)){
			var rqData = {
				email:req.body.email,
				password:req.body.password
			}
			control.signinAccont(rqData,cb);
			function cb(data){
				console.log(data)
				if(data === 1001 || data === 1003){
					return res.json(500,{
						success:false,
						massage:'服务器出错,请重试'
					})
				} else if(data === 1004){
					return res.json({
						success:false,
						massage:'密码错误，请重试'
					})
				} else if(data === 2000){
					res.cookie(rqData.email,sha1(rqData.email),{maxAge:360000})
					return res.json({
						success:true,
						massage:'ok'
					})
				}else if(data === 1005){
					return res.json({
						success:false,
						massage:'用户名不存在，请先注册'
					})
				}
			}	
		}else{
			return res.json({
				success:false,
				massage:'账号或密码为空！'
			})
		}
		
		
	})

};
module.exports = api;
