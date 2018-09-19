import {Field} from "../../shared/field.model";
import {Snake} from "./snake.class";
import {ItemHandler} from "./item-handler.class";
import {FieldCoordinates} from "./coordinates";

export class Board {
    private colNumber: number;
    private rowNumber: number;
    private fields: Field[][] = [];
    private itemHandler: ItemHandler;

    constructor(rowNumber: number, colNumber: number) {
        this.colNumber = colNumber;
        this.rowNumber = rowNumber;
        this.createFields();
        this.itemHandler = new ItemHandler(this.fields, this.rowNumber, this.colNumber);
    }

    private createFields() {
        for (let i = 0; i < this.colNumber; i++) {
            this.fields.push([]);
            for (let j = 0; j < this.rowNumber; j++) {
                let field: Field = {
                    x: j,
                    y: i,
                    hasItem: false,
                    hasSnake: false
                };
                this.fields[this.fields.length - 1].push(field)
            }
        }
    }

    public getBoard() {
        return this.fields;
    }
    public getField(x: number, y: number) {
        return this.fields[y][x];
    }
    public addSnakeToField(coordinates: FieldCoordinates) {
        this.fields[coordinates.y][coordinates.x].hasSnake = true;
    }
    public removeSnakeFromField(coordinates: FieldCoordinates) {
        this.fields[coordinates.y][coordinates.x].hasSnake = false;
    }
    public checkIfNextMovePossible(coordinates: FieldCoordinates) {
        return coordinates.x >= 0 && coordinates.x < this.colNumber
            && coordinates.y >= 0 && coordinates.y < this.rowNumber
            && !this.fields[coordinates.y][coordinates.x].hasSnake;
    }
    public replaceItem() {
        return this.itemHandler.replaceItem();
    }
}