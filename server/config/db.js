
var mysql = require('mysql');
// 创建 连接数据库 并且导出为 connection
module.exports = connection = mysql.createConnection({
    host:'localhost',
    user:'root',  //用户名
    password:'root',   //密码
    database:'test',
    port:'3306'     //端口号
});
connection.connect(function(err){
    if(err){
      console.log('---:'+err);
      return;
    }
    console.log('--------------');
    console.log('数据库登录成功-');
    console.log('--------------');
});
