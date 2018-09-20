import express, {Request, Response} from 'express';
import * as path from "path";
import {Game} from "../game/game.class";

export const GameController = function (io:any) {
    let router = express.Router();
    let game: Game;

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

        socket.on('startGame', (data: any) => {
            game.startGame()
                .subscribe(d => {
                    socket.emit('step', d);
                });
        });

        socket.on('changeDirection', function (data: string) {
            console.log(`direction changed: ${data}`);
            game.changeDirection(JSON.parse(data).direction);
        });
    });

    return router;
};