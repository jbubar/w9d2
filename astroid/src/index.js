const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

// DOM stands for document object model
window.addEventListener('DOMContentLoaded', (event) => {
    const canvasEl = document.getElementById("game-canvas");
    ctx = canvasEl.getContext("2d");
    canvasEl.height = window.innerHeight;
    canvasEl.width = window.innerWidth;
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid;
    window.Game = Game;
    window.GameView = GameView;
    window.ctx = ctx;
    console.log('DOM fully loaded and parsed');
});

