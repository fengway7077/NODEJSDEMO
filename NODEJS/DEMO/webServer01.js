

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("KhoaPham.<u>vn</u>");
}).listen(8888);
