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

router.post('/item-toggle', async (req, res)=>{
    let u = await verifyToken(req.body.token);
    if (u==0) {
        return res.json({status:"failed"});
    }
    let item = await Drawer.findOne({user:u.user, block_no:req.body.block_no});
    if(item==null) {
        await Drawer.create({
            user:u.user,
            block_no:req.body.block_no
        })
    }
    else {
        await Drawer.deleteOne({user:u.user, block_no:req.body.block_no});
    }
    res.json({status:"ok"});
});

router.post('/drawer-items',  async (req, res)=>{
    let u= await verifyToken(req.body.token);
    if (u==0){
        return res.json({status:"failed"});
    }
    let items = await Drawer.find({user:u.user});
    if (items==null) items=[];
    var all = [];
    for (let i=0; i<items.length; i++) {
        let doc = await Block.findOne({block_no:items[i].block_no});
        let u = (await Unit.findOne({unit: doc.unit}))
        if (doc.is_child) {
            let b = await Block.findOne({block_no:items[i].block_no.split('zzz000')[0]});
            doc.quarry = b.quarry
            doc.unit = b.unit
            doc.company = b.company
            doc.hsn_code = b.hsn_code
            u = (await Unit.findOne({unit: b.unit}))
        }
        if (u==undefined) {
            doc.factor = 1
        } else {
            doc.factor = u.factor
        }
        let quarry = await Quarry.findOne({quarry:doc.quarry});
        if (quarry == null) {
            quarry={
                block_type:'',
                specific_gravity:0
            };
        }
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
                 quarry:quarry,
                 unit:doc.unit,
                 factor:doc.factor,
                specific_gravity:quarry.specific_gravity,
                in_transit: doc.in_transit,
                cost: doc.cost+doc.transportation_cost+doc.processing_cost,
                company: doc.company,
                weight: doc.weight,
                hsn_code: doc.hsn_code
             })
        }
        if (doc.slabs == true) {
            let s = await Slabs.findOne({block_no:items[i].block_no})
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
                polished:s.polished,
                quarry:quarry,
                unit:doc.unit,
                factor: doc.factor,
                specific_gravity: quarry.specific_gravity,
                slabs_hsn_code: s.slabs_hsn_code,
                in_transit: s.in_transit,
                cost: s.cost + s.transportation_cost+s.processing_cost+s.polishing_cost,
                company: doc.company,

            })
        }
    }
    res.json({status:"ok", data:all});
});

router.post('/clear-drawer',  async (req, res)=>{
    let u = await verifyToken(req.body.token);
    if (u==0) return res.json({status:"failed"});
    await Drawer.deleteMany({user:u.user});
    res.json({status:"ok"})
})

module.exports = router;