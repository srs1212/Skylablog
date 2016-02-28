var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;  //setting up constructor f(x) for BearSchema and setting up the Mongo Database
								  // Schema is set in Mongo terminology
var TestSchema  = new Schema({  //this object sets our database nomenclature 
	name: String,  
	date: Date,
});

module.exports = mongoose.model('Test', TestSchema);