/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    background-color: #2f3536;
    color: white;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
}

button {
    cursor: pointer;
}

.content {
    display: grid;
    grid-template-columns: 1fr 3fr;
}

/* just for visibility for right now */
.content > *, .main-div > * {
    border: 1px solid white;
}

.main-div {
    height: 600px;
}

.top-ribbon {
    padding: 10px;
}

/* main area (task list) */

.current-project {
    padding: 10px;
}

.task-display {
    padding: 10px;
}

.task-display > h3 {
    margin: 1em 0;
}

.task-list-item {
    padding: 0.5em;
    display: grid;
    grid-template-columns: 7fr 3fr 1fr;
}

.task-list-item > * {
    background-color: inherit;
}

.task-list-item:hover {
    background-color: darkgray;
    cursor: default;
}

.list-task-title:hover {
    cursor: pointer;
}

.delete-task-button {
    padding: 0 1em;
}

.delete-task-button:hover {
    color: red;
    cursor: pointer;
}

/* Sidebar styles */
.sidebar {
    display: grid;
    grid-template-rows: 8fr 1fr;
}

.projects-list { /*container for project tabs*/
    display: flex;
    flex-direction: column;
    margin: 1em;
}

.project-tab { /*the tabs themselves*/
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
}

.project-tab:hover {
    background-color: darkgray;
}

.project-tab > * {
    background-color: inherit;
    cursor: pointer;
}

.delete-project-button:hover {
    cursor: pointer;
}

.action-buttons {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-top: 1px solid white;
}

.action-buttons > button {
    padding: 0.5em;
    border: none;
}

.action-buttons > button:hover {
    cursor: pointer;
}

/* task modal styles */

.task-modal-background {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4);
}

.task-modal {
    background-color: #fefefe;
    margin: 7% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 10px;

    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
}

.task-modal > * {
    background-color: #fefefe;
}

.task-modal-header {
    grid-column: 1 / 3;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.task-modal-header > * {
    background-color: #fefefe;
    color: black;
    padding: 0.5em;
    margin: 1em;
}

.task-title {
    width: 75%;
    border: none;
    font-size: larger;
}

.task-close-button {
    border: none;
    align-self: flex-start;
}

.task-main-content {
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: flex-start;
}

.task-main-content > * {
    background-color: #fefefe;
    color: black;
    padding: 0.5em;
    margin: 1em;
}

.task-description {
    height: 10em;
    border-radius: 10px;
    border: 1px solid gray;
}

.status-toggle {
    border: 1px solid black;
    align-self: flex-start;
    padding: 5px;
    margin: 0 2em;
    height: 25px;
    width: 25px;
}

.status-toggle:hover {
    cursor: pointer;
}

.task-sidebar {
    background-color: #fefefe;
    color: black;
    border-color: 1px solid red;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.task-sidebar > * {
    background-color: #fefefe;
    color: black;
    padding: 0.5em;
    margin: 1em;
}

.task-modal-footer {
    display: flex;
    flex-direction: column;
    grid-column: 1 / 3;
}

.task-modal-footer > * {
    background-color: #fefefe;
    color: black;
    padding: 0.5em;
    margin: 1em;
}

.task-ok-button {
    border: none;
    align-self: center;
    background-color: #5dbea3;
    border-radius: 5px;
    padding: 0.7em 1em;
    width: 90%;
}

.task-ok-button:hover {
    box-shadow: 2px 2px 5px 0px #636363;
}

/* new project modal */

.project-modal-background {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4);
}

.new-project-modal {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    height: 12em;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.project-modal-header {
    display: flex;
    width: 90%;
    background-color: #fefefe;
    color: black;
    justify-content: space-between;
}

.project-modal-header > h3 {
    background-color: white;
    color: black;
}

.project-close-button {
    background-color: white;
    color: black;
    border: none;
    align-self: flex-end;
}

.project-title {
    background-color: #fefefe;
    border-bottom-color: #2f3536;
    border-top: none;
    border-right: none;
    border-left: none;
    padding: 0.5em;
    width: 90%;
    align-self: center;
    color: black;
}

.project-ok-button {
    border: none;
    align-self: center;
    background-color: #5dbea3;
    border-radius: 5px;
    padding: 0.7em 1em;
    width: 90%;
}

.project-ok-button:hover {
    box-shadow: 2px 2px 5px 0px #636363;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;500&display=swap');\n\n* {\n    background-color: #2f3536;\n    color: white;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Work Sans', sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n/* just for visibility for right now */\n.content > *, .main-div > * {\n    border: 1px solid white;\n}\n\n.main-div {\n    height: 600px;\n}\n\n.top-ribbon {\n    padding: 10px;\n}\n\n/* main area (task list) */\n\n.current-project {\n    padding: 10px;\n}\n\n.task-display {\n    padding: 10px;\n}\n\n.task-display > h3 {\n    margin: 1em 0;\n}\n\n.task-list-item {\n    padding: 0.5em;\n    display: grid;\n    grid-template-columns: 7fr 3fr 1fr;\n}\n\n.task-list-item > * {\n    background-color: inherit;\n}\n\n.task-list-item:hover {\n    background-color: darkgray;\n    cursor: default;\n}\n\n.list-task-title:hover {\n    cursor: pointer;\n}\n\n.delete-task-button {\n    padding: 0 1em;\n}\n\n.delete-task-button:hover {\n    color: red;\n    cursor: pointer;\n}\n\n/* Sidebar styles */\n.sidebar {\n    display: grid;\n    grid-template-rows: 8fr 1fr;\n}\n\n.projects-list { /*container for project tabs*/\n    display: flex;\n    flex-direction: column;\n    margin: 1em;\n}\n\n.project-tab { /*the tabs themselves*/\n    padding: 0.5em;\n    display: flex;\n    justify-content: space-between;\n}\n\n.project-tab:hover {\n    background-color: darkgray;\n}\n\n.project-tab > * {\n    background-color: inherit;\n    cursor: pointer;\n}\n\n.delete-project-button:hover {\n    cursor: pointer;\n}\n\n.action-buttons {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    border-top: 1px solid white;\n}\n\n.action-buttons > button {\n    padding: 0.5em;\n    border: none;\n}\n\n.action-buttons > button:hover {\n    cursor: pointer;\n}\n\n/* task modal styles */\n\n.task-modal-background {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4);\n}\n\n.task-modal {\n    background-color: #fefefe;\n    margin: 7% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%;\n    border-radius: 10px;\n\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 5fr 1fr;\n}\n\n.task-modal > * {\n    background-color: #fefefe;\n}\n\n.task-modal-header {\n    grid-column: 1 / 3;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.task-modal-header > * {\n    background-color: #fefefe;\n    color: black;\n    padding: 0.5em;\n    margin: 1em;\n}\n\n.task-title {\n    width: 75%;\n    border: none;\n    font-size: larger;\n}\n\n.task-close-button {\n    border: none;\n    align-self: flex-start;\n}\n\n.task-main-content {\n    display: flex;\n    flex-direction: column;\n    align-items: space-evenly;\n    justify-content: flex-start;\n}\n\n.task-main-content > * {\n    background-color: #fefefe;\n    color: black;\n    padding: 0.5em;\n    margin: 1em;\n}\n\n.task-description {\n    height: 10em;\n    border-radius: 10px;\n    border: 1px solid gray;\n}\n\n.status-toggle {\n    border: 1px solid black;\n    align-self: flex-start;\n    padding: 5px;\n    margin: 0 2em;\n    height: 25px;\n    width: 25px;\n}\n\n.status-toggle:hover {\n    cursor: pointer;\n}\n\n.task-sidebar {\n    background-color: #fefefe;\n    color: black;\n    border-color: 1px solid red;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n\n.task-sidebar > * {\n    background-color: #fefefe;\n    color: black;\n    padding: 0.5em;\n    margin: 1em;\n}\n\n.task-modal-footer {\n    display: flex;\n    flex-direction: column;\n    grid-column: 1 / 3;\n}\n\n.task-modal-footer > * {\n    background-color: #fefefe;\n    color: black;\n    padding: 0.5em;\n    margin: 1em;\n}\n\n.task-ok-button {\n    border: none;\n    align-self: center;\n    background-color: #5dbea3;\n    border-radius: 5px;\n    padding: 0.7em 1em;\n    width: 90%;\n}\n\n.task-ok-button:hover {\n    box-shadow: 2px 2px 5px 0px #636363;\n}\n\n/* new project modal */\n\n.project-modal-background {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4);\n}\n\n.new-project-modal {\n    background-color: #fefefe;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%;\n    height: 12em;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project-modal-header {\n    display: flex;\n    width: 90%;\n    background-color: #fefefe;\n    color: black;\n    justify-content: space-between;\n}\n\n.project-modal-header > h3 {\n    background-color: white;\n    color: black;\n}\n\n.project-close-button {\n    background-color: white;\n    color: black;\n    border: none;\n    align-self: flex-end;\n}\n\n.project-title {\n    background-color: #fefefe;\n    border-bottom-color: #2f3536;\n    border-top: none;\n    border-right: none;\n    border-left: none;\n    padding: 0.5em;\n    width: 90%;\n    align-self: center;\n    color: black;\n}\n\n.project-ok-button {\n    border: none;\n    align-self: center;\n    background-color: #5dbea3;\n    border-radius: 5px;\n    padding: 0.7em 1em;\n    width: 90%;\n}\n\n.project-ok-button:hover {\n    box-shadow: 2px 2px 5px 0px #636363;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _load_task_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-task-list.js */ "./src/load-task-list.js");
/* harmony import */ var _load_task_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-task-modal.js */ "./src/load-task-modal.js");
/* harmony import */ var _store_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store-projects.js */ "./src/store-projects.js");
/* harmony import */ var _new_project_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-project-modal.js */ "./src/new-project-modal.js");
/* harmony import */ var _populate_sidebar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./populate-sidebar.js */ "./src/populate-sidebar.js");






function loadPage () {
    const newTaskButton = document.querySelector('.new-task');
    const newProjectButton = document.querySelector('.new-project');
    (0,_load_task_modal_js__WEBPACK_IMPORTED_MODULE_1__.showTaskModalOnClick)(newTaskButton);
    (0,_load_task_modal_js__WEBPACK_IMPORTED_MODULE_1__.addButtonFunctions)();
    
    (0,_new_project_modal_js__WEBPACK_IMPORTED_MODULE_3__.showNewProjectModalOnClick)(newProjectButton);

    (0,_populate_sidebar_js__WEBPACK_IMPORTED_MODULE_4__.getAndPopulateProjects)();
    (0,_store_projects_js__WEBPACK_IMPORTED_MODULE_2__.startStorage)();
    (0,_load_task_list_js__WEBPACK_IMPORTED_MODULE_0__.listAllItems)();

}



/***/ }),

/***/ "./src/load-task-list.js":
/*!*******************************!*\
  !*** ./src/load-task-list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listAllItems: () => (/* binding */ listAllItems)
/* harmony export */ });
/* harmony import */ var _load_task_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-task-modal.js */ "./src/load-task-modal.js");
/* harmony import */ var _store_projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-projects.js */ "./src/store-projects.js");



function showListItem (task, taskTitle, taskDueDate, parent, project) {
    const listItem = document.createElement('div');
    listItem.classList.add('task-list-item');
    listItem.setAttribute('id', project.indexOf(task));

    const itemTitle = document.createElement('h4');
    itemTitle.classList.add('list-task-title');
    itemTitle.textContent = taskTitle;

    const itemDueDate = document.createElement('h4');
    itemDueDate.textContent = taskDueDate;

    const deleteTaskButton = document.createElement('span');
    deleteTaskButton.classList.add('delete-task-button');
    deleteTaskButton.textContent = 'X';

    listItem.appendChild(itemTitle);
    listItem.appendChild(itemDueDate);
    listItem.appendChild(deleteTaskButton);

    (0,_load_task_modal_js__WEBPACK_IMPORTED_MODULE_0__.showTaskModalOnClick)(itemTitle);
    deleteATask(deleteTaskButton);

    parent.appendChild(listItem);
}

function deleteATask (button) {
    button.addEventListener('click', (e) => {
        (0,_store_projects_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(e.target.parentElement.id, _store_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectNav.activeProject);
        listAllItems();
    })
}

function listAllItems (project = _store_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectNav.activeProject) {
    const currentProjectIndicator = document.querySelector('.current-project');
    currentProjectIndicator.textContent = _store_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectNav.activeProject;

    const openSection = document.querySelector('.open-tasks');
    const closedSection = document.querySelector('.closed-tasks');

    function determineStatus (taskStatus) {
        if (taskStatus === 'open') {
            return openSection;
        } else if (taskStatus === 'closed') {
            return closedSection;
        }
    }

    function clearExistingTasks (parent) {
        if (parent.hasChildNodes()) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
    }
    clearExistingTasks(openSection);
    clearExistingTasks(closedSection);

    const parsedProject = JSON.parse(localStorage.getItem(project));
    parsedProject.forEach(item => showListItem(item, item.title, item.dueDate, determineStatus(item.status), parsedProject));
}





/***/ }),

/***/ "./src/load-task-modal.js":
/*!********************************!*\
  !*** ./src/load-task-modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addButtonFunctions: () => (/* binding */ addButtonFunctions),
/* harmony export */   showTaskModalOnClick: () => (/* binding */ showTaskModalOnClick)
/* harmony export */ });
/* harmony import */ var _store_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-projects */ "./src/store-projects.js");
/* harmony import */ var _load_task_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-task-list */ "./src/load-task-list.js");



let currentTask = {
    _activeTask: 0,

    get taskID () {
        return this._activeTask;
    },

    set taskID (task) {
        return this._activeTask = task;
    }
}

function getTaskValues () {
    const title = document.querySelector('.task-title').value;
    const description = document.querySelector('.task-description').value;
    const dueDate = document.querySelector('.task-due-date').value;
    const priority = document.querySelector('#Priority').value;
    const project = document.querySelector('#task-project-dropdown').value;
    
    let taskStatus;
    const status = document.querySelector('.status-toggle');
    if (status.checked === true) {
        taskStatus = 'closed';
    } else if (status.checked === false) {
        taskStatus = 'open';
    }

    return {
        title,
        description,
        dueDate,
        priority,
        project,
        taskStatus,
    }
    
}

function updateProjectDropdown () {
    const dropdown = document.querySelector('#task-project-dropdown');

    if (dropdown.hasChildNodes()) {
        while (dropdown.firstChild) {
            dropdown.removeChild(dropdown.firstChild);
        }
    }

    for (let i = 0; i < localStorage.length; i++) {
        const projectOption = document.createElement('option');
        projectOption.textContent = localStorage.key(i);

        dropdown.appendChild(projectOption);
    }
}

function hideModal () {
    const modal = document.querySelector('.task-modal-background');
    modal.style.display = 'none';

    document.querySelector('.task-title').value = '';
    document.querySelector('.task-description').value = '';
    document.querySelector('.task-due-date').value = '';
    document.querySelector('#Priority').value = 'low';
    document.querySelector('#task-project-dropdown').value = '';
    document.querySelector('.status-toggle').checked = false;

    const button = document.querySelector('.task-ok-button');
    if (button.classList.contains('edit-save-button')) {
        button.classList.remove('edit-save-button');
    }
}

function prefillTaskModal (button) {
    const project = JSON.parse(localStorage.getItem(_store_projects__WEBPACK_IMPORTED_MODULE_0__.projectNav.activeProject));
    currentTask.taskID = button.parentElement.id;

    const thisTask = project[currentTask.taskID];
    document.querySelector('.task-title').value = thisTask.title;
    document.querySelector('.task-description').value = thisTask.description;
    document.querySelector('.task-due-date').value = thisTask.dueDate;
    document.querySelector('#Priority').value = thisTask.priority;

    if (thisTask.status === 'closed') {
        document.querySelector('.status-toggle').checked = true;
    } else {
        document.querySelector('.status-toggle').checked = false;
    }

    const okButton = document.querySelector('.task-ok-button');
    okButton.classList.add('edit-save-button');
}

function updateTask (position) {
        (0,_store_projects__WEBPACK_IMPORTED_MODULE_0__.storeNewTask)(getTaskValues().title, getTaskValues().description, getTaskValues().dueDate, getTaskValues().priority, getTaskValues().taskStatus, getTaskValues().project, position);
        (0,_load_task_list__WEBPACK_IMPORTED_MODULE_1__.listAllItems)();
        hideModal();
}

function addButtonFunctions () {
    const okButton = document.querySelector('.task-ok-button');
    okButton.addEventListener('click', () => {
        if (okButton.classList.contains('edit-save-button') === false) {
            (0,_store_projects__WEBPACK_IMPORTED_MODULE_0__.storeNewTask)(getTaskValues().title, getTaskValues().description, getTaskValues().dueDate, getTaskValues().priority, getTaskValues().taskStatus, getTaskValues().project, null);
            (0,_load_task_list__WEBPACK_IMPORTED_MODULE_1__.listAllItems)();
            hideModal();
        } else {
            updateTask(currentTask.taskID);
        }
    })
    
    const closeButton = document.querySelector('.task-close-button');
    closeButton.addEventListener('click', hideModal);
}

function showTaskModalOnClick (button) { 
    button.addEventListener('click', () => {
        if (button.classList.contains('list-task-title')) {
            prefillTaskModal(button);
        }
        updateProjectDropdown();
        const modal = document.querySelector('.task-modal-background');
        modal.style.display = 'block';
    });
};




/* add:
* require certain fields to be filled before ok can be pressed
* which project is displayed in the project dropdown
* moving tasks across projects
*/

/***/ }),

/***/ "./src/new-project-modal.js":
/*!**********************************!*\
  !*** ./src/new-project-modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showNewProjectModalOnClick: () => (/* binding */ showNewProjectModalOnClick)
/* harmony export */ });
/* harmony import */ var _store_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-projects */ "./src/store-projects.js");
/* harmony import */ var _populate_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populate-sidebar */ "./src/populate-sidebar.js");



function addButtonFunctions () {
    const okButton = document.querySelector('.project-ok-button');
    okButton.addEventListener('click', () => {
        const title = document.querySelector('.project-title').value;
        hideModalOnClick();
        (0,_store_projects__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(title);
        (0,_populate_sidebar__WEBPACK_IMPORTED_MODULE_1__.getAndPopulateProjects)();
    })

    const closeButton = document.querySelector('.project-close-button');
    closeButton.addEventListener('click', hideModalOnClick);
}

function hideModalOnClick () {
    const modal = document.querySelector('.project-modal-background');
    modal.style.display = 'none';
    document.querySelector('.project-title').value = '';
}

function showNewProjectModalOnClick (button) {
    button.addEventListener('click', () => {
        addButtonFunctions();
        const modal = document.querySelector('.project-modal-background');
        modal.style.display = 'block';
    });
};



/***/ }),

/***/ "./src/populate-sidebar.js":
/*!*********************************!*\
  !*** ./src/populate-sidebar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAndPopulateProjects: () => (/* binding */ getAndPopulateProjects)
/* harmony export */ });
/* harmony import */ var _load_task_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-task-list.js */ "./src/load-task-list.js");
/* harmony import */ var _store_projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-projects.js */ "./src/store-projects.js");



function createProjectTabs (project, parent) {
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');

    const projectTabText = document.createElement('h4');
    projectTabText.textContent = project;

    const deleteProjectButton = document.createElement('span');
    deleteProjectButton.classList.add('delete-project-button');
    deleteProjectButton.textContent = 'X';

    projectTabText.addEventListener('click', () => {
        let projectName = projectTabText.textContent;
        _store_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectNav.activeProject = projectName; 
        //the above is redundant bc the next line does it for us...
        //but I like having it here haha
        (0,_load_task_list_js__WEBPACK_IMPORTED_MODULE_0__.listAllItems)(projectName);
    })

    projectTab.appendChild(projectTabText);
    projectTab.appendChild(deleteProjectButton);
    deleteProjectOnClick(deleteProjectButton);

    parent.appendChild(projectTab);
}

function deleteProjectOnClick (button) {
    button.addEventListener('click', (e) => {
        const projectName = e.target.parentElement.firstChild.textContent;
        (0,_store_projects_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(projectName);
        (0,_load_task_list_js__WEBPACK_IMPORTED_MODULE_0__.listAllItems)();
    })
}

function getAndPopulateProjects () {
    const projectsList = document.querySelector('.projects-list');

    if (projectsList.hasChildNodes()) {
        while (projectsList.firstChild) {
            projectsList.removeChild(projectsList.firstChild);
        }
    }

    for (let i = 0; i < localStorage.length; i++) {
        createProjectTabs(localStorage.key(i), projectsList);
    }
}



/***/ }),

/***/ "./src/store-projects.js":
/*!*******************************!*\
  !*** ./src/store-projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAndAddTask: () => (/* binding */ createAndAddTask),
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   projectNav: () => (/* binding */ projectNav),
/* harmony export */   renameProject: () => (/* binding */ renameProject),
/* harmony export */   startStorage: () => (/* binding */ startStorage),
/* harmony export */   storeNewTask: () => (/* binding */ storeNewTask),
/* harmony export */   toggleTaskCompletedStatus: () => (/* binding */ toggleTaskCompletedStatus)
/* harmony export */ });
//  create and manage Project objects and Task objects

function startStorage () {
    if (localStorage.length <= 0) {
        localStorage.setItem('Default Project', JSON.stringify(new Array()));
    }
}

/* 
    format:
    localstorage = {
        'default project': 
        [
            {
                title: 'first task',
                description: 'just showing how it works',
                dueDate: '2023-09-30',
                priority: 'normal',
                status: 'open'
            },
        ],
    }

    new Projects are added to localStorage as k/v pairs,
    where the name of the Project is the key,
    and a stringified Array is the value;
    The Array will contain objects representing Tasks with
    title, description, dueDate, priority and status attributes.
*/

//  project management functions

function createNewProject (projectName) {
    localStorage.setItem(projectName, JSON.stringify(new Array()));
}

function renameProject (oldProjectName, newProjectName) {
    const projectTasks = localStorage.getItem(oldProjectName);
    localStorage.removeItem(oldProjectName);
    localStorage.setItem(newProjectName, projectTasks);
}

function deleteProject (projectName) {
    localStorage.removeItem(projectName);
};

//  task management functions

function storeNewTask (title, description, dueDate, priority, status, project, position) {
    let projectData = JSON.parse(localStorage.getItem(project));
    createAndAddTask(title, description, dueDate, priority, status, projectData, position);
    localStorage.setItem(project, JSON.stringify(projectData));
}

function createAndAddTask (title, description, dueDate, priority, status, project, position) {
    
    const createTask = () => {
        return { title, description, dueDate, priority, status };
    }

    if (position !== null) {
        project.splice(position, 1, createTask(title, description, dueDate, priority, status));
    } else if (position === null) {
        project.push(createTask(title, description, dueDate, priority, status));
    }
}

function deleteTask (taskIndex, project) {
    const projectTasks = JSON.parse(localStorage.getItem(project));
    projectTasks.splice(taskIndex, 1);
    localStorage.setItem(project, JSON.stringify(projectTasks));
}

function toggleTaskCompletedStatus (taskIndex, project) {
    const projectTasks = JSON.parse(localStorage.getItem(project));
    const task = projectTasks[taskIndex];

    if (task["status"] === 'open') {
        task["status"] = 'closed';
    } else if (task["status"] === 'closed') {
        task["status"] = 'open';
    }
}

let projectNav = {
    _activeProject: 'Default Project',

    get activeProject () {
        return this._activeProject;
    },

    set activeProject (newProject) {
        return this._activeProject = newProject;
    }
}



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page.js */ "./src/load-page.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_load_page_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSCxJQUFJLGtCQUFrQjtBQUN4STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLG1CQUFtQixXQUFXLFlBQVksV0FBVyxNQUFNLGlCQUFpQixXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLHdCQUF3QixhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSx3QkFBd0IsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLG1HQUFtRyxJQUFJLG1CQUFtQixPQUFPLGdDQUFnQyxtQkFBbUIsNkJBQTZCLGdCQUFnQixpQkFBaUIsMkNBQTJDLEdBQUcsWUFBWSxzQkFBc0IsR0FBRyxjQUFjLG9CQUFvQixxQ0FBcUMsR0FBRywwRUFBMEUsOEJBQThCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcscURBQXFELG9CQUFvQixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcscUJBQXFCLHFCQUFxQixvQkFBb0IseUNBQXlDLEdBQUcseUJBQXlCLGdDQUFnQyxHQUFHLDJCQUEyQixpQ0FBaUMsc0JBQXNCLEdBQUcsNEJBQTRCLHNCQUFzQixHQUFHLHlCQUF5QixxQkFBcUIsR0FBRywrQkFBK0IsaUJBQWlCLHNCQUFzQixHQUFHLG9DQUFvQyxvQkFBb0Isa0NBQWtDLEdBQUcscUJBQXFCLGtEQUFrRCw2QkFBNkIsa0JBQWtCLEdBQUcsbUJBQW1CLDRDQUE0QyxvQkFBb0IscUNBQXFDLEdBQUcsd0JBQXdCLGlDQUFpQyxHQUFHLHNCQUFzQixnQ0FBZ0Msc0JBQXNCLEdBQUcsa0NBQWtDLHNCQUFzQixHQUFHLHFCQUFxQixvQkFBb0IsNkJBQTZCLGdDQUFnQyxrQ0FBa0MsR0FBRyw4QkFBOEIscUJBQXFCLG1CQUFtQixHQUFHLG9DQUFvQyxzQkFBc0IsR0FBRyx1REFBdUQsb0JBQW9CLHNCQUFzQixpQkFBaUIsY0FBYyxhQUFhLGtCQUFrQixtQkFBbUIscUJBQXFCLG9DQUFvQyw0REFBNEQsR0FBRyxpQkFBaUIsZ0NBQWdDLHNCQUFzQixvQkFBb0IsNkJBQTZCLGlCQUFpQiwwQkFBMEIsc0JBQXNCLHFDQUFxQyxzQ0FBc0MsR0FBRyxxQkFBcUIsZ0NBQWdDLEdBQUcsd0JBQXdCLHlCQUF5QixzQkFBc0IsMEJBQTBCLHFDQUFxQyxHQUFHLDRCQUE0QixnQ0FBZ0MsbUJBQW1CLHFCQUFxQixrQkFBa0IsR0FBRyxpQkFBaUIsaUJBQWlCLG1CQUFtQix3QkFBd0IsR0FBRyx3QkFBd0IsbUJBQW1CLDZCQUE2QixHQUFHLHdCQUF3QixvQkFBb0IsNkJBQTZCLGdDQUFnQyxrQ0FBa0MsR0FBRyw0QkFBNEIsZ0NBQWdDLG1CQUFtQixxQkFBcUIsa0JBQWtCLEdBQUcsdUJBQXVCLG1CQUFtQiwwQkFBMEIsNkJBQTZCLEdBQUcsb0JBQW9CLDhCQUE4Qiw2QkFBNkIsbUJBQW1CLG9CQUFvQixtQkFBbUIsa0JBQWtCLEdBQUcsMEJBQTBCLHNCQUFzQixHQUFHLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLGtDQUFrQyxzQkFBc0IsNkJBQTZCLGtDQUFrQyxHQUFHLHVCQUF1QixnQ0FBZ0MsbUJBQW1CLHFCQUFxQixrQkFBa0IsR0FBRyx3QkFBd0Isb0JBQW9CLDZCQUE2Qix5QkFBeUIsR0FBRyw0QkFBNEIsZ0NBQWdDLG1CQUFtQixxQkFBcUIsa0JBQWtCLEdBQUcscUJBQXFCLG1CQUFtQix5QkFBeUIsZ0NBQWdDLHlCQUF5Qix5QkFBeUIsaUJBQWlCLEdBQUcsMkJBQTJCLDBDQUEwQyxHQUFHLDBEQUEwRCxvQkFBb0Isc0JBQXNCLGlCQUFpQixjQUFjLGFBQWEsa0JBQWtCLG1CQUFtQixxQkFBcUIsb0NBQW9DLDREQUE0RCxHQUFHLHdCQUF3QixnQ0FBZ0MsdUJBQXVCLG9CQUFvQiw2QkFBNkIsaUJBQWlCLG1CQUFtQiwwQkFBMEIsb0JBQW9CLDZCQUE2QixxQ0FBcUMsMEJBQTBCLEdBQUcsMkJBQTJCLG9CQUFvQixpQkFBaUIsZ0NBQWdDLG1CQUFtQixxQ0FBcUMsR0FBRyxnQ0FBZ0MsOEJBQThCLG1CQUFtQixHQUFHLDJCQUEyQiw4QkFBOEIsbUJBQW1CLG1CQUFtQiwyQkFBMkIsR0FBRyxvQkFBb0IsZ0NBQWdDLG1DQUFtQyx1QkFBdUIseUJBQXlCLHdCQUF3QixxQkFBcUIsaUJBQWlCLHlCQUF5QixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLHlCQUF5QixnQ0FBZ0MseUJBQXlCLHlCQUF5QixpQkFBaUIsR0FBRyw4QkFBOEIsMENBQTBDLEdBQUcsbUJBQW1CO0FBQ2h6UTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzlVMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibUQ7QUFDNkI7QUFDN0I7QUFDaUI7QUFDTDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBb0I7QUFDeEIsSUFBSSx1RUFBa0I7QUFDdEI7QUFDQSxJQUFJLGlGQUEwQjs7QUFFOUIsSUFBSSw0RUFBc0I7QUFDMUIsSUFBSSxnRUFBWTtBQUNoQixJQUFJLGdFQUFZOztBQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEI0RDtBQUNDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUkseUVBQW9CO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsOERBQVUsNEJBQTRCLDBEQUFVO0FBQ3hEO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlDQUFpQywwREFBVTtBQUMzQztBQUNBLDBDQUEwQywwREFBVTs7QUFFcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBSUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRTJEO0FBQ1o7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRCx1REFBVTtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDZEQUFZO0FBQ3BCLFFBQVEsNkRBQVk7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQVk7QUFDeEIsWUFBWSw2REFBWTtBQUN4QjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBS0M7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSW9EO0FBQ1E7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFnQjtBQUN4QixRQUFRLHlFQUFzQjtBQUM5QixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCbUQ7QUFDYTs7QUFFaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDBEQUFVO0FBQ2xCO0FBQ0E7QUFDQSxRQUFRLGdFQUFZO0FBQ3BCLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBYTtBQUNyQixRQUFRLGdFQUFZO0FBQ3BCLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDOUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQ3JCOztBQUVyQix1REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2xvYWQtdGFzay1saXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2xvYWQtdGFzay1tb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9uZXctcHJvamVjdC1tb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wb3B1bGF0ZS1zaWRlYmFyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0b3JlLXByb2plY3RzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9V29yaytTYW5zOndnaHRAMTAwOzMwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzNTM2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbn1cblxuLyoganVzdCBmb3IgdmlzaWJpbGl0eSBmb3IgcmlnaHQgbm93ICovXG4uY29udGVudCA+ICosIC5tYWluLWRpdiA+ICoge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4ubWFpbi1kaXYge1xuICAgIGhlaWdodDogNjAwcHg7XG59XG5cbi50b3AtcmliYm9uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBtYWluIGFyZWEgKHRhc2sgbGlzdCkgKi9cblxuLmN1cnJlbnQtcHJvamVjdCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnRhc2stZGlzcGxheSB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnRhc2stZGlzcGxheSA+IGgzIHtcbiAgICBtYXJnaW46IDFlbSAwO1xufVxuXG4udGFzay1saXN0LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3ZnIgM2ZyIDFmcjtcbn1cblxuLnRhc2stbGlzdC1pdGVtID4gKiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLnRhc2stbGlzdC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5saXN0LXRhc2stdGl0bGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMCAxZW07XG59XG5cbi5kZWxldGUtdGFzay1idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBTaWRlYmFyIHN0eWxlcyAqL1xuLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgMWZyO1xufVxuXG4ucHJvamVjdHMtbGlzdCB7IC8qY29udGFpbmVyIGZvciBwcm9qZWN0IHRhYnMqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnByb2plY3QtdGFiIHsgLyp0aGUgdGFicyB0aGVtc2VsdmVzKi9cbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2plY3QtdGFiOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLnByb2plY3QtdGFiID4gKiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyA+IGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMgPiBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogdGFzayBtb2RhbCBzdHlsZXMgKi9cblxuLnRhc2stbW9kYWwtYmFja2dyb3VuZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG59XG5cbi50YXNrLW1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogNyUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcbn1cblxuLnRhc2stbW9kYWwgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xufVxuXG4udGFzay1tb2RhbC1oZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YXNrLW1vZGFsLWhlYWRlciA+ICoge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4udGFzay10aXRsZSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi50YXNrLWNsb3NlLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi50YXNrLW1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1ldmVubHk7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4udGFzay1tYWluLWNvbnRlbnQgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24ge1xuICAgIGhlaWdodDogMTBlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5zdGF0dXMtdG9nZ2xlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDAgMmVtO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbn1cblxuLnN0YXR1cy10b2dnbGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLWNvbG9yOiAxcHggc29saWQgcmVkO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnRhc2stc2lkZWJhciA+ICoge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4udGFzay1tb2RhbC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG59XG5cbi50YXNrLW1vZGFsLWZvb3RlciA+ICoge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4udGFzay1vay1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYmVhMztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMC43ZW0gMWVtO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi50YXNrLW9rLWJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4ICM2MzYzNjM7XG59XG5cbi8qIG5ldyBwcm9qZWN0IG1vZGFsICovXG5cbi5wcm9qZWN0LW1vZGFsLWJhY2tncm91bmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xufVxuXG4ubmV3LXByb2plY3QtbW9kYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LW1vZGFsLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2plY3QtbW9kYWwtaGVhZGVyID4gaDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2plY3QtY2xvc2UtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMmYzNTM2O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2plY3Qtb2stYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGJlYTM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDAuN2VtIDFlbTtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4ucHJvamVjdC1vay1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjNjM2MzYzO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUEsc0NBQXNDO0FBQ3RDO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsMEJBQTBCOztBQUUxQjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUEsaUJBQWlCLDZCQUE2QjtJQUMxQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7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Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdvcmsrU2Fuczp3Z2h0QDEwMDszMDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzNTM2O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4vKiBqdXN0IGZvciB2aXNpYmlsaXR5IGZvciByaWdodCBub3cgKi9cXG4uY29udGVudCA+ICosIC5tYWluLWRpdiA+ICoge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLm1haW4tZGl2IHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuLnRvcC1yaWJib24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4vKiBtYWluIGFyZWEgKHRhc2sgbGlzdCkgKi9cXG5cXG4uY3VycmVudC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2stZGlzcGxheSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrLWRpc3BsYXkgPiBoMyB7XFxuICAgIG1hcmdpbjogMWVtIDA7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbSB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciAzZnIgMWZyO1xcbn1cXG5cXG4udGFzay1saXN0LWl0ZW0gPiAqIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmxpc3QtdGFzay10aXRsZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAgMWVtO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTaWRlYmFyIHN0eWxlcyAqL1xcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgMWZyO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7IC8qY29udGFpbmVyIGZvciBwcm9qZWN0IHRhYnMqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDFlbTtcXG59XFxuXFxuLnByb2plY3QtdGFiIHsgLyp0aGUgdGFicyB0aGVtc2VsdmVzKi9cXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3QtdGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5wcm9qZWN0LXRhYiA+ICoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3Rpb24tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmFjdGlvbi1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFjdGlvbi1idXR0b25zID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiB0YXNrIG1vZGFsIHN0eWxlcyAqL1xcblxcbi50YXNrLW1vZGFsLWJhY2tncm91bmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG59XFxuXFxuLnRhc2stbW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBtYXJnaW46IDclIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcXG59XFxuXFxuLnRhc2stbW9kYWwgPiAqIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG59XFxuXFxuLnRhc2stbW9kYWwtaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLW1vZGFsLWhlYWRlciA+ICoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtYXJnaW46IDFlbTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4udGFzay1jbG9zZS1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50YXNrLW1haW4tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1ldmVubHk7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLnRhc2stbWFpbi1jb250ZW50ID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogMTBlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLnN0YXR1cy10b2dnbGUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgMmVtO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uc3RhdHVzLXRvZ2dsZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLWNvbG9yOiAxcHggc29saWQgcmVkO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50YXNrLXNpZGViYXIgPiAqIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWFyZ2luOiAxZW07XFxufVxcblxcbi50YXNrLW1vZGFsLWZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnRhc2stbW9kYWwtZm9vdGVyID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4udGFzay1vay1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYmVhMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAwLjdlbSAxZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi50YXNrLW9rLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjNjM2MzYzO1xcbn1cXG5cXG4vKiBuZXcgcHJvamVjdCBtb2RhbCAqL1xcblxcbi5wcm9qZWN0LW1vZGFsLWJhY2tncm91bmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAxMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LW1vZGFsLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC1oZWFkZXIgPiBoMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWNsb3NlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzJmMzUzNjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1vay1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYmVhMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAwLjdlbSAxZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0LW9rLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjNjM2MzYzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbGlzdEFsbEl0ZW1zIH0gZnJvbSAnLi9sb2FkLXRhc2stbGlzdC5qcyc7XG5pbXBvcnQgeyBhZGRCdXR0b25GdW5jdGlvbnMsIHNob3dUYXNrTW9kYWxPbkNsaWNrIH0gZnJvbSAnLi9sb2FkLXRhc2stbW9kYWwuanMnO1xuaW1wb3J0IHsgc3RhcnRTdG9yYWdlIH0gZnJvbSAnLi9zdG9yZS1wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBzaG93TmV3UHJvamVjdE1vZGFsT25DbGljayB9IGZyb20gJy4vbmV3LXByb2plY3QtbW9kYWwuanMnO1xuaW1wb3J0IHsgZ2V0QW5kUG9wdWxhdGVQcm9qZWN0cyB9IGZyb20gJy4vcG9wdWxhdGUtc2lkZWJhci5qcyc7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlICgpIHtcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuICAgIHNob3dUYXNrTW9kYWxPbkNsaWNrKG5ld1Rhc2tCdXR0b24pO1xuICAgIGFkZEJ1dHRvbkZ1bmN0aW9ucygpO1xuICAgIFxuICAgIHNob3dOZXdQcm9qZWN0TW9kYWxPbkNsaWNrKG5ld1Byb2plY3RCdXR0b24pO1xuXG4gICAgZ2V0QW5kUG9wdWxhdGVQcm9qZWN0cygpO1xuICAgIHN0YXJ0U3RvcmFnZSgpO1xuICAgIGxpc3RBbGxJdGVtcygpO1xuXG59XG5cbmV4cG9ydCB7XG4gICAgbG9hZFBhZ2UsXG59OyIsImltcG9ydCB7IHNob3dUYXNrTW9kYWxPbkNsaWNrIH0gZnJvbSAnLi9sb2FkLXRhc2stbW9kYWwuanMnO1xuaW1wb3J0IHsgZGVsZXRlVGFzaywgcHJvamVjdE5hdiB9IGZyb20gJy4vc3RvcmUtcHJvamVjdHMuanMnO1xuXG5mdW5jdGlvbiBzaG93TGlzdEl0ZW0gKHRhc2ssIHRhc2tUaXRsZSwgdGFza0R1ZURhdGUsIHBhcmVudCwgcHJvamVjdCkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1saXN0LWl0ZW0nKTtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdC5pbmRleE9mKHRhc2spKTtcblxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2xpc3QtdGFzay10aXRsZScpO1xuICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcblxuICAgIGNvbnN0IGl0ZW1EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBpdGVtRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEdWVEYXRlO1xuXG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrLWJ1dHRvbicpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1EdWVEYXRlKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcblxuICAgIHNob3dUYXNrTW9kYWxPbkNsaWNrKGl0ZW1UaXRsZSk7XG4gICAgZGVsZXRlQVRhc2soZGVsZXRlVGFza0J1dHRvbik7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVBVGFzayAoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZGVsZXRlVGFzayhlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkLCBwcm9qZWN0TmF2LmFjdGl2ZVByb2plY3QpO1xuICAgICAgICBsaXN0QWxsSXRlbXMoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBsaXN0QWxsSXRlbXMgKHByb2plY3QgPSBwcm9qZWN0TmF2LmFjdGl2ZVByb2plY3QpIHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QnKTtcbiAgICBjdXJyZW50UHJvamVjdEluZGljYXRvci50ZXh0Q29udGVudCA9IHByb2plY3ROYXYuYWN0aXZlUHJvamVjdDtcblxuICAgIGNvbnN0IG9wZW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tdGFza3MnKTtcbiAgICBjb25zdCBjbG9zZWRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlZC10YXNrcycpO1xuXG4gICAgZnVuY3Rpb24gZGV0ZXJtaW5lU3RhdHVzICh0YXNrU3RhdHVzKSB7XG4gICAgICAgIGlmICh0YXNrU3RhdHVzID09PSAnb3BlbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvcGVuU2VjdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrU3RhdHVzID09PSAnY2xvc2VkJykge1xuICAgICAgICAgICAgcmV0dXJuIGNsb3NlZFNlY3Rpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckV4aXN0aW5nVGFza3MgKHBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhckV4aXN0aW5nVGFza3Mob3BlblNlY3Rpb24pO1xuICAgIGNsZWFyRXhpc3RpbmdUYXNrcyhjbG9zZWRTZWN0aW9uKTtcblxuICAgIGNvbnN0IHBhcnNlZFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpKTtcbiAgICBwYXJzZWRQcm9qZWN0LmZvckVhY2goaXRlbSA9PiBzaG93TGlzdEl0ZW0oaXRlbSwgaXRlbS50aXRsZSwgaXRlbS5kdWVEYXRlLCBkZXRlcm1pbmVTdGF0dXMoaXRlbS5zdGF0dXMpLCBwYXJzZWRQcm9qZWN0KSk7XG59XG5cbmV4cG9ydCB7XG4gICAgbGlzdEFsbEl0ZW1zLFxufVxuXG4iLCJpbXBvcnQgeyBzdG9yZU5ld1Rhc2ssIHByb2plY3ROYXYgfSBmcm9tIFwiLi9zdG9yZS1wcm9qZWN0c1wiO1xuaW1wb3J0IHsgbGlzdEFsbEl0ZW1zIH0gZnJvbSBcIi4vbG9hZC10YXNrLWxpc3RcIjtcblxubGV0IGN1cnJlbnRUYXNrID0ge1xuICAgIF9hY3RpdmVUYXNrOiAwLFxuXG4gICAgZ2V0IHRhc2tJRCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVUYXNrO1xuICAgIH0sXG5cbiAgICBzZXQgdGFza0lEICh0YXNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVUYXNrID0gdGFzaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tWYWx1ZXMgKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWR1ZS1kYXRlJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJpb3JpdHknKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1kcm9wZG93bicpLnZhbHVlO1xuICAgIFxuICAgIGxldCB0YXNrU3RhdHVzO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtdG9nZ2xlJyk7XG4gICAgaWYgKHN0YXR1cy5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIHRhc2tTdGF0dXMgPSAnY2xvc2VkJztcbiAgICB9IGVsc2UgaWYgKHN0YXR1cy5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICB0YXNrU3RhdHVzID0gJ29wZW4nO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIHRhc2tTdGF0dXMsXG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0RHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1kcm9wZG93bicpO1xuXG4gICAgaWYgKGRyb3Bkb3duLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICB3aGlsZSAoZHJvcGRvd24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZHJvcGRvd24ucmVtb3ZlQ2hpbGQoZHJvcGRvd24uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGlkZU1vZGFsICgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsLWJhY2tncm91bmQnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kdWUtZGF0ZScpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1ByaW9yaXR5JykudmFsdWUgPSAnbG93JztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcm9qZWN0LWRyb3Bkb3duJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLXRvZ2dsZScpLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW9rLWJ1dHRvbicpO1xuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXNhdmUtYnV0dG9uJykpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXQtc2F2ZS1idXR0b24nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByZWZpbGxUYXNrTW9kYWwgKGJ1dHRvbikge1xuICAgIGNvbnN0IHByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYXYuYWN0aXZlUHJvamVjdCkpO1xuICAgIGN1cnJlbnRUYXNrLnRhc2tJRCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkO1xuXG4gICAgY29uc3QgdGhpc1Rhc2sgPSBwcm9qZWN0W2N1cnJlbnRUYXNrLnRhc2tJRF07XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKS52YWx1ZSA9IHRoaXNUYXNrLnRpdGxlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJykudmFsdWUgPSB0aGlzVGFzay5kZXNjcmlwdGlvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kdWUtZGF0ZScpLnZhbHVlID0gdGhpc1Rhc2suZHVlRGF0ZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJpb3JpdHknKS52YWx1ZSA9IHRoaXNUYXNrLnByaW9yaXR5O1xuXG4gICAgaWYgKHRoaXNUYXNrLnN0YXR1cyA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cy10b2dnbGUnKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLXRvZ2dsZScpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBva0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW9rLWJ1dHRvbicpO1xuICAgIG9rQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtc2F2ZS1idXR0b24nKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFzayAocG9zaXRpb24pIHtcbiAgICAgICAgc3RvcmVOZXdUYXNrKGdldFRhc2tWYWx1ZXMoKS50aXRsZSwgZ2V0VGFza1ZhbHVlcygpLmRlc2NyaXB0aW9uLCBnZXRUYXNrVmFsdWVzKCkuZHVlRGF0ZSwgZ2V0VGFza1ZhbHVlcygpLnByaW9yaXR5LCBnZXRUYXNrVmFsdWVzKCkudGFza1N0YXR1cywgZ2V0VGFza1ZhbHVlcygpLnByb2plY3QsIHBvc2l0aW9uKTtcbiAgICAgICAgbGlzdEFsbEl0ZW1zKCk7XG4gICAgICAgIGhpZGVNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBhZGRCdXR0b25GdW5jdGlvbnMgKCkge1xuICAgIGNvbnN0IG9rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stb2stYnV0dG9uJyk7XG4gICAgb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChva0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtc2F2ZS1idXR0b24nKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN0b3JlTmV3VGFzayhnZXRUYXNrVmFsdWVzKCkudGl0bGUsIGdldFRhc2tWYWx1ZXMoKS5kZXNjcmlwdGlvbiwgZ2V0VGFza1ZhbHVlcygpLmR1ZURhdGUsIGdldFRhc2tWYWx1ZXMoKS5wcmlvcml0eSwgZ2V0VGFza1ZhbHVlcygpLnRhc2tTdGF0dXMsIGdldFRhc2tWYWx1ZXMoKS5wcm9qZWN0LCBudWxsKTtcbiAgICAgICAgICAgIGxpc3RBbGxJdGVtcygpO1xuICAgICAgICAgICAgaGlkZU1vZGFsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVUYXNrKGN1cnJlbnRUYXNrLnRhc2tJRCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2xvc2UtYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWwpO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza01vZGFsT25DbGljayAoYnV0dG9uKSB7IFxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QtdGFzay10aXRsZScpKSB7XG4gICAgICAgICAgICBwcmVmaWxsVGFza01vZGFsKGJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlUHJvamVjdERyb3Bkb3duKCk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwtYmFja2dyb3VuZCcpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gICAgc2hvd1Rhc2tNb2RhbE9uQ2xpY2ssXG4gICAgYWRkQnV0dG9uRnVuY3Rpb25zLFxufVxuXG5cbi8qIGFkZDpcbiogcmVxdWlyZSBjZXJ0YWluIGZpZWxkcyB0byBiZSBmaWxsZWQgYmVmb3JlIG9rIGNhbiBiZSBwcmVzc2VkXG4qIHdoaWNoIHByb2plY3QgaXMgZGlzcGxheWVkIGluIHRoZSBwcm9qZWN0IGRyb3Bkb3duXG4qIG1vdmluZyB0YXNrcyBhY3Jvc3MgcHJvamVjdHNcbiovIiwiaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gXCIuL3N0b3JlLXByb2plY3RzXCI7XG5pbXBvcnQgeyBnZXRBbmRQb3B1bGF0ZVByb2plY3RzIH0gZnJvbSBcIi4vcG9wdWxhdGUtc2lkZWJhclwiO1xuXG5mdW5jdGlvbiBhZGRCdXR0b25GdW5jdGlvbnMgKCkge1xuICAgIGNvbnN0IG9rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtb2stYnV0dG9uJyk7XG4gICAgb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgaGlkZU1vZGFsT25DbGljaygpO1xuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgZ2V0QW5kUG9wdWxhdGVQcm9qZWN0cygpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNsb3NlLWJ1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1vZGFsT25DbGljayk7XG59XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbE9uQ2xpY2sgKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwtYmFja2dyb3VuZCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBzaG93TmV3UHJvamVjdE1vZGFsT25DbGljayAoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRCdXR0b25GdW5jdGlvbnMoKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbC1iYWNrZ3JvdW5kJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgICBzaG93TmV3UHJvamVjdE1vZGFsT25DbGljayxcbn0iLCJpbXBvcnQgeyBsaXN0QWxsSXRlbXMgfSBmcm9tICcuL2xvYWQtdGFzay1saXN0LmpzJztcbmltcG9ydCB7IHByb2plY3ROYXYsIGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL3N0b3JlLXByb2plY3RzLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFRhYnMgKHByb2plY3QsIHBhcmVudCkge1xuICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFiJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGFiVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJvamVjdFRhYlRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICBwcm9qZWN0VGFiVGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gcHJvamVjdFRhYlRleHQudGV4dENvbnRlbnQ7XG4gICAgICAgIHByb2plY3ROYXYuYWN0aXZlUHJvamVjdCA9IHByb2plY3ROYW1lOyBcbiAgICAgICAgLy90aGUgYWJvdmUgaXMgcmVkdW5kYW50IGJjIHRoZSBuZXh0IGxpbmUgZG9lcyBpdCBmb3IgdXMuLi5cbiAgICAgICAgLy9idXQgSSBsaWtlIGhhdmluZyBpdCBoZXJlIGhhaGFcbiAgICAgICAgbGlzdEFsbEl0ZW1zKHByb2plY3ROYW1lKTtcbiAgICB9KVxuXG4gICAgcHJvamVjdFRhYi5hcHBlbmRDaGlsZChwcm9qZWN0VGFiVGV4dCk7XG4gICAgcHJvamVjdFRhYi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICBkZWxldGVQcm9qZWN0T25DbGljayhkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGFiKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdE9uQ2xpY2sgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgbGlzdEFsbEl0ZW1zKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0QW5kUG9wdWxhdGVQcm9qZWN0cyAoKSB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTtcblxuICAgIGlmIChwcm9qZWN0c0xpc3QuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0c0xpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RzTGlzdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVByb2plY3RUYWJzKGxvY2FsU3RvcmFnZS5rZXkoaSksIHByb2plY3RzTGlzdCk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGdldEFuZFBvcHVsYXRlUHJvamVjdHMsXG59OyIsIi8vICBjcmVhdGUgYW5kIG1hbmFnZSBQcm9qZWN0IG9iamVjdHMgYW5kIFRhc2sgb2JqZWN0c1xuXG5mdW5jdGlvbiBzdGFydFN0b3JhZ2UgKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RlZmF1bHQgUHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KG5ldyBBcnJheSgpKSk7XG4gICAgfVxufVxuXG4vKiBcbiAgICBmb3JtYXQ6XG4gICAgbG9jYWxzdG9yYWdlID0ge1xuICAgICAgICAnZGVmYXVsdCBwcm9qZWN0JzogXG4gICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ2ZpcnN0IHRhc2snLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnanVzdCBzaG93aW5nIGhvdyBpdCB3b3JrcycsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogJzIwMjMtMDktMzAnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdvcGVuJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9XG5cbiAgICBuZXcgUHJvamVjdHMgYXJlIGFkZGVkIHRvIGxvY2FsU3RvcmFnZSBhcyBrL3YgcGFpcnMsXG4gICAgd2hlcmUgdGhlIG5hbWUgb2YgdGhlIFByb2plY3QgaXMgdGhlIGtleSxcbiAgICBhbmQgYSBzdHJpbmdpZmllZCBBcnJheSBpcyB0aGUgdmFsdWU7XG4gICAgVGhlIEFycmF5IHdpbGwgY29udGFpbiBvYmplY3RzIHJlcHJlc2VudGluZyBUYXNrcyB3aXRoXG4gICAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSBhbmQgc3RhdHVzIGF0dHJpYnV0ZXMuXG4qL1xuXG4vLyAgcHJvamVjdCBtYW5hZ2VtZW50IGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0IChwcm9qZWN0TmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShuZXcgQXJyYXkoKSkpO1xufVxuXG5mdW5jdGlvbiByZW5hbWVQcm9qZWN0IChvbGRQcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvbGRQcm9qZWN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ob2xkUHJvamVjdE5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld1Byb2plY3ROYW1lLCBwcm9qZWN0VGFza3MpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0IChwcm9qZWN0TmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3ROYW1lKTtcbn07XG5cbi8vICB0YXNrIG1hbmFnZW1lbnQgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIHN0b3JlTmV3VGFzayAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0LCBwb3NpdGlvbikge1xuICAgIGxldCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdCkpO1xuICAgIGNyZWF0ZUFuZEFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0RGF0YSwgcG9zaXRpb24pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QsIEpTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEFkZFRhc2sgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCwgcG9zaXRpb24pIHtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMgfTtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgcHJvamVjdC5zcGxpY2UocG9zaXRpb24sIDEsIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzKSk7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICBwcm9qZWN0LnB1c2goY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sgKHRhc2tJbmRleCwgcHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdCkpO1xuICAgIHByb2plY3RUYXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LCBKU09OLnN0cmluZ2lmeShwcm9qZWN0VGFza3MpKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVGFza0NvbXBsZXRlZFN0YXR1cyAodGFza0luZGV4LCBwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG4gICAgY29uc3QgdGFzayA9IHByb2plY3RUYXNrc1t0YXNrSW5kZXhdO1xuXG4gICAgaWYgKHRhc2tbXCJzdGF0dXNcIl0gPT09ICdvcGVuJykge1xuICAgICAgICB0YXNrW1wic3RhdHVzXCJdID0gJ2Nsb3NlZCc7XG4gICAgfSBlbHNlIGlmICh0YXNrW1wic3RhdHVzXCJdID09PSAnY2xvc2VkJykge1xuICAgICAgICB0YXNrW1wic3RhdHVzXCJdID0gJ29wZW4nO1xuICAgIH1cbn1cblxubGV0IHByb2plY3ROYXYgPSB7XG4gICAgX2FjdGl2ZVByb2plY3Q6ICdEZWZhdWx0IFByb2plY3QnLFxuXG4gICAgZ2V0IGFjdGl2ZVByb2plY3QgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlUHJvamVjdDtcbiAgICB9LFxuXG4gICAgc2V0IGFjdGl2ZVByb2plY3QgKG5ld1Byb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBzdGFydFN0b3JhZ2UsXG4gICAgY3JlYXRlTmV3UHJvamVjdCxcbiAgICByZW5hbWVQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgc3RvcmVOZXdUYXNrLFxuICAgIGNyZWF0ZUFuZEFkZFRhc2ssXG4gICAgZGVsZXRlVGFzayxcbiAgICB0b2dnbGVUYXNrQ29tcGxldGVkU3RhdHVzLFxuICAgIHByb2plY3ROYXYsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSAnLi9sb2FkLXBhZ2UuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmxvYWRQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9