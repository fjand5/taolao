var http = require("http");
console.log("khoi dong xon");
http.createServer(function(req,res){
	console.log("xin chao");
}).listen(process.env.PORT || 80);
