const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

const COLOR = "#808080";
const RADIUS = 30;
let speed = 5;


function Asteroid(game) {
    MovingObject.call(this, {
        color: COLOR,
        radius: RADIUS,
        vel: Util.randomVec(speed),
        pos: [Math.random() * window.innerWidth, Math.random() * window.innerHeight],
        game: game
    });
};

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;

// function Shape(color) {
//     this.color = color;
// }
// ​
// Shape.prototype.sayHello = function() {
//     console.log('hello');
// }
// ​
// Shape.prototype.sayGoodbye = function() {
//     console.log('bye');
// }
// ​
// function Rectangle(color, width, length) {
//     Shape.call(this, color);
//     this.width = width;
//     this.length = length;
// }
// ​
// Rectangle.prototype = {
//     ...Shape.prototype,
//     constructor: Rectangle
// };
// ​
// ​
// Rectangle.prototype.area = function() {
//     return this.width * this.height;
// }
// ​
// function Circle(color, radius) {
//     Shape.call(color);
//     this.radius = radius;
// }