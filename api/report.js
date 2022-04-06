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
  // return {blocks: all, unit: unit, date:date, query:q, yard: q.yard}
  // console.log(all)

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
    +' , Area: '+ q.gt +'-' + q.lt
    +' , L: '+ q.l_gt +'-' + q.l_lt
    +' , H: '+ q.h_gt +'-' + q.h_lt
    +' , W: '+ q.w_gt +'-' + q.w_lt
    +' , Date: '+ q.g_date +'-' + q.l_date
  })
  report.content.push({style: 'table', table:{body:[['Sr.no.', 'Date', 'Block No.', 'L', 'H', 'W', 'CBM', 'TON', 'Type', 'Status', 'Yard', 'Remark']]}})
  for (let i=0; i<all.length; i++) {
    report.content[3].table.body.push([
      i+1,
      all[i].date,
      all[i].is_child?all[i].block_no.split('zzz000')[0]+' - '+((all[i].block_no.split('zzz000')[1])) : all[i].block_no,
      (all[i].dim_1/unit.factor).toFixed(2),
      (all[i].dim_2/unit.factor).toFixed(2),
      (all[i].dim_3/unit.factor).toFixed(2),
      (all[i].dim_1 * all[i].dim_2 * all[i].dim_3*0.000000001).toFixed(2),
      all[i].weight.toFixed(2),
      all[i].block_type,
      all[i].left>0?'Available':'Sold',
      all[i].yard,
      '       '

    ])
  }
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
                        weight: (s.dim_1 * s.dim_2 * s.dim_3 * quarry.specific_gravity * 0.000000001)
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
      +' , Area: '+ q.gt +'-' + q.lt
      +' , L: '+ q.l_gt +'-' + q.l_lt
      +' , H: '+ q.h_gt +'-' + q.h_lt
      +' , Thickness: '+ q.w_gt +'-' + q.w_lt
      +' , Date: '+ q.g_date +'-' + q.l_date
    })
    report.content.push({style: 'table', table:{body:[['Sr.no.', 'Date', 'Block No.', 'Thickness', 'L', 'H', 'Pcs.', 'TON', 'Sq.'+unit.unit, 'Status', 'Remark']]}})
    for (let i=0; i<all.length; i++) {
      report.content[3].table.body.push([
        i+1,
        all[i].date,
        all[i].is_child?all[i].block_no.split('zzz000')[0]+' - '+((all[i].block_no.split('zzz000')[1])) : all[i].block_no,
        (all[i].dim_3).toFixed(2),
        (all[i].dim_1/unit.factor).toFixed(2),
        (all[i].dim_2/unit.factor).toFixed(2),
        all[i].left + ' / ' +all[i].no_of_slabs,
        (all[i].left*all[i].weight).toFixed(2) + ' / ' +(all[i].no_of_slabs*all[i].weight).toFixed(2),
        ((all[i].left*all[i].area)/(unit.factor*unit.factor)).toFixed(2) +' / '+((all[i].no_of_slabs*all[i].area)/(unit.factor*unit.factor)).toFixed(2),
        all[i].left==0?'Sold': 'Available',
        '  gwergwergwergwregwergwergwergwerighwoierugiwuerhgiohweroighwoeirughoiwuerhgoiuwehrgiouwehrgiouhweirughowieughiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerhgiuhergghiowuerh giuhergghiowuerhgiuhergghiowuerhgiuherg  '
  
      ])
    }
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


module.exports = router