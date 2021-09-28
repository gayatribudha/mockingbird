//importing blog model
const Blog = require('../models/blog_model');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');


// list all blogs
exports.list_blogs = function (req, res) {
    if (req.params.id == 'blogPreview') {
        Blog.find({ "category": "blog" }).select('-__v').then(blogs => {
            res.status(200).json(blogs.filter(blog=>blog.publish))
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error",
                error: error
            })
        });
    } else if (req.params.id === 'blog') {
        Blog.find({ "userId": req.user._id, "category": 'blog' }).select('-__v').then(blogs => {
            res.status(200).json(blogs)
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error",
                error: error
            })
        });
    } else if (req.params.id === 'story') {
        Blog.find({ "userId": req.user._id, "category": 'story' }).select('-__v').then(blogs => {
            res.status(200).json(blogs)
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error",
                error: error
            })
        });

    } else {
        console.log("Error");
    }
};


//create blog

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let createBlog = (req, res) => {
    console.log(req.file);
    if (req.file === undefined) {
        const blog = new Blog({
            author: req.body.author,
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            userId: req.body.userId
        });

        console.log(blog);


        blog.save().then(data => {
            res.status(200).json(data);
        }).catch(err => {
            res.status(500).json({
                message: "Fail!",
                error: err.message
            });
        });
    } else {
        const blog = new Blog({
            author: req.body.author,
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            coverPicture: req.file.filename,
            userId: req.body.userId
        });

        console.log(blog);

        blog.save().then(data => {
            res.status(200).json(data);
        }).catch(err => {
            res.status(500).json({
                message: "Fail!",
                error: err.message
            });
        });
    }
};

let upload = multer({ storage, fileFilter });
exports.multerMiddleware = upload.single('coverPicture');
exports.createBlog = createBlog;

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
        { new: true }
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




