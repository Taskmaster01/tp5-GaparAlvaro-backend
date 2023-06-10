const Ticket = require('../models/ticket');
const ticketCtrl = {}

ticketCtrl.createTicket= async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.json({
        'status': '1',
        'msg': 'Ticket guardado.'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}

ticketCtrl.getTickets = async (req, res) => {
    var tickets = await Ticket.find().populate("ticketP");
    res.json(tickets);
}


ticketCtrl.deleteTicket= async (req, res)=>{
    try {
    await Ticket.deleteOne({_id: req.params.id});
    res.json({
    status: '1',
    msg: 'Ticket removed'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    })
  }
}


ticketCtrl.modificarTicket = async (req, res) => {
    const vticket= new Ticket(req.body);
    try {
        await Ticket.updateOne({_id: req.body._id}, vticket);
        res.json({
        'status': '1',
        'msg': 'Ticket updated'
    })
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
  }
}


ticketCtrl.getRecuperarTickets = async (req, res) => {
  //  var criteria={'categoriaEspectador': '/extranjero-local'};
  var criteria={};
  if(req.query.categoriaEspectador!=null && req.query.categoriaEspectador!=""){
    criteria.categoriaEspectador = { $regex: req.query.categoriaEspectador, $options: "i" }};
    var tickets = await Ticket.find(criteria);
    res.json(tickets);
}



////creado para la modificacion
ticketCtrl.getTicket = async (req, res) => {
    const ticket = await Pasaje.findById(req.params.id).populate("ticketP");
    res.json(ticket);
}



module.exports = ticketCtrl;