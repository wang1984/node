const express=require('express');
const cookieParser=require('cookie-parser');

var server=express();

 

server.use(cookieParser('wesdfw4r34tf')); //读取cookie时候需要带入签名

server.use('/', function (req, res){
  res.secret='wesdfw4r34tf'; //设置cookie签名
  res.cookie('user', 'blue', {signed: true});

  console.log('签名cookie：', req.signedCookies)
  console.log('无签名cookie：', req.cookies);

  res.send('ok');
});

server.listen(8080);
