
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    trade_id: {type: String, required: true, unique: true},
    date: {type: String, default:''},
    dispatched: {type: Boolean, default:false},
    company: {type: String, default:''},
    igst: {type: Number, default:0},
    cgst: {type:Number, default: 0},
    sgst: {type: Number, default:0},
    shipping_address: {type:String, default:''},
    supply_state:{type:String, default:''},
    sale_type: {type:String, default:''},
    party: {type: String, default:''},
    user: {type: String, required: true},
    eway_bill_no: {type: String, default: ''},
    royalty_no: {type: String, default: ''},
    transportation_mode: {type: String, default:''},
    customer_ref_no: {type: String, default: ''},
    quotation: {type: Boolean}

}, {collection: 'invoice'});


const model = mongoose.model('InvoiceSchema', invoiceSchema);
module.exports = model