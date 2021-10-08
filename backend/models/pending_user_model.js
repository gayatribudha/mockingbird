const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const pendingUserSchema = new mongoose.Schema({
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
    pin: {
        type: String
    }

})

//Create a Schema method to compare password 
pendingUserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
}

module.exports = mongoose.model('PendingUser', pendingUserSchema)