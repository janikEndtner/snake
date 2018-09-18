"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemHandler = /** @class */ (function () {
    function ItemHandler(field, rowNumber, colNumber) {
        this.fieldsReference = field;
        this.rowNumber = rowNumber;
        this.colNumber = colNumber;
        this.setItem();
    }
    ItemHandler.prototype.setItem = function () {
        var x = Math.floor(Math.random() * this.colNumber);
        var y = Math.floor(Math.random() * this.rowNumber);
        this.fieldsReference[x][y].hasItem = true;
        this.previousItemField = this.fieldsReference[x][y];
        console.log("create item on (" + x + "," + y + ")");
    };
    ItemHandler.prototype.removeItem = function () {
        this.previousItemField.hasItem = false;
    };
    ItemHandler.prototype.replaceItem = function () {
        this.removeItem();
        this.setItem();
    };
    return ItemHandler;
}());
exports.ItemHandler = ItemHandler;
