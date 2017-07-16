var express = require("express");
var app = express();
app.use(express.static("public"));
app.listen(process.env.PORT ||4499);
//cau hinh EJS Template
app.set("view engine","ejs");
app.set("views","./views");//thuc muc,
//
var request = require("request");
var cheerio = require("cheerio");

app.get("/",function(req,res){
  request("http://vnexpress.net",function(error,response,body){
    if(error){
      console.log(error);
      res.render("trangchu",{html: "Co loi xay ra"});
    }else{
    //  console.log(body);
     $ = cheerio.load(body);
    // var ds = $(body).find("a.txt_link");//the a class ten txt_link//// tim theo id thi #,tim class thi dau .
       var ds = $(body).find("div.title_news");
    ////  console.log(ds);
      ds.each(function(i,e) {
      // console.log($(this).text());//noi dung the
        console.log(e["attribs"]["a"]);//thuoc tinh the

      })
      res.render("trangchu",{html: body}); //trangchu.ejs//khi lay body thanh cong
    }
  });

});
