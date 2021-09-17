const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publish: {
        type: Boolean
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Blog',blogSchema)