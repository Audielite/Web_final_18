var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
  local : {
    username: String,
    password: String
  },
  email: String,
  modlist: {type: String}
});


userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSnyc(password, this.local.password);
};

var User = mongoose.model('user', userSchema);

module.exports = User;
