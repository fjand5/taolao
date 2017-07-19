var http = require("http");
 console.log("khoi dong xong");
 http.createServer(function(req,res){
 	console.log("xin chao");
  console.log(process.env.PORT);
 }).listen(process.env.PORT);
http.get("/",function(req,res){
res.end("tao lao het suc");
});
