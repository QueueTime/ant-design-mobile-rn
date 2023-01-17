"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.formatFn=formatFn;exports.formatProps=formatProps;var _typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof"));function formatIt(date,form){var pad=function pad(n){return n<10?"0".concat(n):n;};var dateStr="".concat(date.getFullYear(),"-").concat(pad(date.getMonth()+1),"-").concat(pad(date.getDate()));var timeStr="".concat(pad(date.getHours()),":").concat(pad(date.getMinutes()));if(form==='YYYY-MM-DD'){return dateStr;}if(form==='HH:mm'){return timeStr;}return"".concat(dateStr," ").concat(timeStr);}function formatFn(instance,value){var formatsEnum={date:'YYYY-MM-DD',time:'HH:mm',datetime:'YYYY-MM-DD HH:mm'};var format=instance.props.format;var type=(0,_typeof2["default"])(format);if(type==='string'){return formatIt(value,format);}if(type==='function'){return format(value);}return formatIt(value,formatsEnum[instance.props.mode]);}function formatProps(props,value){var formatsEnum={date:'YYYY-MM-DD',time:'HH:mm',datetime:'YYYY-MM-DD HH:mm'};var format=props.format;var type=(0,_typeof2["default"])(format);if(type==='string'){return formatIt(value,format);}if(type==='function'){return format(value);}return formatIt(value,formatsEnum[props.mode]);}