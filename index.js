var http = require("http");
 console.log("khoi dong xong");
 http.createServer(function(req,res){
 	console.log("xin chao");
  res.end("tao lao het suc");
 }).listen(process.env.PORT);

