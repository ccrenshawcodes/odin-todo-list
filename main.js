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
    (0,_store_projects_js__WEBPACK_IMPORTED_MODULE_2__.startStorage)();
    const newTaskButton = document.querySelector('.new-task');
    const newProjectButton = document.querySelector('.new-project');
    (0,_load_task_modal_js__WEBPACK_IMPORTED_MODULE_1__.showTaskModalOnClick)(newTaskButton);
    (0,_load_task_modal_js__WEBPACK_IMPORTED_MODULE_1__.addButtonFunctions)();
    
    (0,_new_project_modal_js__WEBPACK_IMPORTED_MODULE_3__.showNewProjectModalOnClick)(newProjectButton);

    (0,_populate_sidebar_js__WEBPACK_IMPORTED_MODULE_4__.getAndPopulateProjects)();
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
    window.addEventListener('load', () => {
        if (localStorage.length <= 0) {
            localStorage.setItem('Default Project', JSON.stringify(new Array()));
        }
    })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSCxJQUFJLGtCQUFrQjtBQUN4STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLG1CQUFtQixXQUFXLFlBQVksV0FBVyxNQUFNLGlCQUFpQixXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLHdCQUF3QixhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSx3QkFBd0IsYUFBYSxP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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2pHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUNyQjs7QUFFckIsdURBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9sb2FkLXRhc2stbGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9sb2FkLXRhc2stbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbmV3LXByb2plY3QtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcG9wdWxhdGUtc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdG9yZS1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdvcmsrU2Fuczp3Z2h0QDEwMDszMDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzUzNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG59XG5cbi8qIGp1c3QgZm9yIHZpc2liaWxpdHkgZm9yIHJpZ2h0IG5vdyAqL1xuLmNvbnRlbnQgPiAqLCAubWFpbi1kaXYgPiAqIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLm1haW4tZGl2IHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4udG9wLXJpYmJvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLyogbWFpbiBhcmVhICh0YXNrIGxpc3QpICovXG5cbi5jdXJyZW50LXByb2plY3Qge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50YXNrLWRpc3BsYXkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50YXNrLWRpc3BsYXkgPiBoMyB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLnRhc2stbGlzdC1pdGVtIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogN2ZyIDNmciAxZnI7XG59XG5cbi50YXNrLWxpc3QtaXRlbSA+ICoge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi50YXNrLWxpc3QtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubGlzdC10YXNrLXRpdGxlOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZWxldGUtdGFzay1idXR0b24ge1xuICAgIHBhZGRpbmc6IDAgMWVtO1xufVxuXG4uZGVsZXRlLXRhc2stYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU2lkZWJhciBzdHlsZXMgKi9cbi5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOGZyIDFmcjtcbn1cblxuLnByb2plY3RzLWxpc3QgeyAvKmNvbnRhaW5lciBmb3IgcHJvamVjdCB0YWJzKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5wcm9qZWN0LXRhYiB7IC8qdGhlIHRhYnMgdGhlbXNlbHZlcyovXG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qZWN0LXRhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG59XG5cbi5wcm9qZWN0LXRhYiA+ICoge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMgPiBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmFjdGlvbi1idXR0b25zID4gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIHRhc2sgbW9kYWwgc3R5bGVzICovXG5cbi50YXNrLW1vZGFsLWJhY2tncm91bmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xufVxuXG4udGFzay1tb2RhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDclIGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XG59XG5cbi50YXNrLW1vZGFsID4gKiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbn1cblxuLnRhc2stbW9kYWwtaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFzay1tb2RhbC1oZWFkZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnRhc2stdGl0bGUge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4udGFzay1jbG9zZS1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4udGFzay1tYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtZXZlbmx5O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnRhc2stbWFpbi1jb250ZW50ID4gKiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDEwZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG4uc3RhdHVzLXRvZ2dsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwIDJlbTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG59XG5cbi5zdGF0dXMtdG9nZ2xlOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLXNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1jb2xvcjogMXB4IHNvbGlkIHJlZDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi50YXNrLXNpZGViYXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnRhc2stbW9kYWwtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufVxuXG4udGFzay1tb2RhbC1mb290ZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnRhc2stb2stYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGJlYTM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDAuN2VtIDFlbTtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4udGFzay1vay1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCAjNjM2MzYzO1xufVxuXG4vKiBuZXcgcHJvamVjdCBtb2RhbCAqL1xuXG4ucHJvamVjdC1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLm5ldy1wcm9qZWN0LW1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogMTUlIGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC1tb2RhbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qZWN0LW1vZGFsLWhlYWRlciA+IGgzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5wcm9qZWN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzJmMzUzNjtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5wcm9qZWN0LW9rLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiZWEzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAwLjdlbSAxZW07XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLnByb2plY3Qtb2stYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggIzYzNjM2Mztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBLHNDQUFzQztBQUN0QztJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLDBCQUEwQjs7QUFFMUI7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBLGlCQUFpQiw2QkFBNkI7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQjtJ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SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Xb3JrK1NhbnM6d2dodEAxMDA7MzAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzUzNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLyoganVzdCBmb3IgdmlzaWJpbGl0eSBmb3IgcmlnaHQgbm93ICovXFxuLmNvbnRlbnQgPiAqLCAubWFpbi1kaXYgPiAqIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5tYWluLWRpdiB7XFxuICAgIGhlaWdodDogNjAwcHg7XFxufVxcblxcbi50b3AtcmliYm9uIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLyogbWFpbiBhcmVhICh0YXNrIGxpc3QpICovXFxuXFxuLmN1cnJlbnQtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrLWRpc3BsYXkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFzay1kaXNwbGF5ID4gaDMge1xcbiAgICBtYXJnaW46IDFlbSAwO1xcbn1cXG5cXG4udGFzay1saXN0LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3ZnIgM2ZyIDFmcjtcXG59XFxuXFxuLnRhc2stbGlzdC1pdGVtID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi50YXNrLWxpc3QtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5saXN0LXRhc2stdGl0bGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtdGFzay1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwIDFlbTtcXG59XFxuXFxuLmRlbGV0ZS10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU2lkZWJhciBzdHlsZXMgKi9cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOGZyIDFmcjtcXG59XFxuXFxuLnByb2plY3RzLWxpc3QgeyAvKmNvbnRhaW5lciBmb3IgcHJvamVjdCB0YWJzKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxZW07XFxufVxcblxcbi5wcm9qZWN0LXRhYiB7IC8qdGhlIHRhYnMgdGhlbXNlbHZlcyovXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0LXRhYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4ucHJvamVjdC10YWIgPiAqIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aW9uLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5hY3Rpb24tYnV0dG9ucyA+IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hY3Rpb24tYnV0dG9ucyA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogdGFzayBtb2RhbCBzdHlsZXMgKi9cXG5cXG4udGFzay1tb2RhbC1iYWNrZ3JvdW5kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbi50YXNrLW1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiA3JSBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XFxufVxcblxcbi50YXNrLW1vZGFsID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxufVxcblxcbi50YXNrLW1vZGFsLWhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1tb2RhbC1oZWFkZXIgPiAqIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWFyZ2luOiAxZW07XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLnRhc2stY2xvc2UtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udGFzay1tYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtZXZlbmx5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50YXNrLW1haW4tY29udGVudCA+ICoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtYXJnaW46IDFlbTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDEwZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5zdGF0dXMtdG9nZ2xlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAwIDJlbTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnN0YXR1cy10b2dnbGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1jb2xvcjogMXB4IHNvbGlkIHJlZDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udGFzay1zaWRlYmFyID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4udGFzay1tb2RhbC1mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi50YXNrLW1vZGFsLWZvb3RlciA+ICoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtYXJnaW46IDFlbTtcXG59XFxuXFxuLnRhc2stb2stYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGJlYTM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMC43ZW0gMWVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4udGFzay1vay1idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggIzYzNjM2MztcXG59XFxuXFxuLyogbmV3IHByb2plY3QgbW9kYWwgKi9cXG5cXG4ucHJvamVjdC1tb2RhbC1iYWNrZ3JvdW5kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbi5uZXctcHJvamVjdC1tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3QtbW9kYWwtaGVhZGVyID4gaDMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1jbG9zZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyZjM1MzY7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnByb2plY3Qtb2stYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGJlYTM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMC43ZW0gMWVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ucHJvamVjdC1vay1idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggIzYzNjM2MztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGxpc3RBbGxJdGVtcyB9IGZyb20gJy4vbG9hZC10YXNrLWxpc3QuanMnO1xuaW1wb3J0IHsgYWRkQnV0dG9uRnVuY3Rpb25zLCBzaG93VGFza01vZGFsT25DbGljayB9IGZyb20gJy4vbG9hZC10YXNrLW1vZGFsLmpzJztcbmltcG9ydCB7IHN0YXJ0U3RvcmFnZSB9IGZyb20gJy4vc3RvcmUtcHJvamVjdHMuanMnO1xuaW1wb3J0IHsgc2hvd05ld1Byb2plY3RNb2RhbE9uQ2xpY2sgfSBmcm9tICcuL25ldy1wcm9qZWN0LW1vZGFsLmpzJztcbmltcG9ydCB7IGdldEFuZFBvcHVsYXRlUHJvamVjdHMgfSBmcm9tICcuL3BvcHVsYXRlLXNpZGViYXIuanMnO1xuXG5mdW5jdGlvbiBsb2FkUGFnZSAoKSB7XG4gICAgc3RhcnRTdG9yYWdlKCk7XG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKTtcbiAgICBzaG93VGFza01vZGFsT25DbGljayhuZXdUYXNrQnV0dG9uKTtcbiAgICBhZGRCdXR0b25GdW5jdGlvbnMoKTtcbiAgICBcbiAgICBzaG93TmV3UHJvamVjdE1vZGFsT25DbGljayhuZXdQcm9qZWN0QnV0dG9uKTtcblxuICAgIGdldEFuZFBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICBsaXN0QWxsSXRlbXMoKTtcblxufVxuXG5leHBvcnQge1xuICAgIGxvYWRQYWdlLFxufTsiLCJpbXBvcnQgeyBzaG93VGFza01vZGFsT25DbGljayB9IGZyb20gJy4vbG9hZC10YXNrLW1vZGFsLmpzJztcbmltcG9ydCB7IGRlbGV0ZVRhc2ssIHByb2plY3ROYXYgfSBmcm9tICcuL3N0b3JlLXByb2plY3RzLmpzJztcblxuZnVuY3Rpb24gc2hvd0xpc3RJdGVtICh0YXNrLCB0YXNrVGl0bGUsIHRhc2tEdWVEYXRlLCBwYXJlbnQsIHByb2plY3QpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdC1pdGVtJyk7XG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3QuaW5kZXhPZih0YXNrKSk7XG5cbiAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdsaXN0LXRhc2stdGl0bGUnKTtcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XG5cbiAgICBjb25zdCBpdGVtRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaXRlbUR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrRHVlRGF0ZTtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzay1idXR0b24nKTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtRHVlRGF0ZSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG5cbiAgICBzaG93VGFza01vZGFsT25DbGljayhpdGVtVGl0bGUpO1xuICAgIGRlbGV0ZUFUYXNrKGRlbGV0ZVRhc2tCdXR0b24pO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlQVRhc2sgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRlbGV0ZVRhc2soZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCwgcHJvamVjdE5hdi5hY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgbGlzdEFsbEl0ZW1zKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbGlzdEFsbEl0ZW1zIChwcm9qZWN0ID0gcHJvamVjdE5hdi5hY3RpdmVQcm9qZWN0KSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgY3VycmVudFByb2plY3RJbmRpY2F0b3IudGV4dENvbnRlbnQgPSBwcm9qZWN0TmF2LmFjdGl2ZVByb2plY3Q7XG5cbiAgICBjb25zdCBvcGVuU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXRhc2tzJyk7XG4gICAgY29uc3QgY2xvc2VkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZWQtdGFza3MnKTtcblxuICAgIGZ1bmN0aW9uIGRldGVybWluZVN0YXR1cyAodGFza1N0YXR1cykge1xuICAgICAgICBpZiAodGFza1N0YXR1cyA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gb3BlblNlY3Rpb247XG4gICAgICAgIH0gZWxzZSBpZiAodGFza1N0YXR1cyA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBjbG9zZWRTZWN0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJFeGlzdGluZ1Rhc2tzIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXJFeGlzdGluZ1Rhc2tzKG9wZW5TZWN0aW9uKTtcbiAgICBjbGVhckV4aXN0aW5nVGFza3MoY2xvc2VkU2VjdGlvbik7XG5cbiAgICBjb25zdCBwYXJzZWRQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG4gICAgcGFyc2VkUHJvamVjdC5mb3JFYWNoKGl0ZW0gPT4gc2hvd0xpc3RJdGVtKGl0ZW0sIGl0ZW0udGl0bGUsIGl0ZW0uZHVlRGF0ZSwgZGV0ZXJtaW5lU3RhdHVzKGl0ZW0uc3RhdHVzKSwgcGFyc2VkUHJvamVjdCkpO1xufVxuXG5leHBvcnQge1xuICAgIGxpc3RBbGxJdGVtcyxcbn1cblxuIiwiaW1wb3J0IHsgc3RvcmVOZXdUYXNrLCBwcm9qZWN0TmF2IH0gZnJvbSBcIi4vc3RvcmUtcHJvamVjdHNcIjtcbmltcG9ydCB7IGxpc3RBbGxJdGVtcyB9IGZyb20gXCIuL2xvYWQtdGFzay1saXN0XCI7XG5cbmxldCBjdXJyZW50VGFzayA9IHtcbiAgICBfYWN0aXZlVGFzazogMCxcblxuICAgIGdldCB0YXNrSUQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGFzaztcbiAgICB9LFxuXG4gICAgc2V0IHRhc2tJRCAodGFzaykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGFzayA9IHRhc2s7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrVmFsdWVzICgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByb2plY3QtZHJvcGRvd24nKS52YWx1ZTtcbiAgICBcbiAgICBsZXQgdGFza1N0YXR1cztcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLXRvZ2dsZScpO1xuICAgIGlmIChzdGF0dXMuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0YXNrU3RhdHVzID0gJ2Nsb3NlZCc7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGFza1N0YXR1cyA9ICdvcGVuJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICB0YXNrU3RhdHVzLFxuICAgIH1cbiAgICBcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdERyb3Bkb3duICgpIHtcbiAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByb2plY3QtZHJvcGRvd24nKTtcblxuICAgIGlmIChkcm9wZG93bi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgd2hpbGUgKGRyb3Bkb3duLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnJlbW92ZUNoaWxkKGRyb3Bkb3duLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblxuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbCAoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbC1iYWNrZ3JvdW5kJyk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZHVlLWRhdGUnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcmlvcml0eScpLnZhbHVlID0gJ2xvdyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1kcm9wZG93bicpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cy10b2dnbGUnKS5jaGVja2VkID0gZmFsc2U7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1vay1idXR0b24nKTtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1zYXZlLWJ1dHRvbicpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0LXNhdmUtYnV0dG9uJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcmVmaWxsVGFza01vZGFsIChidXR0b24pIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmF2LmFjdGl2ZVByb2plY3QpKTtcbiAgICBjdXJyZW50VGFzay50YXNrSUQgPSBidXR0b24ucGFyZW50RWxlbWVudC5pZDtcblxuICAgIGNvbnN0IHRoaXNUYXNrID0gcHJvamVjdFtjdXJyZW50VGFzay50YXNrSURdO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJykudmFsdWUgPSB0aGlzVGFzay50aXRsZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpLnZhbHVlID0gdGhpc1Rhc2suZGVzY3JpcHRpb247XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZHVlLWRhdGUnKS52YWx1ZSA9IHRoaXNUYXNrLmR1ZURhdGU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1ByaW9yaXR5JykudmFsdWUgPSB0aGlzVGFzay5wcmlvcml0eTtcblxuICAgIGlmICh0aGlzVGFzay5zdGF0dXMgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtdG9nZ2xlJykuY2hlY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cy10b2dnbGUnKS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1vay1idXR0b24nKTtcbiAgICBva0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXNhdmUtYnV0dG9uJyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2sgKHBvc2l0aW9uKSB7XG4gICAgICAgIHN0b3JlTmV3VGFzayhnZXRUYXNrVmFsdWVzKCkudGl0bGUsIGdldFRhc2tWYWx1ZXMoKS5kZXNjcmlwdGlvbiwgZ2V0VGFza1ZhbHVlcygpLmR1ZURhdGUsIGdldFRhc2tWYWx1ZXMoKS5wcmlvcml0eSwgZ2V0VGFza1ZhbHVlcygpLnRhc2tTdGF0dXMsIGdldFRhc2tWYWx1ZXMoKS5wcm9qZWN0LCBwb3NpdGlvbik7XG4gICAgICAgIGxpc3RBbGxJdGVtcygpO1xuICAgICAgICBoaWRlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gYWRkQnV0dG9uRnVuY3Rpb25zICgpIHtcbiAgICBjb25zdCBva0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW9rLWJ1dHRvbicpO1xuICAgIG9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAob2tCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXNhdmUtYnV0dG9uJykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdG9yZU5ld1Rhc2soZ2V0VGFza1ZhbHVlcygpLnRpdGxlLCBnZXRUYXNrVmFsdWVzKCkuZGVzY3JpcHRpb24sIGdldFRhc2tWYWx1ZXMoKS5kdWVEYXRlLCBnZXRUYXNrVmFsdWVzKCkucHJpb3JpdHksIGdldFRhc2tWYWx1ZXMoKS50YXNrU3RhdHVzLCBnZXRUYXNrVmFsdWVzKCkucHJvamVjdCwgbnVsbCk7XG4gICAgICAgICAgICBsaXN0QWxsSXRlbXMoKTtcbiAgICAgICAgICAgIGhpZGVNb2RhbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlVGFzayhjdXJyZW50VGFzay50YXNrSUQpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNsb3NlLWJ1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1vZGFsKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tNb2RhbE9uQ2xpY2sgKGJ1dHRvbikgeyBcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdsaXN0LXRhc2stdGl0bGUnKSkge1xuICAgICAgICAgICAgcHJlZmlsbFRhc2tNb2RhbChidXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVByb2plY3REcm9wZG93bigpO1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsLWJhY2tncm91bmQnKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG59O1xuXG5leHBvcnQge1xuICAgIHNob3dUYXNrTW9kYWxPbkNsaWNrLFxuICAgIGFkZEJ1dHRvbkZ1bmN0aW9ucyxcbn1cblxuXG4vKiBhZGQ6XG4qIHJlcXVpcmUgY2VydGFpbiBmaWVsZHMgdG8gYmUgZmlsbGVkIGJlZm9yZSBvayBjYW4gYmUgcHJlc3NlZFxuKiB3aGljaCBwcm9qZWN0IGlzIGRpc3BsYXllZCBpbiB0aGUgcHJvamVjdCBkcm9wZG93blxuKiBtb3ZpbmcgdGFza3MgYWNyb3NzIHByb2plY3RzXG4qLyIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tIFwiLi9zdG9yZS1wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZ2V0QW5kUG9wdWxhdGVQcm9qZWN0cyB9IGZyb20gXCIuL3BvcHVsYXRlLXNpZGViYXJcIjtcblxuZnVuY3Rpb24gYWRkQnV0dG9uRnVuY3Rpb25zICgpIHtcbiAgICBjb25zdCBva0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW9rLWJ1dHRvbicpO1xuICAgIG9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJykudmFsdWU7XG4gICAgICAgIGhpZGVNb2RhbE9uQ2xpY2soKTtcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdCh0aXRsZSk7XG4gICAgICAgIGdldEFuZFBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICB9KVxuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jbG9zZS1idXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVNb2RhbE9uQ2xpY2spO1xufVxuXG5mdW5jdGlvbiBoaWRlTW9kYWxPbkNsaWNrICgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsLWJhY2tncm91bmQnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJykudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gc2hvd05ld1Byb2plY3RNb2RhbE9uQ2xpY2sgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkQnV0dG9uRnVuY3Rpb25zKCk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwtYmFja2dyb3VuZCcpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gICAgc2hvd05ld1Byb2plY3RNb2RhbE9uQ2xpY2ssXG59IiwiaW1wb3J0IHsgbGlzdEFsbEl0ZW1zIH0gZnJvbSAnLi9sb2FkLXRhc2stbGlzdC5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0TmF2LCBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9zdG9yZS1wcm9qZWN0cy5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUYWJzIChwcm9qZWN0LCBwYXJlbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYicpO1xuXG4gICAgY29uc3QgcHJvamVjdFRhYlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHByb2plY3RUYWJUZXh0LnRleHRDb250ZW50ID0gcHJvamVjdDtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gICAgcHJvamVjdFRhYlRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3RUYWJUZXh0LnRleHRDb250ZW50O1xuICAgICAgICBwcm9qZWN0TmF2LmFjdGl2ZVByb2plY3QgPSBwcm9qZWN0TmFtZTsgXG4gICAgICAgIC8vdGhlIGFib3ZlIGlzIHJlZHVuZGFudCBiYyB0aGUgbmV4dCBsaW5lIGRvZXMgaXQgZm9yIHVzLi4uXG4gICAgICAgIC8vYnV0IEkgbGlrZSBoYXZpbmcgaXQgaGVyZSBoYWhhXG4gICAgICAgIGxpc3RBbGxJdGVtcyhwcm9qZWN0TmFtZSk7XG4gICAgfSlcblxuICAgIHByb2plY3RUYWIuYXBwZW5kQ2hpbGQocHJvamVjdFRhYlRleHQpO1xuICAgIHByb2plY3RUYWIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgZGVsZXRlUHJvamVjdE9uQ2xpY2soZGVsZXRlUHJvamVjdEJ1dHRvbik7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RPbkNsaWNrIChidXR0b24pIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGxpc3RBbGxJdGVtcygpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldEFuZFBvcHVsYXRlUHJvamVjdHMgKCkge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XG5cbiAgICBpZiAocHJvamVjdHNMaXN0Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICB3aGlsZSAocHJvamVjdHNMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0c0xpc3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjcmVhdGVQcm9qZWN0VGFicyhsb2NhbFN0b3JhZ2Uua2V5KGkpLCBwcm9qZWN0c0xpc3QpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBnZXRBbmRQb3B1bGF0ZVByb2plY3RzLFxufTsiLCIvLyAgY3JlYXRlIGFuZCBtYW5hZ2UgUHJvamVjdCBvYmplY3RzIGFuZCBUYXNrIG9iamVjdHNcblxuZnVuY3Rpb24gc3RhcnRTdG9yYWdlICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RlZmF1bHQgUHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KG5ldyBBcnJheSgpKSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbi8qIFxuICAgIGZvcm1hdDpcbiAgICBsb2NhbHN0b3JhZ2UgPSB7XG4gICAgICAgICdkZWZhdWx0IHByb2plY3QnOiBcbiAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnZmlyc3QgdGFzaycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdqdXN0IHNob3dpbmcgaG93IGl0IHdvcmtzJyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnMjAyMy0wOS0zMCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdub3JtYWwnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ29wZW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH1cblxuICAgIG5ldyBQcm9qZWN0cyBhcmUgYWRkZWQgdG8gbG9jYWxTdG9yYWdlIGFzIGsvdiBwYWlycyxcbiAgICB3aGVyZSB0aGUgbmFtZSBvZiB0aGUgUHJvamVjdCBpcyB0aGUga2V5LFxuICAgIGFuZCBhIHN0cmluZ2lmaWVkIEFycmF5IGlzIHRoZSB2YWx1ZTtcbiAgICBUaGUgQXJyYXkgd2lsbCBjb250YWluIG9iamVjdHMgcmVwcmVzZW50aW5nIFRhc2tzIHdpdGhcbiAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IGFuZCBzdGF0dXMgYXR0cmlidXRlcy5cbiovXG5cbi8vICBwcm9qZWN0IG1hbmFnZW1lbnQgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QgKHByb2plY3ROYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KG5ldyBBcnJheSgpKSk7XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVByb2plY3QgKG9sZFByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG9sZFByb2plY3ROYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShvbGRQcm9qZWN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3UHJvamVjdE5hbWUsIHByb2plY3RUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKHByb2plY3ROYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdE5hbWUpO1xufTtcblxuLy8gIHRhc2sgbWFuYWdlbWVudCBmdW5jdGlvbnNcblxuZnVuY3Rpb24gc3RvcmVOZXdUYXNrICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QsIHBvc2l0aW9uKSB7XG4gICAgbGV0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG4gICAgY3JlYXRlQW5kQWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3REYXRhLCBwb3NpdGlvbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kQWRkVGFzayAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0LCBwb3NpdGlvbikge1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cyB9O1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBwcm9qZWN0LnNwbGljZShwb3NpdGlvbiwgMSwgY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpKTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHByb2plY3QucHVzaChjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayAodGFza0luZGV4LCBwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG4gICAgcHJvamVjdFRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QsIEpTT04uc3RyaW5naWZ5KHByb2plY3RUYXNrcykpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrQ29tcGxldGVkU3RhdHVzICh0YXNrSW5kZXgsIHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpKTtcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdFRhc2tzW3Rhc2tJbmRleF07XG5cbiAgICBpZiAodGFza1tcInN0YXR1c1wiXSA9PT0gJ29wZW4nKSB7XG4gICAgICAgIHRhc2tbXCJzdGF0dXNcIl0gPSAnY2xvc2VkJztcbiAgICB9IGVsc2UgaWYgKHRhc2tbXCJzdGF0dXNcIl0gPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHRhc2tbXCJzdGF0dXNcIl0gPSAnb3Blbic7XG4gICAgfVxufVxuXG5sZXQgcHJvamVjdE5hdiA9IHtcbiAgICBfYWN0aXZlUHJvamVjdDogJ0RlZmF1bHQgUHJvamVjdCcsXG5cbiAgICBnZXQgYWN0aXZlUHJvamVjdCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVQcm9qZWN0O1xuICAgIH0sXG5cbiAgICBzZXQgYWN0aXZlUHJvamVjdCAobmV3UHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlUHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIHN0YXJ0U3RvcmFnZSxcbiAgICBjcmVhdGVOZXdQcm9qZWN0LFxuICAgIHJlbmFtZVByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBzdG9yZU5ld1Rhc2ssXG4gICAgY3JlYXRlQW5kQWRkVGFzayxcbiAgICBkZWxldGVUYXNrLFxuICAgIHRvZ2dsZVRhc2tDb21wbGV0ZWRTdGF0dXMsXG4gICAgcHJvamVjdE5hdixcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tICcuL2xvYWQtcGFnZS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubG9hZFBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=