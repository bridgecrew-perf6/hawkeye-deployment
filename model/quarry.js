const mongoose = require("mongoose");

const quarrySchema = new mongoose.Schema({
    quarry: {type:String, require:true, unique:true},
    quarry_address: {type:String, default:''},
    specific_gravity:{type:Number, default:0},
    block_type:{type:String, default:''},
    grade:{type:String, default:''},
    shade:{type:String, default:''},
    hsn_code:{type:String, default:''},
    slabs_hsn_code: {type:String, default: ''}
}, {collection: 'quarry'});

const model = mongoose.model('QuarrySchema', quarrySchema);
module.exports = model