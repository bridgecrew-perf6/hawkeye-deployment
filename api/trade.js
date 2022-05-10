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
const Invoice = require('../model/invoice');
const router = express.Router();

router.post('/get-invoices', async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u == 0) return res.json({status: "failed"});
    const parent_user = await User.findOne({ user: u.user, salesman_role: true }).lean();
    if (!parent_user) return res.json({status: "failed"});

    let all = await Invoice.find({user: u.user});
    all.reverse()
    if (req.body.quotation == true) {
        all = all.filter(a => a.quotation == true)
    } else {
        all = all.filter(a => a.quotation == false)
    }
    if (req.body.party) {
        all = all.filter(a => a.party == req.body.party)
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
});

router.post('/new-invoice', async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u == 0) return res.json({status: "failed"});
    const parent_user = await User.findOne({ user: u.user, salesman_role: true }).lean();
    if (!parent_user) return res.json({status: "failed"});
    let r = req.body
    try {
        await Invoice.create({
            trade_id: r.trade_id,
            date: r.date,
            unit: r.unit,
            company: r.company,
            igst: r.igst,
            cgst: r.cgst,
            sgst: r.sgst,
            shipping_address: r.shipping_address,
            supply_state: r.supply_state,
            sale_type: r.sale_type,
            party: r.party,
            user: u.user,
            eway_bill_no: r.eway_bill_no,
            royalty_no: r.royalty_no,
            transportation_mode: r.transportation_mode,
            customer_ref_no: r.customer_ref_no,
            quotation: r.quotation
        })
        return res.json({status:"ok"})
    } catch(e){console.log(e)}
    return res.json({status: "Already exists"})
});

router.post('/delete-invoice', async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u == 0) return res.json({status: "failed"});
    const parent_user = await User.findOne({ user: u.user, salesman_role: true }).lean();
    if (!parent_user) return res.json({status: "failed"});
    try {
        let trades = await Trade.find({trade_id: req.body.trade_id});
        for (let i=0; i<trades.length; i++) {
            let trade = trades[i]
            if (trade.quotation==false) {
                if (trade.slabs) {
                    let slabs = await Slabs.findOne({block_no:trade.block_no})
                    await Slabs.updateOne({block_no: trade.block_no},{$set: {
                        reserved : slabs.reserved - trade.reserved,
                        sold : slabs.sold - trade.sold
                    }});
                } else {
                    let block = await Block.findOne({block_no: trade.block_no})
                    await Block.updateOne({block_no: trade.block_no}, {$set: {
                        reserved : block.reserved - trade.reserved,
                        sold : block.sold - trade.sold
                    }});
                }
            }
        }
        await Invoice.deleteOne({trade_id: req.body.trade_id});
        await Trade.deleteMany({trade_id: req.body.trade_id});
        return res.json({status:"ok"})
    } catch {}
    return res.json({status:"failed"})
})

router.post('/get-trades',  async (req, res) => {
    var u = await verifyToken(req.body.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user, salesman_role: true }).lean();
        if (parent_user) {
            try {
                var all = await Trade.find({ trade_id: req.body.trade_id, user: parent_user.user});
                
                return res.json({ status: "ok", data: all });
            } catch {}
        }
    }
    res.json({ status: "failed" });
});


router.post('/sell-trade',  async (req, res) => {
    var r = req.body.trade;
    var u = await verifyToken(req.body.token);
    const parent_user = await User.findOne({ user: u.user, salesman_role: true }).lean();
    if (u == 0 || !parent_user) return res.json({status:"failed"})

    try {
        const trade = await Trade.findOne({ _id: r._id, sold: 0, slabs: r.slabs, user: parent_user.user })
        let qty=''
        if (trade) {
            if (trade.slabs) {
                let slabs = await Slabs.findOne({block_no: trade.block_no});
                qty = slabs.dim_1*slabs.dim_2*slabs.reserved
                await Slabs.updateOne({block_no: trade.block_no}, {$set: {
                    sold:slabs.sold+trade.reserved,
                    reserved:slabs.reserved-trade.reserved,
                }});
            } else {
                let block = await Block.findOne({block_no: trade.block_no});
                qty = block.weight
                await Block.updateOne({block_no: trade.block_no}, {$set: {
                    sold:block.sold+ trade.reserved,
                    reserved:block.reserved-trade.reserved,
                }})
            }
            
            await Trade.updateOne({_id: r._id}, {$set: {
                sold: trade.reserved,
                reserved: 0,
                cost: r.cost,
                qty: qty,
                r_dim_1: r.r_dim_1+76.2,
                r_dim_2: r.r_dim_2+50.8,
                r_dim_3: r.r_dim_3,
                round_off: r.round_off,
                date: r.date
            }})
            return res.json({ status: "ok" })
        }
    }
    catch {}
    res.json({ status: "failed" });
});

router.post('/reserve-trade',  async (req, res) => {
    let r = req.body.c;
    var u = await verifyToken(req.body.token);
    const parent_user = await User.findOne({ user: u.user, salesman_role: true }).lean();
    if (u == 0 || !parent_user) return res.json({status:"failed"})

    try {
        const temp_block = await Block.findOne({ block_no: r.block_no, has_children: false });
        if (temp_block) {
            if (temp_block.slabs == false && r.slabs == false) {
                var total_pieces;
                total_pieces = 1;

                if (r.quantity != 1) {
                    return res.json({ status: "failed" });
                }

                if (r.quantity <= total_pieces - (temp_block.sold + temp_block.reserved)) {
                    if (req.body.quotation == false) {
                        await Block.updateOne({ block_no: r.block_no }, {
                            $set: {
                                reserved: 1
                            }
                        });
                    }
                    await Trade.create({
                        block_no: r.block_no,
                        trade_id:req.body.trade_id,
                        user: parent_user.user,
                        slabs: false,
                        sold: 0,
                        reserved: 1,
                        is_child: temp_block.is_child,
                        quotation: req.body.quotation,
                        cost: r.cost,
                        r_dim_1:r.r_dim_1,
                        r_dim_2:r.r_dim_2,
                        round_off:r.round_off

                    });
                    return res.json({ status: "ok" })
                }
            }
            if (temp_block.slabs == true && r.slabs == true) {
                let slb = await Slabs.findOne({block_no:r.block_no});
                let total_pieces = slb.no_of_slabs-(slb.reserved + slb.sold + slb.lost)
                if (r.quantity < 1) {
                    return res.json({ status: "failed" });
                }
                if (r.quantity <= total_pieces) {
                    if (req.body.quotation == false) {
                        await Slabs.updateOne({ block_no: r.block_no }, {
                            $set: {
                                "reserved": r.quantity + slb.reserved,
                            }
                        });
                    }
                    await Trade.create({
                        block_no: r.block_no,
                        trade_id:req.body.trade_id,
                        user: parent_user.user,
                        slabs: true,
                        sold: 0,
                        reserved: r.quantity,
                        is_child: temp_block.is_child,
                        quotation: req.body.quotation,
                        cost: r.cost,
                        r_dim_1:r.r_dim_1,
                        r_dim_2:r.r_dim_2,
                        round_off:r.round_off
                    });
                    return res.json({ status: "ok" });
                }
            }
        }
    }
    catch {}
    
    res.json({status:"failed"})
});

router.post('/make-reserved', async (req,res)=>{
    let r = req.body.c;
    var u = await verifyToken(req.body.token);
    const parent_user = await User.findOne({ user: u.user, salesman_role: true }).lean();
    if (u == 0 || !parent_user) return res.json({status:"failed"})

    let flag = -1;
    for (let i=0; i<r.length; i++) {
        const temp_block = await Block.findOne({ block_no: r[i].block_no, has_children: false });
        if (temp_block) {
            if (temp_block.slabs == false && r[i].slabs == false) {
                var total_pieces = 1;

                if (r[i].reserved > total_pieces - (temp_block.sold + temp_block.reserved)) {
                    flag = i; break;
                }
            } else { flag = i; break; }
            if (temp_block.slabs == true && r[i].slabs == true) {
                let slb = await Slabs.findOne({block_no:r.block_no});
                let total_pieces = slb.no_of_slabs-(slb.reserved + slb.sold + slb.lost)
                if (r[i].reserved > total_pieces) {
                    flag = i; break;
                }
            } else { flag = i; break; }
        } else { flag = i; break; }
    }
    if (flag != -1) {
        return res.json({status:"failed", data: flag})
    }
    

    for (let i=0; i<r.length; i++) {
        const temp_block = await Block.findOne({ block_no: r[i].block_no, has_children: false });
        if (temp_block) {
            if (temp_block.slabs == false && r[i].slabs == false) {
                await Block.updateOne({ block_no: r[i].block_no }, {
                    $set: {
                        reserved: 1
                    }
                });
                await Trade.updateMany({_id: r[i]._id}, {
                    quotation: false
                })
            }
            if (temp_block.slabs == true && r[i].slabs == true) {
                let slb = await Slabs.findOne({block_no:r[i].block_no});
                await Slabs.updateOne({ block_no: r[i].block_no }, {
                    $set: {
                        "reserved": r[i].reserved + slb.reserved,
                    }
                });
                await Trade.updateOne({_id: r[i]._id}, {
                    quotation:false
                })
            }
        }
        
    }
    return res.json({status:"ok"})
})

router.post('/delete-trade',  async (req, res) => {
    var r = req.body;
    var u = await verifyToken(r.token);
    const parent_user = await User.findOne({ user: u.user, salesman_role: true }).lean();
    if (u == 0 || !parent_user) return res.json({status:"failed"})
    try {
        let trade = await Trade.findOne({ _id: r._id, user: parent_user.user })
        if (trade && trade.quotation==false) {
            if (trade.slabs) {
                let slabs = await Slabs.findOne({block_no:trade.block_no})
                await Slabs.updateOne({block_no: trade.block_no},{$set: {
                    reserved : slabs.reserved - trade.reserved,
                    sold : slabs.sold - trade.sold
                }});
            } else {
                let block = await Block.findOne({block_no: trade.block_no})
                await Block.updateOne({block_no: trade.block_no}, {$set: {
                    reserved : block.reserved - trade.reserved,
                    sold : block.sold - trade.sold
                }});
            }
        }
        await Trade.deleteOne({_id:r._id});
        return res.json({ status: "ok" })
    }
    catch {}

    res.json({ status: "failed" });
});

router.post('/dispatched', async (req, res) => {
    var r = req.body;
    var u = await verifyToken(r.token);
    const parent_user = await User.findOne({ user: u.user, salesman_role: true }).lean();
    if (u == 0 || !parent_user) return res.json({status:"failed"})
    try {
        const one_sale = await Invoice.findOne({ trade_id: req.body.trade_id, user: parent_user.user })
        if(one_sale){
            await Invoice.updateOne({trade_id: r.trade_id},{$set:{dispatched: r.dispatched}})
            return res.json({ status: "ok" });
        }
    } catch {}
    res.json({ status: "failed" });
});

router.post('/get-sales', async(req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u == 0) return res.json({status: "failed"});
    const parent_user = await User.findOne({ user: u.user, moderator_role: true }).lean();
    if (!parent_user) return res.json({status: "failed"});

    let all = await Trade.find({});
    for (let i=0; i<all.length; i++) {
        let invoice = await Invoice.findOne({trade_id: all[i].trade_id})
        if (!invoice) {
            invoice = {
                party:'',
                date:''
            }
        }
        all[i].party = invoice.party
        all[i].date = invoice.date

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
});

router.post('/get-trade-ids', async (req, res)=>{
    var u = await verifyToken(req.body.token);
    if (u == 0) return res.json({status: "failed"});
    let all = await Invoice.find({user: u.user, quotation: req.body.quotation}, {trade_id:1});
    all.reverse()
    res.json({status: "ok", data: all})
});

module.exports = router