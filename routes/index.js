var express = require('express');
var client = require('../db/postgreSQL');
var operateSQL = require('../db/operatePostgreSQL');
var uuid = require('node-uuid');
var router = express.Router();

/* GET home page. */
router.get('/persons', function(req, res, next) {
  // var person = {
  //   name : 'Test',
  //   sex : "女",
  //   age :　20
  // };
  // var id = uuid.v1();
  // var value = [id,person];
  // console.log(value);
  // operateSQL.insertDb(client,'insert into personinfo(id,data) values($1::uuid,$2::json)',value);

  // operateSQL.deleteById(client,["d87acd80-a137-11e8-b412-675f6ded697f"],function(err,result){
  //   console.log(result);
  // })
  // var data={
  //   name : 'demo',
  //   sex : "女",
  //   age : 18
  // }
  // operateSQL.updateById(client,["caac38f0-a1bf-11e8-8e37-fb42642234c3"],data,function(err,result){
  //   console.log(result);
  // })
  var jsonResult = [];
  operateSQL.selectAllDb(client,function(err,result){
    // console.log(result);
    for(let i=0;i<result.rows.length;i++){
      console.log("data:",result.rows[i]);
    }
    res.render('index',{items:result.rows});
  });


});

module.exports = router;
