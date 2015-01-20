/**
 * http server first
 * 		
 */
var http = require('http');
var assert=require('assert');
var fs=require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
x = 5;
setTimeout(function () {
  debugger;
  console.log("world");
}, 1000);
console.log(process.argv[2]);
console.log(Number(process.argv[3]));

module.exports.hello=function(){
	console.log('hello pang 123');
};

var i = 0;

function count() {
    return ++i;
}

module.exports.count = count();


/*
console.log(__filename);
console.log(__dirname);

console.error('error pang');

console.log(process.env.port);
//process.exit(1);

setTimeout(function(err, d) {
	console.log('hello pang set timeout');
},3000);

console.log('hello pang ye xing');
*/