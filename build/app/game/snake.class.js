"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Snake = /** @class */ (function () {
    function Snake(initialFields, itemHandler, board) {
        this.directionX = 0; // could be -1, 0, 1
        this.directionY = 0; // could be -1, 0, 1
        this.snakeFields = initialFields;
        this.itemHandler = itemHandler;
        this.board = board;
        this.initSnakeOnBoard();
    }
    Snake.prototype.initSnakeOnBoard = function () {
        var _this = this;
        this.snakeFields.forEach(function (d) {
            _this.board.addSnakeToField(d);
        });
    };
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
        var removedField;
        var changedItems = [];
        this.snakeFields.unshift({ x: field.x, y: field.y });
        this.board.addSnakeToField({ x: field.x, y: field.y });
        if (!field.hasItem) {
            var removedCoordinates = this.snakeFields.pop();
            // @ts-ignore // cannot be undefined
            this.board.removeSnakeFromField(removedCoordinates);
            // @ts-ignore
            removedField = this.board.getField(removedCoordinates.x, removedCoordinates.y);
        }
        else {
            changedItems = this.board.replaceItem();
        }
        if (removedField) {
            return [field, removedField].concat(changedItems);
        } else {
            return [field].concat(changedItems);
        }
    };
    Snake.prototype.getFields = function () {
        return this.snakeFields;
    };
    return Snake;
}());
exports.Snake = Snake;
