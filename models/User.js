const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const db = mongoose.createConnection('mongodb://localhost/users');

var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		default: ""
	},
	password: {
		type: String,
		default: ""
	},
	posts:
	{
		type:Array,
		default:[]
	},
	wins:
	{
		type:Number,
		default:0
	},
	losses:
	{
		type:Number,
		default:0
	}
	,
	draws:
	{
		type:Number,
		default:0
	},
	points: 
	{
		type:Number,
		default:0
	}

});

UserSchema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};
module.exports = db.model("User", UserSchema, "UserData");