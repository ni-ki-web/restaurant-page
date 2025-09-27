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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  background-color: #fff8f0;\n  color: #6d4c41;\n  line-height: 1.6;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* Pink top bar only for the logo */\nheader {\n  background-color: #f78fb3;\n  padding: 3rem 2rem 2rem;\n  text-align: center;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.1);\n  position: relative;\n  z-index: 1;\n}\n\n.logo {\n  font-family: 'Dancing Script', cursive;\n  font-size: 3rem;\n  font-weight: 600;\n  color:#fff;\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\n\nnav {\n  background-color: #fff8f0;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #f3d6e2;\n  border-radius: 999px;\n\n  position: absolute;\n  left: 50%;\n  bottom: -2rem;\n  transform: translateX(-50%);\n  z-index: 5;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.1);\n}\n\nnav button {\n  background: transparent;\n  border: 1px solid transparent;\n  padding: 0.6rem 1.2rem;\n  border-radius: 999px;\n  cursor: pointer;\n  color: #6d4c41;\n  font-size: 1rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n\nnav button:hover {\n  border: 1px solid #f78fb3;\n  color: #f78fb3;\n}\n\nnav button.active {\n  background: #f78fb3;\n  color: #fff;\n  font-weight: 700;\n}\n\n/* Content area */\n#content {\n  flex: 1;\n  width: 100%;\n  max-width: 1200px;\n  margin: 4rem auto 2rem;\n  padding: 2rem;\n  background-color: #fff8f0;\n}\n\n/* Home section */\n.home-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n\nh1 {\n  margin-bottom: 1.5rem;\n  color: #6d4c41;\n  text-align: center;\n  font-size: 2rem;\n}\n\n.text {\n  flex: 1 1 350px;\n}\n\n.text h1 {\n  margin-bottom: 1.5rem;\n  color: #6d4c41;\n  font-size: 2rem;\n  font-weight: 700;\n  text-align: left;\n}\n\n.text p:not(:last-child) {\n  margin-bottom: 1rem;\n}\n\n.image {\n  flex: 1 1 500px;\n}\n\n.hero-img {\n  width: 100%;\n  height: auto;\n  max-height: 350px;\n  object-fit: cover;\n  border-radius: 0.75rem;\n}\n\n.img-placeholder {\n  width: 100%;\n  max-width: 600px;\n  height: 300px;\n  background-color: #fce4ec;\n  color: #f78fb3; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  border-radius: 0.75rem;\n}\n\n/* Menu section */\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 2rem;\n}\n\n.menu-card {\n  background: #fff;\n  width: 100%;\n  border-radius: 0.75rem;\n  border: 1px solid #f3d6e2;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.05);\n  padding: 1.2rem;\n  text-align: center;\n  transition: transform 0.2s ease, box-shadow 0.2 ease;\n}\n\n.menu-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(247, 143, 179, 0.25);\n}\n\n.menu-card img, \n.menu-card .img-placeholder {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 0.8rem;\n}\n\n.menu-card h2 {\n  margin: 0.5rem 0;\n  font-size: 1.2rem;\n  color: #f78fb3;\n}\n\n.menu-card p {\n  font-size: 0.95rem;\n}\n\n/* Contact section */\n.contact {\n  text-align: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n.contact .img-placeholder {\n  margin: 1rem auto 2rem;\n}\n\n.contact h2 {\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n  color: #f78fb3;\n}\n\n.contact-card {\n  background-color: #fff;\n  border: 1px solid #f3d6e2;\n  border-left: 0.5rem solid #f78fb3;\n  box-shadow: 0 2px 6px rgba(247, 143, 179, 0.25);\n  border-radius: 0.5rem;\n  padding: 2rem;\n  margin: 1rem auto;\n  text-align: center;\n}\n\n.contact-card p, .contact-card li {\n  margin: 0.5rem 0;\n  font-size: 1rem;\n}\n\n.contact-card .hours {\n  list-style: none;\n  padding: 0;\n  margin-top: 1rem;\n}\n\n.contact-card p:last-child {\n  font-style: italic;\n}\n\n/* Closing line */\n.closing-line {\n  background: #fce4ec;\n  color: #f78fb3;\n  padding: 1rem 2rem;\n  margin: 2rem auto;\n  display: inline-block;\n  font-weight: 600;\n  font-size: 1.1rem;\n  border-radius: 0.3rem;\n  max-width: 600px;\n  text-align: center;\n  box-shadow: 0 4px 8px rgba(247, 143, 179, 0.3);\n}\n\nfooter {\n  background-color: #fce4ec;\n  color: #6d4c41;\n  text-align: center;\n  padding: 1.2rem 2rem;\n  font-size: 0.9rem;\n}\n\n/* Responsive tweaks */\n@media (max-width: 1024px) {\n  .logo {\n    font-size: 2.5rem;\n  }\n\n  nav {\n    bottom: -1.75rem;\n    padding: 0.55rem 0.8rem;\n    gap: 0.8rem;\n  }\n\n  nav button {\n    padding: 0.5rem 1rem;\n    font-size: 0.95rem;\n  }\n\n  #content {\n    margin-top: 3rem;\n  }\n}\n\n@media (max-width: 945px) {\n  .home-container .text, .text h1 {\n    text-align: center;\n  }\n}\n\n@media (max-width: 768px) {\n  .logo {\n    font-size: 2rem;\n  }\n\n  nav {\n    gap: 0.5rem;\n  }\n\n  nav button {\n    padding: 0.45rem 0.9rem;\n    font-size: 0.95rem;\n  }\n\n  #content {\n    margin-top: 2rem;\n    padding: 1.5rem;\n  }\n}\n\n@media (max-width: 660px) {\n  nav {\n    bottom: -1.5rem;\n    padding: 0.5rem 0.5rem;\n    gap: 0.4rem;\n  }\n\n  nav button {\n    padding: 0.35rem 0.7rem;\n    font-size: 0.85rem;\n  }\n\n  #content {\n    margin-top: 2rem;\n    padding: 1rem;\n  }\n}\n\n@media (max-width: 557px) {\n  /* Make nav relative so it doesn’t cover the logo */\n  nav {\n    bottom: -1.5rem;\n    gap: 0.5rem;\n    padding: 0.5rem;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\n    const content = document.getElementById('content');\n    const aboutDiv = document.createElement('div');\n\n    const headline = document.createElement('h1');\n    headline.textContent = \"Our Story\";\n\n    const para1 = document.createElement('p');\n    para1.textContent = \"Sweet Haven Delights started as a little home bakery with a big dream: to share the happiness of freshly baked desserts with our community. We specialize in pastries, cookies, and cakes that are made with care and inspired by both classic recipes and modern flavors.\";\n\n    const para2 = document.createElement('p');\n    para2.textContent = \"Every dessert is crafted by hand using quality ingredients — no shortcuts, just love and butter. Whether you’re here for a quick coffee and a macaron, or celebrating with a cake, we want you to feel right at home.\";\n\n    aboutDiv.appendChild(headline);\n    aboutDiv.appendChild(para1);\n    aboutDiv.appendChild(para2);\n\n    content.appendChild(aboutDiv);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.getElementById('content');\n    const contactDiv = document.createElement('div');\n    contactDiv.classList.add('contact');\n\n    const headline = document.createElement('h1');\n    headline.textContent = \"Get in Touch\";\n\n    const img = document.createElement('div');\n    img.classList.add('img-placeholder');\n    img.textContent = \"Cafe Image\";\n\n    const addressDiv = document.createElement('div');\n    addressDiv.classList.add('contact-card');\n\n    const address = document.createElement('p');\n    address.textContent = \"📍 123 Sweet Street, Dessert City\";\n\n    const phone = document.createElement('p');\n    phone.textContent = \"📞 09-123-4567\";\n\n    const email = document.createElement('p');\n    email.textContent = \"✉️ hello@sweethavendelights.com\";\n\n    addressDiv.appendChild(address);\n    addressDiv.appendChild(phone);\n    addressDiv.appendChild(email);\n\n    const hoursDiv = document.createElement('div');\n    hoursDiv.classList.add('contact-card');\n\n    const hoursTitle = document.createElement('h2');\n    hoursTitle.textContent = \"Opening Hours\";\n\n    const hours = document.createElement('ul');\n    hours.classList.add('hours');\n    const schedule = [\n        \"Monday - Friday: 8AM - 7PM\",\n        \"Saturday - Sunday: 9AM - 8PM\",\n    ];\n\n    schedule.forEach(time => {\n        const li = document.createElement('li');\n        li.textContent = time;\n        hours.appendChild(li);\n    });\n\n    hoursDiv.appendChild(hoursTitle);\n    hoursDiv.appendChild(hours);\n\n    const closing = document.createElement('p');\n    closing.classList.add('closing-line');\n    closing.textContent = \"We'd love to see you! Stop by for coffee, cake, and a cozy chat.\";\n\n    contactDiv.appendChild(headline);\n    contactDiv.appendChild(img);\n    contactDiv.appendChild(addressDiv);\n    contactDiv.appendChild(hoursDiv);\n    contactDiv.appendChild(closing);\n\n    content.appendChild(contactDiv);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _images_hero_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/hero-image.jpg */ \"./src/images/hero-image.jpg\");\n\n\nfunction loadHome() {\n    const content = document.getElementById('content');\n\n    const homeContainer = document.createElement('div');\n    homeContainer.classList.add('home-container');\n\n    const textDiv = document.createElement('div');\n    textDiv.classList.add('text');\n\n    const headline = document.createElement('h1');\n    headline.textContent = \"Welcome to Sweet Haven Delights\";\n\n    const tagline = document.createElement('p');\n    tagline.textContent = \"Baked fresh daily with love, sweetness, and care – to lift your mood and brighten your day!\";\n\n    const description = document.createElement('p');\n    description.textContent = \"From delicate, colorful macarons to our signature fruit cake, every dessert is crafted with passion to bring comfort and joy. Whether you’re stopping by for a quick treat or savoring an afternoon with coffee and cake, Sweet Haven Delights is your happy place.\";\n\n    textDiv.appendChild(headline);\n    textDiv.appendChild(tagline);\n    textDiv.appendChild(description);\n\n    const imageDiv = document.createElement('div');\n    imageDiv.classList.add('image');\n    const image = document.createElement('img');\n    image.classList.add('hero-img');\n    image.src = _images_hero_image_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = \"Hero Image\";\n    imageDiv.appendChild(image);\n\n    homeContainer.appendChild(textDiv);\n    homeContainer.appendChild(imageDiv);\n\n    content.appendChild(homeContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ }),

/***/ "./src/images/chocolate-eclairs.jpg":
/*!******************************************!*\
  !*** ./src/images/chocolate-eclairs.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"c8cb3930c6fa9cecf467.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chocolate-eclairs.jpg?\n}");

/***/ }),

/***/ "./src/images/hazelnut-cupcake.jpg":
/*!*****************************************!*\
  !*** ./src/images/hazelnut-cupcake.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"164e3fa874eb1663d9be.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hazelnut-cupcake.jpg?\n}");

/***/ }),

/***/ "./src/images/hero-image.jpg":
/*!***********************************!*\
  !*** ./src/images/hero-image.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"367035b178a562188788.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hero-image.jpg?\n}");

/***/ }),

/***/ "./src/images/macarons.jpg":
/*!*********************************!*\
  !*** ./src/images/macarons.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"3f98ee51260d0599770a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/macarons.jpg?\n}");

/***/ }),

/***/ "./src/images/orange-donut.jpg":
/*!*************************************!*\
  !*** ./src/images/orange-donut.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"a4472ed26b74556ecf2b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/orange-donut.jpg?\n}");

/***/ }),

/***/ "./src/images/strawberry-shortcake.jpg":
/*!*********************************************!*\
  !*** ./src/images/strawberry-shortcake.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"983fbec4c133330db0e0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/strawberry-shortcake.jpg?\n}");

/***/ }),

/***/ "./src/images/tart.jpg":
/*!*****************************!*\
  !*** ./src/images/tart.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"490c42dfe42dcd924902.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/tart.jpg?\n}");

/***/ }),

/***/ "./src/images/vanilla-cupcake.jpg":
/*!****************************************!*\
  !*** ./src/images/vanilla-cupcake.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"60f7774973d36241d092.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/vanilla-cupcake.jpg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nfunction clearContent() {\n    document.getElementById('content').textContent = \"\";\n}\n\nfunction setBtnActive(buttonId) {\n    document.querySelectorAll('nav button').forEach(btn => {\n        btn.classList.remove('active');\n    });\n\n    document.getElementById(buttonId).classList.add('active');\n}\n\nfunction init() {\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    setBtnActive('homeBtn');\n\n    document.getElementById('homeBtn').addEventListener('click', () => {\n        clearContent();\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        setBtnActive('homeBtn');\n    });\n\n    document.getElementById('menuBtn').addEventListener('click', () => {\n        clearContent();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        setBtnActive('menuBtn');\n    });\n\n    document.getElementById('aboutBtn').addEventListener('click', () => {\n        clearContent();\n        (0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        setBtnActive('aboutBtn');\n    });\n\n    document.getElementById('contactBtn').addEventListener('click', () => {\n        clearContent();\n        (0,_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        setBtnActive('contactBtn');\n    });\n}\n\ninit();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _images_macarons_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/macarons.jpg */ \"./src/images/macarons.jpg\");\n/* harmony import */ var _images_chocolate_eclairs_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chocolate-eclairs.jpg */ \"./src/images/chocolate-eclairs.jpg\");\n/* harmony import */ var _images_strawberry_shortcake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/strawberry-shortcake.jpg */ \"./src/images/strawberry-shortcake.jpg\");\n/* harmony import */ var _images_vanilla_cupcake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/vanilla-cupcake.jpg */ \"./src/images/vanilla-cupcake.jpg\");\n/* harmony import */ var _images_orange_donut_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/orange-donut.jpg */ \"./src/images/orange-donut.jpg\");\n/* harmony import */ var _images_tart_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/tart.jpg */ \"./src/images/tart.jpg\");\n/* harmony import */ var _images_hazelnut_cupcake_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/hazelnut-cupcake.jpg */ \"./src/images/hazelnut-cupcake.jpg\");\n\n\n\n\n\n\n\n\nfunction loadMenu() {\n    const content = document.getElementById('content');\n    const menuDiv = document.createElement('div');\n\n    const headline = document.createElement('h1');\n    headline.textContent = 'Our Menu';\n\n    const menuGrid = document.createElement('div');\n    menuGrid.classList.add('menu-grid');\n    const menuItems = [\n        {\n        name: 'Rasberry Macarons',\n        description: 'Delicate almond shells with a tangy raspberry buttercream filling.',\n        img: _images_macarons_jpg__WEBPACK_IMPORTED_MODULE_0__\n        },\n        {\n        name: 'Chocolate Eclair',\n        description: 'Crisp pastry filled with vanilla custard and topped with rich chocolate glaze.',\n        img: _images_chocolate_eclairs_jpg__WEBPACK_IMPORTED_MODULE_1__\n        },\n        {\n        name: 'Strawberry Shortcake',\n        description: 'Layers of fluffy sponge, whipped cream, and fresh strawberries.',\n        img: _images_strawberry_shortcake_jpg__WEBPACK_IMPORTED_MODULE_2__\n        },\n        {\n        name: \"Sunrise Delight\",\n        description: \"A fluffy donut topped with a silky white chocolate Swiss icing, garnished with a fresh orange slice and a crisp wafer for the perfect crunch.\",\n        img: _images_orange_donut_jpg__WEBPACK_IMPORTED_MODULE_4__\n        },\n        {\n        name: 'Fruit Cake Slice',\n        description: 'Moist cake packed with dried fruits, nuts, and a hint of spice.',\n        img: ''\n        },\n        {\n        name: 'Vanilla Cupcake',\n        description: 'Classic vanilla sponge with creamy buttercream frosting and sprinkles.',\n        img: _images_vanilla_cupcake_jpg__WEBPACK_IMPORTED_MODULE_3__\n        },\n        {\n        name: \"Hazelnut Crunch Cupcake\",\n        description: \"A rich chocolate cupcake filled with smooth hazelnut cream, topped with silky chocolate frosting, a drizzle of Nutella, and a Ferrero Rocher for the ultimate crunch.\",\n        img: _images_hazelnut_cupcake_jpg__WEBPACK_IMPORTED_MODULE_6__\n        },\n        {\n        name: \"Berry Bliss Tart\",\n        description: \"Crisp mini tart filled with creamy custard and topped with fresh berries. Sweet, bright, and refreshing.\",\n        img: _images_tart_jpg__WEBPACK_IMPORTED_MODULE_5__\n        },\n    ];\n    menuItems.forEach(item => {\n        const itemCard = document.createElement('div');\n        itemCard.classList.add('menu-card');\n\n        if (item.img) {\n            const img = document.createElement('img');\n            img.src = item.img;\n            img.alt = item.name;\n            itemCard.appendChild(img);\n        } else {\n            const placeholderImg = document.createElement('div');\n            placeholderImg.classList.add('img-placeholder');\n            placeholderImg.textContent = item.name;\n            itemCard.appendChild(placeholderImg);\n        }\n\n        const name = document.createElement('h2');\n        name.textContent = item.name;\n\n        const description = document.createElement('p');\n        description.textContent = item.description;\n\n        itemCard.appendChild(name);\n        itemCard.appendChild(description);\n\n        menuGrid.appendChild(itemCard);\n    });\n\n    menuDiv.appendChild(headline);\n    menuDiv.appendChild(menuGrid);\n\n    content.appendChild(menuDiv);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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