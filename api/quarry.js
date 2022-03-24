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

router.post('/get-quarries',  async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u!=0) {
        const usr = await User.findOne({ user: u.user });
        if (usr.moderator_role != true) {
            return res.json({ status: "failed" });
        }
        var all = await Quarry.find({})
        all.reverse()
        return res.json({status:"ok", data:all})

    }
    return res.json({status:"failed"})
});

router.post('/add-quarry',  async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u!=0) {
        var usr = await User.findOne({user:u.user});
        if (usr.moderator_role) {
            try {
                await Quarry.create({
                    quarry:req.body.quarry,
                    quarry_address:req.body.quarry_address,
                    specific_gravity:req.body.specific_gravity,
                    block_type:req.body.block_type,
                    shade:req.body.shade,
                    grade: req.body.grade,
                    hsn_code: req.body.hsn_code,
                    slabs_hsn_code: req.body.slabs_hsn_code
                });
                return res.json({status:"ok"});
            }
            catch {}
        }
        
    }
    return res.json({status:"failed"})
});

router.post('/delete-quarry',  async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u!=0) {
        var usr = User.findOne({user:u.user});
        if (usr.moderator_role==false) {
            return res.json({status:"failed"});
        }
        try {
            await Quarry.deleteOne({
                quarry:req.body.quarry
            });
            return res.json({status:"ok"});
        }
        catch {}
    }
    return res.json({status:"failed"})
});

router.post('/get-quarry',  async (req, res)=>{
    let u = await verifyToken(req.body.token);
    if (u!=0) {
        try {
            let q = await Quarry.findOne({
                quarry:req.body.quarry
            });
            return res.json({status:"ok", data:q});
        }
        catch {}
    }
    return res.json({status:"failed"})
});

router.post('/edit-quarry',  async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u!=0) {
        var usr = User.findOne({user:u.user, moderator_role:true});
        if (!usr) {
            return res.json({status:"failed"});
        }
        try {
            await Quarry.updateOne({ quarry:req.body.q.quarry },
                {
                    $set: {
                        quarry_address:req.body.q.quarry_address,
                        specific_gravity: req.body.q.specific_gravity,
                        block_type:req.body.q.block_type,
                        shade:req.body.q.shade,
                        grade:req.body.q.grade,
                        hsn_code: req.body.q.hsn_code,
                        slabs_hsn_code: req.body.q.slabs_hsn_code
                    }
                }
            );
            return res.json({status:"ok"});
        }
        catch {}
    }
    return res.json({status:"afailed"})
})

module.exports = router