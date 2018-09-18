import {Component, HostListener, OnInit} from '@angular/core';
import {Field} from '../field.model';
import {Snake} from '../snake';
import {ItemHandler} from '../item-handler';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
    this.moveSnake(event);
  }

  pxWidth: number = 500;
  pxHeight: number = 500;
  colNumber: number = 30;
  rowNumber: number = 30;
  fields: Field[][] = [];
  heightOfField: number;
  widthOfField: number;
  fieldStrokeColor = "lightgray";
  snake: Snake = null;
  gameSpeed: number = 100;
  itemHandler: ItemHandler;
  gameRunning: boolean = false;


  constructor() { }

  ngOnInit() {
    this.initGame();
  }

  initGame() {
    this.gameRunning = true;
    this.createFields();
    this.itemHandler = new ItemHandler(this.fields, this.rowNumber, this.colNumber);

    this.snake = new Snake([
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
      {x: 3, y: 0}
    ], this.itemHandler);
    this.snake.directionRight();
    this.startGame();
  }

  private startGame() {
    const interval = setInterval(() => {
      let nextStep = this.snake.getNextStep();
      if (this.checkIfNextMovePossible(this.snake.getNextStep())) {
        this.snake.makeStep(this.fields[nextStep.y][nextStep.x]);
      } else {
        console.log(this.snake.getNextStep());
        clearInterval(interval);
        this.gameRunning = false;
      }
    }, this.gameSpeed)
  }

  private createFields() {
    for (let i = 0; i < this.colNumber; i++) {
      this.fields.push([]);
      for (let j = 0; j < this.rowNumber; j++) {
        let field: Field = {
          x: j,
          y: i
        };
        this.fields[this.fields.length - 1].push(field)
      }
    }
    console.log(this.fields);
    this.heightOfField = this.pxHeight / this.rowNumber;
    this.widthOfField = this.pxWidth / this.colNumber;
  }

  private moveSnake(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.snake.directionUp();
        break;
      case 'ArrowDown':
        this.snake.directionDown();
        break;
      case 'ArrowRight':
        this.snake.directionRight();
        break;
      case 'ArrowLeft':
        this.snake.directionLeft();
        break;
    }
  }

  private checkIfNextMovePossible(field: Field) {
    return field.x >= 0 && field.x < this.colNumber
    && field.y >= 0 && field.y < this.rowNumber;
  }
}
