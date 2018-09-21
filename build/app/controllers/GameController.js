"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var game_class_1 = require("../game/game.class");
exports.GameController = function (io) {
    var router = express_1.default.Router();
    var game;
    var snakeCounter = 0;
    router.get('/', function (req, res) {
        // Reply with a hello world when no name param is provided
        res.sendFile(path.resolve('build/front_end/index.html'));
    });
    router.post('/initGame', function (req, res) {
        game = new game_class_1.Game();
        game.initGame();
        res.send(JSON.stringify(game.getBoard()));
    });
    io.on('connection', function (socket) {
        // QUICKFIX
        if (game) {
            console.log('somebody has connected');
            socket.on('join', function () {
                if (snakeCounter === 0) {
                    console.log('add snake 1');
                    game.addSnake1();
                    snakeCounter++;
                    socket.emit('joined');
                }
                else if (snakeCounter === 1) {
                    console.log('add snake 2');
                    game.addSnake2();
                    socket.emit('joined');
                }
                else {
                    console.log('too many players');
                }
                game.getSteps().subscribe(function (d) {
                    socket.emit('step', d);
                });
            });
            socket.on('startGame', function (data) {
                console.log('somebody started the game');
                game.startGame();
                socket.emit('gameState', 'running');
            });
            socket.on('changeDirection', function (data) {
                console.log("direction changed: " + data);
                game.changeDirection(JSON.parse(data).direction, 0);
            });
            var changes_1 = [];
            game.getBoard().forEach(function (d) { return changes_1 = changes_1.concat(d); });
            socket.emit('step', { changes: changes_1 });
        }
    });
    return router;
};
