var express = require('express');
var client = require('../db/postgreSQL');
var operateSQL = require('../db/operatePostgreSQL');
var router = express.Router();

router.get('/person/:id',function(req,res,next){
  console.log("update page");
  var id = req.params.id;
  id = id.toString();
  console.log(id);
  operateSQL.selectDbById(client,[id],function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result.rows[0].data);
      if(result.rows[0].data.sex=='女'){
        var sex = 'female';
      }else{
        var sex = 'male';
      }
      console.log(sex);
      res.render('update',{
        id : id,
        name : result.rows[0].data.name,
        sex : sex,
        age : result.rows[0].data.age
      });
    }
  })
});
router.post('/person/:id',function(req,res,next){
  console.log("update");
  var id = req.body.id;
  id = id.toString();
  if(req.body.sex=='female'){
    var sex = '女';
  }else{
    var sex = '男';
  };
  var data = {
    name : req.body.name,
    sex : sex,
    age : req.body.age
  };
  operateSQL.updateById(client,[id],data,function(err,result){
    console.log(result);
  })

  res.redirect('/v1/persons');
})



module.exports = router;
