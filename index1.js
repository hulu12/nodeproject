/**
 * http server first
 * 		
 */
var http = require('http');
var assert=require('assert');


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello Pang\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
console.log(__filename);
console.log(__dirname);

console.error('error pang');

console.log(process.env.port);
//process.exit(1);

setTimeout(function(err, d) {
	console.log('hello pang set timeout');
},3000);

console.log('hello pang ye xing');