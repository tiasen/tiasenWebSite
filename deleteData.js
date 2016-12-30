var models = require('./server/models/models');
var AccontModel = models.AccontModel;

AccontModel
	.find()
	.remove()
	.exec();
