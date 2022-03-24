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

router.post('/get-parties',  async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u!=0) {
        const usr = await User.findOne({ user: u.user });
        if (usr.moderator_role != true) {
            return res.json({ status: "failed" });
        }
        var all = await Party.find({})
        all.reverse()
        return res.json({status:"ok", data:all})

    }
    return res.json({status:"failed"})
});

router.post('/add-party',  async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u!=0) {
        var usr = await User.findOne({user:u.user});
        if (usr.moderator_role) {
            try {
                await Party.create({
                    party:req.body.party,
                    party_address:req.body.party_address,
                    gstin: req.body.gstin
                });
                return res.json({status:"ok"});
            }
            catch {}
        }
        
    }
    return res.json({status:"failed"})
});

router.post('/delete-party',  async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u!=0) {
        var usr = User.findOne({user:u.user});
        if (usr.moderator_role==false) {
            return res.json({status:"failed"});
        }
        try {
            await Party.deleteOne({
                party:req.body.party
            });
            return res.json({status:"ok"});
        }
        catch {}
    }
    return res.json({status:"failed"})
});

router.post('/edit-party',  async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u!=0) {
        var usr = User.findOne({user:u.user, moderator_role:true});
        if (!usr) {
            return res.json({status:"failed"});
        }
        try {
            await Party.updateOne({ party:req.body.p.party },
                { $set: {
                    // party: req.body.party,
                    party_address: req.body.p.party_address,
                    gstin: req.body.p.gstin
                }}, 

            );
            return res.json({status:"ok"});
        }
        catch {}
    }
    return res.json({status:"failed"})
});

module.exports = router