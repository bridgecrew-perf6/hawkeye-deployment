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

router.post('/brief-details',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, admin_role: true }).lean();
        if (parent_user) {
            var total_blocks_count = await Block.countDocuments({ slabs: false, has_children: false });
            var total_slabs = await Slabs.find();
            var total_slabs_count = 0;
            for (var i = 0; i < total_slabs.length; i++) {
                total_slabs_count += total_slabs[i].no_of_slabs;
            }
            var sold_blocks_count = await Block.countDocuments({ sold: 1 });
            var sold_slabs = await Slabs.find();
            var sold_slabs_count = 0;
            for (var i = 0; i < sold_slabs.length; i++) {
                sold_slabs_count += sold_slabs[i].sold;
            }
            var salesmen_performance = [];
            var users = await User.find({}, { user: 1, name: 1 });
            for (var i = 0; i < users.length; i++) {
                var user_sales = await Trade.find({ user: users[i].user });
                user_sales = user_sales.length;
                salesmen_performance.push({ user: users[i].user, count: user_sales, name: users[i].name });
            }

            salesmen_performance.sort(function (a, b) { return b.count - a.count });
            if (salesmen_performance.length > 5) {
                salesmen_performance = salesmen_performance.slice(0, 5)
            }
            var amount_blocks = 0
            var amount_slabs = 0
            for await (var doc of Trade.find()) {
                if (doc.slabs == false) {
                    amount_blocks += doc.amount;
                }
                else {
                    amount_slabs += doc.samount
                }
            }

            amount_blocks = parseInt(amount_blocks)
            amount_slabs = parseInt(amount_slabs)
            var all_sales = await Trade.find({});
            var confirmed = 0;
            var pending = 0;
            for (let as of all_sales) {
                    if (as.reserved != 0) {
                        pending += 1
                    }
                    else {
                        confirmed += 1
                    }
            }
            var sales = await Trade.find({ reserved: 0 })
            var sales_performance = []
            if (sales.length > 0) {
                sales.sort(function (a, b) { return (new Date(b.sell_date)).getFullYear() - (new Date(a.sell_date)).getFullYear() });

                var curr = new Date().getFullYear()
                if (curr == (new Date(sales[0].sell_date)).getFullYear()) {
                    sales_performance.push({ year: new Date().getFullYear(), amount: 0 })
                }
                for (let s of sales) {
                    if (curr != (new Date(s.sell_date)).getFullYear()) {
                        curr = (new Date(s.sell_date)).getFullYear()
                        sales_performance.push({ year: curr, amount: s.amount })
                    }
                    else {
                        sales_performance[sales_performance.length - 1].amount += s.amount
                    }
                }
                sales_performance = sales_performance.slice(0, 5)
                sales_performance.reverse()
            }



            return res.json({
                status: "ok", data: {
                    total_blocks_count: total_blocks_count,
                    total_slabs_count: total_slabs_count,
                    sold_blocks_count: sold_blocks_count,
                    sold_slabs_count: sold_slabs_count,
                    salesmen_performance: salesmen_performance,
                    amount_blocks: amount_blocks,
                    amount_slabs: amount_slabs,
                    pending: pending,
                    confirmed: confirmed,
                    sp: sales_performance
                }
            });
        }
    }
    res.json({ status: "failed" });
});

module.exports = router