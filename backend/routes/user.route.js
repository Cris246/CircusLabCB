const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');




router.get('/usuarios', userCtrl.getAllUsers);
// Registrar un nuevo usuario
router.post('/usuario/register', userCtrl.registerUser);

// Iniciar sesión (login)
router.post('/usuario/login', userCtrl.loginUser);

module.exports = router;
