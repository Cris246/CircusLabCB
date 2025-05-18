const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
const { mongoose } = require('./database');
const { json } = require('express');

app.set('port', process.env.PORT || 3000);

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));




// Rutas de la API
app.use('/api/circusLab', require('./routes/nov.route'));
app.use('/api/circusLab', require('./routes/tut.route'));
app.use('/api/circusLab', require('./routes/user.route'));

// Ruta raíz
app.use('/', (req, res) => {
    res.json({ mensaje: 'Bienvenido a CircusLab' });
});


// Ruta no encontrada
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});
