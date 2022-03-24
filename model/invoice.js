
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    trade_id: {type: String, required: true, unique: true},
    date: {type: String, default:''},
    dispatched: {type: Boolean, default:false},
    unit: {type:String, default:''},
    company: {type: String, default:''},
    igst: {type: Number, default:0},
    cgst: {type:Number, default: 0},
    sgst: {type: Number, default:0},
    shipping_address: {type:String, default:''},
    supply_state:{type:String, default:''},
    sale_type: {type:String, default:''},
    party: {type: String, default:''},
    user: {type: String, required: true}

    
}, {collection: 'invoice'});


const model = mongoose.model('InvoiceSchema', invoiceSchema);
module.exports = model