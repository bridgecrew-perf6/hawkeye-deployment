
const mongoose = require("mongoose");

const slabsSchema = new mongoose.Schema({
    block_no:{type: String, require:true, unique:true},
    yard:{type: String, default:''},
    yard_history:{type:Array, default: []},
    processor:{type: String, default:''},
    date:{type:String, default:''},
    dim_1:{type:Number, default:0},
    dim_2:{type:Number, default:0},
    dim_3:{type:Number, default:0},
    no_of_slabs:{type:Number, default:0},
    transportation_cost:{type:Number, default:0},
    processing_cost:{type:Number, default:0},
    cost:{type:Number, default:0},
    lost:{type:Number, default:0},
    weight:{type:Number, default:0},
    note:{type:String, default:''},
    sold:{type:Number, default:0},
    reserved: {type:Number, default:0},
    polished: {type:Boolean, default:false},
    polishing_cost: {type: Number, default:0},
    polishing_date: {type: String, default:''},
    in_transit:{type:Boolean, default:false},
    slabs_hsn_code: {type:String, default:''},
    unit: {type:Number, default:''}
}, {collection: 'slabs'});


const model = mongoose.model('SlabsSchema', slabsSchema);

module.exports = model