var express = require('express');
var app = express();
var mysql = require('mysql');

//npm install mysql 安装mysql

var db = require('./config/db.js');

app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
      res.send(200);  //让options尝试请求快速结束
  else
      next();
})

// 查询用户
app.get('/userList', function (req, res) {
  //  var db = getDb();
  db.query('SELECT * FROM user', null, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    res.send({
      msg:'获取user信息',
      code:200,
      data:result
    });
  });
});



var server = app.listen(3000, function () {
  console.log("run......");
});