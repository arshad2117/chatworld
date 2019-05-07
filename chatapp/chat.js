var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/',function(req,res){
	res.sendFile(__dirname+"/fend.html");
});

io.on('connection',function(socket){
	console.log('A user was connected');
	socket.on('sent',function(user,messg){
		console.log("A message was received");
		io.emit('gotmsg',user,messg);
	});
});

http.listen(4000, function(){
	console.log("SERVER IS RUNNING");	
});
    
