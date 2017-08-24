const http=require('http');
const querystring=require('querystring');

http.createServer(function (req, res){
  //POST——req

  var str='';   //接收数据

  //data——有一段数据到达(这个data事件会触发很多次)
  var i=0;
  req.on('data', function (data){
    console.log(`第${i++}次收到数据`);
    str+=data;
  });
  //end——数据全部到达(end事件只会发生一次)
  req.on('end', function (){
    //post 提交数据是这样的形式 user=xxxx&pass=123456
    //所以使用 querystring.parse(str) 就可以搞定
    var POST=querystring.parse(str); 
    console.log(POST);
  });
}).listen(8080);
