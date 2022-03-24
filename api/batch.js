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

router.post('/move-items',  async (req,res)=>{
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user , moderator_role:true}).lean();
        if (parent_user) {
            let items = req.body.items
            try {
                for (let i=0; i<items.length; i++) {
                    let b = await Block.findOne({block_no:items[i].block_no})
                    if (b.slabs) {
                        let s = await Slabs.findOne({block_no:items[i].block_no});

                        await Slabs.updateOne({block_no:items[i].block_no},
                            {$set:{
                                yard: req.body.yard,
                                in_transit:false
                        }})
                        await Slabs.updateOne({block_no:items[i].block_no},
                            {$inc:{
                                transportation_cost: items[i].transportation_cost/(s.no_of_slabs-(s.sold+s.reserved+s.lost))
                        }})
                        await Slabs.updateOne({block_no:items[i].block_no},
                            {$push:{yard_history: {to_yard:req.body.yard, date:req.body.date, transportation_cost: items[i].transportation_cost}}})
                    } else {
                        await Block.updateOne({block_no:items[i].block_no},
                            {$set:{yard: req.body.yard, in_transit:false}})

                        await Block.updateOne({block_no:items[i].block_no},
                            {$inc:{
                                transportation_cost: items[i].transportation_cost
                        }})
                        await Block.updateOne({block_no:items[i].block_no},
                            {$push:{yard_history: {to_yard:req.body.yard, date:req.body.date, transportation_cost: items[i].transportation_cost}
                        }});
                    }
                }
                return res.json({status:"ok"})
            } catch(e) { console.log(e) }
        }
    }
    res.json({ status: "failed" });
});

router.post('/polish',  async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, moderator_role:true }).lean();
        if (parent_user) {
            let items = req.body.items
            try {
                for (let i=0; i<items.length; i++) {
                    await Slabs.updateOne({block_no: items[i].block_no}, {$set:{
                        polished:true,
                        polishing_cost: items[i].polishing_cost,
                        polishing_date: req.body.date
                    }})
                }
                return res.json({status:"ok"})
            }
            catch {
                return res.json({ status: "failed" });
            }
        }
    }
    res.json({ status: "failed" });
});

router.post('/mark-in-transit', async(req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, moderator_role:true }).lean();
        if (parent_user) {
            let items = req.body.items
            // try {
                for (let i=0; i<items.length; i++) {
                    if (items[i].slabs) {
                        await Slabs.updateOne({block_no: items[i].block_no}, {$set:{
                            in_transit:true
                        }});
                    } else {
                        await Block.updateOne({block_no: items[i].block_no}, {$set:{
                            in_transit:true
                        }})
                    }
                }
                return res.json({status:"ok"})
            // }
            // catch {
            //     return res.json({ status: "failed" });
            // }
        }
    }
    res.json({ status: "failed" });
});



module.exports = router;