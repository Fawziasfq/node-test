var http = require('http');
var queryString = require('quireystring');

http.createServer(function (req,res){
  var postData = '';
  req.setEncoding('utf8');
  
  req.on('data',function(chunk){
    postData +=chunk;
  });
  
  req.on('end',function(){
    res.end(postData);
  });
}).listen(8080);
console.log('服务器启动完成');