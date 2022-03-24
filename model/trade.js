const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
    block_no: {type:String, require:true},
    trade_id: {type:String, default:''},
    user: {type: String, default:''},
    slabs: {type:Boolean, default:false},
    is_child: {type: Boolean, default:false},
    sold:{type:Number, require:true},
    reserved:{type:Number, require:true},
    cost:{type:Number, default:0},
    qty: {type: Number, default:0},
    r_dim_1:{type:Number, default:0},
    r_dim_2:{type:Number, default:0},
    r_dim_3:{type:Number, default:0},
    dim_1:{type:Number, default:0},
    dim_2:{type:Number, default:0},
    dim_3:{type:Number, default:0},
    round_off: {type: String, default:''},
    hsn: {type: String, defult:''}
}, {collection: 'trade'});

const model = mongoose.model('TradeSchema', tradeSchema);

module.exports = model