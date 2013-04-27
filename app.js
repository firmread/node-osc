var io = require('socket.io').listen(14622),
osc = require('node-osc'),
util = require('util');

var client = new osc.Client('localhost', 4343);

io.sockets.on('connection', function(socket) {
	util.log('Say hello to' + socket.id);
	client.send('/oscAddress', 'fucku uuuuuuu');
});