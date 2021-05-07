//importing necessary library and packages
const express = require('express');
const mongoose = require('mongoose');

//importing blog routes
const blog = require('./routes/blog_route');
const story = require('./routes/story_route');


//creating an express app
const app = express();

//defining on which port this node server is to be run
const PORT = process.env.PORT || 3001;


// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route for blog routes
app.use('/blogs', blog);
app.use('/stories', story);


// Database Connection

mongoose.connect('mongodb://localhost/mockingbird', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

mongoose.connection.once('open', function () {
    console.log('Database connected Successfully');
}).on('error', function (err) {
    console.log('Error', err);
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

