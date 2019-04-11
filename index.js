const express = require('express');
const path = require('path');

//add task-router file
const Task = require('./modules/task/router.js');

//add body-parser
var bodyParser = require('body-parser');

//add db-connection file
require('./config/db_connect.js');

const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public'));
});

//use body-parser for json and urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//use Router
app.use('/task', Task);              // localhost:3000/task

//set port
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.log('Error:' + err);
    }
    console.log(`app listenig on port: ${PORT}`);
});