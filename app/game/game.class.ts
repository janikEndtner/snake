import {Field} from "../../shared/field.model";
import {ItemHandler} from "./item-handler.class";
import {Snake} from "./snake.class";
import {Observable} from "rxjs/index";
import {Board} from "./board.class";
import {FieldCoordinates} from "./coordinates";

export class Game {
    private colNumber: number = 30;
    private rowNumber: number = 30;
    private snake: Snake;
    private initialFieldsSnake = [
        {x: 4, y: 1},
        {x: 3, y: 1},
        {x: 2, y: 1},
        {x: 1, y: 1}
    ];
    private gameSpeed: number = 100;
    private itemHandler: ItemHandler;
    private gameRunning: boolean = false;
    private board: Board;

    constructor() {
        this.board = new Board(this.rowNumber, this.colNumber);
        this.snake = new Snake(this.initialFieldsSnake, this.itemHandler, this.board);
    }

    public startGame() {
        return new Observable(observer => {

            this.gameRunning = true;
            this.snake.directionRight();
            const interval = setInterval(() => {
                let nextStep = this.snake.getNextStep();
                if (this.board.checkIfNextMovePossible(nextStep)) {
                    let changes = this.snake.makeStep(this.board.getField(nextStep.x, nextStep.y));
                    observer.next({
                        board: null,
                        changes: changes
                    });
                } else {
                    console.log("game stopped: move not possible");
                    clearInterval(interval);
                    this.gameRunning = false;
                }
            }, this.gameSpeed);

            observer.next({
                board: this.board.getBoard(),
                changes: null
            });
        });
    }

    public changeDirection(direction: string) {
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
    }

}