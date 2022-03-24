const express = require('express');
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

router.post('/add-yard',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
        if (parent_user) {
            try {
                await Yard.create({
                    yard: req.body.yard,
                    yard_address: req.body.yard_address
                });

                return res.json({ status: "ok" });
            }
            catch {
                return res.json({ status: "failed" });
            }
        }
    }
    res.json({ status: "failed" })
});

router.post('/delete-yard',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
        if (parent_user) {
            try {
                await Yard.deleteOne({
                    yard: req.body.yard
                });

                return res.json({ status: "ok" });
            }
            catch {
                return res.json({ status: "failed" });
            }
        }
    }
    res.json({ status: "failed" })
});

router.post('/get-yards',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user }).lean();
        if (parent_user) {
            try {
                const all = await Yard.find();
                all.reverse();
                return res.json({ status: "ok", data: all });
            }
            catch {
                return res.json({ status: "failed" });
            }
        }
    }
    res.json({ status: "failed" });
});

module.exports = router