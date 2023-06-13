const Ticket = require('../models/ticket');
const ticketCtrl = {}

ticketCtrl.createTicket= async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.status(200).json({
        'status': '1',
        'msg': 'Ticket guardado.'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}
///mostrar uno solo
/*
ticketCtrl.getTicket = async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    res.json(ticket);
}
*/
ticketCtrl.getTicket = async (req, res) => {
    const ticket = await Ticket.findById(req.params.id).populate("ticketP");
    res.json(ticket);
}
 
ticketCtrl.getTickets = async (req, res) => {//recupera todo
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
  /*var criteria={};
  if(req.query.categoriaEspectador!=null && req.query.categoriaEspectador!=""){
    criteria.categoriaEspectador = { $regex: req.query.categoriaEspectador, $options: "l" }};
    var tickets = await Ticket.find(criteria);
    res.json(tickets);*/
   let criteria={};
   if(req.query.categoriaEspectador != null && req.query.categoriaEspectador != ""){
    criteria.categoriaEspectador = req.query.categoriaEspectador;
  }
  var tickets = await Ticket.find({categoriaEspectador : 'l'});//(criteria);
  res.json(tickets);
//http://localhost:3000/api/ticket/categoriaEspectador mostrara todo los true

}
 


////creado para la modificacion
/*ticketCtrl.getTicket = async (req, res) => {
    const ticket = await espectador.findById(req.params.id).populate("ticketP");//pasaje era espectador
    res.json(ticket);
}*/



module.exports = ticketCtrl;