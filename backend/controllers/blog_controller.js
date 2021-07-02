//importing blog model
const Blog = require('../models/blog_model');

// list all blogs
exports.list_blogs = function (req, res) {

    Blog.find().select('-__v').then(blogs => {
        res.status(200).json(blogs);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};

//create blog
exports.createBlog = function (req, res) {
    const blog = new Blog({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    });

    blog.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message: "Fail!",
            error: err.message
        });
    });
};

//give single blog
exports.blog_detail = function (req, res) {

    Blog.findById(req.params.id).select('-__v')
        .then(blog => {
            res.status(200).json(blog);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Blog not found with id " + req.params.id,
                    error: err
                });
            }
            return res.status(500).send({
                message: "Error retrieving Blog with id " + req.params.id,
                error: err
            });
        });
};

//find blog and update it
exports.blog_update = function (req, res) {
    
    Blog.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {new: true}
    ).select('-__v')
        .then(blog => {
            if (!blog) {
                return res.status(404).send({
                    message: "Error -> Cannot update a blog with id = " + req.params.id,
                    error: "Not Found!"
                });
            }

            res.status(200).json(blog);
        }).catch(err => {
            return res.status(500).send({
                message: "Error -> Cannot update a blog with id = " + req.params.id,
                error: err.message
            });
        });
};

//delete specified blog
exports.blog_delete = function (req, res) {

    Blog.findByIdAndRemove(req.params.id).select('-__v -_id')
        .then(blog => {
            if (!blog) {
                res.status(404).json({
                    message: "Does Not exist a Blog with id = " + req.params.id,
                    error: "404",
                });
            }
            res.status(200).json({});
        }).catch(err => {
            return res.status(500).send({
                message: "Error -> Cannot delete a blog with id = " + req.params.id,
                error: err.message
            });
        });
};




