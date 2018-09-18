/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from 'express';

// Import WelcomeController from controllers entry point
import {GameController} from './controllers';
import * as path from "path";

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve( 'build/front_end')));

// Mount the WelcomeController at the /welcome route
app.use('/game', GameController);

app.get('/', (req, res) => res.redirect('/game'));

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});