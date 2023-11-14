const express = require("express");
const handlebars = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

const routes = require("./routes.js");

app.use(express.static("public"));

app.use(express.urlencoded({"extended": true}));

app.use(routes);

app.engine("handlebars", handlebars.engine({"defaultLayout": "main"}));

app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
});