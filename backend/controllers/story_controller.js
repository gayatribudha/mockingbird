//importing story model
const Story = require('../models/story_model');


// list all stored stories
exports.list_stories = function (req, res) {
    Story.find().select('-__v').then(stories => {
        res.status(200).json(stories);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};

//create story
exports.createStory = function(req, res){
    const story = new Story({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    });
    story.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message: "Fail!",
            error: err.message
        });
    });
};

//give specified story detail
exports.story_detail = function (req, res) {
    Story.findById(req.params.id).select('-__v')
        .then(story => {
            res.status(200).json(story);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Story not found with id " + req.params.id,
                    error: err
                });
            }
            return res.status(500).send({
                message: "Error retrieving Story with id " + req.params.id,
                error: err
            });
        });
};

//update specified story detail
exports.story_update = function (req, res) {
    Story.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {new: true}
    ).select('-__v')
        .then(story => {
            if (!story) {
                return res.status(404).send({
                    message: "Error -> Cannot update a story with id = " + req.params.id,
                    error: "Not Found!"
                });
            }

            res.status(200).json(story);
        }).catch(err => {
            return res.status(500).send({
                message: "Error -> Cannot update a story with id = " + req.params.id,
                error: err.message
            });
        });
};

//delete specified story
exports.story_delete = function (req, res) {
    Story.findByIdAndRemove(req.params.id).select('-__v -_id')
        .then(story => {
            if (!story) {
                res.status(404).json({
                    message: "Does Not exist a story with id = " + req.params.id,
                    error: "404",
                });
            }
            res.status(200).json({});
        }).catch(err => {
            return res.status(500).send({
                message: "Error -> Cannot delete a story with id = " + req.params.id,
                error: err.message
            });
        });
};




