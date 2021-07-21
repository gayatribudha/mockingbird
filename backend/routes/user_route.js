const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user_controller');

router.post('/register', user_controller.register);

module.exports = router;