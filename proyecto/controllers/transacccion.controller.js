const Transacccion = require('../models/transacccion');
const transacccionCtrl = {}
transacccionCtrl.getproductos = async (req, res) => {
    var transacccions = await Transacccion.find();
    res.json(transacccions);
}
transacccionCtrl.createTransacccion = async (req, res) => {
    var transacccion = new Transacccion(req.body);
    try {
        await transacccion.save();
        res.json({
            'status': '1',
            'msg': 'Transacccion guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
transacccionCtrl.getTransacccion = async (req, res) => {
    const transacccion = await Transacccion.findById(req.params.id);
    res.json(transacccion);
}
transacccionCtrl.editTransacccion = async (req, res) => {
    const vtransacccion = new Transacccion(req.body);
    try {
        await Transacccion.updateOne({ _id: req.body._id }, vtransacccion);
        res.json({
            'status': '1',
            'msg': 'Transacccion updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
transacccionCtrl.deleteTransacccion = async (req, res) => {
    try {
        await Transacccion.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Transacccion removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = tansacccionCtrl;