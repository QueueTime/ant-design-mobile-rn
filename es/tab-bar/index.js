var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _style=require("../style");var _index=_interopRequireDefault(require("./style/index"));var _TabBarItem=_interopRequireDefault(require("./TabBarItem"));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var TabBar=function(_React$Component){(0,_inherits2["default"])(TabBar,_React$Component);var _super=_createSuper(TabBar);function TabBar(){(0,_classCallCheck2["default"])(this,TabBar);return _super.apply(this,arguments);}(0,_createClass2["default"])(TabBar,[{key:"getPanes",value:function getPanes(styles,content){var _this$props=this.props,tintColor=_this$props.tintColor,unselectedTintColor=_this$props.unselectedTintColor,children=_this$props.children;var selectedIndex=0;[].concat(children).forEach(function(child,idx){if(child.props.selected){selectedIndex=idx;}});var newChildren=[];_react["default"].Children.map(children,function(child,idx){if(content&&selectedIndex===idx){newChildren.push(_react["default"].createElement(_reactNative.View,{key:idx,style:[styles.contentItem,idx===selectedIndex?styles.contentItemSelected:undefined]},child.props.children));}else{newChildren.push(_react["default"].cloneElement(child,{key:idx,tintColor:tintColor,unselectedTintColor:unselectedTintColor,styles:styles}));}});if(content){return newChildren.filter(function(_,i){return i===selectedIndex;});}return newChildren;}},{key:"render",value:function render(){var _this=this;var style={backgroundColor:this.props.barTintColor};return _react["default"].createElement(_reactNative.SafeAreaView,{style:[{flex:1},style]},_react["default"].createElement(_style.WithTheme,{styles:this.props.styles,themeStyles:_index["default"]},function(styles){return _react["default"].createElement(_reactNative.View,{style:styles.tabbar},_react["default"].createElement(_reactNative.View,{style:styles.content},_this.getPanes(styles,true)),_react["default"].createElement(_reactNative.View,{style:[style,styles.tabs]},_this.getPanes(styles,false)));}));}}]);return TabBar;}(_react["default"].Component);TabBar.defaultProps={barTintColor:'white',tintColor:'#108ee9',unselectedTintColor:'#888'};TabBar.Item=_TabBarItem["default"];var _default=TabBar;exports["default"]=_default;