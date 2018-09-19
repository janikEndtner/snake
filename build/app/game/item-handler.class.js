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
        return this.previousItemField;
    };
    ItemHandler.prototype.removeItem = function () {
        this.previousItemField.hasItem = false;
        return this.previousItemField;
    };
    ItemHandler.prototype.replaceItem = function () {
        var removed = this.removeItem();
        var added = this.setItem();
        return [removed, added];
    };
    return ItemHandler;
}());
exports.ItemHandler = ItemHandler;
