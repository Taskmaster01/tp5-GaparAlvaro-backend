const express = require('express');
const cors = require('cors');//require es una especie de inport de librerias
const { mongoose } = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/producto', require('./routes/producto.route.js'));//ruta del api creado
app.use('/api/transaccion', require('./routes/transaccion.route.js'));//ruta del api creado
app.use('/api/ticket', require('./routes/ticket.route.js'));//ruta del api creado
app.use('/api/espectador', require('./routes/estectado.route.js'));//ruta del api creado

//app.use('/api/sector', require('./routes/sector.route'));
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en el puerto: `, app.get('port'));
});
