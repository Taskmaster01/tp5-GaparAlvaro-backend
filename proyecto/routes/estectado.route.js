//defino controlador para el manejo de CRUD
const espectadorCtrl = require('../controllers/espectador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de 

router.post('/', espectadorCtrl.createEspectador);//Dar de alta una persona
router.get('/', espectadorCtrl.getEspectadors);//Obtener todas las personas
router.get('/:id', espectadorCtrl.getEspectador);//Obtener UNA persona


//exportamos el modulo de rutas
module.exports = router;