var i2c = require('i2c');
var util = require('util');
var address = 8;
var wire = new i2c(address, {device: '/dev/i2c-1'});

wire.scan(function(err, data) {
  if(err) {
    console.error(err);
  }
  else {
    console.log(data);
  }
});

wire.readBytes(0, 2, function(err, res) {
  if(err) {
    console.error(err);
  }
  else {
    console.log(res);
    console.log(res.readUInt16BE(0));
  }
});
