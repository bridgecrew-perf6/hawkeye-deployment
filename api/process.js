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

router.post('/break-block',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    var r = req.body;
    if (u != 0) {
        const usr = await User.findOne({ user: u.user, moderator_role:true });
        if (!usr) {
            return res.json({ status: "failed" });
        }
        var blk = await Block.findOne({ block_no: r.block_no ,has_children:false, slabs:false, is_child:false, sold:0, reserved:0})
        var qry = await Quarry.findOne({quarry: blk.quarry})
        if (qry == undefined) {
            qry = {
                specific_gravity: 0
            }
        }
        if (blk) {
            if (blk.reserved + blk.sold == 0) {
                try {
                    let children=[];
                    for (let i=0; i<r.broken_blocks.length; i++) {
                        children.push(r.block_no + 'zzz000'+ (i+1).toString());
                    }
                    let block_cost = 0
                    if (blk.cost == undefined) {
                        blk.cost = 0
                    }
                    if (blk.transportation_cost == undefined) {
                        blk.transportation_cost = 0
                    }
                    block_cost = blk.cost + blk.transportation_cost
                    let vol_sum=0
                    let vol_arr=[]
                    for (let i=0; i<r.broken_blocks.length; i++) {
                        vol_sum += r.broken_blocks[i].dim_1*r.broken_blocks[i].dim_2*r.broken_blocks[i].dim_3
                        vol_arr.push(r.broken_blocks[i].dim_1*r.broken_blocks[i].dim_2*r.broken_blocks[i].dim_3)
                    }
                    for (var i = 0; i < r.broken_blocks.length; i++) {
                        await Block.create({
                            block_no: children[i],
                            date: r.broken_blocks[i].date,
                            is_child: true,
                            dim_1:r.broken_blocks[i].dim_1,
                            dim_2:r.broken_blocks[i].dim_2,
                            dim_3:r.broken_blocks[i].dim_3,
                            processor:r.broken_blocks[i].processor,
                            processing_cost:r.broken_blocks[i].processing_cost,
                            yard: r.broken_blocks[i].processor,
                            weight: r.broken_blocks[i].dim_1*r.broken_blocks[i].dim_2*r.broken_blocks[i].dim_3*qry.specific_gravity*0.000000001,
                            cost: (vol_arr[i]/vol_sum)*block_cost,
                            yard_history: [{to_yard: r.broken_blocks[i].processor, date:"", transportation_cost:''}]
                        });
                        await Drawer.create({user:usr.user, block_no:children[i]});

                    }
                    await Block.updateOne({ block_no: r.block_no }, {
                        $set: {
                            children: children,
                            has_children: true
                        }
                    });
                    await Drawer.deleteOne({block_no: r.block_no});
                    
                    return res.json({ status: "ok" })
                } catch { }
            }
        }

    }
    res.json({ status: "failed" })
});

router.post('/process-block',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
        if (parent_user) {
            
            try {
                let r = req.body.slabs;
                let block_in_focus = await Block.findOne({
                    block_no: r.block_no,
                    sold: 0,
                    reserved: 0,
                    slabs: false,
                    has_children: false
                })
                if (block_in_focus) {
                    await Block.updateOne(
                        { block_no: r.block_no }, {
                            $set: {
                                "slabs": true
                            }
                    });
                    let slabs_cost = 0
                    if (block_in_focus.cost == undefined) {
                        block_in_focus.cost = 0
                    }
                    if (block_in_focus.transportation_cost == undefined) {
                        block_in_focus.transportation_cost = 0
                    }
                    slabs_cost = block_in_focus.cost + block_in_focus.transportation_cost
                    if (block_in_focus.is_child) {
                        if (block_in_focus.processing_cost == undefined) {
                            block_in_focus.processing_cost = 0
                        }
                        slabs_cost += block_in_focus.processing_cost
                    }
                    slabs_cost = slabs_cost/r.no_of_slabs
                    await Slabs.create({
                        "block_no": r.block_no,
                        "dim_1":r.dim_1,
                        "dim_2":r.dim_2,
                        "dim_3":r.dim_3,
                        "no_of_slabs": r.no_of_slabs,
                        "date": r.date,
                        "processing_cost":r.processing_cost/r.no_of_slabs,
                        "slabs_hsn_code":r.slabs_hsn_code,
                        "processor": r.processor,
                        "yard": r.processor,
                        "cost": slabs_cost,
                        is_child:block_in_focus.is_child,
                        yard_history: [{to_yard: r.processor, date:'', transportation_cost:''}]
                    })

                    return res.json({ status: "ok" });
                }
            } catch {}
        }
    }
    res.json({ status: "failed" })
});

router.post('/un-break', async (req, res)=>{
    let u = await verifyToken(req.body.token);
    const parent_user = await User.findOne({ user: u.user, moderator_role:true }).lean();
    if (u == 0 || !parent_user) return res.json( {status:"failed"} );

    let p_block = await Block.findOne({block_no: req.body.block_no});
    let has_slabs = false;
    for (let i=0; i<p_block.children.length; i++) {
        if ((await Block.findOne({block_no: p_block.children[i]})).slabs) {has_slabs=true; break;}
    }
    if (!has_slabs) {
        for (let i=0; i<p_block.children.length; i++) {
            await Block.deleteOne({block_no: p_block.children[i]});
            await Trade.deleteMany({block_no: p_block.children[i]});
            await Drawer.deleteMany({block_no: p_block.children[i]});
        }
        await Block.updateOne({block_no: p_block.block_no}, {$set:{
            has_children:false,
            children: []
        }});
        return res.json({status: "ok"});
    }
    res.json({status: "failed"});
})

module.exports = router