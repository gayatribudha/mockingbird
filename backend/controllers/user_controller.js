require('dotenv').config();
const User = require('../models/user_model');
const User = require('../models/user_model');
const PendingUser = require('../models/pending_user_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config');
const validator = require('validator');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const nodemailer = require('nodemailer');




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
        else {
            console.log(req.body);

            function generateRandomNumber() {
                var minm = 100000;
                var maxm = 999999;
                return Math.floor(Math
                    .random() * (maxm - minm + 1)) + minm;
            }

            let pin = generateRandomNumber().toString();
            console.log(pin);

            let mailTransporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'yourEmail',
                    pass: 'yourPassword'
                }
            });

            let mailDetails = {
                from: 'trigbtech@gmail.com',
                to: req.body.email,
                subject: 'Please confirm your Email account',
                text: `Click the following link to verify your email http://localhost:3000/confirmEmail/${pin}.`,
                html: `Click on the link to verify your email. <br> <a href="link">Click here to verify.</a>`
        
            };

            mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log('Error Occurs');
                } else {
                    console.log('Email sent successfully');
                }
            });

            const newPendingUser = new PendingUser({
                username: req.body.username,
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password,
                pin: pin
            })

            newPendingUser.hash_password = bcrypt.hashSync(req.body.password, 10);

            newPendingUser.save((err, user) => {
                if (err) {
                    res.status(500).send({message: err})
                }
                user.hash_password = undefined;
                res.status(201).json(user);
            })


            // newUser.save((err, user) => {
            //     if (err) {
            //         res.status(500).send({ message: err });
            //     }
            //     user.hash_password = undefined;
            //     res.status(201).json(user);
            // });
        }
    })
};

exports.confirmRegister = function(req, res) {
    console.log('In confirm register.');
}

exports.confirmEmail = function(req, res, next) {
    PendingUser.findOne({
        pin: req.params.pin,
    })
    .then((pendingUser) => {
        if (!pendingUser) {
            return res.status(404).send({message: "Pending User not found"});
        }

        pendingUser
    })
    console.log('In confirm email');
    console.log(pin);
    console.log(req.params.pin);
}

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
                    token: jwt.sign({ email: user.email, fullname: user.fullname, _id: user._id, photo: user.photo }, process.env.JWTPASSWORD)
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
    next();
};

exports.userDetail = (req, res) => {

    User.findById(req.params.id).select('-__v')
        .then(user => {
            res.status(200).json(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id,
                    error: err
                });
            }
            return res.status(500).send({
                message: "Error retrieving User with id " + req.params.id,
                error: err
            });
        });
}

exports.changePassword = (req, res) => {
    console.log(req.params.id);
    console.log("Inside Change Password");
    User.findByIdAndUpdate(
        req.params.id,
        {
            password: req.body.newPassword,
            hash_password: bcrypt.hashSync(req.body.newPassword, 10)
        },
        { new: true }
    ).select('-__v')
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Error -> Cannot change password with id = " + req.params.id,
                    error: "Not Found!"
                });
            }
            res.status(200).json(user);
        }).catch(err => {
            return res.status(500).send({
                message: "Error -> Cannot change password with id = " + req.params.id,
                error: err.message
            });
        });
}


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


let updateProfile = (req, res) => {
    if (req.file === undefined) {
        User.findByIdAndUpdate(
            req.params.id,
            {
                fullname: req.body.fullname,
                email: req.body.email,
                bio: req.body.bio,
                address: req.body.address,
                contactNo: req.body.contactNo,
            },
            { new: true }
        ).select('-__v')
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: "Error -> Cannot update profile with id = " + req.params.id,
                        error: "Not Found!"
                    });
                }
                res.status(200).json(user);
            }).catch(err => {
                return res.status(500).send({
                    message: "Error -> Cannot update your profile with id = " + req.params.id,
                    error: err.message
                });
            });
    } else {
        User.findByIdAndUpdate(
            req.params.id,
            {
                fullname: req.body.fullname,
                email: req.body.email,
                bio: req.body.bio,
                address: req.body.address,
                contactNo: req.body.contactNo,
                photo: req.file.filename
            },
            { new: true }
        ).select('-__v')
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: "Error -> Cannot update profile with id = " + req.params.id,
                        error: "Not Found!"
                    });
                }
                res.status(200).json(user);
            }).catch(err => {
                return res.status(500).send({
                    message: "Error -> Cannot update your profile with id = " + req.params.id,
                    error: err.message
                });
            });
    }
}

let upload = multer({ storage, fileFilter });

exports.multerMiddleware = upload.single('photo');
exports.updateProfile = updateProfile;