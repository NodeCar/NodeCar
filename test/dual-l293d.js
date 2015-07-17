var i2c = require('i2c');
var util = require('util');
var address = 10;
var wire = new i2c(address, {device: '/dev/i2c-1'});

var FORWARD = 1;
var BACKWARD = 2;
var RELEASE = 4; 

wire.scan(function(err, data) {
  if(err) {
    console.error(err);
  }
  else {
    console.log(data);
  }
});

var data = new Buffer(3);
data.writeUInt8(FORWARD, 0);
data.writeUInt16BE(100, 1);

wire.writeBytes(0, data, function(err) {
  if(err) {
    console.error(err);
  }
});
