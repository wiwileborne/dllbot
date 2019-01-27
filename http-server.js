//https://stackoverflow.com/questions/34808925/express-and-websocket-listening-on-the-same-port
//Express app
let express = require('express');
let app = express();

//Make /public/client.js avalible
app.use(express.static("public"))
//Render the html 
app.get('/', function(req, res) {
     res.sendFile(__dirname + "/views/logs.html");
});
//Export this so we can access from aonther file
module.exports = app;

// There is NO app.listen() in this file.
