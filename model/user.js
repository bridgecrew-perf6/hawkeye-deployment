const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user: {type:String, require:true, unique:true},
    name: {type:String, require:true},
    password: {type:String, require:true},
    admin_role: {type:Boolean, default:false},
    moderator_role:{type:Boolean, default:false},
    salesman_role:{type:Boolean, default:false},
    forgot_password_secret:{type:String, default:''}
}, {collection: 'user'});

const model = mongoose.model('UserSchema', userSchema);

module.exports = model