const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String
    },
    address: {
        type: String
    },
    contactNo: {
        type: String
    },
    profilePicture: {
        type: String
    }

})

module.exports = mongoose.model('User', userSchema)   