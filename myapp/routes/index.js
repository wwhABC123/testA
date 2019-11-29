var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aaa',function(req,res,next){
  res.render('aaa');
  MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
    if(err) throw err;
    console.log("数据库已创建！");
    var dbase = db.db("runoob");
    dbase.createCollection('site', function (err, re) {
        if (err) throw err;
        console.log("创建集合!");
    });
  })
})

module.exports = router;
