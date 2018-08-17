var express = require('express');
var pg = require('pg');
// 连接数据库
// tcp://用户名:密码@localhost/数据库
var config = "tcp://postgres:root@localhost/test"
var client = new pg.Client(config);

// client.connect(function(error,result){
//   if(error){
//     console.log('PostgreSQL connect error:'+error.message);
//     return;
//   }else{
//     console.log('PostgreSQL connect success...');
//   }
// });

// 模拟数据
// var uuid = require('node-uuid');
// var person = {
//   name : 'Stella',
//   sex : "女",
//   age :　20
// };
// var id = uuid.v1();
// client.query("insert into personinfo(id,data) values($1::uuid,$2::json)",[id,person]).then(res=>{
//   console.log("insert success");
// })

module.exports = client;
