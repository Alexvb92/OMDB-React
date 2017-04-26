var path = require("path");
var express = require("express");

// Intialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// index route
app.get("/", function(req, res) {
  res.sendFile('./public/index.html');
});

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
