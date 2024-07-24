/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg-image.jpg */ \"./src/img/bg-image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/affogato.png */ \"./src/img/affogato.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/black-coffee.jpg */ \"./src/img/black-coffee.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cappuccino.jpg */ \"./src/img/cappuccino.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cold-coffee.png */ \"./src/img/cold-coffee.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/espresso.jpg */ \"./src/img/espresso.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mocha.png */ \"./src/img/mocha.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --primary-color: #7c2d12;\n  --primary-color-lo: rgb(124 45 18 / 50%);\n  --secondary-color: #b45309;\n  --secondary-color-lo: rgb(179 83 9 / 50%);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Noto Serif\", serif;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-attachment: fixed;\n  display: flex;\n  flex-direction: column;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  font-family: \"PT Serif\", serif;\n  transition: all 300ms;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--primary-color-lo);\n  backdrop-filter: blur(8px);\n  padding: 10px 40px;\n\n  position: sticky;\n  top: 0px;\n  z-index: 1;\n}\n\n#logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  user-select: none;\n}\n\n#logo:hover {\n  cursor: pointer;\n}\n\n#logo > span {\n  font-size: 1.8rem;\n  font-weight: 600;\n  color: white;\n}\n\n#logo > img {\n  height: 3em;\n}\n\nnav {\n  display: flex;\n  gap: 50px;\n}\n\nnav > button {\n  color: white;\n  background-color: transparent;\n  font-size: 1.25rem;\n  padding: 6px 12px;\n}\n\nnav > button:hover {\n  border: none;\n  border-radius: 100vw;\n  background-color: var(--secondary-color-lo);\n  transition: 0s;\n}\n\nheader button.active {\n  background-color: transparent;\n  border-radius: 0%;\n  border-bottom: 4px solid var(--secondary-color);\n}\n\nmain {\n  width: 100%;\n  padding-block: 64px;\n  display: flex;\n  justify-content: center;\n}\n\n#content {\n  padding: 64px 150px;\n  width: 50%;\n  background-color: var(--primary-color-lo);\n  backdrop-filter: blur(8px);\n  border-radius: 50px;\n  color: white;\n}\n\n#home,\n#menu,\n#contact {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n#home > div {\n  display: flex;\n  justify-content: space-between;\n  gap: 24px;\n}\n\n#heroText,\n#mainHeading {\n  font-size: 3.5rem;\n  font-weight: 600;\n}\n\n#home img {\n  height: 10em;\n}\n\n.container span {\n  font-size: 1.6rem;\n}\n\n.primaryBtn {\n  font-size: 1.3rem;\n  color: white;\n  border: 3px solid var(--secondary-color);\n  width: fit-content;\n  padding: 10px 20px;\n  border-radius: 100vw;\n  font-weight: 600;\n}\n\n.primaryBtn:hover {\n  background-color: var(--secondary-color);\n}\n\n.container {\n  display: flex;\n  align-items: center;\n}\n\nhr {\n  color: white;\n  width: 100%;\n  opacity: 0.7;\n}\n\n#menuGrid {\n  margin-top: 12px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));\n  justify-content: center;\n  gap: 48px;\n}\n\n.card {\n  height: 300px;\n  border-radius: 50px;\n  background-color: var(--primary-color-lo);\n  display: flex;\n  flex-direction: column;\n}\n\n.card > * {\n  flex: 1;\n}\n\n.imageDiv {\n  flex-grow: 2;\n  background-size: cover;\n  background-position: center center;\n  border-radius: 50px 50px 0 0;\n  transition: 300ms all;\n}\n\n#imageDiv1 {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n#imageDiv2 {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n#imageDiv3 {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\n#imageDiv4 {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n}\n\n#imageDiv5 {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n}\n\n#imageDiv6 {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\n}\n\n.textDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  font-size: 1.5rem;\n}\n\n.card:hover {\n  > .imageDiv {\n    flex-grow: 2.8;\n    cursor: pointer;\n  }\n}\n\n#contact {\n  gap: 48px;\n}\n\n.highlightCard {\n  border: 4px solid var(--secondary-color);\n  border-radius: 50px;\n\n  > :first-child {\n    font-size: 1.6rem;\n    font-weight: 600;\n    background-color: var(--secondary-color);\n    padding-top: 24px;\n    padding-bottom: 0;\n    border-radius: 36px 50px 0 0;\n  }\n\n  > :nth-child(2) {\n    padding: 24px;\n    padding-top: 12px;\n    \n    span {\n      display: block;\n      font-size: 1.2rem;\n    }\n  }\n}\n\n#contact > div {\n  margin-top: 24px;\n  display: flex;\n  gap: 48px;\n  align-items: center;\n}\n\n#mainHeading {\n  padding: 6px 32px;\n  border-bottom: 6px solid var(--secondary-color);\n}\n\nb {\n  font-weight: 600;\n}\n\niframe {\n  border-radius: 50px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHome */ \"./src/loadHome.js\");\n/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu */ \"./src/loadMenu.js\");\n/* harmony import */ var _loadContact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadContact */ \"./src/loadContact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _svg_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg/logo.svg */ \"./src/svg/logo.svg\");\n\n\n\n\n\n\nfunction header() {\n  const logoDiv = document.querySelector(\"#logo\");\n\n  const logoImg = new Image();\n  logoImg.src = _svg_logo_svg__WEBPACK_IMPORTED_MODULE_4__;\n  logoDiv.appendChild(logoImg);\n\n  const logoText = document.createElement(\"span\");\n  logoText.textContent = \"COFFEED\";\n  logoDiv.appendChild(logoText);\n}\n\nfunction removeClassAndElements() {\n  const content = document.querySelector(\"#content\");\n  content.removeChild(content.firstChild);\n  navButtons.forEach((button) => button.classList.remove(\"active\"));\n}\n\nconst navButtons = document.querySelectorAll(\"nav button\");\n\nnavButtons.forEach((button) => {\n  button.addEventListener(\"click\", (e) => {\n    removeClassAndElements();\n    if (e.target.id === \"navHome\") (0,_loadHome__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n    else if (e.target.id === \"navMenu\") (0,_loadMenu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n    else if (e.target.id === \"navContact\") (0,_loadContact__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\n  });\n});\n\nheader();\n(0,_loadHome__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n  const navContact = document.querySelector(\"#navContact\");\n  navContact.classList.toggle(\"active\");\n\n  const content = document.querySelector(\"#content\");\n  const contactPage = document.createElement(\"div\");\n  contactPage.id = \"contact\";\n  content.appendChild(contactPage);\n\n  const mainHeading = document.createElement(\"span\");\n  mainHeading.id = \"mainHeading\";\n  mainHeading.textContent = \"Contact Us\";\n\n  const infoContainer = document.createElement(\"div\");\n\n  const hoursDiv = document.createElement(\"div\");\n  hoursDiv.className = \"highlightCard\";\n  hoursDiv.innerHTML = `\n    <div>\n      <span>Hours</span>\n    </div>\n    <div>\n      <span><b>Monday: </b>12:00 - 22:00</span>\n      <span><b>Tuesday: </b>12:00 - 22:00</span>\n      <span><b>Wednesday: </b>12:00 - 22:00</span>\n      <span><b>Thursday: </b>12:00 - 22:00</span>\n      <span><b>Friday: </b>12:00 - 22:00</span>\n      <span><b>Saturday: </b>12:00 - 23:30</span>\n      <span><b>Sunday: </b>12:00 - 23:30</span>\n    </div>\n  `;\n\n  const contactInfoContainer = document.createElement(\"div\");\n  contactInfoContainer.className = \"highlightCard\";\n  contactInfoContainer.innerHTML = `\n    <div>\n      <span>Contact Info</span>\n    </div>\n    <div>\n      <span>+91 123 456 789</span>\n      <span>coffeed@fakeEmail.com</span>\n    </div>\n  `;\n\n  infoContainer.append(hoursDiv, contactInfoContainer);\n\n  const addressContainer = document.createElement(\"div\");\n  const mapDiv = document.createElement(\"div\");\n  mapDiv.innerHTML = `<iframe src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1755.5382500359249!2d75.59047515938566!3d28.356536688149273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sin!4v1721755435299!5m2!1sen!2sin\" width=\"350\" height=\"250\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>`;\n  const addressText = document.createElement(\"div\");\n  addressText.className = \"highlightCard\";\n  addressText.innerHTML = `\n    <div>\n      <span>Address</span>\n    </div>\n    <div>\n      <span>123 Street</span>\n      <span>Jaipur, Rajasthan</span>\n      <span>India</span>\n    </div>\n  `;\n  addressContainer.append(mapDiv, addressText);\n\n  contactPage.append(mainHeading, infoContainer, addressContainer);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadContact.js?");

/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _svg_coffee_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg/coffee.svg */ \"./src/svg/coffee.svg\");\n\n\nfunction loadHome() {\n\tconst navHome = document.querySelector(\"#navHome\");\n\tnavHome.classList.add(\"active\");\n\n\tconst content = document.querySelector(\"#content\");\n\tconst homePage = document.createElement(\"div\");\n\tcontent.appendChild(homePage);\n\thomePage.id = \"home\";\n\n\t// Hero\n\tconst heroDiv = document.createElement(\"div\");\n\tconst heroText = document.createElement(\"span\");\n\theroText.id = \"heroText\";\n\theroText.textContent = \"Have you got your cup of coffee today?\";\n\n\tconst coffeeImg = document.createElement(\"img\");\n\tcoffeeImg.src = _svg_coffee_svg__WEBPACK_IMPORTED_MODULE_0__;\n\theroDiv.append(heroText, coffeeImg);\n\n\t// Container 1\n\tconst container1 = document.createElement(\"div\");\n\tcontainer1.className = \"container\";\n\n\tconst text1 = document.createElement(\"span\");\n\ttext1.textContent = \"Did you not? Try ours 👉\";\n\n\tconst orderBtn = document.createElement(\"button\");\n\torderBtn.textContent = \"Order Now\";\n\torderBtn.className = \"primaryBtn\";\n\tcontainer1.append(text1, orderBtn);\n\n\t// Section Break\n\tconst sectionBreak = document.createElement(\"hr\");\n\n\t// Container 2\n\tconst container2 = document.createElement(\"div\");\n\tcontainer2.className = \"container\";\n\n\tconst text2 = document.createElement(\"span\");\n\ttext2.textContent = \"Or find your taste in our menu!\";\n\n\tconst exploreBtn = document.createElement(\"button\");\n\texploreBtn.textContent = \"Explore\";\n\texploreBtn.className = \"primaryBtn\";\n\n\tcontainer2.append(text2, exploreBtn);\n\n\t// Appending elements in the homePage\n\thomePage.append(heroDiv, container1, sectionBreak, container2);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadHome.js?");

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  const navMenu = document.querySelector(\"#navMenu\");\n  navMenu.classList.toggle(\"active\");\n\n  const content = document.querySelector(\"#content\");\n  const menuPage = document.createElement(\"div\");\n  menuPage.id = \"menu\";\n  content.appendChild(menuPage);\n\n  const mainHeading = document.createElement(\"span\");\n  mainHeading.id = \"mainHeading\";\n  mainHeading.textContent = \"Menu\";\n\n  const menuGrid = document.createElement(\"div\");\n  menuGrid.id = \"menuGrid\";\n\n  menuGrid.innerHTML = `\n    <div class=\"card\">\n      <div class=\"imageDiv\" id=\"imageDiv1\"></div>\n      <div class=\"textDiv\">\n        <span>Affogato</span><span>₹310</span>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"imageDiv\" id=\"imageDiv2\"></div>\n      <div class=\"textDiv\">\n      <span>Black Coffee</span><span>₹100</span></div>\n    </div>\n    <div class=\"card\">\n      <div class=\"imageDiv\" id=\"imageDiv3\"></div>\n      <div class=\"textDiv\">\n        <span>Cappuccino</span><span>₹140</span>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"imageDiv\" id=\"imageDiv4\"></div>\n      <div class=\"textDiv\">\n        <span>Cold Coffee</span><span>₹140</span>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"imageDiv\" id=\"imageDiv5\"></div>\n      <div class=\"textDiv\">\n        <span>Espresso</span><span>₹110</span>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"imageDiv\" id=\"imageDiv6\"></div>\n      <div class=\"textDiv\">\n        <span>Mocha</span><span>₹130</span>\n      </div>\n    </div>\n  `;\n\n  menuPage.append(mainHeading, menuGrid);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadMenu.js?");

/***/ }),

/***/ "./src/img/affogato.png":
/*!******************************!*\
  !*** ./src/img/affogato.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2b5a6e95261577804fc.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/affogato.png?");

/***/ }),

/***/ "./src/img/bg-image.jpg":
/*!******************************!*\
  !*** ./src/img/bg-image.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"08f1f642182d1fbf80ec.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/bg-image.jpg?");

/***/ }),

/***/ "./src/img/black-coffee.jpg":
/*!**********************************!*\
  !*** ./src/img/black-coffee.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4298d3e51b46333218e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/black-coffee.jpg?");

/***/ }),

/***/ "./src/img/cappuccino.jpg":
/*!********************************!*\
  !*** ./src/img/cappuccino.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cffbebdf0d9e7855c599.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/cappuccino.jpg?");

/***/ }),

/***/ "./src/img/cold-coffee.png":
/*!*********************************!*\
  !*** ./src/img/cold-coffee.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0030699b5ab4c0fff63.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/cold-coffee.png?");

/***/ }),

/***/ "./src/img/espresso.jpg":
/*!******************************!*\
  !*** ./src/img/espresso.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"38d17888f70144f53558.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/espresso.jpg?");

/***/ }),

/***/ "./src/img/mocha.png":
/*!***************************!*\
  !*** ./src/img/mocha.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d47fdfd4ca7d804d0548.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/mocha.png?");

/***/ }),

/***/ "./src/svg/coffee.svg":
/*!****************************!*\
  !*** ./src/svg/coffee.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"168f36d78a445a09d175.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/svg/coffee.svg?");

/***/ }),

/***/ "./src/svg/logo.svg":
/*!**************************!*\
  !*** ./src/svg/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b4bb556b9c1b905cefd.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/svg/logo.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;