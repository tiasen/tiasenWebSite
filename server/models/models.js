var mongoose = require('mongoose');

var AccontSchema = new mongoose.Schema({
    email:String,
    password:String,
    avatar:String,
    tel:Number
});

var AccontModel = mongoose.model('AccontModel',AccontSchema);

module.exports = {
	AccontModel:AccontModel
};

