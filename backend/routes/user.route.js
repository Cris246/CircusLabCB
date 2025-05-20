const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');




router.get('/usuarios', userCtrl.getAllUsers);

router.post('/usuario/register', userCtrl.registerUser);

router.post('/usuario/login', userCtrl.loginUser);

module.exports = router;
