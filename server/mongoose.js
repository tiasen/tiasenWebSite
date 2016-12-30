/**
 * Created by Tiasen on 2016/12/28.
 */
var mongoose = require('mongoose');
var config = require('./config/config.js');

mongoose.connect(config.mongodb);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connect error:'));
db.on('open',function(cb){
    console.log('connect success.....')
});

