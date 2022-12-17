var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _PickerMixin=_interopRequireDefault(require("./PickerMixin"));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var ratio=_reactNative.PixelRatio.get();var styles=_reactNative.StyleSheet.create({indicator:{position:'absolute',left:0,top:-99,borderColor:'#aaa',borderTopWidth:1/ratio,borderBottomWidth:1/ratio},scrollView:{height:0},selectedItemText:{fontSize:20,fontWeight:'bold',color:'#000'},itemText:{fontSize:20,color:'#aaa',textAlign:'center'}});var Picker=function(_React$Component){(0,_inherits2["default"])(Picker,_React$Component);var _super=_createSuper(Picker);function Picker(){var _this;(0,_classCallCheck2["default"])(this,Picker);_this=_super.apply(this,arguments);_this.onItemLayout=function(e){var _e$nativeEvent$layout=e.nativeEvent.layout,height=_e$nativeEvent$layout.height,width=_e$nativeEvent$layout.width;if(_this.itemHeight!==height||_this.itemWidth!==width){_this.itemWidth=width;if(_this.indicatorRef){_this.indicatorRef.setNativeProps({style:[styles.indicator,{top:height*3,height:height,width:width}]});}}if(_this.itemHeight!==height){_this.itemHeight=height;if(_this.scrollerRef){;_this.scrollerRef.setNativeProps({style:{height:height*7}});}if(_this.contentRef){_this.contentRef.setNativeProps({style:{paddingTop:height*3,paddingBottom:height*3}});}setTimeout(function(){_this.props.select(_this.props.selectedValue,_this.itemHeight,_this.scrollTo);},0);}};_this.scrollTo=function(y){if(_this.scrollerRef){_this.scrollerRef.scrollTo({y:y,animated:false});}};_this.fireValueChange=function(selectedValue){if(_this.props.selectedValue!==selectedValue&&_this.props.onValueChange){_this.props.onValueChange(selectedValue);}};_this.onScroll=function(e){var y=e.nativeEvent.contentOffset.y;_this.clearScrollBuffer();_this.scrollBuffer=setTimeout(function(){_this.clearScrollBuffer();_this.props.doScrollingComplete(y,_this.itemHeight,_this.fireValueChange);},50);};return _this;}(0,_createClass2["default"])(Picker,[{key:"componentDidUpdate",value:function componentDidUpdate(){this.props.select(this.props.selectedValue,this.itemHeight,this.scrollTo);}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.clearScrollBuffer();}},{key:"clearScrollBuffer",value:function clearScrollBuffer(){if(this.scrollBuffer){clearTimeout(this.scrollBuffer);}}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,children=_this$props.children,itemStyle=_this$props.itemStyle,selectedValue=_this$props.selectedValue,style=_this$props.style;var items=_react["default"].Children.map(children,function(item,index){var totalStyle=[styles.itemText];if(selectedValue===item.props.value){totalStyle.push(styles.selectedItemText);}return _react["default"].createElement(_reactNative.View,{ref:function ref(el){return _this2["item".concat(index)]=el;},onLayout:index===0?_this2.onItemLayout:undefined,key:item.key},_react["default"].createElement(_reactNative.Text,{style:[{includeFontPadding:false},totalStyle,itemStyle],numberOfLines:1},item.props.label));});return _react["default"].createElement(_reactNative.View,{style:style},_react["default"].createElement(_reactNative.View,{ref:function ref(el){return _this2.indicatorRef=el;},style:styles.indicator}),_react["default"].createElement(_reactNative.ScrollView,{style:styles.scrollView,ref:function ref(el){return _this2.scrollerRef=el;},onScroll:this.onScroll,showsVerticalScrollIndicator:false,overScrollMode:"never",renderToHardwareTextureAndroid:true,scrollEventThrottle:10,needsOffscreenAlphaCompositing:true,collapsable:true,horizontal:false,removeClippedSubviews:true},_react["default"].createElement(_reactNative.View,{ref:function ref(el){return _this2.contentRef=el;}},items)));}}]);return Picker;}(_react["default"].Component);var _default=(0,_PickerMixin["default"])(Picker);exports["default"]=_default;