"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snake_class_1 = require("./snake.class");
var index_1 = require("rxjs/index");
var board_class_1 = require("./board.class");
var Game = /** @class */ (function () {
    function Game() {
        this.colNumber = 30;
        this.rowNumber = 30;
        this.snakes = [];
        this.initialFieldsSnake1 = [
            { x: 4, y: 1 },
            { x: 3, y: 1 },
            { x: 2, y: 1 },
            { x: 1, y: 1 }
        ];
        this.initialFieldsSnake2 = [
            { x: 25, y: 28 },
            { x: 26, y: 28 },
            { x: 27, y: 28 },
            { x: 28, y: 28 }
        ];
        this.gameSpeed = 100;
        this.gameRunning = false;
        this.stepMessages = new index_1.BehaviorSubject({ changes: null });
    }
    Game.prototype.initGame = function () {
        this.board = new board_class_1.Board(this.rowNumber, this.colNumber);
    };
    Game.prototype.addSnake1 = function () {
        this.snakes.push(new snake_class_1.Snake(this.initialFieldsSnake1, this.board));
        this.snakes[0].directionRight();
    };
    Game.prototype.addSnake2 = function () {
        this.snakes.push(new snake_class_1.Snake(this.initialFieldsSnake2, this.board));
        this.snakes[1].directionLeft();
    };
    Game.prototype.getBoard = function () {
        return this.board.getBoard();
    };
    Game.prototype.startGame = function () {
        var _this = this;
        this.gameRunning = true;
        var interval = setInterval(function () {
            // check snake 1
            var nextStep = _this.snakes[0].getNextStep();
            if (_this.board.checkIfNextMovePossible(nextStep)) {
                _this.snakes[0].makeStep(_this.board.getField(nextStep.x, nextStep.y));
            }
            else {
                console.log("game stopped: move not possible. Snake 1 lost");
                clearInterval(interval);
                _this.gameRunning = false;
            }
            // check snake 2
            nextStep = _this.snakes[1].getNextStep();
            if (_this.board.checkIfNextMovePossible(nextStep)) {
                _this.snakes[1].makeStep(_this.board.getField(nextStep.x, nextStep.y));
            }
            else {
                console.log("game stopped: move not possible. Snake 2 lost");
                clearInterval(interval);
                _this.gameRunning = false;
            }
            // emit changes
            _this.stepMessages.next({ changes: _this.getChanges() });
        }, this.gameSpeed);
    };
    Game.prototype.getSteps = function () {
        return this.stepMessages.asObservable();
    };
    Game.prototype.getChanges = function () {
        return this.board.getChanges();
    };
    /**
     * @param direction
     * @param i: Snake 0 or 1
     */
    Game.prototype.changeDirection = function (direction, i) {
        switch (direction) {
            case 'up':
                this.snakes[i].directionUp();
                break;
            case 'down':
                this.snakes[i].directionDown();
                break;
            case 'right':
                this.snakes[i].directionRight();
                break;
            case 'left':
                this.snakes[i].directionLeft();
                break;
        }
    };
    return Game;
}());
exports.Game = Game;
