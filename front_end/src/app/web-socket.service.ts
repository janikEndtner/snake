import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import {Field} from "../../../shared/field.model";
import {environment} from "../environments/environment";
import {timepickerReducer} from "ngx-bootstrap/timepicker/reducer/timepicker.reducer";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  // Our socket connection
  private socket;

  constructor() { }

  connect(): void {
    this.socket = io(environment.api);
  }

  joinGame() {
    this.send('join', null);
    return new Observable<{status?: boolean, changes?: Field[]}>(observer => {
      this.socket.on('joined', d => {
        observer.next({status: true});
      });
      this.socket.on('step', d => {
        observer.next(d);
      })
    })
  }

  getSteps(): Observable<{changes?: Field[], gameState?: string}> {
    return new Observable(observer => {
      this.socket.on('step', (data) => {
        observer.next(data);
      });
      this.socket.on('gameState', (data: string) => {
        observer.next({gameState: data});
      });
      return () => {
        this.socket.disconnect();
      }
    });
  }

  send(eventName: string, data: Object): void {
    this.socket.emit(eventName, JSON.stringify(data));
  }

}
