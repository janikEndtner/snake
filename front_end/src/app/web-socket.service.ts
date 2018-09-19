import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import {Field} from "../../../shared/field.model";
import {environment} from "../environments/environment";

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

  getSteps(): Observable<{board: Field[][], changes: Field[]}> {
    return new Observable(observer => {
      this.socket.on('step', (data) => {
        console.log("Received message from Websocket Server");
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
  }

  send(eventName: string, data: Object) {
    this.socket.emit(eventName, JSON.stringify(data));
  }

}
