var express = require("express");

// sets up the express app
var app = express();
var PORT = process.env.PORT || 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// requiring all of our models by requireing the full folder
var db = require("./models");

// Set Handlebars.
var exphbs = require("express-handlebars");
app.set("view engine", "hbs");

app.engine("hbs", exphbs({
    extname: "hbs",
    defaultLayout: "main",

}));

// Import routes and give the server access to them.
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});