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

router.post('/new-block', async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u == 0) {
        return res.json({status:"failed"});
    }
    const parent_user = await User.findOne({ user: u.user, moderator_role: true });
    if (!parent_user) {
        return res.json({status:"failed"});
    }
    const r = req.body;
    try {
        await Block.create({
            block_no: r.block_no,
            yard:r.yard,
            date: r.date,
            hsn_code: r.hsn_code,
            quarry: r.quarry,
            shade:r.shade,
            grade:r.grade,
            weight: r.weight,
            dim_1:r.dim_1,
            dim_2:r.dim_2,
            dim_3:r.dim_3,
            note:r.note,
            cost:r.cost,
            invoice_no:r.invoice_no,
            truck_no:r.truck_no,
            builty_no:r.builty_no,
            royalty_no:r.royalty_no,
            eway_bill_no:r.eway_bill_no,
            company:r.company,
            unit:r.unit,
            transportation_cost:r.transportation_cost
        });
        await Block.updateOne({ block_no: r.block_no },
            {$push: { yard_history: {to_yard:r.yard, transportation_cost: r.transportation_cost, date: r.date}}})
        return res.json({ status: "ok" });
    }
    catch(e) {
        console.log(e)
    }
    return res.json({ status: "duplicate / type error" });
});

router.post('/edit-block', async (req, res) => {
    var u = await verifyToken(req.body.token);
    const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
    if (u == 0 || !parent_user) return res.json({status:"failed"})
        
    const r = req.body;
    await Block.updateOne({ block_no: r.block_no },
        {$set: {
            'quarry': r.c.quarry,
            'shade':r.c.shade,
            'grade': r.c.grade,
            'date': r.c.date,
            'weight': r.c.weight,
            'cost': r.c.cost,
            'dim_1': r.c.dim_1,
            'dim_2': r.c.dim_2,
            'dim_3': r.c.dim_3,
            'note': r.c.note,
            'hsn_code': r.c.hsn_code,
            'transportation_cost': r.c.transportation_cost,
            'invoice_no':r.c.invoice_no,
            'truck_no':r.c.truck_no,
            'builty_no':r.c.builty_no,
            'royalty_no':r.c.royalty_no,
            'eway_bill_no':r.c.eway_bill_no,
            "company":r.c.company,
            'unit':r.c.unit
        }});
    

    return res.json({ status: "ok" });
});

router.post('/edit-thappi', async (req, res)=>{
    var u = await verifyToken(req.body.token);
    const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
    if (u == 0 || !parent_user) return res.json({status:"failed"})
        
    const r = req.body;
    await Block.updateOne({ block_no: r.block_no },
        {$set: {
            'date': r.c.date,
            'weight': r.c.weight,
            'cost': r.c.cost,
            'dim_1': r.c.dim_1,
            'dim_2': r.c.dim_2,
            'dim_3': r.c.dim_3,
            'transportation_cost': r.c.transportation_cost,
            'processor': r.c.processor,
            'processing_cost':r.c.processing_cost,
            'note': r.c.note,
        }});

    return res.json({ status: "ok" });
});

router.post('/get-block',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        try {
            let b = await Block.findOne({ block_no: req.body.block_no });
            let q = await Quarry.findOne({quarry:b.quarry});;
            let y = await Yard.findOne({yard:b.yard});
            let u = await Unit.findOne({unit:b.unit});
            
            if (b.is_child) {
                let pb = await Block.findOne({block_no: req.body.block_no.split('zzz000')[0]});
                u = await Unit.findOne({unit:pb.unit});
                q = await Quarry.findOne({quarry:pb.quarry});
                b.hsn_code = pb.hsn_code;
                b.quarry = pb.quarry;
                b.shade = pb.shade;
                b.grade = pb.grade;
                b.company = pb.company;
                b.unit = pb.unit;
            }
            return res.json({ status: "ok", block: b, quarry: q, yard: y, unit: u});
        } catch(e){console.log(e)}
    }
    res.json({ status: "failed" });
});

router.post('/delete-block', async (req, res)=>{
    let u = await verifyToken(req.body.token);
    const parent_user = await User.findOne({ user: u.user, moderator_role:true }).lean();
    if (u == 0 || !parent_user) return res.json( {status:"failed"} );
    let deleted=0;
    await Block.deleteOne({ block_no: req.body.block_no, slabs:false, has_children:false }, async (err, d)=>{
        if (d.deletedCount==1) {
            deleted = d.deletedCount
            await Trade.deleteMany({block_no: req.body.block_no});
            await Drawer.deleteMany({block_no: req.body.block_no});
        } 
    });
    if (deleted == 1) {
        return res.json({status: "ok"});
    }
    res.json({ status: "failed"});
});

module.exports = router;