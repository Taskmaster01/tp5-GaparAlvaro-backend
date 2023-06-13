const Espectador = require('../models/espectador');
const espectadorCtrl = {}



espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.json({
            'status': '1',
            'msg': 'Espectador guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

espectadorCtrl.getEspectadors = async (req, res) => {
    var espectadors = await Espectador.find();
    res.json(espectadors);
}

espectadorCtrl.getEspectador = async (req, res) => {
    const espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
}

module.exports = espectadorCtrl;