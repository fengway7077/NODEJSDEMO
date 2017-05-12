
////console.log("HELLO NODEJS");
var express = require("express");//goi express
var app = express();
app.listen(process.env.PORT ||4499);

var bodyParser = require('body-parser');//goi thu vien
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//cau hinh EJS Template
app.set("view engine","ejs");
app.set("views","./views");//thuc muc,

app.get("/ejsdemo",function(req,res){
  res.render("ejsdemo"); //ejsdemo.ejs
});
//truyen tham so cho trang .ejs
app.get("/chitiet",function(req,res){
  res.render("chitiet",{hoten :"ten ABC"});//Json-key:value//
});
app.get("/namsinh",function(req,res){
  res.render("namsinh",{sinhnam :1988});//Json-(key:value)//
});
//truyen mang cho trang .ejs
app.get("/nam",function(req,res){
  res.render("nam",{years :[1988,1999,2000,2017]});//Json-(key:value)//mang
});
//http://localhost:4499/hello
app.get("/hello",function(req,res){
  //res.send("<font color = red>HELLO nodeijs</font>");
  res.send("<font color = red>GETTING nodeijs</font>");
});
/*
app.post("/hello",function(req,res){
 res.send("<font color = blue>POSTING nodeijs</font>");
});  //postman de test
*/
app.get("/tintuc/:id",function(req,res){
  var i = req.params.id;
  res.send("Server nahn duoc id =" + i);
});
//username,password
app.post("/hello",urlencodedParser,function(req,res){
  var u = req.body.username;
  var p = req.body.password
 res.send("username : " + u + "  password : "+ p);
});  //dung postman de test
