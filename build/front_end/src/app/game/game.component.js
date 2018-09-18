"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var snake_1 = require("../snake");
var item_handler_1 = require("../item-handler");
var GameComponent = /** @class */ (function () {
    function GameComponent() {
        this.pxWidth = 500;
        this.pxHeight = 500;
        this.colNumber = 30;
        this.rowNumber = 30;
        this.fields = [];
        this.fieldStrokeColor = "lightgray";
        this.snake = null;
        this.gameSpeed = 100;
        this.gameRunning = false;
    }
    GameComponent.prototype.handleKeyDown = function (event) {
        this.moveSnake(event);
    };
    GameComponent.prototype.ngOnInit = function () {
        this.initGame();
    };
    GameComponent.prototype.initGame = function () {
        this.gameRunning = true;
        this.createFields();
        this.itemHandler = new item_handler_1.ItemHandler(this.fields, this.rowNumber, this.colNumber);
        this.snake = new snake_1.Snake([
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 }
        ], this.itemHandler);
        this.snake.directionRight();
        this.startGame();
    };
    GameComponent.prototype.startGame = function () {
        var _this = this;
        var interval = setInterval(function () {
            var nextStep = _this.snake.getNextStep();
            if (_this.checkIfNextMovePossible(_this.snake.getNextStep())) {
                _this.snake.makeStep(_this.fields[nextStep.y][nextStep.x]);
            }
            else {
                console.log(_this.snake.getNextStep());
                clearInterval(interval);
                _this.gameRunning = false;
            }
        }, this.gameSpeed);
    };
    GameComponent.prototype.createFields = function () {
        for (var i = 0; i < this.colNumber; i++) {
            this.fields.push([]);
            for (var j = 0; j < this.rowNumber; j++) {
                var field = {
                    x: j,
                    y: i
                };
                this.fields[this.fields.length - 1].push(field);
            }
        }
        console.log(this.fields);
        this.heightOfField = this.pxHeight / this.rowNumber;
        this.widthOfField = this.pxWidth / this.colNumber;
    };
    GameComponent.prototype.moveSnake = function (event) {
        switch (event.key) {
            case 'ArrowUp':
                this.snake.directionUp();
                break;
            case 'ArrowDown':
                this.snake.directionDown();
                break;
            case 'ArrowRight':
                this.snake.directionRight();
                break;
            case 'ArrowLeft':
                this.snake.directionLeft();
                break;
        }
    };
    GameComponent.prototype.checkIfNextMovePossible = function (field) {
        return field.x >= 0 && field.x < this.colNumber
            && field.y >= 0 && field.y < this.rowNumber;
    };
    __decorate([
        core_1.HostListener('window:keydown', ['$event'])
    ], GameComponent.prototype, "handleKeyDown", null);
    GameComponent = __decorate([
        core_1.Component({
            selector: 'app-game',
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.css']
        })
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
