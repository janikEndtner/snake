import {Field} from './field.model';
import {ItemHandler} from './item-handler';

export class Snake {

  snakeFields: Field[];
  directionX: number; // could be -1, 0, 1
  directionY: number; // could be -1, 0, 1
  itemHandler: ItemHandler;

  constructor(initialFields: Field[], itemHandler: ItemHandler) {
    this.snakeFields = initialFields;
    this.itemHandler = itemHandler;
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
  public getNextStep(): Field {
    let newX = this.snakeFields[0].x + this.directionX;
    let newY = this.snakeFields[0].y + this.directionY;
    return {
      x: newX,
      y: newY,
    }
  }
  public makeStep(field: Field) {
    this.snakeFields.unshift(field);
    if (!field.hasItem) {
      this.snakeFields.pop();
    } else {
      this.itemHandler.replaceItem();
    }
  }
  public getFields(): Field[] {
    return this.snakeFields;
  }
}
