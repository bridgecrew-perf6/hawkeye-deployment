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
const Unit = require('../model/unit');
const router = express.Router();

router.post('/add-unit',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
        if (parent_user) {
            try {
                if (req.body.factor == undefined || req.body.factor == 0) { return res.json({status:"failed"}) }
                await Unit.create({
                    unit: req.body.unit,
                    factor: req.body.factor
                });

                return res.json({ status: "ok" });
            } catch {}
        }
    }
    res.json({ status: "failed" })
});

router.post('/delete-unit',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
        if (parent_user) {
            try {
                await Unit.deleteOne({
                    unit: req.body.unit
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

router.post('/get-units',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user }).lean();
        if (parent_user) {
            try {
                const all = await Unit.find();
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