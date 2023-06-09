const mongoose = require('mongoose');
const {Schema} = mongoose;
const TicketSchema = new Schema({ 
    precioTicket: {type: Number, required: true}, 
    categoriaEspectador: {type: String, required: true}, 
    fechaCompra: {type: String, required: true},  // gestinar fecha como string
    espectador: Espectador (Schema.Types.ObjectId)
})
module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketEchema);