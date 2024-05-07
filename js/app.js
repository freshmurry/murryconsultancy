// var	express = require('express'),
// 		app 		= express.createServer(),
// 		sio 		= require('socket.io'),
// 		redis 	= require("redis"),
//     client 	= redis.createClient(),
// 		io			= null;

// /**
//  *	Used to parse cookie
//  */
// function parse_cookies(_cookies) {
// 	var cookies = {};

// 	_cookies && _cookies.split(';').forEach(function( cookie ) {
// 		var parts = cookie.split('=');
// 		cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
// 	});

// 	return cookies;
// }
	
// app.listen(3000, "localhost");
// io = sio.listen(app);

// io.configure(function () {
//   function auth (data, fn) {
//   	var cookies = parse_cookies(data.headers.cookie);
//   	console.log('PHPSESSID: ' + cookies.PHPSESSID);
  	
// 		client.sismember('sid', cookies.PHPSESSID, function (err , reply) {
// 			fn(null, reply);	
// 		});
//   };

//   io.set('authorization', auth);
// });

// io.sockets.on('connection', function (socket) {
//   socket.emit('access', 'granted');
// });