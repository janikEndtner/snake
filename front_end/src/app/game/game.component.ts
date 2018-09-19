import {Component, HostListener, OnInit} from '@angular/core';
import {Field} from '../../../../shared/field.model';
import {WebSocketService} from "../web-socket.service";
import {Subject} from "rxjs";

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
  fields: Field[][] = [];
  heightOfField: number;
  widthOfField: number;
  fieldStrokeColor = "lightgray";

  messages: Subject<any>;

  constructor(
    private wsService: WebSocketService
  ) {}

  ngOnInit() {
    this.wsService
      .connect();

    this.wsService.getSteps()
      .subscribe(d => {
        if (d.board) {
          this.createBoard(d.board);
        } else if (d.changes) {
          this.doChanges(d.changes);
        }
      });

    this.wsService.send('startGame', null);
  }

  private createBoard(board: Field[][]) {
    this.fields = board;
    this.heightOfField = this.pxHeight/board.length;
    this.widthOfField = this.pxWidth/board[0].length;
  }


  private doChanges(changes: Field[]) {
    changes.forEach(d => {
      this.fields[d.y][d.x] = d;
    })
  }

  private moveSnake(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.wsService.send('changeDirection', {direction: 'up'});
        break;
      case 'ArrowDown':
        this.wsService.send('changeDirection', {direction: 'down'});
        break;
      case 'ArrowRight':
        this.wsService.send('changeDirection', {direction: 'right'});
        break;
      case 'ArrowLeft':
        this.wsService.send('changeDirection', {direction: 'left'});
        break;
    }
  }

  getColor(field) {
    if (field.hasSnake) {
      return 'black';
    } else if (field.hasItem) {
      return 'red'
    } else {
      return 'none';
    }
  }
}
