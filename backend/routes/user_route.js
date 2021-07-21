const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user_controller');

router.post('/register', user_controller.register);

router.post('/login', user_controller.login);


module.exports = router;