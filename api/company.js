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

router.post('/add-company',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
        if (parent_user) {
            try {
                await Company.create({
                    company: req.body.company,
                    line_1: req.body.line_1,
                    line_2:req.body.line_2,
                    line_3:req.body.line_3,
                    terms:req.body.terms
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

router.post('/delete-company',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
        if (parent_user) {
            try {
                await Company.deleteOne({
                    company: req.body.company
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

router.post('/get-companies',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user }).lean();
        if (parent_user) {
            try {
                const all = await Company.find();
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