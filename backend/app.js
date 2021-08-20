//importing necessary library and packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

//importing blog routes
const blog = require('./routes/blog_route');
const story = require('./routes/story_route');
const user = require('./routes/user_route');



//creating an express app
const app = express();

//defining on which port this node server is to be run
const PORT = process.env.PORT || 3001;


// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Token Verification 
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWTPASSWORD, (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

//route for blog routes
app.use('/blogs', blog);
app.use('/stories', story);
app.use('/', user);


// Database Connection
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/mockingbird', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

mongoose.connection.once('open', function () {
    console.log('Database connected Successfully');
}).on('error', function (err) {
    console.log('Error', err);
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

