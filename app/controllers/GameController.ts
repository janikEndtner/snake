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

    io.on('connection', (socket: any) => {

        socket.on('startGame', (data: any) => {
            game = new Game();
            game.startGame()
                .subscribe(d => {
                    socket.emit('step', d);
                });
        });

        socket.on('changeDirection', function (data: string) {
            console.log(`direction changed: ${data}`);
            game.changeDirection(data);
        });
    });

    return router;
};