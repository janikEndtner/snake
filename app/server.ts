/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from 'express';
import {GameController} from './controllers';
import * as path from "path";
import * as http from "http";

// Create a new express application instance
const app: express.Application = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use(express.static(path.resolve( 'build/front_end')));

// Mount the WelcomeController at the /welcome route
app.use('/game', GameController);

io.on('connection', function (socket: any) {
    socket.emit('message', { hello: 'world' });
    socket.on('my other event', function (data: any) {
        console.log(data);
    });
});

app.get('/', (req, res) => res.redirect('/game'));

// Serve the application at the given
// The port the express app will listen on
const port = process.env.PORT || 3000;
server.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});