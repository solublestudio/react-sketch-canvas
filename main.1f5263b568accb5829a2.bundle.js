(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{302:function(module,exports,__webpack_require__){__webpack_require__(303),__webpack_require__(450),__webpack_require__(451),__webpack_require__(677),__webpack_require__(689),__webpack_require__(692),module.exports=__webpack_require__(697)},368:function(module,exports){},451:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(241)},697:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(241).configure)([__webpack_require__(698)],module,!1)}).call(this,__webpack_require__(72)(module))},698:function(module,exports,__webpack_require__){var map={"./0.demo.stories.tsx":722};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=698},717:function(module,exports,__webpack_require__){var api=__webpack_require__(718),content=__webpack_require__(719);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},719:function(module,exports,__webpack_require__){(exports=__webpack_require__(720)(!1)).push([module.i,"@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css);"]),exports.push([module.i,".canvas-area{border:1px solid #ccc}.canvas-area .panel{padding:2rem;background-color:var(--light)}.exported-image{width:100%;border:1px solid #000}.react-sketch-canvas{border:1px solid red}.sketchingTime{font-weight:200;font-size:3rem}",""]),module.exports=exports},722:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SketchCanvas",(function(){return _0_demo_stories_SketchCanvas}));__webpack_require__(15),__webpack_require__(18),__webpack_require__(24),__webpack_require__(44),__webpack_require__(21),__webpack_require__(22),__webpack_require__(58),__webpack_require__(25),__webpack_require__(16),__webpack_require__(26),__webpack_require__(699),__webpack_require__(11),__webpack_require__(76),__webpack_require__(20),__webpack_require__(27),__webpack_require__(30),__webpack_require__(110);var dist=__webpack_require__(32),react=__webpack_require__(1),react_default=__webpack_require__.n(react),immer_esm=(__webpack_require__(23),__webpack_require__(106),__webpack_require__(714),__webpack_require__(715),__webpack_require__(179),__webpack_require__(19),__webpack_require__(297),__webpack_require__(716),__webpack_require__(50));function react_sketch_canvas_m_n(){return(react_sketch_canvas_m_n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function react_sketch_canvas_m_r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function react_sketch_canvas_m_o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var react_sketch_canvas_m_a=function a(t){var e,n,r,o,a=t.current,i=t.reverse,s=(r=(n=t.next||a).x-(e=t.previous||a).x,o=n.y-e.y,{length:Math.sqrt(Math.pow(r,2)+Math.pow(o,2)),angle:Math.atan2(o,r)}),h=s.angle+(i?Math.PI:0),c=.2*s.length;return[a.x+Math.cos(h)*c,a.y+Math.sin(h)*c]},react_sketch_canvas_m_i=function i(t,e,n){var r=null,o=null;switch(e){case 0:var i=react_sketch_canvas_m_a({current:t});r=i[0],o=i[1];break;case 1:var s=react_sketch_canvas_m_a({current:n[e-1],next:t});r=s[0],o=s[1];break;default:var h=react_sketch_canvas_m_a({current:n[e-1],previous:n[e-2],next:t});r=h[0],o=h[1]}var c=react_sketch_canvas_m_a({current:t,previous:n[e-1],next:n[e+1],reverse:!0});return"C "+r+","+o+" "+c[0]+","+c[1]+" "+t.x+", "+t.y},react_sketch_canvas_m_s=function s(e){return react_default.a.createElement(react_default.a.Fragment,null,e.paths.map((function(e,n){return function(e,n,r,o,a){var i=e.reduce((function(t,e,n,r){return 0===n?"M "+e.x+","+e.y:t+" "+a(e,n,r)}),"");return react_default.a.createElement("path",{key:n,d:i,fill:"none",strokeLinecap:"round",stroke:o,strokeWidth:r})}(e.paths,n.toString(),e.strokeWidth,e.strokeColor,react_sketch_canvas_m_i)})))};function react_sketch_canvas_m_h(t){var e,n=null==(e=t.firstChild)?void 0:e.cloneNode(!0),r=t.offsetWidth,o=t.offsetHeight;return n.setAttribute("viewBox","0 0 "+r+" "+o),n.setAttribute("width",r.toString()),n.setAttribute("height",o.toString()),{svgCanvas:n,width:r,height:o}}var c=function(e){function a(n){var r;return(r=e.call(this,n)||this).handlePointerDown=r.handlePointerDown.bind(react_sketch_canvas_m_o(r)),r.handlePointerMove=r.handlePointerMove.bind(react_sketch_canvas_m_o(r)),r.handlePointerUp=r.handlePointerUp.bind(react_sketch_canvas_m_o(r)),r.getCoordinates=r.getCoordinates.bind(react_sketch_canvas_m_o(r)),r.exportImage=r.exportImage.bind(react_sketch_canvas_m_o(r)),r.exportSvg=r.exportSvg.bind(react_sketch_canvas_m_o(r)),r.canvas=react_default.a.createRef(),r}react_sketch_canvas_m_r(a,e);var i=a.prototype;return i.componentDidMount=function(){document.addEventListener("pointerup",this.handlePointerUp)},i.componentWillUnmount=function(){document.removeEventListener("pointerup",this.handlePointerUp)},i.getCoordinates=function(t){var e,n,r,o=null==(e=this.canvas.current)?void 0:e.getBoundingClientRect(),a=null!=(n=window.scrollX)?n:0,i=null!=(r=window.scrollY)?r:0;return o?{x:t.pageX-o.left-a,y:t.pageY-o.top-i}:{x:0,y:0}},i.handlePointerDown=function(t){var e=this.props,n=e.allowOnlyPointerType;"all"!==n&&t.pointerType!==n||"mouse"===t.pointerType&&0!==t.button||(0,e.onPointerDown)(this.getCoordinates(t))},i.handlePointerMove=function(t){var e=this.props,n=e.allowOnlyPointerType;e.isDrawing&&("all"!==n&&t.pointerType!==n||(0,e.onPointerMove)(this.getCoordinates(t)))},i.handlePointerUp=function(t){if("mouse"!==t.pointerType||0===t.button){var e=this.props,n=e.allowOnlyPointerType;"all"!==n&&t.pointerType!==n||(0,e.onPointerUp)()}},i.exportImage=function(t){var e=this;return new Promise((function(n,r){try{var o=e.canvas.current;if(!o)throw Error("Canvas not rendered yet");var a=document.createElement("img"),i=react_sketch_canvas_m_h(o),s=i.width,c=i.height;a.src="data:image/svg+xml;base64,"+btoa(i.svgCanvas.outerHTML),a.onload=function(){var e=document.createElement("canvas");e.setAttribute("width",s.toString()),e.setAttribute("height",c.toString());var r=e.getContext("2d");if(!r)throw Error("Canvas not rendered yet");r.drawImage(a,0,0),n(e.toDataURL("image/"+t))}}catch(t){r(t)}}))},i.exportSvg=function(){var t=this;return new Promise((function(e,n){try{var r,o,a=null!=(r=null==(o=t.canvas)?void 0:o.current)?r:null;null!==a&&e(react_sketch_canvas_m_h(a).svgCanvas.outerHTML),n(new Error("Canvas not loaded"))}catch(t){n(t)}}))},i.render=function(){var e=this.props,r=e.canvasColor,o=e.background,a=e.paths;return react_default.a.createElement("div",{role:"presentation",ref:this.canvas,className:e.className,style:react_sketch_canvas_m_n({touchAction:"none",width:e.width,height:e.height},e.style),"touch-action":"none",onPointerDown:this.handlePointerDown,onPointerMove:this.handlePointerMove,onPointerUp:this.handlePointerUp},react_default.a.createElement("svg",{version:"1.1",baseProfile:"full",xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",height:"100%",background:o+" "+r}},react_default.a.createElement("g",{id:"canvasPenStrokes"},react_default.a.createElement(react_sketch_canvas_m_s,{paths:a}))))},a}(react_default.a.Component);c.defaultProps={width:"100%",height:"100%",className:"",canvasColor:"red",background:"",allowOnlyPointerType:"all",style:{border:"0.0625rem solid #9c9c9c",borderRadius:"0.25rem"},withTimeStamp:!0};var l=function(a){function i(e){var n;return(n=a.call(this,e)||this).initialState={drawMode:!0,isDrawing:!1,resetStack:[],undoStack:[],currentPaths:[]},n.state=n.initialState,n.handlePointerDown=n.handlePointerDown.bind(react_sketch_canvas_m_o(n)),n.handlePointerMove=n.handlePointerMove.bind(react_sketch_canvas_m_o(n)),n.handlePointerUp=n.handlePointerUp.bind(react_sketch_canvas_m_o(n)),n.exportImage=n.exportImage.bind(react_sketch_canvas_m_o(n)),n.exportSvg=n.exportSvg.bind(react_sketch_canvas_m_o(n)),n.exportPaths=n.exportPaths.bind(react_sketch_canvas_m_o(n)),n.loadPaths=n.loadPaths.bind(react_sketch_canvas_m_o(n)),n.eraseMode=n.eraseMode.bind(react_sketch_canvas_m_o(n)),n.clearCanvas=n.clearCanvas.bind(react_sketch_canvas_m_o(n)),n.undo=n.undo.bind(react_sketch_canvas_m_o(n)),n.redo=n.redo.bind(react_sketch_canvas_m_o(n)),n.resetCanvas=n.resetCanvas.bind(react_sketch_canvas_m_o(n)),n.getSketchingTime=n.getSketchingTime.bind(react_sketch_canvas_m_o(n)),n.liftPathsUp=n.liftPathsUp.bind(react_sketch_canvas_m_o(n)),n.svgCanvas=react_default.a.createRef(),n}react_sketch_canvas_m_r(i,a);var s=i.prototype;return s.getSketchingTime=function(){var t=this.props.withTimestamp,e=this.state.currentPaths;return new Promise((function(n,r){t||r(new Error("Set 'withTimestamp' prop to get sketching time"));try{n(e.reduce((function(t,e){var n,r,o=null!=(n=e.startTimestamp)?n:0;return t+((null!=(r=e.endTimestamp)?r:0)-o)}),0))}catch(t){r(t)}}))},s.resetCanvas=function(){this.setState(this.initialState)},s.liftPathsUp=function(){(0,this.props.onUpdate)(this.state.currentPaths)},s.handlePointerDown=function(t){var r=this.props,o=r.strokeColor,a=r.strokeWidth,i=r.canvasColor,s=r.eraserWidth,h=r.withTimestamp;this.setState(Object(immer_esm.a)((function(e){e.isDrawing=!0,e.undoStack=[];var r={drawMode:e.drawMode,strokeColor:e.drawMode?o:i,strokeWidth:e.drawMode?a:s,paths:[t]};h&&(r=react_sketch_canvas_m_n({},r,{startTimestamp:Date.now(),endTimestamp:0})),e.currentPaths.push(r)})),this.liftPathsUp)},s.handlePointerMove=function(t){this.state.isDrawing&&this.setState(Object(immer_esm.a)((function(e){e.currentPaths[e.currentPaths.length-1].paths.push(t)})),this.liftPathsUp)},s.handlePointerUp=function(){var t=this.props.withTimestamp;this.state.isDrawing&&this.setState(Object(immer_esm.a)((function(e){if(e.isDrawing=!1,t){var r=e.currentPaths.pop();r&&(r=react_sketch_canvas_m_n({},r,{endTimestamp:Date.now()}),e.currentPaths.push(r))}})),this.liftPathsUp)},s.eraseMode=function(t){this.setState(Object(immer_esm.a)((function(e){e.drawMode=!t})),this.liftPathsUp)},s.clearCanvas=function(){this.setState(Object(immer_esm.a)((function(t){t.resetStack=t.currentPaths,t.currentPaths=[]})),this.liftPathsUp)},s.undo=function(){var t=this;0===this.state.resetStack.length?this.setState(Object(immer_esm.a)((function(t){var e=t.currentPaths.pop();e&&t.undoStack.push(e)})),this.liftPathsUp):this.setState(Object(immer_esm.a)((function(t){t.currentPaths=t.resetStack,t.resetStack=[]})),(function(){(0,t.props.onUpdate)(t.state.currentPaths)}))},s.redo=function(){0!==this.state.undoStack.length&&this.setState(Object(immer_esm.a)((function(t){var e=t.undoStack.pop();e&&t.currentPaths.push(e)})),this.liftPathsUp)},s.exportImage=function(t){var e,n=null==(e=this.svgCanvas.current)?void 0:e.exportImage;if(n)return n(t);throw Error("Export function called before canvas loaded")},s.exportSvg=function(){var t=this;return new Promise((function(e,n){var r,o=null==(r=t.svgCanvas.current)?void 0:r.exportSvg;o?o().then((function(t){e(t)})).catch((function(t){n(t)})):n(Error("Export function called before canvas loaded"))}))},s.exportPaths=function(){var t=this.state.currentPaths;return new Promise((function(e,n){try{e(t)}catch(t){n(t)}}))},s.loadPaths=function(t){this.setState(Object(immer_esm.a)((function(e){e.currentPaths=e.currentPaths.concat(t)})),this.liftPathsUp)},s.render=function(){var e=this.props,n=this.state;return react_default.a.createElement(c,{ref:this.svgCanvas,width:e.width,height:e.height,className:e.className,canvasColor:e.canvasColor,background:e.background,allowOnlyPointerType:e.allowOnlyPointerType,style:e.style,paths:n.currentPaths,isDrawing:n.isDrawing,onPointerDown:this.handlePointerDown,onPointerMove:this.handlePointerMove,onPointerUp:this.handlePointerUp})},i}(react_default.a.Component);l.defaultProps={width:"100%",height:"100%",className:"",canvasColor:"white",strokeColor:"red",background:"",strokeWidth:4,eraserWidth:8,allowOnlyPointerType:"all",style:{border:"0.0625rem solid #9c9c9c",borderRadius:"0.25rem"},onUpdate:function onUpdate(t){},withTimestamp:!1};__webpack_require__(717);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"Full Demo",component:l,parameters:{info:{inline:!0}},decorators:[dist.withKnobs]};var pointerModes={mouse:"mouse",touch:"touch",pen:"pen",all:"all"},imageTypes={png:"png",jpeg:"jpeg"},_0_demo_stories_SketchCanvas=function SketchCanvas(){var canvasRef=react.useRef(null),_React$useState2=_slicedToArray(react.useState(""),2),dataURI=_React$useState2[0],setDataURI=_React$useState2[1],_React$useState4=_slicedToArray(react.useState(""),2),svg=_React$useState4[0],setSVG=_React$useState4[1],_React$useState6=_slicedToArray(react.useState([]),2),paths=_React$useState6[0],setPaths=_React$useState6[1],_React$useState8=_slicedToArray(react.useState(0),2),sketchingTime=_React$useState8[0],setSketchingTime=_React$useState8[1],width=Object(dist.text)("Canvas width in em/rem/px (width)","100%"),height=Object(dist.text)("Canvas height in em/rem/px (height)","500px"),className=Object(dist.text)("Class name (className)","react-sketch-canvas"),canvasColor=Object(dist.color)("Canvas background color (canvasColor)","#FFFFFF"),background=Object(dist.text)("SVG background using CSS (background)","no-repeat url(https://via.placeholder.com/150)"),strokeColor=Object(dist.color)("Stroke color (strokeColor)","#000000"),strokeWidth=Object(dist.number)("Stroke thickness (strokeWidth)",4),eraserWidth=Object(dist.number)("Eraser thickness (eraserWidth)",5),pointerType=Object(dist.optionsKnob)("Allowed pointer type (allowOnlyPointerType)",pointerModes,"all",{display:"inline-radio"}),imageType=Object(dist.optionsKnob)("Image type to export ",imageTypes,"png",{display:"inline-radio"}),withTimestamp=Object(dist.boolean)("Add timestamp to strokes",!0),buttonsWithHandlers=[["Undo",function undoHandler(){var _canvasRef$current6,undo=null===(_canvasRef$current6=canvasRef.current)||void 0===_canvasRef$current6?void 0:_canvasRef$current6.undo;undo&&undo()},"primary"],["Redo",function redoHandler(){var _canvasRef$current7,redo=null===(_canvasRef$current7=canvasRef.current)||void 0===_canvasRef$current7?void 0:_canvasRef$current7.redo;redo&&redo()},"primary"],["Clear All",function clearHandler(){var _canvasRef$current8,clearCanvas=null===(_canvasRef$current8=canvasRef.current)||void 0===_canvasRef$current8?void 0:_canvasRef$current8.clearCanvas;clearCanvas&&clearCanvas()},"primary"],["Reset All",function resetCanvasHandler(){var _canvasRef$current9,resetCanvas=null===(_canvasRef$current9=canvasRef.current)||void 0===_canvasRef$current9?void 0:_canvasRef$current9.resetCanvas;resetCanvas&&resetCanvas()},"primary"],["Pen",function penHandler(){var _canvasRef$current4,eraseMode=null===(_canvasRef$current4=canvasRef.current)||void 0===_canvasRef$current4?void 0:_canvasRef$current4.eraseMode;eraseMode&&eraseMode(!1)},"secondary"],["Eraser",function eraserHandler(){var _canvasRef$current5,eraseMode=null===(_canvasRef$current5=canvasRef.current)||void 0===_canvasRef$current5?void 0:_canvasRef$current5.eraseMode;eraseMode&&eraseMode(!0)},"secondary"],["Export Image",function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var _canvasRef$current,exportImage,exportedDataURI;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!(exportImage=null===(_canvasRef$current=canvasRef.current)||void 0===_canvasRef$current?void 0:_canvasRef$current.exportImage)){_context.next=6;break}return _context.next=4,exportImage(imageType);case 4:exportedDataURI=_context.sent,setDataURI(exportedDataURI);case 6:case"end":return _context.stop()}}),_callee)})));return function imageExportHandler(){return _ref.apply(this,arguments)}}(),"success"],["Export SVG",function(){var _ref2=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(){var _canvasRef$current2,exportSvg,exportedDataURI;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(!(exportSvg=null===(_canvasRef$current2=canvasRef.current)||void 0===_canvasRef$current2?void 0:_canvasRef$current2.exportSvg)){_context2.next=6;break}return _context2.next=4,exportSvg();case 4:exportedDataURI=_context2.sent,setSVG(exportedDataURI);case 6:case"end":return _context2.stop()}}),_callee2)})));return function svgExportHandler(){return _ref2.apply(this,arguments)}}(),"success"],["Get Sketching time",function(){var _ref3=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(){var _canvasRef$current3,getSketchingTime,currentSketchingTime;return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(!(getSketchingTime=null===(_canvasRef$current3=canvasRef.current)||void 0===_canvasRef$current3?void 0:_canvasRef$current3.getSketchingTime)){_context3.next=6;break}return _context3.next=4,getSketchingTime();case 4:currentSketchingTime=_context3.sent,setSketchingTime(currentSketchingTime);case 6:case"end":return _context3.stop()}}),_callee3)})));return function getSketchingTimeHandler(){return _ref3.apply(this,arguments)}}(),"success"]];return react.createElement("div",{className:"container-md"},react.createElement("h1",{className:"display-4 my-5"},"React Sketch Canvas - Full demo"),react.createElement("div",{className:"row no-gutters canvas-area m-0 p-0"},react.createElement("div",{className:"col-9 canvas"},react.createElement(l,{ref:canvasRef,className:className,width:width,height:height,background:background,strokeWidth:strokeWidth,strokeColor:strokeColor,canvasColor:canvasColor,eraserWidth:eraserWidth,allowOnlyPointerType:pointerType,style:{borderRight:"1px solid #CCC"},onUpdate:function onUpdate(updatedPaths){setPaths(updatedPaths)},withTimestamp:withTimestamp})),react.createElement("div",{className:"col-3 panel"},buttonsWithHandlers.map((function(_ref4){var _ref5=_slicedToArray(_ref4,3);return function createButton(label,handler,themeColor){return react.createElement("button",{className:"btn btn-".concat(themeColor," btn-block"),type:"button",onClick:handler},label)}(_ref5[0],_ref5[1],_ref5[2])})))),react.createElement("div",{className:"row image-export p-3 justify-content-center align-items-start"},react.createElement("div",{className:"col-5 row form-group"},react.createElement("label",{className:"col-12",htmlFor:"dataURI"},"Paths"),react.createElement("textarea",{id:"dataURI",className:"dataURICode col-12",readOnly:!0,rows:10,value:0!==paths.length?JSON.stringify(paths):"Sketch to get paths"})),react.createElement("div",{className:"col-5 offset-2"},react.createElement("label",{className:"col-12",htmlFor:"dataURI"},"Sketching time"),react.createElement("div",{className:"sketchingTime"},(sketchingTime/1e3).toFixed(3)," sec"))),react.createElement("div",{className:"row image-export p-3 justify-content-center align-items-start"},react.createElement("div",{className:"col-5 row form-group"},react.createElement("label",{className:"col-12",htmlFor:"dataURI"},"Exported Data URI for imagetype"),react.createElement("textarea",{id:"dataURI",className:"dataURICode col-12",readOnly:!0,rows:10,value:dataURI||"Click on export image"})),react.createElement("div",{className:"col-5 offset-2"},react.createElement("p",null,"Exported image"),react.createElement("img",{className:"exported-image",src:dataURI||"https://via.placeholder.com/500x250/000000/FFFFFF/?text=Click on export image",alt:"exported"}))),react.createElement("div",{className:"row image-export p-3 justify-content-center align-items-start"},react.createElement("div",{className:"col-5 row form-group"},react.createElement("label",{className:"col-12",htmlFor:"dataURI"},"Exported SVG code"),react.createElement("textarea",{id:"dataURI",className:"dataURICode col-12",readOnly:!0,rows:10,value:svg||"Click on export svg"})),react.createElement("div",{className:"col-5 offset-2"},react.createElement("p",null,"Exported SVG"),svg?react.createElement("span",{className:"exported-image",dangerouslySetInnerHTML:{__html:svg}}):react.createElement("img",{src:"https://via.placeholder.com/500x250/000000/FFFFFF/?text=Click on export SVG",alt:"Svg Export",className:"exported-image"}))))};_0_demo_stories_SketchCanvas.displayName="SketchCanvas"}},[[302,1,2]]]);
//# sourceMappingURL=main.1f5263b568accb5829a2.bundle.js.map