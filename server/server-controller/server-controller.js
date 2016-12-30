var models = require('../models/models');
var sha1 = require('sha1');
var AccontModel = models.AccontModel; 
/*
 *   返回值说明：
 * 	   1001 ：数据库出错
 * 	   1002：已注册
 *     1003：保存出错
 * 	   1004:密码错误
 *     1005:用户名不存在
 *     2000：成功
 * 
 * */


module.exports = {
	signupAccont:function(data,cb){
		console.log("data" + data)
		AccontModel	
			.findOne({email:data.email},function(err,user){
				if(err){
					console.error('database error' + err);
					
					return cb(1001);
				}
				console.log('signup find user' + user)
				if(user !== null){
					
					return cb(1002);
				} 
				new AccontModel({
					email:data.email,
					password:sha1(data.password)
				}).save(function(err){
					if(err){cb(1003);console.error("save error" + err);return err; } 
					return cb(2000);
				})	
				
			});
		
	},
	signinAccont:function(data,cb){
		AccontModel
			.findOne({
				email:data.email
			},function(err,user){
				if(err){
					console.error('database error' + err);
					return cb(1003);
				}
				console.log('user--'+user)				
				if(user){
					if(sha1(data.password) === user.password){
						return cb(2000);
					}else{
						return cb(1004);
					} 
				}else{
					return cb(1005)
				}
				
			}).exec();
	}
}
