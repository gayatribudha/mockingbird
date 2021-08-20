require('dotenv').config();
const User = require('../models/user_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config');
const validator = require('validator');


// list all stored stories
exports.register = function (req, res) {
    if (!validator.isEmail(req.body.email)
        || !validator.isLength(req.body.fullname, { min: 3, max: 20 })
        || !validator.isLength(req.body.username, { min: 3, max: 20 })
        || !validator.isLength(req.body.password, { min: 8, max: 50 })) {
        return res.status(401).json({ error: "invalidentries" });
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(402).json({ error: "user already exists" });
        }
        //error case
        else {
            console.log(req.body);
            const newUser = new User({
                username: req.body.username,
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password,
            })

            newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
            newUser.save((err, user) => {
                if (err) {
                    res.status(500).send({ message: err });
                }
                user.hash_password = undefined;
                res.status(201).json(user);
            });

            // bcrypt.genSalt(10, (err, salt) => {
            //     bcrypt.hash(newUser.password, salt, (err, hash) => {
            //         if (err) throw err;
            //         newUser.password = hash;

            //         newUser
            //             .save()
            //             .then(user => res.json(user))
            //             .catch(err => console.log(err));
            //     });
            // });
        }
    })
};

exports.login = function (req, res) {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.status(401).json({ message: 'Authentication failed. User not found.' });
        } else if (user) {
            if (!user.comparePassword(req.body.password)) {
                res.status(401).json({ message: 'Authentication failed. Wrong password.' });
            } else {
                res.json({
                    token: jwt.sign({ email: user.email, fullname: user.fullname, _id: user._id }, process.env.JWTPASSWORD)
                });
            }
        }
    });
};

exports.dashboard = (req, res) => {
    console.log("Deshboarddddddddddddddd");
}

exports.loginRequired = (req, res, next) => {
    if (req.user) {
        res.json({ message: 'Authorized User, Action Successful!', user: req.user });
    } else {
        res.status(401).json({ message: 'Unauthorized user!' });
    }
};
