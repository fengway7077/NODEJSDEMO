
var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/json"});
	
	var obj = {
		ho : "VAN",
		ten : "DIEM",
		namsinh : 1988
	};
	res.end(JSON.stringify(obj));//bien obj ve json
	
}).listen(1234);// localhost 1234