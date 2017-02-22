var winstonLogger = require('./winstonLogger.js');

var logger = winstonLogger.getLogger();

var http = require('http');

var server = http.createServer();
var port = 30012;

//https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback
server.listen(port, function(){
	logger.info("port [" + port + "] webserver start");
});

//https://nodejs.org/api/net.html#net_class_net_socket
server.on('connection', function(socket){
	//socket : { port: 12346, family: 'IPv4', address: '127.0.0.1' }
	var addr = socket.address();
	logger.info("Client address [" + addr.address + "]" + ", port[" + addr.port + "]");
});

//https://nodejs.org/api/http.html#http_class_http_serverresponse
server.on('request', function(req, res){
	logger.info("client request on");
//	console.dir(req);
//	logger.debug(req);
	
	//response.writeHead(statusCode[, statusMessage][, headers])
//	res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    logger.info("client request end");
});

server.on('close', function(){
	logger.info("port [" + port + "] webserver close");
});