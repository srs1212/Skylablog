var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model, local allows sign-up via email... if you wanted to do a signup with FB that would be different variables.

var userSchema = mongoose.Schema({
    local            : {
        email        : String,
        password     : String,
        username     : String,
        role         : String,
        loggedIn     : Boolean
    }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);