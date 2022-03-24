const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verify.js');
const Block = require('../model/block');
const Company = require('../model/company');
const Drawer = require('../model/drawer');
const Party = require('../model/party');
const Quarry = require('../model/quarry');
const Slabs = require('../model/slabs');
const Trade = require('../model/trade');
const User = require('../model/user');
const Yard = require('../model/yard');
const router = express.Router();

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET
const PIN = process.env.PIN

router.post("/auth",  async (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    const userObj = await User.findOne({ user: user }).lean();
    if (!userObj) {
        return res.json({ status: 'Invalid user/password' })
    }
    var passwordmatched = await bcrypt.compare(password + user, userObj.password)
    if (passwordmatched) {
        var pass_change = await bcrypt.hash(userObj.password, 10);
        const token = jwt.sign({ id: userObj._id, user: userObj.user, pass_h : pass_change }, JWT_SECRET, { expiresIn: '12h' })

        return res.json({
            status: 'ok', token: token, data: {
                user: userObj.user,
                name: userObj.name,
                admin_role: userObj.admin_role,
                moderator_role: userObj.moderator_role,
                salesman_role: userObj.salesman_role
            }
        });
    }
    res.json({ status: 'Invalid user/password' })
}

);

router.post('/sign-up',  async (req, res) => {
    var r = req.body;
    if (r.password.length < 6) {
        return res.send({ status: "Required password length: 6 or more" })
    }
    if (r.user.length == 0) {
        return res.send({ status: "Enter a user" })
    }
    password = await bcrypt.hash(r.password + r.user, 10);
    try {
        if (r.pin == PIN) {
            await User.create({
                user: r.user,
                password: password,
                name: r.name
            });
            return res.json({ status: "ok" })
        }
        return res.send({ status: "Wrong Pin" });
    }
    catch (error) {
        return res.send({ status: "Already Exists" });
    }
});
// forgot pasword secret expiry

router.post('/change-password',  async (req, res) => {
    var user = req.body.user;
    var oldpass = req.body.oldpass;
    var newpass = req.body.newpass;
    const userObj = await User.findOne({ user }).lean();
    if (userObj) {
        if (req.body.forgot == 0) {
            if (await bcrypt.compare(oldpass + user, userObj.password)) {
                var newhashedpassword = await bcrypt.hash(newpass + user, 10)
                await User.updateOne(
                    { _id: userObj._id },
                    { $set: { password: newhashedpassword } }
                );
                return res.json({ status: "ok" })
            }
        }
        if (req.body.forgot == 1) {
            if (userObj.forgot_password_secret === req.body.forgot_password_secret) {
                var newhashedpassword = await bcrypt.hash(newpass + user, 10);
                await User.updateOne(
                    { _id: userObj._id },
                    { $set: { password: newhashedpassword, forgot_password_secret: '' } }
                )
                return res.json({ status: "ok" })
            }
        }
    }
    res.json({ status: "failed" })

});


router.post('/forgot-password',  async (req, res) => {
    const user = req.body.user;
    const userObj = await User.findOne({ user }).lean();
    if (userObj) {
        const secret = randomStringGenerator()
        await User.updateOne(
            { _id: userObj._id },
            { $set: { forgot_password_secret: secret } }
        );
        await sendMail("conf437@gmail.com", MAIL_APP_PASSWORD, userObj.user, "Change Password at SalesBit", `Following is the link to reset your password - <a href='https://salesbit.in/changepassword?forgot=1&email=` + userObj.user + `&forgot_password_secret=` + secret + `'>Reset Password</a>`)

        res.json({ status: "ok" })
    }
    else {
        res.json({ status: "failed" });
    }
});

router.post('/change-role',  async (req, res) => {
    const user = req.body.user;
    const moderator_role = req.body.moderator_role;
    const salesman_role = req.body.salesman_role;
    const token = req.body.token;
    var u = await verifyToken(token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, admin_role: true }).lean();
        if (parent_user) {
            var child_user = await User.findOne({ user: user }).lean();
            if (child_user) {
                if (typeof (moderator_role) == 'boolean') {
                    await User.updateOne(
                        { _id: child_user._id },
                        { $set: { moderator_role: moderator_role } }
                    );
                }
                if (typeof (salesman_role) == 'boolean') {
                    await User.updateOne(
                        { _id: child_user._id },
                        { $set: { salesman_role: salesman_role } }
                    );
                }
                return res.json({ status: "ok" })
            }
            else {
                res.json({ status: "failed", error: "User doesn't exist" });
            }

        }
        else {
            res.json({ status: "failed", error: "Not allowed" });
        }

    }
    else {
        res.json({ status: "failed", error: "Invalid attempt" });
    }

});

router.post('/get-my-roles',  async (req, res) => {
    const token = req.body.token;
    var u = await verifyToken(token);
    if (u != 0) {
        const userObj = await User.findOne({ user: u.user }).lean();
        if (userObj) {
            
            return res.json({
                status: "ok", data: {
                    admin_role: userObj.admin_role,
                    moderator_role: userObj.moderator_role,
                    salesman_role: userObj.salesman_role
                }
            })
        }
    }
    res.json({ status: "failed" });
})

router.post('/get-users',  async (req, res) => {
    const token = req.body.token;
    var u = await verifyToken(token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, admin_role: true }).lean();
        if (parent_user) {
            var child_users = await User.find({}, { user: 1, name: 1, moderator_role: 1, salesman_role: 1, _id: 0 }).lean();
            child_users.reverse();
            return res.json({ status: "ok", data: child_users })
        }
        else {
            res.json({ status: "failed", error: "Not allowed" });
        }

    }
    else {
        res.json({ status: "failed", error: "Invalid attempt" });
    }
});

router.post('/is-signed-in',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const usr = await User.findOne({ user: u.user });
        if (usr) {
            if ((usr.admin_role == true || usr.moderator_role == true) || usr.salesman_role == true) {
                return res.json({ status: "ok", admin_role: usr.admin_role });
            }
        }
    }
    res.json({ status: "failed" })
});


function randomStringGenerator() {
    var allPossible = '1234567890qwertyuiopasdfghjklzxcvbnm1234567890';
    var accessString = '';
    for (var i = 0; i < 20; i++) {
        accessString = accessString + allPossible[Math.floor(Math.random() * allPossible.length)];
    }
    return accessString;
}


function sendMail(from, appPassword, to, subject, htmlmsg) {
    let transporter = nodemailer.createTransport(
        {
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth:
            {
                user: from,
                pass: appPassword
            }
        }
    );
    let mailOptions =
    {
        from: from,
        to: to,
        subject: subject,
        html: htmlmsg
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent:' + info.response);
        }
    });
}

module.exports = router;