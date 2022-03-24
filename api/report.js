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
const Invoice = require('../model/invoice');
let ejs = require("ejs");
let pdf = require("html-pdf");
let path = require("path");
const router = express.Router();

router.get('/block-report',  async (req, res) => {
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline;`,
      });
      for (let q in req.query) {
        if (req.query[q]=='undefined') {
          req.query[q]=undefined
        }
      }
      
      pdfMaker(
        (chunk) => stream.write(chunk),
        () => stream.end(),
        await blockReport(req.query),
        "block_report.ejs"
      );
});

router.get('/slabs-report',  async (req, res) => {
  const stream = res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline;`,
    });
    for (let q in req.query) {
      if (req.query[q]=='undefined') {
        req.query[q]=undefined
      }
    }
    
    pdfMaker(
      (chunk) => stream.write(chunk),
      () => stream.end(),
      await slabsReport(req.query),
      "slabs_report.ejs"
    );
});

router.get('/overview-report',  async (req, res) => {
  const stream = res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline;`,
    });
    for (let q in req.query) {
      if (req.query[q]=='undefined') {
        req.query[q]=undefined
      }
    }
    
    pdfMaker(
      (chunk) => stream.write(chunk),
      () => stream.end(),
      await overviewReport(req.query),
      "overview_report.ejs"
    );
});

router.get('/invoice-report',  async (req, res) => {

  var u = await verifyToken(req.query.token);
  let inv = await Invoice.findOne({trade_id: req.query.trade_id})
    if (u==0 || inv.user!=u.user) return res.send("bad request")
  const stream = res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline;`,
    });
    for (let q in req.query) {
      if (req.query[q]=='undefined') {
        req.query[q]=undefined
      }
    }
    let trades = await Trade.find({trade_id: req.query.trade_id})
    let total_taxes = 0
    let total_amount = 0
    let total_area = 0
    let total_ton = 0
    let unit = await Unit.findOne({unit:req.query.unit});
    for (let i=0; i<trades.length; i++) {
      if (trades[i].slabs) {
        let s = await Slabs.findOne({block_no: trades[i].block_no});
        s.dim_1 = s.dim_1-trades[i].r_dim_1
        s.dim_2 = s.dim_2-trades[i].r_dim_2
        if (trades[i].round_off) {
          let frac_dim_1 = Math.floor((s.dim_1/25.4)%12)
          let frac_dim_2 = Math.floor((s.dim_2/25.4)%12)

          if (frac_dim_1>=0 && frac_dim_1<3) {
            s.dim_1 = Math.floor(s.dim_1/304.8) + 0
          }
          if (frac_dim_2>=0 && frac_dim_2<3) {
            s.dim_2 = Math.floor(s.dim_2/304.8) + 0
          }

          if (frac_dim_1>=3 && frac_dim_1<6) {
            s.dim_1 = Math.floor(s.dim_1/304.8) + 0.3
          }
          if (frac_dim_2>=3 && frac_dim_2<6) {
            s.dim_2 = Math.floor(s.dim_2/304.8) + 0.3
          }

          if (frac_dim_1>=6 && frac_dim_1<9) {
            s.dim_1 = Math.floor(s.dim_1/304.8) + 0.6
          }
          if (frac_dim_2>=6 && frac_dim_2<9) {
            s.dim_2 = Math.floor(s.dim_2/304.8) + 0.6
          }

          if (frac_dim_1>=9 && frac_dim_1<12) {
            s.dim_1 = Math.floor(s.dim_1/304.8) + 0.9
          }
          if (frac_dim_2>=9 && frac_dim_2<12) {
            s.dim_2 = Math.floor(s.dim_2/304.8) + 0.9
          }
          s.dim_1 = s.dim_1*304.8
          s.dim_2 = s.dim_2*304.8
        }

        trades[i].qty = (((s.dim_1*s.dim_2)/(unit.factor*unit.factor))*trades[i].sold).toFixed(2)
        trades[i].cost = trades[i].cost*unit.factor*unit.factor
        // only the dims are in mm
        trades[i].dim_1 = s.dim_1
        trades[i].dim_2 = s.dim_2
        trades[i].dim_3 = s.dim_3
        trades[i].hsn = s.slabs_hsn_code
        total_area+= (trades[i].qty.toFixed(2))*1
      } else {
        let b = await Block.findOne({block_no: trades[i].block_no})
        trades[i].dim_1 = b.dim_1-trades[i].r_dim_1
        trades[i].dim_2 = b.dim_2-trades[i].r_dim_2
        trades[i].dim_3 = b.dim_3-trades[i].r_dim_3
        trades[i].hsn = b.hsn_code
        let quarry = await Quarry.findOne({quarry: b.quarry})
        if (!quarry) {
          quarry = {
            specific_gravity: 0
          }
        }
        trades[i].qty = (trades[i].dim_1*trades[i].dim_2*trades[i].dim_3*quarry.specific_gravity*0.000000001).toFixed(2)
        total_ton+=(trades[i].qty.toFixed(2))*1
      }
      total_taxes+=((trades[i].cost * trades[i].qty *((inv.igst+ inv.cgst+inv.sgst)/100)).toFixed(2))*1
      total_amount+=((trades[i].cost * trades[i].qty).toFixed(2))*1
    }

    let company = await Company.findOne({company: inv.company})
    let party = await Party.findOne({party: inv.party});
    pdfMaker(
      (chunk) => stream.write(chunk),
      () => stream.end(),
      {inv: inv, trades: trades, unit: unit, company: company, party: party, total_taxes: total_taxes, total_amount: total_amount, total_area: total_area, total_ton: total_ton},
      "invoice_report.ejs"
    );
});

router.get('/quotation-report',  async (req, res) => {
  const stream = res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline;`,
    });
    for (let q in req.query) {
      if (req.query[q]=='undefined') {
        req.query[q]=undefined
      }
    }

    let date = new Date().toLocaleString();
    let unit = await Unit.findOne({unit: req.query.unit})
    let company = await Company.findOne({company: req.query.company})
    let arr = []
    let total=0
    for (let i in req.query.quote) {
      arr.push(req.query.quote[i])
    }
    arr.forEach(f=>{
      f.block_no = f.is_child=='true'?f.block_no.split('zzz000')[0]+' - '+((f.block_no.split('zzz000')[1])) : f.block_no
      for (let i in f) {
        if (f[i]=='undefined') {
          f[i]=undefined
        }
      }
     total=total+parseFloat(f.slabs=='true'?(((f.dim_1*f.dim_2)/(unit.factor*unit.factor))*f.cost*f.no_of_items).toFixed(2): (f.weight*f.cost).toFixed(2))
    })
    pdfMaker(
      (chunk) => stream.write(chunk),
      () => stream.end(),
      {q: arr, unit: unit, company: company, date:date, total: total},
      "quotation_report.ejs"
    );
});


async function slabsReport(q) {
  var u = await verifyToken(q.token);
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
                    doc.shade = b.shade
                    doc.grade = b.grade
                }
                let quarry = await Quarry.findOne({quarry:doc.quarry});
                if (quarry == null) {
                    quarry={
                        block_type:''
                    };
                }
                let unit = await Unit.findOne({unit: doc.unit})
                
                if (doc.slabs == true) {
                    let s = await Slabs.findOne({block_no:doc.block_no})
                    all.push({
                        block_no: s.block_no, 
                        slabs: true,
                        left: (s.no_of_slabs - (s.sold + s.reserved + s.lost)),
                        no_of_slabs: s.no_of_slabs,
                        block_type: quarry.block_type,
                        specific_gravity: quarry.specific_gravity,
                        shade: doc.shade,
                        grade: doc.grade,
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
                    })
                }
            }
            if (q.yard) {
              all = all.filter(a => a.yard == q.yard)
            }
            all.sort(function (a, b) { return new Date(b.date) - new Date(a.date) });
            
            if (q.fa == 't') {
                all = all.filter(a => a.left > 0);
            }
            if (q.fa == 'f') {
                all = all.filter(a => a.left == 0);
            }
            if (q.fpo == 't') {
                all = all.filter(a => a.polished == true)
            }
            if (q.fpo == 'f') {
                all = all.filter(a => a.polished == false)
            }
            if (q.gt) {
                all = all.filter(a => (q.gt*q.factor*q.factor) <= a.area*a.left);
                
            }
            if (q.lt) {
                all = all.filter(a => (q.lt*q.factor*q.factor) >= a.area*a.left);
            }
            if (q.block_type) {
                all = all.filter(a => a.block_type.toLowerCase() == q.block_type.toLowerCase());
            }
            // dim filters
            if (q.l_gt) {
                all = all.filter(a => (q.l_gt*q.factor) <= a.dim_1);
            }
            if (q.l_lt) {
                all = all.filter(a => (q.l_lt*q.factor) >= a.dim_1);
            }
            if (q.h_gt) {
                all = all.filter(a => (q.h_gt*q.factor) <= a.dim_2);
            }
            if (q.h_lt) {
                all = all.filter(a => (q.h_lt*q.factor) >= a.dim_2);
            }
            if (q.w_gt) {
                all = all.filter(a => (q.w_gt*q.factor) <= a.dim_3);
            }
            if (q.w_lt) {
                all = all.filter(a => (q.w_lt*q.factor) >= a.dim_3);
            }
            if (q.g_date) {
                all = all.filter(a => (q.g_date) <= a.date);
            }
            if (q.l_date) {
                all = all.filter(a => (q.l_date) >= a.date);
            }
            // dim filters end
        }
      }
    let unit = await Unit.findOne({unit:q.unit})
    let date = new Date().toLocaleString();
    return {blocks: all, unit: unit, date:date, query:q, yard:q.yard}
}

async function blockReport(q) {
  var u = await verifyToken(q.token);
  if (u != 0) {
      const parent_user = await User.findOne({ user: u.user }).lean();
      if (parent_user) {
          var all = [];
          for await (let doc of Block.find({ has_children:false }).cursor()) {
            
              if (doc.is_child) {
                  let b = await Block.findOne({block_no:doc.block_no.split('zzz000')[0]});
                  doc.quarry = b.quarry
                  doc.unit = b.unit
                  doc.company = b.company
                  doc.grade = b.grade
                  doc.shade = b.shade
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
                        shade: doc.shade,
                        grade: doc.grade,
                        date: doc.date, 
                        dim_1:  doc.dim_1, 
                        dim_2: doc.dim_2,
                        dim_3: doc.dim_3,
                        yard: doc.yard,
                        is_child: doc.is_child,
                        has_children: doc.has_children,
                        unit: unit?unit.unit:'',
                        area: (doc.dim_1)*doc.dim_2,
                        in_transit: doc.in_transit,
                        company: doc.company,
                        weight: doc.weight,
                        cost: doc.cost + doc.transportation_cost+doc.processing_cost
                    })
              }
          }
          
          if (q.yard) {
              all = all.filter(a => a.yard == q.yard)
          }
          all.sort(function (a, b) { return new Date(b.date) - new Date(a.date) });
          if (q.fa == 't') {
              all = all.filter(a => a.left > 0);
          }
          if (q.fa == 'f') {
              all = all.filter(a => a.left == 0);
          }
          
          if (q.gt) {
            all = all.filter(a => (q.gt*q.factor*q.factor) <= a.area*a.left);
          }
          if (q.lt) {
              all = all.filter(a => (q.lt*q.factor*q.factor) >= a.area*a.left);
          }
          if (q.block_type) {
              all = all.filter(a => a.block_type.toLowerCase() == q.block_type.toLowerCase());
          }
          
          // dim filters
          if (q.l_gt) {
            all = all.filter(a => (q.l_gt*q.factor) <= a.dim_1);
        }
        if (q.l_lt) {
            all = all.filter(a => (q.l_lt*q.factor) >= a.dim_1);
        }
        if (q.h_gt) {
            all = all.filter(a => (q.h_gt*q.factor) <= a.dim_2);
        }
        if (q.h_lt) {
            all = all.filter(a => (q.h_lt*q.factor) >= a.dim_2);
        }
        if (q.w_gt) {
            all = all.filter(a => (q.w_gt*q.factor) <= a.dim_3);
        }
        if (q.w_lt) {
            all = all.filter(a => (q.w_lt*q.factor) >= a.dim_3);
        }
          if (q.g_date) {
              all = all.filter(a => (q.g_date) <= a.date);
          }
          if (q.l_date) {
              all = all.filter(a => (q.l_date) >= a.date);
          }
          
      }
  }
  let unit = await Unit.findOne({unit:q.unit})
  let date = new Date().toLocaleString();
  return {blocks: all, unit: unit, date:date, query:q, yard: q.yard}
}

async function overviewReport(q) {
  let block_stock = 0
  let marked_block_stock = 0
  let sold_block_stock = 0
  let slabs_stock = 0
  let polished_slabs_stock = 0
  let marked_slabs_stock = 0
  let sold_slabs_stock = 0
  let all=[]
    var u = await verifyToken(q.token);
    if (u != 0) {
        const parent_user = await User.findOne({ user: u.user }).lean();
        if (parent_user) {
            for await (let doc of Block.find({ has_children:false }).cursor()) {
              if (doc.is_child) {
                let b = await Block.findOne({block_no:doc.block_no.split('zzz000')[0]});
                doc.quarry = b.quarry
                doc.unit = b.unit
                doc.company = b.company
                doc.grade = b.grade
                doc.shade = b.shade
            }
            let quarry = await Quarry.findOne({quarry:doc.quarry});
            if (quarry == null) {
                quarry={
                    block_type:''
                };
            }
            let unit = await Unit.findOne({unit: doc.unit})
                if (doc.slabs == true) {
                  let s = await Slabs.findOne({block_no:doc.block_no})
                  all.push({
                      block_no: s.block_no, 
                      slabs: true,
                      left: (s.no_of_slabs - (s.sold + s.reserved + s.lost)),
                      no_of_slabs: s.no_of_slabs,
                      sold: s.sold,
                      reserved: s.reserved,
                      lost: s.lost,
                      block_type: quarry.block_type,
                      specific_gravity: quarry.specific_gravity,
                      shade: doc.shade,
                      grade: doc.grade,
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
                  })
              }
                if (doc.slabs == false) {
                    all.push({
                      block_no: doc.block_no, 
                      slabs: false, 
                      left: 1 - (doc.sold + doc.reserved),
                      sold: doc.sold,
                      reserved: doc.reserved,
                      block_type: quarry.block_type, 
                      shade: doc.shade,
                      grade: doc.grade,
                      date: doc.date, 
                      dim_1:  doc.dim_1, 
                      dim_2: doc.dim_2,
                      dim_3: doc.dim_3,
                      yard: doc.yard,
                      is_child: doc.is_child,
                      has_children: doc.has_children,
                      unit: unit?unit.unit:'',
                      area: (doc.dim_1)*doc.dim_2,
                      in_transit: doc.in_transit,
                      company: doc.company,
                      weight: doc.weight,
                      cost: doc.cost + doc.transportation_cost+doc.processing_cost
                    })
                }
            }
            
            if (q.yard) {
                all = all.filter(a => a.yard == q.yard)
            }
            
            if (q.gt) {
              all = all.filter(a => (q.gt*q.factor*q.factor) <= a.area*a.left);
            }
            if (q.lt) {
                all = all.filter(a => (q.lt*q.factor*q.factor) >= a.area*a.left);
            }
            if (q.block_type) {
                all = all.filter(a => a.block_type.toLowerCase() == q.block_type.toLowerCase());
            }
            
            // dim filters
            if (q.l_gt) {
              all = all.filter(a => (q.l_gt*q.factor) <= a.dim_1);
          }
          if (q.l_lt) {
              all = all.filter(a => (q.l_lt*q.factor) >= a.dim_1);
          }
          if (q.h_gt) {
              all = all.filter(a => (q.h_gt*q.factor) <= a.dim_2);
          }
          if (q.h_lt) {
              all = all.filter(a => (q.h_lt*q.factor) >= a.dim_2);
          }
          if (q.w_gt) {
              all = all.filter(a => (q.w_gt*q.factor) <= a.dim_3);
          }
          if (q.w_lt) {
              all = all.filter(a => (q.w_lt*q.factor) >= a.dim_3);
          }
            if (q.g_date) {
                all = all.filter(a => (q.g_date) <= a.date);
            }
            if (q.l_date) {
                all = all.filter(a => (q.l_date) >= a.date);
            }
            
            for (let i=0; i<all.length; i++) {
              if (!all[i].slabs) {
                if (all[i].reserved+all[i].sold==0) {
                  block_stock+=all[i].weight?all[i].weight:0
                }
                if (all[i].reserved == 1) {
                  marked_block_stock+=all[i].weight?all[i].weight:0
                }
                if (all[i].sold == 1) {
                  sold_block_stock+=all[i].weight?all[i].weight:0
                }
              } else {
                if (all[i].polished) {
                  polished_slabs_stock += all[i].dim_1 * all[i].dim_2 * all[i].left
                } else {
                  slabs_stock += all[i].dim_1 * all[i].dim_2 * all[i].left
                }
                marked_slabs_stock += all[i].dim_1 * all[i].dim_2 * all[i].reserved
                sold_slabs_stock += all[i].dim_1 * all[i].dim_2 * all[i].sold
              }
            }
        }
    }
    let unit = await Unit.findOne({unit:q.unit})
    let date = new Date().toLocaleString();
    return {unit: unit, date:date, query:q, yard: q.yard, 
      block_stock: block_stock,
      marked_block_stock: marked_block_stock,
      sold_block_stock: sold_block_stock,
      slabs_stock:slabs_stock,
      polished_slabs_stock: polished_slabs_stock,
      marked_slabs_stock: marked_slabs_stock,
      sold_slabs_stock:sold_slabs_stock}
}


async function pdfMaker(dataCallback, endCallback, d, name) {
    ejs.renderFile(path.join(__dirname, '../report-templates/', name), d, (err, data) => {
      if (err) {
            console.log(err)
      } else {
          let options = {
              "height": "11.25in",
              "width": "8.5in",
              "header": {
                  "height": "20mm"
              },
              "footer": {
                  "height": "20mm",
              },
          };
          pdf.create(data).toStream(function(err, stream){
            // stream.pipe(fs.createWriteStream('./foo.pdf'));
            stream.on('data', dataCallback);
            stream.on('end', endCallback);
          });
      }
  });
  }

module.exports = router