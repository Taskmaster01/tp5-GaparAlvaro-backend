const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductoSchema = new Schema({
    nombre: { type: String, required: true },//
    descripción: { type: String, required: true },//String
    imagen: { type: String, required: true },//String //url de una imagen para mostrar
    precio: { type: Number, required: true },// Number
    stock: { type: Number, required: true },//Number
    destacado: { type: Boolean, required: true },//Boolean // solo algunos productos son destacados
})
module.exports = mongoose.models.Producto || mongoose.model('Producto', ProductoSchema);

///visual