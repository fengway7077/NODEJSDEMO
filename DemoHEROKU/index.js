var express = require('express')
var app = express()
app.set('view engine','ejs')
app.set('views','./views')
app.listen(process.env.PORT || 4499);

app.get('/',function(req,res){
  res.render('trangchu')
});
