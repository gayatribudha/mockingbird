const express = require('express');
const router = express.Router();

// importing controller for blog
const blog_controller = require('../controllers/blog_controller');

// create routes
router.get('/', blog_controller.home);

router.post('/create-blog', blog_controller.createBlog);

module.exports = router;
