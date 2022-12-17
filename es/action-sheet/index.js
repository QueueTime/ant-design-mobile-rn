var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _portal=_interopRequireDefault(require("../portal"));var _AndroidContainer=_interopRequireDefault(require("./AndroidContainer"));var instance;var _default={showActionSheetWithOptions:function showActionSheetWithOptions(config,callback){var key=_portal["default"].add(_react["default"].createElement(_AndroidContainer["default"],{visible:true,ref:function ref(_ref){return instance=_ref;},onAnimationEnd:function onAnimationEnd(visible){if(!visible){_portal["default"].remove(key);}},config:config,callback:callback}));},showShareActionSheetWithOptions:function showShareActionSheetWithOptions(config,failureCallback,successCallback){try{navigator.share(config).then(function(){if(successCallback){successCallback(true,'');}})["catch"](function(){if(successCallback){successCallback(false);}});}catch(error){if(failureCallback){failureCallback(error);}}},close:function close(){if(instance){instance.close();}}};exports["default"]=_default;