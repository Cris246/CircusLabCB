const mongoose = require('mongoose');
const { Schema } = mongoose;

const tutSchema = new Schema({
    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
    dificultad: {
        type: String,
        required: true,
        enum: ['principiante', 'media', 'dificil'],
        set: v => v.toLowerCase()
    },
    media: String
});

module.exports = mongoose.model('Tutorial', tutSchema, 'Tutoriales');
