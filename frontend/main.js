(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+A3O":
/*!********************************************!*\
  !*** ./src/app/blocks/blocks.component.ts ***!
  \********************************************/
/*! exports provided: BlocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksComponent", function() { return BlocksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function BlocksComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const i_r12 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.populate_search(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r11.is_child ? b_r11.block_no.split("zzz000")[0] + " - " + b_r11.block_no.split("zzz000")[1] : b_r11.block_no);
} }
function BlocksComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r15.yard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r15.yard);
} }
function BlocksComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r16.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r16.unit);
} }
function BlocksComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No of Items - ", ctx_r3.no_of_items, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Slabs Area - ", (ctx_r3.total_slabs_area / (ctx_r3.factor * ctx_r3.factor)).toFixed(1), " sq. ", ctx_r3.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Slabs Area after 3 inch and 2 inch - ", (ctx_r3.total_slabs_area_after_minor / (ctx_r3.factor * ctx_r3.factor)).toFixed(1), " sq. ", ctx_r3.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Block weight - ", ctx_r3.total_block_weight.toFixed(1), " TON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cost - \u20B9 ", ctx_r3.total_cost.toFixed(1), " ");
} }
function BlocksComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlocksComponent_tr_117_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_tr_117_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const i_r18 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.toggle_item(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_tr_117_Template_td_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const i_r18 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.action(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", i_r18 % 2 ? "#fff" : "#e4e4e4", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", c_r17.drawer ? "switchon" : "switchoff", " temp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", c_r17.polished ? "blue" : "", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r17.slabs ? "S" : c_r17.is_child ? "T" : "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r17.slabs ? "bx bx-grid" : c_r17.is_child ? "bx bxs-component" : "bx bx-cube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r17.is_child ? c_r17.block_no.split("zzz000")[0] + " - " + c_r17.block_no.split("zzz000")[1] : c_r17.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background-color:", c_r17.left ? "#e8f3ff" : "#ffeded", "; border: 1px solid ", c_r17.left ? "#9bd7ff" : "#ffa9a9", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r17.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r17.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r17.in_transit ? "IN-TRANSIT" : c_r17.yard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r17.block_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r17.layer_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (c_r17.dim_1 ? c_r17.dim_1 / (c_r17.factor ? c_r17.factor : 1) : 0).toFixed(2), " ", c_r17.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (c_r17.dim_2 ? c_r17.dim_2 / (c_r17.factor ? c_r17.factor : 1) : 0).toFixed(2), " ", c_r17.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (c_r17.dim_3 ? c_r17.slabs ? c_r17.dim_3 : c_r17.dim_3 / (c_r17.factor ? c_r17.factor : 1) : 0).toFixed(2), " ", c_r17.slabs ? "mm" : c_r17.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r17.company);
} }
function BlocksComponent_button_118_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_button_118_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.block_report(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Block Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlocksComponent_button_119_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_button_119_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.slabs_report(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Slabs Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlocksComponent_button_120_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_button_120_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.overview_report(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Overview Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlocksComponent_a_123_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_a_123_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const pl_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.actionp(pl_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pl_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pl_r28);
} }
function BlocksComponent_a_126_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_a_126_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const pr_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.actionp(pr_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pr_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pr_r31);
} }
class BlocksComponent {
    constructor(route, router, ds) {
        this.route = route;
        this.router = router;
        this.ds = ds;
        this.content = [];
        this.block_types = [];
        this.pagination_left = [];
        this.pagination_right = [];
        this.drawer = 0;
        this.drawer_items = [];
        this.no_of_items = 0;
        this.total_slabs_area = 0;
        this.total_block_weight = 0;
        this.total_cost = 0;
        this.total_slabs_area_after_minor = 0;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 8);
        document.getElementById("myDropdown").classList.toggle("show");
        this.ds.allBlocks({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.blocks = res.data;
            }
        });
        this.ds.getYards({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.yards = res.data;
            }
        });
        this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.units = res.data;
            }
        });
        this.ds.getQuarries({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.quarries = res.data;
            }
        });
        this.route.queryParams.subscribe((par) => {
            this.yard = par.yard;
            this.page = parseInt(par.page);
            this.fa = (par.fa);
            this.fp = (par.fp);
            this.block_type = par.block_type;
            this.layer_type = par.layer_type;
            this.lt = par.lt;
            this.gt = par.gt;
            this.l_gt = par.l_gt;
            this.l_lt = par.l_lt;
            this.h_gt = par.h_gt;
            this.h_lt = par.h_lt;
            this.w_gt = par.w_gt;
            this.w_lt = par.w_lt;
            this.fpo = par.fpo;
            this.unit = localStorage.getItem('unit');
            this.factor = localStorage.getItem('factor');
            this.l_date = par.l_date;
            this.g_date = par.g_date;
            this.ds.getItems({
                block_no: par.block,
                token: localStorage.getItem('token'),
                yard: this.yard,
                page: this.page,
                fa: this.fa,
                fp: this.fp,
                l_gt: this.l_gt,
                l_lt: this.l_lt,
                h_gt: this.h_gt,
                h_lt: this.h_lt,
                w_gt: this.w_gt,
                w_lt: this.w_lt,
                unit: this.unit,
                factor: this.factor,
                fpo: this.fpo,
                block_type: this.block_type,
                layer_type: this.layer_type,
                lt: this.lt,
                gt: this.gt,
                l_date: this.l_date,
                g_date: this.g_date
            }).subscribe((res) => {
                if (res.status == 'ok') {
                    document.getElementById('ax').style.background = '';
                    document.getElementById('tx').style.background = '';
                    document.getElementById('fx').style.background = '';
                    document.getElementById('az').style.background = '';
                    document.getElementById('tz').style.background = '';
                    document.getElementById('fz').style.background = '';
                    document.getElementById('ay').style.background = '';
                    document.getElementById('ty').style.background = '';
                    document.getElementById('fy').style.background = '';
                    if (this.fa == 'a' || this.fa == undefined) {
                        document.getElementById('ax').style.background = '#bbd2dd';
                    }
                    if (this.fa == 't') {
                        document.getElementById('tx').style.background = '#bbd2dd';
                    }
                    if (this.fa == 'f') {
                        document.getElementById('fx').style.background = '#bbd2dd';
                    }
                    if (this.fp == 'a' || this.fp == undefined) {
                        document.getElementById('az').style.background = '#bbd2dd';
                    }
                    if (this.fp == 't') {
                        document.getElementById('tz').style.background = '#bbd2dd';
                    }
                    if (this.fp == 'f') {
                        document.getElementById('fz').style.background = '#bbd2dd';
                    }
                    if (this.fpo == 'a' || this.fpo == undefined) {
                        document.getElementById('ay').style.background = '#bbd2dd';
                    }
                    if (this.fpo == 't') {
                        document.getElementById('ty').style.background = '#bbd2dd';
                    }
                    if (this.fpo == 'f') {
                        document.getElementById('fy').style.background = '#bbd2dd';
                    }
                    this.content = res.data;
                    this.no_of_items = res.no_of_items;
                    this.total_block_weight = res.total_block_weight;
                    this.total_slabs_area = res.total_slabs_area;
                    this.total_cost = res.total_cost;
                    this.total_slabs_area_after_minor = res.total_slabs_area_after_minor;
                    let i = 0;
                    this.change_unit();
                    this.max_page = res.max_page;
                    this.page = res.page;
                    this.pagination_right = [];
                    this.pagination_left = [];
                    if (this.page - 1 > 0) {
                        this.pagination_left.push(this.page - 1);
                        if (this.page - 2 > 0) {
                            this.pagination_left.push('...');
                            this.pagination_left.push(1);
                        }
                    }
                    this.pagination_left = this.pagination_left.reverse();
                    if ((this.page + 1) < (this.max_page + 1)) {
                        this.pagination_right.push(this.page + 1);
                        if (this.page + 2 < this.max_page + 1) {
                            this.pagination_right.push('...');
                            this.pagination_right.push(this.max_page);
                        }
                    }
                    this.ds.drawerItems({ token: localStorage.getItem('token') }).subscribe((res) => {
                        if (res.status == "ok") {
                            this.drawer_items = res.data;
                            this.drawer = res.data.length;
                            for (let i = 0; i < this.content.length; i++) {
                                for (let j = 0; j < this.drawer_items.length; j++) {
                                    if (this.content[i].block_no == this.drawer_items[j].block_no) {
                                        this.content[i].drawer = true;
                                    }
                                }
                            }
                        }
                    });
                }
            });
        });
    }
    action(i) {
        if (this.content[i].slabs) {
            this.router.navigate(['/main/slabs'], { queryParams: { block: this.content[i].block_no, unit: this.unit } });
            return;
        }
        this.router.navigate(['/main/block'], { queryParams: { block: this.content[i].block_no, unit: this.unit } });
    }
    actionp(w) {
        if (w != '...') {
            this.router.navigate(['/main/blocks'], {
                queryParams: {
                    yard: this.yard,
                    page: w,
                    fp: this.fp,
                    fa: this.fa,
                    block_type: this.block_type,
                    layer_type: this.layer_type,
                    lt: this.lt,
                    gt: this.gt,
                    unit: this.unit,
                    l_gt: this.l_gt,
                    l_lt: this.l_lt,
                    h_gt: this.h_gt,
                    h_lt: this.h_lt,
                    w_gt: this.w_gt,
                    w_lt: this.w_lt,
                    factor: this.factor,
                    l_date: this.l_date,
                    g_date: this.g_date,
                    fpo: this.fpo,
                }
            });
        }
    }
    pFilter(a) {
        this.fp = a;
        document.getElementById("az").style.background = "";
        document.getElementById("tz").style.background = "";
        document.getElementById("fz").style.background = "";
        document.getElementById(a + "z").style.background = "#bbd2dd";
        document.getElementById("ay").style.background = "#bbd2dd";
        document.getElementById("ty").style.background = "";
        document.getElementById("fy").style.background = "";
        this.fpo = 'a';
        this.router.navigate(['/main/blocks'], {
            queryParams: {
                yard: this.yard,
                fp: this.fp,
                fa: this.fa,
                fpo: this.fpo,
                lt: this.lt,
                gt: this.gt,
                block_type: this.block_type,
                layer_type: this.layer_type,
                unit: this.unit,
                l_gt: this.l_gt,
                l_lt: this.l_lt,
                h_gt: this.h_gt,
                h_lt: this.h_lt,
                w_gt: this.w_gt,
                w_lt: this.w_lt,
                factor: this.factor,
                l_date: this.l_date,
                g_date: this.g_date,
            }
        });
    }
    aFilter(a) {
        this.fa = a;
        document.getElementById("ax").style.background = "";
        document.getElementById("tx").style.background = "";
        document.getElementById("fx").style.background = "";
        document.getElementById(a + "x").style.background = "#bbd2dd";
        this.router.navigate(['/main/blocks'], {
            queryParams: {
                yard: this.yard,
                fp: this.fp,
                fa: this.fa,
                fpo: this.fpo,
                lt: this.lt,
                gt: this.gt,
                block_type: this.block_type,
                layer_type: this.layer_type,
                unit: this.unit,
                l_gt: this.l_gt,
                l_lt: this.l_lt,
                h_gt: this.h_gt,
                h_lt: this.h_lt,
                w_gt: this.w_gt,
                w_lt: this.w_lt,
                factor: this.factor,
                l_date: this.l_date,
                g_date: this.g_date,
            }
        });
    }
    poFilter(a) {
        this.fpo = a;
        document.getElementById("ay").style.background = "";
        document.getElementById("ty").style.background = "";
        document.getElementById("fy").style.background = "";
        document.getElementById(a + "y").style.background = "#bbd2dd";
        this.router.navigate(['/main/blocks'], {
            queryParams: {
                yard: this.yard,
                fp: this.fp,
                fa: this.fa,
                fpo: this.fpo,
                lt: this.lt,
                gt: this.gt,
                block_type: this.block_type,
                layer_type: this.layer_type,
                unit: this.unit,
                l_gt: this.l_gt,
                l_lt: this.l_lt,
                h_gt: this.h_gt,
                h_lt: this.h_lt,
                w_gt: this.w_gt,
                w_lt: this.w_lt,
                factor: this.factor,
                l_date: this.l_date,
                g_date: this.g_date,
            }
        });
    }
    search() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toLowerCase();
        var div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        var txtValue;
        for (i = 0; i < a.length; i++) {
            txtValue = (a[i].innerText.toLowerCase()).split('zzz000')[0] + ' - ' + (a[i].innerText.toLowerCase()).split('zzz000')[1];
            if (txtValue.indexOf(filter) > -1) {
                a[i].style.display = "block";
            }
            else {
                a[i].style.display = "none";
            }
        }
        if (filter == '') {
            document.getElementById('cont').style.display = 'none';
        }
        else {
            document.getElementById('cont').style.display = 'block';
        }
    }
    populate_search(i) {
        this.router.navigate(['/main/blocks'], { queryParams: { block: this.blocks[i].block_no, unit: this.unit, factor: this.factor } });
        document.getElementsByTagName('input')[0].value = '';
        document.getElementById('cont').style.display = 'none';
    }
    filter() {
        this.router.navigate(['/main/blocks'], {
            queryParams: {
                yard: this.yard,
                block_type: this.block_type,
                layer_type: this.layer_type,
                gt: this.gt,
                lt: this.lt,
                l_gt: this.l_gt,
                l_lt: this.l_lt,
                h_gt: this.h_gt,
                h_lt: this.h_lt,
                w_gt: this.w_gt,
                w_lt: this.w_lt,
                unit: this.unit,
                factor: this.factor,
                l_date: this.l_date,
                g_date: this.g_date,
                fa: this.fa,
                fp: this.fp,
                fpo: this.fpo,
            }
        });
    }
    toggle_item(i) {
        this.ds.itemToggle({ token: localStorage.getItem('token'), block_no: this.content[i].block_no }).subscribe((res) => {
            if (res.status == "ok") {
                if (this.content[i].drawer == true) {
                    this.content[i].drawer = false;
                    this.drawer -= 1;
                }
                else {
                    this.content[i].drawer = true;
                    this.drawer += 1;
                }
            }
        });
    }
    clear_drawer() {
        if (!confirm("Clear drawer?"))
            return;
        this.ds.clearDrawer({ token: localStorage.getItem('token') })
            .subscribe((res) => {
            if (res.status == "ok") {
                for (let i of this.content) {
                    i.drawer = false;
                }
                this.drawer = 0;
            }
        });
    }
    change_unit() {
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].unit == this.unit) {
                for (let j of this.content) {
                    j.unit = this.unit;
                    j.factor = this.units[i].factor;
                }
                this.factor = this.units[i].factor;
                localStorage.setItem('unit', this.unit);
                localStorage.setItem('factor', this.factor);
                break;
            }
        }
    }
    block_report() {
        let filters = {
            yard: this.yard,
            fp: this.fp,
            fa: this.fa,
            block_type: this.block_type,
            layer_type: this.layer_type,
            lt: this.lt,
            gt: this.gt,
            unit: this.unit,
            factor: this.factor,
            l_gt: this.l_gt,
            l_lt: this.l_lt,
            h_gt: this.h_gt,
            h_lt: this.h_lt,
            w_gt: this.w_gt,
            w_lt: this.w_lt,
            l_date: this.l_date,
            g_date: this.g_date,
        };
        let query = this.serialize(filters, '');
        window.location.href = this.ds.report_url + "/block-report?token=" + localStorage.getItem('token')
            + "&" + query;
    }
    slabs_report() {
        let filters = {
            yard: this.yard,
            fa: this.fa,
            block_type: this.block_type,
            layer_type: this.layer_type,
            lt: this.lt,
            gt: this.gt,
            unit: this.unit,
            factor: this.factor,
            l_gt: this.l_gt,
            l_lt: this.l_lt,
            h_gt: this.h_gt,
            h_lt: this.h_lt,
            w_gt: this.w_gt,
            w_lt: this.w_lt,
            l_date: this.l_date,
            g_date: this.g_date,
        };
        let query = this.serialize(filters, '');
        window.location.href = this.ds.report_url + "/slabs-report?token=" + localStorage.getItem('token')
            + "&" + query;
    }
    overview_report() {
        let filters = {
            yard: this.yard,
            fa: this.fa,
            block_type: this.block_type,
            lt: this.lt,
            gt: this.gt,
            unit: this.unit,
            factor: this.factor,
            l_gt: this.l_gt,
            l_lt: this.l_lt,
            h_gt: this.h_gt,
            h_lt: this.h_lt,
            w_gt: this.w_gt,
            w_lt: this.w_lt,
            l_date: this.l_date,
            g_date: this.g_date,
        };
        let query = this.serialize(filters, '');
        window.location.href = this.ds.report_url + "/overview-report?token=" + localStorage.getItem('token')
            + "&" + query;
    }
    serialize(obj, prefix) {
        var str = [], p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                str.push((v !== null && typeof v === "object") ?
                    this.serialize(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");
    }
}
BlocksComponent.ɵfac = function BlocksComponent_Factory(t) { return new (t || BlocksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
BlocksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlocksComponent, selectors: [["app-blocks"]], decls: 134, vars: 29, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], ["id", "myDropdown", 1, "dropdown-content", 2, "margin-left", "20px"], ["name", "ser", "type", "text", "placeholder", "Search", "id", "myInput", "autocomplete", "off", 3, "keyup"], ["id", "cont", 1, "cont"], [3, "click", 4, "ngFor", "ngForOf"], [2, "margin-top", "50px"], [2, "width", "80%", "margin-bottom", "10px", "margin-left", "20px"], ["id", "filter", 1, "example", 2, "padding", "5px", "border-radius", "20px", "background-color", "#fff"], [2, "display", "inline-block", "padding", "5px"], ["name", "yard", "id", "yard", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "name", "gt", "id", "", 2, "width", "60px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "lt", "id", "", 2, "width", "60px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "geht", "id", "", 2, "width", "60px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "ldet", "id", "", 2, "width", "60px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "gwet", "id", "", 2, "width", "60px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "lefwt", "id", "", 2, "width", "60px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "gth", "id", "", 2, "width", "60px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "lht", "id", "", 2, "width", "60px", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "eg. granite", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["type", "date", 1, "input-field", 3, "ngModel", "ngModelChange"], [2, "display", "inline-block", "padding", "10px"], [1, "button", 3, "click"], [2, "float", "right"], ["name", "gsfgwefwesrd", "id", "grd", 2, "width", "50px", 3, "ngModel", "change", "ngModelChange"], [4, "ngIf"], [1, "btn-group", 2, "margin", "0 auto"], ["id", "ax", 2, "border-top-left-radius", "10px", "border-bottom-left-radius", "10px", 3, "click"], ["id", "tx", 3, "click"], ["id", "fx", 2, "border-top-right-radius", "10px", "border-bottom-right-radius", "10px", 3, "click"], [1, "btn-group", 2, "margin", "0 auto", "margin-bottom", "5px"], ["id", "az", 2, "border-top-left-radius", "10px", "border-bottom-left-radius", "10px", 3, "click"], ["id", "fz", 3, "click"], ["id", "tz", 2, "border-top-right-radius", "10px", "border-bottom-right-radius", "10px", 3, "click"], ["id", "ay", 2, "border-top-left-radius", "10px", "border-bottom-left-radius", "10px", 3, "click"], ["id", "ty", 3, "click"], ["id", "fy", 2, "border-top-right-radius", "10px", "border-bottom-right-radius", "10px", 3, "click"], [2, "width", "95%", "background-color", "#fff", "border-radius", "20px", "padding", "10px", "overflow-x", "scroll"], [3, "style", 4, "ngFor", "ngForOf"], ["style", "background-color: #ffc107;\n  border: none;\n  color: white;\n  padding: 7px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px; margin-left: 20px;margin-bottom: 20px;", 3, "click", 4, "ngIf"], ["style", "background-color: #ffc107;\nborder: none;\ncolor: white;\npadding: 7px 10px;\ntext-align: center;\ntext-decoration: none;\ndisplay: inline-block;\nfont-size: 16px; margin-left: 20px;margin-bottom: 20px;", 3, "click", 4, "ngIf"], [2, "display", "flex", "justify-content", "space-evenly", "align-content", "space-around", "width", "80%", "margin", "0 auto", "flex-wrap", "wrap"], [1, "pagination", 2, "cursor", "pointer"], [2, "background-color", "orange", "color", "white", "border-radius", "5px"], ["id", "drawer_icon", 1, "floating-menu", 2, "cursor", "pointer"], ["routerLink", "../batch-task", 2, "display", "inline-block"], [2, "display", "inline-block"], [2, "text-align", "center", "display", "inline-block", "border-radius", "20px", "color", "white", 3, "click"], [3, "click"], [3, "value"], [2, "font-size", "1.5em"], [1, "temp"], [1, "bx", "bx-right-arrow-alt", 2, "color", "blue", "font-size", "20px"], [2, "background-color", "#ffc107", "border", "none", "color", "white", "padding", "7px 10px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", "margin-left", "20px", "margin-bottom", "20px", 3, "click"]], template: function BlocksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BlocksComponent_Template_input_keyup_9_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BlocksComponent_a_11_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Yard: \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_select_ngModelChange_18_listener($event) { return ctx.yard = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BlocksComponent_option_20_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_23_listener($event) { return ctx.gt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_25_listener($event) { return ctx.lt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " L: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_28_listener($event) { return ctx.l_gt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_30_listener($event) { return ctx.l_lt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " H: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_33_listener($event) { return ctx.h_gt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_35_listener($event) { return ctx.h_lt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " W: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_38_listener($event) { return ctx.w_gt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_40_listener($event) { return ctx.w_lt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Type:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_43_listener($event) { return ctx.block_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Layer:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_46_listener($event) { return ctx.layer_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_48_listener($event) { return ctx.g_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlocksComponent_Template_input_ngModelChange_50_listener($event) { return ctx.l_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_button_click_53_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Unit(Set unit for filter):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BlocksComponent_Template_select_change_58_listener() { return ctx.change_unit(); })("ngModelChange", function BlocksComponent_Template_select_ngModelChange_58_listener($event) { return ctx.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, BlocksComponent_option_60_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, BlocksComponent_span_62_Template, 11, 7, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_button_click_65_listener() { return ctx.aFilter("a"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_button_click_67_listener() { return ctx.aFilter("t"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_button_click_69_listener() { return ctx.aFilter("f"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Unavailable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_button_click_73_listener() { return ctx.pFilter("a"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_button_click_75_listener() { return ctx.pFilter("f"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_button_click_77_listener() { return ctx.pFilter("t"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Slabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_button_click_81_listener() { return ctx.poFilter("a"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_button_click_83_listener() { return ctx.poFilter("t"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Polished");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_button_click_85_listener() { return ctx.poFilter("f"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Not Polished");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, BlocksComponent_div_87_Template, 2, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Block No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Yard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Width/thickness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, BlocksComponent_tr_117_Template, 48, 30, "tr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, BlocksComponent_button_118_Template, 2, 0, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, BlocksComponent_button_119_Template, 2, 0, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, BlocksComponent_button_120_Template, 2, 0, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, BlocksComponent_a_123_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, BlocksComponent_a_126_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h4", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h4", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocksComponent_Template_h4_click_132_listener() { return ctx.clear_drawer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sq", ctx.unit, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.l_gt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.l_lt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.h_gt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.h_lt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.w_gt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.w_lt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.block_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.layer_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.g_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.l_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.factor != undefined && ctx.yard != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.factor != undefined && ctx.yard != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.factor != undefined && ctx.yard != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagination_left);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagination_right);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.drawer, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".switchon[_ngcontent-%COMP%] {\r\n  background-color: #70ff70;\r\n  height: 25px;\r\n  width: 25px;\r\n  border-radius: 20px;\r\n  border:5px solid #2BD47D\r\n  \r\n}\r\n\r\n.switchoff[_ngcontent-%COMP%] {\r\n  background-color: #c5c5c5;\r\n  height: 25px;\r\n  width: 25px;\r\n  border-radius: 20px;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n  max-width:130px;\r\n  overflow:hidden;  \r\n  margin: auto;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%]:hover{\r\n  \r\n  overflow-x: visible;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n  -ms-overflow-style: none;  \r\n  scrollbar-width: none;  \r\n}\r\n\r\n.floating-menu[_ngcontent-%COMP%] {\r\n  font-family: sans-serif;\r\n  background: orange;\r\n  z-index: 100;\r\n  position: fixed;\r\n  bottom: 5px;\r\n  right: 5px;\r\n  border-radius: 1px;\r\n  align-items: center;\r\n  padding:3px;\r\n  height: 30px;\r\n}\r\n\r\n.floating-menu[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 20px;\r\n}\r\n\r\n.row-color[_ngcontent-%COMP%] {\r\n    background-color: #d8d8d8;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    background-color: orange; \r\n    border: none;\r\n    color: white;\r\n    padding: 7px 7px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n  }\r\n\r\n.delete-button[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 63, 63);\r\n    font-size: 14px;\r\n    border:none\r\n  }\r\n\r\n\r\n\r\n.dropbtn[_ngcontent-%COMP%] {\r\n    background-color: #04AA6D;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n    background-color: #3e8e41;\r\n  }\r\n\r\n\r\n\r\n#myInput[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 5px 5px 5px 5px;\r\n    border: none;\r\n    border-bottom: 1px solid #ddd;\r\n    width: 200px;\r\n  }\r\n\r\n\r\n\r\n#myInput[_ngcontent-%COMP%]:focus {outline: 3px solid #ddd;}\r\n\r\n\r\n\r\n\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f6f6f6;\r\n    min-width: 200px;\r\n    \r\n    border: 1px solid #ddd;\r\n    z-index: 1;\r\n    width: 200px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    max-height: 250px;\r\n    \r\n  }\r\n\r\n\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: none;\r\n  }\r\n\r\n\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #f1f1f1}\r\n\r\n\r\n\r\n.show[_ngcontent-%COMP%] {display:block;}\r\n\r\n\r\n\r\n.pagination[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    float: left;\r\n    padding: 4px 8px;\r\n    text-decoration: none;\r\n  }\r\n\r\n.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {background-color: #ddd;}\r\n\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background-color: #e7e7e7; \r\n    color: black;\r\n    padding: 5px 10px; \r\n    cursor: pointer; \r\n    float: left; \r\n    border: none;\r\n    font-size: 14px;\r\n  }\r\n\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\r\n    border-right: none; \r\n  }\r\n\r\n\r\n\r\n.btn-group[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n\r\n\r\n\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(226, 226, 226);\r\n  }\r\n\r\n.example[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n\r\n\r\n.example[_ngcontent-%COMP%] {\r\n    -ms-overflow-style: none;  \r\n    scrollbar-width: none;  \r\n  }\r\n\r\n.delete-button[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 158, 158);\r\n    font-size: 14px;\r\n    border:none\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2Nrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25COztBQUVGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSw0Q0FBNEM7O0FBQzVDO0VBQ0Usd0JBQXdCLEdBQUcsZ0JBQWdCO0VBQzNDLHFCQUFxQixHQUFHLFlBQVk7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZjtFQUNGOztBQUdGLGFBQWE7O0FBRVg7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0FBRUEscUNBQXFDOztBQUNyQztJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0lBQ0UsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7RUFDZDs7QUFFQSxtREFBbUQ7O0FBQ25ELGdCQUFnQix1QkFBdUIsQ0FBQzs7QUFFeEMsa0VBQWtFOztBQUVsRSx5Q0FBeUM7O0FBQ3pDO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCOztJQUVoQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7RUFFbkI7O0FBRUEsOEJBQThCOztBQUM5QjtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjs7QUFFQSw0Q0FBNEM7O0FBQzVDLDJCQUEyQix5QkFBeUI7O0FBRXBELHFJQUFxSTs7QUFDckksT0FBTyxhQUFhLENBQUM7O0FBRXJCLG9DQUFvQzs7QUFHdEM7SUFDSSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztBQUVBLGtDQUFrQyxzQkFBc0IsQ0FBQzs7QUFFekQ7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNwQyxlQUFlLEVBQUUsc0JBQXNCO0lBQ3ZDLFdBQVcsRUFBRSxtQ0FBbUM7SUFDaEQsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxrQkFBa0IsRUFBRSwyQkFBMkI7RUFDakQ7O0FBRUEsaUNBQWlDOztBQUNqQztJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0lBQ0Usb0NBQW9DO0VBQ3RDOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBLDRDQUE0Qzs7QUFDNUM7SUFDRSx3QkFBd0IsR0FBRyxnQkFBZ0I7SUFDM0MscUJBQXFCLEdBQUcsWUFBWTtFQUN0Qzs7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Y7RUFDRiIsImZpbGUiOiJibG9ja3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2hvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwZmY3MDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6NXB4IHNvbGlkICMyQkQ0N0RcclxuICBcclxufVxyXG5cclxuLnN3aXRjaG9mZiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZW1wIHtcclxuICBtYXgtd2lkdGg6MTMwcHg7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuOyAgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi50ZW1wOmhvdmVye1xyXG4gIFxyXG4gIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbn1cclxuLnRlbXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cclxuLnRlbXAge1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG4uZmxvYXRpbmctbWVudSB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOjNweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuIFxyXG4uZmxvYXRpbmctbWVudSBoNCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnJvdy1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG59XHJcbnRkIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDdweCA3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2MywgNjMpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOm5vbmVcclxuICB9XHJcblxyXG5cclxuLyogZHJvcGRvd24gKi9cclxuXHJcbiAgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIERyb3Bkb3duIGJ1dHRvbiBvbiBob3ZlciAmIGZvY3VzICovXHJcbiAgLmRyb3BidG46aG92ZXIsIC5kcm9wYnRuOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBzZWFyY2ggZmllbGQgKi9cclxuICAjbXlJbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHNlYXJjaCBmaWVsZCB3aGVuIGl0IGdldHMgZm9jdXMvY2xpY2tlZCBvbiAqL1xyXG4gICNteUlucHV0OmZvY3VzIHtvdXRsaW5lOiAzcHggc29saWQgI2RkZDt9XHJcbiAgXHJcbiAgLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG4gXHJcbiAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjF9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSAodXNlIEpTIHRvIGFkZCB0aGlzIGNsYXNzIHRvIHRoZSAuZHJvcGRvd24tY29udGVudCBjb250YWluZXIgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGRyb3Bkb3duIGJ1dHRvbikgKi9cclxuICAuc2hvdyB7ZGlzcGxheTpibG9jazt9XHJcblxyXG4gIC8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cclxuICBcclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24gYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuXHJcbiAgLmJ0bi1ncm91cCBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIvaGFuZCBpY29uICovXHJcbiAgICBmbG9hdDogbGVmdDsgLyogRmxvYXQgdGhlIGJ1dHRvbnMgc2lkZSBieSBzaWRlICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZ3JvdXAgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyAvKiBQcmV2ZW50IGRvdWJsZSBib3JkZXJzICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyAoY2xlYXJmaXggaGFjaykgKi9cclxuICAuYnRuLWdyb3VwOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXHJcbiAgLmJ0bi1ncm91cCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xyXG4gIC5leGFtcGxlIHtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXHJcbiAgfVxyXG5cclxuICAuZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTgsIDE1OCk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6bm9uZVxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "/hi3":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class SigninComponent {
    constructor(ds, router, route) {
        this.ds = ds;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.ds.isSignedIn({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                var init_path = '/main/inventory';
                if (res.admin_role == true) {
                    init_path = '/main/dashboard';
                }
                this.router.navigate([init_path]);
            }
        });
        this.route.queryParams.subscribe((par) => {
            if (par.message == "accountmade") {
                this.log = 'Account Created. Ask admin to assign you. Then sign in!';
            }
            if (par.message == "soon") {
                this.log = 'You will be assigned soon!';
            }
            if (par.message == "now") {
                this.log = 'Password updated!';
            }
        });
    }
    signin() {
        if (this.email == '' || this.email == null) {
            return 0;
        }
        if (this.password == '' || this.password == null) {
            return 0;
        }
        this.ds.auth({ user: this.email.toLowerCase(), password: this.password }).subscribe((response) => {
            // document.getElementById("log").innerHTML = response.status;
            if (response.status == "ok") {
                localStorage.setItem('name', response.data.name);
                localStorage.setItem('email', response.data.user);
                localStorage.setItem('token', response.token);
                var init_path = '/main/inventory';
                if (response.data.admin_role == true) {
                    init_path = '/main/dashboard';
                }
                this.router.navigate([init_path]);
            }
            else {
                this.log = response.status;
            }
            return 1;
        });
    }
    sendmail() {
        if (this.email == '' || this.email == null) {
            this.log = 'Enter an email. Then click forgot.';
            return;
        }
        else {
            this.ds.forgotPassword({ user: this.email })
                .subscribe((res) => {
                if (res.status == 'ok') {
                    this.log = 'Sent!';
                }
                else {
                    this.log = res.status;
                }
            });
        }
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 24, vars: 3, consts: [[1, "main"], [1, "wrapper"], [1, "card"], [1, "title"], [1, "title", "title-large"], [1, "title", "title-subs"], ["routerLink", "/signup", 1, "linktext"], [1, "form"], ["f", "ngForm"], [1, "form-group"], ["type", "email", "name", "email", "placeholder", "Email address", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Password", 1, "input-field", 3, "ngModel", "ngModelChange"], [1, "linktext", 3, "click"], ["name", "submit", 1, "input-submit", 3, "click"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New user? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_14_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_a_click_18_listener() { return ctx.sendmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_20_listener() { return ctx.signin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  line-height: 1.5;\r\n  color: #252a32;\r\n  background: #f1f5f8;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\na[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  max-width: 85rem;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0 2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  max-width: 28rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding: 5rem 1.5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  padding: 1.5rem 2rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 4px;\r\n  color: #252a32;\r\n  background: #ffffff;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.icons[_ngcontent-%COMP%] {\r\n  font-size: 1.45rem;\r\n  line-height: inherit;\r\n  margin-right: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n}\r\n\r\n.icons-google[_ngcontent-%COMP%] {\r\n  color: #d32f2f;\r\n}\r\n\r\n.icons-facebook[_ngcontent-%COMP%] {\r\n  color: #0f698a;\r\n}\r\n\r\n.icons-apple[_ngcontent-%COMP%] {\r\n  color: #252a32;\r\n}\r\n\r\n.linktext[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  line-height: inherit;\r\n  color: #148cb8;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.linktext[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  line-height: inherit;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.title-large[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: #252a32;\r\n}\r\n\r\n.title-subs[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  line-height: inherit;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin: 2rem 0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  line-height: inherit;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0.75rem 1.25rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2rem;\r\n  color: #252a32;\r\n  background: #f1f5f8;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  line-height: inherit;\r\n  cursor: pointer;\r\n  padding: 0.65rem 2rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2rem;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background: #65a3c0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line-bar[_ngcontent-%COMP%] {\r\n  flex: auto;\r\n  flex-basis: auto;\r\n  border: none;\r\n  outline: none;\r\n  height: 1.3px;\r\n  background: #bed1df;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line-text[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #252a32;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  line-height: inherit;\r\n  padding: 0.2rem 1rem;\r\n  width: 100%;\r\n  height: auto;\r\n  outline: none;\r\n  border: 1.3px solid #bed1df;\r\n  border-radius: 2rem;\r\n  color: #252a32;\r\n  background: #ffffff;\r\n  transition: all 0.35s ease;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\r\n  background: #cfdde7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFDQTtFQUVFLGFBQWE7RUFHTCxtQkFBbUI7RUFFbkIsOEJBQThCO0VBRTlCLG1CQUFtQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUNBO0VBRUUsYUFBYTtFQUdMLG1CQUFtQjtFQUVuQix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUVVLFVBQVU7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUVFLGFBQWE7RUFHTCxtQkFBbUI7RUFFbkIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUMzQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUVuQiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbiAgYmFja2dyb3VuZDogI2YxZjVmODtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmEsXHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA4NXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiAyOHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogIzI1MmEzMjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxufVxyXG5cclxuLmljb25zIHtcclxuICBmb250LXNpemU6IDEuNDVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uaWNvbnMtZ29vZ2xlIHtcclxuICBjb2xvcjogI2QzMmYyZjtcclxufVxyXG4uaWNvbnMtZmFjZWJvb2sge1xyXG4gIGNvbG9yOiAjMGY2OThhO1xyXG59XHJcbi5pY29ucy1hcHBsZSB7XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbn1cclxuXHJcbi5saW5rdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGNvbG9yOiAjMTQ4Y2I4O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbn1cclxuLmxpbmt0ZXh0OmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcbi50aXRsZS1sYXJnZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbn1cclxuLnRpdGxlLXN1YnMge1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWFpbiAud3JhcHBlciAuZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5mb3JtLWdyb3VwIC5pbnB1dC1maWVsZCB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGNvbG9yOiAjMjUyYTMyO1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjg7XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmZvcm0tZ3JvdXAgLmlucHV0LXN1Ym1pdCB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDAuNjVyZW0gMnJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNjVhM2MwO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5saW5lIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4ubWFpbiAud3JhcHBlciAubGluZS1iYXIge1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgICBmbGV4OiBhdXRvO1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxLjNweDtcclxuICBiYWNrZ3JvdW5kOiAjYmVkMWRmO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5saW5lLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5tZXRob2QtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5tZXRob2QtaXRlbSAuYnRuLWFjdGlvbiB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMS4zcHggc29saWQgI2JlZDFkZjtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGNvbG9yOiAjMjUyYTMyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcclxufVxyXG4ubWFpbiAud3JhcHBlciAubWV0aG9kLWl0ZW0gLmJ0bi1hY3Rpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjZmRkZTc7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "/xin":
/*!********************************************************!*\
  !*** ./src/app/manage-roles/manage-roles.component.ts ***!
  \********************************************************/
/*! exports provided: ManageRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRolesComponent", function() { return ManageRolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ManageRolesComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRolesComponent_tr_17_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.modToggle(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRolesComponent_tr_17_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.salToggle(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", i_r2 % 2 ? "#fff" : "#e4e4e4", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", u_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](u_r1.moderator_role ? "switchon" : "switchoff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](u_r1.salesman_role ? "switchon" : "switchoff");
} }
class ManageRolesComponent {
    constructor(ds) {
        this.ds = ds;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.ds.getUsers({ token: localStorage.getItem('token') }).subscribe((response) => {
            if (response.status == "ok") {
                this.users = response.data;
            }
        });
    }
    modToggle(i) {
        var mod = true;
        if (this.users[i].moderator_role == true) {
            mod = false;
        }
        this.ds.changeRole({ token: localStorage.getItem('token'), user: this.users[i].user, moderator_role: mod }).subscribe((res) => {
            if (res.status == 'ok') {
                this.users[i].moderator_role = mod;
            }
        });
    }
    salToggle(i) {
        var mod = true;
        if (this.users[i].salesman_role == true) {
            mod = false;
        }
        this.ds.changeRole({ token: localStorage.getItem('token'), user: this.users[i].user, salesman_role: mod }).subscribe((res) => {
            if (res.status == 'ok') {
                this.users[i].salesman_role = mod;
            }
        });
    }
}
ManageRolesComponent.ɵfac = function ManageRolesComponent_Factory(t) { return new (t || ManageRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
ManageRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageRolesComponent, selectors: [["app-manage-roles"]], decls: 18, vars: 2, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [1, "manager", 2, "background-color", "#fff", "border-radius", "20px", "padding", "10px", "overflow-x", "scroll"], [3, "style", 4, "ngFor", "ngForOf"], [3, "title"], [1, "asdf"], [3, "click"]], template: function ManageRolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Salesman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageRolesComponent_tr_17_Template, 8, 11, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\r\n  max-width: 85rem;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0 2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  max-width: 28rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding: 5rem 1.5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  padding: 1.5rem 2rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 4px;\r\n  color: #252a32;\r\n  background: #ffffff;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.icons[_ngcontent-%COMP%] {\r\n  font-size: 1.45rem;\r\n  line-height: inherit;\r\n  margin-right: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n}\r\n\r\n.icons-google[_ngcontent-%COMP%] {\r\n  color: #d32f2f;\r\n}\r\n\r\n.icons-facebook[_ngcontent-%COMP%] {\r\n  color: #0f698a;\r\n}\r\n\r\n.icons-apple[_ngcontent-%COMP%] {\r\n  color: #252a32;\r\n}\r\n\r\n.linktext[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  line-height: inherit;\r\n  color: #148cb8;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.linktext[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  line-height: inherit;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.title-large[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: #252a32;\r\n}\r\n\r\n.title-subs[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  line-height: inherit;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin: 2rem 0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  line-height: inherit;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0.75rem 1.25rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2rem;\r\n  color: #252a32;\r\n  background: #f1f5f8;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  line-height: inherit;\r\n  cursor: pointer;\r\n  padding: 0.65rem 2rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2rem;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background: #65a3c0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line-bar[_ngcontent-%COMP%] {\r\n  flex: auto;\r\n  flex-basis: auto;\r\n  border: none;\r\n  outline: none;\r\n  height: 1.3px;\r\n  background: #bed1df;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line-text[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #252a32;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  line-height: inherit;\r\n  padding: 0.2rem 1rem;\r\n  width: 100%;\r\n  height: auto;\r\n  outline: none;\r\n  border: 1.3px solid #bed1df;\r\n  border-radius: 2rem;\r\n  color: #252a32;\r\n  background: #ffffff;\r\n  transition: all 0.35s ease;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\r\n  background: #cfdde7;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n.asdf[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  width:150px;\r\n  }\r\n\r\n.switchon[_ngcontent-%COMP%] {\r\n    background-color: #70ff70;\r\n    height: 34px;\r\n    width: 34px;\r\n    border-radius: 20px;\r\n    border:5px solid #2BD47D\r\n    \r\n}\r\n\r\n.switchoff[_ngcontent-%COMP%] {\r\n    background-color: #c5c5c5;\r\n    height: 34px;\r\n    width: 34px;\r\n    border-radius: 20px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width:400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1yb2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBQ0E7RUFFRSxhQUFhO0VBR0wsbUJBQW1CO0VBRW5CLDhCQUE4QjtFQUU5QixtQkFBbUI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUVFLGFBQWE7RUFHTCxtQkFBbUI7RUFFbkIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFFVSxVQUFVO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFFRSxhQUFhO0VBR0wsbUJBQW1CO0VBRW5CLHVCQUF1QjtFQUV2QixtQkFBbUI7RUFDM0Isb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFFbkIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYOztBQUdGO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25COztBQUVKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6Im1hbmFnZS1yb2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDg1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDI4cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjMjUyYTMyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5pY29ucy1nb29nbGUge1xyXG4gIGNvbG9yOiAjZDMyZjJmO1xyXG59XHJcbi5pY29ucy1mYWNlYm9vayB7XHJcbiAgY29sb3I6ICMwZjY5OGE7XHJcbn1cclxuLmljb25zLWFwcGxlIHtcclxuICBjb2xvcjogIzI1MmEzMjtcclxufVxyXG5cclxuLmxpbmt0ZXh0IHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgY29sb3I6ICMxNDhjYjg7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxufVxyXG4ubGlua3RleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbn1cclxuLnRpdGxlLWxhcmdlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzI1MmEzMjtcclxufVxyXG4udGl0bGUtc3VicyB7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYWluIC53cmFwcGVyIC5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmZvcm0tZ3JvdXAgLmlucHV0LWZpZWxkIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbiAgYmFja2dyb3VuZDogI2YxZjVmODtcclxufVxyXG4ubWFpbiAud3JhcHBlciAuZm9ybS1ncm91cCAuaW5wdXQtc3VibWl0IHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMC42NXJlbSAycmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM2NWEzYzA7XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmxpbmUge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5saW5lLWJhciB7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAgIGZsZXg6IGF1dG87XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDEuM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNiZWQxZGY7XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmxpbmUtdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzI1MmEzMjtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLm1ldGhvZC1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLm1ldGhvZC1pdGVtIC5idG4tYWN0aW9uIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogMC4ycmVtIDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxLjNweCBzb2xpZCAjYmVkMWRmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5tZXRob2QtaXRlbSAuYnRuLWFjdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2NmZGRlNztcclxufVxyXG5cclxudGgsIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFzZGYge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdpZHRoOjE1MHB4O1xyXG4gIH1cclxuXHJcblxyXG4uc3dpdGNob24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwZmY3MDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjo1cHggc29saWQgIzJCRDQ3RFxyXG4gICAgXHJcbn1cclxuXHJcbi5zd2l0Y2hvZmYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOjQwMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\heman\playground\HawkEye\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1VWD":
/*!************************************************!*\
  !*** ./src/app/activity/activity.component.ts ***!
  \************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ActivityComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActivityComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", i_r5 % 2 ? "#fff" : "#e4e4e4", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", c_r4.polished ? "blue" : "", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r4.slabs ? "bx bx-grid" : c_r4.is_child ? "bx bxs-component" : "bx bx-cube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.is_child ? c_r4.block_no.split("zzz000")[0] + " - " + c_r4.block_no.split("zzz000")[1] : c_r4.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background-color:", c_r4.sold ? "#e8f3ff" : "#ffeded", "; border: 1px solid ", c_r4.sold ? "#9bd7ff" : "#ffa9a9", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.sold ? c_r4.sold : c_r4.reserved);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.trade_id);
} }
function ActivityComponent_a_48_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_a_48_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const pl_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.actionp(pl_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pl_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pl_r6);
} }
function ActivityComponent_a_51_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_a_51_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const pr_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.actionp(pr_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pr_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pr_r9);
} }
class ActivityComponent {
    constructor(ds, route, router) {
        this.ds = ds;
        this.route = route;
        this.router = router;
        this.selling = false;
    }
    ngOnInit() {
        this.page = '';
        this.route.queryParams.subscribe((par) => {
            this.page = parseInt(par.page);
            this.fa = (par.fa);
            this.fp = (par.fp);
            this.ds.getAllActivity({ token: localStorage.getItem('token'), page: this.page, fa: this.fa, fp: this.fp }).subscribe((res) => {
                if (res.status == 'ok') {
                    document.getElementById('ax').style.background = '';
                    document.getElementById('tx').style.background = '';
                    document.getElementById('fx').style.background = '';
                    document.getElementById('az').style.background = '';
                    document.getElementById('tz').style.background = '';
                    document.getElementById('fz').style.background = '';
                    this.my_sales = res.data;
                    if (this.fa == 'a' || this.fa == undefined) {
                        document.getElementById('ax').style.background = '#bbd2dd';
                    }
                    if (this.fa == 't') {
                        document.getElementById('tx').style.background = '#bbd2dd';
                    }
                    if (this.fa == 'f') {
                        document.getElementById('fx').style.background = '#bbd2dd';
                    }
                    if (this.fp == 'a' || this.fp == undefined) {
                        document.getElementById('az').style.background = '#bbd2dd';
                    }
                    if (this.fp == 't') {
                        document.getElementById('tz').style.background = '#bbd2dd';
                    }
                    if (this.fp == 'f') {
                        document.getElementById('fz').style.background = '#bbd2dd';
                    }
                    this.max_page = res.max_page;
                    this.page = res.page;
                    this.pagination_right = [];
                    this.pagination_left = [];
                    if (this.page - 1 > 0) {
                        this.pagination_left.push(this.page - 1);
                        if (this.page - 2 > 0) {
                            this.pagination_left.push('...');
                            this.pagination_left.push(1);
                        }
                    }
                    this.pagination_left = this.pagination_left.reverse();
                    if ((this.page + 1) < (this.max_page + 1)) {
                        this.pagination_right.push(this.page + 1);
                        if (this.page + 2 < this.max_page + 1) {
                            this.pagination_right.push('...');
                            this.pagination_right.push(this.max_page);
                        }
                    }
                }
            });
        });
        this.name = localStorage.getItem('name').slice(0, 10);
    }
    actionp(w) {
        if (w != '...') {
            this.router.navigate(['/main/activity'], { queryParams: { page: w, fp: this.fp, fa: this.fa } });
        }
    }
    pFilter(a) {
        this.fp = a;
        document.getElementById("az").style.background = "";
        document.getElementById("tz").style.background = "";
        document.getElementById("fz").style.background = "";
        document.getElementById(a + "z").style.background = "#bbd2dd";
        this.router.navigate(['/main/activity'], { queryParams: { fp: this.fp, fa: this.fa } });
    }
    aFilter(a) {
        this.fa = a;
        document.getElementById("ax").style.background = "";
        document.getElementById("tx").style.background = "";
        document.getElementById("fx").style.background = "";
        document.getElementById(a + "x").style.background = "#bbd2dd";
        this.router.navigate(['/main/activity'], { queryParams: { fp: this.fp, fa: this.fa } });
    }
    load_pdf_block() {
        window.location.href = this.ds.report_url + "/block-margin-report?unit=" + localStorage.getItem('unit') + '&token=' + localStorage.getItem('token');
    }
    load_pdf_slabs() {
        window.location.href = this.ds.report_url + "/slabs-margin-report?unit=" + localStorage.getItem('unit') + '&token=' + localStorage.getItem('token');
    }
}
ActivityComponent.ɵfac = function ActivityComponent_Factory(t) { return new (t || ActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityComponent, selectors: [["app-activity"]], decls: 52, vars: 6, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [2, "width", "80%", "margin-bottom", "10px", "margin-left", "20px"], [1, "btn-group", 2, "margin", "0 auto", "margin-bottom", "5px"], ["id", "az", 2, "border-top-left-radius", "10px", "border-bottom-left-radius", "10px", 3, "click"], ["id", "fz", 3, "click"], ["id", "tz", 2, "border-top-right-radius", "10px", "border-bottom-right-radius", "10px", 3, "click"], [1, "btn-group", 2, "margin", "0 auto"], ["id", "ax", 2, "border-top-left-radius", "10px", "border-bottom-left-radius", "10px", 3, "click"], ["id", "tx", 3, "click"], ["id", "fx", 2, "border-top-right-radius", "10px", "border-bottom-right-radius", "10px", 3, "click"], [4, "ngIf"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "7px 10px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "13px", 3, "click"], [2, "width", "95%", "background-color", "#fff", "border-radius", "20px", "padding", "10px", "overflow-x", "scroll"], [3, "style", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "space-evenly", "align-content", "space-around", "width", "80%", "margin", "0 auto", "flex-wrap", "wrap"], [1, "pagination", 2, "cursor", "pointer"], [3, "click", 4, "ngFor", "ngForOf"], [2, "background-color", "orange", "color", "white", "border-radius", "5px"], [2, "font-size", "1.5em"], [1, "temp"], [3, "click"]], template: function ActivityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_Template_button_click_10_listener() { return ctx.pFilter("a"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_Template_button_click_12_listener() { return ctx.pFilter("f"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_Template_button_click_14_listener() { return ctx.pFilter("t"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Slabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_Template_button_click_18_listener() { return ctx.aFilter("a"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_Template_button_click_20_listener() { return ctx.aFilter("t"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_Template_button_click_22_listener() { return ctx.aFilter("f"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ActivityComponent_div_26_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_Template_button_click_27_listener() { return ctx.load_pdf_block(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Block Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_Template_button_click_30_listener() { return ctx.load_pdf_slabs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Slab Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Block No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "TradeId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ActivityComponent_tr_45_Template, 19, 17, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ActivityComponent_a_48_Template, 2, 1, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ActivityComponent_a_51_Template, 2, 1, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.my_sales.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.my_sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagination_left);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagination_right);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".row-color[_ngcontent-%COMP%] {\r\n  background-color: #d8d8d8;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: orange; \r\n  border: none;\r\n  color: white;\r\n  padding: 7px 7px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n}\r\n.delete-button[_ngcontent-%COMP%] {\r\n  background-color: rgb(255, 63, 63);\r\n  font-size: 14px;\r\n  border:none\r\n}\r\n.temp[_ngcontent-%COMP%] {\r\n  max-width:130px;\r\n  overflow:hidden;  \r\n  margin: auto;\r\n}\r\n\r\n.dropbtn[_ngcontent-%COMP%] {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n  padding: 16px;\r\n  font-size: 16px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n  background-color: #3e8e41;\r\n}\r\n\r\n#myInput[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  padding: 15px 10px 10px 15px;\r\n  border: none;\r\n  border-bottom: 1px solid #ddd;\r\n  width: 230px;\r\n}\r\n\r\n#myInput[_ngcontent-%COMP%]:focus {outline: 3px solid #ddd;}\r\n\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f6f6f6;\r\n  min-width: 200px;\r\n  \r\n  border: 1px solid #ddd;\r\n  z-index: 1;\r\n  width: 230px;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  max-height: 250px;\r\n  \r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: none;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #f1f1f1}\r\n\r\n.show[_ngcontent-%COMP%] {display:block;}\r\n.pagination[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  transition: all 1s linear;\r\n}\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: black;\r\n  float: left;\r\n  padding: 4px 8px;\r\n  text-decoration: none;\r\n}\r\n.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {background-color: #ddd;}\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #e7e7e7; \r\n  color: black;\r\n  padding: 5px 10px; \r\n  cursor: pointer; \r\n  float: left; \r\n  border: none;\r\n  font-size: 14px;\r\n}\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\r\n  border-right: none; \r\n}\r\n\r\n.btn-group[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(226, 226, 226);\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\npadding-top: 10px;\r\npadding-bottom: 10px;\r\npadding-left: 10px;\r\npadding-right: 10px;\r\ntext-align: center;\r\n}\r\n.temp[_ngcontent-%COMP%] {\r\nmax-width:130px;\r\noverflow:hidden;  \r\nmargin: auto;\r\n}\r\n.temp[_ngcontent-%COMP%]:hover{\r\n\r\noverflow-x: visible;\r\n}\r\n.temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\ndisplay: none;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n-ms-overflow-style: none;  \r\nscrollbar-width: none;  \r\n}\r\n.switchon[_ngcontent-%COMP%] {\r\nbackground-color: #70ff70;\r\nheight: 20px;\r\nwidth: 200px;\r\nborder-radius: 20px;\r\nborder:2px solid #2BD47D\r\n\r\n}\r\n.switchoff[_ngcontent-%COMP%] {\r\nbackground-color: #c5c5c5;\r\nheight: 20px;\r\nwidth: 20px;\r\nborder-radius: 20px;\r\nborder:5px solid #c5c5c5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Y7QUFDRjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFHQSxhQUFhO0FBRWI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkO0FBRUEsbURBQW1EO0FBQ25ELGdCQUFnQix1QkFBdUIsQ0FBQztBQUV4QyxrRUFBa0U7QUFFbEUseUNBQXlDO0FBQ3pDO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCOztFQUVoQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7QUFFbkI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFFQSw0Q0FBNEM7QUFDNUMsMkJBQTJCLHlCQUF5QjtBQUVwRCxxSUFBcUk7QUFDckksT0FBTyxhQUFhLENBQUM7QUFHckI7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQSxrQ0FBa0Msc0JBQXNCLENBQUM7QUFFekQ7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQixFQUFFLGlCQUFpQjtFQUNwQyxlQUFlLEVBQUUsc0JBQXNCO0VBQ3ZDLFdBQVcsRUFBRSxtQ0FBbUM7RUFDaEQsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQixFQUFFLDJCQUEyQjtBQUNqRDtBQUVBLGlDQUFpQztBQUNqQztFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBLG9DQUFvQztBQUNwQztFQUNFLG9DQUFvQztBQUN0QztBQUlBO0FBQ0EsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQjtBQUVBO0FBQ0EsZUFBZTtBQUNmLGVBQWU7QUFDZixZQUFZO0FBQ1o7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUVBLDRDQUE0QztBQUM1QztBQUNBLHdCQUF3QixHQUFHLGdCQUFnQjtBQUMzQyxxQkFBcUIsR0FBRyxZQUFZO0FBQ3BDO0FBRUE7QUFDQSx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLFlBQVk7QUFDWixtQkFBbUI7QUFDbkI7O0FBRUE7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1osV0FBVztBQUNYLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIiLCJmaWxlIjoiYWN0aXZpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnJvdy1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxufVxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogN3B4IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2MywgNjMpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXI6bm9uZVxyXG59XHJcbi50ZW1wIHtcclxuICBtYXgtd2lkdGg6MTMwcHg7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuOyAgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLyogZHJvcGRvd24gKi9cclxuXHJcbi5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBEcm9wZG93biBidXR0b24gb24gaG92ZXIgJiBmb2N1cyAqL1xyXG4uZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbn1cclxuXHJcbi8qIFRoZSBzZWFyY2ggZmllbGQgKi9cclxuI215SW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICB3aWR0aDogMjMwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBzZWFyY2ggZmllbGQgd2hlbiBpdCBnZXRzIGZvY3VzL2NsaWNrZWQgb24gKi9cclxuI215SW5wdXQ6Zm9jdXMge291dGxpbmU6IDNweCBzb2xpZCAjZGRkO31cclxuXHJcbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuXHJcbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICBcclxufVxyXG5cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMX1cclxuXHJcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXHJcbi5zaG93IHtkaXNwbGF5OmJsb2NrO31cclxuXHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcblxyXG4uYnRuLWdyb3VwIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzsgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIvaGFuZCBpY29uICovXHJcbiAgZmxvYXQ6IGxlZnQ7IC8qIEZsb2F0IHRoZSBidXR0b25zIHNpZGUgYnkgc2lkZSAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTsgLyogUHJldmVudCBkb3VibGUgYm9yZGVycyAqL1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKGNsZWFyZml4IGhhY2spICovXHJcbi5idG4tZ3JvdXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cclxuLmJ0bi1ncm91cCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxufVxyXG5cclxuXHJcblxyXG50aCwgdGQge1xyXG5wYWRkaW5nLXRvcDogMTBweDtcclxucGFkZGluZy1ib3R0b206IDEwcHg7XHJcbnBhZGRpbmctbGVmdDogMTBweDtcclxucGFkZGluZy1yaWdodDogMTBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGVtcCB7XHJcbm1heC13aWR0aDoxMzBweDtcclxub3ZlcmZsb3c6aGlkZGVuOyAgXHJcbm1hcmdpbjogYXV0bztcclxufVxyXG4udGVtcDpob3ZlcntcclxuXHJcbm92ZXJmbG93LXg6IHZpc2libGU7XHJcbn1cclxuLnRlbXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXHJcbi50ZW1wIHtcclxuLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG4uc3dpdGNob24ge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNzBmZjcwO1xyXG5oZWlnaHQ6IDIwcHg7XHJcbndpZHRoOiAyMDBweDtcclxuYm9yZGVyLXJhZGl1czogMjBweDtcclxuYm9yZGVyOjJweCBzb2xpZCAjMkJENDdEXHJcblxyXG59XHJcblxyXG4uc3dpdGNob2ZmIHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcclxuaGVpZ2h0OiAyMHB4O1xyXG53aWR0aDogMjBweDtcclxuYm9yZGVyLXJhZGl1czogMjBweDtcclxuYm9yZGVyOjVweCBzb2xpZCAjYzVjNWM1O1xyXG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BS3H":
/*!****************************************************!*\
  !*** ./src/app/edit-block/edit-block.component.ts ***!
  \****************************************************/
/*! exports provided: EditBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlockComponent", function() { return EditBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EditBlockComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r6.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r6.unit);
} }
function EditBlockComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", q_r7.quarry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r7.quarry);
} }
function EditBlockComponent_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", q_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r8);
} }
function EditBlockComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", q_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r9);
} }
function EditBlockComponent_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", q_r10.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r10.unit);
} }
function EditBlockComponent_option_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", q_r11.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r11.company);
} }
class EditBlockComponent {
    constructor(ds, route, router) {
        this.ds = ds;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.route.queryParams.subscribe((par) => {
            this.ds.getBlock({ token: localStorage.getItem('token'),
                block_no: par.block }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.c = res.block;
                    this.block_no = par.block;
                    this.c.factor = res.unit.factor;
                    this.c.dim_1 = this.c.dim_1 / this.c.factor;
                    this.c.dim_2 = this.c.dim_2 / this.c.factor;
                    this.c.dim_3 = this.c.dim_3 / this.c.factor;
                    this.ds.getQuarries({ token: localStorage.getItem('token') }).subscribe((res) => {
                        if (res.status == 'ok') {
                            this.quarries = res.data;
                            for (let i = 0; i < this.quarries.length; i++) {
                                if (this.quarries[i].quarry == this.c.quarry) {
                                    this.shades = this.quarries[i].shade.split(',');
                                    this.grades = this.quarries[i].grade.split(',');
                                }
                            }
                        }
                    });
                }
            });
        });
        this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.units = res.data;
            }
        });
        this.ds.getYards({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.yards = res.data;
            }
        });
        this.ds.getCompanies({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.companies = res.data;
            }
        });
    }
    save() {
        this.log = '';
        this.c.dim_1 = (parseFloat(this.c.dim_1) * parseFloat(this.c.factor));
        this.c.dim_2 = (parseFloat(this.c.dim_2) * parseFloat(this.c.factor));
        this.c.dim_3 = (parseFloat(this.c.dim_3) * parseFloat(this.c.factor));
        this.ds.editBlock({ token: localStorage.getItem('token'),
            c: this.c,
            block_no: this.block_no }).subscribe((res) => {
            if (res.status == 'ok') {
                this.log = 'Saved!';
                this.c.dim_1 = (parseFloat(this.c.dim_1) / parseFloat(this.c.factor));
                this.c.dim_2 = (parseFloat(this.c.dim_2) / parseFloat(this.c.factor));
                this.c.dim_3 = (parseFloat(this.c.dim_3) / parseFloat(this.c.factor));
            }
            else {
                this.log = "Failed.";
            }
        });
    }
    fill_shade_grade() {
        for (let i = 0; i < this.quarries.length; i++) {
            if (this.quarries[i].quarry == this.c.quarry) {
                this.shades = this.quarries[i].shade.split(',');
                this.grades = this.quarries[i].grade.split(',');
                return;
            }
        }
        this.shades = [];
        this.grades = [];
    }
    calc_weight() {
        let i;
        for (i = 0; i < this.quarries.length; i++) {
            if (this.quarries[i].quarry == this.c.quarry) {
                let factor_cube = parseFloat(this.c.factor) * parseFloat(this.c.factor) * parseFloat(this.c.factor);
                this.c.weight = ((factor_cube) * parseFloat(this.c.dim_1) * parseFloat(this.c.dim_2) * parseFloat(this.c.dim_3) * 0.000000001 * parseFloat(this.quarries[i].specific_gravity)).toFixed(4);
                break;
            }
        }
    }
    populate_hsn() {
        for (let i = 0; i < this.quarries.length; i++) {
            if (this.c.quarry == this.quarries[i].quarry) {
                this.c.hsn_code = this.quarries[i].hsn_code;
                break;
            }
        }
    }
    change_unit() {
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].unit == this.c.unit) {
                this.c.factor = this.units[i].factor;
            }
        }
    }
    change_unit_helper() {
        this.c.dim_1 = (parseFloat(this.c.dim_1) * parseFloat(this.c.factor));
        this.c.dim_2 = (parseFloat(this.c.dim_2) * parseFloat(this.c.factor));
        this.c.dim_3 = (parseFloat(this.c.dim_3) * parseFloat(this.c.factor));
    }
    change_dims() {
        this.c.dim_1 = (parseFloat(this.c.dim_1) / parseFloat(this.c.factor));
        this.c.dim_2 = (parseFloat(this.c.dim_2) / parseFloat(this.c.factor));
        this.c.dim_3 = (parseFloat(this.c.dim_3) / parseFloat(this.c.factor));
    }
}
EditBlockComponent.ɵfac = function EditBlockComponent_Factory(t) { return new (t || EditBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditBlockComponent, selectors: [["app-edit-block"]], decls: 148, vars: 30, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [2, "float", "right"], ["name", "gsfgwefwesrd", "id", "grd", 2, "width", "50px", 3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [2, "margin-left", "20px"], [2, "height", "30px"], [1, "sales-boxes"], [1, "recent-sales", "box"], [1, "input-block"], ["name", "date", "type", "date", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "quarry", "id", "quarry", 2, "width", "200px", 3, "ngModel", "change", "ngModelChange"], ["name", "hwt", "id", "wrthh", 2, "width", "200px", 3, "ngModel", "ngModelChange"], ["name", "grade", "id", "wh", 2, "width", "200px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "height", 1, "input-field", 2, "width", "70px", 3, "ngModel", "change", "ngModelChange"], ["type", "number", "name", "width", 1, "input-field", 2, "width", "70px", 3, "ngModel", "change", "ngModelChange"], ["type", "number", "name", "breadth", 1, "input-field", 2, "width", "70px", 3, "ngModel", "change", "ngModelChange"], ["name", "unitt", "id", "wth", 2, "width", "100px", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "name", "layer", 1, "input-field", 2, "width", "70px", 3, "ngModel", "ngModelChange"], ["name", "weight", "type", "number", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "hsn_code", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "payment", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "transportation_cost", "type", "text", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "fewf", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "wrgd", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "hyws", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "paywmenjt", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "psafymjenst", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "note", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "ccmpny12", "id", "wh", 2, "width", "200px", 3, "ngModel", "ngModelChange"], [2, "margin", "20px", "color", "red"], [2, "background-color", "#00a0d1", "border", "none", "color", "white", "padding", "15px 32px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", "margin-left", "20px", "margin-bottom", "20px", 3, "click"], [3, "value"]], template: function EditBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Unit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditBlockComponent_Template_select_change_10_listener() { ctx.change_unit_helper(); ctx.change_unit(); return ctx.change_dims(); })("ngModelChange", function EditBlockComponent_Template_select_ngModelChange_10_listener($event) { return ctx.c.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditBlockComponent_option_12_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Block ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_27_listener($event) { return ctx.c.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Quarry: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditBlockComponent_Template_select_change_33_listener() { ctx.fill_shade_grade(); ctx.calc_weight(); return ctx.populate_hsn(); })("ngModelChange", function EditBlockComponent_Template_select_ngModelChange_33_listener($event) { return ctx.c.quarry = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, EditBlockComponent_option_35_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Shade: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_select_ngModelChange_40_listener($event) { return ctx.c.shade = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, EditBlockComponent_option_42_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Grade: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_select_ngModelChange_47_listener($event) { return ctx.c.grade = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, EditBlockComponent_option_49_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "L :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditBlockComponent_Template_input_change_54_listener() { return ctx.calc_weight(); })("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_54_listener($event) { return ctx.c.dim_1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "H :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditBlockComponent_Template_input_change_58_listener() { return ctx.calc_weight(); })("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_58_listener($event) { return ctx.c.dim_2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "W :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditBlockComponent_Template_input_change_62_listener() { return ctx.calc_weight(); })("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_62_listener($event) { return ctx.c.dim_3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditBlockComponent_Template_select_change_63_listener() { ctx.change_unit(); return ctx.calc_weight(); })("ngModelChange", function EditBlockComponent_Template_select_ngModelChange_63_listener($event) { return ctx.c.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, EditBlockComponent_option_65_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Layer Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_70_listener($event) { return ctx.c.layer_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Weight :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_76_listener($event) { return ctx.c.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "[ton]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "HSN Code :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_84_listener($event) { return ctx.c.hsn_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_90_listener($event) { return ctx.c.cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Transportation Cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_96_listener($event) { return ctx.c.transportation_cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Invoice no. :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_102_listener($event) { return ctx.c.invoice_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Truck no :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_108_listener($event) { return ctx.c.truck_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Builty no :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_114_listener($event) { return ctx.c.builty_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Royalty no :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_120_listener($event) { return ctx.c.royalty_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "E-way bill no :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_126_listener($event) { return ctx.c.eway_bill_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Note : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_input_ngModelChange_133_listener($event) { return ctx.c.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Company: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlockComponent_Template_select_ngModelChange_138_listener($event) { return ctx.c.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, EditBlockComponent_option_140_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditBlockComponent_Template_button_click_146_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Block Number: ", ctx.c.block_no, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.quarry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quarries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.shade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.grade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.dim_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.dim_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.dim_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.layer_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.hsn_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.transportation_cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.invoice_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.truck_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.builty_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.royalty_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.eway_bill_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYmxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYIiwiZmlsZSI6ImVkaXQtYmxvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXHJcbiAgbWFyZ2luOiAwOyBcclxufSJdfQ== */"] });


/***/ }),

/***/ "BSPV":
/*!**********************************************!*\
  !*** ./src/app/parties/parties.component.ts ***!
  \**********************************************/
/*! exports provided: PartiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartiesComponent", function() { return PartiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PartiesComponent_tr_35_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.party_address, " ");
} }
function PartiesComponent_tr_35_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PartiesComponent_tr_35_span_6_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r1.party_address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r1.party_address);
} }
function PartiesComponent_tr_35_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.gstin, " ");
} }
function PartiesComponent_tr_35_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PartiesComponent_tr_35_span_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r1.gstin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r1.gstin);
} }
function PartiesComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PartiesComponent_tr_35_div_5_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PartiesComponent_tr_35_span_6_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PartiesComponent_tr_35_div_8_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PartiesComponent_tr_35_span_9_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PartiesComponent_tr_35_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const i_r2 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.edit(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PartiesComponent_tr_35_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const i_r2 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.delete(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.party, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.edit == true ? "Save" : "Edit", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
} }
class PartiesComponent {
    constructor(ds) {
        this.ds = ds;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.ds.getParties({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.parties = res.data;
            }
        });
    }
    save() {
        if (this.party == null || this.party == '') {
            this.log = 'Enter Party.';
            return 0;
        }
        for (var i = 0; i < this.parties.length; i++) {
            if (this.parties[i].party == this.party) {
                this.party_address = this.parties[i].party_address;
                break;
            }
        }
        this.ds.addParty({
            token: localStorage.getItem('token'),
            party: this.party,
            party_address: this.party_address,
            gstin: this.gstin
        }).subscribe((res) => {
            if (res.status == 'ok') {
                // this.router.navigate(['/main/inventory']);
                this.log = 'Saved!';
                this.parties = [{ party: this.party, party_address: this.party_address, gstin: this.gstin }].concat(this.parties);
                this.party = '';
                this.party_address = '';
                this.gstin;
            }
            else {
                this.log = 'Failed. Already Exists.';
            }
        });
    }
    delete(i) {
        if (window.confirm('Delete party?')) {
            this.ds.deleteParty({ token: localStorage.getItem('token'), party: this.parties[i].party }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.parties.splice(i, 1);
                }
            });
        }
    }
    edit(i) {
        if (this.parties[i].edit == true) {
            this.ds.editParty({ token: localStorage.getItem('token'), p: this.parties[i] })
                .subscribe((res) => {
                if (res.status == "ok") {
                    this.parties[i].edit = false;
                }
            });
        }
        else {
            this.parties[i].edit = true;
        }
    }
}
PartiesComponent.ɵfac = function PartiesComponent_Factory(t) { return new (t || PartiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
PartiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PartiesComponent, selectors: [["app-parties"]], decls: 36, vars: 6, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [1, "sales-boxes"], [1, "top-sales", "box", 2, "width", "95%"], [2, "border-bottom", "1px dashed black"], ["name", "date1", "type", "text", "autocomplete", "off", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "quarry", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "quarrssy", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "7px 15px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "click"], [4, "ngFor", "ngForOf"], [1, "temp"], ["class", "temp", 4, "ngIf"], [4, "ngIf"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "8px 14px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "13px", 3, "click"], [1, "delete-button", 2, "border-radius", "20px", "text-decoration", "none", "height", "30px", "width", "30px", 3, "click"], ["type", "text", 2, "width", "170px", 3, "ngModel", "ngModelChange"]], template: function PartiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Parties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PartiesComponent_Template_input_ngModelChange_13_listener($event) { return ctx.party = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PartiesComponent_Template_input_ngModelChange_15_listener($event) { return ctx.party_address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PartiesComponent_Template_input_ngModelChange_17_listener($event) { return ctx.gstin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PartiesComponent_Template_button_click_19_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Party Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "GSTIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PartiesComponent_tr_35_Template, 16, 21, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.party);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.party_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gstin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parties);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: auto;\r\n  width: auto;\r\n}\r\n\r\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]{\r\n  width: auto;\r\n  padding: 20px 30px 20px 30px;\r\n}\r\n\r\n.sales-boxes[_ngcontent-%COMP%]{\r\n  margin:20px;\r\n}\r\n\r\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n  max-width: 300px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n}\r\n\r\n.row-color[_ngcontent-%COMP%] {\r\n  background-color: #d8d8d8;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: orange; \r\n  border: none;\r\n  color: white;\r\n  padding: 7px 7px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n}\r\n\r\n.delete-button[_ngcontent-%COMP%] {\r\n  background-color: rgb(255, 158, 158);\r\n  font-size: 14px;\r\n  border:none\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n  max-width:130px;\r\n  overflow:hidden;  \r\n}\r\n\r\n.temp[_ngcontent-%COMP%]:hover{\r\n  \r\n  overflow-x: visible;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n  -ms-overflow-style: none;  \r\n  scrollbar-width: none;  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUlBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDRDQUE0Qzs7QUFDNUM7RUFDRSx3QkFBd0IsR0FBRyxnQkFBZ0I7RUFDM0MscUJBQXFCLEdBQUcsWUFBWTtBQUN0QyIsImZpbGUiOiJwYXJ0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FsZXMtYm94ZXMgLnRvcC1zYWxlcyBsaSBhIGltZ3tcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC50b3Atc2FsZXN7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggMzBweDtcclxufVxyXG5cclxuLnNhbGVzLWJveGVze1xyXG4gIG1hcmdpbjoyMHB4O1xyXG59XHJcblxyXG4uaG9tZS1zZWN0aW9uIG5hdiAuc2VhcmNoLWJveHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpe1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcblxyXG4ucm93LWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG59XHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA3cHggN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZGVsZXRlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTU4LCAxNTgpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXI6bm9uZVxyXG59XHJcblxyXG5cclxudGgsIHRkIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRlbXAge1xyXG4gIG1heC13aWR0aDoxMzBweDtcclxuICBvdmVyZmxvdzpoaWRkZW47ICBcclxufVxyXG4udGVtcDpob3ZlcntcclxuICBcclxuICBvdmVyZmxvdy14OiB2aXNpYmxlO1xyXG59XHJcblxyXG4udGVtcDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xyXG4udGVtcCB7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXHJcbn0iXX0= */"] });


/***/ }),

/***/ "Cg25":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function InventoryComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.search(i_r4, ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r3.warehouse);
} }
function InventoryComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.search(i_r8, "#"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", b_r7.block_number, "");
} }
function InventoryComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_23_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const i_r12 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.action(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", i_r12 % 2 ? "#fff" : "#e4e4e4", "; cursor:pointer;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r11.warehouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r11.warehouse_address);
} }
class InventoryComponent {
    constructor(ds, router) {
        this.ds = ds;
        this.router = router;
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false
    }
    ngOnInit() {
        document.getElementById("myDropdown").classList.toggle("show");
        this.name = localStorage.getItem('name').slice(0, 10);
        this.ds.allBlocks({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.blocks = res.data;
            }
        });
        this.ds.getYards({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.warehouses = res.data;
            }
        });
    }
    filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toLowerCase();
        var div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        var txtValue;
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].innerText.toLowerCase();
            if (txtValue.indexOf(filter) > -1) {
                a[i].style.display = "block";
            }
            else {
                a[i].style.display = "none";
            }
        }
        if (filter == '') {
            document.getElementById('cont').style.display = 'none';
        }
        else {
            document.getElementById('cont').style.display = 'block';
        }
    }
    search(i, c) {
        if (c == '#') {
            this.router.navigate(['/main/block'], { queryParams: { block: this.blocks[i].block_number } });
        }
        if (c == '') {
            this.router.navigate(['/main/blocks'], { queryParams: { warehouse: this.warehouses[i].warehouse } });
        }
        document.getElementsByTagName('input')[0].value = '';
        document.getElementById('cont').style.display = 'none';
    }
    action(i) {
        this.router.navigate(['/main/blocks'], { queryParams: { warehouse: this.warehouses[i].warehouse } });
    }
}
InventoryComponent.ɵfac = function InventoryComponent_Factory(t) { return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
InventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventoryComponent, selectors: [["app-inventory"]], decls: 24, vars: 4, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], ["id", "myDropdown", 1, "dropdown-content", 2, "margin-left", "15px"], ["name", "ser", "type", "text", "placeholder", "Search", "id", "myInput", "autocomplete", "off", 3, "keyup"], ["id", "cont", 1, "cont"], [3, "click", 4, "ngFor", "ngForOf"], [2, "margin-top", "70px"], [2, "width", "95%", "background-color", "#fff", "border-radius", "20px", "padding", "10px", "overflow-x", "scroll"], [3, "style", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "bx", "bxs-buildings", 2, "font-size", "1.5em"], [1, "temp"]], template: function InventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InventoryComponent_Template_input_keyup_9_listener() { return ctx.filterFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InventoryComponent_a_11_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InventoryComponent_a_12_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InventoryComponent_tr_23_Template, 12, 5, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.warehouses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.warehouses);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".row-color[_ngcontent-%COMP%] {\r\n    background-color: #d8d8d8;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n    background-color: orange; \r\n    border: none;\r\n    color: white;\r\n    padding: 7px 7px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n  }\r\n.delete-button[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 63, 63);\r\n    font-size: 14px;\r\n    border:none\r\n  }\r\n\r\n.dropbtn[_ngcontent-%COMP%] {\r\n    background-color: #04AA6D;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n    background-color: #3e8e41;\r\n  }\r\n\r\n#myInput[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 15px 10px 10px 15px;\r\n    border: none;\r\n    border-bottom: 1px solid #ddd;\r\n    width: 230px;\r\n  }\r\n\r\n#myInput[_ngcontent-%COMP%]:focus {outline: 3px solid #ddd;}\r\n\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f6f6f6;\r\n    min-width: 200px;\r\n    \r\n    border: 1px solid #ddd;\r\n    z-index: 1;\r\n    width: 230px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    max-height: 250px;\r\n    \r\n  }\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: none;\r\n  }\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #f1f1f1}\r\n\r\n.show[_ngcontent-%COMP%] {display:block;}\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background-color: #04AA6D; \r\n    border: 1px solid green; \r\n    color: white; \r\n    padding: 10px 24px; \r\n    cursor: pointer; \r\n    float: left; \r\n  }\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\r\n    border-right: none; \r\n  }\r\n\r\n.btn-group[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: #3e8e41;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7QUFFQTtJQUNFLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2Y7RUFDRjtBQUdGLGFBQWE7QUFFWDtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUVBLHFDQUFxQztBQUNyQztJQUNFLHlCQUF5QjtFQUMzQjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNFLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0VBQ2Q7QUFFQSxtREFBbUQ7QUFDbkQsZ0JBQWdCLHVCQUF1QixDQUFDO0FBRXhDLGtFQUFrRTtBQUVsRSx5Q0FBeUM7QUFDekM7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7O0lBRWhCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCOztFQUVuQjtBQUVBLDhCQUE4QjtBQUM5QjtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtBQUVBLDRDQUE0QztBQUM1QywyQkFBMkIseUJBQXlCO0FBRXBELHFJQUFxSTtBQUNySSxPQUFPLGFBQWEsQ0FBQztBQUdyQjtJQUNFLHlCQUF5QixFQUFFLHFCQUFxQjtJQUNoRCx1QkFBdUIsRUFBRSxpQkFBaUI7SUFDMUMsWUFBWSxFQUFFLGVBQWU7SUFDN0Isa0JBQWtCLEVBQUUsaUJBQWlCO0lBQ3JDLGVBQWUsRUFBRSxzQkFBc0I7SUFDdkMsV0FBVyxFQUFFLG1DQUFtQztFQUNsRDtBQUVBO0lBQ0Usa0JBQWtCLEVBQUUsMkJBQTJCO0VBQ2pEO0FBRUEsaUNBQWlDO0FBQ2pDO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0FBRUEsb0NBQW9DO0FBQ3BDO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6ImludmVudG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ucm93LWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbn1cclxudGQge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogN3B4IDdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5kZWxldGUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDYzLCA2Myk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6bm9uZVxyXG4gIH1cclxuXHJcblxyXG4vKiBkcm9wZG93biAqL1xyXG5cclxuICAuZHJvcGJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLyogRHJvcGRvd24gYnV0dG9uIG9uIGhvdmVyICYgZm9jdXMgKi9cclxuICAuZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHNlYXJjaCBmaWVsZCAqL1xyXG4gICNteUlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweCAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHNlYXJjaCBmaWVsZCB3aGVuIGl0IGdldHMgZm9jdXMvY2xpY2tlZCBvbiAqL1xyXG4gICNteUlucHV0OmZvY3VzIHtvdXRsaW5lOiAzcHggc29saWQgI2RkZDt9XHJcbiAgXHJcbiAgLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG4gXHJcbiAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjF9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSAodXNlIEpTIHRvIGFkZCB0aGlzIGNsYXNzIHRvIHRoZSAuZHJvcGRvd24tY29udGVudCBjb250YWluZXIgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGRyb3Bkb3duIGJ1dHRvbikgKi9cclxuICAuc2hvdyB7ZGlzcGxheTpibG9jazt9XHJcblxyXG5cclxuICAuYnRuLWdyb3VwIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEOyAvKiBHcmVlbiBiYWNrZ3JvdW5kICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgLyogR3JlZW4gYm9yZGVyICovXHJcbiAgICBjb2xvcjogd2hpdGU7IC8qIFdoaXRlIHRleHQgKi9cclxuICAgIHBhZGRpbmc6IDEwcHggMjRweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIvaGFuZCBpY29uICovXHJcbiAgICBmbG9hdDogbGVmdDsgLyogRmxvYXQgdGhlIGJ1dHRvbnMgc2lkZSBieSBzaWRlICovXHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZ3JvdXAgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyAvKiBQcmV2ZW50IGRvdWJsZSBib3JkZXJzICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyAoY2xlYXJmaXggaGFjaykgKi9cclxuICAuYnRuLWdyb3VwOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXHJcbiAgLmJ0bi1ncm91cCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxuICB9Il19 */"] });


/***/ }),

/***/ "EM0T":
/*!******************************************!*\
  !*** ./src/app/yards/yards.component.ts ***!
  \******************************************/
/*! exports provided: YardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YardsComponent", function() { return YardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function YardsComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YardsComponent_tr_31_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.delete(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.yard, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.yard_address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("product ", i_r2 % 2 ? "" : "row-color", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("price ", i_r2 % 2 ? "" : "row-color", "");
} }
class YardsComponent {
    constructor(ds) {
        this.ds = ds;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.ds.getYards({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.yards = res.data;
            }
        });
    }
    save() {
        if (this.yard == null || this.yard == '') {
            this.log = 'Enter Yard.';
            return 0;
        }
        for (var i = 0; i < this.yards.length; i++) {
            if (this.yards[i].yard == this.yard) {
                this.yard_address = this.yards[i].yard_address;
                break;
            }
        }
        this.ds.addYard({
            token: localStorage.getItem('token'),
            yard: this.yard,
            yard_address: this.yard_address
        }).subscribe((res) => {
            if (res.status == 'ok') {
                // this.router.navigate(['/main/inventory']);
                this.log = 'Saved!';
                this.yards = [{ yard: this.yard, yard_address: this.yard_address }].concat(this.yards);
                this.yard = '';
                this.yard_address = '';
            }
            else {
                this.log = 'Failed. Already Exists.';
            }
        });
    }
    delete(i) {
        if (window.confirm('Delete yard?')) {
            this.ds.deleteYard({ token: localStorage.getItem('token'), yard: this.yards[i].yard }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.yards.splice(i, 1);
                }
            });
        }
    }
}
YardsComponent.ɵfac = function YardsComponent_Factory(t) { return new (t || YardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
YardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YardsComponent, selectors: [["app-yards"]], decls: 32, vars: 5, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [1, "sales-boxes"], [1, "top-sales", "box", 2, "width", "95%"], [2, "border-bottom", "1px dashed black"], ["name", "date1", "type", "text", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "quarry", "type", "text", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "7px 15px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "click"], [4, "ngFor", "ngForOf"], [1, "temp"], [1, "delete-button", 2, "border-radius", "20px", "text-decoration", "none", "height", "30px", "width", "30px", 3, "click"], [1, "bx", "bx-right-arrow-alt", 2, "color", "blue", "font-size", "20px"]], template: function YardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Yards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YardsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.yard = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YardsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.yard_address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YardsComponent_Template_button_click_17_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Yard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Yard Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, YardsComponent_tr_31_Template, 12, 14, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yard_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yards);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    width: auto;\r\n  }\r\n  \r\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    padding: 20px 30px 20px 30px;\r\n  }\r\n  \r\n  .sales-boxes[_ngcontent-%COMP%]{\r\n    margin:20px;\r\n  }\r\n  \r\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n    max-width: 300px;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n  }\r\n  \r\n  .row-color[_ngcontent-%COMP%] {\r\n    background-color: #d8d8d8;\r\n  }\r\n  \r\n  .button[_ngcontent-%COMP%] {\r\n    background-color: orange; \r\n    border: none;\r\n    color: white;\r\n    padding: 7px 7px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .delete-button[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 158, 158);\r\n    font-size: 14px;\r\n    border:none\r\n  }\r\n  \r\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%] {\r\n    max-width:130px;\r\n    overflow:hidden;  \r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%]:hover{\r\n    \r\n    overflow-x: visible;\r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  \r\n  \r\n  \r\n  .temp[_ngcontent-%COMP%] {\r\n    -ms-overflow-style: none;  \r\n    scrollbar-width: none;  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFJQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZjtFQUNGOztFQUdBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUNBOztJQUVFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQSw0Q0FBNEM7O0VBQzVDO0lBQ0Usd0JBQXdCLEdBQUcsZ0JBQWdCO0lBQzNDLHFCQUFxQixHQUFHLFlBQVk7RUFDdEMiLCJmaWxlIjoieWFyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIGEgaW1ne1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC50b3Atc2FsZXN7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zYWxlcy1ib3hlc3tcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2VhcmNoLWJveHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGlua3MgbGl7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5yb3ctY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogN3B4IDdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTU4LCAxNTgpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOm5vbmVcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGVtcCB7XHJcbiAgICBtYXgtd2lkdGg6MTMwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47ICBcclxuICB9XHJcbiAgLnRlbXA6aG92ZXJ7XHJcbiAgICBcclxuICAgIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZW1wOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cclxuICAudGVtcCB7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "Hipp":
/*!************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class ChangepasswordComponent {
    constructor(ds, router, route) {
        this.ds = ds;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((par) => {
            this.forgot_password = par.forgot;
            this.email = par.email;
            this.forgot_password_secret = par.forgot_password_secret;
            console.log(this.forgot_password, this.email, this.forgot_password_secret);
            if (par.forgot == 1) {
                document.getElementById("forgotpassword").style.display = 'block';
            }
            if (par.forgot == 0) {
                document.getElementById("changepassword").style.display = 'block';
            }
        });
    }
    fchange() {
        this.ds.changePassword({ forgot: this.forgot_password, user: this.email, forgot_password_secret: this.forgot_password_secret, newpass: this.newpass })
            .subscribe((res) => {
            if (res.status == 'ok') {
                this.router.navigate(['/'], { queryParams: { message: "now" } });
            }
            else {
                this.log = res.status;
            }
        });
    }
    nfchange() {
        this.ds.changePassword({ forgot: this.forgot_password, user: localStorage.getItem('email'), oldpass: this.oldpass, newpass: this.newpass })
            .subscribe((res) => {
            if (res.status == 'ok') {
                alert("Login with new password");
                this.router.navigate(['/main']);
            }
            else {
                this.log = res.status;
            }
        });
    }
}
ChangepasswordComponent.ɵfac = function ChangepasswordComponent_Factory(t) { return new (t || ChangepasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ChangepasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangepasswordComponent, selectors: [["app-changepassword"]], decls: 22, vars: 4, consts: [[1, "main"], [1, "wrapper"], [1, "card"], [1, "title"], [1, "title", "title-large"], ["id", "forgotpassword", 1, "form", 2, "display", "none"], [1, "form-group"], ["type", "password", "name", "aapassword", "id", "f_password", "placeholder", "New Password", 1, "input-field", 3, "ngModel", "ngModelChange"], [1, "input-submit", 3, "click"], ["id", "changepassword", 1, "form", 2, "display", "none"], ["type", "password", "name", "apassword", "id", "c_oldpassword", "placeholder", "Old Password", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "bpassword", "id", "c_newpassword", "placeholder", "New Password", 1, "input-field", 3, "ngModel", "ngModelChange"]], template: function ChangepasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangepasswordComponent_Template_input_ngModelChange_8_listener($event) { return ctx.newpass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangepasswordComponent_Template_button_click_10_listener() { return ctx.fchange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangepasswordComponent_Template_input_ngModelChange_14_listener($event) { return ctx.oldpass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangepasswordComponent_Template_input_ngModelChange_16_listener($event) { return ctx.newpass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangepasswordComponent_Template_button_click_18_listener() { return ctx.nfchange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newpass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oldpass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newpass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  line-height: 1.5;\r\n  color: #252a32;\r\n  background: #f1f5f8;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\na[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  max-width: 85rem;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0 2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  max-width: 28rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding: 5rem 1.5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  padding: 1.5rem 2rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 4px;\r\n  color: #252a32;\r\n  background: #ffffff;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.icons[_ngcontent-%COMP%] {\r\n  font-size: 1.45rem;\r\n  line-height: inherit;\r\n  margin-right: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n}\r\n\r\n.icons-google[_ngcontent-%COMP%] {\r\n  color: #d32f2f;\r\n}\r\n\r\n.icons-facebook[_ngcontent-%COMP%] {\r\n  color: #0f698a;\r\n}\r\n\r\n.icons-apple[_ngcontent-%COMP%] {\r\n  color: #252a32;\r\n}\r\n\r\n.linktext[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  line-height: inherit;\r\n  color: #148cb8;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.linktext[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  line-height: inherit;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.title-large[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: #252a32;\r\n}\r\n\r\n.title-subs[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  line-height: inherit;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin: 2rem 0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  line-height: inherit;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0.75rem 1.25rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2rem;\r\n  color: #252a32;\r\n  background: #f1f5f8;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  line-height: inherit;\r\n  cursor: pointer;\r\n  padding: 0.65rem 2rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2rem;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background: #65a3c0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line-bar[_ngcontent-%COMP%] {\r\n  flex: auto;\r\n  flex-basis: auto;\r\n  border: none;\r\n  outline: none;\r\n  height: 1.3px;\r\n  background: #bed1df;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line-text[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #252a32;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  line-height: inherit;\r\n  padding: 0.2rem 1rem;\r\n  width: 100%;\r\n  height: auto;\r\n  outline: none;\r\n  border: 1.3px solid #bed1df;\r\n  border-radius: 2rem;\r\n  color: #252a32;\r\n  background: #ffffff;\r\n  transition: all 0.35s ease;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\r\n  background: #cfdde7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsNERBQTREO0VBQzVELGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUNBO0VBRUUsYUFBYTtFQUdMLG1CQUFtQjtFQUVuQiw4QkFBOEI7RUFFOUIsbUJBQW1CO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBQ0E7RUFFRSxhQUFhO0VBR0wsbUJBQW1CO0VBRW5CLHVCQUF1QjtFQUV2QixtQkFBbUI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBRVUsVUFBVTtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBRUUsYUFBYTtFQUdMLG1CQUFtQjtFQUVuQix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQzNCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0VBRW5CLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjMjUyYTMyO1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5hLFxyXG5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogODVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIG1heC13aWR0aDogMjhyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogNXJlbSAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuXHJcbi5pY29ucyB7XHJcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLmljb25zLWdvb2dsZSB7XHJcbiAgY29sb3I6ICNkMzJmMmY7XHJcbn1cclxuLmljb25zLWZhY2Vib29rIHtcclxuICBjb2xvcjogIzBmNjk4YTtcclxufVxyXG4uaWNvbnMtYXBwbGUge1xyXG4gIGNvbG9yOiAjMjUyYTMyO1xyXG59XHJcblxyXG4ubGlua3RleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBjb2xvcjogIzE0OGNiODtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcbi5saW5rdGV4dDpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxufVxyXG4udGl0bGUtbGFyZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMjUyYTMyO1xyXG59XHJcbi50aXRsZS1zdWJzIHtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1haW4gLndyYXBwZXIgLmZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDJyZW0gMDtcclxufVxyXG4ubWFpbiAud3JhcHBlciAuZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4ubWFpbiAud3JhcHBlciAuZm9ybS1ncm91cCAuaW5wdXQtZmllbGQge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBjb2xvcjogIzI1MmEzMjtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY4O1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5mb3JtLWdyb3VwIC5pbnB1dC1zdWJtaXQge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwLjY1cmVtIDJyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogIzY1YTNjMDtcclxufVxyXG4ubWFpbiAud3JhcHBlciAubGluZSB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmxpbmUtYmFyIHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICAgICAgZmxleDogYXV0bztcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogMS4zcHg7XHJcbiAgYmFja2dyb3VuZDogI2JlZDFkZjtcclxufVxyXG4ubWFpbiAud3JhcHBlciAubGluZS10ZXh0IHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMjUyYTMyO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG4ubWFpbiAud3JhcHBlciAubWV0aG9kLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG4ubWFpbiAud3JhcHBlciAubWV0aG9kLWl0ZW0gLmJ0bi1hY3Rpb24ge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDEuM3B4IHNvbGlkICNiZWQxZGY7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBjb2xvcjogIzI1MmEzMjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLm1ldGhvZC1pdGVtIC5idG4tYWN0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2ZkZGU3O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "IMq3":
/*!************************************************!*\
  !*** ./src/app/quarries/quarries.component.ts ***!
  \************************************************/
/*! exports provided: QuarriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuarriesComponent", function() { return QuarriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function QuarriesComponent_tr_55_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.quarry_address, " ");
} }
function QuarriesComponent_tr_55_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_tr_55_span_6_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r1.quarry_address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r1.quarry_address);
} }
function QuarriesComponent_tr_55_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.specific_gravity, " ");
} }
function QuarriesComponent_tr_55_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_tr_55_span_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r1.specific_gravity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r1.specific_gravity);
} }
function QuarriesComponent_tr_55_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.block_type, " ");
} }
function QuarriesComponent_tr_55_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_tr_55_span_12_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r1.block_type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r1.block_type);
} }
function QuarriesComponent_tr_55_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.shade, " ");
} }
function QuarriesComponent_tr_55_span_15_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_tr_55_span_15_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r1.shade = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r1.shade);
} }
function QuarriesComponent_tr_55_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.grade, " ");
} }
function QuarriesComponent_tr_55_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_tr_55_span_18_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r1.grade = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r1.grade);
} }
function QuarriesComponent_tr_55_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.hsn_code, " ");
} }
function QuarriesComponent_tr_55_span_21_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_tr_55_span_21_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r1.hsn_code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r1.hsn_code);
} }
function QuarriesComponent_tr_55_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.slabs_hsn_code, " ");
} }
function QuarriesComponent_tr_55_span_24_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_tr_55_span_24_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r1.slabs_hsn_code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r1.slabs_hsn_code);
} }
function QuarriesComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuarriesComponent_tr_55_div_5_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuarriesComponent_tr_55_span_6_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuarriesComponent_tr_55_div_8_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuarriesComponent_tr_55_span_9_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuarriesComponent_tr_55_div_11_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuarriesComponent_tr_55_span_12_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuarriesComponent_tr_55_div_14_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuarriesComponent_tr_55_span_15_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, QuarriesComponent_tr_55_div_17_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, QuarriesComponent_tr_55_span_18_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, QuarriesComponent_tr_55_div_20_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuarriesComponent_tr_55_span_21_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, QuarriesComponent_tr_55_div_23_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, QuarriesComponent_tr_55_span_24_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuarriesComponent_tr_55_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const i_r2 = ctx.index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.edit(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuarriesComponent_tr_55_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const i_r2 = ctx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.delete(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.quarry, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("price ", i_r2 % 2 ? "" : "row-color", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("price ", i_r2 % 2 ? "" : "row-color", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("price ", i_r2 % 2 ? "" : "row-color", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("price ", i_r2 % 2 ? "" : "row-color", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("price ", i_r2 % 2 ? "" : "row-color", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r1.edit == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.edit == true ? "Save" : "Edit", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("product ", i_r2 % 2 ? "" : "row-color", "");
} }
class QuarriesComponent {
    constructor(ds) {
        this.ds = ds;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.ds.getQuarries({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.quarries = res.data;
            }
        });
    }
    save() {
        if (this.quarry == null || this.quarry == '') {
            this.log = 'Enter Quarry.';
            return 0;
        }
        // for (var i=0; i<this.quarries.length; i++) {
        //   if (this.quarries[i].quarry == this.quarry) {
        //     this.quarry_address = this.quarries[i].quarry_address;
        //     this.specific_gravity = this.quarries[i].specific_gravity;
        //     this.block_type = this.quarries[i].block_type
        //     break;
        //   }
        // }
        // alert(this.quarry_address)
        this.ds.addQuarry({
            token: localStorage.getItem('token'),
            quarry: this.quarry,
            quarry_address: this.quarry_address,
            specific_gravity: this.specific_gravity,
            block_type: this.block_type,
            shade: this.shade,
            grade: this.grade,
            hsn_code: this.hsn_code,
            slabs_hsn_code: this.slabs_hsn_code
        }).subscribe((res) => {
            if (res.status == 'ok') {
                // this.router.navigate(['/main/inventory']);
                this.log = 'Saved!';
                this.quarries = [{ quarry: this.quarry, quarry_address: this.quarry_address, specific_gravity: this.specific_gravity, block_type: this.block_type, shade: this.shade, grade: this.grade,
                        hsn_code: this.hsn_code, slabs_hsn_code: this.slabs_hsn_code }].concat(this.quarries);
                this.quarry = '';
                this.quarry_address = '';
                this.specific_gravity = '';
                this.block_type = '';
                this.shade = '';
                this.grade = '';
                this.hsn_code = '';
                this.slabs_hsn_code = '';
            }
            else {
                this.log = 'Failed.';
            }
        });
    }
    delete(i) {
        if (window.confirm('Delete quarry?')) {
            this.ds.deleteQuarry({ token: localStorage.getItem('token'), quarry: this.quarries[i].quarry }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.quarries.splice(i, 1);
                }
            });
        }
    }
    edit(i) {
        if (this.quarries[i].edit == true) {
            this.ds.editQuarry({ token: localStorage.getItem('token'), q: this.quarries[i] })
                .subscribe((res) => {
                if (res.status == "ok") {
                    this.quarries[i].edit = false;
                }
            });
        }
        else {
            this.quarries[i].edit = true;
        }
    }
}
QuarriesComponent.ɵfac = function QuarriesComponent_Factory(t) { return new (t || QuarriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
QuarriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuarriesComponent, selectors: [["app-quarries"]], decls: 56, vars: 11, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [1, "sales-boxes"], [1, "top-sales", "box", 2, "width", "95%", "overflow-x", "scroll"], [2, "border-bottom", "1px dashed black"], ["name", "date1", "type", "text", "autocomplete", "off", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "quarry", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "specific_gravity_quarry", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "block_type_quarry", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "shade", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "grade", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "7px 15px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "click"], [4, "ngFor", "ngForOf"], [1, "temp"], ["class", "temp", 4, "ngIf"], [4, "ngIf"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "8px 14px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "13px", 3, "click"], [1, "delete-button", 2, "border-radius", "20px", "text-decoration", "none", "height", "30px", "width", "30px", 3, "click"], ["type", "text", 2, "width", "170px", 3, "ngModel", "ngModelChange"]], template: function QuarriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quarries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_Template_input_ngModelChange_13_listener($event) { return ctx.quarry = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_Template_input_ngModelChange_15_listener($event) { return ctx.quarry_address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_Template_input_ngModelChange_17_listener($event) { return ctx.specific_gravity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_Template_input_ngModelChange_19_listener($event) { return ctx.block_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_Template_input_ngModelChange_21_listener($event) { return ctx.shade = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_Template_input_ngModelChange_23_listener($event) { return ctx.grade = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_Template_input_ngModelChange_25_listener($event) { return ctx.hsn_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuarriesComponent_Template_input_ngModelChange_27_listener($event) { return ctx.slabs_hsn_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuarriesComponent_Template_button_click_29_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Quarry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Quarry Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "S.gravity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Shade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Hsn code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "slabs hsn code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, QuarriesComponent_tr_55_Template, 31, 46, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quarry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quarry_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.specific_gravity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.block_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.shade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.grade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hsn_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.slabs_hsn_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quarries);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: auto;\r\n  width: auto;\r\n}\r\n\r\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]{\r\n  width: auto;\r\n  padding: 20px 30px 20px 30px;\r\n}\r\n\r\n.sales-boxes[_ngcontent-%COMP%]{\r\n  margin:20px;\r\n}\r\n\r\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n  max-width: 300px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n}\r\n\r\n.row-color[_ngcontent-%COMP%] {\r\n  background-color: #d8d8d8;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: orange; \r\n  border: none;\r\n  color: white;\r\n  padding: 7px 7px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n}\r\n\r\n.delete-button[_ngcontent-%COMP%] {\r\n  background-color: rgb(255, 158, 158);\r\n  font-size: 14px;\r\n  border:none\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n  max-width:130px;\r\n  overflow:hidden;  \r\n}\r\n\r\n.temp[_ngcontent-%COMP%]:hover{\r\n  \r\n  overflow-x: visible;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n  -ms-overflow-style: none;  \r\n  scrollbar-width: none;  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YXJyaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFJQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZjtBQUNGOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSw0Q0FBNEM7O0FBQzVDO0VBQ0Usd0JBQXdCLEdBQUcsZ0JBQWdCO0VBQzNDLHFCQUFxQixHQUFHLFlBQVk7QUFDdEMiLCJmaWxlIjoicXVhcnJpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIGEgaW1ne1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLnRvcC1zYWxlc3tcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCAzMHB4O1xyXG59XHJcblxyXG4uc2FsZXMtYm94ZXN7XHJcbiAgbWFyZ2luOjIwcHg7XHJcbn1cclxuXHJcbi5ob21lLXNlY3Rpb24gbmF2IC5zZWFyY2gtYm94e1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGl7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5yb3ctY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDdweCA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTgsIDE1OCk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlcjpub25lXHJcbn1cclxuXHJcblxyXG50aCwgdGQge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGVtcCB7XHJcbiAgbWF4LXdpZHRoOjEzMHB4O1xyXG4gIG92ZXJmbG93OmhpZGRlbjsgIFxyXG59XHJcbi50ZW1wOmhvdmVye1xyXG4gIFxyXG4gIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbn1cclxuXHJcbi50ZW1wOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXHJcbi50ZW1wIHtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxufSJdfQ== */"] });


/***/ }),

/***/ "LWxi":
/*!************************************************!*\
  !*** ./src/app/my-sales/my-sales.component.ts ***!
  \************************************************/
/*! exports provided: MySalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySalesComponent", function() { return MySalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MySalesComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r7.party);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r7.party);
} }
function MySalesComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r8.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r8.unit);
} }
function MySalesComponent_div_22_tr_24_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_22_tr_24_td_11_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return c_r11.cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", c_r11.cost);
} }
function MySalesComponent_div_22_tr_24_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_22_tr_24_td_12_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return c_r11.r_dim_1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", c_r11.r_dim_1);
} }
function MySalesComponent_div_22_tr_24_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_22_tr_24_td_13_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return c_r11.r_dim_2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", c_r11.r_dim_2);
} }
function MySalesComponent_div_22_tr_24_td_14_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_22_tr_24_td_14_input_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; return c_r11.round_off = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", c_r11.round_off);
} }
function MySalesComponent_div_22_tr_24_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MySalesComponent_div_22_tr_24_td_14_input_1_Template, 1, 1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r11.slabs);
} }
function MySalesComponent_div_22_tr_24_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", c_r11.slabs ? (c_r11.cost * ctx_r17.factor * ctx_r17.factor).toFixed(3) : c_r11.cost.toFixed(3), "");
} }
function MySalesComponent_div_22_tr_24_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((c_r11.r_dim_1 / ctx_r18.factor).toFixed(3));
} }
function MySalesComponent_div_22_tr_24_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((c_r11.r_dim_2 / ctx_r19.factor).toFixed(3));
} }
function MySalesComponent_div_22_tr_24_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r11.slabs ? c_r11.round_off ? "3,6,9,12" : "no" : "");
} }
function MySalesComponent_div_22_tr_24_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySalesComponent_div_22_tr_24_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.make_trade(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MySalesComponent_div_22_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MySalesComponent_div_22_tr_24_td_11_Template, 4, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MySalesComponent_div_22_tr_24_td_12_Template, 4, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MySalesComponent_div_22_tr_24_td_13_Template, 4, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MySalesComponent_div_22_tr_24_td_14_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MySalesComponent_div_22_tr_24_td_15_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MySalesComponent_div_22_tr_24_td_16_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MySalesComponent_div_22_tr_24_td_17_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MySalesComponent_div_22_tr_24_td_18_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MySalesComponent_div_22_tr_24_button_20_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySalesComponent_div_22_tr_24_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const i_r12 = ctx.index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.delete_trade(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", i_r12 % 2 ? "#fff" : "#e4e4e4", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", c_r11.polished ? "blue" : "", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r11.slabs ? "bx bx-grid" : c_r11.is_child ? "bx bxs-component" : "bx bx-cube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r11.is_child ? c_r11.block_no.split("zzz000")[0] + " - " + c_r11.block_no.split("zzz000")[1] : c_r11.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background-color:", c_r11.sold ? "#e8f3ff" : "#ffeded", "; border: 1px solid ", c_r11.sold ? "#9bd7ff" : "#ffa9a9", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r11.sold ? c_r11.sold : c_r11.reserved);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r11.sold == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r11.sold == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r11.sold == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r11.sold == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r11.reserved == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r11.reserved == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r11.reserved == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r11.reserved == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r11.sold == 0);
} }
function MySalesComponent_div_22_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySalesComponent_div_22_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.generate_invoice(ctx_r49.inv.trade_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Generate Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MySalesComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_22_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.inv.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Block No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Round off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MySalesComponent_div_22_tr_24_Template, 24, 24, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MySalesComponent_div_22_div_25_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Trade Id: ", ctx_r2.inv.trade_id, ", date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.inv.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate8"](", company: ", ctx_r2.inv.company, ", igst: ", ctx_r2.inv.igst, ", cgst: ", ctx_r2.inv.cgst, ", sgst: ", ctx_r2.inv.sgst, ", shipping_address: ", ctx_r2.inv.shipping_address, ", supply_state: ", ctx_r2.inv.supply_state, ", sale_type: ", ctx_r2.inv.sale_type, ", party: ", ctx_r2.inv.party, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost per TON/ sq.", ctx_r2.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R. L. ", ctx_r2.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R. H. ", ctx_r2.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.trades);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.bill_ready == true);
} }
function MySalesComponent_div_23_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r55.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r55.company);
} }
function MySalesComponent_div_23_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r56.party);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r56.party);
} }
function MySalesComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Trade Id.: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.trade_id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Company: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.company = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MySalesComponent_div_23_option_11_Template, 2, 2, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " IGST: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.igst = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " CGST: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.cgst = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " SGST: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.sgst = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Shipping Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.shipping_address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Supply State: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.supply_state = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Sale type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.sale_type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Eway bill no.: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.eway_bill_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Royalty no.: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.royalty_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Transportation mode: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.transportation_mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Customer ref no. : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_input_ngModelChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.customer_ref_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Party: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MySalesComponent_div_23_Template_select_ngModelChange_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.party = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MySalesComponent_div_23_option_49_Template, 2, 2, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySalesComponent_div_23_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.save_invoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Save Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.trade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.companies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.igst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.cgst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.sgst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.shipping_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.supply_state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.sale_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.eway_bill_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.royalty_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.transportation_mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.customer_ref_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.party);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.parties);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.log);
} }
function MySalesComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySalesComponent_tr_41_Template_span_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const i_r74 = ctx.index; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.toggle(i_r74); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySalesComponent_tr_41_Template_i_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const i_r74 = ctx.index; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.init_invoice(i_r74); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySalesComponent_tr_41_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const i_r74 = ctx.index; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.delete(i_r74); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r73 = ctx.$implicit;
    const i_r74 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", i_r74 % 2 ? "#fff" : "#e4e4e4", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r73.trade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r73.party);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r73.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", c_r73.dispatched ? "#70ff70" : ctx_r4.none, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r73.dispatched ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r73.company);
} }
function MySalesComponent_a_44_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySalesComponent_a_44_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const pl_r79 = ctx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.actionp(pl_r79); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pl_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pl_r79);
} }
function MySalesComponent_a_47_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySalesComponent_a_47_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const pr_r82 = ctx.$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.actionp(pr_r82); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pr_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pr_r82);
} }
class MySalesComponent {
    constructor(ds, route, router) {
        this.ds = ds;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        if (localStorage.getItem('unit') && localStorage.getItem('factor')) {
            this.unit = localStorage.getItem('unit');
            this.factor = localStorage.getItem('factor');
        }
        this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.units = res.data;
            }
        });
        this.ds.getParties({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.parties = res.data;
            }
        });
        this.ds.getCompanies({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.companies = res.data;
            }
        });
        this.page = '';
        this.route.queryParams.subscribe((par) => {
            this.page = parseInt(par.page);
            if (this.page == 0)
                this.page = 1;
            this.global_party = par.party;
            this.ds.getInvoices({ token: localStorage.getItem('token'), page: this.page, party: this.global_party, quotation: false }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.invoices = res.data;
                    this.max_page = res.max_page;
                    this.page = res.page;
                    this.pagination_right = [];
                    this.pagination_left = [];
                    if (this.page - 1 > 0) {
                        this.pagination_left.push(this.page - 1);
                        if (this.page - 2 > 0) {
                            this.pagination_left.push('...');
                            this.pagination_left.push(1);
                        }
                    }
                    this.pagination_left = this.pagination_left.reverse();
                    if ((this.page + 1) < (this.max_page + 1)) {
                        this.pagination_right.push(this.page + 1);
                        if (this.page + 2 < this.max_page + 1) {
                            this.pagination_right.push('...');
                            this.pagination_right.push(this.max_page);
                        }
                    }
                }
            });
        });
        this.name = localStorage.getItem('name').slice(0, 10);
    }
    new_invoice() {
        if (!this.factor)
            return;
        if (this.invoice == '1') {
            this.invoice = 'z';
        }
        else {
            this.invoice = '1';
        }
        this.trade_id = '';
        this.date = '';
        this.company = '';
        this.igst = 0;
        this.cgst = 0;
        this.sgst = 0;
        this.shipping_address = '';
        this.supply_state = '';
        this.sale_type = '';
        this.party = '';
        this.log = '';
        this.eway_bill_no = '';
        this.royalty_no = '';
        this.transportation_mode = '';
        this.customer_ref_no = '';
    }
    save_invoice() {
        this.log = '';
        this.ds.newInvoice({ token: localStorage.getItem('token'), trade_id: this.trade_id,
            date: this.date, company: this.company, igst: this.igst, cgst: this.cgst, sgst: this.sgst,
            shipping_address: this.shipping_address, supply_state: this.supply_state, sale_type: this.sale_type,
            party: this.party, eway_bill_no: this.eway_bill_no,
            royalty_no: this.royalty_no,
            transportation_mode: this.transportation_mode,
            customer_ref_no: this.customer_ref_no, quotation: false }).subscribe((res) => {
            if (res.status == "ok") {
                this.ds.getInvoices({ token: localStorage.getItem('token'), quotation: false }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.invoices = res.data;
                        this.log = "ok";
                    }
                    else {
                        this.log = 'Already exists';
                    }
                });
            }
        });
    }
    change_unit() {
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].unit == this.unit) {
                this.factor = this.units[i].factor;
                localStorage.setItem('unit', this.unit);
                localStorage.setItem('factor', this.factor);
                break;
            }
        }
    }
    toggle(i) {
        var btnNextStatus;
        if (this.invoices[i].dispatched) {
            btnNextStatus = false;
        }
        else {
            btnNextStatus = true;
        }
        this.ds.dispatched({ token: localStorage.getItem('token'), trade_id: this.invoices[i].trade_id, dispatched: btnNextStatus }).subscribe((r) => {
            if (r.status == 'ok') {
                this.invoices[i].dispatched = btnNextStatus;
            }
        });
    }
    delete(i) {
        if (window.confirm('Delete This invoice?')) {
            this.ds.deleteInvoice({
                token: localStorage.getItem('token'),
                trade_id: this.invoices[i].trade_id
            }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.ds.getInvoices({ token: localStorage.getItem('token'), quotation: false }).subscribe((res) => {
                        if (res.status = "ok") {
                            this.invoices = res.data;
                        }
                    });
                }
            });
        }
    }
    delete_trade(i) {
        if (!window.confirm('Delete This Trade?'))
            return;
        this.ds.deleteTrade({ token: localStorage.getItem('token'), _id: this.trades[i]._id }).subscribe((res) => {
            if (res.status == "ok") {
                this.ds.getTrades({ token: localStorage.getItem('token'), trade_id: this.trades[i].trade_id }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.trades = res.data;
                    }
                });
            }
        });
    }
    init_invoice(i) {
        if (!this.factor)
            return;
        this.trades = [];
        this.invoice = '2';
        this.ds.getTrades({ token: localStorage.getItem('token'), trade_id: this.invoices[i].trade_id })
            .subscribe((res) => {
            if (res.status == "ok") {
                this.trades = res.data;
                this.inv = this.invoices[i];
                let flag = true;
                for (let f = 0; f < this.trades.length; f++) {
                    if (this.trades[f].sold == 0) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    this.bill_ready = true;
                }
                else {
                    this.bill_ready = false;
                }
            }
        });
    }
    make_trade(i) {
        this.trades[i].r_dim_1 = this.trades[i].r_dim_1 * this.factor;
        this.trades[i].r_dim_2 = this.trades[i].r_dim_2 * this.factor;
        this.trades[i].r_dim_3 = this.trades[i].r_dim_3 * this.factor;
        if (this.trades[i].slabs) {
            this.trades[i].cost = this.trades[i].cost / (this.factor * this.factor);
        }
        this.ds.sellTrade({ token: localStorage.getItem('token'), trade: this.trades[i] }).subscribe((res) => {
            if (res.status == "ok") {
                this.trades[i].sold = this.trades[i].reserved;
                this.trades[i].reserved = 0;
                let flag = true;
                for (let f = 0; f < this.trades.length; f++) {
                    if (this.trades[f].sold == 0) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    this.bill_ready = true;
                }
                else {
                    this.bill_ready = false;
                }
            }
        });
    }
    generate_invoice(t) {
        let filters = {
            token: localStorage.getItem('token'),
            trade_id: t,
            unit: this.unit
        };
        let query = this.serialize(filters, '');
        window.location.href = this.ds.report_url + "/invoice-report?" + query;
    }
    serialize(obj, prefix) {
        var str = [], p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                str.push((v !== null && typeof v === "object") ?
                    this.serialize(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");
    }
    change_party() {
        this.router.navigate(['/main/my-sales'], { queryParams: { page: this.page, party: this.global_party } });
    }
    actionp(w) {
        if (w != '...') {
            this.router.navigate(['/main/my-sales'], { queryParams: { page: w, party: this.party } });
        }
    }
}
MySalesComponent.ɵfac = function MySalesComponent_Factory(t) { return new (t || MySalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MySalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MySalesComponent, selectors: [["app-my-sales"]], decls: 48, vars: 11, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], ["id", "grds", 2, "width", "50px", 3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [2, "float", "right"], [2, "background-color", "#ffc107", "border", "none", "color", "white", "padding", "5px 7px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", "margin-left", "20px", "margin-bottom", "20px", 3, "click"], ["style", "width: 95%; background-color: #fff;\n        border-radius: 20px; padding: 10px; overflow-x: scroll;", 4, "ngIf"], [2, "width", "95%", "background-color", "#fff", "border-radius", "20px", "padding", "10px", "overflow-x", "scroll"], [3, "style", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "space-evenly", "align-content", "space-around", "width", "80%", "margin", "0 auto", "flex-wrap", "wrap"], [1, "pagination", 2, "cursor", "pointer"], [3, "click", 4, "ngFor", "ngForOf"], [2, "background-color", "orange", "color", "white", "border-radius", "5px"], [3, "value"], ["type", "date", 1, "input-field", 2, "width", "100px", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [2, "font-size", "1.5em"], [1, "temp"], ["style", "background-color: #ffc107;\n                  border: none;\n                  color: white;\n                  padding: 5px 7px;\n                  text-align: center;\n                  text-decoration: none;\n                  display: inline-block;\n                  font-size: 16px;", 3, "click", 4, "ngIf"], [1, "delete-button", 2, "border-radius", "20px", "text-decoration", "none", "height", "30px", "width", "30px", 3, "click"], ["type", "number", 1, "input-field", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["style", "width: 100px;", "type", "checkbox", "class", "input-field", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "checkbox", 1, "input-field", 2, "width", "100px", 3, "ngModel", "ngModelChange"], [2, "background-color", "#ffc107", "border", "none", "color", "white", "padding", "5px 7px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "click"], ["type", "text", 1, "input-field", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["id", "grdwds", 2, "width", "50px", 3, "ngModel", "ngModelChange"], ["id", "grds", 2, "width", "50px", 3, "ngModel", "ngModelChange"], ["id", "log"], [2, "background-color", "#ffc107", "border", "none", "color", "white", "padding", "5px 5px", "text-align", "center", "text-decoration", "none", "font-size", "13px", 3, "click"], [3, "click"], [1, "bx", "bx-right-arrow-alt", 2, "color", "blue", "font-size", "20px", 3, "click"]], template: function MySalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Party: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MySalesComponent_Template_select_change_9_listener() { return ctx.change_party(); })("ngModelChange", function MySalesComponent_Template_select_ngModelChange_9_listener($event) { return ctx.global_party = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "All parties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MySalesComponent_option_12_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Unit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MySalesComponent_Template_select_change_17_listener() { return ctx.change_unit(); })("ngModelChange", function MySalesComponent_Template_select_ngModelChange_17_listener($event) { return ctx.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MySalesComponent_option_19_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySalesComponent_Template_button_click_20_listener() { return ctx.new_invoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "New Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MySalesComponent_div_22_Template, 26, 15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MySalesComponent_div_23_Template, 55, 17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Trade Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dispatched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MySalesComponent_tr_41_Template, 26, 11, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MySalesComponent_a_44_Template, 2, 1, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MySalesComponent_a_47_Template, 2, 1, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.global_party);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parties);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoice == "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoice == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagination_left);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagination_right);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"]], styles: [".row-color[_ngcontent-%COMP%] {\r\n    background-color: #d8d8d8;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n    background-color: orange; \r\n    border: none;\r\n    color: white;\r\n    padding: 7px 7px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n  }\r\n.delete-button[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 63, 63);\r\n    font-size: 14px;\r\n    border:none\r\n  }\r\n.temp[_ngcontent-%COMP%] {\r\n    max-width:130px;\r\n    overflow:hidden;  \r\n    margin: auto;\r\n  }\r\n\r\n.dropbtn[_ngcontent-%COMP%] {\r\n    background-color: #04AA6D;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n    background-color: #3e8e41;\r\n  }\r\n\r\n#myInput[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 15px 10px 10px 15px;\r\n    border: none;\r\n    border-bottom: 1px solid #ddd;\r\n    width: 230px;\r\n  }\r\n\r\n#myInput[_ngcontent-%COMP%]:focus {outline: 3px solid #ddd;}\r\n\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f6f6f6;\r\n    min-width: 200px;\r\n    \r\n    border: 1px solid #ddd;\r\n    z-index: 1;\r\n    width: 230px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    max-height: 250px;\r\n    \r\n  }\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: none;\r\n  }\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #f1f1f1}\r\n\r\n.show[_ngcontent-%COMP%] {display:block;}\r\n.pagination[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    transition: all 1s linear;\r\n  }\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    float: left;\r\n    padding: 4px 8px;\r\n    text-decoration: none;\r\n  }\r\n.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {background-color: #ddd;}\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background-color: #e7e7e7; \r\n    color: black;\r\n    padding: 5px 10px; \r\n    cursor: pointer; \r\n    float: left; \r\n    border: none;\r\n    font-size: 14px;\r\n  }\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\r\n    border-right: none; \r\n  }\r\n\r\n.btn-group[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(226, 226, 226);\r\n  }\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  text-align: center;\r\n}\r\n.temp[_ngcontent-%COMP%] {\r\n  max-width:130px;\r\n  overflow:hidden;  \r\n  margin: auto;\r\n}\r\n.temp[_ngcontent-%COMP%]:hover{\r\n  \r\n  overflow-x: visible;\r\n}\r\n.temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n  -ms-overflow-style: none;  \r\n  scrollbar-width: none;  \r\n}\r\n.switchon[_ngcontent-%COMP%] {\r\n  background-color: #70ff70;\r\n  height: 20px;\r\n  width: 200px;\r\n  border-radius: 20px;\r\n  border:2px solid #2BD47D\r\n  \r\n}\r\n.switchoff[_ngcontent-%COMP%] {\r\n  background-color: #c5c5c5;\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 20px;\r\n  border:5px solid #c5c5c5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXNhbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7QUFFQTtJQUNFLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2Y7RUFDRjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFHRixhQUFhO0FBRVg7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFFQSxxQ0FBcUM7QUFDckM7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQSxxQkFBcUI7QUFDckI7SUFDRSxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsWUFBWTtFQUNkO0FBRUEsbURBQW1EO0FBQ25ELGdCQUFnQix1QkFBdUIsQ0FBQztBQUV4QyxrRUFBa0U7QUFFbEUseUNBQXlDO0FBQ3pDO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCOztJQUVoQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7RUFFbkI7QUFFQSw4QkFBOEI7QUFDOUI7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7QUFFQSw0Q0FBNEM7QUFDNUMsMkJBQTJCLHlCQUF5QjtBQUVwRCxxSUFBcUk7QUFDckksT0FBTyxhQUFhLENBQUM7QUFHdkI7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFFQSxrQ0FBa0Msc0JBQXNCLENBQUM7QUFFekQ7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNwQyxlQUFlLEVBQUUsc0JBQXNCO0lBQ3ZDLFdBQVcsRUFBRSxtQ0FBbUM7SUFDaEQsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFFQTtJQUNFLGtCQUFrQixFQUFFLDJCQUEyQjtFQUNqRDtBQUVBLGlDQUFpQztBQUNqQztJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztFQUNoQjtBQUVBLG9DQUFvQztBQUNwQztJQUNFLG9DQUFvQztFQUN0QztBQUlGO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBLDRDQUE0QztBQUM1QztFQUNFLHdCQUF3QixHQUFHLGdCQUFnQjtFQUMzQyxxQkFBcUIsR0FBRyxZQUFZO0FBQ3RDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkI7O0FBRUY7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoibXktc2FsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnJvdy1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDdweCA3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2MywgNjMpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOm5vbmVcclxuICB9XHJcbiAgLnRlbXAge1xyXG4gICAgbWF4LXdpZHRoOjEzMHB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuOyAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbi8qIGRyb3Bkb3duICovXHJcblxyXG4gIC5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAvKiBEcm9wZG93biBidXR0b24gb24gaG92ZXIgJiBmb2N1cyAqL1xyXG4gIC5kcm9wYnRuOmhvdmVyLCAuZHJvcGJ0bjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgc2VhcmNoIGZpZWxkICovXHJcbiAgI215SW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgc2VhcmNoIGZpZWxkIHdoZW4gaXQgZ2V0cyBmb2N1cy9jbGlja2VkIG9uICovXHJcbiAgI215SW5wdXQ6Zm9jdXMge291dGxpbmU6IDNweCBzb2xpZCAjZGRkO31cclxuICBcclxuICAvKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcbiBcclxuICAvKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMX1cclxuICBcclxuICAvKiBTaG93IHRoZSBkcm9wZG93biBtZW51ICh1c2UgSlMgdG8gYWRkIHRoaXMgY2xhc3MgdG8gdGhlIC5kcm9wZG93bi1jb250ZW50IGNvbnRhaW5lciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gYnV0dG9uKSAqL1xyXG4gIC5zaG93IHtkaXNwbGF5OmJsb2NrO31cclxuXHJcbiAgXHJcbi5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbiBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcblxyXG4gIC5idG4tZ3JvdXAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7IFxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBQb2ludGVyL2hhbmQgaWNvbiAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7IC8qIEZsb2F0IHRoZSBidXR0b25zIHNpZGUgYnkgc2lkZSAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuLWdyb3VwIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTsgLyogUHJldmVudCBkb3VibGUgYm9yZGVycyAqL1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgKGNsZWFyZml4IGhhY2spICovXHJcbiAgLmJ0bi1ncm91cDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciBvbiBob3ZlciAqL1xyXG4gIC5idG4tZ3JvdXAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxuICB9XHJcblxyXG5cclxuXHJcbnRoLCB0ZCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGVtcCB7XHJcbiAgbWF4LXdpZHRoOjEzMHB4O1xyXG4gIG92ZXJmbG93OmhpZGRlbjsgIFxyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4udGVtcDpob3ZlcntcclxuICBcclxuICBvdmVyZmxvdy14OiB2aXNpYmxlO1xyXG59XHJcbi50ZW1wOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXHJcbi50ZW1wIHtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuLnN3aXRjaG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBmZjcwO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6MnB4IHNvbGlkICMyQkQ0N0RcclxuICBcclxufVxyXG5cclxuLnN3aXRjaG9mZiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6NXB4IHNvbGlkICNjNWM1YzU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "QCoJ":
/*!**************************************************!*\
  !*** ./src/app/new-block/new-block.component.ts ***!
  \**************************************************/
/*! exports provided: NewBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBlockComponent", function() { return NewBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NewBlockComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r2.warehouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r2.warehouse);
} }
function NewBlockComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r3.quarry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r3.quarry);
} }
class NewBlockComponent {
    constructor(ds, router) {
        this.ds = ds;
        this.router = router;
        this.warehouses = [];
        this.quarries = [];
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.ds.getYards({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.warehouses = (res.data);
            }
        });
        this.ds.getQuarries({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.quarries = (res.data);
            }
        });
    }
    save() {
        if (this.block_number == null || this.block_number == '') {
            document.getElementById("log").innerHTML = 'Cannot save this.';
            return 0;
        }
        if (this.warehouse == null || this.warehouse == '') {
            document.getElementById("log").innerHTML = 'Cannot save this.';
            return 0;
        }
        if (this.quarry == null || this.quarry == '') {
            document.getElementById("log").innerHTML = 'Cannot save this.';
            return 0;
        }
        if (this.date == null || this.date == '') {
            document.getElementById("log").innerHTML = 'Cannot save this.';
            return 0;
        }
        for (var i = 0; i < this.warehouses.length; i++) {
            if (this.warehouses[i].warehouse == this.warehouse) {
                this.warehouse_address = this.warehouses[i].warehouse_address;
                break;
            }
        }
        // for (var i=0; i<this.quarries.length; i++) {
        //   if (this.quarries[i].quarry == this.quarry) {
        //     this.quarry_address = this.quarries[i].quarry_address;
        //     break;
        //   }
        // }
        if (this.quarry == null || this.quarry == '') {
            document.getElementById("log").innerHTML = 'Cannot save this.';
            return 0;
        }
        // alert(this.recovery_height)
        this.ds.newBlock({
            token: localStorage.getItem('token'),
            block_number: this.block_number.toLowerCase(),
            warehouse: this.warehouse,
            warehouse_address: this.warehouse_address,
            date: this.date,
            quarry: this.quarry,
            // quarry_address: this.quarry_address,
            weight: this.weight,
            // specific_gravity:this.specific_gravity,
            catagories: this.catagory,
            payment: this.purchase_cost,
            // block_type:this.block_type,
            height: this.height,
            width: this.width,
            length: this.length,
            hsn_code: this.hsn_code,
            recovery_height: this.recovery_height,
            recovery_width: this.recovery_width,
            transportation_cost: this.transportation_cost,
            note: this.note,
        }).subscribe((res) => {
            if (res.status == 'ok') {
                this.router.navigate(['/main/blocks'], { queryParams: { warehouse: this.warehouse } });
            }
            else {
                document.getElementById('log').innerHTML = res.status;
            }
        });
    }
}
NewBlockComponent.ɵfac = function NewBlockComponent_Factory(t) { return new (t || NewBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NewBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewBlockComponent, selectors: [["app-new-block"]], decls: 113, vars: 18, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [1, "sales-boxes"], [1, "recent-sales", "box"], ["id", "addblock", 1, "input-block"], ["type", "text", "name", "block_number", "required", "", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "warehouse", "id", "warehouse", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "date", "type", "date", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "quarry", "id", "quarry", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "height", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "width", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "length", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "recovery_height", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "recovery_width", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "hsn_code", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "weight", "type", "text", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "catagory", "type", "text", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "purchase_cost", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "transportation_cost", "type", "text", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "note", 1, "input-field", 3, "ngModel", "ngModelChange"], ["id", "log"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "15px 32px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "click"], [3, "value"]], template: function NewBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Block Number :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_14_listener($event) { return ctx.block_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Warehouse:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_select_ngModelChange_21_listener($event) { return ctx.warehouse = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NewBlockComponent_option_23_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_30_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Quarry :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_select_ngModelChange_37_listener($event) { return ctx.quarry = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, NewBlockComponent_option_39_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Height :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_45_listener($event) { return ctx.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Width :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_51_listener($event) { return ctx.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Length :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_57_listener($event) { return ctx.length = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Recovery Height :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_63_listener($event) { return ctx.recovery_height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Recovery Width :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_69_listener($event) { return ctx.recovery_width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "HSN Code :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_75_listener($event) { return ctx.hsn_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Weight :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_80_listener($event) { return ctx.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "[ton]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Category :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_87_listener($event) { return ctx.catagory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Purchase cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_93_listener($event) { return ctx.purchase_cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Transportation Cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_99_listener($event) { return ctx.transportation_cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Note : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBlockComponent_Template_input_ngModelChange_105_listener($event) { return ctx.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBlockComponent_Template_button_click_111_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.block_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.warehouse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.warehouses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quarry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quarries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recovery_height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recovery_width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hsn_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.catagory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.purchase_cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.transportation_cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".home-content[_ngcontent-%COMP%] {\r\n  margin-left: -10px;\r\n  max-width: 600px;\r\n  overflow-x: scroll;\r\n}\r\n\r\n.input-block[_ngcontent-%COMP%]{\r\n    width: 350px;\r\n    position: relative;\r\n    margin: 6% auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.headadd[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    background-color: orange; \r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1ibG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQiIsImZpbGUiOiJuZXctYmxvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG5cclxuLmlucHV0LWJsb2Nre1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA2JSBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlYWRhZGR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DashboardComponent_li_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", user_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.count);
} }
class DashboardComponent {
    constructor(ds) {
        this.ds = ds;
        this.users = [];
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.ds.briefDetails({ token: localStorage.getItem("token") }).subscribe((response) => {
            if (response.status == 'ok') {
                //  alert(1)
                this.r = response.data;
                this.blocks = this.r.total_blocks_count;
                this.slabs = this.r.total_slabs_count;
                this.blocks_sold = this.r.sold_blocks_count;
                this.slabs_sold = this.r.sold_slabs_count;
                // console.log(this.r.sp)
                // var content='';
                // for (var i=0; i<r.salesmen_performance.length; i++) {
                //   content+=`<tr><td>
                //     <span title="${r.salesmen_performance[i].user}">${r.salesmen_performance[i].name}</span></td>
                //   <td><span>&nbsp;&nbsp;&nbsp;&nbsp;${r.salesmen_performance[i].count}</span></td>
                // </tr>`
                // }
                // document.getElementById("data_content").innerHTML=content;
                this.users = this.r.salesmen_performance;
                this.max = this.r.sp[0].amount;
                for (var i = 0; i < this.r.sp.length; i++) {
                    if (this.max < this.r.sp[i].amount) {
                        this.max = this.r.sp[i].amount;
                    }
                }
                // for (let s of this.r.sp) {
                //   s.amount=s.amount/this.max;
                // }
            }
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 59, vars: 8, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [1, "overview-boxes"], [1, "box"], [1, "right-side"], [1, "box-topic"], ["id", "blocks", 1, "number"], [1, "bx", "bx-cube", "cart", "one"], ["id", "blocks_sold", 1, "number"], [1, "bx", "bx-cube", "cart", "three"], ["id", "slabs", 1, "number"], [1, "bx", "bx-grid", "cart", "one"], ["id", "slabs_sold", 1, "number"], [1, "bx", "bx-grid", "cart", "three"], [1, "bx", "bxs-hourglass-top", "cart", "three"], [1, "bx", "bxs-send", "cart", "two"], [1, "title", 2, "display", "inline-block"], [1, "bx", "bx-trending-up", "cart", "one", 2, "display", "inline-block"], [1, "top-sales-details"], [4, "ngFor", "ngForOf"], [1, "product", 3, "title"], [1, "price"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total Blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Blocks Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total Slabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Slabs Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Most Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, DashboardComponent_li_58_Template, 6, 3, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blocks_sold);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.slabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.slabs_sold);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.r.pending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.r.confirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n}\r\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n  max-width: 300px;\r\n}\r\n.overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  justify-content: center;\r\n}\r\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{\r\n  margin-bottom: 5px;\r\n}\r\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]{\r\n  margin: 0px 0 0 6px;\r\n}\r\n.sales-boxes[_ngcontent-%COMP%]{\r\n  margin:20px;\r\n}\r\n#column-example-6[_ngcontent-%COMP%] {\r\n  height: 200px;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIC5uYXYtbGlua3MgbGl7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5ob21lLXNlY3Rpb24gbmF2IC5zZWFyY2gtYm94e1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuLm92ZXJ2aWV3LWJveGVzIC5ib3h7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaG9tZS1jb250ZW50IC5ib3ggLm51bWJlcntcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmhvbWUtY29udGVudCAuYm94IC5jYXJ0e1xyXG4gIG1hcmdpbjogMHB4IDAgMCA2cHg7XHJcbn1cclxuLnNhbGVzLWJveGVze1xyXG4gIG1hcmdpbjoyMHB4O1xyXG59XHJcblxyXG4jY29sdW1uLWV4YW1wbGUtNiB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "Qmlm":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CompanyComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_tr_39_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.delete(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.line_1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("price ", i_r2 % 2 ? "" : "row-color", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.line_2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("price ", i_r2 % 2 ? "" : "row-color", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.line_3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("price ", i_r2 % 2 ? "" : "row-color", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.terms, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("product ", i_r2 % 2 ? "" : "row-color", "");
} }
class CompanyComponent {
    constructor(ds) {
        this.ds = ds;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.ds.getCompanies({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.companies = res.data;
            }
        });
    }
    save() {
        if (this.company == null || this.company == '') {
            this.log = 'Enter Company.';
            return 0;
        }
        this.ds.addCompany({
            token: localStorage.getItem('token'),
            company: this.company,
            line_1: this.line_1,
            line_2: this.line_2,
            line_3: this.line_3,
            terms: this.terms
        }).subscribe((res) => {
            if (res.status == 'ok') {
                // this.router.navigate(['/main/inventory']);
                this.log = 'Saved!';
                this.companies = [{ company: this.company, line_1: this.line_1, line_2: this.line_2, line_3: this.line_3, terms: this.terms }].concat(this.companies);
                this.company = '';
                this.line_1 = '';
                this.line_2 = '';
                this.line_3 = '';
                this.terms = '';
            }
            else {
                this.log = 'Failed.';
            }
        });
    }
    delete(i) {
        if (window.confirm('Delete company?')) {
            this.ds.deleteCompany({ token: localStorage.getItem('token'), company: this.companies[i].company }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.companies.splice(i, 1);
                }
            });
        }
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], decls: 40, vars: 8, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [1, "sales-boxes"], [1, "top-sales", "box", 2, "width", "95%"], [2, "border-bottom", "1px dashed black"], ["name", "dated1", "type", "text", "autocomplete", "off", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "block_type_quarry", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "shade", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "sxhade", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "shadde", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "7px 15px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "click"], [4, "ngFor", "ngForOf"], [1, "temp"], [1, "temp", 2, "text-overflow", "ellipsis", "max-height", "70px"], [1, "delete-button", 2, "border-radius", "20px", "text-decoration", "none", "height", "30px", "width", "30px", 3, "click"]], template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyComponent_Template_input_ngModelChange_13_listener($event) { return ctx.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyComponent_Template_input_ngModelChange_15_listener($event) { return ctx.line_1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyComponent_Template_textarea_ngModelChange_17_listener($event) { return ctx.line_2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.line_3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyComponent_Template_textarea_ngModelChange_21_listener($event) { return ctx.terms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyComponent_Template_button_click_23_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "GSTIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Bank details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CompanyComponent_tr_39_Template, 19, 23, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.line_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.line_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.line_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    width: auto;\r\n  }\r\n  \r\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    padding: 20px 30px 20px 30px;\r\n  }\r\n  \r\n  .sales-boxes[_ngcontent-%COMP%]{\r\n    margin:20px;\r\n  }\r\n  \r\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n    max-width: 300px;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n  }\r\n  \r\n  .row-color[_ngcontent-%COMP%] {\r\n    background-color: #d8d8d8;\r\n  }\r\n  \r\n  .button[_ngcontent-%COMP%] {\r\n    background-color: orange; \r\n    border: none;\r\n    color: white;\r\n    padding: 7px 7px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .delete-button[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 158, 158);\r\n    font-size: 14px;\r\n    border:none\r\n  }\r\n  \r\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%] {\r\n    max-width:130px;\r\n    overflow:hidden;  \r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%]:hover{\r\n    \r\n    overflow-x: visible;\r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  \r\n  \r\n  \r\n  .temp[_ngcontent-%COMP%] {\r\n    -ms-overflow-style: none;  \r\n    scrollbar-width: none;  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUlBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmO0VBQ0Y7O0VBR0E7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBQ0E7O0lBRUUsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBLDRDQUE0Qzs7RUFDNUM7SUFDRSx3QkFBd0IsR0FBRyxnQkFBZ0I7SUFDM0MscUJBQXFCLEdBQUcsWUFBWTtFQUN0QyIsImZpbGUiOiJjb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FsZXMtYm94ZXMgLnRvcC1zYWxlcyBsaSBhIGltZ3tcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAudG9wLXNhbGVze1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2FsZXMtYm94ZXN7XHJcbiAgICBtYXJnaW46MjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWUtc2VjdGlvbiBuYXYgLnNlYXJjaC1ib3h7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbmtzIGxpe1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAucm93LWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbiAgfVxyXG4gIC5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDdweCA3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5kZWxldGUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE1OCwgMTU4KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjpub25lXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRlbXAge1xyXG4gICAgbWF4LXdpZHRoOjEzMHB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuOyAgXHJcbiAgfVxyXG4gIC50ZW1wOmhvdmVye1xyXG4gICAgXHJcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICAudGVtcDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXHJcbiAgLnRlbXAge1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxuICB9Il19 */"] });


/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DataService {
    constructor(http) {
        this.http = http;
        // baseURL = 'http://localhost:3000'
        // report_url = 'http://localhost:3000'
        // deployment
        this.baseURL = '';
        this.report_url = 'https://salesbit.in';
    }
    auth(data) {
        return this.http.post(this.baseURL + "/auth", data);
    }
    signUp(data) {
        return this.http.post(this.baseURL + "/sign-up", data);
    }
    changePassword(data) {
        return this.http.post(this.baseURL + "/change-password", data);
    }
    forgotPassword(data) {
        return this.http.post(this.baseURL + "/forgot-password", data);
    }
    changeRole(data) {
        return this.http.post(this.baseURL + "/change-role", data);
    }
    getMyRoles(data) {
        return this.http.post(this.baseURL + "/get-my-roles", data);
    }
    getUsers(data) {
        return this.http.post(this.baseURL + "/get-users", data);
    }
    newBlock(data) {
        return this.http.post(this.baseURL + "/new-block", data);
    }
    editBlock(data) {
        return this.http.post(this.baseURL + "/edit-block", data);
    }
    getBlock(data) {
        return this.http.post(this.baseURL + "/get-block", data);
    }
    processBlock(data) {
        return this.http.post(this.baseURL + "/process-block", data);
    }
    deleteBlock(data) {
        return this.http.post(this.baseURL + "/delete-block", data);
    }
    unBreak(data) {
        return this.http.post(this.baseURL + "/un-break", data);
    }
    unProcess(data) {
        return this.http.post(this.baseURL + "/un-process", data);
    }
    lostSlabs(data) {
        return this.http.post(this.baseURL + '/lost-slabs', data);
    }
    getItems(data) {
        return this.http.post(this.baseURL + "/get-items", data);
    }
    allBlocks(data) {
        return this.http.post(this.baseURL + "/all-blocks", data);
    }
    editSlabs(data) {
        return this.http.post(this.baseURL + "/edit-slabs", data);
    }
    editThappi(data) {
        return this.http.post(this.baseURL + '/edit-thappi', data);
    }
    addYard(data) {
        return this.http.post(this.baseURL + "/add-yard", data);
    }
    deleteYard(data) {
        return this.http.post(this.baseURL + "/delete-yard", data);
    }
    getYards(data) {
        return this.http.post(this.baseURL + "/get-yards", data);
    }
    getInvoices(data) {
        return this.http.post(this.baseURL + '/get-invoices', data);
    }
    newInvoice(data) {
        return this.http.post(this.baseURL + '/new-invoice', data);
    }
    deleteInvoice(data) {
        return this.http.post(this.baseURL + '/delete-invoice', data);
    }
    getTrades(data) {
        return this.http.post(this.baseURL + "/get-trades", data);
    }
    sellTrade(data) {
        return this.http.post(this.baseURL + "/sell-trade", data);
    }
    reserveTrade(data) {
        return this.http.post(this.baseURL + "/reserve-trade", data);
    }
    makeReserved(data) {
        return this.http.post(this.baseURL + "/make-reserved", data);
    }
    deleteTrade(data) {
        return this.http.post(this.baseURL + "/delete-trade", data);
    }
    getSales(data) {
        return this.http.post(this.baseURL + "/get-sales", data);
    }
    getTradeIds(data) {
        return this.http.post(this.baseURL + "/get-trade-ids", data);
    }
    briefDetails(data) {
        return this.http.post(this.baseURL + "/brief-details", data);
    }
    getAllActivity(data) {
        return this.http.post(this.baseURL + "/get-all-activity", data);
    }
    isSignedIn(data) {
        return this.http.post(this.baseURL + "/is-signed-in", data);
    }
    breakBlock(data) {
        return this.http.post(this.baseURL + '/break-block', data);
    }
    getParties(data) {
        return this.http.post(this.baseURL + '/get-parties', data);
    }
    addParty(data) {
        return this.http.post(this.baseURL + '/add-party', data);
    }
    deleteParty(data) {
        return this.http.post(this.baseURL + '/delete-party', data);
    }
    editParty(data) {
        return this.http.post(this.baseURL + '/edit-party', data);
    }
    getQuarries(data) {
        return this.http.post(this.baseURL + '/get-quarries', data);
    }
    addQuarry(data) {
        return this.http.post(this.baseURL + '/add-quarry', data);
    }
    deleteQuarry(data) {
        return this.http.post(this.baseURL + '/delete-quarry', data);
    }
    editQuarry(data) {
        return this.http.post(this.baseURL + '/edit-quarry', data);
    }
    getQuarry(data) {
        return this.http.post(this.baseURL + '/get-quarry', data);
    }
    dispatched(data) {
        return this.http.post(this.baseURL + '/dispatched', data);
    }
    getCompanies(data) {
        return this.http.post(this.baseURL + '/get-companies', data);
    }
    addCompany(data) {
        return this.http.post(this.baseURL + '/add-company', data);
    }
    deleteCompany(data) {
        return this.http.post(this.baseURL + '/delete-company', data);
    }
    itemToggle(data) {
        return this.http.post(this.baseURL + '/item-toggle', data);
    }
    drawerItems(data) {
        return this.http.post(this.baseURL + '/drawer-items', data);
    }
    clearDrawer(data) {
        return this.http.post(this.baseURL + '/clear-drawer', data);
    }
    getSlabs(data) {
        return this.http.post(this.baseURL + '/get-slabs', data);
    }
    setTransportCost(data) {
        return this.http.post(this.baseURL + '/set-transport-cost', data);
    }
    addUnit(data) {
        return this.http.post(this.baseURL + '/add-unit', data);
    }
    deleteUnit(data) {
        return this.http.post(this.baseURL + '/delete-unit', data);
    }
    getUnits(data) {
        return this.http.post(this.baseURL + '/get-units', data);
    }
    moveItems(data) {
        return this.http.post(this.baseURL + '/move-items', data);
    }
    polish(data) {
        return this.http.post(this.baseURL + '/polish', data);
    }
    markInTransit(data) {
        return this.http.post(this.baseURL + '/mark-in-transit', data);
    }
    blockReport(data) {
        return this.http.get(this.baseURL + '/block-report', data);
    }
    slabsReport(data) {
        return this.http.get(this.baseURL + '/slabs-report', data);
    }
    overviewReport(data) {
        return this.http.get(this.baseURL + '/overview-report', data);
    }
    quotationReport(data) {
        return this.http.get(this.baseURL + '/quotation-report', data);
    }
    invoiceReport(data) {
        return this.http.get(this.baseURL + '/invoice-report', data);
    }
    blockMarginReport(data) {
        return this.http.get(this.baseURL + '/block-margin-report', data);
    }
    slabsMarginReport(data) {
        return this.http.get(this.baseURL + '/slabs-margin-report', data);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VK7j":
/*!********************************************************!*\
  !*** ./src/app/my-quotation/my-quotation.component.ts ***!
  \********************************************************/
/*! exports provided: MyQuotationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQuotationComponent", function() { return MyQuotationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MyQuotationComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r6.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r6.unit);
} }
function MyQuotationComponent_div_15_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuotationComponent_div_15_tr_20_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.delete_trade(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", i_r9 % 2 ? "#fff" : "#e4e4e4", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", c_r8.polished ? "blue" : "", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r8.slabs ? "bx bx-grid" : c_r8.is_child ? "bx bxs-component" : "bx bx-cube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r8.is_child ? c_r8.block_no.split("zzz000")[0] + " - " + c_r8.block_no.split("zzz000")[1] : c_r8.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background-color:", c_r8.sold ? "#e8f3ff" : "#ffeded", "; border: 1px solid ", c_r8.sold ? "#9bd7ff" : "#ffa9a9", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r8.sold ? c_r8.sold : c_r8.reserved);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", c_r8.slabs ? (c_r8.cost * ctx_r7.factor * ctx_r7.factor).toFixed(3) : c_r8.cost.toFixed(3), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((c_r8.r_dim_1 / ctx_r7.factor).toFixed(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((c_r8.r_dim_2 / ctx_r7.factor).toFixed(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r8.slabs ? c_r8.round_off ? "3,6,9,12" : "no" : "");
} }
function MyQuotationComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Block No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Round off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MyQuotationComponent_div_15_tr_20_Template, 22, 19, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuotationComponent_div_15_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.generate_quotation(ctx_r12.inv.trade_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Generate quotation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"]([" Trade Id: ", ctx_r1.inv.trade_id, ", date: ", ctx_r1.inv.date, ", company: ", ctx_r1.inv.company, ", igst: ", ctx_r1.inv.igst, ", cgst: ", ctx_r1.inv.cgst, ", sgst: ", ctx_r1.inv.sgst, ", shipping_address: ", ctx_r1.inv.shipping_address, ", supply_state: ", ctx_r1.inv.supply_state, ", sale_type: ", ctx_r1.inv.sale_type, ", party: ", ctx_r1.inv.party, " "]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost per TON/ sq.", ctx_r1.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R. L. ", ctx_r1.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R. H. ", ctx_r1.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.trades);
} }
function MyQuotationComponent_div_16_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r16.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r16.company);
} }
function MyQuotationComponent_div_16_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r17.party);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r17.party);
} }
function MyQuotationComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Trade Id.: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.trade_id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Company: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.company = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyQuotationComponent_div_16_option_11_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " IGST: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.igst = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " CGST: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.cgst = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " SGST: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.sgst = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Shipping Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.shipping_address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Supply State: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.supply_state = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Sale type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.sale_type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Eway bill no.: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.eway_bill_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Royalty no.: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.royalty_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Transportation mode: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.transportation_mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Customer ref no. : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_input_ngModelChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.customer_ref_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Party: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuotationComponent_div_16_Template_select_ngModelChange_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.party = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MyQuotationComponent_div_16_option_49_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuotationComponent_div_16_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.save_invoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Save Quotation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.trade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.companies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.igst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.cgst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.sgst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.shipping_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.supply_state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.sale_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.eway_bill_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.royalty_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.transportation_mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.customer_ref_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.party);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.parties);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.log);
} }
function MyQuotationComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuotationComponent_tr_32_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const i_r35 = ctx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.init_invoice(i_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuotationComponent_tr_32_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const i_r35 = ctx.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.delete(i_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r34 = ctx.$implicit;
    const i_r35 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", i_r35 % 2 ? "#fff" : "#e4e4e4", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r34.trade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r34.party);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r34.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r34.company);
} }
function MyQuotationComponent_a_35_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuotationComponent_a_35_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const pl_r39 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.actionp(pl_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pl_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pl_r39);
} }
function MyQuotationComponent_a_38_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuotationComponent_a_38_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const pr_r42 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.actionp(pr_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pr_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pr_r42);
} }
class MyQuotationComponent {
    constructor(ds, route, router) {
        this.ds = ds;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        if (localStorage.getItem('unit') && localStorage.getItem('factor')) {
            this.unit = localStorage.getItem('unit');
            this.factor = localStorage.getItem('factor');
        }
        this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.units = res.data;
            }
        });
        this.ds.getParties({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.parties = res.data;
            }
        });
        this.ds.getCompanies({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.companies = res.data;
            }
        });
        this.page = '';
        this.route.queryParams.subscribe((par) => {
            this.page = parseInt(par.page);
            if (this.page == 0)
                this.page = 1;
            this.global_party = par.party;
            this.ds.getInvoices({ token: localStorage.getItem('token'), page: this.page, party: this.global_party, quotation: true }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.invoices = res.data;
                    this.max_page = res.max_page;
                    this.page = res.page;
                    this.pagination_right = [];
                    this.pagination_left = [];
                    if (this.page - 1 > 0) {
                        this.pagination_left.push(this.page - 1);
                        if (this.page - 2 > 0) {
                            this.pagination_left.push('...');
                            this.pagination_left.push(1);
                        }
                    }
                    this.pagination_left = this.pagination_left.reverse();
                    if ((this.page + 1) < (this.max_page + 1)) {
                        this.pagination_right.push(this.page + 1);
                        if (this.page + 2 < this.max_page + 1) {
                            this.pagination_right.push('...');
                            this.pagination_right.push(this.max_page);
                        }
                    }
                }
            });
        });
        this.name = localStorage.getItem('name').slice(0, 10);
    }
    new_invoice() {
        if (!this.factor)
            return;
        if (this.invoice == '1') {
            this.invoice = 'z';
        }
        else {
            this.invoice = '1';
        }
        this.trade_id = '';
        this.date = '';
        this.company = '';
        this.igst = 0;
        this.cgst = 0;
        this.sgst = 0;
        this.shipping_address = '';
        this.supply_state = '';
        this.sale_type = '';
        this.party = '';
        this.log = '';
        this.eway_bill_no = '';
        this.royalty_no = '';
        this.transportation_mode = '';
        this.customer_ref_no = '';
    }
    save_invoice() {
        this.log = '';
        this.ds.newInvoice({ token: localStorage.getItem('token'), trade_id: this.trade_id,
            date: this.date, company: this.company, igst: this.igst, cgst: this.cgst, sgst: this.sgst,
            shipping_address: this.shipping_address, supply_state: this.supply_state, sale_type: this.sale_type,
            party: this.party, eway_bill_no: this.eway_bill_no,
            royalty_no: this.royalty_no,
            transportation_mode: this.transportation_mode,
            customer_ref_no: this.customer_ref_no, quotation: true }).subscribe((res) => {
            if (res.status == "ok") {
                this.ds.getInvoices({ token: localStorage.getItem('token'), quotation: true }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.invoices = res.data;
                        this.log = "ok";
                    }
                    else {
                        this.log = 'Already exists';
                    }
                });
            }
        });
    }
    change_unit() {
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].unit == this.unit) {
                this.factor = this.units[i].factor;
                localStorage.setItem('unit', this.unit);
                localStorage.setItem('factor', this.factor);
                break;
            }
        }
    }
    toggle(i) {
        var btnNextStatus;
        if (this.invoices[i].dispatched) {
            btnNextStatus = false;
        }
        else {
            btnNextStatus = true;
        }
        this.ds.dispatched({ token: localStorage.getItem('token'), trade_id: this.invoices[i].trade_id, dispatched: btnNextStatus }).subscribe((r) => {
            if (r.status == 'ok') {
                this.invoices[i].dispatched = btnNextStatus;
            }
        });
    }
    delete(i) {
        if (window.confirm('Delete This invoice?')) {
            this.ds.deleteInvoice({
                token: localStorage.getItem('token'),
                trade_id: this.invoices[i].trade_id
            }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.ds.getInvoices({ token: localStorage.getItem('token'), quotation: true }).subscribe((res) => {
                        if (res.status = "ok") {
                            this.invoices = res.data;
                        }
                    });
                }
            });
        }
    }
    delete_trade(i) {
        if (!window.confirm('Delete This Trade?'))
            return;
        this.ds.deleteTrade({ token: localStorage.getItem('token'), _id: this.trades[i]._id, quotation: true }).subscribe((res) => {
            if (res.status == "ok") {
                this.ds.getTrades({ token: localStorage.getItem('token'), trade_id: this.trades[i].trade_id }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.trades = res.data;
                    }
                });
            }
        });
    }
    init_invoice(i) {
        if (!this.factor)
            return;
        this.trades = [];
        this.invoice = '2';
        this.ds.getTrades({ token: localStorage.getItem('token'), trade_id: this.invoices[i].trade_id })
            .subscribe((res) => {
            if (res.status == "ok") {
                this.trades = res.data;
                this.inv = this.invoices[i];
                let flag = true;
                for (let f = 0; f < this.trades.length; f++) {
                    if (this.trades[f].sold == 0) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    this.bill_ready = true;
                }
                else {
                    this.bill_ready = false;
                }
            }
        });
    }
    generate_quotation(trade_id) {
        window.location.href = this.ds.report_url + "/quotation-report?trade_id=" + trade_id + "&unit=" + this.unit + "&token=" + localStorage.getItem('token');
    }
    actionp(w) {
        if (w != '...') {
            this.router.navigate(['/main/my-sales'], { queryParams: { page: w, party: this.party } });
        }
    }
}
MyQuotationComponent.ɵfac = function MyQuotationComponent_Factory(t) { return new (t || MyQuotationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MyQuotationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyQuotationComponent, selectors: [["app-my-quotation"]], decls: 39, vars: 9, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [2, "float", "right"], ["id", "grds", 2, "width", "50px", 3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [2, "background-color", "#ffc107", "border", "none", "color", "white", "padding", "5px 7px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", "margin-left", "20px", "margin-bottom", "20px", 3, "click"], ["style", "width: 95%; background-color: #fff;\n        border-radius: 20px; padding: 10px; overflow-x: scroll;", 4, "ngIf"], [2, "width", "95%", "background-color", "#fff", "border-radius", "20px", "padding", "10px", "overflow-x", "scroll"], [3, "style", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "space-evenly", "align-content", "space-around", "width", "80%", "margin", "0 auto", "flex-wrap", "wrap"], [1, "pagination", 2, "cursor", "pointer"], [3, "click", 4, "ngFor", "ngForOf"], [2, "background-color", "orange", "color", "white", "border-radius", "5px"], [3, "value"], [2, "background-color", "#ffc107", "border", "none", "color", "white", "padding", "5px 7px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "click"], [2, "font-size", "1.5em"], [1, "temp"], [1, "delete-button", 2, "border-radius", "20px", "text-decoration", "none", "height", "30px", "width", "30px", 3, "click"], ["type", "text", 1, "input-field", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["type", "date", 1, "input-field", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["id", "grdwds", 2, "width", "50px", 3, "ngModel", "ngModelChange"], ["type", "number", 1, "input-field", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["id", "grds", 2, "width", "50px", 3, "ngModel", "ngModelChange"], ["id", "log"], [2, "background-color", "#ffc107", "border", "none", "color", "white", "padding", "5px 5px", "text-align", "center", "text-decoration", "none", "font-size", "13px", 3, "click"], [1, "bx", "bx-right-arrow-alt", 2, "color", "blue", "font-size", "20px", 3, "click"], [3, "click"]], template: function MyQuotationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Quotation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Unit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MyQuotationComponent_Template_select_change_10_listener() { return ctx.change_unit(); })("ngModelChange", function MyQuotationComponent_Template_select_ngModelChange_10_listener($event) { return ctx.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyQuotationComponent_option_12_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuotationComponent_Template_button_click_13_listener() { return ctx.new_invoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "New Quotation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyQuotationComponent_div_15_Template, 24, 14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyQuotationComponent_div_16_Template, 55, 17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Trade Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MyQuotationComponent_tr_32_Template, 22, 7, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MyQuotationComponent_a_35_Template, 2, 1, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MyQuotationComponent_a_38_Template, 2, 1, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoice == "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoice == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagination_left);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagination_right);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: [".row-color[_ngcontent-%COMP%] {\r\n    background-color: #d8d8d8;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n    background-color: orange; \r\n    border: none;\r\n    color: white;\r\n    padding: 7px 7px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n  }\r\n.delete-button[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 63, 63);\r\n    font-size: 14px;\r\n    border:none\r\n  }\r\n.temp[_ngcontent-%COMP%] {\r\n    max-width:130px;\r\n    overflow:hidden;  \r\n    margin: auto;\r\n  }\r\n\r\n.dropbtn[_ngcontent-%COMP%] {\r\n    background-color: #04AA6D;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n    background-color: #3e8e41;\r\n  }\r\n\r\n#myInput[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 15px 10px 10px 15px;\r\n    border: none;\r\n    border-bottom: 1px solid #ddd;\r\n    width: 230px;\r\n  }\r\n\r\n#myInput[_ngcontent-%COMP%]:focus {outline: 3px solid #ddd;}\r\n\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f6f6f6;\r\n    min-width: 200px;\r\n    \r\n    border: 1px solid #ddd;\r\n    z-index: 1;\r\n    width: 230px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    max-height: 250px;\r\n    \r\n  }\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: none;\r\n  }\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #f1f1f1}\r\n\r\n.show[_ngcontent-%COMP%] {display:block;}\r\n.pagination[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    transition: all 1s linear;\r\n  }\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    float: left;\r\n    padding: 4px 8px;\r\n    text-decoration: none;\r\n  }\r\n.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {background-color: #ddd;}\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background-color: #e7e7e7; \r\n    color: black;\r\n    padding: 5px 10px; \r\n    cursor: pointer; \r\n    float: left; \r\n    border: none;\r\n    font-size: 14px;\r\n  }\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\r\n    border-right: none; \r\n  }\r\n\r\n.btn-group[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(226, 226, 226);\r\n  }\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  text-align: center;\r\n}\r\n.temp[_ngcontent-%COMP%] {\r\n  max-width:130px;\r\n  overflow:hidden;  \r\n  margin: auto;\r\n}\r\n.temp[_ngcontent-%COMP%]:hover{\r\n  \r\n  overflow-x: visible;\r\n}\r\n.temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n  -ms-overflow-style: none;  \r\n  scrollbar-width: none;  \r\n}\r\n.switchon[_ngcontent-%COMP%] {\r\n  background-color: #70ff70;\r\n  height: 20px;\r\n  width: 200px;\r\n  border-radius: 20px;\r\n  border:2px solid #2BD47D\r\n  \r\n}\r\n.switchoff[_ngcontent-%COMP%] {\r\n  background-color: #c5c5c5;\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 20px;\r\n  border:5px solid #c5c5c5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXF1b3RhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmO0VBQ0Y7QUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBR0YsYUFBYTtBQUVYO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBRUEscUNBQXFDO0FBQ3JDO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0UsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7RUFDZDtBQUVBLG1EQUFtRDtBQUNuRCxnQkFBZ0IsdUJBQXVCLENBQUM7QUFFeEMsa0VBQWtFO0FBRWxFLHlDQUF5QztBQUN6QztJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjs7SUFFaEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7O0VBRW5CO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0FBRUEsNENBQTRDO0FBQzVDLDJCQUEyQix5QkFBeUI7QUFFcEQscUlBQXFJO0FBQ3JJLE9BQU8sYUFBYSxDQUFDO0FBR3ZCO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0FBRUEsa0NBQWtDLHNCQUFzQixDQUFDO0FBRXpEO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUIsRUFBRSxpQkFBaUI7SUFDcEMsZUFBZSxFQUFFLHNCQUFzQjtJQUN2QyxXQUFXLEVBQUUsbUNBQW1DO0lBQ2hELFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxrQkFBa0IsRUFBRSwyQkFBMkI7RUFDakQ7QUFFQSxpQ0FBaUM7QUFDakM7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7RUFDaEI7QUFFQSxvQ0FBb0M7QUFDcEM7SUFDRSxvQ0FBb0M7RUFDdEM7QUFJRjtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSx3QkFBd0IsR0FBRyxnQkFBZ0I7RUFDM0MscUJBQXFCLEdBQUcsWUFBWTtBQUN0QztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25COztBQUVGO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6Im15LXF1b3RhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ucm93LWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogN3B4IDdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5kZWxldGUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDYzLCA2Myk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6bm9uZVxyXG4gIH1cclxuICAudGVtcCB7XHJcbiAgICBtYXgtd2lkdGg6MTMwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47ICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG5cclxuLyogZHJvcGRvd24gKi9cclxuXHJcbiAgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIERyb3Bkb3duIGJ1dHRvbiBvbiBob3ZlciAmIGZvY3VzICovXHJcbiAgLmRyb3BidG46aG92ZXIsIC5kcm9wYnRuOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBzZWFyY2ggZmllbGQgKi9cclxuICAjbXlJbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBzZWFyY2ggZmllbGQgd2hlbiBpdCBnZXRzIGZvY3VzL2NsaWNrZWQgb24gKi9cclxuICAjbXlJbnB1dDpmb2N1cyB7b3V0bGluZTogM3B4IHNvbGlkICNkZGQ7fVxyXG4gIFxyXG4gIC8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuIFxyXG4gIC8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxfVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXHJcbiAgLnNob3cge2Rpc3BsYXk6YmxvY2s7fVxyXG5cclxuICBcclxuLnBhZ2luYXRpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24gYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuXHJcbiAgLmJ0bi1ncm91cCBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIvaGFuZCBpY29uICovXHJcbiAgICBmbG9hdDogbGVmdDsgLyogRmxvYXQgdGhlIGJ1dHRvbnMgc2lkZSBieSBzaWRlICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZ3JvdXAgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyAvKiBQcmV2ZW50IGRvdWJsZSBib3JkZXJzICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyAoY2xlYXJmaXggaGFjaykgKi9cclxuICAuYnRuLWdyb3VwOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXHJcbiAgLmJ0bi1ncm91cCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG4gIH1cclxuXHJcblxyXG5cclxudGgsIHRkIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZW1wIHtcclxuICBtYXgtd2lkdGg6MTMwcHg7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuOyAgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi50ZW1wOmhvdmVye1xyXG4gIFxyXG4gIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbn1cclxuLnRlbXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cclxuLnRlbXAge1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG4uc3dpdGNob24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGZmNzA7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjoycHggc29saWQgIzJCRDQ3RFxyXG4gIFxyXG59XHJcblxyXG4uc3dpdGNob2ZmIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWM1O1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjo1cHggc29saWQgI2M1YzVjNTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class ProfileComponent {
    constructor(router, ds) {
        this.router = router;
        this.ds = ds;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
        this.ds.getMyRoles({ token: localStorage.getItem('token') }).subscribe((response) => {
            if (response.status == 'ok') {
                if (response.data.admin_role) {
                    document.getElementById("admin").style.display = 'block';
                }
                if (response.data.moderator_role) {
                    document.getElementById("moderator").style.display = 'block';
                }
                if (response.data.salesman_role) {
                    document.getElementById("salesman").style.display = 'block';
                }
            }
        });
    }
    // save():any {
    //   if (this.email==null || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
    //     document.getElementById('log').innerHTML='Invalid Email'
    //     return 0;
    //   }
    //   if (this.name==null || this.name=='') {
    //     document.getElementById('log').innerHTML='Invalid Name'
    //     return 0;
    //   }
    //   this.ds.editDetails({token:localStorage.getItem('token'), name:this.name, user:this.email}).subscribe((response)=>{
    //     if (response.status=='ok') {
    //       document.getElementById('log').innerHTML='Saved!';
    //       localStorage.setItem('email', this.email);
    //       localStorage.setItem('name', this.name);
    //       localStorage.setItem('token', response.token);
    //     }
    //     else {
    //       document.getElementById('log').innerHTML='Couldn\'t Save.';
    //     }
    //   })
    // } 
    change() {
        this.router.navigate(['/changepassword'], { queryParams: { forgot: '0' } });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 22, vars: 2, consts: [[1, "main", 2, "margin-left", "30px"], [1, "wrapper"], [1, "card"], [1, "form"], ["f", "ngForm"], [1, "form-group", 2, "display", "block"], ["id", "admin", 1, "input-submit", 2, "display", "none", "border-radius", "5px", "cursor", "auto", "border", "1px solid grey", "background-color", "white", "color", "black", "padding", "5px", "margin", "10px"], ["id", "moderator", 1, "input-submit", 2, "display", "none", "border-radius", "5px", "cursor", "auto", "border", "1px solid grey", "background-color", "white", "color", "black", "padding", "5px", "margin", "10px"], ["id", "salesman", 1, "input-submit", 2, "display", "none", "border-radius", "5px", "cursor", "auto", "border", "1px solid grey", "background-color", "white", "color", "black", "padding", "5px", "margin", "10px"], [1, "form-group"], ["type", "name", "name", "name", "placeholder", "Name", "id", "name", "disabled", "disabled", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email Address", "id", "email", "disabled", "disabled", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "a", 1, "input-submit", 3, "click"], ["id", "log"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profile:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Moderator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Salesman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_15_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_17_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_19_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  line-height: 1.5;\r\n  color: #252a32;\r\n  background: #f1f5f8;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\na[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  max-width: 85rem;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0 2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  max-width: 28rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding: 5rem 1.5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  padding: 1.5rem 2rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 4px;\r\n  color: #252a32;\r\n  background: #ffffff;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.icons[_ngcontent-%COMP%] {\r\n  font-size: 1.45rem;\r\n  line-height: inherit;\r\n  margin-right: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n}\r\n\r\n.icons-google[_ngcontent-%COMP%] {\r\n  color: #d32f2f;\r\n}\r\n\r\n.icons-facebook[_ngcontent-%COMP%] {\r\n  color: #0f698a;\r\n}\r\n\r\n.icons-apple[_ngcontent-%COMP%] {\r\n  color: #252a32;\r\n}\r\n\r\n.linktext[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  line-height: inherit;\r\n  color: #148cb8;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.linktext[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  line-height: inherit;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.title-large[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: #252a32;\r\n}\r\n\r\n.title-subs[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  line-height: inherit;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin: 2rem 0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  line-height: inherit;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0.75rem 1.25rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2rem;\r\n  color: #252a32;\r\n  background: #f1f5f8;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  line-height: inherit;\r\n  cursor: pointer;\r\n  padding: 0.65rem 2rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2rem;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background: #65a3c0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line-bar[_ngcontent-%COMP%] {\r\n  flex: auto;\r\n  flex-basis: auto;\r\n  border: none;\r\n  outline: none;\r\n  height: 1.3px;\r\n  background: #bed1df;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line-text[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #252a32;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  line-height: inherit;\r\n  padding: 0.2rem 1rem;\r\n  width: 100%;\r\n  height: auto;\r\n  outline: none;\r\n  border: 1.3px solid #bed1df;\r\n  border-radius: 2rem;\r\n  color: #252a32;\r\n  background: #ffffff;\r\n  transition: all 0.35s ease;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\r\n  background: #cfdde7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOztFQUVFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBQ0E7RUFFRSxhQUFhO0VBR0wsbUJBQW1CO0VBRW5CLDhCQUE4QjtFQUU5QixtQkFBbUI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUVFLGFBQWE7RUFHTCxtQkFBbUI7RUFFbkIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFFVSxVQUFVO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFFRSxhQUFhO0VBR0wsbUJBQW1CO0VBRW5CLHVCQUF1QjtFQUV2QixtQkFBbUI7RUFDM0Isb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFFbkIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzI1MmEzMjtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuYSxcclxuYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDg1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDI4cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjMjUyYTMyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5pY29ucy1nb29nbGUge1xyXG4gIGNvbG9yOiAjZDMyZjJmO1xyXG59XHJcbi5pY29ucy1mYWNlYm9vayB7XHJcbiAgY29sb3I6ICMwZjY5OGE7XHJcbn1cclxuLmljb25zLWFwcGxlIHtcclxuICBjb2xvcjogIzI1MmEzMjtcclxufVxyXG5cclxuLmxpbmt0ZXh0IHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgY29sb3I6ICMxNDhjYjg7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxufVxyXG4ubGlua3RleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbn1cclxuLnRpdGxlLWxhcmdlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzI1MmEzMjtcclxufVxyXG4udGl0bGUtc3VicyB7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYWluIC53cmFwcGVyIC5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmZvcm0tZ3JvdXAgLmlucHV0LWZpZWxkIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbiAgYmFja2dyb3VuZDogI2YxZjVmODtcclxufVxyXG4ubWFpbiAud3JhcHBlciAuZm9ybS1ncm91cCAuaW5wdXQtc3VibWl0IHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMC42NXJlbSAycmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM2NWEzYzA7XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmxpbmUge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5saW5lLWJhciB7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAgIGZsZXg6IGF1dG87XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDEuM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNiZWQxZGY7XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmxpbmUtdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzI1MmEzMjtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLm1ldGhvZC1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLm1ldGhvZC1pdGVtIC5idG4tYWN0aW9uIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogMC4ycmVtIDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxLjNweCBzb2xpZCAjYmVkMWRmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5tZXRob2QtaXRlbSAuYnRuLWFjdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2NmZGRlNztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAGK":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], decls: 2, vars: 0, template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "Hipp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manage-roles/manage-roles.component */ "/xin");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports/reports.component */ "ZAGK");
/* harmony import */ var _new_block_new_block_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-block/new-block.component */ "QCoJ");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inventory/inventory.component */ "Cg25");
/* harmony import */ var _my_sales_my_sales_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./my-sales/my-sales.component */ "LWxi");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/blocks.component */ "+A3O");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./block/block.component */ "xo3F");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./activity/activity.component */ "1VWD");
/* harmony import */ var _parties_parties_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parties/parties.component */ "BSPV");
/* harmony import */ var _quarries_quarries_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quarries/quarries.component */ "IMq3");
/* harmony import */ var _add_invoice_add_invoice_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-invoice/add-invoice.component */ "xO1T");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-item/add-item.component */ "cV+c");
/* harmony import */ var _yards_yards_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./yards/yards.component */ "EM0T");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./company/company.component */ "Qmlm");
/* harmony import */ var _slabs_slabs_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./slabs/slabs.component */ "ndUa");
/* harmony import */ var _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-block/edit-block.component */ "BS3H");
/* harmony import */ var _edit_slabs_edit_slabs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-slabs/edit-slabs.component */ "xdZY");
/* harmony import */ var _units_units_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./units/units.component */ "mvb2");
/* harmony import */ var _batch_task_batch_task_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./batch-task/batch-task.component */ "vBB9");
/* harmony import */ var _edit_thappi_edit_thappi_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./edit-thappi/edit-thappi.component */ "rN9m");
/* harmony import */ var _my_quotation_my_quotation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./my-quotation/my-quotation.component */ "VK7j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ "fXoL");

































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
        _manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_10__["ManageRolesComponent"],
        _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__["ReportsComponent"],
        _new_block_new_block_component__WEBPACK_IMPORTED_MODULE_12__["NewBlockComponent"],
        _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"],
        _my_sales_my_sales_component__WEBPACK_IMPORTED_MODULE_14__["MySalesComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
        _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_16__["BlocksComponent"],
        _block_block_component__WEBPACK_IMPORTED_MODULE_17__["BlockComponent"],
        _activity_activity_component__WEBPACK_IMPORTED_MODULE_18__["ActivityComponent"],
        _parties_parties_component__WEBPACK_IMPORTED_MODULE_19__["PartiesComponent"],
        _quarries_quarries_component__WEBPACK_IMPORTED_MODULE_20__["QuarriesComponent"],
        _add_invoice_add_invoice_component__WEBPACK_IMPORTED_MODULE_21__["AddInvoiceComponent"],
        _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_22__["AddItemComponent"],
        _yards_yards_component__WEBPACK_IMPORTED_MODULE_23__["YardsComponent"],
        _company_company_component__WEBPACK_IMPORTED_MODULE_24__["CompanyComponent"],
        _slabs_slabs_component__WEBPACK_IMPORTED_MODULE_25__["SlabsComponent"],
        _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_26__["EditBlockComponent"],
        _edit_slabs_edit_slabs_component__WEBPACK_IMPORTED_MODULE_27__["EditSlabsComponent"],
        _units_units_component__WEBPACK_IMPORTED_MODULE_28__["UnitsComponent"],
        _batch_task_batch_task_component__WEBPACK_IMPORTED_MODULE_29__["BatchTaskComponent"],
        _edit_thappi_edit_thappi_component__WEBPACK_IMPORTED_MODULE_30__["EditThappiComponent"],
        _my_quotation_my_quotation_component__WEBPACK_IMPORTED_MODULE_31__["MyQuotationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();


/***/ }),

/***/ "cV+c":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function AddItemComponent_div_8_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r6.yard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r6.yard);
} }
function AddItemComponent_div_8_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r7.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r7.company);
} }
function AddItemComponent_div_8_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r8.quarry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r8.quarry);
} }
function AddItemComponent_div_8_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r9.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r9.unit);
} }
function AddItemComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No. of blocks :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.no_of_new_blocks = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Invoice Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.invoice_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Truck no:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.truck_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Builty no:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.builty_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Royalty no:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.royalty_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "E-way bill no:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.eway_bill_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Yard:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_select_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.yard = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AddItemComponent_div_8_option_45_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Company:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_select_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.company = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AddItemComponent_div_8_option_53_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Quarry:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddItemComponent_div_8_Template_select_change_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.populate_hsn(); })("ngModelChange", function AddItemComponent_div_8_Template_select_ngModelChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.quarry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AddItemComponent_div_8_option_61_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Layer Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_input_ngModelChange_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.layer_type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Unit: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_select_ngModelChange_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.unit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AddItemComponent_div_8_option_74_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_input_ngModelChange_80_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Hsn code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_input_ngModelChange_86_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.hsn_code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Transport cost per ton:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_div_8_Template_input_ngModelChange_92_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.transportation_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_div_8_Template_button_click_97_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.expand(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.no_of_new_blocks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.invoice_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.truck_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.builty_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.royalty_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.eway_bill_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.yard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.yards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.companies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.quarry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.quarries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.layer_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.hsn_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.transportation_cost);
} }
function AddItemComponent_tr_34_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r31);
} }
function AddItemComponent_tr_34_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r32);
} }
function AddItemComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_tr_34_Template_input_ngModelChange_4_listener($event) { const f_r27 = ctx.$implicit; return f_r27.block_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_tr_34_Template_select_ngModelChange_8_listener($event) { const f_r27 = ctx.$implicit; return f_r27.shade = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddItemComponent_tr_34_option_10_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_tr_34_Template_select_ngModelChange_14_listener($event) { const f_r27 = ctx.$implicit; return f_r27.grade = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddItemComponent_tr_34_option_16_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddItemComponent_tr_34_Template_input_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const i_r28 = ctx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.calc(i_r28); })("ngModelChange", function AddItemComponent_tr_34_Template_input_ngModelChange_20_listener($event) { const f_r27 = ctx.$implicit; return f_r27.dim_1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddItemComponent_tr_34_Template_input_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const i_r28 = ctx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.calc(i_r28); })("ngModelChange", function AddItemComponent_tr_34_Template_input_ngModelChange_24_listener($event) { const f_r27 = ctx.$implicit; return f_r27.dim_2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddItemComponent_tr_34_Template_input_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const i_r28 = ctx.index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.calc(i_r28); })("ngModelChange", function AddItemComponent_tr_34_Template_input_ngModelChange_28_listener($event) { const f_r27 = ctx.$implicit; return f_r27.dim_3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddItemComponent_tr_34_Template_input_change_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.calc_transport(); })("ngModelChange", function AddItemComponent_tr_34_Template_input_ngModelChange_32_listener($event) { const f_r27 = ctx.$implicit; return f_r27.weight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddItemComponent_tr_34_Template_input_change_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const i_r28 = ctx.index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.populate_purchase_cost(i_r28); })("ngModelChange", function AddItemComponent_tr_34_Template_input_ngModelChange_36_listener($event) { const f_r27 = ctx.$implicit; return f_r27.costperton = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_tr_34_Template_input_ngModelChange_40_listener($event) { const f_r27 = ctx.$implicit; return f_r27.cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemComponent_tr_34_Template_input_ngModelChange_44_listener($event) { const f_r27 = ctx.$implicit; return f_r27.transportation_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_tr_34_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const i_r28 = ctx.index; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.sendform(i_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", i_r28 % 2 ? "#fff" : "#e4e4e4", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r27.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r27.shade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.shades);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r27.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.grades);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r27.dim_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r27.dim_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r27.dim_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r27.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r27.costperton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r27.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r27.transportation_cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r27.log, " ");
} }
class AddItemComponent {
    constructor(router, ds) {
        this.router = router;
        this.ds = ds;
        this.forms = [];
        this.shades = [];
        this.grades = [];
        this.clicked = false;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.ds.getYards({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.yards = (res.data);
            }
        });
        this.ds.getQuarries({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.quarries = (res.data);
            }
        });
        this.ds.getCompanies({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.companies = res.data;
            }
        });
        this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.units = res.data;
            }
        });
    }
    expand() {
        this.factor_of_unit(this.unit);
        if (this.no_of_new_blocks < 1 || this.no_of_new_blocks === undefined) {
            return;
        }
        this.clicked = true;
        for (var i = 0; i < this.no_of_new_blocks; i++) {
            this.forms.push({
                block_no: '',
                quarry: '',
                shade: '',
                grade: '',
                dim_1: '',
                dim_2: '',
                dim_3: '',
                weight: '',
                cost: '',
                note: '',
                log: ''
            });
        }
        for (let i = 0; i < this.quarries.length; i++) {
            if (this.quarries[i].quarry == this.quarry) {
                this.shades = this.quarries[i].shade.split(',');
                this.grades = this.quarries[i].grade.split(',');
                return;
            }
        }
        this.shades = [];
        this.grades = [];
    }
    sendform(f_no) {
        if (this.forms[f_no].block_no == null || this.forms[f_no].block_no == '') {
            this.forms[f_no].log = 'Cannot save this.';
            return 0;
        }
        let dim_1 = this.forms[f_no].dim_1, dim_2 = this.forms[f_no].dim_2, dim_3 = this.forms[f_no].dim_3;
        if (this.factor) {
            dim_1 = (parseFloat(this.forms[f_no].dim_1) * parseFloat(this.factor));
            dim_2 = (parseFloat(this.forms[f_no].dim_2) * parseFloat(this.factor));
            dim_3 = (parseFloat(this.forms[f_no].dim_3) * parseFloat(this.factor));
        }
        this.ds.newBlock({
            token: localStorage.getItem('token'),
            block_no: this.forms[f_no].block_no.toLowerCase(),
            yard: this.yard,
            date: this.date,
            hsn_code: this.hsn_code,
            quarry: this.quarry,
            shade: this.forms[f_no].shade,
            grade: this.forms[f_no].grade,
            weight: this.forms[f_no].weight,
            dim_1: (dim_1),
            dim_2: (dim_2),
            dim_3: (dim_3),
            transportation_cost: this.forms[f_no].transportation_cost,
            cost: this.forms[f_no].cost,
            invoice_no: this.invoice_no,
            truck_no: this.truck_no,
            builty_no: this.builty_no,
            royalty_no: this.royalty_no,
            eway_bill_no: this.eway_bill_no,
            company: this.company,
            unit: this.unit,
            layer_type: this.layer_type
        }).subscribe((response) => {
            if (response.status == 'ok') {
                this.forms[f_no].log = 'Saved!';
            }
            else {
                this.forms[f_no].log = 'Failed.';
            }
        });
    }
    calc(f_no) {
        let i;
        for (i = 0; i < this.quarries.length; i++) {
            if (this.quarries[i].quarry == this.quarry) {
                // weight= specific gravity * density of water * volume of the substance you want * acceleration of free fall (9.8)
                let dim_1 = this.forms[f_no].dim_1 * this.factor;
                let dim_2 = this.forms[f_no].dim_2 * this.factor;
                let dim_3 = this.forms[f_no].dim_3 * this.factor;
                let volume = dim_1 * dim_2 * dim_3;
                this.forms[f_no].weight = (this.quarries[i].specific_gravity * volume * 0.000000001).toFixed(3);
                this.forms[f_no].transportation_cost = (parseFloat(this.transportation_cost) * (parseFloat(this.forms[f_no].weight))).toFixed(3);
                break;
            }
        }
        this.calc_transport();
    }
    calc_transport() {
    }
    populate_purchase_cost(i) {
        this.forms[i].cost = this.forms[i].weight * this.forms[i].costperton;
    }
    populate_hsn() {
        for (let i = 0; i < this.quarries.length; i++) {
            if (this.quarry == this.quarries[i].quarry) {
                this.hsn_code = this.quarries[i].hsn_code;
                break;
            }
        }
    }
    factor_of_unit(u) {
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].unit == u) {
                this.factor = this.units[i].factor;
                return;
            }
        }
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["app-add-item"]], decls: 35, vars: 4, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], ["class", "sales-boxes", 4, "ngIf"], [2, "width", "95%", "background-color", "#fff", "border-radius", "20px", "padding", "10px", "overflow-x", "scroll"], [3, "style", 4, "ngFor", "ngForOf"], [1, "sales-boxes"], [1, "recent-sales", "box"], ["id", "addblock", "autocomplete", "off", 1, "input-block"], ["type", "number", "name", "block_number", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "inv", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "trck", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "buino", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "roylt", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "eway", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "yard", "id", "yard", 2, "width", "150px", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "compa", "id", "we", 2, "width", "150px", 3, "ngModel", "ngModelChange"], ["name", "quarry", "id", "quarry", 2, "width", "150px", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "name", "layer", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "gsfgwefwesrd", "id", "grd", 2, "width", "50px", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "date", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "hsn", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "tran", 1, "input-field", 3, "ngModel", "ngModelChange"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "15px 32px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "click"], [3, "value"], [1, "temp"], ["autocomplete", "off", "type", "text", "name", "block_number", "required", "", 1, "input-field", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["name", "shdddd", "id", "shd", 2, "width", "100px", 3, "ngModel", "ngModelChange"], [1, "temp", 2, "width", "70px"], ["name", "shd", "id", "shd", 2, "width", "70px", 3, "ngModel", "ngModelChange"], [1, "temp", 2, "width", "60px"], ["autocomplete", "off", "type", "number", "name", "qwef", 1, "input-field", 2, "width", "70px", 3, "ngModel", "change", "ngModelChange"], ["autocomplete", "off", "type", "number", "name", "qfqweddwwwwfq", 1, "input-field", 2, "width", "70px", 3, "ngModel", "change", "ngModelChange"], ["autocomplete", "off", "type", "number", "name", "qergqqdfg", 1, "input-field", 2, "width", "70px", 3, "ngModel", "change", "ngModelChange"], ["autocomplete", "off", "name", "wergight", "type", "number", 1, "input-field", 2, "width", "70px", 3, "ngModel", "change", "ngModelChange"], ["autocomplete", "off", "name", "weiggwdljeght", "type", "number", 1, "input-field", 2, "width", "70px", 3, "ngModel", "change", "ngModelChange"], ["autocomplete", "off", "name", "weiggweght", "type", "number", 1, "input-field", 2, "width", "70px", 3, "ngModel", "ngModelChange"], ["autocomplete", "off", "name", "weiqghtwht", "type", "number", 1, "input-field", 2, "width", "70px", 3, "ngModel", "ngModelChange"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "7px 10px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "13px", 3, "click"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddItemComponent_div_8_Template, 99, 18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Block no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Purc. Cst./TON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Purc. Cst.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "T. Cst.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddItemComponent_tr_34_Template, 51, 16, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clicked == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("W[", ctx.unit, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.forms);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    text-align: center;\r\n    width: 100px;\r\n    \r\n  }\r\n.temp[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    overflow:hidden;  \r\n}\r\n.temp[_ngcontent-%COMP%]:hover{\r\n    \r\n    overflow-x: visible;\r\n}\r\n.temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n    -ms-overflow-style: none;  \r\n    scrollbar-width: none;  \r\n  }\r\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button { \r\n      -webkit-appearance: none;\r\n      -moz-appearance: none;\r\n      appearance: none;\r\n      margin: 0; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTs7RUFFZDtBQUNGO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7RUFDZjtBQUVBLDRDQUE0QztBQUM1QztJQUNFLHdCQUF3QixHQUFHLGdCQUFnQjtJQUMzQyxxQkFBcUIsR0FBRyxZQUFZO0VBQ3RDO0FBRUE7O01BRUksd0JBQXdCO01BQ3hCLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsU0FBUztFQUNiIiwiZmlsZSI6ImFkZC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbnRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIFxyXG4gIH1cclxuLnRlbXAge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuOyAgXHJcbn1cclxuLnRlbXA6aG92ZXJ7XHJcbiAgICBcclxuICAgIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbn1cclxuXHJcbi50ZW1wOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cclxuICAudGVtcCB7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG4gIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwOyBcclxuICB9Il19 */"] });


/***/ }),

/***/ "mvb2":
/*!******************************************!*\
  !*** ./src/app/units/units.component.ts ***!
  \******************************************/
/*! exports provided: UnitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsComponent", function() { return UnitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UnitsComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitsComponent_tr_29_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.delete(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r2 % 2 ? "" : "row-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.factor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("product ", i_r2 % 2 ? "" : "row-color", "");
} }
class UnitsComponent {
    constructor(ds) {
        this.ds = ds;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.units = res.data;
            }
        });
    }
    save() {
        if (this.unit == null || this.unit == '') {
            this.log = 'Enter unit.';
            return 0;
        }
        this.ds.addUnit({
            token: localStorage.getItem('token'),
            unit: this.unit,
            factor: this.factor
        }).subscribe((res) => {
            if (res.status == 'ok') {
                // this.router.navigate(['/main/inventory']);
                this.log = 'Saved!';
                this.units = [{ unit: this.unit, factor: this.factor }].concat(this.units);
                this.unit = '';
                this.factor = '';
            }
            else {
                this.log = 'Failed.';
            }
        });
    }
    delete(i) {
        if (window.confirm('Delete unit?')) {
            this.ds.deleteUnit({ token: localStorage.getItem('token'), unit: this.units[i].unit }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.units.splice(i, 1);
                }
            });
        }
    }
}
UnitsComponent.ɵfac = function UnitsComponent_Factory(t) { return new (t || UnitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
UnitsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnitsComponent, selectors: [["app-units"]], decls: 30, vars: 5, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [1, "sales-boxes"], [1, "top-sales", "box", 2, "width", "95%"], [2, "border-bottom", "1px dashed black"], ["name", "date1", "type", "text", "autocomplete", "off", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["name", "quarry", "type", "text", "autocomplete", "off", 1, "input-field", 2, "width", "120px", 3, "ngModel", "ngModelChange"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "7px 15px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "click"], [4, "ngFor", "ngForOf"], [1, "temp"], [1, "delete-button", 2, "border-radius", "20px", "text-decoration", "none", "height", "30px", "width", "30px", 3, "click"]], template: function UnitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnitsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnitsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.factor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitsComponent_Template_button_click_17_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Factor (mm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UnitsComponent_tr_29_Template, 10, 11, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.factor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    width: auto;\r\n  }\r\n  \r\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    padding: 20px 30px 20px 30px;\r\n  }\r\n  \r\n  .sales-boxes[_ngcontent-%COMP%]{\r\n    margin:20px;\r\n  }\r\n  \r\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n    max-width: 300px;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n  }\r\n  \r\n  .row-color[_ngcontent-%COMP%] {\r\n    background-color: #d8d8d8;\r\n  }\r\n  \r\n  .button[_ngcontent-%COMP%] {\r\n    background-color: orange; \r\n    border: none;\r\n    color: white;\r\n    padding: 7px 7px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .delete-button[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 158, 158);\r\n    font-size: 14px;\r\n    border:none\r\n  }\r\n  \r\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%] {\r\n    max-width:130px;\r\n    overflow:hidden;  \r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%]:hover{\r\n    \r\n    overflow-x: visible;\r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  \r\n  \r\n  \r\n  .temp[_ngcontent-%COMP%] {\r\n    -ms-overflow-style: none;  \r\n    scrollbar-width: none;  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFJQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZjtFQUNGOztFQUdBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUNBOztJQUVFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQSw0Q0FBNEM7O0VBQzVDO0lBQ0Usd0JBQXdCLEdBQUcsZ0JBQWdCO0lBQzNDLHFCQUFxQixHQUFHLFlBQVk7RUFDdEMiLCJmaWxlIjoidW5pdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIGEgaW1ne1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC50b3Atc2FsZXN7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zYWxlcy1ib3hlc3tcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2VhcmNoLWJveHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGlua3MgbGl7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5yb3ctY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogN3B4IDdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTU4LCAxNTgpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOm5vbmVcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGVtcCB7XHJcbiAgICBtYXgtd2lkdGg6MTMwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47ICBcclxuICB9XHJcbiAgLnRlbXA6aG92ZXJ7XHJcbiAgICBcclxuICAgIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZW1wOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cclxuICAudGVtcCB7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "ndUa":
/*!******************************************!*\
  !*** ./src/app/slabs/slabs.component.ts ***!
  \******************************************/
/*! exports provided: SlabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlabsComponent", function() { return SlabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SlabsComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r7.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r7.unit);
} }
function SlabsComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlabsComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SlabsComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In-transit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SlabsComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.s.yard);
} }
function SlabsComponent_span_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Polishing Cost per slab : \u20B9 ", ctx_r4.s.polishing_cost.toFixed(3), " ");
} }
function SlabsComponent_tr_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r10.to_yard ? y_r10.to_yard : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r10.transportation_cost ? y_r10.transportation_cost.toFixed(2) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r10.date ? y_r10.date : "");
} }
function SlabsComponent_button_150_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlabsComponent_button_150_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.report_lost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SlabsComponent {
    constructor(router, ds, route) {
        this.router = router;
        this.ds = ds;
        this.route = route;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 8);
        this.route.queryParams.subscribe((par) => {
            this.ds.getSlabs({ token: localStorage.getItem('token'), block_no: par.block })
                .subscribe((res) => {
                if (res.status == 'ok') {
                    this.s = res.slabs;
                    this.b = res.block;
                    this.quarry = res.quarry;
                    this.s.unit = res.unit.unit;
                    this.s.factor = res.unit.factor;
                }
            });
        });
        this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.units = res.data;
            }
        });
        this.ds.getMyRoles({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.salesman = res.data.salesman_role;
                this.moderator = res.data.moderator_role;
            }
        });
    }
    edit() {
        this.router.navigate(['/main/edit-slabs'], { queryParams: { block: this.s.block_no } });
    }
    report_lost() {
        this.lost_log = '';
        this.ds.lostSlabs({ token: localStorage.getItem('token'), block_no: this.s.block_no, lost: this.lost_slabs })
            .subscribe((res) => {
            this.lost_log = res.status;
            if (res.status == "ok") {
                this.s.lost += this.lost_slabs;
            }
        });
    }
    change_unit() {
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].unit == this.s.unit) {
                this.s.factor = this.units[i].factor;
                break;
            }
        }
    }
}
SlabsComponent.ɵfac = function SlabsComponent_Factory(t) { return new (t || SlabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SlabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlabsComponent, selectors: [["app-slabs"]], decls: 151, vars: 35, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [2, "float", "right"], ["name", "gsfgwefwesrd", "id", "grd", 2, "width", "50px", 3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["style", "background-color: #65a3c0; \n    border: none;\n    color: white;\n    padding: 8px 14px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin-left: 20px;", 3, "click", 4, "ngIf"], [2, "background-color", "#fff", "box-shadow", "0 5px 10px rgba(0,0,0,0.1)", "max-width", "500px", "padding", "20px", "border-radius", "20px", "margin", "20px", "overflow-x", "scroll", "word-wrap", "break-word"], [3, "href"], ["style", "color:green;", 4, "ngIf"], [4, "ngIf"], [2, "border", "1px solid black", "padding", "10px"], [1, "bx", "bx-move-horizontal", 2, "font-size", "20px"], [1, "bx", "bxs-truck", 2, "font-size", "20px"], [4, "ngFor", "ngForOf"], ["type", "number", 2, "width", "200px", 3, "ngModel", "ngModelChange"], ["style", "background-color: #65a3c0; \n                border: none;\n                color: white;\n                padding: 8px 14px;\n                text-align: center;\n                text-decoration: none;\n                display: inline-block;\n                font-size: 16px;\n                margin-left: 20px;", 3, "click", 4, "ngIf"], [3, "value"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "8px 14px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", "margin-left", "20px", 3, "click"], [2, "color", "green"]], template: function SlabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Slabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Unit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SlabsComponent_Template_select_change_10_listener() { return ctx.change_unit(); })("ngModelChange", function SlabsComponent_Template_select_ngModelChange_10_listener($event) { return ctx.s.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SlabsComponent_option_12_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SlabsComponent_button_13_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Slabs of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Yard : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SlabsComponent_span_23_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SlabsComponent_span_24_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Quarry :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Quarry Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Specific Gravity : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Block Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Shade :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Grade :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Cost per slab :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Processing Cost per slab :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Transport Cost per slab :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, SlabsComponent_span_81_Template, 4, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "No of slabs :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Left :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Length :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Height :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Thickness :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Polished :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Processor : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Company :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Note :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Transport History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "To-Yard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "T Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, SlabsComponent_tr_144_Template, 7, 3, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Report lost slabs:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SlabsComponent_Template_input_ngModelChange_148_listener($event) { return ctx.lost_slabs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, SlabsComponent_button_150_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moderator == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/main/block?block=", ctx.s.block_no, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.has_children ? ctx.s.block_no.split("zzz000")[0] + " - " + ctx.s.block_no.split("zzz000")[1] : ctx.s.block_no, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.in_transit == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.in_transit == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.s.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quarry.quarry, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quarry.quarry_address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quarry.specific_gravity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quarry.block_type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.shade, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.grade, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", ctx.s.cost.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", ctx.s.processing_cost.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", ctx.s.transportation_cost.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.polished);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Cost per Slab: \u20B9 ", (ctx.s.processing_cost + ctx.s.transportation_cost + ctx.s.polishing_cost + ctx.s.cost).toFixed(3), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.s.no_of_slabs, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.s.no_of_slabs - (ctx.s.reserved + ctx.s.sold + ctx.s.lost), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx.s.dim_1 / ctx.s.factor).toFixed(3), " ", ctx.s.unit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx.s.dim_2 / ctx.s.factor).toFixed(3), " ", ctx.s.unit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.s.dim_3, " mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.s.polished, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.s.processor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.company, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.s.note, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.s.yard_history);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lost_slabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lost_log, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moderator == true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]], styles: [".input-block[_ngcontent-%COMP%]{\r\n    width: 350px;\r\n    position: relative;\r\n    margin: 6% auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.headadd[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    background-color: orange; \r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n  }\r\n\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsYWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNsYWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5pbnB1dC1ibG9ja3tcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNiUgYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkYWRke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgdGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "rN9m":
/*!******************************************************!*\
  !*** ./src/app/edit-thappi/edit-thappi.component.ts ***!
  \******************************************************/
/*! exports provided: EditThappiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditThappiComponent", function() { return EditThappiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EditThappiComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r3.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r3.unit);
} }
function EditThappiComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", q_r4.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r4.unit);
} }
function EditThappiComponent_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", y_r5.yard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r5.yard);
} }
class EditThappiComponent {
    constructor(ds, route, router) {
        this.ds = ds;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.route.queryParams.subscribe((par) => {
            this.ds.getBlock({ token: localStorage.getItem('token'),
                block_no: par.block }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.c = res.block;
                    this.block_no = par.block;
                    this.quarry = res.quarry;
                    this.c.factor = res.unit.factor;
                    this.c.dim_1 = this.c.dim_1 / this.c.factor;
                    this.c.dim_2 = this.c.dim_2 / this.c.factor;
                    this.c.dim_3 = this.c.dim_3 / this.c.factor;
                }
            });
        });
        this.ds.getYards({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.yards = res.data;
            }
        });
        this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.units = res.data;
            }
        });
    }
    save() {
        this.log = '';
        this.c.dim_1 = (parseFloat(this.c.dim_1) * parseFloat(this.c.factor));
        this.c.dim_2 = (parseFloat(this.c.dim_2) * parseFloat(this.c.factor));
        this.c.dim_3 = (parseFloat(this.c.dim_3) * parseFloat(this.c.factor));
        // if (this.c.warehouse == null || this.c.warehouse == '') {this.alog(1);return;}
        // if (this.c.date == null || this.c.date == '') {this.alog(2);return;}
        // if ((this.c.slabs.date == null || this.c.slabs.date == '') && this.c.processed) {this.alog(3);return;}
        // if ((this.c.slabs.warehouse == null || this.c.slabs.warehouse == '') && this.c.processed) {this.alog(4);return;}
        // if ((this.c.slabs.no_of_slabs == 0 || typeof this.c.slabs.no_of_slabs != 'number') && this.c.processed) {this.alog(5);return;}
        this.ds.editThappi({ token: localStorage.getItem('token'),
            c: this.c,
            block_no: this.block_no }).subscribe((res) => {
            if (res.status == 'ok') {
                this.log = 'Saved!';
                this.c.dim_1 = (parseFloat(this.c.dim_1) / parseFloat(this.c.factor));
                this.c.dim_2 = (parseFloat(this.c.dim_2) / parseFloat(this.c.factor));
                this.c.dim_3 = (parseFloat(this.c.dim_3) / parseFloat(this.c.factor));
            }
            else {
                this.log = "Failed.";
            }
        });
    }
    calc_weight() {
        let factor_cube = parseFloat(this.c.factor) * parseFloat(this.c.factor) * parseFloat(this.c.factor);
        this.c.weight = ((factor_cube) * parseFloat(this.c.dim_1) * parseFloat(this.c.dim_2) * parseFloat(this.c.dim_3) * 0.000000001 * parseFloat(this.quarry.specific_gravity)).toFixed(4);
    }
    change_unit() {
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].unit == this.c.unit) {
                this.c.factor = this.units[i].factor;
            }
        }
    }
    change_unit_helper() {
        this.c.dim_1 = (parseFloat(this.c.dim_1) * parseFloat(this.c.factor));
        this.c.dim_2 = (parseFloat(this.c.dim_2) * parseFloat(this.c.factor));
        this.c.dim_3 = (parseFloat(this.c.dim_3) * parseFloat(this.c.factor));
    }
    change_dims() {
        this.c.dim_1 = (parseFloat(this.c.dim_1) / parseFloat(this.c.factor));
        this.c.dim_2 = (parseFloat(this.c.dim_2) / parseFloat(this.c.factor));
        this.c.dim_3 = (parseFloat(this.c.dim_3) / parseFloat(this.c.factor));
    }
}
EditThappiComponent.ɵfac = function EditThappiComponent_Factory(t) { return new (t || EditThappiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditThappiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditThappiComponent, selectors: [["app-edit-thappi"]], decls: 92, vars: 18, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [2, "float", "right"], ["name", "gsfgwefwesrd", "id", "grd", 2, "width", "50px", 3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [2, "margin-left", "20px"], [2, "height", "30px"], [1, "sales-boxes"], [1, "recent-sales", "box"], [1, "input-block"], ["name", "date", "type", "date", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "height", 1, "input-field", 2, "width", "80px", 3, "ngModel", "change", "ngModelChange"], ["type", "number", "name", "width", 1, "input-field", 2, "width", "80px", 3, "ngModel", "change", "ngModelChange"], ["type", "number", "name", "breadth", 1, "input-field", 2, "width", "80px", 3, "ngModel", "change", "ngModelChange"], ["name", "unitt", "id", "wth", 2, "width", "100px", 3, "ngModel", "change", "ngModelChange"], ["name", "weight", "type", "number", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "payment", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "transportation_cost", "type", "text", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "yard", "id", "yard", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "paymerggnt", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "note", 1, "input-field", 3, "ngModel", "ngModelChange"], [2, "margin", "20px", "color", "red"], [2, "background-color", "#00a0d1", "border", "none", "color", "white", "padding", "15px 32px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", "margin-left", "20px", "margin-bottom", "20px", 3, "click"], [3, "value"]], template: function EditThappiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Unit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditThappiComponent_Template_select_change_10_listener() { ctx.change_unit_helper(); ctx.change_unit(); return ctx.change_dims(); })("ngModelChange", function EditThappiComponent_Template_select_ngModelChange_10_listener($event) { return ctx.c.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditThappiComponent_option_12_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Block ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditThappiComponent_Template_input_ngModelChange_27_listener($event) { return ctx.c.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "L :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditThappiComponent_Template_input_change_33_listener() { return ctx.calc_weight(); })("ngModelChange", function EditThappiComponent_Template_input_ngModelChange_33_listener($event) { return ctx.c.dim_1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "H :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditThappiComponent_Template_input_change_37_listener() { return ctx.calc_weight(); })("ngModelChange", function EditThappiComponent_Template_input_ngModelChange_37_listener($event) { return ctx.c.dim_2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "W :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditThappiComponent_Template_input_change_41_listener() { return ctx.calc_weight(); })("ngModelChange", function EditThappiComponent_Template_input_ngModelChange_41_listener($event) { return ctx.c.dim_3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditThappiComponent_Template_select_change_42_listener() { ctx.change_unit(); return ctx.calc_weight(); })("ngModelChange", function EditThappiComponent_Template_select_ngModelChange_42_listener($event) { return ctx.c.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EditThappiComponent_option_44_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Weight :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditThappiComponent_Template_input_ngModelChange_50_listener($event) { return ctx.c.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "[ton]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditThappiComponent_Template_input_ngModelChange_58_listener($event) { return ctx.c.cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Transportation Cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditThappiComponent_Template_input_ngModelChange_64_listener($event) { return ctx.c.transportation_cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Processor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditThappiComponent_Template_select_ngModelChange_70_listener($event) { return ctx.c.processor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, EditThappiComponent_option_72_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Processing Cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditThappiComponent_Template_input_ngModelChange_78_listener($event) { return ctx.c.processing_cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Note :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditThappiComponent_Template_input_ngModelChange_84_listener($event) { return ctx.c.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditThappiComponent_Template_button_click_90_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Block Number: ", ctx.c.is_child ? ctx.c.block_no.split("zzz000")[0] + " - " + ctx.c.block_no.split("zzz000")[1] : ctx.c.block_no, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.dim_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.dim_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.dim_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.transportation_cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.processor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.processing_cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.c.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRoYXBwaS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class SignupComponent {
    constructor(ds, router) {
        this.ds = ds;
        this.router = router;
    }
    ngOnInit() {
    }
    signup() {
        this.log = '';
        if (this.name == '' || this.name == null) {
            this.log = 'Enter name.';
            return 0;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) || this.email == null) {
            this.log = 'Enter valid email.';
            return 0;
        }
        if (this.password == '' || this.password == null) {
            this.log = 'Enter password.';
            return 0;
        }
        if (this.pin == '' || this.pin == null) {
            this.log = 'Enter pin.';
            return 0;
        }
        this.ds.signUp({ name: this.name, user: this.email.toLowerCase(), password: this.password, pin: this.pin }).subscribe((response) => {
            this.log = response.status;
            // alert(this.password)
            if (response.status == "ok") {
                this.router.navigate(['/'], { queryParams: { message: 'accountmade' } });
            }
            this.log = response.status;
            return 1;
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 20, vars: 5, consts: [[1, "main"], [1, "wrapper"], [1, "card"], [1, "title"], [1, "title", "title-large"], [1, "form"], [1, "form-group"], ["type", "text", "name", "name", "placeholder", "Name", "autocomplete", "off", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email address", "autocomplete", "off", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Password", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "pin", "placeholder", "Pin", "autocomplete", "off", 1, "input-field", 3, "ngModel", "ngModelChange"], [1, "input-submit", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_8_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_14_listener($event) { return ctx.pin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_16_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  line-height: 1.5;\r\n  color: #252a32;\r\n  background: #f1f5f8;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\na[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  max-width: 85rem;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0 2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  max-width: 28rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding: 5rem 1.5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  padding: 1.5rem 2rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 4px;\r\n  color: #252a32;\r\n  background: #ffffff;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.icons[_ngcontent-%COMP%] {\r\n  font-size: 1.45rem;\r\n  line-height: inherit;\r\n  margin-right: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n}\r\n\r\n.icons-google[_ngcontent-%COMP%] {\r\n  color: #d32f2f;\r\n}\r\n\r\n.icons-facebook[_ngcontent-%COMP%] {\r\n  color: #0f698a;\r\n}\r\n\r\n.icons-apple[_ngcontent-%COMP%] {\r\n  color: #252a32;\r\n}\r\n\r\n.linktext[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  line-height: inherit;\r\n  color: #148cb8;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.linktext[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  line-height: inherit;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.title-large[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: #252a32;\r\n}\r\n\r\n.title-subs[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  line-height: inherit;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin: 2rem 0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  line-height: inherit;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 0.75rem 1.25rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2rem;\r\n  color: #252a32;\r\n  background: #f1f5f8;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  line-height: inherit;\r\n  cursor: pointer;\r\n  padding: 0.65rem 2rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 2rem;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background: #65a3c0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line-bar[_ngcontent-%COMP%] {\r\n  flex: auto;\r\n  flex-basis: auto;\r\n  border: none;\r\n  outline: none;\r\n  height: 1.3px;\r\n  background: #bed1df;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .line-text[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #252a32;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: inherit;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  line-height: inherit;\r\n  padding: 0.2rem 1rem;\r\n  width: 100%;\r\n  height: auto;\r\n  outline: none;\r\n  border: 1.3px solid #bed1df;\r\n  border-radius: 2rem;\r\n  color: #252a32;\r\n  background: #ffffff;\r\n  transition: all 0.35s ease;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .method-item[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\r\n  background: #cfdde7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFDQTtFQUVFLGFBQWE7RUFHTCxtQkFBbUI7RUFFbkIsOEJBQThCO0VBRTlCLG1CQUFtQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUNBO0VBRUUsYUFBYTtFQUdMLG1CQUFtQjtFQUVuQix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUVVLFVBQVU7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUVFLGFBQWE7RUFHTCxtQkFBbUI7RUFFbkIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUMzQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUVuQiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbiAgYmFja2dyb3VuZDogI2YxZjVmODtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmEsXHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA4NXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiAyOHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogIzI1MmEzMjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxufVxyXG5cclxuLmljb25zIHtcclxuICBmb250LXNpemU6IDEuNDVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uaWNvbnMtZ29vZ2xlIHtcclxuICBjb2xvcjogI2QzMmYyZjtcclxufVxyXG4uaWNvbnMtZmFjZWJvb2sge1xyXG4gIGNvbG9yOiAjMGY2OThhO1xyXG59XHJcbi5pY29ucy1hcHBsZSB7XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbn1cclxuXHJcbi5saW5rdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGNvbG9yOiAjMTQ4Y2I4O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbn1cclxuLmxpbmt0ZXh0OmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcbi50aXRsZS1sYXJnZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbn1cclxuLnRpdGxlLXN1YnMge1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWFpbiAud3JhcHBlciAuZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5mb3JtLWdyb3VwIC5pbnB1dC1maWVsZCB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGNvbG9yOiAjMjUyYTMyO1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjg7XHJcbn1cclxuLm1haW4gLndyYXBwZXIgLmZvcm0tZ3JvdXAgLmlucHV0LXN1Ym1pdCB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDAuNjVyZW0gMnJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNjVhM2MwO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5saW5lIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4ubWFpbiAud3JhcHBlciAubGluZS1iYXIge1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgICBmbGV4OiBhdXRvO1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxLjNweDtcclxuICBiYWNrZ3JvdW5kOiAjYmVkMWRmO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5saW5lLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMyNTJhMzI7XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5tZXRob2QtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcbi5tYWluIC53cmFwcGVyIC5tZXRob2QtaXRlbSAuYnRuLWFjdGlvbiB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMS4zcHggc29saWQgI2JlZDFkZjtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGNvbG9yOiAjMjUyYTMyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcclxufVxyXG4ubWFpbiAud3JhcHBlciAubWV0aG9kLWl0ZW0gLmJ0bi1hY3Rpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjZmRkZTc7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vBB9":
/*!****************************************************!*\
  !*** ./src/app/batch-task/batch-task.component.ts ***!
  \****************************************************/
/*! exports provided: BatchTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchTaskComponent", function() { return BatchTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BatchTaskComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r14.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r14.unit);
} }
function BatchTaskComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.move(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Move ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.polish(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Polish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.thappi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Make thappi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.slabs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Make slabs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.quotation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quotation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.reserve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reserve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_div_29_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r29.trade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r29.trade_id);
} }
function BatchTaskComponent_div_29_tr_28_span_16_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_29_tr_28_span_16_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const f_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return f_r30.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r30.quantity);
} }
function BatchTaskComponent_div_29_tr_28_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_div_29_tr_28_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_div_29_tr_28_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.save_quotation(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_div_29_tr_28_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Saved!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_div_29_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_29_tr_28_Template_input_ngModelChange_8_listener($event) { const f_r30 = ctx.$implicit; return f_r30.r_dim_1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_29_tr_28_Template_input_ngModelChange_10_listener($event) { const f_r30 = ctx.$implicit; return f_r30.r_dim_2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_29_tr_28_Template_input_ngModelChange_12_listener($event) { const f_r30 = ctx.$implicit; return f_r30.round_off = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_29_tr_28_Template_input_ngModelChange_14_listener($event) { const f_r30 = ctx.$implicit; return f_r30.cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BatchTaskComponent_div_29_tr_28_span_16_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BatchTaskComponent_div_29_tr_28_span_17_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BatchTaskComponent_div_29_tr_28_button_19_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BatchTaskComponent_div_29_tr_28_span_20_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r31 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r30.is_child ? f_r30.block_no.split("zzz000")[0] + " - " + f_r30.block_no.split("zzz000")[1] : f_r30.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r30.is_child ? f_r30.slabs ? "Slabs" : "Thappi" : f_r30.slabs ? "Slabs" : "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r30.r_dim_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r30.r_dim_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r30.round_off);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r30.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r30.slabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !f_r30.slabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r30.saved != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r30.saved == true);
} }
function BatchTaskComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Make Quotation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Trade ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_29_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.trade_id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BatchTaskComponent_div_29_option_7_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sr. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Block no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "R L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "R H");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Round off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "No. of items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BatchTaskComponent_div_29_tr_28_Template, 21, 11, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.trade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.trade_ids);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost per ton/sq.", ctx_r7.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.quotation_form);
} }
function BatchTaskComponent_div_30_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. of thappis: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_30_div_7_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.no_of_thappi = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_div_30_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.thappiFeedHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.no_of_thappi);
} }
function BatchTaskComponent_div_30_div_8_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_30_div_8_tr_19_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r58.thappi_processing(); })("ngModelChange", function BatchTaskComponent_div_30_div_8_tr_19_Template_input_ngModelChange_4_listener($event) { const f_r56 = ctx.$implicit; return f_r56.dim_1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_30_div_8_tr_19_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r61.thappi_processing(); })("ngModelChange", function BatchTaskComponent_div_30_div_8_tr_19_Template_input_ngModelChange_6_listener($event) { const f_r56 = ctx.$implicit; return f_r56.dim_2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_30_div_8_tr_19_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r63.thappi_processing(); })("ngModelChange", function BatchTaskComponent_div_30_div_8_tr_19_Template_input_ngModelChange_8_listener($event) { const f_r56 = ctx.$implicit; return f_r56.dim_3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_30_div_8_tr_19_Template_input_ngModelChange_11_listener($event) { const f_r56 = ctx.$implicit; return f_r56.processing_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r56 = ctx.$implicit;
    const i_r57 = ctx.index;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r57 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r56.dim_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r56.dim_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r56.dim_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r54.unit, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r56.processing_cost);
} }
function BatchTaskComponent_div_30_div_8_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_div_30_div_8_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r66.thappiNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_div_30_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_30_div_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.thappi_date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Processing Cost per ton:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_30_div_8_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.thappi_processing(); })("ngModelChange", function BatchTaskComponent_div_30_div_8_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r71.thappi_processing_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sr. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Length");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Width");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Process Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BatchTaskComponent_div_30_div_8_tr_19_Template, 12, 6, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_div_30_div_8_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.makeThappi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BatchTaskComponent_div_30_div_8_button_23_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.thappi_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.thappi_processing_cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r50.thappi_forms[ctx_r50.thappi_ptr][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r50.log, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.thappi_ptr + 1 != ctx_r50.thappi_forms.length);
} }
function BatchTaskComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Make Thappi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BatchTaskComponent_div_30_div_7_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BatchTaskComponent_div_30_div_8_Template, 24, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r8.thappi_ptr + 1, " / ", ctx_r8.thappi_forms.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Block Number: ", ctx_r8.thappi_forms[ctx_r8.thappi_ptr][0].block_no, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.thappi_no_feeder == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.thappi_no_feeder == false);
} }
function BatchTaskComponent_div_31_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_31_tr_24_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const i_r75 = ctx.index; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r76.set_no_of_slabs(i_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_31_tr_24_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const i_r75 = ctx.index; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r78.set_no_of_slabs(i_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_31_tr_24_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const i_r75 = ctx.index; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.set_no_of_slabs(i_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_31_tr_24_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const i_r75 = ctx.index; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.set_no_of_slabs(i_r75); })("ngModelChange", function BatchTaskComponent_div_31_tr_24_Template_input_ngModelChange_16_listener($event) { const f_r74 = ctx.$implicit; return f_r74.thickness = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "mm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_31_tr_24_Template_input_ngModelChange_19_listener($event) { const f_r74 = ctx.$implicit; return f_r74.no_of_slabs = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_31_tr_24_Template_input_ngModelChange_21_listener($event) { const f_r74 = ctx.$implicit; return f_r74.processing_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_31_tr_24_Template_input_ngModelChange_23_listener($event) { const f_r74 = ctx.$implicit; return f_r74.slabs_hsn_code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_div_31_tr_24_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const i_r75 = ctx.index; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r85.save_slabs(i_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r74 = ctx.$implicit;
    const i_r75 = ctx.index;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r74.is_child ? f_r74.block_no.split("zzz000")[0] + " - " + f_r74.block_no.split("zzz000")[1] : f_r74.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", "n" + i_r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((f_r74.dim_1 / ctx_r73.factor).toFixed(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", "n" + i_r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((f_r74.dim_2 / ctx_r73.factor).toFixed(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", "n" + i_r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (f_r74.dim_3 / ctx_r73.factor).toFixed(3), "\u00A0", ctx_r73.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r74.thickness);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r74.no_of_slabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r74.processing_cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r74.slabs_hsn_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", f_r74.log, " ");
} }
function BatchTaskComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Make Slabs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_31_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.slabs_date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Processing Cost: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_31_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.populate_slabs_processing(); })("ngModelChange", function BatchTaskComponent_div_31_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.slabs_processing = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Block No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Which side to cut along");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Thickness");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "No of slab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Process Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Slab Hsn code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BatchTaskComponent_div_31_tr_24_Template, 28, 13, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.slabs_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.slabs_processing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.slabs_form);
} }
function BatchTaskComponent_div_32_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_32_tr_20_Template_input_ngModelChange_6_listener($event) { const f_r91 = ctx.$implicit; return f_r91.polishing_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r91 = ctx.$implicit;
    const i_r92 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r92 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r91.is_child ? f_r91.block_no.split("zzz000")[0] + " - " + f_r91.block_no.split("zzz000")[1] : f_r91.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r91.polishing_cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((f_r91.polishing_cost * f_r91.left).toFixed(3));
} }
function BatchTaskComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Polish Slabs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_32_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.populate_polish(); })("ngModelChange", function BatchTaskComponent_div_32_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.polish_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_32_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.polish_date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "S. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Block No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cost per slab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BatchTaskComponent_div_32_tr_20_Template, 9, 4, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_div_32_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.send_for_polishing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Polish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cost per sq", ctx_r10.unit, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.polish_cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.polish_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.polish_items);
} }
function BatchTaskComponent_div_33_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r101.yard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r101.yard);
} }
function BatchTaskComponent_div_33_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_33_tr_24_Template_input_ngModelChange_8_listener($event) { const f_r102 = ctx.$implicit; return f_r102.transportation_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r102 = ctx.$implicit;
    const i_r103 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r103 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r102.is_child ? f_r102.block_no.split("zzz000")[0] + " - " + f_r102.block_no.split("zzz000")[1] : f_r102.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r102.is_child ? f_r102.slabs ? "Slabs" : "Thappi" : f_r102.slabs ? "Slabs" : "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r102.transportation_cost);
} }
function BatchTaskComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Move Items to - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_33_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.move_to = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BatchTaskComponent_div_33_option_5_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Moving Cost per ton: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_div_33_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.populate_moving_cost(); })("ngModelChange", function BatchTaskComponent_div_33_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.move_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_33_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.move_date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sr. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Block No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "T. Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BatchTaskComponent_div_33_tr_24_Template, 9, 4, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_div_33_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.move_items(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Move ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_div_33_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.mark_in_transit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Mark in-transit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.move_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.yards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.move_cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.move_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.moving_items);
} }
function BatchTaskComponent_div_34_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r114.trade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r114.trade_id);
} }
function BatchTaskComponent_div_34_tr_21_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_div_34_tr_21_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const i_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r118.send_reserve_items(i_r116); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reserve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatchTaskComponent_div_34_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_34_tr_21_Template_input_ngModelChange_8_listener($event) { const ri_r115 = ctx.$implicit; return ri_r115.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BatchTaskComponent_div_34_tr_21_button_10_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ri_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", ri_r115.polished ? "blue" : "", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ri_r115.slabs ? "bx bx-grid" : ri_r115.is_child ? "bx bxs-component" : "bx bx-cube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ri_r115.is_child ? ri_r115.block_no.split("zzz000")[0] + " - " + ri_r115.block_no.split("zzz000")[1] : ri_r115.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ri_r115.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ri_r115.log != "ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ri_r115.log, " ");
} }
function BatchTaskComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reserve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Trade ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BatchTaskComponent_div_34_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.trade_id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BatchTaskComponent_div_34_option_8_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "what");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Reserve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BatchTaskComponent_div_34_tr_21_Template, 12, 10, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.trade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.trade_ids);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.reserve_items);
} }
function BatchTaskComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_tr_68_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const i_r125 = ctx.index; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.delete(i_r125); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_tr_68_Template_td_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const i_r125 = ctx.index; const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.action(i_r125); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r124 = ctx.$implicit;
    const i_r125 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", i_r125 % 2 ? "#fff" : "#e4e4e4", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", c_r124.polished ? "blue" : "", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r124.slabs ? "bx bx-grid" : c_r124.is_child ? "bx bxs-component" : "bx bx-cube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r124.is_child ? c_r124.block_no.split("zzz000")[0] + " - " + c_r124.block_no.split("zzz000")[1] : c_r124.block_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background-color:", c_r124.left ? "#e8f3ff" : "#ffeded", "; border: 1px solid ", c_r124.left ? "#9bd7ff" : "#ffa9a9", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r124.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r124.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r124.in_transit ? "IN-TRANSIT" : c_r124.yard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r124.block_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (c_r124.dim_1 / c_r124.factor).toFixed(3), " ", c_r124.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (c_r124.dim_2 / c_r124.factor).toFixed(3), " ", c_r124.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", c_r124.slabs ? c_r124.dim_3 : (c_r124.dim_3 / c_r124.factor).toFixed(3), " ", c_r124.slabs ? "mm" : c_r124.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r124.company);
} }
class BatchTaskComponent {
    constructor(ds, router) {
        this.ds = ds;
        this.router = router;
        this.items = [];
        this.no_of_thappi = 0;
        this.thappi_forms = [];
        this.thappi_no_feeder = true;
        this.thappi_date = '';
        this.thappi_processor = '';
        this.thappi_processing_cost = 0;
        this.log = '';
        this.reserve_items = [];
        this.trade_id = '';
        this.trade_ids = [];
        this.party = '';
        this.slabs_form = [];
        this.quotation_form = [];
    }
    ngOnInit() {
        this.name = this.ds.name;
        this.ds.drawerItems({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.items = res.data;
                if (localStorage.getItem('unit') && localStorage.getItem('factor')) {
                    this.unit = localStorage.getItem('unit');
                    this.factor = localStorage.getItem('factor');
                    for (let i of this.items) {
                        i.unit = localStorage.getItem('unit');
                        i.factor = localStorage.getItem('factor');
                    }
                }
                this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.units = res.data;
                    }
                });
            }
        });
        this.ds.getParties({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.parties = res.data;
            }
        });
        this.ds.getYards({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.yards = res.data;
            }
        });
        this.ds.getQuarries({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.quarries = res.data;
            }
        });
        this.ds.getMyRoles({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.salesman = res.data.salesman_role;
                this.moderator = res.data.moderator_role;
            }
        });
    }
    thappi() {
        if (this.factor == undefined) {
            this.set_unit = "Set a unit first";
            setTimeout(() => this.set_unit = '', 3000);
            return;
        }
        this.widget = 't';
        this.thappi_forms = [];
        this.thappi_ptr = -1;
        this.thappi_no_feeder = true;
        this.thappi_date = '';
        this.thappi_processor = '';
        this.thappi_processing_cost = 0;
        for (let i = 0; i < this.items.length; i++) {
            if ((this.items[i].slabs == false && this.items[i].has_children == false) && (this.items[i].is_child == false && this.items[i].left > 0)) {
                this.thappi_forms.push([this.items[i]]);
                this.thappi_ptr = 0;
            }
        }
    }
    makeThappi() {
        this.log = '';
        for (let i = 0; i < this.thappi_forms[this.thappi_ptr][1].length; i++) {
            this.thappi_forms[this.thappi_ptr][1][i].dim_1 = this.thappi_forms[this.thappi_ptr][1][i].dim_1 * this.factor;
            this.thappi_forms[this.thappi_ptr][1][i].dim_2 = this.thappi_forms[this.thappi_ptr][1][i].dim_2 * this.factor;
            this.thappi_forms[this.thappi_ptr][1][i].dim_3 = this.thappi_forms[this.thappi_ptr][1][i].dim_3 * this.factor;
            this.thappi_forms[this.thappi_ptr][1][i].date = this.thappi_date;
            this.thappi_forms[this.thappi_ptr][1][i].processor = this.thappi_forms[this.thappi_ptr][0].yard;
            this.thappi_forms[this.thappi_ptr][1][i].weight = this.thappi_forms[this.thappi_ptr][1][i].dim_1 * this.thappi_forms[this.thappi_ptr][1][i].dim_2 * this.thappi_forms[this.thappi_ptr][1][i].dim_3 * this.thappi_forms[this.thappi_ptr][0].specific_gravity * 0.000000001;
        }
        this.ds.breakBlock({ token: localStorage.getItem('token'), block_no: this.thappi_forms[this.thappi_ptr][0].block_no, broken_blocks: this.thappi_forms[this.thappi_ptr][1] })
            .subscribe((res) => {
            if (res.status == "ok") {
                this.log = res.status;
                this.ds.drawerItems({ token: localStorage.getItem('token') }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.items = res.data;
                    }
                });
            }
        });
    }
    thappiFeedHandler() {
        if (this.no_of_thappi < 1)
            return;
        this.thappi_no_feeder = false;
        this.thappi_forms[this.thappi_ptr].push([]);
        for (let i = 0; i < this.no_of_thappi; i++) {
            this.thappi_forms[this.thappi_ptr][1].push({
                dim_1: (this.thappi_forms[this.thappi_ptr][0].dim_1 / this.factor).toFixed(4),
                dim_2: (this.thappi_forms[this.thappi_ptr][0].dim_2 / this.factor).toFixed(4),
                dim_3: (this.thappi_forms[this.thappi_ptr][0].dim_3 / this.factor).toFixed(4),
                date: '',
                processor: '',
                processing_cost: (this.thappi_processing_cost * this.thappi_forms[this.thappi_ptr][0].weight),
            });
        }
    }
    thappiNext() {
        this.thappi_ptr += 1;
        this.thappi_no_feeder = true;
        this.log = '';
    }
    thappi_processing() {
        for (let i = 0; i < this.thappi_forms[this.thappi_ptr][1].length; i++) {
            let weight = this.thappi_forms[this.thappi_ptr][1][i].dim_1 * this.thappi_forms[this.thappi_ptr][1][i].dim_2 * this.thappi_forms[this.thappi_ptr][1][i].dim_3 * this.thappi_forms[this.thappi_ptr][0].specific_gravity * 0.000000001 * this.factor * this.factor * this.factor;
            this.thappi_forms[this.thappi_ptr][1][i].weight = weight;
            this.thappi_forms[this.thappi_ptr][1][i].processing_cost = this.thappi_processing_cost * this.thappi_forms[this.thappi_ptr][1][i].weight;
        }
    }
    slabs() {
        if (this.factor == undefined) {
            this.set_unit = "Set a unit first";
            setTimeout(() => this.set_unit = '', 3000);
            return;
        }
        this.widget = 's';
        this.slabs_form = [];
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].slabs == false && this.items[i].left > 0) {
                this.slabs_form.push({
                    block_no: this.items[i].block_no,
                    dim_1: this.items[i].dim_1,
                    dim_2: this.items[i].dim_2,
                    dim_3: this.items[i].dim_3,
                    processor: this.items[i].yard,
                    date: '',
                    processing_cost: 0,
                    no_of_slabs: 0,
                    is_child: this.items[i].is_child,
                    slabs: this.items[i].slabs,
                    unit: this.items[i].unit,
                    factor: this.items[i].factor,
                    thickness: 0,
                    slabs_hsn_code: this.items[i].quarry.slabs_hsn_code,
                    specific_gravity: this.items[i].quarry.specific_gravity,
                    weight: this.items[i].weight
                });
            }
        }
    }
    save_slabs(i) {
        let a = document.querySelector('input[name="n' + i + '"]:checked');
        if (a == null)
            return;
        if (a['value'] == 1) {
            this.slabs_form[i].dim_1 = this.slabs_form[i].dim_2;
            this.slabs_form[i].dim_2 = this.slabs_form[i].dim_3;
            this.slabs_form[i].dim_3 = this.slabs_form[i].thickness;
        }
        if (a['value'] == 2) {
            this.slabs_form[i].dim_2 = this.slabs_form[i].dim_3;
            this.slabs_form[i].dim_3 = this.slabs_form[i].thickness;
        }
        if (a['value'] == 3) {
            this.slabs_form[i].dim_3 = this.slabs_form[i].thickness;
        }
        this.slabs_form[i].date = this.slabs_date;
        this.ds.processBlock({ token: localStorage.getItem('token'), slabs: this.slabs_form[i] })
            .subscribe((res) => {
            if (res.status == "ok") {
                this.slabs_form[i].log = res.status;
                this.ds.drawerItems({ token: localStorage.getItem('token') }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.items = res.data;
                    }
                });
            }
        });
    }
    move() {
        this.widget = 'm';
        this.moving_items = [];
        this.move_cost = 0;
        this.move_date = '';
        this.move_to = undefined;
        for (let i = 0; i < this.items.length; i++) {
            let weight = this.items[i].dim_1 * this.items[i].dim_2 * this.items[i].dim_3 * this.items[i].specific_gravity * 0.000000001;
            if (this.items[i].left > 0) {
                this.moving_items.push({
                    block_no: this.items[i].block_no,
                    is_child: this.items[i].is_child,
                    slabs: this.items[i].slabs,
                    weight: this.items[i].slabs ? weight * this.items[i].left : weight
                });
            }
        }
    }
    move_items() {
        if (this.move_to == undefined)
            return;
        this.ds.moveItems({ token: localStorage.getItem('token'), items: this.moving_items, yard: this.move_to, date: this.move_date })
            .subscribe((res) => {
            if (res.status == "ok") {
                alert("All items moved!");
                this.moving_items = [];
                this.ds.drawerItems({ token: localStorage.getItem('token') }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.items = res.data;
                    }
                });
            }
        });
    }
    populate_moving_cost() {
        for (let i = 0; i < this.moving_items.length; i++) {
            this.moving_items[i].transportation_cost = this.moving_items[i].weight * this.move_cost;
        }
    }
    polish() {
        if (this.factor == undefined) {
            this.set_unit = "Set a unit first";
            setTimeout(() => this.set_unit = '', 3000);
            return;
        }
        this.polish_date = '';
        this.polish_cost = 0;
        this.polish_items = [];
        this.widget = 'p';
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].slabs) {
                if (!this.items[i].polished && this.items[i].left > 0) {
                    this.polish_items.push({
                        block_no: this.items[i].block_no,
                        is_child: this.items[i].is_child,
                        slabs: this.items[i].slabs,
                        polishing_cost: 0,
                        dim_1: this.items[i].dim_1,
                        dim_2: this.items[i].dim_2,
                        left: this.items[i].left
                    });
                }
            }
        }
    }
    send_for_polishing() {
        if (!window.confirm('Polish all slabs?'))
            return;
        this.ds.polish({ token: localStorage.getItem('token'), items: this.polish_items, date: this.polish_date })
            .subscribe((res) => {
            if (res.status == "ok") {
                this.ds.drawerItems({ token: localStorage.getItem('token') }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.items = res.data;
                        this.polish_items = [];
                    }
                });
                alert("Slabs polished!");
            }
        });
    }
    populate_polish() {
        for (let i = 0; i < this.polish_items.length; i++) {
            this.polish_items[i].polishing_cost = (this.polish_items[i].dim_1 / this.factor) * (this.polish_items[i].dim_2 / this.factor) * this.polish_cost;
        }
    }
    reserve() {
        this.ds.getTradeIds({ token: localStorage.getItem('token'), quotation: false }).subscribe((res) => {
            if (res.status == "ok") {
                this.trade_ids = res.data;
            }
            else {
                this.trade_ids = [];
            }
        });
        this.widget = 'r';
        this.reserve_items = [];
        this.trade_id = '';
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].left > 0) {
                this.reserve_items.push({
                    block_no: this.items[i].block_no,
                    slabs: this.items[i].slabs,
                    is_child: this.items[i].is_child,
                    polished: this.items[i].polished,
                    quantity: this.items[i].slabs ? 0 : 1,
                    left: this.items[i].left,
                });
            }
        }
    }
    send_reserve_items(i) {
        this.reserve_items[i].log = '';
        this.ds.reserveTrade({ token: localStorage.getItem('token'), c: this.reserve_items[i], trade_id: this.trade_id, quotation: false })
            .subscribe((res) => {
            this.reserve_items[i].log = res.status;
            if (res.status == "ok") {
                this.ds.drawerItems({ token: localStorage.getItem('token') }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.items = res.data;
                    }
                });
            }
        });
    }
    quotation() {
        this.ds.getTradeIds({ token: localStorage.getItem('token'), quotation: true }).subscribe((res) => {
            if (res.status == "ok") {
                this.trade_ids = res.data;
            }
            else {
                this.trade_ids = [];
            }
        });
        if (this.factor == undefined) {
            this.set_unit = "Set a unit first";
            setTimeout(() => this.set_unit = '', 3000);
            return;
        }
        this.widget = 'q';
        this.quotation_form = [];
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].left > 0) {
                this.quotation_form.push({
                    block_no: this.items[i].block_no,
                    slabs: this.items[i].slabs,
                    is_child: this.items[i].is_child,
                    polished: this.items[i].polished,
                    quantity: this.items[i].slabs ? 0 : 1,
                    left: this.items[i].left,
                    cost: 0,
                    q: this.items[i].slabs ? 0 : this.items[i].weight,
                    no_of_items: this.items[i].slabs ? 0 : 1,
                    dim_1: this.items[i].dim_1,
                    dim_2: this.items[i].dim_2,
                    dim_3: this.items[i].dim_3,
                    specific_gravity: this.items[i].specific_gravity,
                    weight: this.items[i].weight,
                    hsn_code: this.items[i].slabs ? this.items[i].slabs_hsn_code : this.items[i].hsn_code,
                    r_dim_1: 0,
                    r_dim_2: 0,
                    round_off: false
                });
            }
        }
    }
    save_quotation(i) {
        if (this.quotation_form[i].slabs) {
            this.quotation_form[i].cost = this.quotation_form[i].cost / (this.factor * this.factor);
        }
        this.quotation_form[i].r_dim_1 = this.quotation_form[i].r_dim_1 * this.factor;
        this.quotation_form[i].r_dim_2 = this.quotation_form[i].r_dim_2 * this.factor;
        this.ds.reserveTrade({ token: localStorage.getItem('token'), quotation: true, c: this.quotation_form[i], trade_id: this.trade_id })
            .subscribe((res) => {
            if (res.status == "ok") {
                this.quotation_form[i].saved = true;
            }
        });
        if (this.quotation_form[i].slabs) {
            this.quotation_form[i].cost = this.quotation_form[i].cost * (this.factor * this.factor);
        }
        this.quotation_form[i].r_dim_1 = this.quotation_form[i].r_dim_1 / this.factor;
        this.quotation_form[i].r_dim_2 = this.quotation_form[i].r_dim_2 / this.factor;
    }
    set_no_of_slabs(i) {
        let a = document.querySelector('input[name="n' + i + '"]:checked');
        if (a == null)
            return;
        if (a['value'] == 1) {
            // change here thickness of blade
            this.slabs_form[i].no_of_slabs = Math.floor((this.slabs_form[i].dim_1) / (this.slabs_form[i].thickness + 7.5));
        }
        if (a['value'] == 2) {
            this.slabs_form[i].no_of_slabs = Math.floor((this.slabs_form[i].dim_2) / (this.slabs_form[i].thickness + 7.5));
        }
        if (a['value'] == 3) {
            this.slabs_form[i].no_of_slabs = Math.floor((this.slabs_form[i].dim_3) / (this.slabs_form[i].thickness + 7.5));
        }
    }
    action(i) {
        if (this.items[i].slabs) {
            this.router.navigate(['/main/slabs'], { queryParams: { block: this.items[i].block_no } });
            return;
        }
        this.router.navigate(['/main/block'], { queryParams: { block: this.items[i].block_no } });
    }
    clear_drawer() {
        if (!window.confirm('Clear?'))
            return;
        this.ds.clearDrawer({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.ds.drawerItems({ token: localStorage.getItem('token') }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.items = res.data;
                    }
                });
            }
        });
    }
    delete(i) {
        if (!window.confirm('Remove item?'))
            return;
        this.ds.itemToggle({ token: localStorage.getItem('token'), block_no: this.items[i].block_no }).subscribe((res) => {
            if (res.status == "ok") {
                this.items.splice(i, 1);
            }
        });
    }
    get_quarry(q) {
        for (let i = 0; i < this.quarries.length; i++) {
            if (this.quarries[i].quarry == q) {
                return this.quarries[i];
            }
        }
    }
    change_unit() {
        this.factor = undefined;
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].unit == this.unit) {
                for (let j of this.items) {
                    j.unit = this.units[i].unit;
                    j.factor = this.units[i].factor;
                    this.factor = this.units[i].factor;
                }
                localStorage.setItem('unit', this.unit);
                localStorage.setItem('factor', this.factor);
                return;
            }
        }
    }
    populate_slabs_processing() {
        for (let i = 0; i < this.slabs_form.length; i++) {
            this.slabs_form[i].processing_cost = this.slabs_processing * this.slabs_form[i].weight;
        }
    }
    mark_in_transit() {
        if (!window.confirm('Move in transit?'))
            return;
        this.ds.markInTransit({ token: localStorage.getItem('token'), items: this.moving_items })
            .subscribe((res) => {
            if (res.status == "ok") {
                this.ds.drawerItems({ token: localStorage.getItem('token') }).subscribe((res) => {
                    if (res.status == "ok") {
                        this.items = res.data;
                    }
                });
            }
        });
    }
}
BatchTaskComponent.ɵfac = function BatchTaskComponent_Factory(t) { return new (t || BatchTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BatchTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BatchTaskComponent, selectors: [["app-batch-task"]], decls: 69, vars: 17, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [2, "float", "right"], ["name", "gsfgwefwesrd", "id", "grd", 2, "width", "50px", 3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["style", "background-color: #65a3c0; border: none;color: white; padding: 8px 14px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;", 3, "click", 4, "ngIf"], ["style", "background-color: #65a3c0; border: none;color: white; padding: 8px 14px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px; margin-left: 10px;", 3, "click", 4, "ngIf"], ["style", "width: 95%; background-color: #fff;\n    border-radius: 20px; padding: 10px; overflow-x: scroll;", 4, "ngIf"], [2, "background-color", "orange", "border", "none", "color", "white", "padding", "8px 14px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "13px", "margin-left", "10px", 3, "click"], [2, "width", "95%", "background-color", "#fff", "border-radius", "20px", "padding", "10px", "overflow-x", "scroll"], [3, "style", 4, "ngFor", "ngForOf"], [3, "value"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "8px 14px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "13px", 3, "click"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "8px 14px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "13px", "margin-left", "10px", 3, "click"], ["name", "gwzxfssrd", "id", "asnmf", 2, "width", "50px", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["type", "number", 2, "width", "90px", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 2, "width", "90px", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["style", "background-color: orange; border: none;color: white; padding: 8px 14px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px; margin-left: 10px;", 3, "click", 4, "ngIf"], ["type", "number", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["type", "number", 2, "width", "50px", 3, "ngModel", "ngModelChange"], ["type", "date", 3, "ngModel", "ngModelChange"], ["type", "number", 2, "width", "90px", 3, "ngModel", "change", "ngModelChange"], ["type", "number", 2, "width", "80px", 3, "ngModel", "change", "ngModelChange"], [2, "font-weight", "normal", "font-size", "15px"], ["type", "radio", "id", "html", "value", "1", 3, "name", "change"], ["for", "html"], ["type", "radio", "id", "html", "value", "2", 3, "name", "change"], ["type", "radio", "id", "html", "value", "3", 3, "name", "change"], ["type", "number", 2, "width", "70px", 3, "ngModel", "change", "ngModelChange"], ["type", "text", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "modveefwsijf", 2, "width", "80px", 3, "ngModel", "change", "ngModelChange"], ["type", "date", "name", "oewrggg", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "mefwsif", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["name", "gsffgsrd", "id", "grd", 2, "width", "50px", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "motranffwijf", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["name", "gsfafgffssrd", "id", "asdff", 2, "width", "50px", 3, "ngModel", "ngModelChange"], [2, "font-size", "1.5em"], [1, "temp"], ["type", "number", 2, "width", "70px", 3, "ngModel", "ngModelChange"], [1, "delete-button", 2, "border-radius", "20px", "text-decoration", "none", "height", "30px", "width", "30px", 3, "click"], [3, "click"], [1, "bx", "bx-right-arrow-alt", 2, "color", "blue", "font-size", "20px"]], template: function BatchTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Batch task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Unit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BatchTaskComponent_Template_select_change_10_listener() { return ctx.change_unit(); })("ngModelChange", function BatchTaskComponent_Template_select_ngModelChange_10_listener($event) { return ctx.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BatchTaskComponent_option_12_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BatchTaskComponent_button_17_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BatchTaskComponent_button_19_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BatchTaskComponent_button_21_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BatchTaskComponent_button_23_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BatchTaskComponent_button_25_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BatchTaskComponent_button_27_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BatchTaskComponent_div_29_Template, 29, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BatchTaskComponent_div_30_Template, 9, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BatchTaskComponent_div_31_Template, 25, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BatchTaskComponent_div_32_Template, 23, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BatchTaskComponent_div_33_Template, 31, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BatchTaskComponent_div_34_Template, 22, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchTaskComponent_Template_button_click_36_listener() { return ctx.clear_drawer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Clear all\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\nRefresh for new changes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Block No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Yard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Height/thickness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, BatchTaskComponent_tr_68_Template, 44, 25, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.set_unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moderator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moderator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moderator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moderator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.salesman);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.salesman);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget == "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget == "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget == "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget == "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget == "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget == "r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"]], styles: [".switchon[_ngcontent-%COMP%] {\r\n    background-color: #70ff70;\r\n    height: 25px;\r\n    width: 25px;\r\n    border-radius: 20px;\r\n    border:5px solid #2BD47D\r\n    \r\n  }\r\n  \r\n  .switchoff[_ngcontent-%COMP%] {\r\n    background-color: #c5c5c5;\r\n    height: 25px;\r\n    width: 25px;\r\n    border-radius: 20px;\r\n  }\r\n  \r\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%] {\r\n    max-width:130px;\r\n    overflow:hidden;  \r\n    margin: auto;\r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%]:hover{\r\n    \r\n    overflow-x: visible;\r\n  }\r\n  \r\n  .temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  \r\n  \r\n  \r\n  .temp[_ngcontent-%COMP%] {\r\n    -ms-overflow-style: none;  \r\n    scrollbar-width: none;  \r\n  }\r\n  \r\n  .floating-menu[_ngcontent-%COMP%] {\r\n    font-family: sans-serif;\r\n    background: orange;\r\n    z-index: 100;\r\n    position: fixed;\r\n    bottom: 5px;\r\n    right: 5px;\r\n    border-radius: 1px;\r\n    align-items: center;\r\n    padding:7px;\r\n    height: 40px;\r\n  }\r\n  \r\n  .floating-menu[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 25px;\r\n  }\r\n  \r\n  .row-color[_ngcontent-%COMP%] {\r\n      background-color: #d8d8d8;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%] {\r\n      padding-top: 5px;\r\n      padding-bottom: 5px;\r\n      padding-left: 5px;\r\n      padding-right: 5px;\r\n  }\r\n  \r\n  .button[_ngcontent-%COMP%] {\r\n      background-color: orange; \r\n      border: none;\r\n      color: white;\r\n      padding: 7px 7px;\r\n      text-align: center;\r\n      text-decoration: none;\r\n      display: inline-block;\r\n      font-size: 12px;\r\n    }\r\n  \r\n  .delete-button[_ngcontent-%COMP%] {\r\n      background-color: rgb(255, 63, 63);\r\n      font-size: 14px;\r\n      border:none\r\n    }\r\n  \r\n  \r\n  \r\n  .dropbtn[_ngcontent-%COMP%] {\r\n      background-color: #04AA6D;\r\n      color: white;\r\n      padding: 16px;\r\n      font-size: 16px;\r\n      border: none;\r\n      cursor: pointer;\r\n    }\r\n  \r\n  \r\n  \r\n  .dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n      background-color: #3e8e41;\r\n    }\r\n  \r\n  \r\n  \r\n  #myInput[_ngcontent-%COMP%] {\r\n      font-size: 16px;\r\n      padding: 5px 5px 5px 5px;\r\n      border: none;\r\n      border-bottom: 1px solid #ddd;\r\n      width: 200px;\r\n    }\r\n  \r\n  \r\n  \r\n  #myInput[_ngcontent-%COMP%]:focus {outline: 3px solid #ddd;}\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  .dropdown-content[_ngcontent-%COMP%] {\r\n      display: none;\r\n      position: absolute;\r\n      background-color: #f6f6f6;\r\n      min-width: 200px;\r\n      \r\n      border: 1px solid #ddd;\r\n      z-index: 1;\r\n      width: 200px;\r\n      overflow-x: hidden;\r\n      overflow-y: scroll;\r\n      max-height: 250px;\r\n      \r\n    }\r\n  \r\n  \r\n  \r\n  .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      color: black;\r\n      padding: 12px 16px;\r\n      text-decoration: none;\r\n      display: none;\r\n    }\r\n  \r\n  \r\n  \r\n  .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #f1f1f1}\r\n  \r\n  \r\n  \r\n  .show[_ngcontent-%COMP%] {display:block;}\r\n  \r\n  \r\n  \r\n  .pagination[_ngcontent-%COMP%] {\r\n      display: inline-block;\r\n    }\r\n  \r\n  .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      color: black;\r\n      float: left;\r\n      padding: 4px 8px;\r\n      text-decoration: none;\r\n    }\r\n  \r\n  .pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n      background-color: #4CAF50;\r\n      color: white;\r\n    }\r\n  \r\n  .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {background-color: #ddd;}\r\n  \r\n  .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      background-color: #e7e7e7; \r\n      color: black;\r\n      padding: 5px 10px; \r\n      cursor: pointer; \r\n      float: left; \r\n      border: none;\r\n      font-size: 14px;\r\n    }\r\n  \r\n  .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\r\n      border-right: none; \r\n    }\r\n  \r\n  \r\n  \r\n  .btn-group[_ngcontent-%COMP%]:after {\r\n      content: \"\";\r\n      clear: both;\r\n      display: table;\r\n    }\r\n  \r\n  \r\n  \r\n  .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n      background-color: rgb(226, 226, 226);\r\n    }\r\n  \r\n  .example[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n      display: none;\r\n    }\r\n  \r\n  \r\n  \r\n  .example[_ngcontent-%COMP%] {\r\n      -ms-overflow-style: none;  \r\n      scrollbar-width: none;  \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdGNoLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQjs7RUFFRjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFDQTs7SUFFRSxtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsNENBQTRDOztFQUM1QztJQUNFLHdCQUF3QixHQUFHLGdCQUFnQjtJQUMzQyxxQkFBcUIsR0FBRyxZQUFZO0VBQ3RDOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7TUFDSSx5QkFBeUI7RUFDN0I7O0VBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixrQkFBa0I7RUFDdEI7O0VBRUE7TUFDSSx3QkFBd0I7TUFDeEIsWUFBWTtNQUNaLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsZUFBZTtJQUNqQjs7RUFFQTtNQUNFLGtDQUFrQztNQUNsQyxlQUFlO01BQ2Y7SUFDRjs7RUFHRixhQUFhOztFQUVYO01BQ0UseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixhQUFhO01BQ2IsZUFBZTtNQUNmLFlBQVk7TUFDWixlQUFlO0lBQ2pCOztFQUVBLHFDQUFxQzs7RUFDckM7TUFDRSx5QkFBeUI7SUFDM0I7O0VBRUEscUJBQXFCOztFQUNyQjtNQUNFLGVBQWU7TUFDZix3QkFBd0I7TUFDeEIsWUFBWTtNQUNaLDZCQUE2QjtNQUM3QixZQUFZO0lBQ2Q7O0VBRUEsbURBQW1EOztFQUNuRCxnQkFBZ0IsdUJBQXVCLENBQUM7O0VBRXhDLGtFQUFrRTs7RUFFbEUseUNBQXlDOztFQUN6QztNQUNFLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLGdCQUFnQjs7TUFFaEIsc0JBQXNCO01BQ3RCLFVBQVU7TUFDVixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixpQkFBaUI7O0lBRW5COztFQUVBLDhCQUE4Qjs7RUFDOUI7TUFDRSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixhQUFhO0lBQ2Y7O0VBRUEsNENBQTRDOztFQUM1QywyQkFBMkIseUJBQXlCOztFQUVwRCxxSUFBcUk7O0VBQ3JJLE9BQU8sYUFBYSxDQUFDOztFQUVyQixvQ0FBb0M7O0VBR3RDO01BQ0kscUJBQXFCO0lBQ3ZCOztFQUVBO01BQ0UsWUFBWTtNQUNaLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIscUJBQXFCO0lBQ3ZCOztFQUVBO01BQ0UseUJBQXlCO01BQ3pCLFlBQVk7SUFDZDs7RUFFQSxrQ0FBa0Msc0JBQXNCLENBQUM7O0VBRXpEO01BQ0UseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixpQkFBaUIsRUFBRSxpQkFBaUI7TUFDcEMsZUFBZSxFQUFFLHNCQUFzQjtNQUN2QyxXQUFXLEVBQUUsbUNBQW1DO01BQ2hELFlBQVk7TUFDWixlQUFlO0lBQ2pCOztFQUVBO01BQ0Usa0JBQWtCLEVBQUUsMkJBQTJCO0lBQ2pEOztFQUVBLGlDQUFpQzs7RUFDakM7TUFDRSxXQUFXO01BQ1gsV0FBVztNQUNYLGNBQWM7SUFDaEI7O0VBRUEsb0NBQW9DOztFQUNwQztNQUNFLG9DQUFvQztJQUN0Qzs7RUFFQTtNQUNFLGFBQWE7SUFDZjs7RUFFQSw0Q0FBNEM7O0VBQzVDO01BQ0Usd0JBQXdCLEdBQUcsZ0JBQWdCO01BQzNDLHFCQUFxQixHQUFHLFlBQVk7SUFDdEMiLCJmaWxlIjoiYmF0Y2gtdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXRjaG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MGZmNzA7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6NXB4IHNvbGlkICMyQkQ0N0RcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuc3dpdGNob2ZmIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNWM1YzU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRlbXAge1xyXG4gICAgbWF4LXdpZHRoOjEzMHB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuOyAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC50ZW1wOmhvdmVye1xyXG4gICAgXHJcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xyXG4gIH1cclxuICAudGVtcDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXHJcbiAgLnRlbXAge1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgXHJcbiAgLmZsb2F0aW5nLW1lbnUge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzo3cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gICBcclxuICAuZmxvYXRpbmctbWVudSBoNCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3ctY29sb3Ige1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG4gIH1cclxuICB0ZCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IFxyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogN3B4IDdweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2MywgNjMpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGJvcmRlcjpub25lXHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogZHJvcGRvd24gKi9cclxuICBcclxuICAgIC5kcm9wYnRuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBEcm9wZG93biBidXR0b24gb24gaG92ZXIgJiBmb2N1cyAqL1xyXG4gICAgLmRyb3BidG46aG92ZXIsIC5kcm9wYnRuOmZvY3VzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogVGhlIHNlYXJjaCBmaWVsZCAqL1xyXG4gICAgI215SW5wdXQge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBUaGUgc2VhcmNoIGZpZWxkIHdoZW4gaXQgZ2V0cyBmb2N1cy9jbGlja2VkIG9uICovXHJcbiAgICAjbXlJbnB1dDpmb2N1cyB7b3V0bGluZTogM3B4IHNvbGlkICNkZGQ7fVxyXG4gICAgXHJcbiAgICAvKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcbiAgIFxyXG4gICAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbiAgICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgXHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4gICAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4gICAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMX1cclxuICAgIFxyXG4gICAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSAodXNlIEpTIHRvIGFkZCB0aGlzIGNsYXNzIHRvIHRoZSAuZHJvcGRvd24tY29udGVudCBjb250YWluZXIgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGRyb3Bkb3duIGJ1dHRvbikgKi9cclxuICAgIC5zaG93IHtkaXNwbGF5OmJsb2NrO31cclxuICBcclxuICAgIC8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cclxuICAgIFxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFnaW5hdGlvbiBhIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFnaW5hdGlvbiBhLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhZ2luYXRpb24gYTpob3Zlcjpub3QoLmFjdGl2ZSkge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4gIFxyXG4gICAgLmJ0bi1ncm91cCBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3OyBcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTBweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlci9oYW5kIGljb24gKi9cclxuICAgICAgZmxvYXQ6IGxlZnQ7IC8qIEZsb2F0IHRoZSBidXR0b25zIHNpZGUgYnkgc2lkZSAqL1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1ncm91cCBidXR0b246bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgLyogUHJldmVudCBkb3VibGUgYm9yZGVycyAqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBDbGVhciBmbG9hdHMgKGNsZWFyZml4IGhhY2spICovXHJcbiAgICAuYnRuLWdyb3VwOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXHJcbiAgICAuYnRuLWdyb3VwIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcclxuICAgIH1cclxuICBcclxuICAgIC5leGFtcGxlOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xyXG4gICAgLmV4YW1wbGUge1xyXG4gICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "Hipp");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-roles/manage-roles.component */ "/xin");
/* harmony import */ var _new_block_new_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-block/new-block.component */ "QCoJ");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory/inventory.component */ "Cg25");
/* harmony import */ var _my_sales_my_sales_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-sales/my-sales.component */ "LWxi");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/reports.component */ "ZAGK");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/blocks.component */ "+A3O");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./block/block.component */ "xo3F");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./activity/activity.component */ "1VWD");
/* harmony import */ var _parties_parties_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parties/parties.component */ "BSPV");
/* harmony import */ var _quarries_quarries_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./quarries/quarries.component */ "IMq3");
/* harmony import */ var _add_invoice_add_invoice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-invoice/add-invoice.component */ "xO1T");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-item/add-item.component */ "cV+c");
/* harmony import */ var _slabs_slabs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./slabs/slabs.component */ "ndUa");
/* harmony import */ var _yards_yards_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./yards/yards.component */ "EM0T");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./company/company.component */ "Qmlm");
/* harmony import */ var _edit_slabs_edit_slabs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-slabs/edit-slabs.component */ "xdZY");
/* harmony import */ var _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit-block/edit-block.component */ "BS3H");
/* harmony import */ var _units_units_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./units/units.component */ "mvb2");
/* harmony import */ var _batch_task_batch_task_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./batch-task/batch-task.component */ "vBB9");
/* harmony import */ var _edit_thappi_edit_thappi_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-thappi/edit-thappi.component */ "rN9m");
/* harmony import */ var _my_quotation_my_quotation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./my-quotation/my-quotation.component */ "VK7j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");






























const routes = [
    { path: '', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'changepassword', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_4__["ChangepasswordComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], children: [
            {
                path: 'add-invoice',
                component: _add_invoice_add_invoice_component__WEBPACK_IMPORTED_MODULE_17__["AddInvoiceComponent"]
            },
            {
                path: 'parties',
                component: _parties_parties_component__WEBPACK_IMPORTED_MODULE_15__["PartiesComponent"]
            },
            {
                path: 'quarries',
                component: _quarries_quarries_component__WEBPACK_IMPORTED_MODULE_16__["QuarriesComponent"]
            },
            {
                path: 'activity',
                component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_14__["ActivityComponent"],
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
            },
            {
                path: 'manage-roles',
                component: _manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_6__["ManageRolesComponent"],
            },
            {
                path: 'reports',
                component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"],
            },
            {
                path: 'new-block',
                component: _new_block_new_block_component__WEBPACK_IMPORTED_MODULE_7__["NewBlockComponent"],
            },
            {
                path: 'yards',
                component: _yards_yards_component__WEBPACK_IMPORTED_MODULE_20__["YardsComponent"],
            },
            {
                path: 'inventory',
                component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"],
            },
            {
                path: 'my-sales',
                component: _my_sales_my_sales_component__WEBPACK_IMPORTED_MODULE_9__["MySalesComponent"],
            },
            {
                path: 'my-quotation',
                component: _my_quotation_my_quotation_component__WEBPACK_IMPORTED_MODULE_27__["MyQuotationComponent"],
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"]
            },
            {
                path: 'blocks',
                component: _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_12__["BlocksComponent"],
            },
            {
                path: 'block',
                component: _block_block_component__WEBPACK_IMPORTED_MODULE_13__["BlockComponent"],
            },
            {
                path: 'add-item',
                component: _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_18__["AddItemComponent"]
            },
            {
                path: 'slabs',
                component: _slabs_slabs_component__WEBPACK_IMPORTED_MODULE_19__["SlabsComponent"]
            },
            {
                path: 'company',
                component: _company_company_component__WEBPACK_IMPORTED_MODULE_21__["CompanyComponent"]
            },
            {
                path: 'edit-block',
                component: _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_23__["EditBlockComponent"]
            },
            {
                path: 'edit-slabs',
                component: _edit_slabs_edit_slabs_component__WEBPACK_IMPORTED_MODULE_22__["EditSlabsComponent"]
            },
            {
                path: 'units',
                component: _units_units_component__WEBPACK_IMPORTED_MODULE_24__["UnitsComponent"]
            },
            {
                path: 'batch-task',
                component: _batch_task_batch_task_component__WEBPACK_IMPORTED_MODULE_25__["BatchTaskComponent"]
            },
            {
                path: 'edit-thappi',
                component: _edit_thappi_edit_thappi_component__WEBPACK_IMPORTED_MODULE_26__["EditThappiComponent"]
            },
        ] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MainComponent {
    constructor(ds, router) {
        this.ds = ds;
        this.router = router;
    }
    ngOnInit() {
        this.ds.name = localStorage.getItem('name');
        var flag = 0;
        this.ds.getMyRoles({ token: localStorage.getItem('token') }).subscribe((response) => {
            if (response.status == 'ok') {
                // var temp='main/inventory/places'
                if (response.data.salesman_role == true) {
                    document.getElementById('6a').style.display = 'block';
                    document.getElementById('7a').style.display = 'block';
                    document.getElementById('70a').style.display = 'block';
                    flag = 1;
                }
                if (response.data.moderator_role == true) {
                    document.getElementById('4a').style.display = 'block';
                    document.getElementById('5a').style.display = 'block';
                    document.getElementById('6a').style.display = 'block';
                    document.getElementById('9a').style.display = 'block';
                    document.getElementById('10a').style.display = 'block';
                    document.getElementById('55a').style.display = 'block';
                    // document.getElementById('11a').style.display='block';
                    flag = 1;
                }
                if (response.data.admin_role == true) {
                    document.getElementById('1a').style.display = 'block';
                    document.getElementById('2a').style.display = 'block';
                    // document.getElementById('3a').style.display='block';
                    // document.getElementById('5a').style.display='block';
                    document.getElementById('6a').style.display = 'block';
                    document.getElementById('8a').style.display = 'block';
                    // temp='main/dashboard'
                    flag = 1;
                }
                if (flag == 0) {
                    this.router.navigate(['/'], { queryParams: { message: 'soon' } });
                }
                // else {
                //   this.router.navigate([temp])
                // }
            }
            else {
                this.router.navigate(['/']);
            }
        });
    }
    nav() {
        var navWrap = document.getElementById("sidebar");
        var navBtn = document.getElementById("nav-btn");
        navWrap.toggleAttribute("is-open");
        navWrap.style.left = "0px";
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        this.router.navigate(['/']);
    }
    filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toLowerCase();
        var div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        var txtValue;
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].innerText.toLowerCase();
            if (txtValue.indexOf(filter) > -1) {
                a[i].style.display = "block";
            }
            else {
                a[i].style.display = "none";
            }
        }
        if (filter == '') {
            document.getElementById('cont').style.display = 'none';
        }
        else {
            document.getElementById('cont').style.display = 'block';
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 82, vars: 0, consts: [[1, "sidebar", 2, "overflow-y", "scroll", "overflow-x", "hidden"], [1, "logo-details"], [1, "logo_name"], [1, "nav-links"], ["id", "1a", 2, "display", "none"], ["routerLink", "dashboard"], [1, "bx", "bxs-dashboard"], [1, "links_name"], ["id", "2a", 2, "display", "none"], ["routerLink", "manage-roles"], [1, "bx", "bx-user-plus"], ["id", "8a", 2, "display", "none"], ["routerLink", "activity"], [1, "bx", "bx-run"], ["id", "3a", 2, "display", "none"], ["routerLink", "reports"], [1, "bx", "bxs-report"], ["id", "4a", 2, "display", "none"], ["routerLink", "add-item"], [1, "bx", "bxs-plus-circle"], ["id", "11a", 2, "display", "none"], ["routerLink", "add-invoice"], [1, "bx", "bxs-truck"], ["id", "9a", 2, "display", "none"], ["routerLink", "parties"], [1, "bx", "bxs-contact"], ["id", "10a", 2, "display", "none"], ["routerLink", "quarries"], [1, "bx", "bxs-factory"], ["id", "5a", 2, "display", "none"], ["routerLink", "yards"], [1, "bx", "bxs-clinic"], ["routerLink", "blocks", 2, "cursor", "pointer"], [1, "bx", "bxs-grid-alt"], ["id", "6a", 2, "display", "none"], ["routerLink", "company", 2, "cursor", "pointer"], [1, "bx", "bxs-buildings"], ["id", "55a", 2, "display", "none"], ["routerLink", "units", 2, "cursor", "pointer"], [1, "bx", "bx-move-horizontal", 2, "font-size", "20px"], ["id", "70a", 2, "display", "none"], ["routerLink", "my-quotation"], [1, "bxs-plane"], ["id", "7a", 2, "display", "none"], ["routerLink", "my-sales"], [1, "bx", "bxs-paper-plane"], [3, "click"], ["href", ""], [1, "bx", "bx-log-out"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SalesBit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Add Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Add Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Parties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Quarries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Yards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "My Quotation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "My Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_li_click_76_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "xO1T":
/*!******************************************************!*\
  !*** ./src/app/add-invoice/add-invoice.component.ts ***!
  \******************************************************/
/*! exports provided: AddInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInvoiceComponent", function() { return AddInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function AddInvoiceComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No. of blocks :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_8_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.no_of_new_blocks = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Invoice Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_8_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.invoice_number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddInvoiceComponent_div_8_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.expand(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.no_of_new_blocks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.invoice_number);
} }
function AddInvoiceComponent_div_9_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r8.warehouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r8.warehouse);
} }
function AddInvoiceComponent_div_9_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r9.quarry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r9.quarry);
} }
function AddInvoiceComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Block Number :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.f.block_number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Warehouse:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.f.warehouse = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddInvoiceComponent_div_9_option_19_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.f.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Quarry :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_select_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.f.quarry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddInvoiceComponent_div_9_option_35_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Height :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.f.height = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Width :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.f.width = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Breadth :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.f.breadth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Recovery Height :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.f.recovery_height = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Recovery Width :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_65_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.f.recovery_width = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "HSN Code :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_71_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.f.hsn_code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Weight :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_77_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.f.weight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "[ton]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Category :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_85_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.f.catagory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Purchase cost :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_91_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.f.purchase_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Transportation Cost :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_97_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.f.transportation_cost = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Note : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInvoiceComponent_div_9_Template_input_ngModelChange_103_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.f.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddInvoiceComponent_div_9_Template_button_click_110_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.sendform(ctx_r26.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddInvoiceComponent_div_9_Template_button_click_112_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.i + 1, "/", ctx_r1.no_of_new_blocks, " blocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.block_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.warehouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.warehouses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.quarry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.quarries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.breadth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.recovery_height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.recovery_width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.hsn_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.catagory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.purchase_cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.transportation_cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.f.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.f.log);
} }
class AddInvoiceComponent {
    constructor(router, ds) {
        this.router = router;
        this.ds = ds;
        this.forms = [];
        this.start = 0;
        this.clicked = false;
        this.init = [];
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.ds.getYards({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.warehouses = (res.data);
            }
        });
        this.ds.getQuarries({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.quarries = (res.data);
            }
        });
    }
    expand() {
        this.clicked = true;
        this.init = [{ a: 1 }];
        for (var i = 0; i < this.no_of_new_blocks; i++) {
            this.forms.push({
                block_number: '',
                quarry: '',
                catagories: '',
                invoice: '',
                warehouse: '',
                date: '',
                weight: '',
                hsn_code: '',
                in_transit: '',
                payment: '',
                height: '',
                width: '',
                breadth: '',
                recovery_height: '',
                recovery_width: '',
                transportation_cost: '',
                note: '',
                log: ''
            });
        }
        this.f = this.forms[0];
        this.i = 0;
    }
    sendform(f_no) {
        for (var i = 0; i < this.warehouses.length; i++) {
            if (this.warehouses[i].warehouse == this.forms[f_no].warehouse) {
                this.forms[f_no].warehouse_address = this.warehouses[i].warehouse_address;
                break;
            }
        }
        // alert(this.forms[f_no].warehouse_address)
        this.ds.newBlock({
            token: localStorage.getItem('token'),
            block_number: this.forms[f_no].block_number,
            quarry: this.forms[f_no].quarry,
            catagories: this.forms[f_no].catagory,
            invoice_number: this.invoice_number,
            warehouse: this.forms[f_no].warehouse,
            warehouse_address: this.forms[f_no].warehouse_address,
            date: this.forms[f_no].date,
            weight: this.forms[f_no].weight,
            hsn_code: this.forms[f_no].hsn_code,
            payment: this.forms[f_no].payment,
            height: this.forms[f_no].height,
            width: this.forms[f_no].width,
            breadth: this.forms[f_no].breadth,
            recovery_height: this.forms[f_no].recovery_height,
            recovery_width: this.forms[f_no].width,
            transportation_cost: this.forms[f_no].transportation_cost,
            note: this.forms[f_no].note,
        }).subscribe((response) => {
            if (response.status == 'ok') {
                this.forms[f_no].log = 'Saved!';
            }
            else {
                this.forms[f_no].log = 'Failed.';
            }
        });
    }
    next() {
        if (this.i + 1 < this.no_of_new_blocks) {
            this.i++;
            this.f = this.forms[this.i];
        }
    }
}
AddInvoiceComponent.ɵfac = function AddInvoiceComponent_Factory(t) { return new (t || AddInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
AddInvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddInvoiceComponent, selectors: [["app-add-invoice"]], decls: 10, vars: 3, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], ["class", "sales-boxes", 4, "ngIf"], [1, "sales-boxes"], [1, "recent-sales", "box"], ["id", "addblock", "autocomplete", "off", 1, "input-block"], ["type", "number", "name", "block_number", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "height", 1, "input-field", 3, "ngModel", "ngModelChange"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "15px 32px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "click"], ["type", "text", "name", "block_number", "required", "", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "warehouse", "id", "warehouse", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "date", "type", "date", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "quarry", "id", "quarry", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "width", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "breadth", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "recovery_height", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "recovery_width", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "hsn_code", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "weight", "type", "text", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "catagory", "type", "text", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "purchase_cost", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "transportation_cost", "type", "text", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "note", 1, "input-field", 3, "ngModel", "ngModelChange"], [2, "background-color", "orange", "border", "none", "color", "white", "padding", "15px 32px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "margin-left", "5px", "font-size", "16px", 3, "click"], [3, "value"]], template: function AddInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddInvoiceComponent_div_8_Template, 20, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddInvoiceComponent_div_9_Template, 114, 20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clicked == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.i > -1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    \r\n  }\r\n.temp[_ngcontent-%COMP%] {\r\n    max-width:130px;\r\n    overflow:hidden;  \r\n}\r\n.temp[_ngcontent-%COMP%]:hover{\r\n    \r\n    overflow-x: visible;\r\n}\r\n.temp[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n    -ms-overflow-style: none;  \r\n    scrollbar-width: none;  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjs7RUFFckI7QUFDRjtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0VBQ2Y7QUFFQSw0Q0FBNEM7QUFDNUM7SUFDRSx3QkFBd0IsR0FBRyxnQkFBZ0I7SUFDM0MscUJBQXFCLEdBQUcsWUFBWTtFQUN0QyIsImZpbGUiOiJhZGQtaW52b2ljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG50aCwgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBcclxuICB9XHJcbi50ZW1wIHtcclxuICAgIG1heC13aWR0aDoxMzBweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjsgIFxyXG59XHJcbi50ZW1wOmhvdmVye1xyXG4gICAgXHJcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xyXG59XHJcblxyXG4udGVtcDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXHJcbiAgLnRlbXAge1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ "xdZY":
/*!****************************************************!*\
  !*** ./src/app/edit-slabs/edit-slabs.component.ts ***!
  \****************************************************/
/*! exports provided: EditSlabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSlabsComponent", function() { return EditSlabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EditSlabsComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r3.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r3.unit);
} }
function EditSlabsComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", y_r4.yard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r4.yard);
} }
function EditSlabsComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", q_r5.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r5.unit);
} }
class EditSlabsComponent {
    constructor(ds, route, router) {
        this.ds = ds;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 10);
        this.route.queryParams.subscribe((par) => {
            this.ds.getSlabs({ token: localStorage.getItem('token'),
                block_no: par.block }).subscribe((res) => {
                if (res.status == 'ok') {
                    this.s = res.slabs;
                    this.b = res.block;
                    this.s.unit = res.unit.unit;
                    this.s.factor = res.unit.factor;
                    this.s.dim_1 = (parseFloat(this.s.dim_1) / parseFloat(this.s.factor));
                    this.s.dim_2 = (parseFloat(this.s.dim_2) / parseFloat(this.s.factor));
                }
            });
        });
        this.ds.getYards({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.yards = res.data;
            }
        });
        this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == "ok") {
                this.units = res.data;
            }
        });
    }
    save() {
        this.log = '';
        this.s.dim_1 = (parseFloat(this.s.dim_1) * parseFloat(this.s.factor));
        this.s.dim_2 = (parseFloat(this.s.dim_2) * parseFloat(this.s.factor));
        this.ds.editSlabs({ token: localStorage.getItem('token'), s: this.s })
            .subscribe((res) => {
            if (res.status == 'ok') {
                this.log = 'Saved!';
                this.s.dim_1 = (parseFloat(this.s.dim_1) / parseFloat(this.s.factor));
                this.s.dim_2 = (parseFloat(this.s.dim_2) / parseFloat(this.s.factor));
            }
            else {
                this.log = "Failed.";
            }
        });
    }
    change_unit() {
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].unit == this.s.unit) {
                this.s.factor = this.units[i].factor;
            }
        }
    }
    change_unit_helper() {
        this.s.dim_1 = (parseFloat(this.s.dim_1) * parseFloat(this.s.factor));
        this.s.dim_2 = (parseFloat(this.s.dim_2) * parseFloat(this.s.factor));
    }
    change_dims() {
        this.s.dim_1 = (parseFloat(this.s.dim_1) / parseFloat(this.s.factor));
        this.s.dim_2 = (parseFloat(this.s.dim_2) / parseFloat(this.s.factor));
    }
}
EditSlabsComponent.ɵfac = function EditSlabsComponent_Factory(t) { return new (t || EditSlabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditSlabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditSlabsComponent, selectors: [["app-edit-slabs"]], decls: 81, vars: 17, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [2, "float", "right"], ["name", "gsfgwefwesrd", "id", "grd", 2, "width", "50px", 3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [2, "margin-left", "20px"], [2, "height", "30px"], [1, "sales-boxes"], [1, "recent-sales", "box"], [1, "input-block"], ["name", "yard", "id", "yard", 3, "ngModel", "ngModelChange"], ["name", "date", "type", "date", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "height", 1, "input-field", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "width", 1, "input-field", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["name", "unitt", "id", "wth", 2, "width", "100px", 3, "ngModel", "change", "ngModelChange"], ["type", "number", "name", "breadth", 1, "input-field", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "paymeesnt", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "transportation_cost", "type", "number", 1, "input-field", 3, "ngModel", "ngModelChange"], ["name", "p_cost", "type", "number", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "note", 1, "input-field", 3, "ngModel", "ngModelChange"], [2, "margin", "20px", "color", "red"], [2, "background-color", "#00a0d1", "border", "none", "color", "white", "padding", "15px 32px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", "margin-left", "20px", "margin-bottom", "20px", 3, "click"], [3, "value"]], template: function EditSlabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Slabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Unit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditSlabsComponent_Template_select_change_10_listener() { ctx.change_unit_helper(); ctx.change_unit(); return ctx.change_dims(); })("ngModelChange", function EditSlabsComponent_Template_select_ngModelChange_10_listener($event) { return ctx.s.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditSlabsComponent_option_12_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Processor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSlabsComponent_Template_select_ngModelChange_23_listener($event) { return ctx.s.processor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditSlabsComponent_option_25_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSlabsComponent_Template_input_ngModelChange_31_listener($event) { return ctx.s.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "L :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSlabsComponent_Template_input_ngModelChange_36_listener($event) { return ctx.s.dim_1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "H :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSlabsComponent_Template_input_ngModelChange_40_listener($event) { return ctx.s.dim_2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditSlabsComponent_Template_select_change_42_listener() { return ctx.change_unit(); })("ngModelChange", function EditSlabsComponent_Template_select_ngModelChange_42_listener($event) { return ctx.s.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EditSlabsComponent_option_44_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Thickness :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSlabsComponent_Template_input_ngModelChange_48_listener($event) { return ctx.s.dim_3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "mm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSlabsComponent_Template_input_ngModelChange_55_listener($event) { return ctx.s.cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Transportation Cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSlabsComponent_Template_input_ngModelChange_61_listener($event) { return ctx.s.transportation_cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Processing Cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSlabsComponent_Template_input_ngModelChange_67_listener($event) { return ctx.s.processing_cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Note : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSlabsComponent_Template_input_ngModelChange_73_listener($event) { return ctx.s.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditSlabsComponent_Template_button_click_79_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Slabs of ", ctx.b.has_children ? ctx.s.block_no.split("zzz000")[0] + " - " + ctx.s.block_no.split("zzz000")[1] : ctx.s.block_no, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.processor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.dim_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.dim_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.dim_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.transportation_cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.processing_cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.s.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.log);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNsYWJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "xo3F":
/*!******************************************!*\
  !*** ./src/app/block/block.component.ts ***!
  \******************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BlockComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", w_r16.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r16.unit);
} }
function BlockComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlockComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Parent Block: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/main/block?block=", ctx_r2.b.block_no.split("zzz000")[0], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.b.block_no.split("zzz000")[0]);
} }
function BlockComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Slabs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/main/slabs?block=", ctx_r3.b.block_no, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BlockComponent_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/main/block?block=", d_r20, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r20.split("zzz000")[0] + " - " + d_r20.split("zzz000")[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.b.children.length > i_r21 + 1 ? ", " : "", " ");
} }
function BlockComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Child Blocks: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockComponent_div_22_span_2_Template, 4, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.b.children);
} }
function BlockComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In-transit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlockComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.b.yard);
} }
function BlockComponent_div_27_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Yard Address : ", ctx_r22.yard.yard_address, "");
} }
function BlockComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockComponent_div_27_span_1_Template, 4, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.b.in_transit == false);
} }
function BlockComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quarry Address :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Specific Gravity : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Block Type :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.quarry.quarry_address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.quarry.specific_gravity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.quarry.block_type, "");
} }
function BlockComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Processor :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.b.processor, "");
} }
function BlockComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Processing Cost : \u20B9 ", ctx_r10.b.processing_cost.toFixed(3), " ");
} }
function BlockComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Invoice : ", ctx_r11.b.invoice_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Truck no : ", ctx_r11.b.truck_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Builty no : ", ctx_r11.b.builty_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Royalty : ", ctx_r11.b.royalty_no, "");
} }
function BlockComponent_tr_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r23.to_yard ? y_r23.to_yard : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r23.transportation_cost ? y_r23.transportation_cost.toFixed(2) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r23.date ? y_r23.date : "");
} }
function BlockComponent_button_120_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockComponent_button_120_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.un_process(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Un-process");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlockComponent_button_121_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockComponent_button_121_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.un_break(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Un-break Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlockComponent_button_122_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockComponent_button_122_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BlockComponent {
    constructor(router, ds, route) {
        this.router = router;
        this.ds = ds;
        this.route = route;
        this.factor = 1;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name').slice(0, 8);
        this.route.queryParams.subscribe((par) => {
            this.ds.getBlock({ token: localStorage.getItem('token'), block_no: par.block })
                .subscribe((res) => {
                if (res.status == 'ok') {
                    this.b = res.block;
                    this.b.unit = res.unit.unit;
                    this.b.factor = res.unit.factor ? res.unit.factor : 1;
                    for (let i in this.b) {
                        if (this.b[i] == undefined) {
                            this.b[i] = 0;
                        }
                    }
                    this.quarry = res.quarry;
                    this.yard = res.yard;
                }
            });
            this.ds.getUnits({ token: localStorage.getItem('token') }).subscribe((res) => {
                if (res.status == "ok") {
                    this.units = res.data;
                }
            });
        });
        this.ds.getMyRoles({ token: localStorage.getItem('token') }).subscribe((res) => {
            if (res.status == 'ok') {
                this.salesman = res.data.salesman_role;
                this.moderator = res.data.moderator_role;
            }
        });
    }
    edit() {
        if (this.b.is_child) {
            this.router.navigate(['/main/edit-thappi'], { queryParams: { block: this.b.block_no } });
            return;
        }
        this.router.navigate(['/main/edit-block'], { queryParams: { block: this.b.block_no } });
    }
    delete() {
        if (!confirm('Are you sure you wanna delete block? All trades will be also deleted.'))
            return;
        this.ds.deleteBlock({ token: localStorage.getItem('token'), block_no: this.b.block_no })
            .subscribe((res) => {
            if (res.status == "ok") {
                this.router.navigate(['/main/blocks'], { queryParams: {} });
            }
        });
    }
    un_break() {
        if (!confirm('Are you sure you wanna un-break? All trades of thappis will be deleted.'))
            return;
        this.ds.unBreak({ token: localStorage.getItem('token'), block_no: this.b.block_no })
            .subscribe((res) => {
            if (res.status == "ok") {
                this.b.children = [];
                this.b.has_children = false;
            }
        });
    }
    un_process() {
        if (!confirm('Are you sure you want to un-process this? All trades of slabs will be deleted.'))
            return;
        this.ds.unProcess({ token: localStorage.getItem('token'), block_no: this.b.block_no })
            .subscribe((res) => {
            if (res.status == "ok") {
                this.b.slabs = false;
            }
        });
    }
    change_unit() {
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].unit == this.b.unit) {
                this.b.factor = this.units[i].factor;
                break;
            }
        }
    }
}
BlockComponent.ɵfac = function BlockComponent_Factory(t) { return new (t || BlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockComponent, selectors: [["app-block"]], decls: 123, vars: 37, consts: [[1, "home-section"], ["id", "navWrap", 1, "nav-wrap"], [1, "dashboard", 2, "font-size", "15px"], ["routerLink", "/main/profile", 1, "admin_name", 2, "font-size", "14px", "cursor", "pointer", "background-color", "#ffc107", "padding", "5px", "border-radius", "2px", "color", "white"], [1, "home-content"], [2, "float", "right"], ["name", "gsfgwefwesrd", "id", "grd", 2, "width", "50px", 3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [2, "margin", "20px", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis", "width", "200px"], ["style", "background-color: #65a3c0; \n    border: none;\n    color: white;\n    padding: 8px 14px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin-left: 20px;", 3, "click", 4, "ngIf"], [2, "background-color", "#fff", "box-shadow", "0 5px 10px rgba(0,0,0,0.1)", "max-width", "500px", "padding", "20px", "border-radius", "20px", "margin", "20px", "overflow-x", "scroll", "word-wrap", "break-word"], [4, "ngIf"], ["style", "color:green;", 4, "ngIf"], [2, "border", "1px dashed black", "padding", "10px"], [1, "bx", "bx-move-horizontal", 2, "font-size", "20px"], ["style", "border:1px dashed black; padding:10px", 4, "ngIf"], [2, "border", "1px solid black", "padding", "10px"], [1, "bx", "bxs-truck", 2, "font-size", "20px"], [2, "padding", "10px"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], [3, "value"], [2, "background-color", "#65a3c0", "border", "none", "color", "white", "padding", "8px 14px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", "margin-left", "20px", 3, "click"], [3, "href"], [2, "color", "green"], [1, "bx", "bxs-truck"], [3, "click"]], template: function BlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Unit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BlockComponent_Template_select_change_10_listener() { return ctx.change_unit(); })("ngModelChange", function BlockComponent_Template_select_ngModelChange_10_listener($event) { return ctx.b.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BlockComponent_option_12_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Block Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BlockComponent_button_18_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BlockComponent_div_20_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BlockComponent_div_21_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BlockComponent_div_22_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Yard : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BlockComponent_span_25_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BlockComponent_span_26_Template, 3, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BlockComponent_div_27_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Quarry :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BlockComponent_div_42_Template, 16, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, BlockComponent_div_43_Template, 6, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Shade :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Grade :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Layer :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Weight :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cost :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, BlockComponent_span_72_Template, 4, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Length :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Height :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Width :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, BlockComponent_div_91_Template, 20, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "HSN Code : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Transport History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "To-Yard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "T Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, BlockComponent_tr_118_Template, 7, 3, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, BlockComponent_button_120_Template, 2, 0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, BlockComponent_button_121_Template, 2, 0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, BlockComponent_button_122_Template, 2, 0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.b.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.is_child ? ctx.b.block_no.split("zzz000")[0] + " - " + ctx.b.block_no.split("zzz000")[1] : ctx.b.block_no, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moderator == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.b.is_child == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.b.slabs == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.b.has_children == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.b.in_transit == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.b.in_transit == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yard != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.quarry, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quarry != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.b.is_child == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.shade, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.grade, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.layer_type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.weight.toFixed(3), " [TON]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.b.cost.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Transportation Cost : \u20B9 ", ctx.b.transportation_cost.toFixed(3), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.b.is_child);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total: \u20B9 ", (ctx.b.cost + ctx.b.transportation_cost + ctx.b.processing_cost).toFixed(3), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx.b.dim_1 / ctx.b.factor).toFixed(3), " ", ctx.b.unit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx.b.dim_2 / ctx.b.factor).toFixed(3), " ", ctx.b.unit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx.b.dim_3 / ctx.b.factor).toFixed(3), " ", ctx.b.unit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.b.is_child == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.b.hsn_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Company : ", ctx.b.company, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Note : ", ctx.b.note, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.b.yard_history);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.b.slabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.b.is_child && ctx.b.has_children && !ctx.b.slabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.b.is_child && !ctx.b.has_children && !ctx.b.slabs);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".input-block[_ngcontent-%COMP%]{\r\n    width: 350px;\r\n    position: relative;\r\n    margin: 6% auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.headadd[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    background-color: orange; \r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n  }\r\n\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6ImJsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5pbnB1dC1ibG9ja3tcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNiUgYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkYWRke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIHRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map