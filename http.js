// 一.创建一个服务器
// 要求： 1.用到switch语句来处理请求
// 2.最少三个页面(不算报错页面)，这三个页面间可以相互跳转
// 3.某一个页面上必须有图片，外部的css和js代码
// 4.如果输入的请求没有定义，发送一个报错页面


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    var url = req.url;
    switch (url) {
        case "/index.html":
            fs.readFile("index.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/log.html":
            fs.readFile("log.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/css":
            fs.readFile("index.css","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/css;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/index.js":
            fs.readFile("index.js","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/javascript;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/img.html":
            fs.readFile("img.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/a.jpg":
            fs.readFile("a.jpg",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    console.log(data);
                    res.writeHead(200,{"content-type": "image/jpeg;charset=utf8"});
                    res.end(data)
                }
            });
            break;
        default:
            res.end("404 Not Found")
    }
}).listen(3000);
