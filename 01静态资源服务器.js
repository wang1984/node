const http=require('http');
const fs=require('fs');

var server=http.createServer(function (req, res){
  //req.url=>'/index.html'
  //读取=>'./www/index.html'
  //  './www'+req.url
  var file_name='./www'+req.url;

  fs.readFile(file_name, function (err, data){
    if(err){
      res.write('404');
    }else{
      res.write(data);//这个data是一个二进制数据如果要打印出来用tostring（），
      //如果给浏览器使用就不需要做任何操作 机器对机器
    }
    res.end();
  });
});

server.listen(8080);
