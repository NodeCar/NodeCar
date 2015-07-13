/**
 * Created by DHC on 2015/7/13.
 */

var io = require('socket.io')();
var config = require('./config.json');
var event = require('./event');
var trigger = require('./trigger');

io.on('connect', function(socket){
  event(socket);
  trigger(socket);
});
io.listen(config.port);

console.log('Server listen on port: ' + config.port);