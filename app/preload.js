module.exports=function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=1)}({"./src/render/preload/index.js":
/*!*************************************!*\
  !*** ./src/render/preload/index.js ***!
  \*************************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _other_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other.load.js */ \"./src/render/preload/other.load.js\");\n// \b访问electron对象\nvar _require = __webpack_require__(/*! electron */ \"electron\"),\n    remote = _require.remote,\n    ipcRenderer = _require.ipcRenderer; // 访问node模块\n\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\n // 访问window对象\n\nwindow.isClient = true; // 绑定方法到window对象\n\nwindow.sayHello = function () {\n  return console.log('hello');\n}; // 操作dom\n\n\nvar div = document.createElement('div');\ndiv.innerText = 'I am a div';\nvar btn1 = document.createElement('button');\nbtn1.innerHTML = '打印window.isClient';\n\nbtn1.onclick = function () {\n  console.log(window.isClient);\n};\n\nvar btn2 = document.createElement('button');\nbtn2.innerHTML = '调用sayHello';\n\nbtn2.onclick = function () {\n  sayHello();\n};\n\nvar p = document.createElement('p');\np.innerText = '注意打开控制台';\ndocument.addEventListener('DOMContentLoaded', function () {\n  document.body.appendChild(div);\n  document.body.appendChild(btn1);\n  document.body.appendChild(btn2);\n  document.body.appendChild(p);\n  Object(_other_load_js__WEBPACK_IMPORTED_MODULE_0__[\"testLoad\"])();\n});\n\n//# sourceURL=webpack:///./src/render/preload/index.js?")},"./src/render/preload/other.load.js":
/*!******************************************!*\
  !*** ./src/render/preload/other.load.js ***!
  \******************************************/
/*! exports provided: testLoad */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testLoad\", function() { return testLoad; });\nvar testLoad = function testLoad() {\n  console.log('i am from other.load.js');\n};\n\n//# sourceURL=webpack:///./src/render/preload/other.load.js?")},1:
/*!*******************************************!*\
  !*** multi ./src/render/preload/index.js ***!
  \*******************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__(/*! ./src/render/preload/index.js */"./src/render/preload/index.js");\n\n\n//# sourceURL=webpack:///multi_./src/render/preload/index.js?')},electron:
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */function(module,exports){eval('module.exports = require("electron");\n\n//# sourceURL=webpack:///external_%22electron%22?')},fs:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */function(module,exports){eval('module.exports = require("fs");\n\n//# sourceURL=webpack:///external_%22fs%22?')},path:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */function(module,exports){eval('module.exports = require("path");\n\n//# sourceURL=webpack:///external_%22path%22?')}});