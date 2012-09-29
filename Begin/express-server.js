var http = require("http"); // require a library
var express = require('express');
var app = express()
var pubName = __dirname = '/public';

app.use(express.static(pubName));

app.get('/', function(req, res){
	res.send("Hello world!");
})

app.listen(8888);

