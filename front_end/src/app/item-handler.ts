import {Field} from './field.model';

export class ItemHandler {
  private counter: number;
  private colNumber: number;
  private rowNumber: number;
  private fieldsReference: Field[][];
  private itemFrequency: number;
  private previousItemField: Field;

  constructor(field: Field[][], rowNumber: number, colNumber: number) {
    this.fieldsReference = field;
    this.rowNumber = rowNumber;
    this.colNumber = colNumber;
    this.setItem();
  }

  private setItem() {
    let x = Math.floor(Math.random() * this.colNumber);
    let y = Math.floor(Math.random() * this.rowNumber);
    this.fieldsReference[x][y].hasItem = true;
    this.previousItemField = this.fieldsReference[x][y];
    console.log(`create item on (${x},${y})`)
  }

  private removeItem() {
    this.previousItemField.hasItem = false;
  }

  public replaceItem() {
    this.removeItem();
    this.setItem();
  }
}
