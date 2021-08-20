const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    fullname: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lovercase: true,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    hash_password: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
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

//Create a Schema method to compare password 
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
}

module.exports = mongoose.model('User', userSchema)