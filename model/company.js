const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    company: {type:String, require:true, unique:true},
    line_1: {type:String, default:''},
    line_2: {type:String, default:''},
    line_3: {type:String, default:''},
    terms:{type:String, default:''}
}, {collection: 'company'});

const model = mongoose.model('CompanySchema', companySchema);

module.exports = model