
var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(4499);
const pg = require('pg');//PostgreSQL

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'hotgirls', //env var: PGDATABASE
  password: 'vovanphung', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);

/*app.get("/",function(req,res){
  res.render("trangchu");
});*/
app.get("/like/:id",function(req,res){ //nen thay post thanh get dung body-parser cho hay
  var id = req.params.id;
//ask for a client from the pool
 pool.connect(function(err, client, done) {
   if(err) {
     return console.error('error fetching client from pool', err);
   }

   //use the client for executing the query
   client.query('UPDATE "hotgirlscollection" SET "Like" = "Like"+1 WHERE "Id"=' + id ,  function(err, result) {
     //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
     done(err);

     if(err) {
       return console.error('error running query', err);
     }
     ////UPDATE XONG MOI SELECT  Cai pool SELECT nam o day
     console.log("Cap nhat LIKE thanh cong!" );
    res.send("CAP NHAt LIKE THANH CONG");
   });
 });
});

app.get("/Dislike/:id",function(req,res){
  var id = req.params.id;
//ask for a client from the pool
 pool.connect(function(err, client, done) {
   if(err) {
     return console.error('error fetching client from pool', err);
   }

   //use the client for executing the query
   client.query('UPDATE "hotgirlscollection" SET "Dislike" = "Dislike"+1 WHERE "Id"=' + id ,  function(err, result) {
     //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
     done(err);

     if(err) {
       return console.error('error running query', err);
     }
      ////UPDATE XONG MOI SELECT  Cai pool SELECT nam o day
     console.log("Cap nhat UNLIKE thanh cong!" );
     res.Send("CAP NHAT DISLIKE THANH CONG");
   });
 });
});

app.get("/hotgirls/:id",function(req,res){////nen thay post thanh get dung body-parser cho hay
  var id = req.params.id;

  //ask for a client from the pool
 pool.connect(function(err, client, done) {
   if(err) {
     return console.error('error fetching client from pool', err);
   }

   //use the client for executing the query
   client.query('SELECT * FROM "hotgirlscollection" WHERE "Id"=' + id ,  function(err, result) {
     //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
     done(err);

     if(err) {
       return console.error('error running query', err);
     }
     console.log(result.rows[0].Hinh);//cot Hinh
     res.render("trangchu",{dangxem:id,hinh:result.rows[0].Hinh});
     //output: 1
   });
 });

});
/*
//xu ly  nut sau = max
const pool2 = new pg.Pool(config);

SELECT COUNT(*) AS MAX_COUNT FROM hotgirlscollection;

check dieu kien */
