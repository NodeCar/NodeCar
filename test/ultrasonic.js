var serialport = require('serialport');
var util = require('util');
var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyAMA0", {
  baudrate: 9600,
  parser: serialport.parsers.raw
});
serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received');
    console.log(data.readUInt16BE(0)/10);  
  });
  setInterval(function(){
    var data = new Buffer(1);
    data.writeUInt8(0x55, 0);
    serialPort.write(data);
  }, 500);
});
