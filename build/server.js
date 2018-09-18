"use strict";
/* app/server.ts */
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
// Import everything from express and assign it to the express variable
var express_1 = __importDefault(require("express"));
var controllers_1 = require("./controllers");
var path = __importStar(require("path"));
// Create a new express application instance
var app = express_1.default();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express_1.default.static(path.resolve('build/front_end')));
// Mount the WelcomeController at the /welcome route
app.use('/game', controllers_1.GameController);
io.on('connection', function (socket) {
    socket.emit('message', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
app.get('/', function (req, res) { return res.redirect('/game'); });
// Serve the application at the given
// The port the express app will listen on
var port = process.env.PORT || 3000;
server.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
