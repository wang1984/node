/**
 * Created by Danny on 2015/9/22 10:22.
 */
var express = require("express");
var app = express();
//app.set("views","aaaa");设置自己的文件夹而不用默认的views文件夹
//使用ejs不用require
//这句话就帮你require了
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("haha",{news:[]});
});

app.get("/check",function(req,res){
    res.send({
        "user" : "ok"
    });
});

app.listen(3000);