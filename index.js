const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

app.use(express.static('client'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/login.html');
});

app.get('/Chat', function(req, res){
    res.sendFile(__dirname + '/client/Chat.html');
})

server.listen(3000, function(){
    console.log('listening on *:3000');
});


// websocket implementation
io.on('connection', function(socket){
    console.log('someone connected');
})