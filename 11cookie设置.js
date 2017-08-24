const express=require('express');

var server=express();

//cookie
server.use('/aaa/a.html', function (req, res){
  // 往前台设置cookie 是res 的工作	
  res.cookie('user', 'blue', {path: '/aaa', maxAge: 30*24*3600*1000});
  // cookie名 cookie值  cookie选项  路径（在哪个目录下可以访问到该cookie） 过期时间毫秒为单位    
  res.send('ok');
});

server.listen(8080);
