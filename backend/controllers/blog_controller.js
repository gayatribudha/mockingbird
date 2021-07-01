//importing blog model
const Blog = require('../models/blog_model');

// list all stored blogs
exports.list_blogs = function (req, res) {
    Blog.find(function (err, blog) {
        if (err) return next(err);
        res.send(blog);
    })
};

//create blog
exports.createBlog = function(req, res){
    const blog = new Blog({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    });
    blog.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Blog Created successfully.')
    })
}

//give specified blog detail
exports.blog_detail = function (req, res) {
    Blog.findById(req.params.id, function (err, blog) {
        if (err) return next(err);
        res.send(blog);
    })
};

//update specified blog detail
exports.blog_update = function (req, res) {
    Blog.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, blog) {
        if (err) return next(err);
        res.send('Blog udpated.');
    });
};

//delete specified blog
exports.blog_delete = function (req, res) {
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};




