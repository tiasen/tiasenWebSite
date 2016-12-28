/**
 * Created by Tiasen on 2016/12/28.
 */
var mongoose = require('mongoose');
var config = require('../config/config');

mongoose.connect(config.mongodb);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connect error:'));
db.on('open',function(cb){
    console.log('connect success.....')
});

var AccontSchema = new mongoose.Schema({
    name:String,
    password:String,
    avatar:String,
    tel:Number
});
var Accont = mongoose.model('Accont',AccontSchema);

var test = new Accont({
    name:'tiasent',
    password:'111111',
    tel:18602908459
});
//test.save();
console.log(test.name);
