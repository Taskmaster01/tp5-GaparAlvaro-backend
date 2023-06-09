const mongoose = require('mongoose');
const {Schema} = mongoose;
const TransaccionSchema = new Schema({
monedaOrigen: {type: String, required: true},//String
 cantidadOrigen: {type: number, required: true},//number
 monedaDestino: {type: String, required: true},//String
 cantidadDestino: {type: number, required: true},//number
 emailCliente: {type: String, required: true},//String
 tasaConversion: {type: number, required: true},//number // Dato que ingresa el cliente,y se ha utilizado para calcular cantidadDestino.
})
module.exports = mongoose.models.Transaccion || mongoose.model('Transaccion', TransaccionSchema);
