import express, {Request, Response} from 'express';
import * as path from "path";
import {Game} from "../game/game.class";
import {Field} from "../../shared/field.model";

export const GameController = function (io:any) {
    let router = express.Router();
    let game: Game;
    let snakeCounter = 0;

    router.get('/', (req: Request, res: Response) => {
        // Reply with a hello world when no name param is provided
        res.sendFile(path.resolve('build/front_end/index.html'));
    });

    router.post('/initGame', (req: Request, res: Response) => {
        game = new Game();
        game.initGame();
        res.send(JSON.stringify(game.getBoard()));
    });

    io.on('connection', (socket: any) => {
        // QUICKFIX
        if (game) {
            console.log('somebody has connected');

            socket.on('join', () => {
                if (snakeCounter === 0) {
                    console.log('add snake 1');
                    game.addSnake1();
                    snakeCounter++;
                    socket.emit('joined');
                } else if (snakeCounter === 1) {
                    console.log('add snake 2');
                    game.addSnake2();
                    socket.emit('joined');
                } else {
                    console.log('too many players')
                }

                game.getSteps().subscribe(d => {
                    socket.emit('step', d);
                });
            });

            socket.on('startGame', (data: any) => {
                console.log('somebody started the game');
                game.startGame();
                socket.emit('gameState', 'running');
            });

            socket.on('changeDirection', function (data: string) {
                console.log(`direction changed: ${data}`);
                game.changeDirection(JSON.parse(data).direction, 0);
            });

            let changes:Field[] = [];
            game.getBoard().forEach(d => changes = changes.concat(d));
            socket.emit('step', {changes: changes});
        }
    });

    return router;
};