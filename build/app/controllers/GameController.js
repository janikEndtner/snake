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
    var players;
    router.get('/', function (req, res) {
        // Reply with a hello world when no name param is provided
        res.sendFile(path.resolve('build/front_end/index.html'));
    });
    router.post('/initGame', function (req, res) {
        game = new game_class_1.Game();
        game.initGame();
        res.send(JSON.stringify(game.getBoard()));
    });
    router.post('/restart', function (req, res) {
        game = new game_class_1.Game();
        game.initGame();
        snakeCounter = 0;
        res.json(game.getBoard());
        console.log('game restarted');
    });
    io.on('connection', function (socket) {
        // QUICKFIX
        if (game) {
            console.log('somebody has connected');
            var changes_1 = [];
            game.getBoard().forEach(function (d) { return changes_1 = changes_1.concat(d); });
            socket.emit('step', { changes: changes_1 });
        }
        // JOIN
        socket.on('join', function () {
            console.log('somebody tries to join');
            if (snakeCounter === 0) {
                console.log('player 0 joined');
                console.log('add snake 1');
                game.addSnake1();
                snakeCounter++;
                var identifier = Math.floor(Math.random() * 100000);
                players = [{ id: identifier, value: 0 }];
                console.log('unique identifier for player 0: ' + identifier);
                socket.emit('joined', identifier);
            }
            else if (snakeCounter === 1) {
                console.log('player 1 joined');
                console.log('add snake 2');
                game.addSnake2();
                var identifier = Math.floor(Math.random() * 100000);
                players.push({ id: identifier, value: 1 });
                console.log('unique identifier for player 1: ' + identifier);
                socket.emit('joined');
            }
            else {
                console.log('too many players');
            }
            game.getSteps().subscribe(function (d) {
                socket.emit('step', d);
            });
        });
        // START GAME
        socket.on('startGame', function (data) {
            console.log('somebody started the game');
            game.startGame();
            socket.emit('gameState', 'running');
        });
        // CHANGE DIRECTION OF SNAKE
        socket.on('changeDirection', function (data) {
            console.log("direction changed player " + data.id + ": " + data.direction);
            var snakeNumber;
            (data.id === players[0].id) ? snakeNumber = players[0].value : snakeNumber = players[1].value;
            game.changeDirection(data.direction, snakeNumber);
        });
    });
    return router;
};
