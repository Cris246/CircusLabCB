const mongoose = require('mongoose');
const {Schema} = mongoose;
const novSchema = new Schema({
    titulo:{type :String,required:true},
    contenido:{type :String,required:true},
    media:String
});
module.exports = mongoose.model('Novedad',novSchema,'Novedades');