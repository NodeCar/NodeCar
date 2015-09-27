/**
 * Created by DHC on 2015-08-16.
 */

module.exports = function (socket) {
    setInterval(function () {
        socket.emit('speedometer', Math.floor(Math.random() * 20));
    }, 1000);
};