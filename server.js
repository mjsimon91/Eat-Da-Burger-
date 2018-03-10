//Requirements
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

//Setting the port
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Setting the handlebars application
var exphbs = require('express-handlebars');

//The handlebars files are .handlebars
app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js")

app.use(routes);

//listen to the port
app.listen(PORT, function(){
    console.log("The application is now listening on " + PORT);
});