const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

function Game(){
   this.DIM_X = window.innerWidth;
   this.DIM_Y = window.innerHeight;
   this.NUM_ASTEROIDS = 4;
   this.asteroids = [];
   this.addAsteroids();
   this.randomPosition();
}

Game.prototype.addAsteroids = function(){
    while(this.asteroids.length !== this.NUM_ASTEROIDS){
        this.asteroids.push(new Asteroid(this));
    }
    return this.asteroids;
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.allObjects.forEach(asteroid => asteroid.draw(ctx));
}

Game.prototype.moveObjects = function(){
    this.allObjects.forEach((asteroid) => asteroid.move());
}

Game.prototype.wrap = function(pos) {
    if (pos[0] > this.DIM_X) pos[0] = 0;
    if (pos[1] > this.DIM_Y) pos[1] = 0;
    if (pos[0] < 0) pos[0] = this.DIM_X;
    if (pos[1] < 0) pos[1] = this.DIM_Y;
}

Game.prototype.remove = function(asteroidIdx){
    this.asteroids.splice(asteroidIdx, 1);
}

Game.prototype.checkCollisions = function() {
    let objects = this.allObjects();
    for(let i = 0; i < objects.length; i++) {
        for(let j = i + 1; j < objects.length; j++) {
            if (objects[i].isCollidedWith(objects[j])) {
                this.remove(j); 
                this.remove(i);
                // add a condition for if a ship collides with an asteroid
            }
        }
    }
    //this.asteroids.forEach((asteroid) => )
}

Game.prototype.step = function() {
    this.checkCollisions();
    this.moveObjects();
}

Game.prototype.randomPosition = function() {
    this.ship = new Ship();
}

Game.prototype.allObjects = function() {
    return this.asteroids.concat([this.ship]);
}

module.exports = Game;