var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	name: String,
	age: Number,
	album: String,
	timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('user', UserSchema);