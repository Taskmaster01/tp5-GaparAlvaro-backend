const mongoose = require('mongoose');
const {Schema} = mongoose;
const Pto1Schema = new Schema({
nombre: {type: String, required: true},//
descripción:  {type: String, required: true},//String
 imagen:  {type: String, required: true},//String //url de una imagen para mostrar
 precio: {type: Number, required: true},// Number
 stock:  {type: Number, required: true},//Number
 destacado:  {type: Boolean, required: true},//Boolean // solo algunos productos son destacados
})
module.exports = mongoose.models.Pto1 || mongoose.model('Pto1', Pto1Schema);

///visual