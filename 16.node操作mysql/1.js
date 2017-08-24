const mysql=require('mysql');

//1.连接
//createConnection(哪台服务器, 用户名, 密码, 库)
var db=mysql.createConnection({host: 'localhost', user: 'root', password: 'root', database: 'zhongkejianye'});

//2.查询
//query(查询语句, 回调函数处理返回的数据)
db.query("SELECT * FROM `zk_news_sort`;", (err, data)=>{
  if(err)
    console.log('出错了', err);
  else
    console.log('成功了');
    console.log(JSON.stringify(data));
});
