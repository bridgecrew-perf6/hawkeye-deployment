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

      const Pdfmake = require('pdfmake');
      var fonts = {
        Roboto: {
          normal: __dirname+'/Roboto-Regular.ttf',
          bold:  __dirname+'/Roboto-Medium.ttf',
          italics:  __dirname+'/Roboto-Italic.ttf',
          bolditalics:  __dirname+'/Roboto-MediumItalic.ttf'
        }
      };
      let pdfmake = new Pdfmake(fonts);
      
      let docDefination = await blockReport(req.query);

    let pdfDoc = pdfmake.createPdfKitDocument(docDefination, {});
    pdfDoc.pipe(res);
    pdfDoc.end();
});


async function blockReport(q) {
  var u = await verifyToken(q.token);
  var all = [];
  
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
                  doc.layer_type = b.layer_type
              }
              let quarry = await Quarry.findOne({quarry:doc.quarry});
              if (quarry == null) {
                  quarry={
                      block_type:''
                  };
              }
              let unit = await Unit.findOne({unit: doc.unit})
              if (doc.slabs) {
                let s = await Slabs.findOne({block_no: doc.block_no})
                doc.yard = s.yard
              }
              all.push({
                    block_no: doc.block_no, 
                    slabs: doc.slabs, 
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
                    cost: doc.cost,
                    total: doc.cost + doc.transportation_cost+doc.processing_cost,
                    transportation_cost: doc.transportation_cost,
                    processing_cost: doc.processing_cost,
                    layer_type: doc.layer_type
                })
              
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
              all = all.filter(a => (a.block_type||'').toLowerCase() == q.block_type.toLowerCase());
          }
          if (q.layer_type) {
            all = all.filter(a => (a.layer_type||'').toLowerCase() == q.layer_type.toLowerCase());
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
  // return {blocks: all, unit: unit, date:date, query:q, yard: q.yard}

  let report = {
    pageSize: 'A4',
    pageOrientation: 'landscape',
    content: [],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      table: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 10,
        color: 'black'
      }
    },
    defaultStyle: {
      alignment: 'center'
    },
  }

  report.content.push({ text: 'Block Report', style: 'header' })
  report.content.push({ text: 'As on: '+ date + ' | Unit: '+unit.unit})
  report.content.push({ text: 'Filters: '
    +'Yard: '+ q.yard 
    +' , Availability: '+ q.fa
    +' ,Type:'+ q.block_type 
    +' ,Layer:'+ q.layer_type 
    +' , Area: '+ q.gt +'-' + q.lt
    +' , L: '+ q.l_gt +'-' + q.l_lt
    +' , H: '+ q.h_gt +'-' + q.h_lt
    +' , W: '+ q.w_gt +'-' + q.w_lt
    +' , Date: '+ q.g_date +'-' + q.l_date
  })
  report.content.push({style: 'table', table:{body:[['Sr.no.', 'Date', 'Block No.', 'L', 'H', 'W', 'CBM', 'TON', 'Type', 'Layer', 'Status', 'Yard', 'Purchase Cost', 'Trans. Cost', 'Total cost', 'Remark']]}})
  let total_weight = 0
  let block_weight = 0
  let processed_weight = 0
  for (let i=0; i<all.length; i++) {
    total_weight += 1* all[i].weight.toFixed(2)
    if(all[i].left>0){
      block_weight += 1* all[i].weight.toFixed(2)
    }
    if(all[i].slabs){
      processed_weight += 1* all[i].weight.toFixed(2)
    }
    report.content[3].table.body.push([
      i+1,
      all[i].date||'',
      (all[i].is_child?all[i].block_no.split('zzz000')[0]+' - '+((all[i].block_no.split('zzz000')[1])) : all[i].block_no)||'',
      (all[i].dim_1/unit.factor).toFixed(2)||'',
      (all[i].dim_2/unit.factor).toFixed(2)||'',
      (all[i].dim_3/unit.factor).toFixed(2)||'',
      (all[i].dim_1 * all[i].dim_2 * all[i].dim_3*0.000000001).toFixed(2)||'',
      (all[i].weight.toFixed(2))||'',
      all[i].block_type||'',
      all[i].layer_type||'',
      (all[i].slabs?'Processed':(all[i].left>0?'Available':'Sold'))||'',
      all[i].yard||'',
      ((all[i].cost)/all[i].weight).toFixed(2)||'',
      ((all[i].transportation_cost)/all[i].weight).toFixed(2)||'',
      ((all[i].total)/all[i].weight).toFixed(2)||'',
      '       '

    ])
  }
  report.content.push({
    text:"\nTotal Weight(TON) - " + total_weight.toFixed(2)||''
  })
  report.content.push({
    text:"\nTotal Weight of Available Blocks(TON) - " + (block_weight.toFixed(2)-processed_weight.toFixed(2)).toFixed(2)||''
  })
  report.content.push({
    text:"\nTotal Weight of Sold Blocks(TON) - " + (total_weight.toFixed(2)-block_weight.toFixed(2)).toFixed(2)||''
  })
  report.content.push({
    text:"\nTotal Weight of Processed Blocks(TON) - " + processed_weight.toFixed(2)||''
  })
  return report
}


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

    const Pdfmake = require('pdfmake');
    var fonts = {
      Roboto: {
        normal: __dirname+'/Roboto-Regular.ttf',
        bold:  __dirname+'/Roboto-Medium.ttf',
        italics:  __dirname+'/Roboto-Italic.ttf',
        bolditalics:  __dirname+'/Roboto-MediumItalic.ttf'
      }
    };
    let pdfmake = new Pdfmake(fonts);
    
    let docDefination = await slabsReport(req.query);

  let pdfDoc = pdfmake.createPdfKitDocument(docDefination, {});
  pdfDoc.pipe(res);
  pdfDoc.end();
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
                        weight: (s.dim_1 * s.dim_2 * s.dim_3 * quarry.specific_gravity * 0.000000001),
                        weight_after: ((s.dim_1-76.2) * (s.dim_2-50.8) * s.dim_3 * quarry.specific_gravity * 0.000000001),
                        area_after: (s.dim_1-76.2) * (s.dim_2-50.8)
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
            if (q.layer_type) {
              all = all.filter(a => a.layer_type.toLowerCase() == q.layer_type.toLowerCase());
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
    // return {blocks: all, unit: unit, date:date, query:q, yard:q.yard}

    let report = {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      content: [],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        table: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: 'black'
        }
      },
      defaultStyle: {
        alignment: 'center'
      },
    }
  
    report.content.push({ text: 'Slabs Report', style: 'header' })
    report.content.push({ text: 'As on: '+ date + ' | Unit: '+unit.unit})
    report.content.push({ text: 'Filters: '
      +'Yard: '+ q.yard 
      +' , Availability: '+ q.fa
      +' ,Type:'+ q.block_type 
      +' ,Layer:'+ q.layer_type
      +' , Area: '+ q.gt +'-' + q.lt
      +' , L: '+ q.l_gt +'-' + q.l_lt
      +' , H: '+ q.h_gt +'-' + q.h_lt
      +' , Thickness: '+ q.w_gt +'-' + q.w_lt
      +' , Date: '+ q.g_date +'-' + q.l_date
    })
    report.content.push({style: 'table', table:{widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto','auto', 'auto', 'auto', 'auto', 'auto', 60], body:[['Sr.no.', 'Date', 'Block No.', 'Thickness', 'L', 'H', 'Pcs.','Margin L(inch)','Margin H(inch)', 'TON', 'Sq.'+unit.unit,'Ton after margin', 'Sq.'+unit.unit+' after margin', 'Status', 'Remark']]}})
    let total_weight = 0
    let total_left_weight = 0
    let total_area = 0
    let total_left_area = 0
    let total_weight_after_margin = 0
    let total_left_weight_after_margin = 0
    let total_area_after_margin = 0
    let total_left_area_after_margin = 0
    for (let i=0; i<all.length; i++) {
      total_weight += 1*(all[i].no_of_slabs*all[i].weight).toFixed(2) || 0
      total_left_weight += 1*(all[i].left*all[i].weight).toFixed(2) || 0
      total_area += 1*((all[i].no_of_slabs*all[i].area)/(unit.factor*unit.factor)).toFixed(2) || 0
      total_left_area += 1*((all[i].left*all[i].area)/(unit.factor*unit.factor)).toFixed(2) || 0

      total_weight_after_margin += 1*(all[i].no_of_slabs*all[i].weight_after).toFixed(2) || 0
      total_left_weight_after_margin += 1*(all[i].left*all[i].weight_after).toFixed(2) || 0
      total_area_after_margin += 1*((all[i].no_of_slabs*all[i].area_after)/(unit.factor*unit.factor)).toFixed(2) || 0
      total_left_area_after_margin += 1*((all[i].left*all[i].area_after)/(unit.factor*unit.factor)).toFixed(2) || 0

      report.content[3].table.body.push([
        i+1,
        all[i].date,
        all[i].is_child?all[i].block_no.split('zzz000')[0]+' - '+((all[i].block_no.split('zzz000')[1])) : all[i].block_no,
        (all[i].dim_3).toFixed(2),
        (all[i].dim_1/unit.factor).toFixed(2),
        (all[i].dim_2/unit.factor).toFixed(2),
        all[i].left + ' / ' +all[i].no_of_slabs,
        '3',
        '2',
        (all[i].left*all[i].weight).toFixed(2) + ' / ' +(all[i].no_of_slabs*all[i].weight).toFixed(2),
        ((all[i].left*all[i].area)/(unit.factor*unit.factor)).toFixed(2) +' / '+((all[i].no_of_slabs*all[i].area)/(unit.factor*unit.factor)).toFixed(2),
        (all[i].left*all[i].weight_after).toFixed(2) + ' / ' +(all[i].no_of_slabs*all[i].weight_after).toFixed(2),
        ((all[i].left*all[i].area_after)/(unit.factor*unit.factor)).toFixed(2) +' / '+((all[i].no_of_slabs*all[i].area_after)/(unit.factor*unit.factor)).toFixed(2),
        all[i].left==0?'Unavailable': 'Available',
        '    '
      ])
    }
    report.content.push({text: "Total weight(ton) - "+total_weight.toFixed(3)})
    report.content.push({text: "Total weight of left stock(ton) - "+total_left_weight.toFixed(3)})
    report.content.push({text: "Total area(sq."+unit.unit+") - "+total_area.toFixed(3)})
    report.content.push({text: "Total area of left stock(sq."+unit.unit+") - "+total_left_area.toFixed(3)})

    report.content.push({text: "Total weight after margin(ton) - "+total_weight_after_margin.toFixed(3)})
    report.content.push({text: "Total weight of left stock after margin(ton) - "+total_left_weight_after_margin.toFixed(3)})
    report.content.push({text: "Total area(sq."+unit.unit+")  after margin - "+total_area_after_margin.toFixed(3)})
    report.content.push({text: "Total area of left stock(sq."+unit.unit+")  after margin - "+total_left_area_after_margin.toFixed(3)})
    return report
}

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

    const Pdfmake = require('pdfmake');
    var fonts = {
      Roboto: {
        normal: __dirname+'/Roboto-Regular.ttf',
        bold:  __dirname+'/Roboto-Medium.ttf',
        italics:  __dirname+'/Roboto-Italic.ttf',
        bolditalics:  __dirname+'/Roboto-MediumItalic.ttf'
      }
    };
    let pdfmake = new Pdfmake(fonts);
    
    let docDefination = await overviewReport(req.query);

  let pdfDoc = pdfmake.createPdfKitDocument(docDefination, {});
  pdfDoc.pipe(res);
  pdfDoc.end();
});

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
    // return {unit: unit, date:date, query:q, yard: q.yard, 
    //   block_stock: block_stock,
    //   marked_block_stock: marked_block_stock,
    //   sold_block_stock: sold_block_stock,
    //   slabs_stock:slabs_stock,
    //   polished_slabs_stock: polished_slabs_stock,
    //   marked_slabs_stock: marked_slabs_stock,
    //   sold_slabs_stock:sold_slabs_stock}

    let report = {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      content: [],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        table: {
          margin: [0, 5, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: 'black'
        }
      },
      defaultStyle: {
        alignment: 'center'
      },
    }
  
    report.content.push({ text: 'Overview Report', style: 'header' })
    report.content.push({ text: 'Unit: '+unit.unit})
    report.content.push({ text: 'Filters: '
      +'Yard: '+ q.yard 
      +' ,Type:'+ q.block_type 
      +' , Area: '+ q.gt +'-' + q.lt
      +' , L: '+ q.l_gt +'-' + q.l_lt
      +' , H: '+ q.h_gt +'-' + q.h_lt
      +' , W: '+ q.w_gt +'-' + q.w_lt
      +' , Date: '+ q.g_date +'-' + q.l_date
    })
    report.content.push({style: 'table', table:{body:[
      ['Stock at - '+q.yard, 'As on: '+ date],
      ['block Stock (TON)', block_stock.toFixed(2)],
      ['marked block stock (TON)', marked_block_stock.toFixed(2)],
      ['sold block stock (TON)', sold_block_stock.toFixed(2)],
      ['slabs stock sq.'+unit.unit,(slabs_stock/ (unit.factor*unit.factor)).toFixed(2)],
      ['polished slabs stock sq.'+unit.unit, (polished_slabs_stock/ (unit.factor*unit.factor)).toFixed(2)],
      ['marked slabs stock sq.'+unit.unit, (marked_slabs_stock/ (unit.factor*unit.factor)).toFixed(2)],
      ['sold slabs stock sq.'+unit.unit,(sold_slabs_stock/ (unit.factor*unit.factor)).toFixed(2)]
    ]}})
    
    return report
}

router.get('/block-margin-report', async (req, res)=>{
  var u = await verifyToken(req.query.token);
    if (u==0) return res.send("bad request")
  const stream = res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline;`,
    });
    for (let q in req.query) {
      if (req.query[q]=='undefined') {
        req.query[q]=undefined
      }
    }

    const Pdfmake = require('pdfmake');
    var fonts = {
      Roboto: {
        normal: __dirname+'/Roboto-Regular.ttf',
        bold:  __dirname+'/Roboto-Medium.ttf',
        italics:  __dirname+'/Roboto-Italic.ttf',
        bolditalics:  __dirname+'/Roboto-MediumItalic.ttf'
      }
    };
    let pdfmake = new Pdfmake(fonts);
    
    let report = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      content: [],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment:'center'
        },
        table: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: 'black'
        }
      },
      defaultStyle: {
        fontSize:10
      },
    }
    let trades = await Trade.find({reserved:0, quotation: false, slabs:false});
    
    let date = new Date().toLocaleString();
    let unit = await Unit.findOne({unit: req.query.unit})
    report.content.push({text:"\n\Sold Block Details\n", style: 'header'})
    report.content.push({text: 'Date: '+date, alignment:'right'})
    report.content.push({text: "Unit: "+unit.unit, alignment:'right'})
    report.content.push({style: 'table', table:{ body:[['sr. no.', 'Date', 'Block no', 'L', 'H', 'W', 'Ton','m. L','m. H', 'Weight after margin', 'Remark']]}})
    let total_weight = 0
    let total_weight_without_margin = 0
    for (let i=0; i<trades.length; i++) {

      var blk = await Block.findOne({block_no: trades[i].block_no});
      var qry = await Quarry.findOne({quarry:blk.quarry});
      if (blk.is_child == true) {
        var blk1 = await Block.findOne({block_no: trades[i].block_no.split('zzz000')[0]});
        qry = await Quarry.findOne({quarry: blk1.quarry})
        blk.shade = blk1.shade
      }
      if (qry == null) {
        qry = {
          quarry: '',
          specific_gravity:0
        }
      }

      total_weight += 1 * blk.weight.toFixed(3) || 0
      total_weight_without_margin += 1*((blk.dim_1-trades[i].r_dim_1)*(blk.dim_2-trades[i].r_dim_2)*blk.dim_3*qry.specific_gravity*0.000000001).toFixed(3) || 0

      let inv = await Invoice.findOne({trade_id: trades[i].trade_id})
      report.content[3].table.body.push([
        i+1,
        inv.date,
        trades[i].block_no,
        (blk.dim_1/unit.factor).toFixed(3),
        (blk.dim_2/unit.factor).toFixed(3),
        (blk.dim_3/unit.factor).toFixed(3),
        blk.weight.toFixed(3),
        (trades[i].r_dim_1/unit.factor).toFixed(3),
        (trades[i].r_dim_2/unit.factor).toFixed(3),
        ((blk.dim_1-trades[i].r_dim_1)*(blk.dim_2-trades[i].r_dim_2)*blk.dim_3*qry.specific_gravity*0.000000001).toFixed(3),
        '       '
      ])
    }
    
    report.content.push({
      text:"\nTotal actual Weight(ton) - " + total_weight.toFixed(3)
    })
    report.content.push({
      text:"\nTotal Weight after margin(ton) - " + total_weight_without_margin.toFixed(3)
    })

    report.content.push({
      text:"\nThis is a computer generated document", alignment: "center"
    })


    let pdfDoc = pdfmake.createPdfKitDocument(report, {});
    pdfDoc.pipe(res);
    pdfDoc.end();
});

router.get('/slabs-margin-report', async (req, res)=>{
  var u = await verifyToken(req.query.token);
    if (u==0) return res.send("bad request")
  const stream = res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline;`,
    });
    for (let q in req.query) {
      if (req.query[q]=='undefined') {
        req.query[q]=undefined
      }
    }

    const Pdfmake = require('pdfmake');
    var fonts = {
      Roboto: {
        normal: __dirname+'/Roboto-Regular.ttf',
        bold:  __dirname+'/Roboto-Medium.ttf',
        italics:  __dirname+'/Roboto-Italic.ttf',
        bolditalics:  __dirname+'/Roboto-MediumItalic.ttf'
      }
    };
    let pdfmake = new Pdfmake(fonts);
    
    let report = {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      content: [],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment:'center'
        },
        table: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: 'black'
        }
      },
      defaultStyle: {
        fontSize:10
      },
    }
    let trades = await Trade.find({reserved:0, quotation: false, slabs:true});
    
    let date = new Date().toLocaleString();
    let unit = await Unit.findOne({unit: req.query.unit})
    report.content.push({text:"\n\Sold Slabs Details\n", style: 'header'})
    report.content.push({text: 'Unit: '+date, alignment:'right'})
    report.content.push({text: unit.unit, alignment:'right'})
    report.content.push({style: 'table', table:{ body:[['sr. no.', 'Date', 'Block no', 'Thick ness', 'L', 'H', 'Pcs.', 'Ton', 'Sq.'+unit.unit, 'm.L','m.  H', 'L. After M.', 'H. After M.', 'sq.'+unit.unit+' after margin and Roff', 'Ton after margin & Roff', 'Shade', 'Remark']]}})
    
    let total_area = 0
    let total_area_without_margin = 0
    let total_weight = 0
    let total_weight_without_margin = 0
    for (let i=0; i<trades.length; i++) {
      
      var blk = await Block.findOne({block_no: trades[i].block_no});
      var qry = await Quarry.findOne({quarry:blk.quarry});
      var slbs = await Slabs.findOne({block_no: trades[i].block_no});
      if (blk.is_child == true) {
        var blk1 = await Block.findOne({block_no: trades[i].block_no.split('zzz000')[0]});
        qry = await Quarry.findOne({quarry: blk1.quarry})
        blk.shade = blk1.shade
      }
      if (qry == null) {
        qry = {
          quarry: '',
          specific_gravity:0
        }
      }
      let inv = await Invoice.findOne({trade_id: trades[i].trade_id});

      slbs.dim_1_m = slbs.dim_1-trades[i].r_dim_1
      slbs.dim_2_m = slbs.dim_2-trades[i].r_dim_2
      if (trades[i].round_off) {
        let frac_dim_1 = Math.floor((slbs.dim_1_m/25.4)%12)
        let frac_dim_2 = Math.floor((slbs.dim_2_m/25.4)%12)

        if (frac_dim_1>=0 && frac_dim_1<3) {
          slbs.dim_1_m = Math.floor(slbs.dim_1_m/304.8) + 0
        }
        if (frac_dim_2>=0 && frac_dim_2<3) {
          slbs.dim_2_m = Math.floor(slbs.dim_2_m/304.8) + 0
        }

        if (frac_dim_1>=3 && frac_dim_1<6) {
          slbs.dim_1_m = Math.floor(slbs.dim_1_m/304.8) + 0.3
        }
        if (frac_dim_2>=3 && frac_dim_2<6) {
          slbs.dim_2_m = Math.floor(slbs.dim_2_m/304.8) + 0.3
        }

        if (frac_dim_1>=6 && frac_dim_1<9) {
          slbs.dim_1_m = Math.floor(slbs.dim_1_m/304.8) + 0.6
        }
        if (frac_dim_2>=6 && frac_dim_2<9) {
          slbs.dim_2_m = Math.floor(slbs.dim_2_m/304.8) + 0.6
        }

        if (frac_dim_1>=9 && frac_dim_1<12) {
          slbs.dim_1_m = Math.floor(slbs.dim_1_m/304.8) + 0.9
        }
        if (frac_dim_2>=9 && frac_dim_2<12) {
          slbs.dim_2_m = Math.floor(slbs.dim_2_m/304.8) + 0.9
        }
        slbs.dim_1_m = slbs.dim_1_m*304.8
        slbs.dim_2_m = slbs.dim_2_m*304.8
      }

      total_area += 1 * ((slbs.dim_1/unit.factor)*(slbs.dim_2/unit.factor)*trades[i].sold).toFixed(3) || 0
      total_area_without_margin += 1*((slbs.dim_1_m/unit.factor)*(slbs.dim_2_m/unit.factor)*trades[i].sold).toFixed(3) || 0
      total_weight += 1*(slbs.dim_1*slbs.dim_2*slbs.dim_3*qry.specific_gravity*0.000000001*trades[i].sold).toFixed(3) || 0
      total_weight_without_margin += 1*(slbs.dim_1_m*slbs.dim_2_m*slbs.dim_3*qry.specific_gravity*0.000000001*trades[i].sold).toFixed(3) || 0

      report.content[3].table.body.push([
        i+1,
        inv.date,
        trades[i].is_child?(trades[i].block_no.split('zzz000')[0]+'-'+trades[i].block_no.split('zzz000')[1]):trades[i].block_no,
        slbs.dim_3,
        (slbs.dim_1/unit.factor).toFixed(3),
        (slbs.dim_2/unit.factor).toFixed(3),
        trades[i].sold,
        (slbs.dim_1*slbs.dim_2*slbs.dim_3*qry.specific_gravity*0.000000001*trades[i].sold).toFixed(3),
        ((slbs.dim_1/unit.factor)*(slbs.dim_2/unit.factor)*trades[i].sold).toFixed(3),
        (trades[i].r_dim_1/unit.factor).toFixed(2),
        (trades[i].r_dim_2/unit.factor).toFixed(2),
        ((slbs.dim_1-trades[i].r_dim_1)/unit.factor).toFixed(3),
        ((slbs.dim_2-trades[i].r_dim_2)/unit.factor).toFixed(3),
        ((slbs.dim_1_m/unit.factor)*(slbs.dim_2_m/unit.factor)*trades[i].sold).toFixed(3),
        (slbs.dim_1_m*slbs.dim_2_m*slbs.dim_3*qry.specific_gravity*0.000000001*trades[i].sold).toFixed(3),
        blk.shade,
        '       '
      ])
    }
    
    report.content.push({
      text:"\nTotal actual Weight(ton) - " + total_weight.toFixed(3)
    })
    report.content.push({
      text:"\nTotal Weight after margin and R.off(ton) - " + total_weight_without_margin.toFixed(3)
    })
    report.content.push({
      text:"\nTotal actual area (sq."+unit.unit+") - " + total_area.toFixed(3)
    })
    report.content.push({
      text:"\nTotal area after margin and R.off (sq."+unit.unit+") - " + total_area_without_margin.toFixed(3)
    })

    report.content.push({
      text:"\nThis is a computer generated document", alignment: "center"
    })


    let pdfDoc = pdfmake.createPdfKitDocument(report, {});
    pdfDoc.pipe(res);
    pdfDoc.end();
});

router.get('/quotation-report', async (req, res)=>{
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
      var q = (await Block.findOne({block_no: trades[i].block_no})).quarry
      if (trades[i].is_child == true) {
        q = (await Block.findOne({block_no: (trades[i].block_no.split('zzz000')[0])})).quarry
      }
      q = await Quarry.findOne({quarry: q})
      trades[i].block_type = q.block_type
      if (trades[i].block_type == undefined) trades[i].block_type = ''

      trades[i].specific_gravity = q.specific_gravity
      if (trades[i].specific_gravity == undefined) trades[i].specific_gravity = 0
      
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

        trades[i].qty = 1*(((s.dim_1.toFixed(3)*s.dim_2.toFixed(3))/(unit.factor*unit.factor))*trades[i].reserved).toFixed(3)
        
        trades[i].cost = (trades[i].cost*unit.factor*unit.factor).toFixed(2)
        // only the dims are in mm
        trades[i].dim_1 = (s.dim_1/unit.factor).toFixed(3)
        trades[i].dim_2 = (s.dim_2/unit.factor).toFixed(3)
        trades[i].dim_3 = s.dim_3.toFixed(2)
        trades[i].hsn = s.slabs_hsn_code
        total_area+= trades[i].qty*1
      } else {
        let b = await Block.findOne({block_no: trades[i].block_no})
        trades[i].hsn = b.hsn_code
        if (b.is_child == true) {
          trades[i].hsn = (await Block.findOne({block_no: trades[i].block_no.split('zzz000')[0]})).hsn_code
        }

        trades[i].dim_1 = ((b.dim_1-trades[i].r_dim_1)).toFixed(3)
        trades[i].dim_2 = ((b.dim_2-trades[i].r_dim_2)).toFixed(3)
        trades[i].dim_3 = ((b.dim_3-trades[i].r_dim_3)).toFixed(3)
        trades[i].qty = 1*((trades[i].dim_1*trades[i].dim_2*trades[i].dim_3*trades[i].specific_gravity*0.000000001)*1).toFixed(3)
        trades[i].dim_1 = (trades[i].dim_1/unit.factor).toFixed(3)
        trades[i].dim_2 = (trades[i].dim_2/unit.factor).toFixed(3)
        trades[i].dim_3 = (trades[i].dim_3/unit.factor).toFixed(3)
        total_ton+=(trades[i].qty)
      }
      trades[i].igst = ((trades[i].qty*trades[i].cost)*(inv.igst/100)).toFixed(2)
      trades[i].cgst = ((trades[i].qty*trades[i].cost)*(inv.cgst/100)).toFixed(2)
      trades[i].sgst = ((trades[i].qty*trades[i].cost)*(inv.sgst/100)).toFixed(2)

      total_taxes+=1*(trades[i].igst*1+trades[i].cgst*1+trades[i].sgst*1).toFixed(2)
      total_amount+=1*((trades[i].cost * trades[i].qty).toFixed(2))
    }

    let company = await Company.findOne({company: inv.company})
    let party = await Party.findOne({party: inv.party});
    const Pdfmake = require('pdfmake');
    var fonts = {
      Roboto: {
        normal: __dirname+'/Roboto-Regular.ttf',
        bold:  __dirname+'/Roboto-Medium.ttf',
        italics:  __dirname+'/Roboto-Italic.ttf',
        bolditalics:  __dirname+'/Roboto-MediumItalic.ttf'
      }
    };
    let pdfmake = new Pdfmake(fonts);
    
    let report = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      content: [],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment:'center'
        },
        table: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: 'black'
        }
      },
      defaultStyle: {
        fontSize:10
      },
    }
  
    report.content.push({ text: 'Quotation Report', style: 'header' })
    report.content.push({
      table: {
        widths:['60%','40%'],
				body: [
          [{text: company.company+'\n'+company.line_2+'\nGSTIN: '+company.line_1},
          {
            text:"Date: "+inv.date+'\nSupply State: '+inv.supply_state+'\nSale Type: '+inv.sale_type,
            rowSpan:2
          }],
					[[{text:'BILLING ADDRESS:\n', bold:true}, {text: party.party_address}],''],
					[[{text: 'BILLED TO/CUSTOMER DETAILS:\n', bold:true}, {text: party.party+'\nGSTIN: '+party.gstin}], [{text:'SHIPPING ADDRESS:\n', bold:true}, {text: inv.shipping_address}]],
        

        
      ]
    }})
    report.content.push({text:"\n\nParticulars\n", alignment:'center'})
    report.content.push({style: 'table', table:{widths: ['3%','32%','7%','8%','8%','8%','8%','8%','8%','10%'], body:[['#', 'Item', 'HSN', 'Qty', 'Price (Rs.)', 'GST(%)', 'IGST (Rs.)','CGST (Rs.)','SGST (Rs.)', 'Total (Rs.)']]}})
    for (let i=0; i<trades.length; i++) {
      report.content[3].table.body.push([
        i+1,
        trades[i].block_type+'\n'
        + (trades[i].dim_1*unit.factor/10).toFixed(2) + ' x ' + (trades[i].dim_2*unit.factor/10).toFixed(2) + (trades[i].slabs?('cm    x '+trades[i].dim_3.toFixed(1)+' mm\n'):((trades[i].dim_3*unit.factor/10).toFixed(2)+' cm\n'))
        + trades[i].dim_1 + ' x ' + trades[i].dim_2 + ' x ' + (trades[i].slabs?(unit.unit+'    x '+trades[i].dim_3.toFixed(1))+'mm':trades[i].dim_3 + unit.unit)+'\n'
        + (trades[i].is_child?trades[i].block_no.split('zzz000')[0]+'-'+trades[i].block_no.split('zzz000')[1]:trades[i].block_no),
        trades[i].hsn,
        trades[i].qty+(trades[i].slabs?(' sq.'+unit.unit):(' TON')),
        '₹'+trades[i].cost,
        (inv.igst+inv.cgst+inv.sgst) +'%',
        '₹'+trades[i].igst,
        '₹'+trades[i].cgst,
        '₹'+trades[i].sgst,
        '₹'+((trades[i].cost*trades[i].qty)*1+(trades[i].igst*1+trades[i].cgst*1+trades[i].sgst*1)*1)

      ])
    }
    report.content[3].table.body.push([{text:'', colSpan: 3},'','',"Total- A:"+total_area.toFixed(3)+" T:"+total_ton.toFixed(3),{text: '', colSpan: 6},'','','','',''])

    report.content.push({
      table: {
        widths:['60%', '30%', '10%'],
				body: [
          [
            {text: 'TERMS & CONDITIONS:\n'+company.terms, rowSpan:5}, 
            'Total Amount',
            '₹'+total_amount.toFixed(2)
          ],
          [
            '',
            'Total Taxes',
            '₹'+total_taxes.toFixed(2)
          ],
          [
            '',
            'Round(-|+)',
            '₹'+1*( Math.round((total_amount)*1+(total_taxes)*1) -((total_amount)*1+(total_taxes)*1) ).toFixed(2)
          ],
          [
            '',
            'Net Amount',
            '₹'+((total_amount*1+total_taxes*1)+( 1*( Math.round((total_amount)*1+(total_taxes)*1) -((total_amount)*1+(total_taxes)*1) ).toFixed(2) ))
          ],
          [
            '',
            {text: 'For:\n'+company.company+'\n\n\n\n\n\n\nSignatory', colSpan:2, rowSpan:2},
            ''
          ],
          [
            'BANK DETAILS:\n' + company.line_3,
            '',
            ''
          ]
        ]
			}
    });


    report.content.push({
      text:"\nThis is a computer generated document", alignment: "center"
    })


    let pdfDoc = pdfmake.createPdfKitDocument(report, {});
    pdfDoc.pipe(res);
    pdfDoc.end();
});

router.get('/invoice-report', async (req, res)=>{
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
      var q = (await Block.findOne({block_no: trades[i].block_no})).quarry
      if (trades[i].is_child == true) {
        q = (await Block.findOne({block_no: (trades[i].block_no.split('zzz000')[0])})).quarry
      }
      q = await Quarry.findOne({quarry: q})
      trades[i].block_type = q.block_type
      if (trades[i].block_type == undefined) trades[i].block_type = ''

      trades[i].specific_gravity = q.specific_gravity
      if (trades[i].specific_gravity == undefined) trades[i].specific_gravity = 0
      
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

        trades[i].qty = 1*(((s.dim_1.toFixed(3)*s.dim_2.toFixed(3))/(unit.factor*unit.factor))*trades[i].sold).toFixed(3)
        
        trades[i].cost = (trades[i].cost*unit.factor*unit.factor).toFixed(2)
        // only the dims are in mm
        trades[i].dim_1 = (s.dim_1/unit.factor).toFixed(3)
        trades[i].dim_2 = (s.dim_2/unit.factor).toFixed(3)
        trades[i].dim_3 = s.dim_3.toFixed(2)
        trades[i].hsn = s.slabs_hsn_code
        total_area+= trades[i].qty*1
      } else {
        let b = await Block.findOne({block_no: trades[i].block_no})
        trades[i].hsn = b.hsn_code
        if (b.is_child == true) {
          trades[i].hsn = (await Block.findOne({block_no: trades[i].block_no.split('zzz000')[0]})).hsn_code
        }

        trades[i].dim_1 = ((b.dim_1-trades[i].r_dim_1)).toFixed(3)
        trades[i].dim_2 = ((b.dim_2-trades[i].r_dim_2)).toFixed(3)
        trades[i].dim_3 = ((b.dim_3-trades[i].r_dim_3)).toFixed(3)
        trades[i].qty = 1*((trades[i].dim_1*trades[i].dim_2*trades[i].dim_3*trades[i].specific_gravity*0.000000001)*1).toFixed(3)
        trades[i].dim_1 = (trades[i].dim_1/unit.factor).toFixed(3)
        trades[i].dim_2 = (trades[i].dim_2/unit.factor).toFixed(3)
        trades[i].dim_3 = (trades[i].dim_3/unit.factor).toFixed(3)
        total_ton+=(trades[i].qty)
      }
      trades[i].igst = ((trades[i].qty*trades[i].cost)*(inv.igst/100)).toFixed(2)
      trades[i].cgst = ((trades[i].qty*trades[i].cost)*(inv.cgst/100)).toFixed(2)
      trades[i].sgst = ((trades[i].qty*trades[i].cost)*(inv.sgst/100)).toFixed(2)

      total_taxes+=1*(trades[i].igst*1+trades[i].cgst*1+trades[i].sgst*1).toFixed(2)
      total_amount+=1*((trades[i].cost * trades[i].qty).toFixed(2))
    }

    let company = await Company.findOne({company: inv.company})
    let party = await Party.findOne({party: inv.party});
    const Pdfmake = require('pdfmake');
    var fonts = {
      Roboto: {
        normal: __dirname+'/Roboto-Regular.ttf',
        bold:  __dirname+'/Roboto-Medium.ttf',
        italics:  __dirname+'/Roboto-Italic.ttf',
        bolditalics:  __dirname+'/Roboto-MediumItalic.ttf'
      }
    };
    let pdfmake = new Pdfmake(fonts);
    
    let report = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      content: [],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment:'center'
        },
        table: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: 'black'
        }
      },
      defaultStyle: {
        fontSize:10
      },
    }
    
    if (company == null) {
      company= {
        company:'',
        line_1:'',
        line_2:'',
        line_3:'',
        terms:''
      }
    }
    if (party == null) {
      party = {
        party:'',
        party_address:'',
        gstin:''
      }
    }
    report.content.push({ text: 'Tax Invoice', style: 'header' })
    report.content.push({
      table: {
        widths:['60%','40%'],
				body: [
          [{text: company.company+'\n'+company.line_2+'\nGSTIN: '+company.line_1},
          {
            text:"Invoice no.: "+inv.trade_id+"\nDate: "+inv.date+'\nSupply State: '+inv.supply_state+'\nSale Type: '+inv.sale_type+'\nE-way bill no: '+inv.eway_bill_no+'\nRoyalty no: '+inv.royalty_no+'\nTransportation Mode: '+inv.transportation_mode+'\nCustomer Ref# :'+inv.customer_ref_no,
            rowSpan:2
          }],
					[[{text:'BILLING ADDRESS:\n', bold:true}, {text: party.party_address}],''],
					[[{text: 'BILLED TO/CUSTOMER DETAILS:\n', bold:true}, {text: party.party+'\nGSTIN: '+party.gstin}], [{text:'SHIPPING ADDRESS:\n', bold:true}, {text: inv.shipping_address}]],
        

        
      ]
    }})
    report.content.push({text:"\n\nParticulars\n", alignment:'center'})
    report.content.push({style: 'table', table:{widths: ['3%','32%','7%','8%','8%','8%','8%','8%','8%','10%'], body:[['#', 'Item', 'HSN', 'Qty', 'Price (Rs.)', 'GST(%)', 'IGST (Rs.)','CGST (Rs.)','SGST (Rs.)', 'Total (Rs.)']]}})
    for (let i=0; i<trades.length; i++) {
      report.content[3].table.body.push([
        i+1,
        trades[i].block_type+'\n'
        + (trades[i].dim_1*unit.factor/10).toFixed(2) + ' x ' + (trades[i].dim_2*unit.factor/10).toFixed(2) + (trades[i].slabs?('cm  x '+trades[i].dim_3.toFixed(1)+' mm\n'):(' x '+(trades[i].dim_3*unit.factor/10).toFixed(2)+' cm\n'))
        + trades[i].dim_1 + ' x ' + trades[i].dim_2 + (trades[i].slabs?(unit.unit+'  x '+trades[i].dim_3.toFixed(1))+'mm':(' x ' + trades[i].dim_3 + unit.unit))+'\n'
        + (trades[i].is_child?trades[i].block_no.split('zzz000')[0]+'-'+trades[i].block_no.split('zzz000')[1]:trades[i].block_no),
        trades[i].hsn,
        trades[i].qty+(trades[i].slabs?(' sq.'+unit.unit):(' TON')),
        '₹'+trades[i].cost,
        (inv.igst+inv.cgst+inv.sgst) +'%',
        '₹'+trades[i].igst,
        '₹'+trades[i].cgst,
        '₹'+trades[i].sgst,
        '₹'+((trades[i].cost*trades[i].qty)*1+(trades[i].igst*1+trades[i].cgst*1+trades[i].sgst*1)*1)

      ])
    }
    report.content[3].table.body.push([{text:'', colSpan: 3},'','',"Total- A:"+total_area.toFixed(3)+" T:"+total_ton.toFixed(3),{text: '', colSpan: 6},'','','','',''])

    report.content.push({
      table: {
        widths:['60%', '30%', '10%'],
				body: [
          [
            {text: 'TERMS & CONDITIONS:\n'+company.terms, rowSpan:5}, 
            'Total Amount',
            '₹'+total_amount.toFixed(2)
          ],
          [
            '',
            'Total Taxes',
            '₹'+total_taxes.toFixed(2)
          ],
          [
            '',
            'Round(-|+)',
            '₹'+1*( Math.round((total_amount)*1+(total_taxes)*1) -((total_amount)*1+(total_taxes)*1) ).toFixed(2)
          ],
          [
            '',
            'Net Amount',
            '₹'+((total_amount*1+total_taxes*1)+( 1*( Math.round((total_amount)*1+(total_taxes)*1) -((total_amount)*1+(total_taxes)*1) ).toFixed(2) ))
          ],
          [
            '',
            {text: 'For:\n'+company.company+'\n\n\n\n\n\n\nSignatory', colSpan:2, rowSpan:2},
            ''
          ],
          [
            'BANK DETAILS:\n' + company.line_3,
            '',
            ''
          ]
        ]
			}
    });


    report.content.push({
      text:"\nThis is a computer generated document", alignment: "center"
    })


    let pdfDoc = pdfmake.createPdfKitDocument(report, {});
    pdfDoc.pipe(res);
    pdfDoc.end();
})




module.exports = router