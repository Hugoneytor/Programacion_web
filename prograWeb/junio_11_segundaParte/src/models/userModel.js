const mongoose = require('mongoose');

const {Schema} = mongoose;

var userSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('Users', userSchema);