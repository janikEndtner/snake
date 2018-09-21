import {Field} from "../../shared/field.model";
import {ItemHandler} from "./item-handler.class";
import {Snake} from "./snake.class";
import {BehaviorSubject, Observable} from "rxjs/index";
import {Board} from "./board.class";
import {FieldCoordinates} from "./coordinates";

export class Game {
    private colNumber: number = 30;
    private rowNumber: number = 30;
    private snakes: Snake[] = [];
    private initialFieldsSnake1 = [
        {x: 4, y: 1},
        {x: 3, y: 1},
        {x: 2, y: 1},
        {x: 1, y: 1}
    ];
    private initialFieldsSnake2 = [
        {x: 25, y: 28},
        {x: 26, y: 28},
        {x: 27, y: 28},
        {x: 28, y: 28}
    ];
    private gameSpeed: number = 100;
    private itemHandler: ItemHandler;
    private gameRunning: boolean = false;
    private board: Board;
    private stepMessages: BehaviorSubject<{changes: any}> = new BehaviorSubject({changes: null});

    constructor() {
    }

    public initGame() {
        this.board = new Board(this.rowNumber, this.colNumber);
    }

    public addSnake1() {
        this.snakes.push(new Snake(this.initialFieldsSnake1, this.board));
        this.snakes[0].directionRight();
    }

    public addSnake2() {
        this.snakes.push(new Snake(this.initialFieldsSnake2, this.board));
        this.snakes[1].directionLeft();
    }

    public getBoard(): Field[][] {
        return this.board.getBoard();
    }

    public startGame(): void {
        this.gameRunning = true;
        const interval = setInterval(() => {

            // check snake 1
            let nextStep = this.snakes[0].getNextStep();
            if (this.board.checkIfNextMovePossible(nextStep)) {
                this.snakes[0].makeStep(this.board.getField(nextStep.x, nextStep.y));
            } else {
                console.log("game stopped: move not possible. Snake 1 lost");
                clearInterval(interval);
                this.gameRunning = false;
            }

            // check snake 2
            nextStep = this.snakes[1].getNextStep();
            if (this.board.checkIfNextMovePossible(nextStep)) {
                this.snakes[1].makeStep(this.board.getField(nextStep.x, nextStep.y));
            } else {
                console.log("game stopped: move not possible. Snake 2 lost");
                clearInterval(interval);
                this.gameRunning = false;
            }

            // emit changes
            this.stepMessages.next({changes: this.getChanges()});

        }, this.gameSpeed);
    }

    public getSteps(): Observable<{changes:any}> {
        return this.stepMessages.asObservable();
    }

    public getChanges(): Field[] {
        return this.board.getChanges();
    }

    /**
     * @param direction
     * @param i: Snake 0 or 1
     */
    public changeDirection(direction: string, i: number) {
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
    }

}