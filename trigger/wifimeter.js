/**
 * Created by DHC on 2015-08-16.
 */

module.exports = function (socket) {
    setInterval(function () {
        socket.emit('wifimeter', Math.floor(Math.random() * 100));
    }, 1000);
};