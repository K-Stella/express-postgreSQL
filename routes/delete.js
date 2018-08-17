var express = require('express');
var client = require('../db/postgreSQL');
var operateSQL = require('../db/operatePostgreSQL');
var router = express.Router();

router.delete('/person',function(req,res,next){
  console.log("del");
  var id = req.query.id;
  console.log("id:"+id);
  id = id.toString();
  operateSQL.deleteById(client,[id],function(err,result){
    console.log(result);
    res.json({code:200,msg:'del ok.'});
  });
});
module.exports = router;
