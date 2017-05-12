
var express = require("express");
var app = express();//goi bien app
var server = require("http").createServer(app);
// if lam socket.io thi require nodeName
server.listen(4499);

app.get("/", function(req,res){   //route1
	//res.send("<font color = red >HELLO WORLD </font>");//send  chuoi
	res.sendFile(__dirname + "/index.html");
});
////
app.get("/gioithieu.aspx", function(req,res){  ////routing
	////res.sendFile(__dirname + "/gioithieu.aspx");
	res.send("I'm GIOITHIEU.ASPX");
});

app.get("/tinhtong/:so1/:so2", function(req,res){   //route 3
	var n = req.params.so1;
	n = parseInt(n);
	var m = req.params.so2;
	m = parseInt(m);
	var tong = m + n;
	res.send("<h1>  " + tong + "</h1>");
});