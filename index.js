var http = require("http");
 console.log("khoi dong xong");
 http.createServer(function(req,res){
 	console.log("xin chao");
  console.log(process.env.PORT);
  res.end("tao lao het suc");
 }).listen(process.env.PORT);

