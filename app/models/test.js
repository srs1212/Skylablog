var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;  //setting up constructor f(x) for BearSchema and setting up the Mongo Database
								  // Schema is set in Mongo terminology
var TestSchema  = new Schema({  //this object sets our database nomenclature 
	name: String,  
	date: String,
	comment: String  //added for comment, don't think i needed
});

module.exports = mongoose.model('Test', TestSchema);