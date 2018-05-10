var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = mongoose.Schema({
	name:{
		type: String
	},
	email:{
		type: String
	},
	password:{
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);
