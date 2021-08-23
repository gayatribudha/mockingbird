const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user_controller');

router.post('/register', user_controller.register);

router.post('/login', user_controller.login);

router.get('/dashboard',user_controller.loginRequired, user_controller.dashboard);

router.put('/:id/updateProfile', user_controller.updateProfile);  

router.get('/:id/userDetail', user_controller.userDetail);

module.exports = router;