var express = require('express');
var client = require('../db/postgreSQL');
var operateSQL = require('../db/operatePostgreSQL');
var uuid = require('node-uuid');
var router = express.Router();

router.get("/person",function(req,res,next){
  console.log("add page");
  var id = uuid.v1();
  res.render('add',{id:id});
});

router.post('/person',function(req,res,next){
  console.log("add person");
  console.log(req.body);
  var id = req.body.id;
  if(req.body.sex=='male'){
    var sex = '男';
  }else{
    var sex = '女';
  };
  var person = {
    name : req.body.name,
    sex : sex,
    age : req.body.age
  };
  var value = [id,person];
  console.log(value);
  operateSQL.insertDb(client,'insert into personinfo(id,data) values($1::uuid,$2::json)',value);
  console.log("add ok");
  res.redirect('/v1/persons');
});

module.exports = router;
