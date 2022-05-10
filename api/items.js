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

router.post('/get-items',  async (req, res) => {
    
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user }).lean();
        if (parent_user) {
            // try {
                var all = [];
                for await (let doc of Block.find({ has_children:false }).cursor()) {
                    if (doc.is_child) {
                        let b = await Block.findOne({block_no:doc.block_no.split('zzz000')[0]});
                        doc.quarry = b.quarry
                        doc.unit = b.unit
                        doc.company = b.company
                        doc.layer_type = b.layer_type
                    }
                    let quarry = await Quarry.findOne({quarry:doc.quarry});
                    if (quarry == null) {
                        quarry={
                            block_type:''
                        };
                    }
                    let unit = await Unit.findOne({unit: doc.unit})
                    if (doc.slabs == false) {
                        all.push({
                             block_no: doc.block_no, 
                            slabs: false, 
                            left: 1 - (doc.sold + doc.reserved),
                             block_type: quarry.block_type, 
                             date: doc.date, 
                             dim_1:  doc.dim_1, 
                             dim_2: doc.dim_2,
                             dim_3: doc.dim_3,
                             yard: doc.yard,
                             is_child: doc.is_child,
                             has_children: doc.has_children,
                             unit: unit?unit.unit:'',
                             factor: unit?unit.factor:1,
                             area: (doc.dim_1)*doc.dim_2,
                             in_transit: doc.in_transit,
                             company: doc.company,
                             weight: doc.weight,
                             cost: doc.cost + doc.transportation_cost+doc.processing_cost,
                             layer_type: doc.layer_type
                         })
                    }
                    if (doc.slabs == true) {
                        let s = await Slabs.findOne({block_no:doc.block_no})
                        all.push({
                            block_no: s.block_no, 
                            slabs: true,
                            left: (s.no_of_slabs - (s.sold + s.reserved + s.lost)),
                            block_type: quarry.block_type,
                            date: s.date, 
                            dim_1:  s.dim_1, 
                            dim_2: s.dim_2,
                            dim_3: s.dim_3,
                            yard: s.yard,
                            is_child: doc.is_child,
                            polished: s.polished,
                            unit: unit?unit.unit:'',
                            factor: unit?unit.factor:1,
                            area: s.dim_1*s.dim_2,
                            in_transit: s.in_transit,
                            company: doc.company,
                            cost: s.cost + s.transportation_cost+s.processing_cost+s.polishing_cost,
                            layer_type:doc.layer_type
                        })
                    }
                }
                // all.forEach(a=>console.log((req.body.lt*req.body.factor*req.body.factor) , a.area*a.left))
                if (req.body.block_no) {
                    all = all.filter(a => a.block_no == req.body.block_no)
                }
                if (req.body.yard) {
                    all = all.filter(a => a.yard == req.body.yard)
                }
                all.sort(function (a, b) { return new Date(b.date) - new Date(a.date) });
                if (req.body.fp == 't') {
                    all = all.filter(a => a.slabs == true)
                }
                if (req.body.fp == 'f') {
                    all = all.filter(a => a.slabs == false)
                }
                if (req.body.fa == 't') {
                    all = all.filter(a => a.left > 0);
                }
                if (req.body.fa == 'f') {
                    all = all.filter(a => a.left == 0);
                }
                if (req.body.fpo == 't') {
                    all = all.filter(a => a.polished == true)
                }
                if (req.body.fpo == 'f') {
                    all = all.filter(a => a.polished == false)
                }
                if (req.body.gt) {
                    all = all.filter(a => (req.body.gt*req.body.factor*req.body.factor) <= a.area*a.left);
                    
                }
                if (req.body.lt) {
                    all = all.filter(a => (req.body.lt*req.body.factor*req.body.factor) >= a.area*a.left);
                }
                if (req.body.block_type) {
                    all = all.filter(a => (a.block_type||'').toLowerCase() == req.body.block_type.toLowerCase());
                }
                if (req.body.layer_type) {
                    all = all.filter(a => (a.layer_type||'').toLowerCase() == req.body.layer_type.toLowerCase());
                }
                // dim filters
                if (req.body.l_gt) {
                    all = all.filter(a => (req.body.l_gt*req.body.factor) <= a.dim_1);
                }
                if (req.body.l_lt) {
                    all = all.filter(a => (req.body.l_lt*req.body.factor) >= a.dim_1);
                }
                if (req.body.h_gt) {
                    all = all.filter(a => (req.body.h_gt*req.body.factor) <= a.dim_2);
                }
                if (req.body.h_lt) {
                    all = all.filter(a => (req.body.h_lt*req.body.factor) >= a.dim_2);
                }
                if (req.body.w_gt) {
                    all = all.filter(a => (req.body.w_gt*req.body.factor) <= a.dim_3);
                }
                if (req.body.w_lt) {
                    all = all.filter(a => (req.body.w_lt*req.body.factor) >= a.dim_3);
                }
                if (req.body.g_date) {
                    all = all.filter(a => (req.body.g_date) <= a.date);
                }
                if (req.body.l_date) {
                    all = all.filter(a => (req.body.l_date) >= a.date);
                }
                // dim filters end

                let no_of_items = 0
                let total_slabs_area = 0
                let total_block_weight = 0
                let total_cost = 0
                let total_slabs_area_after_minor = 0
                no_of_items = all.length
                for (let i=0; i<all.length; i++) {
                    if (all[i].slabs) {
                        // console.log((all[i].dim_1 * all[i].dim_2 * all[i].left)/(304.8*304.8))
                        total_slabs_area += all[i].dim_1 * all[i].dim_2 * all[i].left
                        total_cost += all[i].slabs ? all[i].cost*all[i].left : all[i].cost
                        total_slabs_area_after_minor += ((all[i].dim_1*1)-76.2) * ((all[i].dim_2*1)-50.8) * all[i].left
                    } else {
                        if (all[i].weight*1) {
                            total_block_weight += all[i].weight
                            total_cost += all[i].cost
                        }
                    }
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
                for (var i = start; i <= end && i < len; i++) {
                    selected.push(all[i]);
                }

                var max_page = parseInt(len / noOfRecords);
                if (len % noOfRecords != 0) {
                    max_page += 1
                }
                if (max_page < page) { page = 0; }
                return res.json({ status: "ok", data: selected, max_page: max_page, page: page, no_of_items: no_of_items,
                 total_slabs_area: total_slabs_area,
                 total_block_weight: total_block_weight,
                 total_cost: total_cost,
                 total_slabs_area_after_minor: total_slabs_area_after_minor});
            // }
            // catch {
            //     return res.json({ status: "failed" });
            // }

        }
    }
    res.json({ status: "failed" });
});

router.post('/all-blocks',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user }).lean();
        if (parent_user) {
            try {
                var all = await Block.find({}, {
                    block_no: 1,
                    _id: 0,
                    is_child:1
                });
                all.reverse()
                return res.json({ status: "ok", data: all });
            }
            catch { }
        }
    }
    return res.json({ status: "failed" });
});

module.exports = router;