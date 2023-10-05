/*! For license information please see stories-Button-stories.287bc8cc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktetch_ui_kit=self.webpackChunktetch_ui_kit||[]).push([[256],{"./src/stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorBlue:()=>ColorBlue,Default:()=>Default,SizeXXL:()=>SizeXXL,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var classes=__webpack_require__("./src/utils/classes.ts"),styles=__webpack_require__("./src/styles/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=props=>{const{className,children,size="md",c="brand",cd=500,style,...rest}=props;return(0,jsx_runtime.jsx)("button",{className:(0,classes.Z)(className,Button_Button_module.button,Button_Button_module[`button-${size}`]),style:{backgroundColor:c&&cd&&styles.O9[c][cd],...style},...rest,children})};Button.displayName="Button";const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},c:{defaultValue:null,description:"",name:"c",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"gray"'},{value:'"indigo"'},{value:'"orange"'},{value:'"pink"'},{value:'"purple"'},{value:'"brand"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'},{value:'"blue-gray"'},{value:'"blue-light"'},{value:'"rose"'}]}},cd:{defaultValue:null,description:"",name:"cd",required:!1,type:{name:"enum",value:[{value:"25"},{value:"50"},{value:"100"},{value:"200"},{value:"300"},{value:"400"},{value:"500"},{value:"600"},{value:"700"},{value:"800"},{value:"900"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={title:"Components/Button",component:Button_Button,parameters:{layout:"centered"},tags:["autodocs"]},Default={args:{children:"Example"}},SizeXXL={args:{children:"XXL size",size:"xxl"}},ColorBlue={args:{children:"Blue color",c:"blue"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Example"\n  }\n}',...Default.parameters?.docs?.source}}},SizeXXL.parameters={...SizeXXL.parameters,docs:{...SizeXXL.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "XXL size",\n    size: "xxl"\n  }\n}',...SizeXXL.parameters?.docs?.source}}},ColorBlue.parameters={...ColorBlue.parameters,docs:{...ColorBlue.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Blue color",\n    c: "blue"\n  }\n}',...ColorBlue.parameters?.docs?.source}}};const __namedExportsOrder=["Default","SizeXXL","ColorBlue"]},"./src/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O9:()=>colors});const colors={gray:{25:"#FCFCFD",50:"#F9FAFB",100:"#F2F4F7",200:"#EAECF0",300:"#D0D5DD",400:"#98A2B3",500:"#667085",600:"#475467",700:"#344054",800:"#1D2939",900:"#101828"},brand:{25:"#FCFAFF",50:"#F9F5FF",100:"#F4EBFF",200:"#E9D7FE",300:"#D6BBFB",400:"#B692F6",500:"#9E77ED",600:"#7F56D9",700:"#6941C6",800:"#53389E",900:"#42307D"},error:{25:"#FFFBFA",50:"#FEF3F2",100:"#FEE4E2",200:"#FECDCA",300:"#FDA29B",400:"#F97066",500:"#F04438",600:"#D92D20",700:"#B42318",800:"#912018",900:"#7A271A"},warning:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},success:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},"blue-gray":{25:"#FCFCFD",50:"#F8F9FC",100:"#EAECF5",200:"#D5D9EB",300:"#AFB5D9",400:"#717BBC",500:"#4E5BA6",600:"#3E4784",700:"#363F72",800:"#293056",900:"#101323"},"blue-light":{25:"#F5FBFF",50:"#F0F9FF",100:"#E0F2FE",200:"#B9E6FE",300:"#7CD4FD",400:"#36BFFA",500:"#0BA5EC",600:"#0086C9",700:"#026AA2",800:"#065986",900:"#0B4A6F"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},indigo:{25:"#F5F8FF",50:"#EEF4FF",100:"#E0EAFF",200:"#C7D7FE",300:"#A4BCFD",400:"#8098F9",500:"#6172F3",600:"#444CE7",700:"#3538CD",800:"#2D31A6",900:"#2D3282"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},pink:{25:"#FEF6FB",50:"#FDF2FA",100:"#FCE7F6",200:"#FCCEEE",300:"#FAA7E0",400:"#F670C7",500:"#EE46BC",600:"#DD2590",700:"#C11574",800:"#9E165F",900:"#851651"},rose:{25:"#FFF5F6",50:"#FFF1F3",100:"#FFE4E8",200:"#FECDD6",300:"#FEA3B4",400:"#FD6F8E",500:"#F63D68",600:"#E31B54",700:"#C01048",800:"#A11043",900:"#89123E"},orange:{25:"#FFFAF5",50:"#FFF6ED",100:"#FFEAD5",200:"#FDDCAB",300:"#FEB273",400:"#FD853A",500:"#FB6514",600:"#EC4A0A",700:"#C4320A",800:"#9C2A10",900:"#7E2410"}}},"./src/utils/classes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const toVal=mix=>{let k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix&&null!==mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str},__WEBPACK_DEFAULT_EXPORT__=function(){let tmp,x,i=0,str="";for(;i<arguments.length;){var _i;(tmp=(_i=i++)<0||arguments.length<=_i?void 0:arguments[_i])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x)}return str}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".AisLsJaE_AWnIhDlnTUV {\n  outline: none;\n  border: none;\n\n  gap: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);\n\n  color: #ffffff;\n}\n\n.wZVSjp9jPxbZ8pKXf3__ {\n  padding: 8px 14px;\n\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.egcmgot1x13V8ExHxXQJ {\n  padding: 10px 16px;\n\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.QSno3wLwssj5FBGXD4kI {\n  padding: 10px 18px;\n\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n}\n\n.sJNIBvPb_6TYuz1LghhQ {\n  padding: 12px 20px;\n\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n}\n\n.Ijokes2h8nS6TSJ3S93P {\n  padding: 16px 28px;\n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n","",{version:3,sources:["webpack://./src/components/Button/Button.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,YAAY;;EAEZ,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,kDAAkD;;EAElD,cAAc;AAChB;;AAEA;EACE,iBAAiB;;EAEjB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;;EAElB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;;EAElB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;;EAElB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;;EAElB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB",sourcesContent:[".button {\n  outline: none;\n  border: none;\n\n  gap: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);\n\n  color: #ffffff;\n}\n\n.button-sm {\n  padding: 8px 14px;\n\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.button-md {\n  padding: 10px 16px;\n\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.button-lg {\n  padding: 10px 18px;\n\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n}\n\n.button-xl {\n  padding: 12px 20px;\n\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n}\n\n.button-xxl {\n  padding: 16px 28px;\n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"AisLsJaE_AWnIhDlnTUV","button-sm":"wZVSjp9jPxbZ8pKXf3__","button-md":"egcmgot1x13V8ExHxXQJ","button-lg":"QSno3wLwssj5FBGXD4kI","button-xl":"sJNIBvPb_6TYuz1LghhQ","button-xxl":"Ijokes2h8nS6TSJ3S93P"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);