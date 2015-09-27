/**
 * Created by DHC on 2015/7/13.
 */

var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var triggers = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    var name = path.basename(file, '.js');
    triggers[name] = require(path.resolve(__dirname, file));
  });

module.exports = function(socket) {
  Object.keys(triggers).map(function (key) {
    triggers[key](socket);
    console.log('Trigger ' + key + ' initialized');
  });
  socket.on('disconnect', function () {
    console.log('Trigger stopped');
  });
};