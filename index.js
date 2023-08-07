// Importing the 'express' library to create an Express application.
const express = require("express");
const app = express();

// Setting the port on which the server will run.
const port = 8000;

// Serving static files from the 'assets' folder. 
// This allows accessing static files like images, stylesheets, etc. from the 'assets' directory.
app.use(express.static('./assets'));

// Setting the view engine to 'ejs'.
// This allows rendering dynamic views using EJS templates.
app.set('view engine', 'ejs');

// Setting the views directory where EJS templates are located.
app.set('views', './views');

// Middleware to parse incoming request data in URL-encoded format.
// This is necessary to handle form data submitted via POST requests.
app.use(express.urlencoded());

// Routing: Setting up routes for the application.
// Here, the application uses the routes defined in the 'routes.js' file.
app.use('/', require('./routes'));

// Start the server to listen on the specified port.
// If the environment variable 'process.env.PORT' is available, use that port.
app.listen(process.env.PORT || port, function(err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }

    // Server started successfully, log the port it's listening on.
    console.log(`Server is running on port: ${port}`);
});
