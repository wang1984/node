const express=require('express');
const querystring=require('querystring');
const bodyParser=require('body-parser');

var server=express();
server.listen(8080);

 
server.use(function (req, res, next){
  var str='';
  req.on('data', function (data){
    str+=data;
  });
  req.on('end', function (){
    req.body=querystring.parse(str);
             //将字符串格式化为json
    next();
  });

  ////////////////////
  ///注意这里的req.body在下面也是可以获取到的
  ////////////////////
});
//这就是 bodyParser 的源码

//bodyParser 与  req.on end req.on data 的作用是一样的
 
//server.use(bodyParser.urlencoded({}));

server.use('/', function (req, res){
  console.log(req.body);
});
