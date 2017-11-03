var app = require('express')();
var sock = require('socket.io');
var port = process.env.PORT || 3000;

app.get('/', function(req,res) {
	res.sendFile(__dirname+'/pub/room.html');
});

var server = app.listen(port, function() {
	console.log("listening.....");
});

var io = sock(server);
