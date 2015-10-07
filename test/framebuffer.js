/**
 * Created by dhc on 2015/9/27.
 */

"use strict";

var img2rgb = require('img2rgb');
var Framebuffer = require('framebuffer');

var fb = new Framebuffer('/dev/fb1');
console.log(fb.toString());

img2rgb(__dirname + '/../resource/logo.png', 'rgb565', function(err, result) {
        if(err) console.log(err);
        else {
                console.log(result.length);
		console.log(fb.fbp.length);
        	result.copy(fb.fbp);
        }
});
