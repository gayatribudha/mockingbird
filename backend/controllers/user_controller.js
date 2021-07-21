const User = require('../models/user_model');
const bcrypt = require('bcryptjs');
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

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;

                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    })
};