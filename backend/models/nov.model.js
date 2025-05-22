const mongoose = require('mongoose');
const {Schema} = mongoose;
const novSchema = new Schema({
    titulo:{type :String,required:true},
    contenido:{type :String,required:true},
    media:String,
    visitas: { type: Number, default: 0 }

});
module.exports = mongoose.model('Novedad',novSchema,'Novedades');