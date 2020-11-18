/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nconst COLOR = \"#808080\";\nconst RADIUS = 30;\nlet speed = 5;\n\n\nfunction Asteroid(game) {\n    MovingObject.call(this, {\n        color: COLOR,\n        radius: RADIUS,\n        vel: Util.randomVec(speed),\n        pos: [Math.random() * window.innerWidth, Math.random() * window.innerHeight],\n        game: game\n    });\n};\n\nUtil.inherits(Asteroid, MovingObject);\nmodule.exports = Asteroid;\n\n// function Shape(color) {\n//     this.color = color;\n// }\n// ​\n// Shape.prototype.sayHello = function() {\n//     console.log('hello');\n// }\n// ​\n// Shape.prototype.sayGoodbye = function() {\n//     console.log('bye');\n// }\n// ​\n// function Rectangle(color, width, length) {\n//     Shape.call(this, color);\n//     this.width = width;\n//     this.length = length;\n// }\n// ​\n// Rectangle.prototype = {\n//     ...Shape.prototype,\n//     constructor: Rectangle\n// };\n// ​\n// ​\n// Rectangle.prototype.area = function() {\n//     return this.width * this.height;\n// }\n// ​\n// function Circle(color, radius) {\n//     Shape.call(color);\n//     this.radius = radius;\n// }\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 67:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game(){\n   this.DIM_X = window.innerWidth;\n   this.DIM_Y = window.innerHeight;\n   this.NUM_ASTEROIDS = 4;\n   this.asteroids = [];\n   this.addAsteroids();\n   this.randomPosition();\n}\n\nGame.prototype.addAsteroids = function(){\n    while(this.asteroids.length !== this.NUM_ASTEROIDS){\n        this.asteroids.push(new Asteroid(this));\n    }\n    return this.asteroids;\n}\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    this.allObjects.forEach(asteroid => asteroid.draw(ctx));\n}\n\nGame.prototype.moveObjects = function(){\n    this.allObjects.forEach((asteroid) => asteroid.move());\n}\n\nGame.prototype.wrap = function(pos) {\n    if (pos[0] > this.DIM_X) pos[0] = 0;\n    if (pos[1] > this.DIM_Y) pos[1] = 0;\n    if (pos[0] < 0) pos[0] = this.DIM_X;\n    if (pos[1] < 0) pos[1] = this.DIM_Y;\n}\n\nGame.prototype.remove = function(asteroidIdx){\n    this.asteroids.splice(asteroidIdx, 1);\n}\n\nGame.prototype.checkCollisions = function() {\n    let objects = this.allObjects();\n    for(let i = 0; i < objects.length; i++) {\n        for(let j = i + 1; j < objects.length; j++) {\n            if (objects[i].isCollidedWith(objects[j])) {\n                this.remove(j); \n                this.remove(i);\n                // add a condition for if a ship collides with an asteroid\n            }\n        }\n    }\n    //this.asteroids.forEach((asteroid) => )\n}\n\nGame.prototype.step = function() {\n    this.checkCollisions();\n    this.moveObjects();\n}\n\nGame.prototype.randomPosition = function() {\n    this.ship = new Ship();\n}\n\nGame.prototype.allObjects = function() {\n    return this.asteroids.concat([this.ship]);\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nconst GameView = function(ctx) {\n    this.ctx = ctx;\n    this.game = new Game();\n}\n\nGameView.prototype.start = function() {\n    setInterval(() => {\n        this.game.draw(this.ctx);\n        this.game.step();\n    }, 20)\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction MovingObject(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n}   \n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    \n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n    this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    // debugger\n    return Math.sqrt(\n        Math.pow(this.pos[0] - otherObject.pos[0], 2) +\n        Math.pow(this.pos[1] - otherObject.pos[1], 2)\n    ) + 5 < (this.radius + otherObject.radius);\n} \n\nmodule.exports = MovingObject;\n\n// Util.inherits(childClass, parentClass);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nconst COLOR = \"#8C8000\";\nconst RADIUS = 15;\n\nconst Ship = function(game){\n    MovingObject.call(this, {\n      color: COLOR,\n      radius: RADIUS,\n      vel: [0, 0],\n      pos: [\n        Math.random() * window.innerWidth,\n        Math.random() * window.innerHeight,\n      ],\n      game: game,\n    });\n}\n\nUtil.inherits(Ship, MovingObject);\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate () {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n// DOM stands for document object model\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    ctx = canvasEl.getContext(\"2d\");\n    canvasEl.height = window.innerHeight;\n    canvasEl.width = window.innerWidth;\n    window.MovingObject = MovingObject;\n    window.Asteroid = Asteroid;\n    window.Game = Game;\n    window.GameView = GameView;\n    window.ctx = ctx;\n    console.log('DOM fully loaded and parsed');\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;