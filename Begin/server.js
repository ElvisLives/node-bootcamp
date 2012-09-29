var http = require("http");  // require a library

var server = function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"})
	res.end();
};

http.createServer(server).listen(8888);

