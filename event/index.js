/**
 * Created by DHC on 2015/7/13.
 */

var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var events = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    var name = path.basename(file, '.js');
      events[name] = require(path.resolve(__dirname, file));
  });

module.exports = function(socket) {
  Object.keys(events).map(function (key) {
    events[key](socket);
    console.log('Event ' + key + 'initialized');
  });
};