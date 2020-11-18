const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

const COLOR = "#8C8000";
const RADIUS = 15;

const Ship = function(game){
    MovingObject.call(this, {
      color: COLOR,
      radius: RADIUS,
      vel: [0, 0],
      pos: [
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
      ],
      game: game,
    });
}

Util.inherits(Ship, MovingObject);

module.exports = Ship;