var http = require("http");
 console.log("khoi dong xong");
 http.createServer(function(req,res){
 	console.log("xin chao");
  console.log(req);
 }).listen(process.env.PORT || 80);
