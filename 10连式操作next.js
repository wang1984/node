const express=require('express');

var server=express();
server.listen(8080);

server.use('/', function (req, res, next){
  console.log('a');
  next();
});

server.use('/', function (req, res, next){
  console.log('b');
});
