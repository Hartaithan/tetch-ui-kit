/*! For license information please see stories-Button-stories.ff3e86fc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktetch_ui_kit=self.webpackChunktetch_ui_kit||[]).push([[256],{"./src/stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorBlue:()=>ColorBlue,Default:()=>Default,Primary:()=>Primary,Secondary:()=>Secondary,SizeSM:()=>SizeSM,SizeXXL:()=>SizeXXL,Tertiary:()=>Tertiary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var classes=__webpack_require__("./src/utils/classes.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=props=>{const{className,children,size="md",variant="primary",...rest}=props;return(0,jsx_runtime.jsx)("button",{className:(0,classes.Z)(className,Button_Button_module.button,Button_Button_module[`button-${size}`],Button_Button_module[`button-${variant}`]),...rest,children})};Button.displayName="Button";const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={title:"Components/Button",component:Button_Button,parameters:{layout:"centered",controls:{exclude:"onClick"}},tags:["autodocs"],args:{onClick:()=>alert("I'm clicked!")},argTypes:{disabled:{control:"boolean",defaultValue:!1}}},Default={args:{children:"Default"}},Primary={args:{children:"Primary",variant:"primary"}},Secondary={args:{children:"Secondary",variant:"secondary"}},Tertiary={args:{children:"Tertiary",variant:"tertiary"}},SizeSM={args:{children:"Small size",size:"sm"}},SizeXXL={args:{children:"XXL size",size:"xxl"}},ColorBlue={args:{children:"Blue color"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Default"\n  }\n}',...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Primary",\n    variant: "primary"\n  }\n}',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Secondary",\n    variant: "secondary"\n  }\n}',...Secondary.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Tertiary",\n    variant: "tertiary"\n  }\n}',...Tertiary.parameters?.docs?.source}}},SizeSM.parameters={...SizeSM.parameters,docs:{...SizeSM.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Small size",\n    size: "sm"\n  }\n}',...SizeSM.parameters?.docs?.source}}},SizeXXL.parameters={...SizeXXL.parameters,docs:{...SizeXXL.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "XXL size",\n    size: "xxl"\n  }\n}',...SizeXXL.parameters?.docs?.source}}},ColorBlue.parameters={...ColorBlue.parameters,docs:{...ColorBlue.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Blue color"\n  }\n}',...ColorBlue.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Secondary","Tertiary","SizeSM","SizeXXL","ColorBlue"]},"./src/utils/classes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const toVal=mix=>{let k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix&&null!==mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str},__WEBPACK_DEFAULT_EXPORT__=function(){let tmp,x,i=0,str="";for(;i<arguments.length;){var _i;(tmp=(_i=i++)<0||arguments.length<=_i?void 0:arguments[_i])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x)}return str}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.AisLsJaE_AWnIhDlnTUV {\n  outline: none;\n  border: none;\n  gap: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);\n  cursor: pointer;\n  color: #ffffff;\n  font-family: "Inter", Helvetica, Arial, sans-serif;\n}\n.AisLsJaE_AWnIhDlnTUV:disabled {\n  cursor: unset;\n}\n\n.wZVSjp9jPxbZ8pKXf3__ {\n  padding: 8px 14px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n.egcmgot1x13V8ExHxXQJ {\n  padding: 10px 16px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n.QSno3wLwssj5FBGXD4kI {\n  padding: 10px 18px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n}\n.sJNIBvPb_6TYuz1LghhQ {\n  padding: 12px 20px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n}\n.Ijokes2h8nS6TSJ3S93P {\n  padding: 16px 28px;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n\n.smnw82CGxV1NIZfaR22W {\n  border: 1px solid var(--brand-600, #7f56d9);\n  background: var(--brand-600, #7f56d9);\n  color: var(--white, #fff);\n}\n.smnw82CGxV1NIZfaR22W:disabled,\n.smnw82CGxV1NIZfaR22W:disabled:hover {\n  border-radius: 8px;\n  border: 1px solid var(--brand-200, #e9d7fe);\n  background: var(--brand-200, #e9d7fe);\n}\n.smnw82CGxV1NIZfaR22W:hover {\n  border: 1px solid var(--brand-700, #6941c6);\n  background: var(--brand-700, #6941c6);\n}\n\n._pxD8zGunqLQtq68NJ3V {\n  border: 1px solid var(--brand-50, #f9f5ff);\n  background: var(--brand-50, #f9f5ff);\n  color: var(--brand-700, #6941c6);\n}\n._pxD8zGunqLQtq68NJ3V:disabled,\n._pxD8zGunqLQtq68NJ3V:disabled:hover {\n  border: 1px solid var(--brand-25, #fcfaff);\n  background: var(--brand-25, #fcfaff);\n  color: var(--brand-300, #d6bbfb);\n}\n._pxD8zGunqLQtq68NJ3V:hover {\n  border: 1px solid var(--brand-100, #f4ebff);\n  background: var(--brand-100, #f4ebff);\n}\n\n.UjdNTp8U5EU5hKij8qVr {\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--brand-700, #6941c6);\n}\n.UjdNTp8U5EU5hKij8qVr:disabled,\n.UjdNTp8U5EU5hKij8qVr:disabled:hover {\n  color: var(--gray-300, #d0d5dd);\n}\n.UjdNTp8U5EU5hKij8qVr:hover {\n  background: var(--brand-50, #f9f5ff);\n}\n',"",{version:3,sources:["webpack://./src/components/Button/Button.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,YAAY;EACZ,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,kDAAkD;EAClD,eAAe;EACf,cAAc;EACd,kDAAkD;AACpD;AACA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,2CAA2C;EAC3C,qCAAqC;EACrC,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;EAClB,2CAA2C;EAC3C,qCAAqC;AACvC;AACA;EACE,2CAA2C;EAC3C,qCAAqC;AACvC;;AAEA;EACE,0CAA0C;EAC1C,oCAAoC;EACpC,gCAAgC;AAClC;AACA;;EAEE,0CAA0C;EAC1C,oCAAoC;EACpC,gCAAgC;AAClC;AACA;EACE,2CAA2C;EAC3C,qCAAqC;AACvC;;AAEA;EACE,6BAA6B;EAC7B,uBAAuB;EACvB,gCAAgC;AAClC;AACA;;EAEE,+BAA+B;AACjC;AACA;EACE,oCAAoC;AACtC",sourcesContent:['.button {\n  outline: none;\n  border: none;\n  gap: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);\n  cursor: pointer;\n  color: #ffffff;\n  font-family: "Inter", Helvetica, Arial, sans-serif;\n}\n.button:disabled {\n  cursor: unset;\n}\n\n.button-sm {\n  padding: 8px 14px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n.button-md {\n  padding: 10px 16px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n.button-lg {\n  padding: 10px 18px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n}\n.button-xl {\n  padding: 12px 20px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n}\n.button-xxl {\n  padding: 16px 28px;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n\n.button-primary {\n  border: 1px solid var(--brand-600, #7f56d9);\n  background: var(--brand-600, #7f56d9);\n  color: var(--white, #fff);\n}\n.button-primary:disabled,\n.button-primary:disabled:hover {\n  border-radius: 8px;\n  border: 1px solid var(--brand-200, #e9d7fe);\n  background: var(--brand-200, #e9d7fe);\n}\n.button-primary:hover {\n  border: 1px solid var(--brand-700, #6941c6);\n  background: var(--brand-700, #6941c6);\n}\n\n.button-secondary {\n  border: 1px solid var(--brand-50, #f9f5ff);\n  background: var(--brand-50, #f9f5ff);\n  color: var(--brand-700, #6941c6);\n}\n.button-secondary:disabled,\n.button-secondary:disabled:hover {\n  border: 1px solid var(--brand-25, #fcfaff);\n  background: var(--brand-25, #fcfaff);\n  color: var(--brand-300, #d6bbfb);\n}\n.button-secondary:hover {\n  border: 1px solid var(--brand-100, #f4ebff);\n  background: var(--brand-100, #f4ebff);\n}\n\n.button-tertiary {\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--brand-700, #6941c6);\n}\n.button-tertiary:disabled,\n.button-tertiary:disabled:hover {\n  color: var(--gray-300, #d0d5dd);\n}\n.button-tertiary:hover {\n  background: var(--brand-50, #f9f5ff);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"AisLsJaE_AWnIhDlnTUV","button-sm":"wZVSjp9jPxbZ8pKXf3__","button-md":"egcmgot1x13V8ExHxXQJ","button-lg":"QSno3wLwssj5FBGXD4kI","button-xl":"sJNIBvPb_6TYuz1LghhQ","button-xxl":"Ijokes2h8nS6TSJ3S93P","button-primary":"smnw82CGxV1NIZfaR22W","button-secondary":"_pxD8zGunqLQtq68NJ3V","button-tertiary":"UjdNTp8U5EU5hKij8qVr"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);