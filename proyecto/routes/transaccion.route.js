//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', transaccionCtrl.gettransaccions);//http://localhost:3000/api/agente/
router.post('/', transaccionCtrl.createTransacccion);
router.get('/:id', transaccionCtrl.getTransacccion);
router.put('/:id', transaccionCtrl.editTransacccion);
router.delete('/:id', transaccionCtrl.deleteTransacccion);
//exportamos el modulo de rutas
module.exports = router;