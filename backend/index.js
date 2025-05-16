const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const multer = require('multer'); // ✅ Importar multer

const app = express();
const { mongoose } = require('./database');
const { json } = require('express');

app.set('port', process.env.PORT || 3000);

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// ✅ Middleware para servir imágenes estáticas
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ✅ Configuración de Multer para subir imágenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// ✅ Ruta para subir una imagen
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ imageUrl: `/images/${req.file.filename}` });
});

// Rutas de la API
app.use('/api/circusLab', require('./routes/nov.route'));
app.use('/api/circusLab', require('./routes/tut.route'));
app.use('/api/circusLab', require('./routes/user.route'));

// Ruta raíz
app.use('/', (req, res) => {
    res.send('Bienvenido a CircusLab');
});

// Ruta no encontrada
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});
