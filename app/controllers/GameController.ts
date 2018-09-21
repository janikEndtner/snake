import express, {Request, Response} from 'express';
import * as path from "path";
import {Game} from "../game/game.class";
import {Field} from "../../shared/field.model";
import {Socket} from "socket.io";

export const GameController = function (io:any) {
    let router = express.Router();
    let game: Game;
    let snakeCounter = 0;
    let players: [{id: number, value: number}];

    router.get('/', (req: Request, res: Response) => {
        // Reply with a hello world when no name param is provided
        res.sendFile(path.resolve('build/front_end/index.html'));
    });

    router.post('/initGame', (req: Request, res: Response) => {
        game = new Game();
        game.initGame();
        res.send(JSON.stringify(game.getBoard()));
    });

    router.post('/restart', (req: Request, res: Response) => {
        game = new Game();
        game.initGame();
        snakeCounter = 0;
        res.json(game.getBoard());
        console.log('game restarted');
    });

    io.on('connection', (socket: any) => {
        // QUICKFIX
        if (game) {
            console.log('somebody has connected');
            let changes:Field[] = [];
            game.getBoard().forEach(d => changes = changes.concat(d));
            socket.emit('step', {changes: changes});
        }

        // JOIN
        socket.on('join', () => {
            console.log('somebody tries to join');
            if (snakeCounter === 0) {
                console.log('player 0 joined');
                console.log('add snake 1');
                game.addSnake1();
                snakeCounter++;
                let identifier = Math.floor(Math.random() * 100000);
                players = [{id: identifier, value: 0}];
                console.log('unique identifier for player 0: ' + identifier);
                socket.emit('joined', identifier);
            } else if (snakeCounter === 1) {
                console.log('player 1 joined');
                console.log('add snake 2');
                game.addSnake2();
                let identifier = Math.floor(Math.random() * 100000);
                players.push({id: identifier, value: 1});
                console.log('unique identifier for player 1: ' + identifier);
                socket.emit('joined');
            } else {
                console.log('too many players')
            }
            game.getSteps().subscribe(d => {
                socket.emit('step', d);
            });
        });

        // START GAME
        socket.on('startGame', (data: any) => {
            console.log('somebody started the game');
            game.startGame();
            socket.emit('gameState', 'running');
        });

        // CHANGE DIRECTION OF SNAKE
        socket.on('changeDirection', function (data: {direction: string, id: number}) {
            console.log(`direction changed player ${data.id}: ${data.direction}`);
            let snakeNumber;
            (data.id === players[0].id) ? snakeNumber = players[0].value : snakeNumber = players[1].value;
            game.changeDirection(data.direction, snakeNumber);
        });

    });

    return router;
};