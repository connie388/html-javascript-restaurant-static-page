/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function loadHTML(pageURL, id) {\r\n  fetch(pageURL)\r\n    .then((response) => response.text())\r\n    .then((text) => (document.getElementById(\"content\").innerHTML = text));\r\n\r\n  const collection = document.getElementsByClassName(\"navitem\");\r\n  for (let i = 0; i < collection.length; i++) {\r\n    collection[i].className = \"navitem\";\r\n  }\r\n  var x = document.getElementById(id);\r\n  x.className += \" active\";\r\n}\r\n\r\nfunction displayMenu() {\r\n  var x = document.getElementById(\"myTopnav\");\r\n  if (x.className === \"topnav\") {\r\n    x.className += \" responsive\";\r\n  } else {\r\n    x.className = \"topnav\";\r\n  }\r\n}\r\n\r\n// reference https://getbootstrap.com/docs/5.2/components/collapse/#:~:text=Just%20add%20data%2Dbs%2Dtoggle,one%20or%20more%20collapsible%20elements\r\nfunction viewAllMenu(viewAll) {\r\n  const isExpanded = document\r\n    .getElementById(\"collapseBreakfastButton\")\r\n    .getAttribute(\"aria-expanded\");\r\n\r\n  if (isExpanded !== viewAll) {\r\n    const breakfastElement = document.getElementById(\"collapseBreakfast\");\r\n    new bootstrap.Collapse(breakfastElement);\r\n  }\r\n\r\n  const isSnackExpanded = document\r\n    .getElementById(\"collapseSnackButton\")\r\n    .getAttribute(\"aria-expanded\");\r\n\r\n  if (isSnackExpanded !== viewAll) {\r\n    const snackElement = document.getElementById(\"collapseSnack\");\r\n    new bootstrap.Collapse(snackElement);\r\n  }\r\n  // the following codes toggle all\r\n  // const collapseElementList = document.querySelectorAll(\".collapse\");\r\n  // const collapseList = [...collapseElementList].map(\r\n  //   (collapseEl) => new bootstrap.Collapse(collapseEl)\r\n  // );\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;