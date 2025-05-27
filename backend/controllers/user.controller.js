const Usuario = require('../models/user.model');
const jwt = require('jsonwebtoken');


exports.getAllUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        if (usuarios.length > 0) {
            res.status(200).json(usuarios);
        } else {
            res.status(404).json({ status: 'No se encontraron usuarios' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error al obtener los usuarios', error: err.message });
    }
};


exports.registerUser = async (req, res) => {
    const { usuario, password, rol } = req.body;

    try {
        // Verificar si el usuario ya existe
        const usuarioExistente = await Usuario.findOne({ usuario });
        if (usuarioExistente) {
            return res.status(400).json({ status: 'Error', mensaje: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario
        const nuevoUsuario = new Usuario({ usuario, password, rol });

        // Guardar el usuario
        await nuevoUsuario.save();
        res.status(201).json({ status: 'Usuario registrado correctamente', usuario: nuevoUsuario });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error al registrar el usuario', error: err.message });
    }
};

// Función para login
exports.loginUser = async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const usuarioEncontrado = await Usuario.findOne({ usuario });
        if (!usuarioEncontrado) {
            return res.status(401).json({ status: 'Usuario no encontrado' });
        }

        const coincide = await usuarioEncontrado.compararPassword(password);
        if (!coincide) {
            return res.status(401).json({ status: 'Contraseña incorrecta' });
        }

        // Generar el token JWT
        const token = jwt.sign(
            { id: usuarioEncontrado._id, rol: usuarioEncontrado.rol },
            'tu_clave_secreta', // Reemplaza por una clave segura
            { expiresIn: '1h' }
        );

        // Configurar el encabezado para respuesta JSON
        res.setHeader('Content-Type', 'application/json');

        // Devolver el token como respuesta
        res.status(200).json({ status: 'Login exitoso', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error en el login', error: err.message });
    }
};
