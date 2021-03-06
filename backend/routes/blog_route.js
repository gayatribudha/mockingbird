const express = require('express');
const router = express.Router();

// importing controller for blog
const blog_controller = require('../controllers/blog_controller');
const user_controller = require('../controllers/user_controller');


// create routes

router.get('/:id',blog_controller.list_blogs);

router.post('/create-blog', blog_controller.multerMiddleware, blog_controller.createBlog); //create blog

router.get('/single/:id', blog_controller.blog_detail); //find specified blog detail

router.put('/:id/update', blog_controller.blog_update); //update specified blog

router.delete('/:id/delete', blog_controller.blog_delete); //delete specified blog

module.exports = router;
