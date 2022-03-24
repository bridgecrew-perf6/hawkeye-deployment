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
const Unit = require('../model/unit')
const router = express.Router();

router.post('/get-slabs',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user }).lean();
        if (parent_user) {
            let s = await Slabs.findOne({ block_no: req.body.block_no });
            let b = await Block.findOne({ block_no: req.body.block_no });
            if (b.is_child) {
                b = await Block.findOne({block_no: req.body.block_no.split('zzz000')[0]})
            }
            let q = await Quarry.findOne({quarry:b.quarry});
            let u = await Unit.findOne({unit: b.unit});
            if (q==undefined) {
                q={
                    quarry:'',
                    quarry_address:'',
                    specific_gravity:0,
                    block_type:''
                }
            }

            return res.json({ status: "ok", slabs:s, block:b, quarry:q, unit: u});

        }
    }
    res.json({ status: "failed" });
});

router.post('/edit-slabs',  async (req, res) => {
    let u = await verifyToken(req.body.token);
    const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
    if (u == 0 || !parent_user) return res.json({status: "failed"});

    const r = req.body.s;
    try {
        await Slabs.updateOne({ block_no: r.block_no }, {$set: {
                "date": r.date,
                "processor": r.processor,
                "dim_1": r.dim_1,
                "dim_2": r.dim_2,
                "dim_3": r.dim_3,
                "cost": r.cost,
                "transportation_cost": r.transportation_cost,
                "processing_cost": r.processing_cost,
                "note": r.note,
            }});
        return res.json({ status: "ok" });
    } catch { }
    return res.json({ status: "failed" });
});

router.post('/un-process', async(req, res)=>{
    let u = await verifyToken(req.body.token);
    const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
    if (u == 0 || !parent_user) return res.json({status: "failed"});

    await Slabs.deleteOne({block_no:req.body.block_no});
    await Trade.deleteMany({block_no: req.body.block_no});
    await Drawer.deleteMany({block_no: req.body.block_no});
    await Block.updateOne({block_no:req.body.block_no}, {$set:{
        slabs: false
    }});
    return res.json({ status: "ok"});
});

router.post('/lost-slabs', async (req, res)=>{
    let u = await verifyToken(req.body.token);
    const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
    if (u == 0 || !parent_user) return res.json({status: "failed"});

    let s = await Slabs.findOne({block_no: req.body.block_no});
    if (s.no_of_slabs-(s.lost + s.sold + s.reserved)<req.body.lost) {
        return res.json({status: "failed"})
    }
    await Slabs.updateOne({block_no:req.body.block_no}, {$set:{
        lost: s.lost + req.body.lost
    }});
    return res.json({ status: "ok"});
})

module.exports = router