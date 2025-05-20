const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    usuario: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, enum: ['profesor', 'alumno'], required: true },


});

//esto encripta la contraseña
usuarioSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});


usuarioSchema.methods.compararPassword = function (passwordIngresada) {
    return bcrypt.compare(passwordIngresada, this.password);
};

module.exports = mongoose.model('Usuario', usuarioSchema, 'Usuarios');
