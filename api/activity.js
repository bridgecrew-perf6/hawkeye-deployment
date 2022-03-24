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
const Invoice = require('../model/invoice')
const router = express.Router();

router.post('/get-all-activity', async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
        if (parent_user) {
            try {
                var all = await Trade.find({});
                
                all.reverse();
                if (req.body.fp == 't') {
                    all = all.filter(a => a.slabs == true)
                }
                if (req.body.fp == 'f') {
                    all = all.filter(a => a.slabs == false)
                }

                if (req.body.fa == 't') {
                    all = all.filter(a => a.reserved > 0);
                }
                if (req.body.fa == 'f') {
                    all = all.filter(a => a.reserved == 0);
                }


                var page;
                var len = all.length;
                var noOfRecords = 8;
                var selected = [];
                page = req.body.page;
                if (page == undefined) {
                    page = 1;
                }

                var start = (page - 1) * noOfRecords;
                var end = (page * noOfRecords) - 1;
                if (end + 1 > len) {
                    end = len - 1
                }
                // bothways its safe          ,<
                for (var i = start; i <= end && i < len; i++) {
                    selected.push(all[i]);
                }

                var max_page = parseInt(len / noOfRecords);
                if (len % noOfRecords != 0) {
                    max_page += 1
                }
                if (max_page < page) { page = 0; }
                
                return res.json({ status: "ok", data: selected, max_page: max_page, page: page });
            }
            catch {
                return res.json({ status: "failed" });
            }

        }
    }
    res.json({ status: "failed" });
});

module.exports = router;