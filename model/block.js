
const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
    block_no: {type: String, required: true, unique: true},
    yard:{type:String, default:''},
    yard_history:{type:Array, default:[]},
    date: {type:String, default:''},
    hsn_code: {type:String, default:''},
    quarry: {type:String, default:''},
    grade: {type:String},
    shade:{type:String},
    weight:{type:Number, default:0},
    dim_1:{type:Number, default:0},
    dim_2:{type:Number, default:0},
    dim_3:{type:Number, default:0},
    note:{type:String, default:''},
    slabs:{type:Boolean, default:false},
    sold:{type:Number, default:0},
    reserved:{type:Number, default:0},
    transportation_cost:{type:Number, default:0},
    cost:{type:Number, default:0},
    in_transit:{type:Boolean, default:false},
    has_children:{type:Boolean, default:false},
    children:{type:Array, default:[]},
    is_child:{type:Boolean, default:false},
    invoice_no:{type:String, default:''},
    truck_no:{type:String, default:''},
    builty_no:{type:String, default:''},
    royalty_no:{type:String, default:''},
    eway_bill_no:{type:String, default:''},
    company:{type:String, default:''},
    unit:{type:String, default:''},
    processing_cost:{type:Number, default:0},
    processor:{type:String, default:''}
    
}, {collection: 'block'});


const model = mongoose.model('BlockSchema', blockSchema);
module.exports = model