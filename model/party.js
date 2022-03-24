const mongoose = require("mongoose");

const partySchema = new mongoose.Schema({
    party: {type:String, require:true, unique:true},
    party_address: {type:String, default:''},
    gstin: {type:String, default:''}
}, {collection: 'party'});

const model = mongoose.model('PartySchema', partySchema);

module.exports = model