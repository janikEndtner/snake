"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snake_class_1 = require("./snake.class");
var index_1 = require("rxjs/index");
var board_class_1 = require("./board.class");
var Game = /** @class */ (function () {
    function Game() {
        this.colNumber = 30;
        this.rowNumber = 30;
        this.initialFieldsSnake = [
            { x: 4, y: 1 },
            { x: 3, y: 1 },
            { x: 2, y: 1 },
            { x: 1, y: 1 }
        ];
        this.gameSpeed = 100;
        this.gameRunning = false;
        this.board = new board_class_1.Board(this.rowNumber, this.colNumber);
        this.snake = new snake_class_1.Snake(this.initialFieldsSnake, this.itemHandler, this.board);
    }
    Game.prototype.startGame = function () {
        var _this = this;
        return new index_1.Observable(function (observer) {
            _this.gameRunning = true;
            _this.snake.directionRight();
            var interval = setInterval(function () {
                var nextStep = _this.snake.getNextStep();
                if (_this.board.checkIfNextMovePossible(nextStep)) {
                    var changes = _this.snake.makeStep(_this.board.getField(nextStep.x, nextStep.y));
                    observer.next({
                        board: null,
                        changes: changes
                    });
                }
                else {
                    console.log("game stopped: move not possible");
                    clearInterval(interval);
                    _this.gameRunning = false;
                }
            }, _this.gameSpeed);
            observer.next({
                board: _this.board.getBoard(),
                changes: null
            });
        });
    };
    Game.prototype.changeDirection = function (direction) {
        switch (direction) {
            case 'up':
                this.snake.directionUp();
                break;
            case 'down':
                this.snake.directionDown();
                break;
            case 'right':
                this.snake.directionRight();
                break;
            case 'left':
                this.snake.directionLeft();
                break;
        }
    };
    return Game;
}());
exports.Game = Game;
