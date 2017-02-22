/**
 * MIME TYPE(Multipurpose Internet Mail Extensions)
 * Content Type 값			: 설명
 * text/plain				: 일반 text 
 * text/html				: HTML 
 * text/css					: CSS
 * text/xml					: XML
 * image/jpeg, image/png	: JPEG, PNG 
 * video/mpeeg, audio/mp3	: MPEG video, mp3 
 * application/zip 			: ZIP 
 */
var logger = require('./winstonLogger.js').getLogger();
var server = require('http').createServer();
var fs = require('fs');
var port = 30012;

server.listen(port, function(){
	logger.info("port [" + port + "] webserver start");
});

server.on('connection', function(socket){
	var addr = socket.address();
	logger.info("Client address [" + addr.address + "]" + ", port[" + addr.port + "]");
});

server.on('request', function(req, res){
	logger.info("client request on");
	var filePath = "./image/";
	var filename = filePath + "1487764445_cat_laptop.png";	

	fs.readFile(filename, function(err, data) {
		res.writeHead(200, {'Content-Type': "image/png"});
		res.write(data);
		res.end();
	})
	
    logger.info("client request end");
});

server.on('close', function(){
	logger.info("port [" + port + "] webserver close");
});