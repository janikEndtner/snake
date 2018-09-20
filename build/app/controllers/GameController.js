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
        socket.on('startGame', function (data) {
            game.startGame()
                .subscribe(function (d) {
                socket.emit('step', d);
            });
        });
        socket.on('changeDirection', function (data) {
            console.log("direction changed: " + data);
            game.changeDirection(JSON.parse(data).direction);
        });
    });
    return router;
};
