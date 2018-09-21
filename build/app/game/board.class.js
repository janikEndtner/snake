"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_handler_class_1 = require("./item-handler.class");
var Board = /** @class */ (function () {
    function Board(rowNumber, colNumber) {
        this.fields = [];
        this.changes = [];
        this.colNumber = colNumber;
        this.rowNumber = rowNumber;
        this.createFields();
        this.itemHandler = new item_handler_class_1.ItemHandler(this.fields, this.rowNumber, this.colNumber);
    }
    Board.prototype.createFields = function () {
        for (var i = 0; i < this.colNumber; i++) {
            this.fields.push([]);
            for (var j = 0; j < this.rowNumber; j++) {
                var field = {
                    x: j,
                    y: i,
                    hasItem: false,
                    hasSnake: false
                };
                this.fields[this.fields.length - 1].push(field);
            }
        }
    };
    Board.prototype.getBoard = function () {
        return this.fields;
    };
    Board.prototype.getField = function (x, y) {
        return this.fields[y][x];
    };
    Board.prototype.addSnakeToField = function (coordinates) {
        this.fields[coordinates.y][coordinates.x].hasSnake = true;
        this.changes.push(this.fields[coordinates.y][coordinates.x]);
    };
    Board.prototype.removeSnakeFromField = function (coordinates) {
        this.fields[coordinates.y][coordinates.x].hasSnake = false;
        this.changes.push(this.fields[coordinates.y][coordinates.x]);
    };
    Board.prototype.checkIfNextMovePossible = function (coordinates) {
        return coordinates.x >= 0 && coordinates.x < this.colNumber
            && coordinates.y >= 0 && coordinates.y < this.rowNumber
            && !this.fields[coordinates.y][coordinates.x].hasSnake;
    };
    Board.prototype.replaceItem = function () {
        var changes = this.itemHandler.replaceItem();
        this.changes.concat(changes);
    };
    Board.prototype.getChanges = function () {
        var lastChanges = this.changes;
        this.changes = [];
        return lastChanges;
    };
    return Board;
}());
exports.Board = Board;
