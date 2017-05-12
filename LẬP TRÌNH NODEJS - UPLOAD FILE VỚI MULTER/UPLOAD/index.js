
var express = require('express')
var app = express()
var multer  = require('multer')
app.set('view engine','ejs')
app.set('views','./views')
app.listen(process.env.PORT ||4499,function(){
   console.log("ket noi thanh cong")
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )//ten file giong file up
  }
})

var upload = multer({ storage: storage })
app.post('/upload', upload.single('file'), function (req, res,next) {//up 1 file
  console.log(req.file)
  res.send('upload thanh cong')
})

app.get('/',function(req,res){
  res.render('upfile')
});
