const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const drawerSchema = new mongoose.Schema({
    user: {type:String, require:true},
    block_no: {type:String, require: true}
}, {collection: 'drawer'});

const model = mongoose.model('DrawerSchema', drawerSchema);

module.exports = model