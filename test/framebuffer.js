/**
 * Created by dhc on 2015/9/27.
 */

"use strict";

var pngtolcd = require('png-to-lcd');
var Framebuffer = require('framebuffer');
var mmap = require('mmap-io');

var fb = new Framebuffer('/dev/fb0');
console.log(fb.toString());

pngtolcd(__dirname + '/../resource/logo.png', function (err, buffer) {
    if (err) console.log(err);
    else {
        fb.fbp.write(buffer);
    }
});