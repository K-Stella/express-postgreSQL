var express = require('express');
var client = require('./postgreSQL');

client.connect(function(error,result){
  if(error){
    console.log('PostgreSQL connect error:'+error.message);
    return;
  }else{
    console.log('PostgreSQL connect success...');
  }
});

/*
 *  插入数据
 *  @client 连接数据库
 *  @commandString 操作语句
 *  @value 插入的数据
 */
function insertDb(client,commandString,values){
  client.query(commandString,values,function(err,result){
    if(err){
      console.log("client error:"+err.message);
      return;
    }else{
      console.log("insert success");
    }
  })
};

/*
 *  查询所有数据
 *  @client 连接数据库
 *  @callback 为了将结果回调出去
 */
 function selectAllDb(client,callback){
   client.query("select * from personinfo",function(err,result){
     if(err){
       console.log("client error:"+err.message);
       callback(err,null);
       return;
     }else{
       console.log("select all");
       // console.log(result);
       // for(let i=0;i<result.rows.length;i++){
       //   console.log("data:",result.rows[i].data);
       // }
       callback(null,result);
     }
   })
 };

 /*
  *  根据id删除数据
  *  @client 连接数据库
  *  @callback 为了将结果回调出去
  */
 function deleteById(client,id,callback){
   client.query("delete from personinfo where id=$1",id,function(err,result){
     if(err){
       console.log("del error:"+err.message);
       callback(err,null);
       return;
     }else{
       console.log("del ok");
       callback(null,result);
     }
   });
 };


function updateById(client,id,data,callback){
  console.log(id);
  console.log(data);
  id = id.toString(); // 若不转换为string则会报uuid格式错误
  client.query("update personinfo set data=$1 where id=$2",[data,id],function(err,result){

    if(err){
      console.log("update error:"+err.message);
      callback(err,null);
      return;
    }else{
      console.log("update ok");
      callback(null,result);
    }
  })
}

module.exports = {
  insertDb,
  selectAllDb,
  deleteById,
  updateById
};
