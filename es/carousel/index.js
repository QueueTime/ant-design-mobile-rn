var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _style=require("../style");var _devWarning=_interopRequireDefault(require("../_util/devWarning"));var _index=_interopRequireDefault(require("./style/index"));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var defaultPagination=function defaultPagination(props){var styles=props.styles,current=props.current,vertical=props.vertical,count=props.count,dotStyle=props.dotStyle,dotActiveStyle=props.dotActiveStyle;var positionStyle=vertical?'paginationY':'paginationX';var flexDirection=vertical?'column':'row';var arr=[];for(var i=0;i<count;i++){arr.push(_react["default"].createElement(_reactNative.View,{key:"dot-".concat(i),style:[styles.pointStyle,styles.spaceStyle,dotStyle,i===current&&styles.pointActiveStyle,i===current&&dotActiveStyle]}));}return _react["default"].createElement(_reactNative.View,{style:[styles.pagination,styles[positionStyle]]},_react["default"].createElement(_reactNative.View,{style:{flexDirection:flexDirection}},arr));};var Carousel=function(_React$PureComponent){(0,_inherits2["default"])(Carousel,_React$PureComponent);var _super=_createSuper(Carousel);function Carousel(props){var _this;(0,_classCallCheck2["default"])(this,Carousel);_this=_super.call(this,props);_this.scrollview=_react["default"].createRef();_this.onScrollBegin=function(e){_this.setState({isScrolling:true},function(){if(_this.props.onScrollBeginDrag){_this.props.onScrollBeginDrag(e);}});};_this.onScrollEnd=function(e){var _a;(_a=e.persist)===null||_a===void 0?void 0:_a.call(e);if(!e.nativeEvent.contentOffset){var position=e.nativeEvent.position;e.nativeEvent.contentOffset={x:_this.props.vertical?0:position*_this.state.width,y:_this.props.vertical?position*_this.state.height:0};}_this.autoplay();clearTimeout(_this.scrollEndTimter);_this.scrollEndTimter=setTimeout(function(){_this.updateIndex(e.nativeEvent.contentOffset);if(_this.props.onMomentumScrollEnd){_this.props.onMomentumScrollEnd(e);}},50);};_this.onScrollEndDrag=function(e){var _a;(_a=e.persist)===null||_a===void 0?void 0:_a.call(e);var _this$state=_this.state,offset=_this$state.offset,selectedIndex=_this$state.selectedIndex;var previousOffset=offset;var newOffset=e.nativeEvent.contentOffset;if((_this.props.vertical?previousOffset.y===newOffset.y:previousOffset.x===newOffset.x)&&(selectedIndex===0||selectedIndex===_this.count-1)){_this.setState({isScrolling:false});}if(_this.props.onScrollEndDrag){_this.props.onScrollEndDrag(e);}};_this.onTouchStartForWeb=function(){_this.setState({isScrolling:true});};_this.onTouchEndForWeb=function(){_this.autoplay();};_this.onScrollForWeb=function(e){_this.onScrollEnd(JSON.parse(JSON.stringify(e)));};_this.onLayout=function(e){var _this$props=_this.props,selectedIndex=_this$props.selectedIndex,infinite=_this$props.infinite,vertical=_this$props.vertical;var scrollIndex=_this.count>1&&Math.min(selectedIndex,_this.count-1)||0;var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;var offset=vertical?{x:0,y:height*(scrollIndex+(infinite&&_this.count>1?1:0))}:{x:width*(scrollIndex+(infinite&&_this.count>1?1:0)),y:0};_this.setState({width:width,height:height,offset:offset},function(){var _a,_b;(_b=(_a=_this.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo((0,_extends2["default"])((0,_extends2["default"])({},offset),{animated:false}));_this.autoplay();});};_this.updateIndex=function(currentOffset){var paramOffset=currentOffset;var selectedIndex=_this.state.selectedIndex;var _this$state2=_this.state,offset=_this$state2.offset,width=_this$state2.width,height=_this$state2.height;var diff=_this.props.vertical?paramOffset.y-offset.y:paramOffset.x-offset.x;if(!diff){return;}selectedIndex+=Math.round(diff/(_this.props.vertical?height:width));if(_this.props.infinite){if(selectedIndex<=-1){selectedIndex=_this.count-1;if(_this.props.vertical){paramOffset.y=height*_this.count;}else{paramOffset.x=width*_this.count;}}else if(selectedIndex>=_this.count){selectedIndex=0;if(_this.props.vertical){paramOffset.y=height;}else{paramOffset.x=width;}}if(_this.props.vertical){if(paramOffset.y===height){_this.scrollToStart();}else if(paramOffset.y===_this.count*height){_this.scrollToEnd();}}else{if(paramOffset.x===width){_this.scrollToStart();}else if(paramOffset.x===_this.count*width){_this.scrollToEnd();}}}_this.setState({selectedIndex:selectedIndex,offset:paramOffset},function(){if(_this.props.afterChange&&_this.state.selectedIndex!==_this.state.afterSelectedIndex){_this.setState({afterSelectedIndex:selectedIndex},function(){var _a,_b;(_b=(_a=_this.props).afterChange)===null||_b===void 0?void 0:_b.call(_a,selectedIndex);});}});};_this.scrollToStart=function(){var _a,_b;(_b=(_a=_this.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo({x:_this.props.vertical?0:_this.state.width,y:_this.props.vertical?_this.state.height:0,animated:false});};_this.scrollToEnd=function(){var _a,_b;(_b=(_a=_this.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo({x:_this.props.vertical?0:_this.state.width*_this.count,y:_this.props.vertical?_this.state.height*_this.count:0,animated:false});};_this.scrollNextPage=function(){var _a,_b;var _this$state3=_this.state,selectedIndex=_this$state3.selectedIndex,isScrolling=_this$state3.isScrolling,width=_this$state3.width,height=_this$state3.height;if(isScrolling||_this.count<2){return;}var diff=selectedIndex+1+(_this.props.infinite?1:0);(_b=(_a=_this.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo(_this.props.vertical?{x:0,y:diff*height}:{x:diff*width,y:0});_this.setState({isScrolling:true},function(){if(_reactNative.Platform.OS!=='ios'){_this.onScrollEnd({nativeEvent:{position:diff}});}});};_this.autoplay=function(){_this.setState({isScrolling:false},function(){var _this$props2=_this.props,children=_this$props2.children,autoplay=_this$props2.autoplay,autoplayInterval=_this$props2.autoplayInterval,infinite=_this$props2.infinite;var selectedIndex=_this.state.selectedIndex;if(!Array.isArray(children)||!autoplay){return;}clearTimeout(_this.autoplayTimer);_this.autoplayTimer=setTimeout(function(){if(!infinite&&selectedIndex+1===_this.count-1){return;}_this.scrollNextPage();},autoplayInterval);});};_this.renderScroll=function(pages){return _react["default"].createElement(_reactNative.ScrollView,(0,_extends2["default"])({},_this.props,{horizontal:!_this.props.vertical,ref:_this.scrollview,showsHorizontalScrollIndicator:false,showsVerticalScrollIndicator:false,pagingEnabled:true,removeClippedSubviews:false,automaticallyAdjustContentInsets:false,directionalLockEnabled:true,contentOffset:_this.state.offset,onScrollBeginDrag:_this.onScrollBegin,onMomentumScrollEnd:_this.onScrollEnd,onScrollEndDrag:_this.onScrollEndDrag},_reactNative.Platform.OS==='web'?{onTouchStart:_this.onTouchStartForWeb,onTouchEnd:_this.onTouchEndForWeb,onScroll:_this.onScrollForWeb,scrollEventThrottle:0}:{}),pages);};_this.renderDots=function(index){var _this$props3=_this.props,vertical=_this$props3.vertical,pagination=_this$props3.pagination,dotStyle=_this$props3.dotStyle,dotActiveStyle=_this$props3.dotActiveStyle;if(!pagination){return null;}return _react["default"].createElement(_style.WithTheme,{themeStyles:_index["default"],styles:_this.props.styles},function(styles){return pagination({styles:styles,vertical:vertical,current:index,count:_this.count,dotStyle:dotStyle,dotActiveStyle:dotActiveStyle});});};var _this$props4=_this.props,children=_this$props4.children,selectedIndex=_this$props4.selectedIndex;_this.count=children?_react["default"].Children.count(children):0;var index=_this.count>1&&Math.min(selectedIndex,_this.count-1)||0;_this.state={width:0,height:0,isScrolling:false,selectedIndex:index,afterSelectedIndex:-1,offset:{x:0,y:0}};return _this;}(0,_createClass2["default"])(Carousel,[{key:"componentDidMount",value:function componentDidMount(){this.autoplay();}},{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(nextProps){var _this2=this;var autoplay=nextProps.autoplay,children=nextProps.children,infinite=nextProps.infinite,vertical=nextProps.vertical;var _this$state4=this.state,width=_this$state4.width,height=_this$state4.height;if(autoplay!==this.props.autoplay){if(autoplay){this.autoplay();}else{this.autoplayTimer&&clearTimeout(this.autoplayTimer);}}if(children&&_react["default"].Children.count(children)===this.count&&infinite===this.props.infinite){return;}this.count=_react["default"].Children.count(children)||1;var offset=vertical?{x:0,y:height*(infinite?1:0)}:{x:width*(infinite?1:0),y:0};this.setState({isScrolling:false,afterSelectedIndex:-1,selectedIndex:0,offset:offset},function(){var _a,_b;(_b=(_a=_this2.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo(offset);_this2.autoplay();});}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.autoplayTimer&&clearTimeout(this.autoplayTimer);this.scrollEndTimter&&clearTimeout(this.scrollEndTimter);}},{key:"goTo",value:function goTo(index,animated){var _a,_b;var _this$state5=this.state,width=_this$state5.width,height=_this$state5.height;var count=this.props.infinite?this.count-1:this.count;if(typeof index!=='number'||index<0||index>count){return(0,_devWarning["default"])(false,'Carousel',"function goTo(index): ".concat('`index`'," must be between 0 - ",count," numbers"));}(_b=(_a=this.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo({x:this.props.vertical?0:(index+(this.props.infinite?1:0))*width,y:this.props.vertical?(index+(this.props.infinite?1:0))*height:0,animated:animated});}},{key:"render",value:function render(){var _this$props5=this.props,children=_this$props5.children,dots=_this$props5.dots,infinite=_this$props5.infinite,accessibilityLabel=_this$props5.accessibilityLabel,pageStyle=_this$props5.pageStyle;var _this$state6=this.state,width=_this$state6.width,height=_this$state6.height,selectedIndex=_this$state6.selectedIndex;if(!children){return null;}var pages;var pageWidth=[pageStyle,{width:width,height:height}];if(this.count>1){var childrenArray=_react["default"].Children.toArray(children);if(infinite){childrenArray.unshift(childrenArray[this.count-1]);childrenArray.push(childrenArray[1]);}pages=childrenArray.map(function(child,index){return _react["default"].createElement(_reactNative.View,{key:"carousel_".concat(index),accessibilityLabel:"".concat(accessibilityLabel,"_").concat(index),style:pageWidth},child);});}else{pages=_react["default"].createElement(_reactNative.View,{style:pageWidth},children);}return _react["default"].createElement(_reactNative.View,{onLayout:this.onLayout},this.renderScroll(pages),dots&&this.renderDots(selectedIndex));}}]);return Carousel;}(_react["default"].PureComponent);Carousel.defaultProps={accessibilityLabel:'Carousel',pageStyle:{},infinite:false,dots:true,autoplay:false,autoplayInterval:3000,selectedIndex:0,vertical:false,pagination:defaultPagination,dotStyle:{},dotActiveStyle:{}};var _default=Carousel;exports["default"]=_default;