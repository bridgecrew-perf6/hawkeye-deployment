const mongoose = require("mongoose");

const yardSchema = new mongoose.Schema({
    yard: {type:String, require:true, unique:true},
    yard_address: {type:String, default:''}
}, {collection: 'yard'});

const model = mongoose.model('YardSchema', yardSchema);

module.exports = model