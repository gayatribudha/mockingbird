const express = require('express');
const router = express.Router();

// importing controller for story
const story_controller = require('../controllers/story_controller');

// list all stored stories
router.get('/', story_controller.list_stories);

// create routes
router.post('/create-story', story_controller.createStory); //create story

router.get('/:id', story_controller.story_detail); //find specified story detail

router.put('/:id/update', story_controller.story_update); //update specified story

router.delete('/:id/delete', story_controller.story_delete); //delete specified story

module.exports = router;
