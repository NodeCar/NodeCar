/**
 * Created by DHC on 2015/7/13.
 */

var io = require('socket.io-client');

var client = io.connect('http://127.0.0.1:3000', {
  transports: ['websocket']
});

client.on('connect', function(data){
  client.emit('test', 'hehe');
});
