const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}
transaccionCtrl.gettransaccions = async (req, res) => {
    var transaccions = await Transaccion.find();
    res.json(transaccions);
}
transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
transaccionCtrl.getTransaccion = async (req, res) => {
    const transaccion = await Transaccion.findById(req.params.id);
    res.json(transaccion);
}
transaccionCtrl.editTransaccion = async (req, res) => {
    const vtransaccion = new Transaccion(req.body);
    try {
        await Transaccion.updateOne({ _id: req.body._id }, vtransaccion);
        res.json({
            'status': '1',
            'msg': 'Transaccion updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
transaccionCtrl.deleteTransaccion = async (req, res) => {
    try {
        await Transaccion.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Transaccion removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = transaccionCtrl;