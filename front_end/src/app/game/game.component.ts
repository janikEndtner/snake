import {Component, HostListener, OnInit} from '@angular/core';
import {Field} from '../../../../shared/field.model';
import {WebSocketService} from "../web-socket.service";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

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
  joined: boolean = false;
  gameState: string = 'no game';

  messages: Subject<any>;

  constructor(
    private wsService: WebSocketService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.initGame();
  }

  private initGame() {
    this.http.post(environment.api + 'game/initGame', {})
      .subscribe((data:Field[][]) => {
        this.createBoard(data);
      }, error1 => {
        console.log(error1);
        alert('an error occured. See console for more information');
      });
    this.wsService
      .connect();
  }

  private restartGame() {
    this.joined = false;
    this.gameState = 'no game';
    this.http.post(environment.api + 'game/restart', {})
      .subscribe((data:Field[][]) => {
        this.createBoard(data);
        this.gameState = 'no game';
      }, error1 => {
        console.log(error1);
        alert('an error occured. See console for more information');
      });
  }

  joinGame() {
    this.wsService.joinGame().subscribe(d => {
        if (d.status) {
          this.joined = d.status;
        } else if (d.changes) {
          this.doChanges(d.changes)
        }
      });
    this.wsService.getSteps()
      .subscribe(d => {
        if (d.changes) {
          this.doChanges(d.changes);
        } else if (d.gameState) {
          this.gameState = d.gameState;
        }
      });
  }

  startGame() {
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
      case 'ArrowUp' || 'KeyW':
        this.wsService.changeDirection('up');
        break;
      case 'ArrowDown' || 'KeyS':
        this.wsService.changeDirection('down');
        break;
      case 'ArrowRight' || 'KeyD':
        this.wsService.changeDirection('right');
        break;
      case 'ArrowLeft' || 'KeyA':
        this.wsService.changeDirection('left');
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
