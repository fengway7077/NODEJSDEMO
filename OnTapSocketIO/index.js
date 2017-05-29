var express = require("express");
var app = express();
app.use(express.static("public"));//mac dinh vao public tim duong dan
app.set("view engine","ejs");
app.set("views","./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(process.env.PORT || 3000);

var mangUserOnline = [];//mang rong

io.on("connection",function(socket){
  console.log("Co nguoi vua ket noi,socket id : " + socket.id);
  socket.on("client_gui_username",function(data){
    console.log("Co nguoi dang ky username la : " + data);

    if(mangUserOnline.indexOf(data)>=0){
      socket.emit("server-send-dangky-thatbai", data);
      console.log(" dang ky  that bai :" + data)  ;
    }else{
      mangUserOnline.push(data);//thanh cong
      socket.Username = data ;
      console.log("dang ky thanh cong : " + data)  ;
    /////  io.sockets.emit("server-send-dangky-thanhcong" + data );
        io.sockets.emit("server-send-dangky-thanhcong" ,{username:data, id:socket.id});
    }
  });
  //chat
  socket.on("client_gui_message",function(data) {
     io.sockets.emit("server_gui_message",{Username:socket.Username, msg:data});
      console.log("gui thanh cong : " + data);
  })
  ////
  //xu ly click user
  socket.on("user-chocgheo-socketid-khac",function(data){
    io.to(data).emit("server_xuly_chocgheo", socket.Username); //gui den 1 user
  });
  ////
});

app.get("/",function(req,res){
  res.render("trangchu");
});
