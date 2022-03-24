const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema({
    unit: {type:String, require:true, unique:true},
    factor: {type:Number, default:1}
}, {collection: 'unit'});

const model = mongoose.model('UnitSchema', unitSchema);

module.exports = model