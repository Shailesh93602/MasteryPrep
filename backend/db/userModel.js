const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide your name!"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide your email address!"],
        unique: [true, "eamil exist"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false, 
    },
})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);