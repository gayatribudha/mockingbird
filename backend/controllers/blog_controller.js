//importing blog model
const Blog = require('../models/blog_model');

//creating controller functions for blog routes
exports.home = function (req, res) {
    res.send('Welcome to Mockingbird fro controller.');
};


exports.createBlog = function(req, res){
    const blog = new Blog({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    });
    blog.save().then(val => {
        res.json({ msg: "Blog added successfully.", val: val})
    })
}



