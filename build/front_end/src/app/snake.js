"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Snake = /** @class */ (function () {
    function Snake(initialFields, itemHandler) {
        this.snakeFields = initialFields;
        this.itemHandler = itemHandler;
    }
    Snake.prototype.directionUp = function () {
        this.directionX = 0;
        this.directionY = -1;
    };
    Snake.prototype.directionDown = function () {
        this.directionX = 0;
        this.directionY = 1;
    };
    Snake.prototype.directionRight = function () {
        this.directionX = 1;
        this.directionY = 0;
    };
    Snake.prototype.directionLeft = function () {
        this.directionX = -1;
        this.directionY = 0;
    };
    Snake.prototype.getNextStep = function () {
        var newX = this.snakeFields[0].x + this.directionX;
        var newY = this.snakeFields[0].y + this.directionY;
        return {
            x: newX,
            y: newY,
        };
    };
    Snake.prototype.makeStep = function (field) {
        this.snakeFields.unshift(field);
        if (!field.hasItem) {
            this.snakeFields.pop();
        }
        else {
            this.itemHandler.replaceItem();
        }
    };
    Snake.prototype.getFields = function () {
        return this.snakeFields;
    };
    return Snake;
}());
exports.Snake = Snake;
