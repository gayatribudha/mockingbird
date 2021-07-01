//importing story model
const Story = require('../models/story_model');


// list all stored stories
exports.list_stories = function (req, res) {
    Story.find(function (err, story) {
        if (err) return next(err);
        res.send(story);
    })
};

//create story
exports.createStory = function(req, res){
    const story = new Story({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    });
    story.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Story Created successfully.')
    })
}

//give specified story detail
exports.story_detail = function (req, res) {
    Story.findById(req.params.id, function (err, story) {
        if (err) return next(err);
        res.send(story);
    })
};

//update specified story detail
exports.story_update = function (req, res) {
    Story.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, story) {
        if (err) return next(err);
        res.send('Story udpated.');
    });
};

//delete specified story
exports.story_delete = function (req, res) {
    Story.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};




