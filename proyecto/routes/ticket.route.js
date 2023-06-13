//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', ticketCtrl.createTicket);//Dar de alta un tik (POST), enviar además el esp.
router.get('/:id', ticketCtrl.getTicket);//recupera tiks

router.get('/', ticketCtrl.getTickets);//Recuperar TODOS los tik (GET) incluyendo la información de los espec.
router.delete('/:id', ticketCtrl.deleteTicket);//Eliminar un tik 
router.put('/:id', ticketCtrl.modificarTicket);//Modificar un tik
router.get('/categoriaEspectador', ticketCtrl.getRecuperarTickets);//Recuperar SOLO los espectador que tienen una determinada categoría de tiked
//exportamos el modulo de rutas

router.get('/:id', ticketCtrl.getTicket)//recupera solo por id
module.exports = router;