var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;  //setting up constructor f(x) for BearSchema and setting up the Mongo Database
								  // Schema is set in Mongo terminology
var PostSchema  = new Schema({  //this object sets our database nomenclature 
	title: String,  
	content: String,
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	image: String,
	date: {type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);