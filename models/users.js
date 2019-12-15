const mongoose = require('mongoose');
const usersShema = mongoose.Schema({
    name: String,
    age: Number,
    mail: String
});

const Users = mongoose.model('Users', usersShema);
module.exports = Users;
