import express from 'express';
import {GameController} from './controllers';
import * as path from "path";

// Create a new express application instance
const app: express.Application = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use(express.static(path.resolve( 'build/front_end')));

// Mount the GameController at the /game route
app.use('/game', GameController(io));

app.get('/', (req, res) => res.redirect('/game'));

// Serve the application at the given
// The port the express app will listen on
const port = process.env.PORT || 3000;
server.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});