const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
const { mongoose } = require('./database');
const { json } = require('express');


app.set('port', process.env.PORT || 3000);
app.use(cors({
    origin: 'https://circuslabcb.onrender.com/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.use('/api/circusLab', require('./routes/nov.route'));
app.use('/api/circusLab', require('./routes/tut.route'));
app.use('/api/circusLab', require('./routes/user.route'));

// Replace with your Angular dist folder name
const distFolder = path.join(__dirname, '../frontend/dist/browser');

// Serve static files
app.use(express.static(distFolder));

// Handle Angular routing (HTML5 mode)
app.get('*', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

// Ruta no encontrada
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});
