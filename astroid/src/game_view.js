const Game = require("./game.js")

const GameView = function(ctx) {
    this.ctx = ctx;
    this.game = new Game();
}

GameView.prototype.start = function() {
    setInterval(() => {
        this.game.draw(this.ctx);
        this.game.step();
    }, 20)
}

module.exports = GameView;