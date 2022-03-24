require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/user');

const JWT_SECRET = process.env.JWT_SECRET

const verifyToken = async function (token) {
    try {
        var obj = jwt.verify(token, JWT_SECRET);
        var usr = await User.findOne({user:obj.user});
        var pass_change_status = await bcrypt.compare(usr.password, obj.pass_h);
        if ((usr.admin_role||usr.moderator_role) || usr.salesman_role) {
            if (pass_change_status) {
                return obj;
            }
        }
    } catch (error) {}
    return 0;
}


module.exports = verifyToken