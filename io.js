var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var sock = require('socket.io');

app.get('/', function(req,res) {
	res.sendFile(__dirname+'/pub/index.html');
});

var server = app.listen(port, function() {
	console.log("listening.....");
});

var io = sock(server);

io.on('connection', function(socket) {
	   console.log("socket.io connected.."+socket.id);

	   socket.on('chat', function(data) {
	   io.emit('chat',data);
		console.log(socket.id);
	   });

	   socket.on('type', function(data) {
	   socket.broadcast.emit('type',data);
	   });
});
