const mongoose = require('mongoose');
const bcrypt = require('../server.js').bcrypt
const Schema = mongoose.Schema;

var test = Math.floor((Math.random() * 1000) + 1);
var test4 = bcrypt.hashSync('' + test, bcrypt.genSaltSync(8), null);

const userSchema = new Schema({
    fname:{type:String},
    lname:{type:String},
    email: {type: String},
    password: {type: String},
    userType:{type:String},
    physemail: {type:String},
}, {
  timestamps: true,
});
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

const User = mongoose.model('User', userSchema);

module.exports = User;