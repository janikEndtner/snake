import {Field} from '../../shared/field.model';
import {FieldCoordinates} from "./coordinates";
import {Board} from "./board.class";

export class Snake {

  private snakeFields: FieldCoordinates[];
  private directionX: number = 0; // could be -1, 0, 1
  private directionY: number = 0; // could be -1, 0, 1
  private board: Board;

  constructor(initialFields: FieldCoordinates[], board: Board) {
    this.snakeFields = initialFields;
    this.board = board;
    this.initSnakeOnBoard();
  }
  private initSnakeOnBoard() {
    this.snakeFields.forEach(d => {
      this.board.addSnakeToField(d);
    })
  }
  public directionUp() {
    this.directionX = 0;
    this.directionY = -1;
  }
  public directionDown() {
    this.directionX = 0;
    this.directionY = 1;
  }
  public directionRight() {
    this.directionX = 1;
    this.directionY = 0;
  }
  public directionLeft() {
    this.directionX = -1;
    this.directionY = 0;
  }
  public getNextStep(): FieldCoordinates {
    let newX = this.snakeFields[0].x + this.directionX;
    let newY = this.snakeFields[0].y + this.directionY;
    return {
      x: newX,
      y: newY,
    }
  }
  public makeStep(field: Field) {
    this.snakeFields.unshift({x: field.x, y: field.y});
    this.board.addSnakeToField({x: field.x, y: field.y});
    if (!field.hasItem) {
      let removedCoordinates = this.snakeFields.pop();
      // @ts-ignore // cannot be undefined
        this.board.removeSnakeFromField(removedCoordinates);
    }
  }
  public getFields(): Field[] {
    return this.snakeFields;
  }
}
